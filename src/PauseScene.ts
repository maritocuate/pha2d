import { Scene } from 'phaser'

export default class PauseScene extends Scene {
  constructor() {
    super({ key: 'PauseScene', active: false })
  }

  create() {
    const background = this.add.rectangle(
      0,
      0,
      this.cameras.main.width,
      this.cameras.main.height,
      0x000000,
      0.5
    )
    background.setOrigin(0)

    const pauseText = this.add.text(
      this.cameras.main.width / 2,
      this.cameras.main.height / 2,
      'pause',
      {
        fontFamily: 'Courier',
        fontSize: '15px',
        color: '#ffffff',
      }
    )
    pauseText.setOrigin(0.5)

    this.input.keyboard.on('keydown-P', this.resumeGame, this)
    this.input.keyboard.on('keydown-ESC', this.resumeGame, this)
  }

  resumeGame() {
    this.scene.resume('GameScene')
    this.scene.stop()
  }
}
