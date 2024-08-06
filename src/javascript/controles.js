const MARIO_ANIMATIONS = {
  normal: {
    idle: 'mario-idle',
    walk: 'mario-walk',
    jump: 'mario-jump',
  },
  grown: {
    idle: 'mario-grown-idle',
    walk: 'mario-grown-walk',
    jump: 'mario-grown-jump',
  },
};

export function checkControls ({ mario, keys }) {
  const isLeftKeyDown = keys.left.isDown;
  const isRightKeyDown = keys.right.isDown;
  const isUpKeyDown = keys.up.isDown;

  const isMarioTouchingFloor = mario.body.touching.down;

  // Si mario esta muerto de una un `return`
  if (mario.isDead) return;
  if (mario.isBlocked) return;

  // Separamos el valor de normal o crecido
  const marioAnimations = mario.isGrown
    ? MARIO_ANIMATIONS.grown
    : MARIO_ANIMATIONS.normal;

  if (isLeftKeyDown) {
    // Movemos a mario en el Eje `x` a menos 2 ⬅️
    mario.x -= 2;
    isMarioTouchingFloor && mario.anims.play(marioAnimations.walk, true);
    mario.flipX = true;
  } else if (isRightKeyDown) {
    // Movemos a mario en el Eje `x` mas 2  ➡️
    mario.x += 2;
    isMarioTouchingFloor && mario.anims.play(marioAnimations.walk, true);
    mario.flipX = false;
  } else if (isMarioTouchingFloor) {
    mario.anims.play(marioAnimations.idle, true);
  }

  if (isUpKeyDown && isMarioTouchingFloor) {
    // Movemos a mario en el Eje `y` a -300 de velocidad  ⬆️
    mario.setVelocityY(-300);
    mario.anims.play(marioAnimations.jump, true);
  }
}
