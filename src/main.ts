import Phaser from 'phaser'

import GameScene from './GameScene'
import MainMenuScene from './MainMenuScene'

const config = {
  type: Phaser.AUTO,
  parent: 'app',
  zoom: 5,
  pixelArt: true,
  scale: {
    mode: Phaser.Scale.ENVELOP,
    autoCenter: Phaser.Scale.CENTER_BOTH,
    width: 600,
    height: 530,
  },
  physics: {
    default: 'arcade',
    arcade: {
      gravity: { y: 0 },
      //debug: true,
    },
  },
  scene: [GameScene, MainMenuScene],
}

export default new Phaser.Game(config)
