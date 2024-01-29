# BLOG CAFÉ

## Keyboard events

Como es es común tratamos de hacer una pequeña introducción de esta lección one hundred forty nine (149) y para este caso vamos a tener uno llamado Keyboard events; que sería algo así como aquellos eventos que suceden al momento de insertar datos en un formulario; para esta lección vamos a comentar o a limpiar algunos datos de nuestro archivo script.js; para mi preferencia voy a comentarlos.

De acuerdo con lo anterior, vamos a comentar la parte que habíamos comentado de eventos; en mi caso desde la línea treinta y ocho (38) hasta la cincuenta y cuatro (54). Esto con el fin de que, nuestra consola se encuentre un poco más limpia al momento de imprimir. Seguidamente al final del mismo archivo Ja que nos escontramos vamos a comentar una línea y que esta diga por ejemplo, `// Eventos de los inputs y los TexTarea`.

Ahora, esto eventos son muy comunes porque al momento de escribir en las cajas de texto se requiere validar o leer lo que el usuario está escribiendo y/o enviando. Podemos ver que, tenemos un `id="nombre"` en el input del formulario de nuestro archivo contacto.html; por lo tanto podemos utilizarlo para seleccionar ese elemento y agregarle un addEventListener y que este revise lo que el usuario está escribiendo.

Listo, pasamos a nuestro archivo script.js y en la última línea vamos a crear una variable que se llame por ejemplo nombreInput; es a criterio personal para este ejemplo. continuamos con la misma estructura del código que hemos venido trabajando en el transcurso del archivo JS; entonces, vamos a igualar nuestra variable a document.querySelector; pero, porqué un querySelector? porque estamos trayendo un id y en este caso se encuentra un solo elemento que es el nombre. Y recordemos que el querySelector nos trae de cero (0) a máximo elementos. Seguidamente escribimos los paréntesis y dentro de estos vamos a llamar a nuestro elemento dentro de unas comillas simple '#nombre'.

Al momento de guardar cambios vemos que, en nuestra consola podemos escribir nombre y nos sale más intenso el color del input con el id de nombre. Nuestra línea de código queda así: `const nombreInput = document.querySelector('#nombre);` De momento todo está saliendo correctamente; Como sabemos, tenemos seleccionado el nombre y recordemos que por intermedio del querySelector y al colocarle un punto ya nuestro editor de texto nos ayuda con un menú a disposición; con este le agregamos un addEventListener y dentro de los paréntesis podemos registrar un evento.

Análogamente, cuando un usuario escribe sobre una caja de texto aquí hay muchos eventos que podemos utilizar por ejemplo, entre comillas simples 'change' lo separamos y le agregamos una función (function) con sus respectivos paréntesis y llave {}; dentro de las llaves vamos a escribir un console.log con un mensaje que diga escribiendo...
y nuestro código quedaría de la siguiente manera:

`const nombreInput = document.querySelector('#nombre);
nombreInput.addEventListener('change', function(){
    console.log('Escribiendo...');
})`

Posteriormente, al guardar cambios y escribimos algo en el formulario de nuestro archivo contacto.html, damos enter, y de inmediato nos sale el mensaje en la consola de Escribiendo... Ahora este change tiene un detalle; al momento de oprimir la tecla enter on salirnos de esa caja de texto; este change se ejecuta hasta que, salimos de la caja de texto. Sí queremos tener una validación más en tiempo real. Change no va a ser la mejor opción; la que puede ser mejor vendría a ser un input; probemos en nuestro formulario; pero no olvidemos cambiar change por input en nuestro archivo script.js.

Al guardar cambios y empezar a escribir cualquier cosa en la caja de texto del campo nombre observamos en consola que comienza a enumerar las veces que vamos oprimiendo una tecla. Entonces, como podemos ver o leer lo que el usuario está escribiendo? Bien recordemos que, en nuestra función (function) le podemos pasar un evento de lo que está sucediendo y dentro de los paréntesis podemos escribir la letra e, o la palabra event, o evt, o evento; probemoslo en nuestro archivo script.js a ver que sucede. No olvidar cambiar el mensaje del `console.log(e), console.log(event), console.log(evt), console.log(evento)`

Podemos observar que, una vez guardado los cambios escribimos cualquier cosa en la caja de texto del archivo contacto.html y en el campo nombre, nos aparece de inmediato por ejemplo, al escribir la palabra Hola, nos sale en consola cuatro líneas representando cada letra que hemos escrito en ese input; ahora si desplegamos la última línea esta nos deja ver una cantidad de información que sí es de nuestro agrado podemos estar ralizando o leyendo para ir entrenando al respecto de esta información que nos trae el input.

De nueva cuenta, tenemos otros dos campos más, un e-mail y un mensaje que viene a ser un Textarea; entonces en nuestro archivo script.js vamos a duplicar la variable pero le vamos a cambiar nombre por e-mil y por el de mensaje; o sea que, nuestra línea queda así: `const email = document.querySelector('#email);` y la siguiente línea sería `const mensaje = document.querySelector('#mensaje);`. Si queremos asociar una función que también lea los valores de esos dos campos, tendríamos que hacer una función (function()) y vendría a ser un código igual a la que tenemos; pero, solamente le cambiamos el nombre de la variable que corresponda para cada caso. El total de nuestro código quedaría así:

`const nombreInput = document.querySelector('#nombre);
const email = document.querySelector('#email);
const mensaje = document.querySelector('#mensaje);
nombreInput.addEventListener('change', function(e){
    console.log(e);
});
email.addEventListener('change', function(e){
    console.log(e);
});
mensaje.addEventListener('change', function(e){
    console.log(e);
});`

