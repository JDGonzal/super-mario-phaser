export const createAnimations = (game) => {
  // ------- `mario` -----------
  game.anims.create({
    key: 'mario-walk', //  ---------> Nombre único o ID
    frames: game.anims.generateFrameNumbers(
      'mario', //  -------------------> ID del `spritesheet`
      { start: 1, end: 3 }, //  -------> Frames desde y hasta
    ),
    frameRate: 12, //  ---------------> Reduce la velocidad
    repeat: -1, //  -------------------> Repite infinito
  });
  game.anims.create({
    key: 'mario-idle',
    frames: [{ key: 'mario', frame: 0 }],
  });
  game.anims.create({
    key: 'mario-jump',
    frames: [{ key: 'mario', frame: 5 }],
  });
  game.anims.create({
    key: 'mario-dead',
    frames: [{ key: 'mario', frame: 4 }],
  });

  // ----------- `mario-grown` ------------
  game.anims.create({
    key: 'mario-grown-walk', //  ---------> Nombre único o ID
    frames: game.anims.generateFrameNumbers(
      'mario-grown', //  -------------------> ID del `spritesheet`
      { start: 1, end: 3 }, //  -------> Frames desde y hasta
    ),
    frameRate: 12, //  ---------------> Reduce la velocidad
    repeat: -1, //  -------------------> Repite infinito
  });
  game.anims.create({
    key: 'mario-grown-idle',
    frames: [{ key: 'mario-grown', frame: 0 }],
  });
  game.anims.create({
    key: 'mario-grown-jump',
    frames: [{ key: 'mario-grown', frame: 5 }],
  });
  game.anims.create({
    key: 'mario-grown-dead',
    frames: [{ key: 'mario-grown', frame: 4 }],
  });

  // ------------ `goomba` ---------------
  game.anims.create({
    key: 'goomba-walk',
    frames: game.anims.generateFrameNumbers('goomba', { start: 0, end: 1 }),
    frameRate: 12,
    repeat: -1,
  });
  game.anims.create({
    key: 'goomba-hurt',
    frames: [{ key: 'goomba', frame: 2 }],
  });

  // -------------- `coin` ----------------
  game.anims.create({
    key: 'coin-idle',
    frames: game.anims.generateFrameNumbers('coin', { start: 0, end: 3 }),
    frameRate: 12,
    repeat: -1,
  });
};
