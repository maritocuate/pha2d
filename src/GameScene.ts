import { Scene } from 'phaser'
import { createObstacles } from './Obstacles'
import { createPlayer } from './Player'
import { createTriggers } from './Triggers'

export default class GameScene extends Scene {
  private player?: Phaser.Physics.Arcade.Sprite
  private cursors?: Phaser.Types.Input.Keyboard.CursorKeys
  private obstacles?: Phaser.Physics.Arcade.StaticGroup
  private triggers?: Phaser.Physics.Arcade.StaticGroup

  constructor() {
    super({ key: 'GameScene' })
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

    // create triggers
    this.triggers = createTriggers(this.physics)

    // create the player
    this.player = createPlayer(this)

    this.cursors = this.input.keyboard.createCursorKeys()

    // Colisiones entre el jugador y los obstáculos
    this.physics.add.collider(this.player, this.obstacles)

    // Triggers
    this.physics.add.collider(
      this.player,
      this.triggers,
      this.handleTriggerExit,
      undefined,
      this
    )

    this.add.image(0, 0, 'misc').setOrigin(0)

    // Configuración de la cámara para seguir al jugador
    this.cameras.main.setBounds(0, -100, 0, 800)
    this.cameras.main.startFollow(this.player, true, 0.08, 0.08)

    // Keyboard events
    this.input.keyboard.on('keydown-P', () => {
      this.scene.pause()
      this.scene.launch('PauseScene')
    })
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

  private handleTriggerExit(
    player: Phaser.GameObjects.GameObject,
    trigger: any
  ) {
    player.body.position.y = trigger.y + 4

    this.scene.pause()
    this.scene.launch('PopupScene', { popupText: trigger.text })
  }
}
