function recarregaPagina() {
  const elemento = document.querySelector(".produto");
  

  var imagem = document.createElement("img")
  imagem.classList.add("produto__img")
  imagem.setAttribute('src',localStorage.getItem("imagem"))
  elemento.appendChild(imagem)


  var produtoDescricao = document.createElement("div")
  produtoDescricao.classList.add("produto__descricao")
  elemento.appendChild(produtoDescricao)

  const novoElemento = document.querySelector(".produto__descricao")

  var produtoDescricaoTitulo = document.createElement("h2")
  produtoDescricaoTitulo.classList.add("produto__descricao_titulo")
  produtoDescricaoTitulo.innerText = localStorage.getItem("nome")
  novoElemento.appendChild(produtoDescricaoTitulo)

  var produtoDescricaoPreco = document.createElement("h3")
  produtoDescricaoPreco.classList.add("produto__descricao_preco")
  produtoDescricaoPreco.innerText = localStorage.getItem("preço")
  novoElemento.appendChild(produtoDescricaoPreco)

  var produtoDescricaoTexto = document.createElement("h4")
  produtoDescricaoTexto.classList.add("produto__descricao_texto")
  produtoDescricaoTexto.innerText = "Voluptas voluptatum quibusdam similique, class debitis alias maecenas eveniet ridiculus, facilis fusce! Ullam conubia? Sociis, minima malesuada habitasse distinctio sequi aliqua malesuada. Quisque deleniti proin expedita, aliquid litora. Iste recusandae? Commodo, quia ridiculus doloribus vero dictum? Penatibus donec placeat faucibus, dolorum do. Animi porta anim magnam"
  novoElemento.appendChild(produtoDescricaoTexto)

}
