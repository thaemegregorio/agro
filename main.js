// Tamanho da fonte base
let tamanhoFonte = 25;

function aumentarFonte() {
  if (tamanhoFonte < 30) {
    tamanhoFonte += 2;
    document.body.style.fontSize = tamanhoFonte + "px";
  }
}

function diminuirFonte() {
  if (tamanhoFonte > 12) {
    tamanhoFonte -= 2;
    document.body.style.fontSize = tamanhoFonte + "px";
  }
}

function toggleGaleria() {
  const galeria = document.getElementById("galeria");
  if (galeria.style.display === "none") {
    galeria.style.display = "block";
  } else {
    galeria.style.display = "none";
  }
}