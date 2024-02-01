# BLOG CAFÉ

## Validar formularios parte uno (1)

En esta lección one hundred fifty one (151) vamos a tratar el tema de como crear un validador de formularios parte uno (1); como decíamos en la anterior lección los campos se encuentran vacíos y al momento de enviar ese formulario aparecer 'Enviando Formulario'; cuando enviamos un formulario y los campos que queremos que sean obligatorios y po rlo tanto, si alguno queda vacío al momento de enviarlo, lo ideal sería mostrarle al usuario mediante un mensaje que diga por ejemplo que, 'todos los campos son obligatorios' o que 'hizo falta llenar algún campos'.

Con base en lo anterior, la forma en que vamos a validar este formulario va a ser de la siguiente manera; pero, veamos que tenemos una función llamada datos y este objeto es global; por lo tanto, estará disponible tanto en la función llamada formulario como en la llamada leerTexto; entonces lo que podemos hacer despues de nuestra línea `evento.preventDeFault();` de nuestro evento formulario.addEventListener es: inicialmente vamos a escribir un comentario que diga por ejemplo `//Validar formulario` seguidamente vamos a extraer los valores de ese objeto llamado datos; recordemos que, vimos una técnica llamada extraction que nos permite extraer los valores del objeto de un array; pero también podemos crear variables en un mismo paso.

Vamos a colocar la sintaxis normal iniciando con un const abrimos llaves {} y dentro de estas escribimos nombre, email y mensaje; y todo esto viene de nuestro objeto datos; por lo tanto nuestra línea de código quedaría así: `const {nombre, email, mensaje} = datos;` seguidamente le colocamos los tres (3) respectivos console.log para nombre, email y mensaje. Y nuestro código queda así:

`
const {nombre, email, mensaje} = datos;
console.log(nombre);
console.log(email);
console.log(mensaje);
`

Posteriormente, guardamos cambios y vemos que en consola le damos enviar y no aparece absolutamente nada. Pero si llenamos el campo nombre y le damos enviar, podemos ver que ya aparece algo. Entonces, en la parte xxxx podemos validar el formulario o validar cada una de las variables. Porqué por ejemplo en el campo nombre que solamente se escriba aun nombre real de una persona, que en el campo email debe de tener la forma real de un correo electrónico con su respectiva arroba (@) y en el campo mensaje no debe de existir mayor confusión; o sea la idea es que se llenen los campos con los criterios normales de escritura para cada campo.

Con base en lo anterior podemos reemplazar  nuestro console.log(nombre, email, mensaje) por un if() para que nos revise sí el nombre es igual a un string vacío, o si el correo electrónico cumple con los requisitos de validación que debe de tener esta clase de campo en el respectivo input. nuestro código sería: `if(nombre === ''){console.log('El nombre es vacío);}` guardamos cambios y observemos que sucede en consola.

Efectivamente, el mensaje que aparece en consola es el de nuestro if; pero si observamos también se nota que también dice Enviando Formulario; es decir, el nombre está vacío, se ejecuta el console.log('el nombre está vacío'); pero, de igual manera, se ejecuta el console.log('Enviando Formulario'); Y cómo podemos evitar que se ejecute este segundo console.log y que no se envíe el formulario?.

Siempre que, nos encontremos dentro de un if, dentro de una función como en este caso, tenemos acceso a una palabra reservada llamada return y esta corta la ejecución del código; por lo tanto nuestro segundo console.log('Enviando Formulario') no se va a ejecutar sí se cumple la condición que tenemos de `nombre === ''` ; guardemos cambios y podemos ver en consola que dice "El nombre está vacío"; pero, no se imprime "Enviando Formulario".

De otra parte, podemos revisar por el email y le podemos colocar un tipo de dato or (||) recordemos que se cumpla una u otra condición; para este caso nuestra línea sería: `if(nombre === '' || email === '' || mensaje === '')` Entonces le colocamos un mensaje de: 'El nombre, el email, o el mensaje se encuentran vacíos' si guardamos cambios vemos en nuestra consola que se imprime el mensaje correctamente.

De esta forma estamos validando que los campos deben de tener algo para poderse enviar el formulario. Ahora vamos a cambiar el mensaje de nuestro console.log('Todos los campos son obligatorios'); nadie va a revisar la consola por los errores; entonces, vamos a crear una función vamos a crear una función llamada mostrarError('') y le vamos a pasar 'Todos los campos son obligatorios'; Seguidamente, vamos a crear como tal la función en la parte de abajo enseguida de nuestra función leerTExto. y nuestra función quedaría así:

