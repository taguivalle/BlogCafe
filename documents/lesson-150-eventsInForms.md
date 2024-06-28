# BLOG CAFÉ

## Evens In Forms

En esta lección one hundred fifty (150) veremos el tema de los eventos en los formularios; más exactamente el tema del submit; este se lleva a cabo cuando un usuario envía un formulario. Para esta lección mostraremos primero para que sirve o que lo podemos utilizar con el objeto de hacernos una idea del tema. Por ejemplo, cuando vamos a utilizar el evento de submit cuando el de un click.

En una anterior lección teníamos una variable llamada btnEnviar; básicamente, tenemos un botón y a este le agregamos un evento de click; si inspeccionamos el código en la sección form podemos ver que tenemos una clase llamada formulario; entonces, vamos a seleccionarla para agregarle elementos como el evento de submit; a si mismo, en nuestro código script.js vamos al final de la variable btnEnviar vamos a comentar algo así: // Un evento de submit para ir haciendo el paso a paso de nuestro tema central.

Estando en nuestro archivo antes mencionado vamos a crear una variable llamada formulario (es un ejemplo) y esta la igualamos a document punto querySelector porque vamos a seleccionar un elemento de nuestro archivo contacto.html y es esa clase llamada formulario; por lo tanto nos interesa un solo elemento y querySelector es la mejor opción. Ya nuestra primera línea de código quedaría así: `const formulario = document.querySelector('.formulario)` como ya tenemos creada la variable de formulario; Entonces vamos a llamar al formulario y le agregamos el addEventListener y dentro de sus paréntesis vamos a registrar un evento y en los formularios vamos a agregarle un click por lo tanto vamos a escuchar por el evento llamado Submit.

Recordemos que, en los formularios vamos a tener multiples inputs, TextArea, etc. Pero, siempre debemos de tener un input de tipo submit; o también nos funcionaría un `<button type="submit">Enviar</button>` estos deben de ser obligatorios, estos son los que, van a enviar o por decirlo así son los que se encargan de ejecutar el formulario. Es normal que veamos como la apariencia de un botón; pero, podemos decir que, es el que nos va a permitir enviar el respectivo formulario. Reiteremos que, es obligatorio tener cualquiera de estos botones.

Seguidamente, o sea después del evento 'submit' vamos a tener un callBack y este va a ser una función (function) con sus respectivo paréntesis, dentro de estos vamos a llamar el evento (e, evt, evnt o evento) y llaves {} dentro de esta llaves vamos a tener un evento con el preventDeFault() para prevenir una acción, en la siguiente línea vamos a tener un console.log() con un mensaje que diga por ejemplo 'Enviando el Formulario'. Algo muy importante a tener en cuenta es que, nuestras dos variables o nuestro dos botones (btnEnviar y formulario) uno está seleccionando un botón enviar y la otra parte esta seleccionando el formulario, solamente uno de los dos va a funcionar y para este caso va a funcionar el btnEnviar. Nuestro código queda Así:

```JavaScript
const formulario = document.querySelector('.formulario');
formulario.addEventListener('submit', function(evento){
    evento.preventDeFault();
    console.log(Enviando Formulario)
})
```

Pero, por qué?. Al momento de oprimir el botón enviar; podemos observar que, se está enviando el formulario en minúsculas mientras que la variable formula la distinguimos porque viene en mayúsculas. Y por qué no ejecuta el formulario? porque estamos previniendo la accion por default (preventDeFault); por lo tanto se va a prevenir asa acción. También se va a prevenir enviar por default el formulario; Si hicieramos un ejemplo de comentar nuestro código btnEnviar y al guardar cambios observamos que nos aparece 'Enviado Formulario' en mayúsculas.

Ahora, en que casos debemos utilizar un click o un submit? usualmente submit lo vamos a utilizar en un formulario debido a que es una buena práctica; pero, muy importante, si observamos como el click que se encuentra seleccionando el input de tipo submit y este se encuentra asociado al botón; en cambio, el submit se encuentra asociado al formulario. Esto es importante tenerlo en cuenta.

Con base en lo anterior, podemos decir que, si escuchamos un click, puede ser cualquier elemento hasta un texto, alguna imágen; al momento de darle me gusta la foto de alguién seguramente tiene asociado un click a la imágen o al texto; cuando estamos comprando en línea y presionamos agregar al carrito de compras muy seguramente se tiene un click asociado a ese agregar carrito y agregar la información a un carrito de compras que usualmente sería un array.

Pero en este caso es un formulario; por lo tanto estamos enviando la información y debe de estar relacionado o asociado a submit. Como dijimos anteriormente vamos a necesitar comentar la variable btnEnviar para continuar con la dinámica  de esta lección, debido a que estamos validando es la información de un formulario. De igual manera vamos a cortar nuestra variable formulario y la dejamos al final de la parte de los eventos de los input y de los Textarea que tenemos en nuestro archivo script.js.

Como una especie de orientación es buena idea tener organizado el código de tal forma que las variables se encuentren en la parte superior; con base en esto vamos a mover nuestra variable formulario, la cortamos y la pegamos al final donde tenemos nuestra variables nombre, email y mensaje. Así mismo los addEventListener deben de esta juntos. Pero qué nos faltaría para estructurar mejor nuestro código o nuestro proyecto?

Podemos observar que, estamos enviando un formulario con el console.log de nuestra formulario; si guardamos cambios, tenemos un formulario vacío; por lo tanto lo primero que podemos hacer es validar precisamente el formulario y posteriormente enviar el formulario; Entonces al final de nuestra línea `evento.preventDeFault();` vamos a realizar estas dos líneas siguientes. Pero esto lo haremos en la siguiente lección one hundred fifty one (151) llamada Creando un validador de formularios parte uno (1) de dos (2)
