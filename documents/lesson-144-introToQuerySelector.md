# BlogCafé Section eleven (11)

## INTRODUCCIÓN A LA CLASE NÚMERO 144 SELECCIONAR ELEMENTOS CON querySelector()

### Breve Nota

A mi propóposito de ver, este proyecto que vamos a inciar se trata de JavaScript DOM Events Init; siendo esta la lección One Hundred Forty four (144); me tomé el atrevimiento de realizarlo sobre el proyecto Blog Café  que teníamos desde inicios de este curso de **HTML, CSS Y JavaScript**; para agilizar y no consumir más recursos tanto de tiempo como hardware y software; pués, al momento de iniciarlo como decía el tutorial de nuestro excelente instructor **JUAN PABLO DE LA TORRE**, ví que este proyecto **JavaScript DOM Events Init** lo podía continuar desde aquí mismo.

Ahora bién, en este tutorial JavaScript DOM (Document Object Model) <https://lenguajejs.com/javascript/dom/que-es/> "¿Qué es el DOM?" Events Init, el señor instructor **JUAN PABLO DE LA TORRE**, inicia abriendo el archivo **contacto.html** en el servidor local de nuestra preferencia. Inicialmente, vamos a abrir la carpeta llamada **js**; recordemos que, también ya teníamos un archivo llamado **modernizr.js**; acto seguido, vamos a crear otro archivo dentro de esta misma carpeta (js) y lo llamaremos **script.js** (es por convenciones).

Ya estando en nuestro archivo vamos a escribir un mensaje; console.log ('Funciona correctamente') y nos aparece sin inconvenientes en la consola; esto obviamente no va funcionar; porque tenemos que agregar o copiar el nombre de este archivo script.js al final del archivo contacto.html, antes del cierre de la etiqueta `</html>`; vamos ir haciendo esta teoría paso a paso para no confundirnos; guardamos cambios y procedemos a darle click derecho del mouse en la opción inspeccionar sobre el archivo en la página web y observamos que nos salió el respectivo mensaje del archivo script.js. Veamos como queda nuestra línea.

```JavaScript
const heading = document.querySelector('Funciona correctamente'); // cero (0) o un (1) elemento
console.log(heading);
```

Como pudimos obervar, en consola la línea se escribió correctamente, esto significa que sí hemos agregado normalmente nuestro archivo script.js; ahora, vamos a eliminar el código console.log('Funciona correctamente') o comentarlo si es el gusto, debido a que, solamente lo necesitábamos para realizar las pruebas que acabamos de hacer.

```JavaScript
const heading = document.querySelector(''); // cero (0) o un (1) elemento
// console.log(heading);
```

Bién, vamos a seleccionar contenido y esto se puede realizar de una de las tres funciones más utilizadas y llamadas:

1. QuerySelector().
2. QuerySelectorAll().
3. GetElementById().

Las dos primeras serían las más modernas y la última tiene un buen rato de uso; pero, existen muchos ejemplos con este getElementById; se nombra este para tener una referencia dentro de esta introducción del DOM scripting.

### Comencemos con querySelector

