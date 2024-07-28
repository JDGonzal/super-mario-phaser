/* `Phaser` es una constante global */
const config = {
  type: Phaser.AUTO, // webgl, canvas, headless
  width: 256,
  height: 244,
  backgroundColor: '#009dd8', // 'rgb(0, 157, 216)',
  parent: 'game',
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
}

function create() {
  this.add.image(100, 50, 'cloud1')
    .setOrigin(0, 0)
    .setScale(0.15);
  this.add.sprite(50, 200, 'mario')
    .setOrigin(0, 0);
  this.add.tileSprite(0, config.height - 32, config.width, 32,
    'floorbricks')
    .setOrigin(0, 0);
}

function update() { }
