class level5 extends Phaser.Scene {
    constructor() {
        super({
            key: 'level5'
        })
    }

    preload() {
        this.load.tilemapTiledJSON('map5', 'assets/levels/level5.json');
    }

    create() {
        this.bgi = this.add.tileSprite(0, 0, 2048, 2048, 'bg').setScrollFactor(0);

        // MAP
        const map = this.make.tilemap({
            key: 'map5'
        });

        const tileset = map.addTilesetImage('tiles', 'tiles');
        const platforms = map.createStaticLayer('Platforms', tileset, 0, 0);
        platforms.setCollisionByExclusion(-1, true);

        // STARS
        this.stars = this.physics.add.group({
            allowGravity: false,
            immovable: true
        });
        const starObjects = map.getObjectLayer('Stars')['objects'];
        starObjects.forEach(starObjects => {
            const star = this.stars.create(starObjects.x, starObjects.y - starObjects.height, 'star').setOrigin(0, 0).setSize(26, 26).setOffset(11, 11);
        });

        // DANGER
        this.dangers = this.physics.add.group({
            allowGravity: false,
            immovable: true
        });
        const dangerObjects = map.getObjectLayer('Danger')['objects'];
        dangerObjects.forEach(dangerObjects => {
            const danger = this.dangers.create(dangerObjects.x, dangerObjects.y - dangerObjects.height, 'danger').setOrigin(0, 0).setSize(48, 48);
        });

        // SCORETEXT
        this.scoreText = new ScoreText({
            scene: this
        });

        // DEATHTEXT
        this.deathsText = new DeathsText({
            scene: this
        })

        // PORTAL
        this.door = new Door({
            scene: this,
            x: 1655,
            y: 780,
        })

        // PLAYER
        this.player = new Player({
            scene: this,
            x: 120,
            y: 0
        });
        this.physics.add.collider(this.player, platforms);
        this.physics.add.overlap(this.player, this.stars, collectStar, null, this);
        this.physics.add.collider(this.player, this.dangers, playerHit, null, this);
        this.physics.add.overlap(this.player, this.door, nextLevel, null, this);

        // CAMERA
        this.physics.world.bounds.width = platforms.width;
        this.physics.world.bounds.height = platforms.height;

        this.cameras.main.setBounds(0, 0, map.widthInPixels, map.heightInPixels);
        this.cameras.main.startFollow(this.player);
        this.cameras.main.setZoom(1.2);

        // FUNCTIONS
        function collectStar(player, star) {
            star.disableBody(true, true);
            gameState.score += 1;
            this.scoreText.setText('Stars: ' + gameState.score);
            this.sound.play('coin');
        }

        function playerHit() {
            this.player.setVelocity(0, 0);
            this.player.setX(120);
            this.player.setY(0);
            this.player.setAlpha(0);
            let tw = this.tweens.add({
                targets: this.player,
                alpha: 1,
                duration: 100,
                ease: 'Linear',
                repeat: 5,
            });
            this.sound.play('hit');
            gameState.deaths += 1;
            this.deathsText.setText('Deaths: ' + gameState.deaths);
        }

        function nextLevel() {
            if (gameState.score < 20) {
                this.scene.start('LoseMenu');
            }
            this.sound.play('nextlevel');
            this.scene.start('End');
        }
    }

    update() {
        this.bgi.tilePositionX = this.cameras.main.scrollX * .3;
    }
}