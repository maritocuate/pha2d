import { Scene } from 'phaser'

export default class PopupScene extends Scene {
  constructor() {
    super({ key: 'PopupScene', active: false })
  }

  preload() {
    this.load.image('popup', 'assets/popup.png')
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

    this.add
      .image(this.cameras.main.width / 2, this.cameras.main.height / 2, 'popup')
      .setOrigin(0.5)

    const popupText = this.add.text(this.cameras.main.width / 2, 255, 'Hi!', {
      fontFamily: 'Courier',
      fontSize: '11px',
      fontStyle: 'bold',
      color: '#000000',
    })
    popupText.setOrigin(0.5)

    this.input.keyboard.on('keydown-ENTER', this.resumeGame, this)
    this.input.keyboard.on('keydown-ESC', this.resumeGame, this)
  }

  resumeGame() {
    this.scene.resume('GameScene')
    this.scene.stop()
  }
}
