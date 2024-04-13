import { Physics } from 'phaser'

export function createObstacles(physics: Physics.Arcade.ArcadePhysics) {
  const obstacles = physics.add.staticGroup()

  // garden1
  const garden1: Phaser.Physics.Arcade.StaticBody = obstacles.create(
    183,
    280,
    'obstacle',
    undefined,
    false
  )
  garden1.setSize(75, 50)

  // statue
  const statue: Phaser.Physics.Arcade.StaticBody = obstacles.create(
    340,
    315,
    'obstacle',
    undefined,
    false
  )
  statue.setSize(60, 40)
  // pound
  const pound = obstacles.create(510, 510, 'obstacle', undefined, false)
  pound.setSize(225, 150)
  // bottom
  const bottomObstacle = obstacles.create(
    200,
    590,
    'obstacle',
    undefined,
    false
  )
  bottomObstacle.setSize(290, 100)
  // left
  const leftObstacle = obstacles.create(35, 340, 'obstacle', undefined, false)
  leftObstacle.setSize(50, 500)
  // top
  const topObstacle = obstacles.create(130, 100, 'obstacle', undefined, false)
  topObstacle.setSize(400, 50)
  // store
  const storeObstacle = obstacles.create(330, 30, 'obstacle', undefined, false)
  storeObstacle.setSize(400, 50)
  // corner
  const cornerObstacle = obstacles.create(550, 60, 'obstacle', undefined, false)
  cornerObstacle.setSize(50, 50)
  // right
  const rightObstacle = obstacles.create(600, 340, 'obstacle', undefined, false)
  rightObstacle.setSize(50, 500)
  // middle
  const middleObstacle = obstacles.create(
    195,
    415,
    'obstacle',
    undefined,
    false
  )
  middleObstacle.setSize(70, 10)

  return obstacles
}
