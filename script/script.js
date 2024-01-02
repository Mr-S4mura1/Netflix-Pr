var btn = document.getElementById("btn_ocultar"); // Boton de ocultar
var mostrar = document.getElementById("ocultar_text"); // Texto a mostrar

btn.addEventListener("click", () => {
  mostrar.style.display = "block";
  btn.style.display = "none"; // Para que  se oculte el boton de "Mas info"
});
