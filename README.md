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
[**phaser.in.js**].
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
