const gameState = {
    score: 0,
    deaths: 0
}

const config = {
    type: Phaser.AUTO,
    width: 800,
    height: 600,
    parent: 'game',
    pixelArt: true,
    resolution: 2,
    scale: {
        mode: Phaser.Scale.RESIZE,
        autoCenter: Phaser.Scale.CENTER_BOTH
    },
    physics: {
        default: 'arcade',
        arcade: {
            gravity: {
                y: 800
            },
            debug: false
        },
    },
    scene: [
        Menu, End, LoseMenu,
        level1, level2, level3, level4, level5
    ]
}

var game = new Phaser.Game(config);