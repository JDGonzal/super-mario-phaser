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
  de [Ritwick Dey](https://marketplace.visualstudio.com/publishers/ritwickdey)

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
