function recarregaPagina() {
  const elemento = document.querySelector(".produto");
  const nsei = `<img src="${localStorage.getItem("imagem")}">`;
  elemento.innerHTML = nsei;
  console.log("Deu");
}
