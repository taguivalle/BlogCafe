// querySelector.
const heading = document.querySelector('.header__text h2'); // cero (0) o un (1) elemento
heading.textContent = 'New heading';
// console.log(heading);

// querySelectorAll.
const enlaces = document.querySelectorAll('.navegacion a'); // cero
enlaces[0].textContent = 'Nuevo texto para enlace';
enlaces[0].classList.add('nueva-clase');
// enlaces[0].classList.remove('navegacion__enlace');
// enlaces[0].href = 'https://www.google.com/';
// console.log(enlaces[0]);

// enlaces = document.querySelectorAll('.navegacion a')[0].textContent = 'Nuevo texto para enlace';

// getElementById.
// const heading2 = document.getElementById('heading');
// console.log(heading2);

// createElement
const nuevoEnlace = document.createElement('A');

// como generar un nuevo enlace.
// Agregar el href.
nuevoEnlace.href = 'Nuevo-enlace.html';

// Agregar el texto.
nuevoEnlace.textContent = 'Carrito';

// Agregar la clase.
nuevoEnlace.classList.add('navegacion__enlace');

// Agregarlo al documento
const navegacion = document.querySelector('.navegacion');
navegacion.appendChild(nuevoEnlace);
console.log(nuevoEnlace);

// Events

// console.log(1);
// window.addEventListener('load', imprimir);// El load espera a que el JS y los archivos que dependen del HTMl estén listos.
// window.onload = function (params) {
//     console.log(3);
// }
// document.addEventListener('DOMContentLoaded', function () {// El DOMContentLoaded solamente espera al HTML
//     console.log(4);
// })
// console.log(5);
// function imprimir() {
//     console.log(2);
// }
// window.onscroll = function (evento) {
//     console.log(evento);
// }

// Seleccionar elementos y asociarles un evento.
// const btnEnviar = document.querySelector('.boton--primario');
// btnEnviar.addEventListener('click', function (evento) {
//     console.log(evento);
//     evento.preventDefault();
//     console.log('enviando formulario');
// })

// Eventos de los inputs y los TexTarea, la variable datos es global
const datos = {
    nombreInput: '',
    email: '',
    mensaje: ''
}
// Aquí encontramos todas las variables
const nombreInput = document.querySelector('#nombre');
const email = document.querySelector('#email');
const mensaje = document.querySelector('#mensaje');
const formulario = document.querySelector('.formulario');

// Aquí encontramos todos los addEventListener
nombreInput.addEventListener('input', leerTexto);
email.addEventListener('input', leerTexto);
mensaje.addEventListener('input', leerTexto);

// Este es el evento de submit
formulario.addEventListener('submit', function (evento) {
    evento.preventDefault();

    // Aquí validamos el formulario
    const { nombreInput, email, mensaje } = datos;
    if (!nombreInput === '' || email === '' || mensaje === '') {
        // Esta es nuestra segunda alerta
        mostrarAlerta('Todos los campos son obligatorios', true);
        return; // el return evita la ejecución del código.
    }
    // Crear la alerta de enviar correctamente el mensaje.
    // Esta es nuestra primer alerta
    mostrarAlerta('Mensaje enviado correctamente');

});

function leerTexto(e) {
    // console.log(e.target.value);
    datos[e.target.id] = e.target.value;
    // console.log(datos);
}

// Creamos la nueva función para refactorizar mejor el código.
// Esta es nuestra tercer alerta
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
