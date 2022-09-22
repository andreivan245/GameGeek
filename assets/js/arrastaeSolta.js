adiciona__conteudo_drop.ondragover = adiciona__conteudo_drop.ondragenter = function(evt) {
    evt.preventDefault();
  };
  
  adiciona__conteudo_drop.ondrop = function(evt) {
    // pretty simple -- but not for IE :(
    fileInput.files = evt.dataTransfer.files;
  
    // If you want to use some of the dropped files
    const dT = new DataTransfer();
    dT.items.add(evt.dataTransfer.files[0]);
    dT.items.add(evt.dataTransfer.files[3]);
    fileInput.files = dT.files;
  
    evt.preventDefault();
  };