Inicialmente, este nos va a retornar ya sea ninguno o hasta un elemento que concuerde con el selector que estamos escribiendo; algo que tienen las dos primeras funciones nombradas es que son selectores muy similares a los que hemos manejado en CSS; son exactamente iguales; ¿a qué nos referimos? sí vamos a seleccionar una clase, utilizamos el punto y el nombre de la clase y sí vamos a seleccionar una id lo hacemos con el símbolo de gato o numeral (#id) vamos a realizar un ejemplo siempre es mucho más claro.

Supongamos que, queremos seleccionar el texto del Blog de Café (Blog de Café con Consejos y Cursos) de nuestro sitio web; se observa que tenemos un h2; esto lo podríamos hacer de la misma forma que lo haríamos con CSS; en nuestro archivo script.js vamos a crear una variable y la nombramos por ejemplo heading, la igualamos a document (recordemos que al hacer click sobre document todo nuestro sitio web se resalta en color azul) Por lo tanto, document hace referencia a todo el documento que tenemos en el archivo HTML desde la etiqueta `<!DOCTYPE html>` hasta el cierre de la misma `</html>`; de acuerdo con esto, todos los selectores nombrados anteriormente, todos van a inciar con el document.  

Continuando con nuestro código, lo igualamos a document y como es un objeto le escribimos un punto para poder acceder a un objeto y nuestro editor de texto nos ayuda con el autocompletado (recordemos que un querySelector retorna cero (0) o un (1) elemento) y dentro del paréntesis del querySelector iría el selector de CSS, con esta línea estamos buscando el título "Blog de Café con Consejos y Cursos" siendo esta una etiqueta `<h2>` anteponiéndole un punto. Entonces, vamos a colocar ese `<h2>` dentro del mencionado paréntesis y entre comillas, (puede ser sencillas o dobles) En la siguiente línea vamos a colocar un console.log(heading); primero, realicémoslo en nuestro archivo (md) y posteriormente guardamos cambios, para ver que sucede en la consola.

```JavaScript
const heading = document.querySelector('.h2'); // cero (0) o un (1) elemento
console.log(heading);
```

Bién; como pudimos observar en la consola nos trae toda la información de ése título, por lo que nos da a entender que estamos seleccionando a ese elemento correctamente. Analicemos que, al igual que en CSS, escribir el elemento de esa forma `('.h2')` con el nombre de la etiqueta `html` puede darnos resultados tal vez no muy exactos; porque, en la mayoría de los casos vamos a tener más de un `<h2>`; es cierto, sí seleccionamos un párrafo muy seguramente tendremos más de uno.

Para solucionar este pequeño impace, al dar click en inspeccionar (esto se hace haciendo click sobre el botón del lado derecho de nuestro mouse) procedemos a ver que, todo este se encuentra dentro de un div class llamado header text y utilizando los principios de BEM (Bloque Evento Modificador) <https://animaticss.com/articulo/que-es-bem-css/> "¿Qué es BEM CSS?". Sabemos que esto muy dificilmente se va a repetir. Por lo tanto, dentro del paréntesis le podemos colocar después del punto `header__texto` (doble guión bajo) y un espacio seguido antes del h2. Veamos como nos queda la línea de código.

```JavaScript
const heading = document.querySelector('.header__texto h2'); // cero (0) o un (1) elemento
console.log(heading);
```

De esta forma, estamos seleccionando el `<h2>` que se encuentra dentro de ese `header__texto`; sí llegase otro `<h2>` dentro de este main; pero, no tiene esa clase de texto el otro no lo va seleccionar; entonces, es una buena práctica porque va a seleccionar solamente los elementos que se encuentren dentro del paréntesis de la variable heading; para este caso; sí guardamos cambios podemos ver en consola los elementos que hemos relacionado.

Otra forma es escribirle un `id = "heading"` a la etiqueta `<h2>`, dentro del archivo html **contactos.html**; sabemos que es unico de ese `div class= "header__texto"`; así no tenemos que anidar al selector de esta forma tan específico; seguramente en nuestro archivo **script.js** reemplazamos ese elemento existente por `#heading`; guardamos cambios y observamos que no hubo nada extraño. Nuestro código es:

```JavaScript
const heading = document.querySelector('#heading'); // cero (0) o un (1) elemento
console.log(heading);
```

No es mala práctica hacerlo de esta manera que acabamos de hacer con el selector; de hecho se recomienda que los `id` sean utilizados con JavaScript; no debemos de utilizar el id para darle estilos **CSS**, usémoslos más bién con nuestros selectores de **JavaScript**; pero, no pasa nada si los utilizamos en una clase. En nuestro caso, para no modificar tanto el **HTML**, los regresamos y utilizaremos las clase padre y el elemento `<h2>` como lo teníamos en un principio.

De lo anterior, no tiene nada de espectacular, no estamos seleccionando el elemento y lo estamos viendo en consola; pero, **JavaScript** nos permite manipular los elementos del **HTML**; al momento de enviar un elemento a la consola en nuestro navegador solamente tenemos la etiqueta y su contenido; pero sí lo enviamos a Firefox developer prediction este va a tener mucho más información; podemos obervar un triángulo :small_red_triangle_down: y al expandirlo, se encuentra una serie de propiedades del elemento que acabamos de seleccionar. al hacer un poco más de scroll se nota; por ejemplo en la tagName y nos dice  que es un h2 y en general con la información de todo nuestro sitio web.

Teniendo en cuenta lo anterior, todo la línea `console.log(heading)` al momento de utilizar querySelector es muy similar a un objeto; recordemos que, la forma en que se cambian las propiedades de un objeto es con un punto. Por lo tanto, vamos a cambiar esa línea; escribimos Nuevo heading.`textContent = 'Nuevo heading'`; guardamos cambios y observemos que sucede en la consola; todo sale como se escribió en el código; pero en Firefox se ve lo más detallado posible, con un menú que podemos utilizar y uno muy común es classList; este nos permite agregar o eliminar clases. Y nuestro código es:

```JavaScript
const heading = document.querySelector('.header__texto h2'); // cero (0) o un (1) elemento
heading.textContent = 'Nuevo heading';
```

Nótese que, que al guardar cambios va a a aparecer el subtítulo "Nuevo Heeding" y lo estámos modificando ya con código de JavaScript. Ahora, vamos a crear una línea así: `heading.classList.add('Nueva-clase');` y sal momento de guardar aparece en nuestro navegador el `<h2 clase="no-margin nueva-clase">Nuevo Heading</h2>` entonces, es mucho lo que se puede hacer con JavaScript en los proyectos;  Esto viene a ser el cero punto uno por ciento (0.1%) es una pequeña parte de lo que podemos hacer con el scripting de **JavaScript**.

```JavaScript
heading.classList.add('Nueva-clase');
```

Lo más importante de esta lección es que `querySelector` nos retorna cero (0) on uno (1) elementos. A que se refiere esto, al observar la consola notemos que tenemos unos enlaces (Nosotros, Cursos y Contactos); tres arriba y tres abajo. Sí dentro del paréntesis de nuestra variable heading colocamos la etiqueta `<a></a>` y lo enviamos a la consola; no importa mucho el nombre de la variable; observemos como solamente envía la consola 1; por supuesto que hay más enlaces pero el `querySelector` se limita al máximo uno (1).

Ahora, si nos llegásemos a equivocar con el selector por uno que no existe, el heading arrojaría **null** o vacío. O sea que, **JavaScript** dice, cometiste un error, tal vez quisiste decir esto, o tal vez buscabas este otro selector; no nos va a decir, simplemente nos va retornar que está vacío. entonces, si tenemos algo así como **null**, lo más seguro es que se encuentre algo mal escrito. En la próxima clase one hundred forty five (145) vamos a ver el tema de **querySelectorAll**.
