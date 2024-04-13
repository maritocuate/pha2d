import { Physics } from 'phaser'

export function createTriggers(physics: Physics.Arcade.ArcadePhysics) {
  const triggers = physics.add.staticGroup()

  // statue
  const statue = triggers.create(340, 335, 'obstacle', undefined, false)
  statue.setSize(20, 3)
  statue.text =
    'I live in the city\nof "Gallito de\nMorón", Buenos\nAires, Argentina.'
  return triggers
}
