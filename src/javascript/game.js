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
}

function create() {
  this.add.image(0, 0, 'cloud1')
    .setOrigin(0, 0)
    .setScale(0.15);
}

function update() { }
