/* `Phaser` es una constante global */
import { createAnimations } from "./animations.js";

const config = {
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
  if (this.mario.isDead) return;

  if (this.keys.left.isDown) {
    // Movemos a mario en el Eje `x` a menos 2 ⬅️ 
    this.mario.x -= 2;
    this.mario.anims.play('mario-walk', true);
    this.mario.flipX = true;
  } else if (this.keys.right.isDown) {
    // Movemos a mario en el Eje `x` mas 2  ➡️
    this.mario.x += 2;
    this.mario.anims.play('mario-walk', true);
    this.mario.flipX = false;
  } else {
    this.mario.anims.play('mario-idle', true);
  }

  if (this.keys.up.isDown && this.mario.body.touching.down) {
    // Movemos a mario en el Eje `y` a -300 de velocidad  ⬆️
    this.mario.setVelocityY(-300);
    this.mario.anims.play('mario-jump', true);
  }

  if (this.mario.y >= config.height - 12) {
    //  La muerte de `mario`
    this.mario.isDead = true;
    this.mario.anims.play('mario-dead', false);
    this.mario.setCollideWorldBounds(false);
    this.sound.add(
      'gameover',
      { volume: 0.2 })
      .play();

    setTimeout(() => {
      this.mario.setVelocityY(-250);
    }, 100);

    setTimeout(() => {
      this.scene.restart();
    }, 7000);
  }
}
