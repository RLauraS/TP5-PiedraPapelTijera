let formulario = document.querySelector("form");
let inputUsuario = document.querySelector("input");

formulario.addEventListener('submit', function(e) {
  e.preventDefault();
  const usuario = inputUsuario.value.toLowerCase();
  const pc = turnoPC();
  const resultado = jugar(usuario, pc);
  alert(`PC eligió ${pc}. ${resultado}`);
  inputUsuario.value = "";
});

function turnoPC() {
  const opciones = ["piedra", "papel", "tijera"];
  return opciones[Math.floor(Math.random() * opciones.length)];
}

function jugar(usuario, pc) {
  if (usuario === pc) {
    return "empate";
  } else if (
    (usuario === "piedra" && pc === "tijera") ||
    (usuario === "papel" && pc === "piedra") ||
    (usuario === "tijera" && pc === "papel")
  ) {
    return "ganaste";
  } else {
    return "perdiste";
  }
}

