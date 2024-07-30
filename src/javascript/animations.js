export const createAnimations = (game) => {
  game.anims.create({
    key: 'mario-walk',    //  ---------> Nombre único o ID
    frames: game.anims.generateFrameNumbers(
      'mario',  //  -------------------> ID del `spritesheet`
      { start: 1, end: 3 }  //  -------> Frames desde y hasta  
    ),
    frameRate: 12,  //  ---------------> Reduce la velocidad
    repeat: -1  //  -------------------> Repite infinito
  });
  game.anims.create({
    key: 'mario-idle',
    frames: [{ key: 'mario', frame: 0 }]
  });
  game.anims.create({
    key: 'mario-jump',
    frames: [{ key: 'mario', frame: 5 }]
  });
  game.anims.create({
    key: 'mario-dead',
    frames: [{ key: 'mario', frame: 4 }]
  });
}
