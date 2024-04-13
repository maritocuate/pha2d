import { Physics } from 'phaser'

export function createTriggers(physics: Physics.Arcade.ArcadePhysics) {
  const triggers = physics.add.staticGroup()

  // statue
  const statue = triggers.create(340, 335, 'obstacle', undefined, false)
  statue.setSize(20, 3)
  statue.text =
    'I live in the city\nof "Gallito de\nMorón", Buenos\nAires, Argentina.'

  // contact
  const contact = triggers.create(225, 420, 'obstacle', undefined, false)
  contact.setSize(10, 3)
  contact.text =
    'You can send me\nan email here\n mario300@gmail.com\nbefore the\nmail man comes by.'

  return triggers
}
