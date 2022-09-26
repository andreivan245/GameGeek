function chamaProdutos() {
  for (i = 0; i < localStorage.length; i++) {
    if (
      localStorage.key(i) == "NomeSelecionado" ||
      localStorage.key(i) == "quantidadeProdutos"
    ) {
      continue;
    }
    var chave = localStorage.key(i);
    var produtoCarregado = JSON.parse(localStorage.getItem(chave));

    var elemento = document.querySelector(
      ".todosProdutos__conteudo_produtos_lista"
    );
    var liProduto = document.createElement("li");
    var divProduto = document.createElement("div");
    var imgLixeira = document.createElement("img");
    var imgLapis = document.createElement("img");
    var itemTitulo = document.createElement("h3");
    var itemPreco = document.createElement("h4");
    var itemDescricao = document.createElement("h5");

    liProduto.classList.add("todosProdutos__conteudo_produtos_item");
    divProduto.classList.add("todosProdutos__conteudo_produtos_itemImg");
    imgLixeira.classList.add("todosProdutos__conteudo_produtos_itemImgLixeira");
    imgLapis.classList.add("todosProdutos__conteudo_produtos_itemImgLapis");
    itemTitulo.classList.add("todosProdutos__conteudo_produtos_itemTitulo");
    itemPreco.classList.add("todosProdutos__conteudo_produtos_itemPreco");
    itemDescricao.classList.add(
      "todosProdutos__conteudo_produtos_itemDescricao"
    );

    imgLixeira.setAttribute("src", "../img/lixeira.png");
    imgLapis.setAttribute("src", "../img/lapis.png");

    divProduto.appendChild(imgLixeira);
    divProduto.appendChild(imgLapis);

    if (produtoCarregado.imagem.length > 100) {
      var dataImage = produtoCarregado.imagem;

      divProduto.style.backgroundImage =
        "url(" + "data:image/png;base64," + dataImage + ")";
    } else {
      divProduto.style.backgroundImage = "url(" + produtoCarregado.imagem + ")";
    }

    var textNodeNome = document.createTextNode(produtoCarregado.nome);
    var textNodePreco = document.createTextNode(produtoCarregado.preco);
    var textNodeDescricao = document.createTextNode(produtoCarregado.descricao);

    itemTitulo.appendChild(textNodeNome);
    itemPreco.appendChild(textNodePreco);
    itemDescricao.appendChild(textNodeDescricao);

    liProduto.appendChild(divProduto);
    liProduto.appendChild(itemTitulo);
    liProduto.appendChild(itemPreco);
    liProduto.appendChild(itemDescricao);

    elemento.appendChild(liProduto);
  }
}
