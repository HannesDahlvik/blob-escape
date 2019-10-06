class Menu extends Phaser.Scene {
    constructor() {
        super({
            key: 'Menu'
        });
    }

    preload() {
        this.load.image('bg', 'assets/images/space.jpg');
        this.load.image('MenuBg', 'assets/images/MenuBg.png');
        this.load.image('star', 'assets/images/star.png');
        this.load.image('danger', 'assets/images/danger.png');
        this.load.image('door', 'assets/images/door.png');

        this.load.spritesheet('player', 'assets/images/blob.png', {
            frameWidth: 32,
            frameHeight: 32
        });

        this.load.image('tiles', 'assets/textures/tiles.png');

        // AUDIO
        this.load.audio('coin', 'assets/sounds/coin.wav');
        this.load.audio('hit', 'assets/sounds/hit.wav');
        this.load.audio('jump', 'assets/sounds/jump.wav');
        this.load.audio('nextlevel', 'assets/sounds/nextlevel.wav');
    }

    create() {


        this.add.image(400, 300, 'MenuBg');

        this.add.text(200, 140, 'Blob escape', {
            fontSize: '64px',
            fontFamily: 'Arial Black'
        });

        let playGame = this.add.text(345, 240, 'Play', {
            fontSize: '32px',
            fontFamily: 'Arial',
            backgroundColor: 'white',
            fill: 'black',
            padding: {
                top: 10,
                bottom: 10,
                left: 25,
                right: 25
            }
        });
        playGame.setInteractive();
        playGame.on('pointerdown', () => {
            this.scene.start('level1');
            gameState.score = 0;
            gameState.deaths = 0;
        });

        this.add.text(260, 320, 'Your objective is to collect as many stars as possible and get trough to the next room and escape', {
            fontFamily: 'Arial',
            fontSize: '24px',
            width: 600,
            align: 'center',
            wordWrap: {
                width: 300,
                callback: null,
                callbackScope: null,
                useAdvancedWrap: false
            },
        });
    }
}