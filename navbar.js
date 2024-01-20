//Obteniendo elementos
const navMenu = document.getElementById('nav-menu');
const navToggle = document.getElementById('nav-toggle');
const navClose = document.getElementById('nav-close');

//Agregando evento de apertura al botón toggle del menú (menú hamburguesa)
if (navToggle) {
    navToggle.addEventListener('click', () => {
        navMenu.classList.toggle('show-menu');
    });
}

//Agregando evento de cierre al botón cierre del menú (ícono) x)
if (navClose) {
    navClose.addEventListener('click', () => {
        navMenu.classList.remove('show-menu');
    });
}

//Remove menu mobile
const navLinks = document.querySelectorAll('.navLink');

//Cerrar menú al seleccionar un enlace
function linkAction() {
    navMenu.classList.remove('show-menu');
}

//Agregar evento a cada enlace del menú para cerrar el menú al seleccionarlo
navLinks.forEach((navLink) => {
    navLink.addEventListener('click', linkAction);
});