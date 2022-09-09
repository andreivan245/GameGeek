const guardaImg = (evento) => {
    evento.preventDefault()

    
    let imagem = evento.target.previousSibling.previousSibling.previousSibling.previousSibling.previousSibling.previousSibling;
    localStorage.setItem("imagem", imagem.currentSrc);
    console.log(imagem)
    window.location.href = "./assets/pages/produto.html"
    recarregaPagina()
}

let link = document.querySelectorAll('.produtos__galeria_link')
for(i=0;i<link.length; i++){
    link[i].addEventListener('click',guardaImg)
}