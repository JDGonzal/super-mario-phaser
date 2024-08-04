export function checkControls ({ mario, keys }) {
  const isLeftKeyDown = keys.left.isDown
  const isRightKeyDown = keys.right.isDown
  const isUpKeyDown = keys.up.isDown

  const isMarioTouchingFloor = mario.body.touching.down

  if (isLeftKeyDown) {
    // Movemos a mario en el Eje `x` a menos 2 ⬅️
    mario.x -= 2
    isMarioTouchingFloor && mario.anims.play('mario-walk', true)
    mario.flipX = true
  } else if (isRightKeyDown) {
    // Movemos a mario en el Eje `x` mas 2  ➡️
    mario.x += 2
    isMarioTouchingFloor && mario.anims.play('mario-walk', true)
    mario.flipX = false
  } else if (isMarioTouchingFloor) {
    mario.anims.play('mario-idle', true)
  }

  if (isUpKeyDown && isMarioTouchingFloor) {
    // Movemos a mario en el Eje `y` a -300 de velocidad  ⬆️
    mario.setVelocityY(-300)
    mario.anims.play('mario-jump', true)
  }
}
