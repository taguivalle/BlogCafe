# Sección doce (12)

## SASS

En esta lección one hundred fifty three (153), estaremos viendo lo que es **SASS** y básicamente es **CSS** pero con superpoderes, este tiene cosas que **CSS** por si solo no puede realizar. Entonces, ¿qué es SASS? Su iniciales significan [(**Syntactically Awesome StyleSheet**)]([SASS](https://sass-lang.com/guide/)).

Hoy en día, se le considera un estándar de la industria de la programación; Aprender llega a ser muy sencillo y es compatible con muchos [frameworks]([frameworks](https://unirfp.unir.net/revista/ingenieria-y-tecnologia/framework/)) de **CSS**; Entre ellos [Bootstrap]([Bootstrap](https://getbootstrap.com/)), [Bulma]([Bulma](https://bulma.io/)) entre otros.

### Ventajas de **SASS**

Algunas pueden ser:

1. Mejor orden
2. Mejor Estructura

Recordemos que nosotros hemos venido creando un hoja de estilos llamada `style.css` con toda la información de nuestro sitio Web **BLOG DE CAFÉ** Pero, con **SASS** podemos separarlo por diferentes archivos. al final se unen y/o se compilan en una hoja de estilos para que se pueda mostrar el sitio web de forma correcta.

Con esto en mente, podemos tener en nuestro archivos originales una estructura bien definida y a su vez en diferentes componentes. Además, tiene características que no encontramos en **CSS** aunado que tienen mejor soporte, permitiendo su utilización de una forma muy sencilla.

De otra parte, soporta código de **CSS**; es decir, podemos escribir código **SASS** y a su vez escribir escribir código de **CSS** nativo y lo va a compilar correctamente. También es **SASS** nos ahorramos código, debido a que, utiliza algo llamado la **Anidación**.

### Desventajas de **SASS**

Estas pueden ser:

Una nueva sintaxis por aprender: esto en la mayoría de las veces supone cierta barrera; no es como lleguemos a utilizarlo; entonces hay que aprender ciertas bases que lo vamos a ver en el transcurso de estas lecciones. Esta la vamos a compilar en el proyecto de **SASS** con una herramienta especial; debido a que, no es nativo en el navegador.

Sabemos que, el punto **CSS** (.css) es el formato de las hojas de estilo; este lo soporta cualquier navegador; pero, la extensión de **SASS** no es soportada por estos. Entonces, se tiene que compilar a una hoja de estilos; algo muy importante a tener en cuenta es que la animación puede causar inconvenientes.

Por ejemplo, si comenzamos a anidar bastante ya es un poco más complicado mantener nuestro proyecto. De esto, estaremos viendo algunos tips, algunas recomendaciones para que esto no sea un inconveniente.

Veamos un poco sobre la sintaxis de **SASS**, siendo esta muy especial. Primero, estaremos viendo cómo crear variables y estas se crean con el signo de dolar ($) al inicio después un nombre y notemos sus dos puntos, posteriormente asignamos un valor. Por ejemplo:

```css
$color: #e1e1e1
```

En este anterior ejemplo estamos creando una variable llamada `color` y seguidamente le asignamos un color [hexadecimal]([hexadecimal](https://htmlcolorcodes.com/es/)); cualquier valor en **CSS** puede ser asignado. También, podemos colocar por ejemplo, alguna unidad, crear una variable llamada separación (En nuestros códigos no es conveniente agregar la tilde para acentuar las palabras) a esta variable le podemos asignar `5rem`.

```css
$separacion: 5rem
```

De igual manera le podemos asignar fuente; podemos tener una variable llamada fuente y asignarle Arial y helvetica.

```css
$fuente: arial, helvetica;
```

### Anidación en **SASS**

Este tema puede causar ciertos inconvenientes para nuestra opinión; pero, resulta ser una gran ventaja. Para iniciar con un ejemplo, podemos crear un `div` y a este le agregamos algunas propiedades de **CSS**.

```css
div
    display: flex;
```

Notemos que, si tenemos un titulo cualquiera con la etiqueta `<h1></h1>`, dentro de el div que acabamos de crear podemos colocar aquí mismo esa etiqueta `<h1></h1>` y después le asignamos propiedades para esa etiqueta.

```css
div
    display: flex;
    h1
        margin-top:10rem;
```

En este caso el `display: flex;` aplica al div y el `margin-top` se le aplica a la etiqueta `<h1></h1>`; Ahora, supongamos que tenemos un párrafo dentro de ese `div` y le podemos agregar otro `margin-top` de `10rem`; observemos como vamos anidando, de como vamos diciéndole que esa etiqueta `<h1></h1>` y que ese párrafo pertenecen al `div`.

```css
div
    display: flex;
    h1
        margin-top:10rem;
    p
        margin-top:10rem;
```

Nuevamente observemos que, en esta anidación es de la sintaxis de **SASS*; pero, existen dos tipos de sintaxis que ya conocemos un poco de ellas; una llamada **SASS** y la otra llamada **CSS**. La más nueva la más utilizada es la de **SASS**.

La anidación va a estar dependiendo mucho de la extensión del archivo de **SASS**; veamos algunas de estas y que podemos utilizar; básicamente, existen dos:

Una que es con punto **SASS** (.sass) en la que específicamente podemos crear una clase llamada header (.header) y posteriormente le agregamos sus propiedades como por ejemplo un `display: flex;` y dentro algún elemento que tenga la clase de logo (.logo) y este también tiene sus propiedades; por ejemplo, `margin-top: 10rem`.

```css
.header
    display: flex;
    -logo
        margin-top: 10rem;
```
Esto es como cuando nombramos los archivos con la extensión punto **sass** `.sass`; Existe otra extensión que es más conocida por nosotros que es la de punto **CSS** `.css`.

Como hemos visto en algunas de estas lecciones se va a ir definicendo la anidación por medio de llaves {}; Entonces, creamos una clase header (`.header`) abrimos las llaves (aunque nuestro editor de texto como [VS code](https://code.visualstudio.com/) nos ayuda con el autocompletado; continuando con el ejemplo de la sintaxis, le agregamos un `display: flex;`.

Seguidamente, en otra línea le agregamos una clase punto logo `.logo` abrimos llaves {} y dentro de estas y le podemos agregar también algunas propiedades como por ejemplo, `margin-top: 10rem;`; posteriormente debemos de cerrar nuestras dos llaves faltantes; las de la clase header como la de la clase logo.

```css
.header {
    display: flex;
    .logo {
        margin-top: 10rem
    }
}
```

De esta manera, podemos ver que la clase logo va a tener un margen de diez centimetros (10 cm), mientras que, la clase header va a tener un `display: flex`; con esto se observa algo muy importante que al final del selector del logo a a decir header y posteriormente logo; por lo que nos va a crear un selector con dos clases.

Otra de las ventajas que no se mencionaron anteriormente es que, **SASS** se compila, no es soportado nativamente por el navegador, no podemos cargar una hoja de estilos directamente; por lo tanto, debemos de compilarla a un archivo **CSS** y para ello se debe de utilizar una herramienta.

Teniendo en cuenta lo anterior, debemos de utilizar una herramienta especial existiendo diferentes opciones como por ejemplo, [webpack](https://webpack.js.org/) y [gulp](https://learn.microsoft.com/es-es/archive/msdn-magazine/2016/november/the-working-programmer-how-to-be-mean-taking-a-gulp) unas de las más populares.

Análogamente, en [VS code](https://code.visualstudio.com/docs/languages/css) también se puede compilar; pero esa versión solamente nos permite compilar hojas de estilos de **SASS*; [webpack](https://webpack.js.org/) y [gulp](https://learn.microsoft.com/es-es/archive/msdn-magazine/2016/november/the-working-programmer-how-to-be-mean-taking-a-gulp) nos ofrece una gama de opciones un poco más avanzadas.

Para nuestro caso, estaremos utilizando [gulp](https://learn.microsoft.com/es-es/archive/msdn-magazine/2016/november/the-working-programmer-how-to-be-mean-taking-a-gulp) debido a que, es más sencillo de implementar, más sencillo de trabajar. Par la próxima lección one hundred fifty four (154) trataremos un poco sobre este compilador de **SASS**.
