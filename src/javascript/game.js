/* `Phaser` es una constante global */
import { createAnimations } from './animations.js'
import { checkControls } from './controles.js'

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
      debug: false
    }
  },
  scene: {
    preload, // Fn se ejecuta para precargar recursos
    create, // Fn se ejecuta cuando el juego comienza
    update // Fn se ejecuta en cada frame
  }
}

new Phaser.Game(config) // `this` -> Game -> el Juego

function preload () {
  this.load.image('cloud1', './assets/scenery/overworld/cloud1.png')
  this.load.spritesheet('mario', './assets/entities/mario.png', {
    frameWidth: 18,
    frameHeight: 16
  })
  this.load.image('floorbricks', './assets/scenery/overworld/floorbricks.png')
  this.load.spritesheet('goomba', './assets/entities/overworld/goomba.png', {
    frameWidth: 16,
    frameHeight: 16
  })

  // -- audios --
  this.load.audio('gameover', './assets/sound/music/gameover.mp3')
  this.load.audio('goomba-stomp', './assets/sound/effects/goomba-stomp.wav')
}

function create () {
  this.add.image(100, 50, 'cloud1').setOrigin(0, 0).setScale(0.15)

  // this.add.tileSprite(0, config.height - 32,
  // config.width, 32,
  //   'floorbricks')
  //   .setOrigin(0, 0);

  this.floor = this.physics.add.staticGroup()

  this.floor
    .create(0, config.height - 32, 'floorbricks')
    .setOrigin(0, 0)
    .refreshBody()

  this.floor
    .create(160, config.height - 32, 'floorbricks')
    .setOrigin(0, 0)
    .refreshBody()

  this.floor
    .create(320, config.height - 32, 'floorbricks')
    .setOrigin(0, 0)
    .refreshBody()

  this.floor
    .create(480, config.height - 32, 'floorbricks')
    .setOrigin(0, 0)
    .refreshBody()

  // this.mario = this.add.sprite(50, 200, 'mario')
  //   .setOrigin(0, 0);
  this.mario = this.physics.add
    .sprite(50, config.height - 16 * 4, 'mario')
    .setOrigin(0, 1)
    .setCollideWorldBounds(true)
    .setGravityY(500)

  this.goomba = this.physics.add
    .sprite(120, config.height - 16 * 2, 'goomba')
    .setOrigin(0, 1)
    .setGravityY(500)
    .setVelocityX(-50)

  this.physics.add.collider(this.mario, this.floor)
  this.physics.add.collider(this.goomba, this.floor)
  this.physics.add.collider(this.mario, this.goomba, onHitEnemy, null, this)

  this.physics.world.setBounds(0, 0, config.width * 2, config.height)

  this.cameras.main.setBounds(0, 0, config.width * 2, config.height)

  this.cameras.main.startFollow(this.mario)

  this.keys = this.input.keyboard.createCursorKeys()

  createAnimations(this)

  this.goomba.anims.play('goomba-walk', true)
}

function onHitEnemy (mario, goomba) {
  if (mario.body.touching.down && goomba.body.touching.up) {
    goomba.anims.play('goomba-hurt', true)
    goomba.setVelocityX(0)
    mario.setVelocityY(-200).setVelocityX(0)
    this.sound.play('goomba-stomp')
    // Espero un tiempo para destruirlo
    setTimeout(() => {
      goomba.destroy()
    }, 500)
  } else {
    // mario muere
  }
}

function update () {
  const { mario, sound, scene } = this

  checkControls(this)

  if (mario.isDead) return

  if (mario.y >= config.height - 12) {
    //  La muerte de `mario`
    mario.isDead = true
    mario.anims.play('mario-dead', false)
    mario.setCollideWorldBounds(false)
    try {
      sound.add('gameover', { volume: 0.2 }).play()
    } catch (error) {
      console.log(error)
    }

    setTimeout(() => {
      mario.setVelocityY(-250)
    }, 100)

    setTimeout(() => {
      scene.restart()
    }, 7000)
  }
}
