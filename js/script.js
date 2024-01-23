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
