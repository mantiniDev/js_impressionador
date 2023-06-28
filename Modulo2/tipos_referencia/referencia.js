const cartao1 = {
  nome: "Daniel Porto",
  saldo: 100000000,
};

const cartao2 = cartao1; //ele cria um objeto usando o outro como referência; 

console.log(cartao1);
console.log(cartao2);

cartao2.saldo -= 200000;

console.log(cartao1);
console.log(cartao2);