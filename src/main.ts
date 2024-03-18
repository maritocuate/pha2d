import Phaser from 'phaser'

import HelloWorldScene from './HelloWorldScene'
import MainMenuScene from './MainMenuScene'

const config: Phaser.Types.Core.GameConfig = {
  type: Phaser.AUTO,
  parent: 'app',
  width: 600,
  height: 500,
  zoom: 5,
  pixelArt: true,
  scale: {
    mode: Phaser.Scale.FIT,
    autoCenter: Phaser.Scale.CENTER_BOTH,
  },
  physics: {
    default: 'arcade',
    arcade: {
      gravity: { y: 0 },
      //debug: true,
    },
  },
  scene: [HelloWorldScene, MainMenuScene],
}

export default new Phaser.Game(config)
