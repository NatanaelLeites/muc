'use strict'

/* GSAP animaciones */
const text = document.getElementById('myText');

gsap.to(text, {
    duration: 2,
    text: "Metodo uruguaio de cultivo",
    ease: "none",
});
gsap.from(".header", {
    y: -100,
    opacity: 0,
    duration: 1,
});
