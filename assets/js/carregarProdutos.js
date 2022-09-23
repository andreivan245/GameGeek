var elementos = document.getElementsByClassName("produtos__vertudo");
for (i = 0; i < elementos.length; i++) {
  elementos[i].addEventListener("click", function (event) {
    event.preventDefault();

    let produtos = [
      {
        nome: "Produto AAA",
        preco: "R$60,00",
        descricao: "produto foda...",
        imagem: "../img/produtos/starwars1.png",
      },
      {
        nome: "Produto BBB",
        preco: "R$88,00",
        descricao: "produto foda tbm...",
        imagem: "../img/produtos/starwars2.png",
      },
    ];

    for(i=0; i<produtos.length; i++){
        var produto = JSON.stringify(produtos[i]);
        var chave = 'produto ' + i
        localStorage.setItem(chave, produto);
    }
    window.location.href = "./assets/pages/todosProdutos.html"
    

   
  });
}

function chamaProdutos() {
    for(i=0; i<localStorage.length; i++){
        var chave = 'produto ' + i
        var produtoCarregado = JSON.parse(localStorage.getItem(chave))

        var elemento = document.querySelector(".todosProdutos__conteudo_produtos_lista");
        var liProduto = document.createElement("li")
        var divProduto = document.createElement("div")
        var imgLixeira = document.createElement("img")
        var imgLapis = document.createElement("img")
        var itemTitulo = document.createElement("h3")
        var itemPreco = document.createElement("h4")
        var itemDescricao = document.createElement("h5")

        liProduto.classList.add("todosProdutos__conteudo_produtos_item")
        divProduto.classList.add("todosProdutos__conteudo_produtos_itemImg")
        imgLixeira.classList.add("todosProdutos__conteudo_produtos_itemImgLixeira")
        imgLapis.classList.add("todosProdutos__conteudo_produtos_itemImgLapis")
        itemTitulo.classList.add("todosProdutos__conteudo_produtos_itemTitulo")
        itemPreco.classList.add("todosProdutos__conteudo_produtos_itemPreco")
        itemDescricao.classList.add("todosProdutos__conteudo_produtos_itemDescricao")

        imgLixeira.setAttribute('src',"../img/lixeira.png")
        imgLapis.setAttribute('src',"../img/lapis.png")
        console.log(produtoCarregado.imagem)
        divProduto.appendChild(imgLixeira)
        divProduto.appendChild(imgLapis)
        divProduto.style.width = "176px"
        divProduto.style.height ="174px"
        divProduto.style.backgroundImage = "url("+produtoCarregado.imagem+")"
        divProduto.style.backgroundSize = "cover"
        divProduto.style.display = "flex"
        divProduto.style.justifyContent = "flex-end"
        
        var textNodeNome = document.createTextNode(produtoCarregado.nome);
        var textNodePreco = document.createTextNode(produtoCarregado.preco);
        var textNodeDescricao = document.createTextNode(produtoCarregado.descricao);
        
        itemTitulo.appendChild(textNodeNome)
        itemPreco.appendChild(textNodePreco)
        itemDescricao.appendChild(textNodeDescricao)

        liProduto.appendChild(divProduto)
        liProduto.appendChild(itemTitulo)
        liProduto.appendChild(itemPreco)
        liProduto.appendChild(itemDescricao)

        elemento.appendChild(liProduto)

      

    }

}