function editaProduto() {
  var clicado = document.querySelectorAll(
    ".todosProdutos__conteudo_produtos_itemImgLapis"
  );
  for (var i = 0; i < clicado.length; i++) {
    clicado[i].addEventListener("click", function (e) {
      e.preventDefault();
      var produto = e.target.parentElement.parentElement.querySelector(
        ".todosProdutos__conteudo_produtos_itemTitulo"
      ).textContent;

      for (i = 0; i < localStorage.length; i++) {
        if (
          localStorage.key(i) == "NomeSelecionado" ||
          localStorage.key(i) == "quantidadeProdutos"
        ) {
          continue;
        }
        var chave = localStorage.key(i);

        var produtoCarregado = JSON.parse(localStorage.getItem(chave));
        console.log(JSON.parse(localStorage.getItem(chave)).nome);

        if (produto == JSON.parse(localStorage.getItem(chave)).nome) {
          localStorage.setItem("NomeSelecionado", produto);
          window.location.href = "./editaProduto.html";
        }
      }
    });
  }
}

function editandoProduto() {
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
      localStorage.getItem("NomeSelecionado") ==
      JSON.parse(localStorage.getItem(chave)).nome
    ) {
      console.log(chave);
      console.log(localStorage.getItem("NomeSelecionado"));
      console.log(JSON.parse(localStorage.getItem(chave)).nome);

      var nome = produtoCarregado.nome;
      var preco = produtoCarregado.preco;
      var descricao = produtoCarregado.descricao;
      var imagem = produtoCarregado.imagem;
      var categoria = produtoCarregado.categoria;

      var elementoImagem = document.querySelector(".Produto__conteudo_img");
      var elementoNome = document.querySelector(
        ".adiciona__conteudo_nome_input"
      );
      var elementoPreco = document.querySelector(
        ".adiciona__conteudo_preco_input"
      );
      var elementoCategoria = document.querySelector(
        "#adiciona__conteudo_categoriaSelect"
      );
      var elementoDescricao = document.querySelector(
        ".adiciona__conteudo_textoDescricao_input"
      );

      if (produtoCarregado.imagem.length > 100) {
        var dataImage = produtoCarregado.imagem;

        elementoImagem.src = "data:image/png;base64," + dataImage;
      } else {
        elementoImagem.src = imagem;
      }

      elementoImagem.style.display = "flex";
      document.querySelector(".adiciona__conteudo_input").style.justifyContent =
        "center";

      elementoNome.value = nome;
      elementoPreco.value = preco;
      elementoCategoria.value = categoria;
      elementoDescricao.value = descricao;

      var botaoEditar = document.querySelector(".adiciona__conteudo_botao");
      botaoEditar.addEventListener("click", function (e) {
        e.preventDefault();

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
            localStorage.getItem("NomeSelecionado") ==
            JSON.parse(localStorage.getItem(chave)).nome
          ) {
            produtoCarregado.nome = elementoNome.value;
            produtoCarregado.preco = elementoPreco.value;

            produtoCarregado.descricao = elementoDescricao.value;
            produtoCarregado.categoria = elementoCategoria.value;

            localStorage.setItem(chave, JSON.stringify(produtoCarregado));
            alert(`O produto foi alterado com sucesso!`);
            window.location.href = "./todosProdutos.html";
          }
        }
      });
    }
  }
}
