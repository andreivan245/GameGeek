// funçao de apagar produtos

function apagaProduto() {
  var clicado = document.querySelectorAll(
    ".todosProdutos__conteudo_produtos_itemImgLixeira"
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
          var qtdProdutos = parseInt(
            localStorage.getItem("quantidadeProdutos")
          );
          localStorage.setItem("quantidadeProdutos", qtdProdutos - 1);
          localStorage.removeItem(chave);
          alert(`O produto ${produto} foi deletado com sucesso!`);
          location.reload(true);
        }
      }
    });
  }
}
