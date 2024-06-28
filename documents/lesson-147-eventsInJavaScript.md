<!-- This is lesson one hundred forty seven (147) Events in JavaScript -->
# Blog Café

## Eventos en JavaScript

En esta lección one hundred forty seven (147) veremos un poco sobre los eventos en JavaScript; como nota introductoria cuando alguién visita un sitio web o una aplicación web, existen muchos eventos a lo largo de toda la aplicación. Desde el simple hecho de al momento de hacemos scroll en el sitio web, a esto ya se le conoce como eventos; analicemos
nuestra página que hemos estado alimentando como es el Blog Café; Ahora, cuando ingresamos los datos en el formulario y le damos click a enviar, esto ya es un evento y se le conoce como click.

De igual manera, cuando se llena el formulario y se ingresan esos datos requeridos estos también son eventos; existen multiples eventos; por ejemplo, cuando ingresamos a spotify y le damos en crear una nueva playlist nos aparece un formulario para ingresar el nombre de esa playlist, presionamos en guardar y posteriormente  presionamos en los tres puntos suspensivos, guardamos cambios y empezamos a agregar canciones en nuestra playlist todo esto son eventos.

En realidad son muchos eventos los que suceden en todos los sitios web y en todas las aplicaciones; Y es gracias a estos eventos que podemos crear y ver sitios de aplicaciones web más dinámicos que reaccionan a lo que el usuario va haciendo en nuestro proyecto. Para el avance de este tema vamos a continuar con nuestro archivo script.js.

Nota: muchas veces o en la mayoría de estas, los eventos los registra el usuario como los que se mencionaron en el anterior párrafo; clicks, llenar formularios, etc. Pero también existen eventos que suceden automáticamente en nuestro sitio web.

vamos a escribir las siguientes líneas en nuestro archivo script.js `console.log(1); console.log(2); console.log(5);` y sí guardamos cambios vamos a tener un console.log del uno (1), dos (2) y el cinco (5); Uno de los eventos que más comúnmente suceden automáticamente en cualquier sitio web es cuando el documento se encuentra listo y la forma en que vamos a registrar un evento es con un método llamado  **addEvenListener** y siempre que veamos este método va a significar que hay un evento asociado y una vez que ocurra este el código siguiente es el que se ejecuta.

Vamos a hacer un ejemplo, `window.addEvenListener` le agregamos unos paréntesis `window.addEvenListener()` y dentro de estos paréntesis vamos a escribir también dentro de unas comillas simples o dobles 'load' esto lo que hace es esperar hasta que la ventana se encuentre lista; entonces, estamos esperando a que el evento haya cargado totalmente la ventana; ahora, si escribimos window en la consola podemos ver que aparece un menú casi interminable de información. O sea que nuestra línea quedaría así: `window.addEvenListener('load')`

Window es lo que se conoce como el objeto global; incluso documento pertenece a window; si escribimos en consola window punto documento; podemos observar que document sería el HTML, mientras que window va un poco más allá. Es un nivel más alto de document y tiene a su vez mucha más información; debido a que, vamos a encontrar todas las funciones, inclusive podemos ver que nos aparece fetch de algunos arrays; Entonces, window hará referencia a todas las funciones; por ejemplo; setTimeOut y muchos más.

Con base en esto, podemos utilizar algunas funciones como window y punto setTimeOut (`window.setTimeOut`); pero son funciones que existen en **JavaScript** por lo tanto, window usualmente no lo utiliza; pero, window hace  referencia digamos a todo el **Javascript** disponible. Entonces, window es un nivel más alto que el document; pués este solamente hace referencia al HTML. Load es un evento por lo tanto vamos a crear una función (function) con sus paréntesis y corchetes cuadrados {}; a esta función se le conoce como callBack; es decir que cuando el evento agregado (addEvenListener) ocurre o sucede seguidamente la función (function); ahora vamos a mover un console.log(2) dentro de la función. Nuestra línea queda así:

````JavaScript
console.log(1);
window.addEventListener('load', function(){console.log(2);}) console.log(5);
````

Es evidente que, vamos a tener un console.log(1), un console.log(2) y un console.log(5); pero el console.log(2) va a esperar a que el documento esté listo sí guardamos cambios podemos ver que aparecen los números uno (1), cinco (5) y el dos (2). Ya nuestro código no se ejecutó de arriba hacia abajo, sino que esperó a que suceda el evento de window.addEvenListener. Ahora load nos va a decir que espera a que el **JavaScript** y los archivos que dependen del HTML, estén listos.

