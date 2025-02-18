// eslint-disable-next-line linebreak-style
/* `Phaser` es una constante global */
// eslint-disable-next-line import/extensions
import { createAnimations } from './animations.js';
import { checkControls } from './controles.js';
import { initAudio, playAudio } from './audio.js';
import { initSpritesheet } from './spritesheet.js';

const config = {
  autoFocus: false,
  type: Phaser.AUTO, // webgl, canvas, headless
  width: 256,
  height: 244,
  backgroundColor: '#009dd8', // 'rgb(0, 157, 216)',
  parent: 'game',
  physics: {
    default: 'arcade', // box2d, chipmunk, ninja, p2
    arcade: {
      gravity: { y: 300 },
      debug: false,
    },
  },
  scene: {
    preload, // Fn se ejecuta para precargar recursos
    create, // Fn se ejecuta cuando el juego comienza
    update, // Fn se ejecuta en cada frame
  },
};

new Phaser.Game(config); // `this` -> Game -> el Juego

function preload () {
  this.load.image('cloud1', './assets/scenery/overworld/cloud1.png');

  this.load.image('floorbricks', './assets/scenery/overworld/floorbricks.png');

  this.load.image('supermushroom', './assets/collectibles/super-mushroom.png');

  initSpritesheet(this);

  initAudio(this);
}

function create () {
  createAnimations(this);

  this.add.image(100, 50, 'cloud1').setOrigin(0, 0).setScale(0.15);

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

  this.goomba = this.physics.add
    .sprite(120, config.height - 16 * 2, 'goomba')
    .setOrigin(0, 1)
    .setGravityY(500)
    .setVelocityX(-50);
  this.goomba.anims.play('goomba-walk', true);

  this.collectibles = this.physics.add.staticGroup();
  this.collectibles.create(150, 150, 'coins').anims.play('coin-idle', true);
  this.collectibles.create(300, 150, 'coins').anims.play('coin-idle', true);
  this.collectibles.create(450, 150, 'coins').anims.play('coin-idle', true);
  this.collectibles.create(350, config.height - 16 * 4, 'supermushroom');

  this.physics.add.overlap(this.mario, this.collectibles, collectItems, null, this);

  this.physics.add.collider(this.mario, this.floor);
  this.physics.add.collider(this.goomba, this.floor);
  this.physics.add.collider(this.mario, this.goomba, onHitEnemy, null, this);

  this.physics.world.setBounds(0, 0, config.width * 2, config.height);

  this.cameras.main.setBounds(0, 0, config.width * 2, config.height);

  this.cameras.main.startFollow(this.mario);

  this.keys = this.input.keyboard.createCursorKeys();
}

function collectItems (mario, item) {
  const {
    texture: { key },
  } = item;
  item.destroy(); // item.disableBody(true, true);

  if (key === 'coin') {
    playAudio('coin-pickup', this, { volume: 0.1 });

    addToScore(100, item, this);
  } else if (key === 'supermushroom') {
    this.physics.world.pause();
    this.anims.pauseAll();

    mario.isBlocked = true;
    playAudio('powerup', this, { volume: 0.3 });

    let i = 0;
    const interval = setInterval(() => {
      mario.anims.play(i % 2 === 0 ? 'mario-grown-idle' : 'mario-idle', true);
      i++;
    }, 100);

    setTimeout(() => {
      mario.isGrown = true;
      mario.isBlocked = false;
      mario.setTexture('mario-grown');
      mario.setGravityY(300);
      mario.setDisplaySize(18, 32);
      mario.body.setSize(18, 32);
      clearInterval(interval);
      this.physics.world.resume();
      this.anims.resumeAll();
    }, 1000);
  }
}

function addToScore (scoreToAdd, origin, game) {
  // Pone el Puntaje ganado al recuperar la moneda
  const scoreText = game.add.text(origin.x, origin.y, scoreToAdd, {
    fontFamily: 'pixel',
    fontSize: config.width / 40,
  });
  // Animación para enviar hacia arriba el número
  game.tweens.add({
    targets: scoreText,
    duration: 500,
    y: scoreText.y - 100,
    onComplete: () => {
      // Añadimos otra animación para cambiar la opacidad
      game.tweens.add({
        targets: scoreText,
        duration: 100,
        alpha: 0,
        // Destruimos por completo el texto
        onComplete: () => {
          scoreText.destroy();
        },
      });
    },
  });
}

function onHitEnemy (mario, goomba) {
  if (mario.body.touching.down && goomba.body.touching.up) {
    goomba.anims.play('goomba-hurt', true);
    goomba.setVelocityX(0);
    mario.setVelocityY(-200).setVelocityX(0);
    playAudio('goomba-stomp', this);
    addToScore(200, goomba, this);

    // Espero un tiempo para destruirlo
    setTimeout(() => {
      goomba.destroy();
    }, 100);
  } else {
    // mario muere
    killMario(this);
  }
}

function update () {
  if (this.mario.isDead) return;
  checkControls(this);

  if (this.mario.y >= config.height - 12) {
    killMario(this);
  }
}

function killMario (game) {
  //  La muerte de `mario`
  const { mario, scene } = game;
  if (mario.isDead) return;

  mario.isDead = true;
  mario.anims.play(mario.isGrown ? 'mario-grown-dead' : 'mario-dead', false);
  mario.setCollideWorldBounds(false);
  playAudio('gameover', game, { volume: 0.2 });

  // Evitamos q `mario` detecte colisiones
  mario.body.checkCollision.none = true;
  mario.setVelocityX(0);

  setTimeout(() => {
    mario.setVelocityY(-250); // El Salto antes de morir
  }, 100);

  setTimeout(() => {
    scene.restart(); // 7 Segundos demora el sonido
  }, 7000);
}
