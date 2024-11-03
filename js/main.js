'use strict'

/* GSAP animaciones */
const text = document.getElementById('myText');

gsap.to(text, {
    duration: 2,
    text: "Metodo Uruguaio de Plantio",
    ease: "none",
});
gsap.from(".header", {
    y: -100,
    opacity: 0,
    duration: 1,
});

/* modal del programa */
const modal = document.getElementById("modal");
const btn = document.getElementById("openModal");
const span = document.getElementsByClassName("close")[0];

btn.onclick = function() {
  modal.style.display = "block";
}

span.onclick   
 = function() {
  modal.style.display = "none";
}

window.onclick = function(event) {
  if (event.target == modal) {
    modal.style.display = "none";   

  }
}
/* animacion modal programa */
btn.onclick = function() {
    modal.style.display = "block";
    modal.classList.add('show');
  }
  
  span.onclick = function() {
    modal.classList.remove('show');
    setTimeout(function() {
      modal.style.display = "none";
    }, 300);
  }