function criaProduto() {
  var qtdProdutos = parseInt(localStorage.getItem("quantidadeProdutos"));
  bannerImage = document.getElementById("Produto__conteudo_img");
  imgData = getBase64Image(bannerImage);
  var select = document.getElementById("adiciona__conteudo_categoriaSelect");

  var nomeProduto = document.querySelector(
    ".adiciona__conteudo_nome_input"
  ).value;
  var precoProduto = document.querySelector(
    ".adiciona__conteudo_preco_input"
  ).value;
  var categoriaProduto = select.options[select.selectedIndex].value;
  var descricaoProduto = document.querySelector(
    ".adiciona__conteudo_textoDescricao_input"
  ).value;

  var objeto = {
    nome: nomeProduto,
    preco: "R$ " + precoProduto,
    descricao: descricaoProduto,
    imagem: imgData,
    categoria: categoriaProduto,
  };
  var produto = JSON.stringify(objeto);

  localStorage.setItem("produto " + qtdProdutos, produto);
  var novaQtdProduto = qtdProdutos + 1;
  localStorage.setItem("quantidadeProdutos", novaQtdProduto);

  alert(`O produto ${nomeProduto} foi adicionado com sucesso!`);
  location.reload(true);
}

function getBase64Image(img) {
  var canvas = document.createElement("canvas");

  canvas.width = img.width;
  canvas.height = img.height;

  console.log(img.width);

  var ctx = canvas.getContext("2d");
  ctx.drawImage(img, 0, 0);

  var dataURL = canvas.toDataURL("image/png");

  return dataURL.replace(/^data:image\/(png|jpg);base64,/, "");
}
