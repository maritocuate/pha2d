import { Scene } from 'phaser'
import { createObstacles } from './Obstacles'

export default class GameScene extends Scene {
  private player?: Phaser.Physics.Arcade.Sprite
  private cursors?: Phaser.Types.Input.Keyboard.CursorKeys
  private obstacles?: Phaser.Physics.Arcade.StaticGroup

  constructor() {
    super('hello-world')
  }

  preload() {
    this.load.image('map', 'assets/moron.png')

    this.load.spritesheet('dude', 'assets/marito.png', {
      frameWidth: 64,
      frameHeight: 64,
    })

    this.load.image('misc', 'assets/moron-images.png')
  }
  create() {
    // create the map
    this.add.image(0, 0, 'map').setOrigin(0)

    // create obstacles
    this.obstacles = createObstacles(this.physics)

    this.player = this.physics.add.sprite(290, 410, 'dude')
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
      key: 'right',
      frames: this.anims.generateFrameNumbers('dude', {
        start: 0,
        end: 7,
      }),
      frameRate: 10,
      repeat: -1,
    })

    this.anims.create({
      key: 'up',
      frames: this.anims.generateFrameNumbers('dude', {
        frames: [28, 29, 30, 31, 32, 33, 34, 35],
      }),
      frameRate: 10,
      repeat: -1,
    })
    this.anims.create({
      key: 'down',
      frames: this.anims.generateFrameNumbers('dude', {
        frames: [19, 20, 21, 22, 23, 24, 25, 26],
      }),
      frameRate: 10,
      repeat: -1,
    })

    this.cursors = this.input.keyboard.createCursorKeys()

    // Colisiones entre el jugador y los obstáculos
    this.physics.add.collider(this.player, this.obstacles)

    this.add.image(0, 0, 'misc').setOrigin(0)

    // Configuración de la cámara para seguir al jugador
    this.cameras.main.setBounds(0, -100, 0, 800)
    this.cameras.main.startFollow(this.player, true, 0.08, 0.08)
  }
  update() {
    if (!this.cursors || !this.player) {
      return
    }

    this.player?.setVelocity(0)

    // Horizontal movement
    if (this.cursors.left.isDown) {
      this.player.setVelocityX(-80)
    } else if (this.cursors.right.isDown) {
      this.player.setVelocityX(80)
    }
    // Vertical movement
    if (this.cursors.up.isDown) {
      this.player.setVelocityY(-80)
    } else if (this.cursors.down.isDown) {
      this.player.setVelocityY(80)
    }

    // Update the animation last and give left/right animations precedence over up/down animations
    if (this.cursors.left.isDown) {
      this.player.anims.play('left', true)
      //this.player.flipX = true
    } else if (this.cursors.right.isDown) {
      this.player.anims.play('right', true)
      //this.player.flipX = false
    } else if (this.cursors.up.isDown) {
      this.player.anims.play('up', true)
    } else if (this.cursors.down.isDown) {
      this.player.anims.play('down', true)
    } else {
      this.player.anims.stop()
    }
  }
}