Nuevamente, todo sale excelente, pudimos ver que en el momento que escribimos algo en cada input; nombre, email y mensaje, nos sale en consola la respectiva información de esos eventos letra por letra. Pero, como nuestra información se ve un poco repetida podríamos hacer una función leer texto y en cada addEventListener cambiamos los valores pro este de leer texto; y dentro de esta función haríamos un console.log('Escribiendo); y esto haría lo mismo que nuestro código anterior; por lo tanto nuestro código quedaría así:

`const nombreInput = document.querySelector('#nombre);
const email = document.querySelector('#email);
const mensaje = document.querySelector('#mensaje);
nombreInput.addEventListener('change', leerTexto)
email.addEventListener('change', leerTexto)
mensaje.addEventListener('change', leerTexto)
function leerTexto(){
    console.log('Escribiendo);
}`
 Posteriormente, de haber guardado los cambios observamos que todo salió normalmente como el anterior código sino que con este último lo que hicimos fue simplificarlo. Con esto nos permite poner en práctica un poco las funciones con los selectores junto con los eventos; también estamos actualizando, debido a que estamos mandando a llamar a la función; pero no podemos acceder a los valores.

 En este caso también podemos ver que, no hay forma de pasarle la letra e de evento; pero, como estamos asociando la función leerTexto le podemos pasar ese evento a esta función por lo tanto, en el console.log(e) le pasaríamos también el evento y el resultado sería prácticamente lo mismo; de igual manera, el código queda de la siguiente manera:

`const nombreInput = document.querySelector('#nombre);
const email = document.querySelector('#email);
const mensaje = document.querySelector('#mensaje);
nombreInput.addEventListener('change', leerTexto)
email.addEventListener('change', leerTexto)
mensaje.addEventListener('change', leerTexto)
function leerTexto(e){
    console.log(e.target.value);
}`

Nuevamente, nuestro ejemplo, encuentra perfecto, después de ingresar datos en el formulario nos aparece los valores en la consola; Entonces, estámos leyendo todos los datos ingresados con una sola función. Ahora, vamos a validar este formulario, por lo tanto vamos a crear una variable que sea la primera línea de nuestro código. Este va a ser un objeto y lo nombraremos datos; es un ejemplo para mí caso; y este objeto va a tener los mismo datos que tenemos en el formulario; es decir, nombre, email y mensaje.

Vamos a inicializarlos con el nombre con un string vacío no va a tener nada colocamos una coma lo mismo con los otros dos elementos; Observemos que, esta función va a tener objetos globales y por lo tanto nos sirven a lo largo de diferentes funciones; es decir, una en la función leerTexto y otra que va a validar el formulario. Ahora nos trasladamos hasta le función leerTexto le agregamos otro console.log(datos) que vendría a ser el objeto o la nueva función que acabamos de crear. Por lo tanto, nuestro código es:

`
const datos = {
    nombre: '',
    email: '',
    mensaje: ''
}
const nombreInput = document.querySelector('#nombre);
const email = document.querySelector('#email);
const mensaje = document.querySelector('#mensaje);
nombreInput.addEventListener('change', leerTexto)
email.addEventListener('change', leerTexto)
mensaje.addEventListener('change', leerTexto)
function leerTexto(e){
    console.log(e.target.value);
    console.log(datos);
}
`
Pero, analicemos que, al momento de guardar cambios y escribir dentro de los campos inmediatamente en la consola aparece el objeto que acabamos de escribir y posteriormente aparecen los otros dos objetos; se ve normal; pero, lo más dinámico por decirlo de esa manera, sería que lo que nosotros escribamos se agregue automáticamente en el nombre dentro de la consola.

Entonces, vamos a recordar cuando vimos la sintaxis de objetos teníamos algo así como datos que si queremos escribir el nombre, el email o el mensaje; dentro de la función leerTexto vamos a crear una línea llamando nuestro objeto datos unos corchetes cuadrados [] dentro de estos traemos el evento (e) seguido de un punto con un target punto id (debido a que todos los objetos nombre, email y mensaje tienen un id) y los vamos a igualar a un evento (e) punto target punto value y finalizamos con un punto y coma. No olvidemos comentar la línea `console.log(e.target.value);` o reutilizarla. Y nuestro código quedaría así:

`
const datos = {
    nombre: '',
    email: '',
    mensaje: ''
}
const nombreInput = document.querySelector('#nombre);
const email = document.querySelector('#email);
const mensaje = document.querySelector('#mensaje);
nombreInput.addEventListener('change', leerTexto)
email.addEventListener('change', leerTexto)
mensaje.addEventListener('change', leerTexto)
function leerTexto(e){
    //console.log(e.target.value);
    datos[e.target.id] = e.target.value;
    console.log(datos);
}
`
Excelente, después de guardar cambios, pudimos observar que, los datos ingresados en los campos aparecen en el objeto de nuestra función objetos. Con base en lo anterior, podemos utilizarla en todos nuestro formularios, teniendo en cuenta que, deben de ser el mismo nombre; es decir los id de los objetos con su respectivo input. Por lo visto, se ve bastante bien hasta el momento los ejemplos; previamente, vimos los eventos onclick y estos los eventos en clicks, en la próxima lección one hundred fifty (150) llamada Eventos en formularios y vamos a tener algo muy especial como son los submit, sabiendo que estos se llevan a cabo cuando un usuario envia un formulario; vamos a ello.
