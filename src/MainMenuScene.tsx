import { Scene } from 'phaser'

export default class MainMenuScene extends Scene {
  constructor() {
    super('main-menu')
  }

  create() {
    const playButton = this.add
      .text(this.cameras.main.width / 2, this.cameras.main.height / 2, 'Play', {
        fontSize: '32px',
      })
      .setOrigin(0.5)

    playButton.setInteractive()
    playButton.on('pointerdown', () => {
      this.scene.start('hello-world')
    })
  }
}
