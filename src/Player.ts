import { Scene } from 'phaser'

export function createPlayer(scene: Scene) {
  const player = scene.physics.add.sprite(290, 410, 'dude')
  player.setBounce(0.2)
  player.setCollideWorldBounds(true)

  scene.anims.create({
    key: 'left',
    frames: scene.anims.generateFrameNumbers('dude', {
      frames: [9, 10, 11, 12, 13, 14, 15, 16],
    }),
    frameRate: 10,
    repeat: -1,
  })

  scene.anims.create({
    key: 'right',
    frames: scene.anims.generateFrameNumbers('dude', { start: 0, end: 7 }),
    frameRate: 10,
    repeat: -1,
  })

  scene.anims.create({
    key: 'up',
    frames: scene.anims.generateFrameNumbers('dude', {
      frames: [28, 29, 30, 31, 32, 33, 34, 35],
    }),
    frameRate: 10,
    repeat: -1,
  })

  scene.anims.create({
    key: 'down',
    frames: scene.anims.generateFrameNumbers('dude', {
      frames: [19, 20, 21, 22, 23, 24, 25, 26],
    }),
    frameRate: 10,
    repeat: -1,
  })

  return player
}
