/* `Phaser` es una constante global */
import { createAnimations } from "./animations.js";

const config = {
  autoFocus: false,
  type: Phaser.AUTO, // webgl, canvas, headless
  width: 256,
  height: 244,
  backgroundColor: '#009dd8', // 'rgb(0, 157, 216)',
  parent: 'game',
  physics: {
    default: 'arcade',  // box2d, chipmunk, ninja, p2
    arcade: {
      gravity: { y: 300 },
      debug: false
    }
  },
  scene: {
    preload, // Fn se ejecuta para precargar recursos
    create, // Fn se ejecuta cuando el juego comienza
    update // Fn se ejecuta en cada frame
  }
}

new Phaser.Game(config); // `this` -> Game -> el Juego

function preload() {
  this.load.image(
    'cloud1',
    './assets/scenery/overworld/cloud1.png'
  );
  this.load.spritesheet(
    'mario',
    './assets/entities/mario.png',
    { frameWidth: 18, frameHeight: 16 }
  );
  this.load.image(
    'floorbricks',
    './assets/scenery/overworld/floorbricks.png'
  );

  this.load.audio(
    'gameover',
    './assets/sound/music/gameover.mp3'
  );

}

function create() {
  this.add.image(100, 50, 'cloud1')
    .setOrigin(0, 0)
    .setScale(0.15);

  // this.add.tileSprite(0, config.height - 32, 
  // config.width, 32,
  //   'floorbricks')
  //   .setOrigin(0, 0);

  this.floor = this.physics.add.staticGroup();

  this.floor
    .create(0, config.height - 32, 'floorbricks')
    .setOrigin(0, 0)
    .refreshBody();

  this.floor
    .create(160, config.height - 32, 'floorbricks')
    .setOrigin(0, 0)
    .refreshBody();

  this.floor
    .create(320, config.height - 32, 'floorbricks')
    .setOrigin(0, 0)
    .refreshBody();

  this.floor
    .create(480, config.height - 32, 'floorbricks')
    .setOrigin(0, 0)
    .refreshBody();

  // this.mario = this.add.sprite(50, 200, 'mario')
  //   .setOrigin(0, 0);
  this.mario = this.physics.add
    .sprite(50, config.height - 16 * 4, 'mario')
    .setOrigin(0, 1)
    .setCollideWorldBounds(true)
    .setGravityY(500);

  this.physics.add.collider(this.mario, this.floor);

  this.physics.world.setBounds(0, 0, config.width * 2, config.height);

  this.cameras.main.setBounds(0, 0, config.width * 2, config.height);

  this.cameras.main.startFollow(this.mario);

  this.keys = this.input.keyboard.createCursorKeys();

  createAnimations(this);

}

function update() {
  const { keys, mario, sound, scene } = this;

  const isMarioTouchingFloor = mario.body.touching.down;

  const isLeftKeyDown = keys.left.isDown;
  const isRightKeyDown = keys.right.isDown;
  const isUpKeyDown = keys.up.isDown;

  if (mario.isDead) return;

  if (isLeftKeyDown) {
    // Movemos a mario en el Eje `x` a menos 2 ⬅️ 
    mario.x -= 2;
    isMarioTouchingFloor && mario.anims.play('mario-walk', true);
    mario.flipX = true;
  } else if (isRightKeyDown) {
    // Movemos a mario en el Eje `x` mas 2  ➡️
    mario.x += 2;
    isMarioTouchingFloor && mario.anims.play('mario-walk', true);
    mario.flipX = false;
  } else if (isMarioTouchingFloor) {
    mario.anims.play('mario-idle', true);
  }

  if (isUpKeyDown && isMarioTouchingFloor) {
    // Movemos a mario en el Eje `y` a -300 de velocidad  ⬆️
    mario.setVelocityY(-300);
    mario.anims.play('mario-jump', true);
  }

  if (mario.y >= config.height - 12) {
    //  La muerte de `mario`
    mario.isDead = true;
    mario.anims.play('mario-dead', false);
    mario.setCollideWorldBounds(false);
    try {
      sound.add(
        'gameover', { volume: 0.2 }).play();
    } catch (error) {
      console.log(error);
    }

    setTimeout(() => {
      mario.setVelocityY(-250);
    }, 100);

    setTimeout(() => {
      scene.restart();
    }, 7000);
  }
}