`
function mostrarError(mensaje){
    console.log(mensaje);
}
`
Excelente, ahora en lugar tener un console.log, la idea es crear algo de HTML, esto va a ser muy similar a lo que hicieramos en lecciones anteriores y que tenemos en la parte de arriba de nuestro archivo script.js y es la de crear un elemento (// generar un enlace) con todos los atributos; de esta forma podremos observar que en algunos casos vamos a a utilizar el scripting para generar código HTML.

Nuevamente, vamos a reemplazar el console.log de la función mostrarError; por lo tanto, vamos a crear una variable llamada error y la igualamos a document.createElement y dentro de sus paréntesis vamos a crear un párrafo, recomendable con la letra mayúscula ('P'), en la siguiente línea vamos a colocar el error y este va a tener un textContent y lo  igualamos al mensaje; y ahora sí le colocamos un consol.log con un mensaje que diga error; pero nuestra línea de código es:

`
function mostrarError(mensaje){
    const error = document.createElement('P');
    error.textContent = mensaje;
    console.log(error);
}
`
Posteriormente, al guardar cambios y le damos enviar el formulario vemos que aparece un párrafo con una etiqueta de `<p>Todos los campos son obligatorios</p>` Vamos a agregarle una clase para que se vea más elegante; entonces, vamos a crear una línea posterior a la línea del textCont que diga `error.classList.add('error');`; guardamos cambios y vemos que en la consola nos aparece el párrafo pero con la class="error" todos los campos son obligatorios.

De otra parte, recordemos que tenemos seleccionado el formulario y hemos creado una variable formulario; entonces podemos crearle en reemplazo del console.log(error) formulario.appendChild(error) entonces, nuestro código sería:

`
function mostrarError(mensaje){
    const error = document.createElement('P');
    error.textContent = mensaje;
    formulario.appendChild(error);
}
`
Como pudimos corroborar, el mensaje se nos agrega a nuestro archivo contacto.html en la parte de abajo del botón enviar; por lo tanto todo salió excelente. Vamos a discernir dos cosas; la primera, podemos ver que el párrafo si tiene la clase error y este no lo hemos creado en el CSS, así que vamos a hacer esa parte; vamos a abrir nuestro archivo style.css y nos dirigimos hasta el contacto y al inicio vamos a colocar la clase error dentro de sus llaves {} escribimos un atributo de background-color:rgb(185, 0, 0); este va a ser de un color rojo y le vamos a colocar un text-align: center; para este caso. Guardamos cambios y vemos que sucede en nuestro archivo.

Además, vamos a agregarle un padding: 1 rem; y un color: var(==blanco) y finalmente le colocamos un text-transform: uppercase; que viene a permitir que todo el texto sea en Mayúsculas. Entonces, si tratamos de enviar el formulario con a menos un campo vacío, podemos ver que nos arroja el respectivo mensaje en color rojo que todos los campos son obligatorios. Otra recomendación es que esta alerta se va a quedar ahí todo el tiempo y usualmente es mejor que aparezcan y/o desaparezcan es un criterio personal de este escribiente.

Por lo tanto podemos hacer que este evento dure por ejemplo cinco segundos  (5''); entonces, en nuestro archivo script.js y dentro de la función mostrarError al final vamos a escribir un setTimeout(() =>{}, 5000); este cinco mil (5000) vienen a ser los cinco segundos (5'') y le agregamos un error.remove() que viene a ser un método para poder eliminar un elemento HTML; guardamos cambios y vemos que sucede en consola.

Podemos comprobar que después de cinco segundos (5'') el mensaje desaparece el HTML; ahora, si colocamos algunos datos vemos que el comportamiento de los eventos es el que hemos planteado desde un principio. Pero también es muy importante que si se agregaron los campos satisfactoriamente, también nos debe de decir un mensaje de enviado éxitosamente los datos; por ejemplo. Es normal que el campo de email, debemos de tener un servicio de backend o uno de email.

Entonces, si observamos el return nos da a entender que, este va a evitar la ejecución del código hasta el final del if; pero podemos crear otra alerta que nos diga que el proceso es éxitoso. Por lo tanto, vamos a crear una alerta sin necesidad de un else; pués el return nos ayuda a evitar la ejecución del código. Solamente copiemos la estructura de la función mostrarError y cambiemos el nombre por mostrarMensaje y en lugar de error escribamos alerta; para mi caso.

Con base en lo anterior, vamos a crear la función pero con mostrarMensaje; o sea que nuestro código queda así:

`
function mostrarMensaje(mensaje) {
    const alerta = document.createElement('P');
    // Estamos creando HTML
    alerta.textContent = mensaje;
    alerta.classList.add('correcto');
    formulario.appendChild(alerta);
    formulario.addEventListener('click', () => alerta.remove());
     // con esta función desaparece después de cinco segundos (5'')
    setTimeout(() => {
        alerta.remove();
    }, 5000);
}
`
Excelente, gracias a Dios; ahora solamente nos falta es modificar el CSS y lo haremos de la siguiente manera:

`.error {
    background-color: red;
    text-align: center;
    padding: 1rem;
    color: var(--blanco);
    text-transform: uppercase;
}
`
Nuevamente, al guardar cambios vemos que nos sale el mensaje correctamente; pero, como lo normal es que debe de aparecer si ya enviamos el mensaje nos debe de salir el mensaje correspondiente de enviado con éxito, o el que sea de preferencia. De igual manera, vamos crearle los estilos a la clase correcto y este código queda así:

`
.correcto {
    background-color: greenyellow;
    text-align: center;
    padding: 1rem;
    color: var(--blanco);
    text-transform: uppercase;
}
`

como se ha visto esta pequeña teoría mostrada hasta aquí la podemos utilizar por ejemplo, en la parte de producción; es decir en la creación de un sitio web real. En la siguiente lección one hundred fifty two (152) llamada creando un validador de formularios parte dos (2) continuaremos con el tema. vamos a ello.
