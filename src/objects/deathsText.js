class DeathsText extends Phaser.GameObjects.Text {
    constructor(config) {
        super(config.scene, 80, 80, 'Deaths: ' + gameState.deaths, {
            fontSize: '20px',
            fontFamily: 'Arial'
        });
        config.scene.add.existing(this);
        this.setScrollFactor(0);
    }
}