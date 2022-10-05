//funçao que adiciona todos os produtos a pagina principal de acordo com sua categoria

function chamaProdutosIndex() {
  for (i = 0; i < localStorage.length; i++) {
    if (
      localStorage.key(i) == "NomeSelecionado" ||
      localStorage.key(i) == "quantidadeProdutos"
    ) {
      continue;
    }
    var chave = localStorage.key(i);

    var produtoCarregado = JSON.parse(localStorage.getItem(chave));

    if (produtoCarregado.categoria == "Star Wars") {
      var elemento = document.querySelector(".produtos__galeria_listaStarWars");

      var liProduto = document.createElement("li");
      var imgProduto = document.createElement("img");
      var itemTitulo = document.createElement("h3");
      var itemPreco = document.createElement("h4");
      var itemLink = document.createElement("a");

      liProduto.classList.add("produtos__galeria_item");
      imgProduto.classList.add("produtos__galeria_img");
      itemTitulo.classList.add("produtos__galeria_titulo");
      itemPreco.classList.add("produtos__galeria_preco");
      itemLink.classList.add("produtos__galeria_link");

      if (produtoCarregado.imagem.length > 100) {
        var dataImage = produtoCarregado.imagem;

        imgProduto.src = "data:image/png;base64," + dataImage;
      } else {
        imgProduto.setAttribute(
          "src",
          produtoCarregado.imagem.replace("..", "./assets")
        );
      }

      itemLink.setAttribute("href", "./assets/pages/produto.html");

      var textNodeNome = document.createTextNode(produtoCarregado.nome);
      var textNodePreco = document.createTextNode(produtoCarregado.preco);
      var textNodeLink = document.createTextNode("Ver produto");

      itemTitulo.appendChild(textNodeNome);
      itemPreco.appendChild(textNodePreco);
      itemLink.appendChild(textNodeLink);

      liProduto.appendChild(imgProduto);
      liProduto.appendChild(itemTitulo);
      liProduto.appendChild(itemPreco);
      liProduto.appendChild(itemLink);

      elemento.appendChild(liProduto);
    }

    if (produtoCarregado.categoria == "Console") {
      var elemento = document.querySelector(".produtos__galeria_listaConsoles");

      var liProduto = document.createElement("li");
      var imgProduto = document.createElement("img");
      var itemTitulo = document.createElement("h3");
      var itemPreco = document.createElement("h4");
      var itemLink = document.createElement("a");

      liProduto.classList.add("produtos__galeria_item");
      imgProduto.classList.add("produtos__galeria_img");
      itemTitulo.classList.add("produtos__galeria_titulo");
      itemPreco.classList.add("produtos__galeria_preco");
      itemLink.classList.add("produtos__galeria_link");

      if (produtoCarregado.imagem.length > 100) {
        var dataImage = produtoCarregado.imagem;

        imgProduto.src = "data:image/png;base64," + dataImage;
      } else {
        imgProduto.setAttribute(
          "src",
          produtoCarregado.imagem.replace("..", "./assets")
        );
      }

      itemLink.setAttribute("href", "./assets/pages/produto.html");

      var textNodeNome = document.createTextNode(produtoCarregado.nome);
      var textNodePreco = document.createTextNode(produtoCarregado.preco);
      var textNodeLink = document.createTextNode("Ver produto");

      itemTitulo.appendChild(textNodeNome);
      itemPreco.appendChild(textNodePreco);
      itemLink.appendChild(textNodeLink);

      liProduto.appendChild(imgProduto);
      liProduto.appendChild(itemTitulo);
      liProduto.appendChild(itemPreco);
      liProduto.appendChild(itemLink);

      elemento.appendChild(liProduto);
    }

    if (produtoCarregado.categoria == "Diversos") {
      var elemento = document.querySelector(".produtos__galeria_listaDiversos");

      var liProduto = document.createElement("li");
      var imgProduto = document.createElement("img");
      var itemTitulo = document.createElement("h3");
      var itemPreco = document.createElement("h4");
      var itemLink = document.createElement("a");

      liProduto.classList.add("produtos__galeria_item");
      imgProduto.classList.add("produtos__galeria_img");
      itemTitulo.classList.add("produtos__galeria_titulo");
      itemPreco.classList.add("produtos__galeria_preco");
      itemLink.classList.add("produtos__galeria_link");

      if (produtoCarregado.imagem.length > 100) {
        var dataImage = produtoCarregado.imagem;

        imgProduto.src = "data:image/png;base64," + dataImage;
      } else {
        imgProduto.setAttribute(
          "src",
          produtoCarregado.imagem.replace("..", "./assets")
        );
      }

      itemLink.setAttribute("href", "./assets/pages/produto.html");

      var textNodeNome = document.createTextNode(produtoCarregado.nome);
      var textNodePreco = document.createTextNode(produtoCarregado.preco);
      var textNodeLink = document.createTextNode("Ver produto");

      itemTitulo.appendChild(textNodeNome);
      itemPreco.appendChild(textNodePreco);
      itemLink.appendChild(textNodeLink);

      liProduto.appendChild(imgProduto);
      liProduto.appendChild(itemTitulo);
      liProduto.appendChild(itemPreco);
      liProduto.appendChild(itemLink);

      elemento.appendChild(liProduto);
    }

    if (produtoCarregado.categoria == "Novos Produtos") {
      var titulo = document.querySelector(".produtos__tituloNovos");
      var galeria = document.querySelector(".produtos__galeriaNovos");

      titulo.style.display = "flex";
      galeria.style.display = "inline";

      var elemento = document.querySelector(".produtos__galeria_listaNovos");

      var liProduto = document.createElement("li");
      var imgProduto = document.createElement("img");
      var itemTitulo = document.createElement("h3");
      var itemPreco = document.createElement("h4");
      var itemLink = document.createElement("a");

      liProduto.classList.add("produtos__galeria_item");
      imgProduto.classList.add("produtos__galeria_img");
      itemTitulo.classList.add("produtos__galeria_titulo");
      itemPreco.classList.add("produtos__galeria_preco");
      itemLink.classList.add("produtos__galeria_link");

      if (produtoCarregado.imagem.length > 100) {
        var dataImage = produtoCarregado.imagem;

        imgProduto.src = "data:image/png;base64," + dataImage;
      } else {
        imgProduto.setAttribute(
          "src",
          produtoCarregado.imagem.replace("..", "./assets")
        );
      }

      itemLink.setAttribute("href", "./assets/pages/produto.html");

      var textNodeNome = document.createTextNode(produtoCarregado.nome);
      var textNodePreco = document.createTextNode(produtoCarregado.preco);
      var textNodeLink = document.createTextNode("Ver produto");

      itemTitulo.appendChild(textNodeNome);
      itemPreco.appendChild(textNodePreco);
      itemLink.appendChild(textNodeLink);

      liProduto.appendChild(imgProduto);
      liProduto.appendChild(itemTitulo);
      liProduto.appendChild(itemPreco);
      liProduto.appendChild(itemLink);

      elemento.appendChild(liProduto);
    }
  }
}
