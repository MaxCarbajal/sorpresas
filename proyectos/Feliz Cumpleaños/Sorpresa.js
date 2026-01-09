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
    // 🔊 Música de fondo (más volumen)
    musicaFondo.currentTime = 0;
    musicaFondo.volume = 0.7;
    musicaFondo.play();

    // 🎵 Música principal
    musicaPrincipal.currentTime = 0;
    musicaPrincipal.volume = 1;
    musicaPrincipal.play();

    // Oscuridad fuera
    overlay.classList.add("hidden");
  }, 1000);
});
