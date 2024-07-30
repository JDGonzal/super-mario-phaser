# SUPER-MARIO-PHASER
Basado en este video: 

![midulive-20240718](images/2024-07-25_185845.png "Tutorial del juego SUPER MARIO BROS con HTML CSS JavaScript | Curso de Videojuegos")  
https://www.youtube.com/watch?v=RBYCgS8Et7Y

>[!IMPORTANT] 
> * El código original está en este repositorio: 
>[Super-Mario-Phaser
](https://github.com/decapapi/Super-Mario-Phaser/)  
>del usuario [decapapi](https://github.com/decapapi) 
>desde Enero 17 de 2024.
> * La librería base esta en este sitio: 
>[PHASER](https://phaser.io/).
> * Esta es una guía para empezar:
[Cómo crear tu primer juego con Phaser](https://phaser.io/tutorials/making-your-first-phaser-3-game-spanish#:~:text=Para%20iniciar%20un%20juego%20en,menudo%20desde%20una%20variable%20global.).
> * El repositorio del autor del video es:
> [super-midu-bros](https://github.com/midudev/super-midu-bros).

## 00. Prerrequisito​s
1. Tener el Editor [Visual Studio Code](https://code.visualstudio.com/insiders/).
2. Extensiones insaladas dentro de 
`Visual Studio Code`:  
  * [Better Comments](https://marketplace.visualstudio.com/items?itemName=aaron-bond.better-comments) 
de [Aaron Bond](https://aaronbond.co.uk/).
  * [Error Lens](https://marketplace.visualstudio.com/items?itemName=usernamehw.errorlens) 
de [Alexander](https://marketplace.visualstudio.com/publishers/usernamehw).
  * [Javascript-Essentials](https://marketplace.visualstudio.com/items?itemName=Gydunhn.javascript-essentials)
  de [Gydunhn](https://marketplace.visualstudio.com/publishers/Gydunhn),  
  Este instala un paquete con:
    * ESLint
    * npm Intellisense 
    * IntelliCode
    * JavaScript (ES6) code snippets
    * Debugger for Firefox
    * Path Intellisense
    * Formatting Toggle
  * [Live Server](https://marketplace.visualstudio.com/items?itemName=ritwickdey.LiveServer)
  de [Ritwick Dey](https://marketplace.visualstudio.com/publishers/ritwickdey).
  * [Image preview](https://marketplace.visualstudio.com/items?itemName=kisstkondoros.vscode-gutter-preview)
  de [Kiss Tamás](https://marketplace.visualstudio.com/publishers/kisstkondoros)

## 01. Crear el ambiente de trabajo

1. Creamos la carpeta "src" en la raíz del proyecto.
2. Creamos la carpeta "assets" dentro de "src".
3. Creamos la carpeta "javascript" dentro de "src".
4. Creamos el archivo **index.html** en la carpeta "src".
5. En el archivo **index.html** Escribimos el snippet :  
`htm` y seleccionamos `html:5`, el nos completa el código base de un archivo **.html**, en 12 líneas:
```html
  <!DOCTYPE html>
  <html lang="en">
  <head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
  </head>
  <body>
    
  </body>
  </html>

```
6. Cambiamos el `<title>` por `Super Mario Phaser`.
7. Ponemos dentro del `<body>` un `<div>` con esto:  
`<div id = "game"></div>` 
7. Añadimos un `<footer></footer>` debajo del 
`</body>`.
8. Descargamos de este sitio [Phaser v3.x](https://phaser.io/download/stable), con el botón
[**phaser.min.js**].
9. El archivo descargado lo muevo a la carpeta del proyecto llamada "src/javascript".
10. Lo renombro con la versión con la que fue descargada de **phaser.min.js** a **phaser-3-8-1.min.js**.
11. En el `<footer>` del **index.html**, ponemos el
llamado al código de javascript:
```html
    <script type="module" src="./javascript/phaser-3-8-1.min.js"></script>
```
12. Creamos en la carpeta "src/javascript", un archivo llamado **game.js**.
13. A modo de pruebas solo ponemos este código
en **game.js**:  
`console.log('Probando Super-Mario');`
14. Añadimos en el `<footer>` del **index.html**
lo siguiente:
```html
    <script type="module" src="./javascript/game.js"></script>
```
15. Usando `Visual Studio Code`, nos ubicamos en el 
archivo **index.html**.
16. En la parte inferior derecha del `Visual Studio Code`, y sabiendo q instalamos la extensión:
`Live Server`, damos click en `Go Live` y el se
ejecutará en un browser 
(Vuelvo y repito estando ubicado en **index.html**).
17. Revisamos o con la tecla [`F12`] o click derecho en el browser dando en `inspect`, la `Console` y
allí nos aparece el mensaje q dejamos: 
`Probando Super-Mario` 
18. En el `<head>` de **index.html** y debajo de
`</title>`, añadimos:
```html
  <style>
    body {
      display: grid;
      place-items: center;
      height: 100vh;
      background-color: black;
    }
    #game {
      border: 1px solid white;
    }
  </style>
```

## 02. Configuración del juego
1. En el archivo **game.js**, añadimos este código:
```js
/* `Phaser` es una constante global */
const config ={
  type: Phaser.AUTO, // webgl, canvas, headless
  width: 256,
  height: 244,
  backgroundColor: 'rgba(255, 255, 255, 0)', // '#FFFFFF',
  parent: 'game',
  scene: {
    preload, // Fn se ejecuta para precargar recursos
    create, // Fn se ejecuta cuando el juego comienza
    update // Fn se ejecuta en cada frame
  }
}
```
2. Creamos las 3 funciones vacías en **game.js**:
```javascript
function preload() {}

function create() {}

function update() {}
```
3. Debo inicializar el juego, en el archivo **game.js** agrego 
este código antes del `preload` y debajo del `config`:
```js
new Phaser.Game(config);
```
* El cuadrado que representa el juego aparece en el browser
4. Quitamos del archivo **index.html**, el dato de `<style>`
relacionado con `#game`.
5. Descargamos del repositorio original la carpeta 
["assets"](https://github.com/decapapi/Super-Mario-Phaser/tree/main/assets) 
y la ponemos en la carpeta "src".
6. Ante el error de q no halla el `favicon.ico`, adicioné en el
archivo **index.html**, antes del `<title>`, la siguiente línea:  
`<link rel="shortcut icon" href="./assets/favicon.png" />`.

## 03. Primer Recurso
1. Cargamos el primer recurso, en este caso una nube 
**cloud1.png** que está en la carpeta "src/assets/scenery/overworld/" en la función `preload`:
```js
function preload() { 
  this.load.image (
    'cloud1',
    './assets/scenery/overworld/cloud1.png'
  );
}
```
2. En la función `create`, la mostramos en el juego:
```js
function create() { 
  this.add.image(0, 0, 'cloud1');
}
```
3. Cambiamos el color en **game.js**, en la zona de `config`:  
`'rgba(255, 255, 255, 0)'` -> `'#009dd8'`.
4. Como la nube sale en posición y tamaño incorrecto, cambiamos
la nube por : `this.add.image(0, 0, 'cloud1').setScale(0.15);`.
5. Sigue apareciendo media nube, porque las posiciones son la
mitad de la imagen, para q tome el origen de la imagen añadimos 
`setOrigin`:
```js
  this.add.image(0, 0, 'cloud1')
    .setOrigin(0, 0)
    .setScale(0.15);
```

>[!IMPORTANT]  
> Antes de subir el repositorio, borré la carpeta 
>"src/assets/showcase".
>
> Los archivos son muestras del 
>producto terminado, para ser vistos en el repositorio, pero no 
>hacen parte del código necesario para el juego.

## 04. El recurso de Mario y el Suelo
1. Añadimos en **games.js** este código en `preload`, para que
cargue el sprite de Mario:
```js
  this.load.spritesheet(
    'mario',
    './assets/entities/mario.png',
    { frameWidth: 18, frameHeight: 16 }
  );
```
2. En `create` de **games.js**, ponemos este código y Mario 
aparecerá en pantalla:
```js
  this.add.sprite(50, 200, 'mario')
    .setOrigin(0, 0);
```
3. En la función `preload` de **games.js**, añadimos este código,
para cargar el Suelo:
```js
  this.load.image(
    'floorbricks',
    './assets/scenery/overworld/floorbricks.png'
  );
```
4. Añadimos a `create` de **games.js**, este código y el Suelo
aparecerá en el juego:
```js
  this.add.tileSprite(0, config.height - 32, config.width, 32,
    'floorbricks')
    .setOrigin(0, 0);
```
5. Movemos la nube a una posición no tan en la esquina con esto:  
`this.add.image(100, 50, 'cloud1')`

## 05. Mover el Personaje
1. Añadimos el método para reconocer las teclas llamado:
`createCursorKeys()` , en la función `create` de **game.js**:
```js
  this.keys = this.input.keyboard.createCursorKeys();
```
2. Cuando creamos el sprite con el id de `'mario'`, faltó 
asociarlo a un objeto, en la función `create` de **game.js**,
así se haría la corrección:
```js
  this.mario = this.add.sprite(50, 200, 'mario')
    .setOrigin(0, 0);
```
3. En la función `update` de **game.js**, ponemos una 
condición relacionada con la tecla [`Flecha-izquierda`] ⬅️.
```js
  if (this.keys.left.isDown) {
    // Movemos a mario en el Eje `x` a menos 2 ⬅️ 
    this.mario.x -= 2;
  }
```
4. En la misma `update`, añadimos el `else if` para mover
el personaje con la tecla [`Flecha-derecha`] ➡️
```js
   else if (this.keys.right.isDown) {
    // Movemos a mario en el Eje `x` mas 2  ➡️
    this.mario.x += 2;
  }
```
>[!TIP]  
> Logramos "Moverlo" entre derecha e izquierda, pero la imagen
>le falta animación, eso lo veremos mas adelante.

## 06. Las Animaciones
1. En la función `create` de **game.js**, usando la propiedad
`anims`, creamos las animaciones usando una clave `key`:
```js
  this.anims.create({
    key: 'mario-walk',    //  ---------> Nombre único o ID
    frames: this.anims.generateFrameNumbers(
      'mario',  //  -------------------> ID del `spritesheet`
      { start: 1, end: 3 }  //  -------> Frames desde y hasta  
    ),
    frameRate: 6, //  -----------------> Reduce la velocidad
    repeat: -1  //  -------------------> Repite infinito
  });
```
2. En el `update` de **game.js**, al momento de decrementar
la posición `x` del objeto `this.mario`, también aplicamos
la animación, es decir a la izquierda:
```js
    this.mario.anims.play('mario-walk', true);
```
3. Lo mismo para el momento de mover a la derecha.

>[!CAUTION]  
> Ahí el detalle es que una vez empieza a moverse, queda en un
>movimiento perpetuo, de alguna manera el debe detenerse si no 
>estoy presionando ninguna de las teclas que provoca el 
>desplazamiento.

4. En la función `create` de **game.js**, ponemos el mario que
no está haciendo nada:
```js
  this.anims.create({
    key: 'mario-idle',
    frames:[{ key: 'mario', frame: 0}]
  });
```
5. En el `update` de **game.js**, añadimos un `else`, en caso
que no se use ni la tecla derecha o izquierda:
```js
    else {
    this.mario.anims.play('mario-idle', true);
  }
```
6. Cuando el Personaje va a la izquierda, este va de espaldas,
toca es girarlo para que se mueva en otro sentido, con
`filpX`:  
`this.mario.flipX = true;`
7. Y si va a la derecha, se le dice q deje de girar:  
`this.mario.flipX = false;`

## 07. Animación de Saltar
1. En la función `create` de **game.js**, ponemos el mario que
no está haciendo nada:
```js
  this.anims.create({
    key: 'mario-jump',
    frames:[{ key: 'mario', frame: 5}]
  });
```
2. En el `update` de **game.js**, añadimos aparte una condición
conla tecla [`Flecha-arriba`] ⬆️
```js
  if (this.keys.up.isDown){
    // Movemos a mario en el Eje `x` a menos 5  ⬆️
    this.mario.y -= 5;
    this.mario.anims.play('mario-jump', true);
  }
```

>[!WARNING]  
>Como no hay gravedad el seguirá subiendo sin caer.

## 08. Físicas
1. En el `config` de **game.js**, añadimos un elemento de 
`physics`:
```js
const config = {
  ...,
  physics: {
    default: 'arcade',  // box2d, chipmunk, ninja, p2
    arcade: {
      gravity: { y: 300 },
      debug: false
    }
  },
  ...
}
```
2. En el `create` de **game.js**, comentamos la forma de
mostar a `mario` y le añadimos esta, cambiando también
la posición inicial del `mario`:
```js
  this.mario = this.physics.add
    .sprite(50, config.height - 16 * 4, 'mario')
    .setOrigin(0, 0);
```
>[!TIP]  
> Mario se cae, si, pero detrás de los ladrillos del piso.
> Para solucionar, cambiamos el orden en `create`:
> 1. `this.add.image(..., 'cloud1') ...`
> 2. `this.add.tileSprite(..., 'floorbricks') ...`
> 3. `this.mario = this.physics.add.sprite(..., 'mario') ...`

3. Creamos un objeto llamado `floor` con el método 
`staticGroup()` en `create`:
```js
  this.floor = this.physics.add.staticGroup();
```
4. El objeto `floor` lo utilizamos para crear uno o dos pisos:
```js
  this.floor
    .create(0, config.height - 32, 'floorbricks')
    .setOrigin(0,0);
```
5. Comentamos el otro `'floorbricks'` de `create`.
6. Añadimos otro piso en una posición mas adelante:
```js
  this.floor
    .create(160, config.height - 32, 'floorbricks')
    .setOrigin(0, 0);
```
7. El mario se sigue cayendo, se debe crear una colisión
que es el método `collider` en la función `create`, lo
hacemos antes de la definición de `keys`:
```js
  this.physics.add.collider(this.mario, this.floor);
```
8. El `mario` aparece flotando y si se mueve se cae
directamente, entonces se añade a los dos `floor` en
la función `create`, el método `refreshBody()`.

## 09. Evitar que mario se salga del universo
1. Añadir en `create` para el objeto `mario`, este método:
`setCollideWorldBounds(true)`.
>[!TIP]  
>Lo gracioso es q cuando llegue a la separación de los pisos
>tampoco se caerá 😅  
>Mas adelante se solucionará este tema.

## 10. Salto mas natural
1. Añadimos a la condición de la función `update` para la tecla
 [`Flecha-arriba`] ⬆️ que `mario` esté tocando el piso:
`if (this.keys.up.isDown && this.mario.body.touching.down) {`
2. Cambiamos el hecho de ponerle una posición en el eje `y`, 
para establecer una velocidad negativa:
`this.mario.setVelocityY(-300);`
3. En el `create` al objeto `mario` le añadimos `setGravityY`.

## 11. La Cámara
1. Añadimos los límites en el _Mundo_, en el archivo
**game.js** , para la función `create`, añadimos esto:
```js
  this.physics.world.setBounds(0, 0, config.width * 2, config.height);
```
2. Ponemos los límites de la _Cámara_, añadiendo esto en la
función `create`:
```js
  this.cameras.main.setBounds(0, 0, config.width * 2, config.height);
```
3. Le decimos a la _Cámara_ a quien tiene que seguir, con este
código en **game.js**, para la función `create`:
```js
  this.cameras.main.startFollow(this.mario);
```
4. Como el mundo ya se expandió, aprovechamos para poner mas
suelo de ladrillos, a la derecha en la función `create`:
```js
  this.floor
    .create(320, config.height - 32, 'floorbricks')
    .setOrigin(0, 0)
    .refreshBody();

  this.floor
    .create(480, config.height - 32, 'floorbricks')
    .setOrigin(0, 0)
    .refreshBody();
```

## 12. Separar las Animaciones
1. Crear el archivo **animations.js** en la carpeta
 "src/javascript", en este código base:
```js
export const createAnimations = (game) => {

}
```
2. En el archivo **game.js**, importamos el `createAnimations`:
```js
import { createAnimations } from "./animations.js";
```
3. En la función `create` de **game.js**, añadimos el nuevo
`createAnimations` enviando el `this`, justo debajo de la
asignación del objeto `keys`.
4. Cortamos todo lo q se relaciona con `anims` y lo llevamos
a el nuevo archivo **animations.js**.
5. En el archivo **animations.js**, cambiamos el término 
`this` por `game`:
```js
export const createAnimations = (game) => {
  game.anims.create({
    key: 'mario-walk',    //  ---------> Nombre único o ID
    frames: game.anims.generateFrameNumbers(
      'mario',  //  -------------------> ID del `spritesheet`
      { start: 1, end: 3 }  //  -------> Frames desde y hasta  
    ),
    frameRate: 6, //  -----------------> Reduce la velocidad
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
}
```
6. En el archivo **animations.js** agregamos una nueva para
la muerte de `mario`, llamada `mario-dead`:
```js
  game.anims.create({
    key: 'mario-dead',
    frames: [{ key: 'mario', frame: 4 }]
  });
```
7. En el archivo **game.js**, para función `update` al final
añadimos esto:
```js
  if (this.mario.y >= config.height - 12) {
    //  La muerte de `mario`
    this.mario.anims.play('mario-dead', false);
  }
```
>[!WARNING]  
>El `mario` no muestra la animación de la muerte, cuando está
>cayendo, esto es debido que el mario está creado como 
>punto de partida la esquina superior izquierda, para el
>juego, debemos tomar la esquina inferior izquierda, para hacer
>esto, en la creación del objeto `mario`, cambiamos el 
>`setOrigin` a esto:  
>`.setOrigin(0, 1)`

8. Adicionamos una propiedad `isDead`, al objeto `mario`, 
y lo llenamos con el valor de `true`:
```js
  this.mario.isDead = true;
```
9. También desactivamos el límite del mundo, para que termine
de caer:
```js
  this.mario.setCollideWorldBounds(false);
```
10. Como el `mario` se puede mover estando muerto, justo al
inicio de la función `update`, ponemos un `return`. 
```js
if (this.mario.isDead) return;
```
11. El `mario` cuando se muere, hace un salto pequeño, esto lo 
podemos programar en un intervalo de tiempo, dentro de la
misma condición de que `mario` está en caída:
```js
    setTimeout(() => {
      this.mario.setVelocityY(-250);
    }, 100);
```

## 13. Agregamos un Audio
1. Vamos a agregar al menos el audio de la muerte de `mario`,
en el archivo **game.js** en la función `preload` añadimos 
esto:
```js
  this.load.audio(
    'gameover',
    './assets/sound/music/gameover.mp3'
  );
```
2. Justo depués de `this.mario.setCollideWorldBounds(false);`
ponemos el sonido del `'gameover'` en la función `update`, 
de una vez con el control de volúmen:
```js
    this.sound.add(
      'gameover',
      { volume: 0.2 })
      .play();
```
3. Justo depués reiniciamos el juego, luego de un intervalo
de 7 segundos, lo que dura el sonido anterior, en **game.js** al final de la condición de la muerte de `mario`:
```js
    setTimeout(() => {
      this.scene.restart();
    }, 7000);
```
>[!TIP]  
>En el Browser de Chrome, suena la música del `gameover` sin
>problemas, pero en Firefox, esta en silencio, hice varias
>consultas, pero me funcionó el hecho de dar click derecho
>al tab de Firefox, y seleccionar `mute`, para luego dar 
>al tab de Firefox, y seleccionar `unmute`.  
>
> Aunque algunas veces en Firefox no funciona ☹️.
