class End extends Phaser.Scene {
    constructor() {
        super({
            key: 'End'
        });
    }

    create() {
        // if (gameState.score < 20) {
        //     this.scene.start('loseMenu');
        // }

        this.add.image(400, 300, 'bg').setScale(.56);

        this.add.text(180, 140, 'You escaped!', {
            fontSize: '64px',
            fontFamily: 'Arial Black'
        });

        let playAgain = this.add.text(300, 240, 'Play again?', {
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
        playAgain.setInteractive();
        playAgain.on('pointerdown', () => {
            this.scene.start('Menu');
        });

        this.add.text(355, 310, 'Score: ' + gameState.score + '/24', {
            fontSize: '20px',
            fontFamily: 'Arial'
        });

        this.add.text(365, 340, 'Deaths: ' + gameState.deaths, {
            fontSize: '20px',
            fontFamily: 'Arial'
        });
    }
}