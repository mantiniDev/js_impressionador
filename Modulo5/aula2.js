//estruturas condicionais

const usuario = { nome: "Daniel", idade: 29, time: "Fluminense" };
const msgBoasVindas1 = "Bem vindo Flameguista";
const msgBoasVindas2 = "Bem vindo Tricolete";
const msgBoasVindas3 = "Bem vindo amante do esporte";

if (usuario.time === "Flamengo") {
  console.log(msgBoasVindas1);
} else if (usuario.time === "Fluminense") {
  console.log(msgBoasVindas2);
} else {
  console.log(msgBoasVindas3);
}

const mensagemDeEscolha = "Cliquei no setor que deseja";
const mensagemFinal = "Bem vindo ao maracanã";

console.log(mensagemDeEscolha);
console.log(mensagemFinal);
