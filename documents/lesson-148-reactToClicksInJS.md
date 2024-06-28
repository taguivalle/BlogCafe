# BLOG CAFÉ

## Reaccionar a un Evento en **JavaScript**

Inicialmente, en esta lección one hundred forty eight (148) trataremos un poco sobre el tema de como reaccionar ante un evento en JavaScript; Ahora, veamos como seleccionar un elemento de nuestro archivo contactos.html y registrarle un evento; en la lección anterior, ya habíamos agregado eventos tanto window como document; pero, estos dos existen en JavaScript. Veamos cómo hacerlo ya con elementos que son de nuestra creación.

Seguidamente, en nuestro archivo contactos.html, vamos a seleccionar en el `<div class="campo"><input type="submit" values="enviar" class="boton boton--primario"></div>` vamos a seleccionar el input; pero, vamos a utilizar la clase `class="boton boton--primario"`; entonces, creamos una variable con el comando o la palabra reservada **const** es lo normal que hemos venido haciendo. la llamaremos btnEnviar y la igualamos a document punto y vamos seleccionar del menú auto-ayuda de nuestro editor de texto a querySelector; recordemos que, este se límita máximo un elemento y solamente para este caso necesitaremos seleccionar el botón de enviar.

Posteriormente, dentro de los paréntesis y en comillas sencillas escribimos el nombre de la clase que nombramos en el anterior párrafo (.boton--primario); por lo tanto ya tenemos una clase, o sea que nuestra línea en el archivo script.js se ve así: `const btnEnviar = document.querySelector('.boton--primario');` Si en nuestra consola escribimos el nombre de nuestra variable btnEnviar no aparece correctamente el input que estamos seleccionando.

Ahora, cómo le vamos a agregar el evento; recordemos nuevamente que ya tenemos una variable y una que seleccionamos un elemento tenemos disponible ese addEvenListener en todos los elementos que seleccionemos, salvo los que existen en **JavaScript**. Una vez que, creamos una variable y seleccionando con querySelector tenemos a disposición este método.

Siguiendo con la línea de código anterior, vamos a escribir debajo de esta lo siguiente btnEnviar un punto y nuestro editor de texto nos ayuda con el addEventListener seguimos con los paréntesis y entre comillas la palabra click; esto para que cuando el usuario presione sobre el botón enviar vamos a ejecutar la funcion (function) con los respectivos corchetes o llaves {} y dentro de estas vamos escribir un console.log con un mensaje por ejemplo, Enviando formulario. Y nuestras líneas del código quedaría de la siguiente manera:

```JavaScript
const btnEnviar = document.querySelector('.boton--primario');
btnEnviar.addEventListener('click', function(){
    console.log('Enviando formulario');
})
```

Al momento de guardar cambios, notamos que, al presionar sobre el botón **ENVIAR** aparece muy rápido tanto en la consola como en el lado izquierdo la pantalla tiene el mismo evento de recargarse muy velozmente. Esto sucede por lo siguiente: al instante de presionar en un **submit** de un formulario la acción se presenta por default y lo que hace este formulario sería; enviar esos datos, enviar toda la información que el usuario digitará y esta llega a algún archivo que se encuentre alojado en nuestro servidor.

Entonces, eso es lo que hace un botón enviar, por default la información registrada y esto es lo que se conoce como un **comportamiento normal**; y a ¿que nos referimos con normal? por ejemplo si deseamos ingresar en nuestro sitio web en el enlace cursos, ese comportamiento normal es que nos lleve hacia ésa página. Si en nuestra página o nuestro archivo `contacto.html` escribimos algo en el campo nombre o en los demás campos es que estos datos se coloquen en el **input**.

Con base en lo anterior, es que existen varios comportamientos normales que ya están definidos por el mismo navegador; y uno de ellos es que cuando demos click en un **submit** este trata de enviar ese formulario con la información correspondiente al archivo de nuestro servidor.

Es evidente que, no tenemos registrado aún nada, o sea hacia a dónde se va a enviar ese formulario; por lo tanto, en el form de nuestro archivo HTML debemos de agregarle un atributo para decirle que archivo va a procesar la información de este formulario. Esto lo veremos más adelante cuando nos encontremos estudiando un lenguaje de backend. Pero este sería su comportamiento normal del botón **ENVIAR**.

