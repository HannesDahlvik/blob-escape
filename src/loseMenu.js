class LoseMenu extends Phaser.Scene {
    constructor() {
        super({
            key: 'LoseMenu'
        });
    }

    create() {
        this.add.image(400, 300, 'MenuBg');

        this.add.text(170, 140, 'You didnt get enough stars!', {
            fontSize: '32px',
            fontFamily: 'Arial Black'
        });

        let playGame = this.add.text(300, 240, 'Play Again', {
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
    }
}