<!-- In that lesson one hundred forty six (146) trataremos el tema de createElement -->

# BLOG CAFÉ

## CREAR ELEMENTOS html desde JavaScript

En esta lección one hundred thirty six (146) trataremos el tema de como crear elementos HTML pero desde JavaScript. Este tema es muy común; por ejemplo, cuando ingresamos a Amazon y agregamos un artículo a nuestro carrito de compras; este artículo al momento de presionar se agrega automáticamente al mencionado carrito y eso es código generado por JavaScript. O cuando escribimos algo en facebook, un estado nuevo; esto también se genera por medio de JavaScript. Vamos a generar código para poder entender un poco de esta tema.

seguidamente y después de haver comentado la anterior línea en nuestro archivo script.js más exactamente la línea del remove; haremos una línea de la siguiente manera: creamos una variable const nuevaEnlace, la igualamos a document punto; seguidamente, creamos una clase con el comando createElement; este nos permite crear elementos HTML; posteriormente, ingresamos unos paréntesis y dentro de estos unas comillas sencillas o dobles; escribimos la etiqueta que tenemos en mente crear; como las que utilizamos en HTML. h1 o H1, un div1 o un DIV1 o si vamos a generar un párrafo p1 o P1, etc; pero es recomendable en mayúsculas.

Posteriormente, escribimos el console.log que dentro de sus paréntesis tenga el nombre de nuestra variable, guardamos cambios y vamos a ver el enlace que estamos creando; pero veamos como queda nuestra línea.

`const nuevaEnlace = document.createElement('IMG'),
console.log(nuevaEnlace);`
Como podemos apreciar nos apareció la etiqueta tanto de apertura `<a>` como la de cierre `</a>`; pero, sin ningún contenido y tampoco tiene atributos; Es de entender que tenemos que hacer ciertas cosas; pués sabemos que en HTML la estructura como tal de un enlace debe de tener esta forma; `<a href = 'nosotros.html' class = 'nuevo-enlace'>Nosotros</a>`.

O sea que en nuestra consola nos apareció solamente el enlace sin los respectivo atributo; Entonces, podemos hacer lo siguiente:

1. Agregar un href.
2. Agregar el texto.
3. Agregar la clase.

En el primer punto; veamos que en nuestro archivo script.js creamos un nuevoEnlace; por lo tanto, le podemos colocar un nuevoEnlace y le ponemos propiedades igual que en los objetos con un punto seguido de href y lo igualamos a un string por ejemplo, 'nuevo-enlace.html' Y este sería el primer punto. Podemos ver que se agrega un archivo HTML dentro del JavaScript en donde se encuentra el href como un nuevo enlace.

en el segundo punto; es la parte en donde Escribimos Nosotros al final del signo mayor que > de la etiqueta a y quedaría así: `nuevoEnlace.textContent = 'Un nuevo enlace';`. y este textContent es Nosotros.

En el tercer punto; nos encontramos con la clase; y si observamos en nuestro archivo nosotros.html tenemos un clase que se llama navegacion__enlace; entonces; escribimos nuevo enlace punto classList le agregamos al nombre de esa clase de nuestro archivo nosotros .html; o sea navegacion doble guión bajo enlace.

Entonces, en el HTML sería algo como esto: `<a href="nosotros.html" class="Nuevo__enlace">Nosotros</a>`; algo muy sencillo; pero, en nuestro archivo script.js sería así:

1. Agregar el href:
    `nuevoEnlace.href = 'Nuevo-enlace.html';`

2. Agregar texto:
    `nuevoEnlace.textContent = 'Un nuevo enlace';`

3. Agregar el enlace:
    `nuevoEnlace.classList.add('navegacion__enlace');`
console.log(nuevoEnlace);

Veamos que sucede después de guardar cambios. Sale todo perfecto en nuestra consola, más adelante estaremos viendo los beneficios del por qué hacer lo de esta forma con scripting y no desde el mismo HTML; Debido a que, se incluye mucho más dinamismo a los proyectos.

Es decir viene la información desde una DB; no sabemos que texto es; pero, al momento de escribir en HTML ya sabes cuál es esta. En cambio si esta viene de una DB o lo que un usuario escribió en un formulario; Entonces sí se debe de hacer de la forma más dinámica posible; como la estamos haciendo en esta lección.

El último paso, es que una vez se haya creado todo el elemento HTML es agregarlo al documento; si bién estamos creando el elemento también debemos de decirle a JavaScript en dónde va a estar ubicado en dónde queremos agregarlo. Para este caso podríamos a agregarlo en la navegación de la parte superior de nuestro archivo nosotros.html.

Allí es encuentra un `nav class="navegacion"` y en la parte inferior tenemos una clase llamada navegacion y si recordamos un querySelector nos retorna máximo de cero (0) a un (1) elementos; por lo tanto este nos va a retornar el primero que encuentra en el recorrido desde arriba hacia abajo.

Entonces, si escribimos sobre nuestra consola algo así como: `document.querySelector('.navegacion)` nos va a resaltar el primer objeto navegacion que encuentre y ahí se detiene; así hayan más objetos con el mismo nombre.

Ahora la línea quedaría de la siguiente manera:

`const navegacion = document.querySelector('.navegacion');`

Recordemos que, ya tenemos como referencia a la navegacion de la parte superior y por lo tanto tenemos acceso una función llamada appendChild y esta es la función que nos permite agregar un elemento e insertarlo a una variable en otro lugar. Ahora, le agregamos como hijo de esa navegacion al nuevo enlace appendChild. O sea que nuestra línea seguiría así:

`navegacion.appendChild(nuevoEnlace);`

Bién, observemos que, es como agregar un hijo; la traducción sería agregar un hijo (appendChild); de nueva cuenta en nuestra consola aparece todo excelente. Si queremos le cambiamos en la línea de agregar texto el nombre por tienda virtual o algo así. Y los cambios son evidentes. Para mí caso lo nombré carrito.

Es algo a tener en cuenta que, no vamos a generar todo los enlaces de esta forma, solamente lo que se presente al momento; pero de una forma más dinámica; esta clase de situaciones las estaremos viendo con un poco más de detalle en el transcurso de las lecciones, al momento de tener una DB.

De igual forma, es importante que conozcamos un poco que en JavaScript se puede generar código HTML. Esto también se va a utilizar esta forma de acabamos de ver para generar código HTML va a ser por ejemplo, en la validación de formularios, debido que aquí se van a mostrar alertas sí el mensaje se envío correctamente o lo contrario, o sí falta por diligenciar campos obligatorios, etc.

en la siguiente lección one hundred forty seven (147) estaremos viendo temas relacionados con los eventos en JavScript.
