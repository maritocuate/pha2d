import { Scene } from 'phaser'

export default class HelloWorldScene extends Scene {
  private player?: Phaser.Physics.Arcade.Sprite
  private cursors?: Phaser.Types.Input.Keyboard.CursorKeys

  constructor() {
    super('hello-world')
  }

  preload() {
    this.load.image('map', 'assets/earthbound-scarab.png')

    this.load.spritesheet('dude', 'assets/marito.png', {
      frameWidth: 64,
      frameHeight: 64,
    })
  }
  create() {
    this.cameras.main.setBounds(0, 0, 800, 600)

    this.add.image(0, 0, 'map').setOrigin(0).setScrollFactor(1)

    this.player = this.physics.add.sprite(400, 400, 'dude')
    this.player.setBounce(0.2)
    this.player.setCollideWorldBounds(true)

    this.anims.create({
      key: 'left',
      frames: this.anims.generateFrameNumbers('dude', {
        frames: [9, 10, 11, 12, 13, 14, 15, 16],
      }),
      frameRate: 10,
      repeat: -1,
    })

    this.anims.create({
      key: 'turn',
      frames: [{ key: 'dude', frame: 19 }],
      frameRate: 20,
    })

    this.anims.create({
      key: 'right',
      frames: this.anims.generateFrameNumbers('dude', {
        start: 0,
        end: 7,
      }),
      frameRate: 10,
      repeat: -1,
    })

    this.anims.create({
      key: 'top',
      frames: this.anims.generateFrameNumbers('dude', {
        frames: [28, 29, 30, 31, 32, 33, 34, 35],
      }),
      frameRate: 10,
      repeat: -1,
    })

    this.cursors = this.input.keyboard.createCursorKeys()
  }
  update() {
    if (!this.cursors) {
      return
    }

    if (this.cursors.left.isDown) {
      this.player?.setVelocityX(-160)
      this.player?.anims.play('left', true)
    } else if (this.cursors.right.isDown) {
      this.player?.setVelocityX(160)
      this.player?.anims.play('right', true)
    } else if (this.cursors.up.isDown) {
      this.player?.setVelocityY(-160)
      this.player?.anims.play('top', true)
    } else {
      this.player?.setVelocityX(0)
      this.player?.anims.play('turn')
    }
  }
}
