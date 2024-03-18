import Phaser from 'phaser'

import GameScene from './GameScene'
import MainMenuScene from './MainMenuScene'

const config: Phaser.Types.Core.GameConfig = {
  type: Phaser.AUTO,
  parent: 'app',
  width: 600,
  height: 530,
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
  scene: [GameScene, MainMenuScene],
}

export default new Phaser.Game(config)
