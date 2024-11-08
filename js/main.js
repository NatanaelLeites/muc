'use strict'

/* GSAP animaciones */
const text = document.getElementById('myText');

gsap.to(text, {
    duration: 2,
    text: "Fique Livre Do Prensado",
    ease: "none",
});
gsap.from(".header", {
    y: -100,
    opacity: 0,
    duration: 1,
});
/* ScrollReveal */
ScrollReveal().reveal('.header', {
    delay: 400,
    origin: 'left',
    duration: 2000,
    distance: '50%'
});

ScrollReveal().reveal('.curso-programa-container', {
    delay: 200,
    origin: 'left',
    duration: 2000,
    distance: '50%'
});

ScrollReveal().reveal('.equipo-container', {
    delay: 200,
    origin: 'right',
    duration: 2000,
    distance: '50%'
   });