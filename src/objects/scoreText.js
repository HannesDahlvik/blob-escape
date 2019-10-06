class ScoreText extends Phaser.GameObjects.Text {
    constructor(config) {
        super(config.scene, 80, 60, 'Stars: ' + gameState.score, {
            fontSize: '20px',
            fontFamily: 'Arial'
        });
        config.scene.add.existing(this);
        this.setScrollFactor(0);
    }
}