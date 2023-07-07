//metodos associados a funções
let casa = {
  cor: "white",
  sala: 15,
  cozinha: 10,
  banheiro: 8,
  quarto: 20,
  calculartamanho: function(){
    const tamanhoTotal =
    this.banheiro + this.cozinha + this.quarto + this.sala;
    console.log(`o tamanho da casa é ${tamanhoTotal}m²`);
    return tamanhoTotal;
  }
};

casa.calculartamanho()