Bién, al momento de presionar ese botón **ENVIAR**, está pasando un evento. o sea está pasando el evento `'click'`; sin embargo, podemos pasarle un parámetro dentro de la función (function(evento)); automáticamente se va a pasar este; ahora si escribimos en la línea enseguida un console.log(evento) y agregamos otra línea con otro evento.**preventDeFault()**; ahora explicamos que sucede con esta sintaxis; y nuestro código quedaría así:

```JavaScript
const btnEnviar = document.querySelector('.boton--primario');
btnEnviar.addEventListener('click', function(evento){
    console.log(evento);
    evento.preventDeFault();
    console.log('Enviando formulario');
})
```

Posteriormente, al guardar cambios observamos en consola que aparece el mensaje Enviando formulario; ya no se observa ese flash que teníamos antes y que se recargaba la página de una forma muy rápida. Y ahora si se ve ese texto del `console.log('Enviando formulario')`; Podemos presionar muchas veces y no se va a recargar. Sí abrimos o damos click sobre **PointerEven** o en otros navegadores debe de decir **MouseEvent**, esa información del evento se pasa automáticamente dentro del **callback** o sea dentro de toda nuestra función.

Es decir que, todos los eventos que se registren tienen a disposición este evento y algunas personas le colocan en el lugar de evento le escriben solamente la letra "(e)", o la palabra "(evt)" o (event) o (evento); Siendo, prácticamente lo mismo o se tiene igual resultado. La verdad existe muchos ejemplos en Internet y se puede decir que ninguna está bién nombrada; para este caso en nuestro código lo dejaremos como "**evento**".

De otra parte, vimos que al `console.log(evento)` se pasan automáticamente hacia el callback al momento de registrar una función (function(evento)) con el método **addEventListener**; Es entonces que, al observar en nuestra consola se tiene muchísima información que nos dice en que parte de la página dimos click. Por ejemplo, en la línea **clienteX: 144, en clienteY: 543;**siendo estas unas coordenadas; y si hacemos un poco más de scroll nos muestra mucha información sobre este objeto que hemos enviado hacia la consola.

Nuevamente, si queremos ver qué tanta información hay disponible, que funciones están disponibles, las podemos asociar a un **addEventListener** y posteriormente pasarle el evento. En uno de los párrafos anteriores mencionamos **preventDeFault** y esto ¿que es lo que hace? Esto hace un acción por defecto sobre alguno de los enlaces de nuestra página y es que nos lleva hacia esos enlaces; sí por ejemplo, asociamos un **preventDeFault** NO haría la acción por default que es llevarnos hacia otra página. Es decir sí le damos enviar nuestro formulario, no lo vamos a enviar porque estamos previniendo esa acción por default.

Pero; ¿en qué, es util este preventDeFault? Este sirve mucho para validar un formulario, podríamos escribir un poco de código que valide que todos los campos cumplan con los requisitos exigidos para diligenciar dicho formulario; para nuestro caso **Nombre**, **E-mail** y **Mensaje**.

Un ejemplo sería, que se debe de diligenciar todos los campos o que sean obligatorios su diligenciamiento y posteriormente sí enviar toda esa información a un archivo de nuestro servidor. Por lo tanto, este **preventDeFault** es especialmente útil para los formularios.

Para finalizar, en esta parte de eventos y la función (function(evento)) se puede decir que se pasan cuando se ejecuta el evento; y en el caso de la función

```JavaScript
window.onscroll = function(evento){console.log(evento);}
```

podemos utilizar **evento** dentro de la función evento como dentro del console.log(). Al guardar los cambios, en nuestra consola podemos hacer click sobre evento obtendremos toda la información disponible.

Resumiendo, podemos decir que, cuando tengamos un **onscroll**, un **addEventListener** y/o un **preventDeFault**, etc. A la función le podemos pasar un evento, que puede ser como digimos anteriormente una letra "**e**" o la palabra "**evt**", etc. Porque al final esos valores se pasan en automático: aunque para mi caso prefiero la palabra "**evento**".

Ya vimos unos eventos de los que suceden automáticamente en el navegador; veamos una serie de eventos cuando trabajamos con forumalarios y cuando escribimos sobre estos en la próxima lección one hundred forty nine (149); llamada eventos con el teclado.
