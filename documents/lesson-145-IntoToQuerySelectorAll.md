# Blog Café

## Seleccionar elementos con querySelectorAll()

En esta lección one hundred forty five (145) vamos a tratar el tema de como seleccionar elementos con querySelectorAll() que a diferencia del anterior tema querySelector() que retorna de cero (0) a máximo un elemento; querySelectorAll() retorna a ceros y sí el selector está incorrecto o no hay ningún elemento hasta todos los elementos que concuerden con el selector tipo CSS que le pasemos a la función de querySelector(); vamos a verlo con un ejemplo.

Inicialmente, vamos a colocar una nueva variable `const enlaces` en el archivo que hemos venido trabajando llamado script.js; sí recordamos los enlaces tenemos al rededor de seis (); recordar que, utilizamos un querySelector y que este solamente nos retornó un uno ().

Nuevamente, vamos a iniciar este selector con document agregamos un punto (.) en donde nos permite acceder al querySelectorAll() dentro de este paréntesis vamos agregar todos todos los enlaces; si observamos en consola una etiqueta `<nav class="navegacion">` y después los enlaces que vamos a colocar.

Entonces, vamos a colocar `('.navegacion a')` la letra **a** significa enlaces y el punto porque es una clase; de esta manera, lo vamos a enviar a la consola con el parámetro enlaces. nuestra línea de código quedaría así:

```JavaScript
const enlaces = document.querySelector('a');
console.log(enlaces);
```

Se observa que, nuestra información que aparece en la consola posterior al guardar cambios aparece algo así **NodeList(6)**; pero, si expandimos nos sale los respectivos enlaces que tiene nuestro sitio web. Para este caso solamente los tres de la parte superior y los otros tres de la parte inferior. Entonces, estos tienen una clase padre llamada navegación y todos son enlaces.

