//funçoes para os elementos de adicionar imagem

//funçao para o elemento de arrasta e solta
function arrastaSolta() {
  const image_drop_area = document.querySelector("#adiciona__conteudo_drop");
  var imagem_carregada;

  image_drop_area.addEventListener("dragover", (event) => {
    event.stopPropagation();
    event.preventDefault();
    event.dataTransfer.dropEffect = "copy";
  });

  image_drop_area.addEventListener("drop", (event) => {
    event.stopPropagation();
    event.preventDefault();
    const fileList = event.dataTransfer.files;

    readImage(fileList[0]);
  });

  //funçao para a leitura da imagem do elemento arrasta e solta
  readImage = (arquivo) => {
    const reader = new FileReader();
    reader.addEventListener("load", (event) => {
      uploaded_image = event.target.result;

      var elemento = document.querySelector(".adiciona__conteudo_input");

      var imgProduto = document.createElement("img");
      elemento.appendChild(imgProduto);
      fileInput;
      elemento.removeChild(
        document.querySelector(".adiciona__conteudo_drop_ou")
      );
      elemento.removeChild(
        document.querySelector(".adiciona__conteudo_drop_label")
      );
      elemento.removeChild(document.querySelector("#adiciona__conteudo_drop"));
      elemento.removeChild(document.querySelector("#fileInput"));

      imgProduto.classList.add("Produto__conteudo_img");
      imgProduto.id = "Produto__conteudo_img";
      imgProduto.setAttribute("src", `${uploaded_image}`);
      elemento.style.justifyContent = "center";
      imgProduto.style.display = "flex";
    });
    reader.readAsDataURL(arquivo);
  };
}

//funçao para a leitura da imagem do input file
function inputImagem() {
  const arquivoImagem = document.querySelector("#fileInput");
  arquivoImagem.addEventListener("change", function (evt) {
    if (!(evt.target && evt.target.files && evt.target.files.length > 0)) {
      return;
    }

    // Inicia o file-reader:
    var r = new FileReader();
    // Define o que ocorre quando concluir:
    r.onload = function () {
      // Define o `src` do elemento para o resultado:

      var elemento = document.querySelector(".adiciona__conteudo_input");

      var imgProduto = document.createElement("img");
      elemento.appendChild(imgProduto);
      elemento.removeChild(
        document.querySelector(".adiciona__conteudo_drop_ou")
      );
      elemento.removeChild(
        document.querySelector(".adiciona__conteudo_drop_label")
      );
      elemento.removeChild(document.querySelector("#adiciona__conteudo_drop"));
      elemento.removeChild(document.querySelector("#fileInput"));

      imgProduto.classList.add("Produto__conteudo_img");
      imgProduto.id = "Produto__conteudo_img";
      imgProduto.src = r.result;
      elemento.style.justifyContent = "center";
      imgProduto.style.display = "flex";
    };
    // Lê o arquivo e cria um link (o resultado vai ser enviado para o onload.
    r.readAsDataURL(evt.target.files[0]);
  });
}
