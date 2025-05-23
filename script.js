function toggleMode() {
  const html = document.documentElement
  html.classList.toggle("light")

  //pegar a tag img
  const img = document.querySelector("#profile img")

  //substituir a imagem;
  if (html.classList.contains("light")) {
    //se tiver light mode, adicionar a imagem light
    img.setAttribute('src', './assets/avatar-light.png');
    img.setAttribute("alt", "Foto de Mayk sorrindo, usando óculos escuros, e camisa preta, barba e fundo colorido");
  } else {
    //se tiver sem light mode, manter a imagem normal
    img.setAttribute('src', './assets/avatar.png');
    img.setAttribute("alt", "Foto de Samuel sorrindo, usando óculos, e camisa branca, barba e fundo natural");
  }
}