onload = () =>{
    document.body.classList.remove("container");
};
window.addEventListener("DOMContentLoaded", () => {

  const cartas = document.querySelectorAll(".carta");
  const flores = document.querySelectorAll(".flower");

  let indice = 0;

  function mostrarCarta(i) {
    if (i < cartas.length) {
      cartas[i].classList.add("activa");
    }
  }

const mensaje = document.querySelector(".mensaje-romantico");

flores.forEach(flor => {
  flor.addEventListener("click", () => {
    indice = 0;
    mostrarCarta(indice);
    iniciarLluvia();

    mensaje.classList.add("arriba");
  });
});


  cartas.forEach((carta, i) => {
    carta.addEventListener("click", () => {

      carta.classList.remove("activa");
      carta.classList.add("caer");

      setTimeout(() => {
        carta.classList.remove("caer");
        indice++;

        if (indice < cartas.length) {
          mostrarCarta(indice);
        }
        

      }, 800);

    });
  });

});



const contenedorCorazones = document.querySelector(".corazones");
let lluvia;

function crearCorazon() {
  const corazon = document.createElement("div");
  corazon.classList.add("corazon");

  // Coloca cada corazón en una posición horizontal aleatoria
  corazon.style.left = Math.random() * 100 + "vw";

  // Duración de caída aleatoria
  corazon.style.animationDuration = (Math.random() * 2 + 3) + "s";

  contenedorCorazones.appendChild(corazon);

  // Elimínalo cuando termine de caer
  setTimeout(() => {
    corazon.remove();
  }, 5000);
}

function iniciarLluvia() {
  lluvia = setInterval(crearCorazon, 250); // cada 0.25s aparece uno
}

function detenerLluvia() {
  clearInterval(lluvia);
}
const musica = document.getElementById("musica");

document.querySelectorAll(".flower").forEach(flor => {
  flor.addEventListener("click", () => {
    musica.play();
  });
});