Realicemos otro ejemplo; escribamos `window.onload = function(){console.log(3)}` esta es otra forma de hacer el anterior ejemplo; pero, el resultado es el mismo. Guardamos cambios y observamos que todo salió correctamente. Apareció el número uno (1), cinco (5), dos (2) y tres (3); los dos eventos de las funciones (function) ocurren después de que el console.log(1 y el del 5). Resumiendo un poco, se espera que, nuestro archivo de JavaScript (script.js) a que las imágenes, las hojas de estilo, todo se haya descargado para entonces sí comenzar a ejecutar el código.

Un tercer evento es `document.addEvenListener()` y vamos a esperar a que suceda un evento ('load') en este tercer evento vamos a escribir o a reemplazar el load por `DOMContentLoad`; Ese DOM debe de ser en mayúsculas como la letra "L"; nuevamente, en caso de que una vez se cumpla el addEvenListener se ejecute, pasamos a la funcion (function) y vamos a escribir un console punto log con un valor de cuatro (4); o sea que nuestra línea es:

```JavaScript
document.addEventListener( 'DOMContentLoad', function(){console.log(4)})
```

Excelente, nos aparece en consola en orden descendente el número uno (1), el número cinco (5), el número cuatro (4), el número tres (3) y el número tres (3); debido a que es el orden de los eventos que necesitabamos hacer o llamar: se ven un poco extraño el orden pero así suceden. Cuál es la diferencia entre el DOMContentLoad y el load? en el caso del load espera a que se descargue todo el HTML o sea que, espera a que se descargue todo; imágenes, CSS, el JavaScript; todo lo que se tenga en nuestro archivo HTML para este caso contacto.html.

y en el DOMContentLoad solamente espera a que se descargue el HTML; sin importar sí se han descargado las imágenes, el CSS, etc. Tiene algo de lógica, porque el HTML se va a descargar más pronto que el JavaScript o los estilos, etc. pOr esto es que se ejecuta en nuestro ejemplo del DOMContentLoad; y dentro de todo esto cuál podríamos utilizar? creo que se podría utilizar el DOMContentLoad porque solamente tiene el HTML, no espera por más archivos. No vamos a esperar que se descarguen las hojas de estilo o las imágenes, etc. Pero lo que sí vamos a esperar o lo que sí requerimos es el HTML.

Por lo tanto con el DOMContentLoad es más rápido o se va a empezar a ejecutar nuestro código sin mayores contratiempos; por lo que es más recomendable. De otra parte, podemos ver que estamos seleccionando un elemento (window) y seguidamente le agregamos un evento (addEventListener) y para registrar el evento un (load), también tenemos una función (function) y estas funciones pueden ser o se pueden utilizar aparte; por ejemplo, `function imprimir(){console.log(2)}` y en lugar de la function lo reemplazamos por imprimir; nuestro código quedaría de la siguiente manera:

```JavaScript
console.log(1);
window.addEventListener('load', imprimir);
window.onload = function (params) {
    console.log(3);
}
document.addEventListener('DOMContentLoaded', function (params) {
    console.log(4);
})
console.log(5);
function imprimir(){
    console.log(2);
}
```

Listo, como pudimos ver de esta forma en que escribimos la función (function) por fuera ese evento addEventListener sabe que tiene que llamar a la función imprimir; Vemos que, nuestra función se ejecutó correctamente desde la función (function) imprimir. Sí lo preferimos, podemos crear funciones (function) por aparte o separadas para no depender de una función muy grande asociada al evento. Es decir, si son pocas líneas de código se puede hacer de esta manera que la hicieramos al principio; pero sí el lo contrario utilizamos funciones por separado.

Es cierto que, existen muchas funciones como por ejemplo, `window.onscroll = function(){console.log('scrolling...');}`

Al guardar cambios, observamos que nos deja ver las líneas que hacemos scroll sobre nuestro archivo contacto.html de inmediato en nuestra consola podemos observar los escalones o las líneas que tenemos mientras hacemos scroll con nuestro mouse. O sea que la función (function) se está ejecutando múltiples veces cada vez que vamos bajando hasta la parte final de nuestro archivo HTML.

Para finalizar, en la siguiente lección one hundred forty eight (148) vamos a ver un poco más de eventos; estaremos seleccionando un elemento HTML para registrarlo, porque aquí en esta lección dijimos este término y lo hicimos en window y en document por qué esto existe en **JavaScript**; pero, queremos registrar o seleccionar nuestro código HTML para agregarle cierto comportamiento.
