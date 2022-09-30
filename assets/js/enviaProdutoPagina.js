function produtoSelecionado(pagina) {
  var clicado = document.querySelectorAll(".produtos__galeria_link");
  for (var i = 0; i < clicado.length; i++) {
    clicado[i].addEventListener("click", function (e) {
      e.preventDefault();
      localStorage.setItem(
        "NomeSelecionado",
        e.target.parentElement.querySelector(".produtos__galeria_titulo")
          .textContent
      );

      if (pagina == "index") {
        window.location.href = "./assets/pages/produto.html";
      } else {
        location.reload(true);
      }
    });
  }
}

function produtoPesquisaSelecionado(pagina) {
  var clicado = document.querySelectorAll(".produtos__pesquisa_link");
  for (var i = 0; i < clicado.length; i++) {
    clicado[i].addEventListener("click", function (e) {
      e.preventDefault();
      localStorage.setItem(
        "NomeSelecionado",
        e.target.textContent
          
      );

      
      if (pagina == "todosProdutos" || pagina == "login" || pagina == "adicionaProduto" ) {
        window.location.href = "../pages/produto.html";
      }else {
        window.location.href = "./assets/pages/produto.html";
      }
    });
  }
}

function produtoSimilar(produto) {
  for (i = 0; i < localStorage.length; i++) {
    if (
      localStorage.key(i) == "NomeSelecionado" ||
      localStorage.key(i) == "quantidadeProdutos"
    ) {
      continue;
    }
    var chave = localStorage.key(i);
    var produtoCarregado = JSON.parse(localStorage.getItem(chave));

    if (
      produto.categoria == produtoCarregado.categoria &&
      produto.nome != produtoCarregado.nome
    ) {
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

        imgProduto.setAttribute("src", "data:image/png;base64," + dataImage);
      } else {
        imgProduto.setAttribute("src", produtoCarregado.imagem);
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
      produtoSelecionado("produto");
    }
  }
}

function produtoVitrine() {
  for (i = 0; i < localStorage.length; i++) {
    if (
      localStorage.key(i) == "NomeSelecionado" ||
      localStorage.key(i) == "quantidadeProdutos"
    ) {
      continue;
    }
    var chave = localStorage.key(i);
    var produtoCarregado = JSON.parse(localStorage.getItem(chave));

    if (localStorage.getItem("NomeSelecionado") == produtoCarregado.nome) {
      var elemento = document.querySelector(".produto");

      var imgProduto = document.createElement("img");
      var descricaoProduto = document.createElement("div");
      var tituloProduto = document.createElement("h2");
      var precoProduto = document.createElement("h3");
      var produtoDescricao = document.createElement("div");

      imgProduto.classList.add("produto__img");
      descricaoProduto.classList.add("produto__descricao_texto");
      tituloProduto.classList.add("produto__descricao_titulo");
      precoProduto.classList.add("produto__descricao_preco");
      produtoDescricao.classList.add("produto__descricao");

      if (produtoCarregado.imagem.length > 100) {
        var dataImage = produtoCarregado.imagem;

        imgProduto.setAttribute("src", "data:image/png;base64," + dataImage);
      } else {
        imgProduto.setAttribute("src", produtoCarregado.imagem);
      }
      var textNodeNome = document.createTextNode(produtoCarregado.nome);
      var textNodePreco = document.createTextNode(produtoCarregado.preco);
      var textNodeDescricao = document.createTextNode(
        produtoCarregado.descricao
      );

      descricaoProduto.appendChild(textNodeDescricao);
      tituloProduto.appendChild(textNodeNome);
      precoProduto.appendChild(textNodePreco);

      elemento.appendChild(imgProduto);
      elemento.appendChild(produtoDescricao);
      produtoDescricao.appendChild(tituloProduto);
      produtoDescricao.appendChild(precoProduto);
      produtoDescricao.appendChild(descricaoProduto);

      produtoSimilar(produtoCarregado);
    }
  }
}
