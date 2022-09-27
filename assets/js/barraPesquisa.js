function listaPesquisa() {
    var testData = !!document.querySelector(".cabecalho__pesquisa_listaProdutos");
    if (testData) {
        return;
    }

    var pesquisa_input = document.querySelector(".cabecalho__pesquisa_barra");
var ulListaProdutos = document.createElement("ul");
ulListaProdutos.classList.add("cabecalho__pesquisa_listaProdutos")

for (i = 0; i < localStorage.length; i++) {
    if (
      localStorage.key(i) == "NomeSelecionado" ||
      localStorage.key(i) == "quantidadeProdutos"
    ) {
      continue;
    }
    var chave = localStorage.key(i);
    var produtoCarregado = JSON.parse(localStorage.getItem(chave));

    var liListaProdutos = document.createElement("li");
    var aListaProdutos = document.createElement("a");
    var textNodeNome = document.createTextNode(produtoCarregado.nome);
    aListaProdutos.appendChild(textNodeNome)
    liListaProdutos.appendChild(aListaProdutos)
    ulListaProdutos.appendChild(liListaProdutos)
}
document.querySelector(".cabecalho__direita_pesquisa").appendChild(ulListaProdutos)

}
function barraPesquisa() {

var input, filter, ul, li, a, i, txtValue;
input = document.querySelector(".cabecalho__pesquisa_barra");
filter = input.value.toUpperCase();
ul = document.querySelector(".cabecalho__pesquisa_listaProdutos")
li = ul.getElementsByTagName('li');
document.querySelector(".cabecalho__direita_pesquisa").style.borderRadius = "20px"
// Loop through all list items, and hide those who don't match the search query
for (i = 0; i < li.length; i++) {
    
  a = li[i].getElementsByTagName("a")[0];
  txtValue = a.textContent || a.innerText;
  

  
  
  if (txtValue.toUpperCase().indexOf(filter) > -1 && input.value != "" ) {
    

    ul.style.display ="flex"
    li[i].style.display = "";
    
    
    document.querySelector(".cabecalho__direita_pesquisa").style.background = "#f5f5f5"
    document.querySelector(".cabecalho__direita_pesquisa").style.borderRadius = "20px 20px 0 0"
    document.querySelector(".cabecalho__pesquisa_listaProdutos").style.borderRadius = "0 0 20px 20px"
      
  } else {
    
    if(input.value == ""){
        document.querySelector(".cabecalho__direita_pesquisa").style.background = "#ffff"
    }
    
    
    li[i].style.display = "none";
    
  }
 
}
}