Analizando un poco estos dos selectores se puede decir que, estos dos utilizan la misma sintaxis tipo CSS; es decir, con las clases utilizan un punto al inicio si es una clase y si es un id con el signo numeral (#); pero retorna de cero (0) a uno (1) y el querySelectorAll retorna de cero (0) a todos los que concuerden con este selector.

De otra parte, vimos que dice `NodList` y al expandirlo tiene los numeros de forma ordenada desde el cero (0) hasta el cinco (5) y además, nos dice su longitud (length) de seis (6). Sí queremos acceder a un elemento específico; por ejemplo, queremos ver la información que tiene el número cero (0) o se a al primer enlace; nos ubicamos sobre nosotros y esto se hace con la siguiente sintaxis.

Esta se hace con, una sintaxis exactamente igual a la de los arreglos (array) por lo tanto vamos a escribir dentro de los paréntesis del console.log enseguida de enlaces los respectivos corchetes cuadrados [] para distinguir que es un array a su ves dentro de estos corchetes vamos a escribir la posición cero (0) y que nos debe traer la información de ese array cero (0) al momento de guardar cambios; o sea que la línea de código nos queda de la siguiente manera:

```JavaScript
const enlaces = document.querySelector('.navegacion a');
console.log(enlaces[0]);
```

Perfecto, vimos que, al ubicarnos sobre ese enlace o el primer elemento y nos deja ver al lado izquierdo de la pantalla el respectivo enlace de nosotros. De igual manera se puede llamar dentro de los corchetes cuadrado las diferentes posiciones que tiene el enlace; como dijimos anteriormente tiene seis (6) enlaces.

Análogamente, si quisieramos cambiar el texto del contenido o del enlace **nosotros** podemos primero comentar el `console.log(enlaces[0])` y escribir `enlaces[0]` un punto y este nos permite llamar las propiedades; pero específicamente necesitamos al textContent lo igualamos a un nuevo mensaje por ejemplo, 'Nuevo texto para enlaces' y su respectivo punto y coma (;); Entonces, nuestra línea de código quedaría así:

```JavaScript
const enlaces = document.querySelector('.navegacion a')
enlaces[0].textContent = 'Nuevo texto para enlaces'
```

Excelente, pudimos cambiar el texto del enlace nosotros por el de Nuevo texto para enlaces; como nos apareció en nuestro sitio web. Recopilando un poco podemos ver que estamos seleccionando todos los elemento que es encuentren dentro de la variable enlaces y más exactamente con el `querySelectorAll`; seguidamente, accedemos únicamente al primero y modificamos su texto.

En este punto, es bueno que analicemos cuál procedimiento nos parece mejor; sí crear el selector y después modificarlo o se puede hacer primero no crear la variable (const) y el índice o la posición cero [0] se coloca al final del selector. Y nuestra línea quedaría de la siguiente manera:

```JavaScript
enlaces = document.querySelectorAll('.navegacion a');
[0].textContent = 'Nuevo texto para enlace';
```

Posteriormente de guardar cambios no sucede nada de cambios pues estamos realizando el mismo procedimiento con diferente sintaxis en esta línea. Personalmente, creo que también soy partidario de crear el selector con una variable (const) y en las posteriores líneas hacer algunas operaciones con esa variable.

Otra forma, es suprimir la variable y al final quitar el punto y coma; seguidamente, suprimir el índice; guardamos cambios; se observa que no sucede nada en el código; pero nuestra línea de código quedaría así:

```JavaScript
document.querySelectorAll('.navegacion a')[0].textContent = 'Nuevo texto para enlace';
```

Es importante agregar que, esto lo podemos hacer de otra forma, podemos ver que el primero (nosotros) nos llevaba a la estructura de HTML dentro del document scripting de las operaciones que podemos hacer, también está modificar el enlace al que nos llevaría una a una página.

Con base en lo anterior, al colocarle el nombre de nuestra variable (enlaces) en la posición para continuar modificando el primero (nosotros) seguido del punto y nos deja seleccionar para este caso `href`; este lo vamos a utilizar porque es el mismo atributo que tenemos en el documento `contactos.html` dentro del nav. Y lo vamos a igualar a Google.com; es un ejemplo. antes de guardar vamos a hacerlo en nuestro archivo scripting.js.

```JavaScript
enlaces[0].href = 'https://www.google.com/';
```

Es evidente que, después de guardar cambios y al inspeccionar vemos que el primer elemento podemos ver que modificamos el href; por lo tanto, ya no es nosotros.html, por el contrario es google.com y va funcionar. Si damos click sobre el enlace nos lleva a la
página de Google. Pero, lo vamos a comentar la anterior línea; era solamente para observar los que se puede hacer con esta.

Al igual que lo anterior, podemos colocar enlaces en la posición cero [0] punto claseList punto add() y agregarle un Nueva-clase; guardamos cambios y vemos que sucede en la consola.

```JavaScript
enlaces[0].classList.add()
```

Visto lo anterior en consola, así como podemos agregar clases también podemos eliminarlas; de la siguiente manera: En la posición cero [0] y para poder continuar operando sobre el primer enlace, que es uno de los que tenemos seleccionados y más a la mano; podemos agregar cualquier índice que concuerde con el selector que estamos declarando.

Seguidamente, le colocamos class list un punto remove y vamos a eleminar es clase que dice navegacion doble guión bajo enlace; un aspecto a tener en cuenta es que cuando tenemos el selector tenemos que ponerle un punto para decirle que esta es una clase; pero si eliminamos clases no es necesario ese punto. No son selectores, son clases nuevas y ya sabemos que va a ser una clase por lo tanto no requiere del punto al inicio. Vamos a hacer esta teoría en nuestro código.

```JavaScript
enlaces[0].classList.remove('navegacion__enlace');
```

Posteriormente, al guardar cambios observamos que se ve de diferente color (azul) debido a que teníamos algunos estilos con base a esa clase, pero como ya lo eliminamos y se por esto es que  ve un poco diferente.

### getElementById

Continuando con el tema de los selectores y para no tener que realizar otro tutorial de este getElementById; pués es muy corto realmente; decidimos hacerlo aquí mismo porque básicamente este selector es muy similar a los dos antes mencionados; pero, en cuanto a las operaciones que podamos realizar, este selector sí es un poco diferente.

Primero, en nuestro archivo contactos.html en la sección header y en el div class header__text vamos a colocarle un id= "heading"; pasamos nuestro archivo scrip.js y vamos a crear una variable llamada heading2 y la igualamos a document punto y observemos que en nuestro editor de texto nos deja ver un menú que nos permite seleccionar uno de tantos selectores que tenemos a disposición.

Es de anotar que estos eran la forma anterior de seleccionar en JavaScript. Y en la actualidad se utilizan las dos primeras mencionadas al inicio de esta lección. Solamente vamos a nombrar este selector getElementById para tener una idea de como funciona.

Continuando con el ejemplo, después de haber creado nuestra variable heading2 y al haberlo igualado a document.getElementById abrimos unos paréntesis y dentro de estos le colocamos unas comillas simples o dobles y le escribimos el id que deseamos seleccionar para nuestro caso heading y como ta está buscando por un id; ya no es necesario el signo # (numeral o gato) Ni tampoco un punto porque no es una clase; no olvidemos el console.log(heading2); de esta manera la línea nos quedaría de la siguiente manera:

```JavaScript
const heading2 = document.getElementById('heading');
console.log(heading2);
```

Posteriormente, al guardar cambios pudimos ver que todo está funcionando correctamente desde que empezamos a utilizar los selectores querySelector, querySelectorAll. en la siguiente lección one hundred forty six (146) veremos un poco de como generar código HTML pero desde JavScript.
