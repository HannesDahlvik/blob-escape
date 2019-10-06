class Door extends Phaser.GameObjects.Image {
    constructor(config) {
        super(config.scene, config.x, config.y, 'door');
        this.setScale(.75);
        this.setSize(20, 72);
        config.scene.add.existing(this);
        config.scene.physics.add.existing(this);
        this.body.setAllowGravity(false);
    }
}