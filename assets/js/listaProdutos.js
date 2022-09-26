function listaProdutos() {
  let produtos = [
    {
      nome: "Caneca Stormtrooper",
      preco: "R$60,00",
      descricao:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean vitae eros non dui imperdiet ultrices. Cras porttitor, nunc sit amet congue venenatis, turpis leo euismod purus, commodo pharetra leo neque vitae nisl.",
      imagem: "../img/produtos/starwars1.png",
      categoria: "Star Wars",
    },
    {
      nome: "Lego Star Wars",
      preco: "R$ 70,00",
      descricao:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean vitae eros non dui imperdiet ultrices. Cras porttitor, nunc sit amet congue venenatis, turpis leo euismod purus, commodo pharetra leo neque vitae nisl.",
      imagem: "../img/produtos/starwars2.png",
      categoria: "Star Wars",
    },
    {
      nome: "Boneco Yoda",
      preco: "R$ 64,00",
      descricao:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean vitae eros non dui imperdiet ultrices. Cras porttitor, nunc sit amet congue venenatis, turpis leo euismod purus, commodo pharetra leo neque vitae nisl.",
      imagem: "../img/produtos/starwars3.png",
      categoria: "Star Wars",
    },
    {
      nome: "Boneco Stormtrooper",
      preco: "R$ 75,00",
      descricao:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean vitae eros non dui imperdiet ultrices. Cras porttitor, nunc sit amet congue venenatis, turpis leo euismod purus, commodo pharetra leo neque vitae nisl.",
      imagem: "../img/produtos/starwars4.png",
      categoria: "Star Wars",
    },
    {
      nome: "Boneco baby Yoda",
      preco: "R$ 120,00",
      descricao:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean vitae eros non dui imperdiet ultrices. Cras porttitor, nunc sit amet congue venenatis, turpis leo euismod purus, commodo pharetra leo neque vitae nisl.",
      imagem: "../img/produtos/starwars5.png",
      categoria: "Star Wars",
    },
    {
      nome: "Boneco Kylo Ren",
      preco: "R$ 100,00",
      descricao:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean vitae eros non dui imperdiet ultrices. Cras porttitor, nunc sit amet congue venenatis, turpis leo euismod purus, commodo pharetra leo neque vitae nisl.",
      imagem: "../img/produtos/starwars6.png",
      categoria: "Star Wars",
    },
    {
      nome: "Controle Xbox",
      preco: "R$ 70,00",
      descricao:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean vitae eros non dui imperdiet ultrices. Cras porttitor, nunc sit amet congue venenatis, turpis leo euismod purus, commodo pharetra leo neque vitae nisl.",
      imagem: "../img/produtos/console1.png",
      categoria: "Console",
    },
    {
      nome: "PS5",
      preco: "R$ 5000,00",
      descricao:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean vitae eros non dui imperdiet ultrices. Cras porttitor, nunc sit amet congue venenatis, turpis leo euismod purus, commodo pharetra leo neque vitae nisl.",
      imagem: "../img/produtos/console2.png",
      categoria: "Console",
    },
    {
      nome: "Super Nintendo",
      preco: "R$ 800,00",
      descricao:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean vitae eros non dui imperdiet ultrices. Cras porttitor, nunc sit amet congue venenatis, turpis leo euismod purus, commodo pharetra leo neque vitae nisl.",
      imagem: "../img/produtos/console3.png",
      categoria: "Console",
    },
    {
      nome: "Controle Nintendo Switch",
      preco: "R$ 500,00",
      descricao:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean vitae eros non dui imperdiet ultrices. Cras porttitor, nunc sit amet congue venenatis, turpis leo euismod purus, commodo pharetra leo neque vitae nisl.",
      imagem: "../img/produtos/console4.png",
      categoria: "Console",
    },
    {
      nome: "Xbox",
      preco: "R$ 4000,00",
      descricao:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean vitae eros non dui imperdiet ultrices. Cras porttitor, nunc sit amet congue venenatis, turpis leo euismod purus, commodo pharetra leo neque vitae nisl.",
      imagem: "../img/produtos/console5.png",
      categoria: "Console",
    },
    {
      nome: "Game Boy Color XYZ",
      preco: "R$ 550,00",
      descricao:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean vitae eros non dui imperdiet ultrices. Cras porttitor, nunc sit amet congue venenatis, turpis leo euismod purus, commodo pharetra leo neque vitae nisl.",
      imagem: "../img/produtos/console6.png",
      categoria: "Console",
    },
    {
      nome: "Camisa Atari",
      preco: "R$ 55,00",
      descricao:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean vitae eros non dui imperdiet ultrices. Cras porttitor, nunc sit amet congue venenatis, turpis leo euismod purus, commodo pharetra leo neque vitae nisl.",
      imagem: "../img/produtos/diversos1.png",
      categoria: "Diversos",
    },
    {
      nome: "Camisa SNES",
      preco: "R$ 50,00",
      descricao:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean vitae eros non dui imperdiet ultrices. Cras porttitor, nunc sit amet congue venenatis, turpis leo euismod purus, commodo pharetra leo neque vitae nisl.",
      imagem: "../img/produtos/diversos2.png",
      categoria: "Diversos",
    },
    {
      nome: "Boneco Sonic",
      preco: "R$ 85,00",
      descricao:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean vitae eros non dui imperdiet ultrices. Cras porttitor, nunc sit amet congue venenatis, turpis leo euismod purus, commodo pharetra leo neque vitae nisl.",
      imagem: "../img/produtos/diversos3.png",
      categoria: "Diversos",
    },
    {
      nome: "Despertador Retrô",
      preco: "R$ 90,00",
      descricao:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean vitae eros non dui imperdiet ultrices. Cras porttitor, nunc sit amet congue venenatis, turpis leo euismod purus, commodo pharetra leo neque vitae nisl.",
      imagem: "../img/produtos/diversos4.png",
      categoria: "Diversos",
    },
    {
      nome: "Camisa X-tudo",
      preco: "R$ 55,00",
      descricao:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean vitae eros non dui imperdiet ultrices. Cras porttitor, nunc sit amet congue venenatis, turpis leo euismod purus, commodo pharetra leo neque vitae nisl.",
      imagem: "../img/produtos/diversos5.png",
      categoria: "Diversos",
    },
    {
      nome: "Fantasia Pikachu",
      preco: "R$ 300,00",
      descricao:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean vitae eros non dui imperdiet ultrices. Cras porttitor, nunc sit amet congue venenatis, turpis leo euismod purus, commodo pharetra leo neque vitae nisl.",
      imagem: "../img/produtos/diversos6.png",
      categoria: "Diversos",
    },
  ];

  if (localStorage.length > 0) {
    return 0;
  }
  for (i = 0; i < produtos.length; i++) {
    var produto = JSON.stringify(produtos[i]);
    var chave = "produto " + i;
    localStorage.setItem(chave, produto);
  }

  localStorage.setItem("quantidadeProdutos", i);
  localStorage.setItem("NomeSelecionado", "0");
}
