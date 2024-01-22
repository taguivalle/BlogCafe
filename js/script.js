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
const heading2 = document.getElementById('heading');
console.log(heading2);