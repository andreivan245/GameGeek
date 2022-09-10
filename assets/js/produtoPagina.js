const guardaImg = (evento) => {
    evento.preventDefault()

    
    let imagem = evento.target.previousSibling.previousSibling.previousSibling.previousSibling.previousSibling.previousSibling;
    let preco = evento.target.previousSibling.previousSibling.textContent
    let nome = evento.target.previousSibling.previousSibling.previousSibling.previousSibling.textContent
    localStorage.setItem("imagem", imagem.currentSrc);
    localStorage.setItem("preço", preco);
    localStorage.setItem("nome", nome);
    
    console.log(nome)
    window.location.reload(true);
}

let link = document.querySelectorAll('.produtos__galeria_link')
for(i=0;i<link.length; i++){
    link[i].addEventListener('click',guardaImg)
}