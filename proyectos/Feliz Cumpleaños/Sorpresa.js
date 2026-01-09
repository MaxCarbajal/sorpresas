// ================== CARTA ==================
const regalo = document.querySelector(".regalo");
const regalos = document.querySelector(".regalos");
const modalCarta = document.getElementById("modalCarta");

regalo.addEventListener("click", () => {
  modalCarta.classList.add("activo");
});

regalos.addEventListener("click", () => {
  modalCarta.classList.add("activo");
});

modalCarta.addEventListener("click", () => {
  modalCarta.classList.remove("activo");
});

// ================== AUDIO ==================
const overlay = document.querySelector(".overlay");
const soplido = document.getElementById("soplido");
const musicaPrincipal = document.getElementById("musicaPrincipal");
const musicaFondo = document.getElementById("musicaFondo");
const llama = document.querySelector(".llama");

// ================== VELA ==================
llama.addEventListener("click", () => {
  // Soplido
  soplido.currentTime = 0;
  soplido.play();

  // Apagar llama
  llama.style.animation = "apagar 0.5s forwards";

  setTimeout(() => {
    // Reproducir música única si existe
    const musica = document.getElementById("musica");
    if (musica) {
      musica.currentTime = 0;
      musica.volume = 0.7;
      musica.play();
    }

    // Quitar overlay siempre
    overlay.classList.add("hidden");
  }, 1000);
});
