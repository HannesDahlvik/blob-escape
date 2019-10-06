class Player extends Phaser.Physics.Arcade.Sprite {
    constructor(config) {
        super(config.scene, config.x, config.y, 'player');
        config.scene.physics.add.existing(this);
        config.scene.add.existing(this);
        this.setBounce(0.1);
        this.cursors = config.scene.input.keyboard.createCursorKeys();
        this.setScale(1.5);

        this.setCollideWorldBounds(true);

        this.jumpButtonWasDown = false;
        this.jumpCounter = 0;

        config.scene.anims.create({
            key: 'walk',
            frames: config.scene.anims.generateFrameNames('player', {
                start: 1,
                end: 1,
            }),
            frameRate: 20,
            repeat: -1
        });

        config.scene.anims.create({
            key: 'idle',
            frames: config.scene.anims.generateFrameNames('player', {
                start: 0,
                end: 0,
            }),
            frameRate: 20,
            repeat: -1
        });

        config.scene.anims.create({
            key: 'jump',
            frames: config.scene.anims.generateFrameNames('player', {
                start: 2,
                end: 2,
            }),
            frameRate: 20,
            repeat: -1,
        });
    }

    preUpdate() {
        if (this.cursors.left.isDown) {
            this.setVelocityX(-250);
            if (this.body.onFloor()) {
                this.play('walk', true);
            }
        } else if (this.cursors.right.isDown) {
            this.setVelocityX(250);
            if (this.body.onFloor()) {
                this.play('walk', true);
            }
        } else {
            this.setVelocityX(0);
            if (this.body.onFloor()) {
                this.play('idle', true);
            }
        }

        if (this.body.velocity.x > 0) {
            this.setFlipX(false);
        } else if (this.body.velocity.x < 0) {
            this.setFlipX(true);
        }

        if (this.body.onFloor() === true) {
            this.jumpCounter = 0;
        }

        if ((this.cursors.space.isDown || this.cursors.up.isDown) && (this.jumpCounter < 2) && (this.jumpButtonWasDown == false)) {
            this.setVelocityY(-350);
            this.scene.sound.play('jump');
            this.play('jump', true);
            this.jumpCounter++;
        }

        this.jumpButtonWasDown = this.cursors.space.isDown || this.cursors.up.isDown;
    }
}