# BLOG CAFÉ

## Validar formularios parte dos (2)

Como tema introductorio, vamos a ver en esta lección one hundred fifty two (152) algo muy importante que se conoce como refactoring de código. Existen dos inconvenientes clave con este tema; el primero es que, las personas queremos crear un código lo más compacto que se pueda, cuando aún no funciona; inicialmente, lo que debemos de hacer es que nuestro código funcione aunque tenga código repetido; es normal que nuestro código se vea feo la primera vez, tal vez con muchas variables y repetidas al mismo tiempo.

Pero, una vez que lo entendamos debemos de hacer refactoring; y esto nos lleva al segundo inconvenient, pues muchas personas decimos; sí ya funciona pués dejémoslo así y listo. Con base en esto, es mejor escribir código feo; pero, debemos de procurar siempre que funcione y una vez hecho esto ahí sí debemos de mejorarlo; esta advertencia, nadie no lo va a recomendar.

Bién, pasando a nuestro archivo script.js podemos ver que tenemos dos funciones y que tal vez podamos recortar un poco o resumir un poco nuestro código. Entonces, vamos a crear un tercera función que la llamaremos mostrar alerta (mostrarAlerta) esta la podemos crear antes de las dos funciones mostrarMensaje y mostrarError para mi caso. De igual manera podemos observar que tiene como parámetros un mensaje; por lo que nuestra a función también le vamos a agregar este mismo parámetro.

Analicemos que, nuestras dos funciones son bastante similares tienen una alert (error y alerta), un textCont, un classList y un setTimeout; tienen un document.createElement; por esto y otros aspectos, vamos pegar esa variable alerta en nuestra nueva función; Entonces, nuestras primeras líneas deben de quedar de la siguiente manera: `function mostrarMensaje(mensaje){const alerta = document.createElement('P')}`; al mismo tiempo vamos eliminando esas líneas de nuestras dos funciones originales o nombradas hasta el momento.

También, vamos a pegar esa línea de `alerta.textContent = mensaje`; de igual manera eliminamos esas líneas en nuestras funciones. A esta altura, es donde viene la diferencia de estar cortando y pegando; porque una función tiene la clase "correcto" y la otra tiene la clase "error"; de pronto parece que se nos complica un poco; para esto, podemos utilizar nuestra función mostrarAlerta; pero, cómo vamos a saber en que momento agregamos la clase correcto y en cual la clase error?o le podemos pasar a un segundo argumento. Cuál sería el tipo de alerta?

Si nos ubicamos en la función ´const {nombreInput, email, mensaje} = datos;´ y dentro del if más exactamente en la línea mostrarAlerta y dentro de los paréntesis tenemos un mensaje 'Todos los campos son obligatorios' seguidamente, le colocamos una coma y escribimos true; o sea que nuestra línea quedaría así: `mostrarAlert('Todos los campos son obligatorios', true)`.

Ahora, nos trasladamos a la función mostrarAlerta y dentro de los paréntesis tenemos los parámetros y vamos a colocar un segundo parámetro que lo llamaremos error y lo igualaremos a un valor null; nuevamente, nuestra línea de código quedaría así: `function mostrarAlerta(mensaje, error = null)`. Seguidamente, podemos agregar otra línea posterior o enseguida de la línea ´alerta.textContent = mensaje;´ un if que dentro de sus paréntesis tenga la condición de error y dentro de las llaves {alerta.classList.add('error')}.

En caso contrario (else) vamos a inserta la misma línea anterior pero con el mensaje correcto y nuestra línea queda así: `alerta.classList.add('correcto')`; esto nos sirve para que en caso de que la alerta sea correcta, el error se mantiene como null. De todas formas, si no le pasamos un valor por default, como le llevamos hasta el momento muy seguramente nos va a marcar un undefined.

Entonces, podemos decir; bueno, no va a estar presente en el llamado de la función; pero, lo vamos a colocar un parámetro por default; por lo tanto sino va a estar presente, pués tome el parámetro por default (error = null). Y en este caso sí se lo estamos pasando. O sea que el parámetro por default (error = null) simplemente es ignorado. No olvidemos eliminar las dos clases dentro de las funciones originales.

Hasta aquí se ve un poco más sencillo; podemos ver que nuestras dos funciones tienen un formulario.appendChild; entonces, vamos a cortar y pegarlo arriba en la nueva función `mostrarAlerta` o escribirla como tal abajo de nuestro else dentro del if error. Por último nos falta el setTimeout. Lo mismo podemos cortar y pegar y eliminamos lo que tenemos repetido.

Hasta el momento vemos que, nuestra función es un poco más grande pero las otras dos originales quedaron reducidas a una solamente y a su vez la hemos refactorizado. Pero antes vamos escribir toda nuestra nueva función como debe de quedar.

`
function mostrarAlerta(mensaje, error = null) {
    const alerta = document.createElement('P');
    // Estamos creando HTML
    alerta.textContent = mensaje;
    if (error) {
        alerta.classList.add('error');
    } else {
        alerta.classList.add('correcto');
    }
    formulario.appendChild(alerta);
    // con esta función desaparece después de cinco segundos (5'')
    setTimeout(() => {
        alerta.remove();
    }, 5000);
}
`

Guardamos cambios; y efectivamente nuestro código funciona igual a que como se encontraba antes con nuestras dos funciones originales. De esto, se trata el refactoring; recordemos que, primero debemos de escribir nuestro código para que funcione correctamente así se encuentre feo o en desorden como lo llamamos algunas personas. Posteriormente, nos dedicamos a mejorarlo.

En la siguiente lección one hundred fifty three (153), perteneciente a la sección doce (12);  vamos a movernos hacia Google para tener un conocimiento pequeños de dos herramientas que son muy agradables de tener en cuenta; debido a que, nos va a ahorrar mucho tiempo como también código CSS.
