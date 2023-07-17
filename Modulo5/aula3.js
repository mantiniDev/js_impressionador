//switch

const usuario = { nome: "Daniel", idade: 29, time: "Vascaino" };
const msgBoasVindas1 = "Bem vindo Flameguista";
const msgBoasVindas2 = "Bem vindo Tricolor";
const msgBoasVindas3 = "Bem vindo Santista";
const msgBoasVindas4 = "Bem vindo Sao-paulino";
const msgBoasVindas5 = "Bem vindo Corintiano";
const msgBoasVindas6 = "Bem vindo Palmerense";
const msgBoasVindas7 = "Bem vindo Cruzeirense";
const msgBoasVindas8 = "Bem vindo amante do esporte";

switch (usuario.time) {
  case "Flamenguista":
    console.log(msgBoasVindas1);
    break;
  case "Tricolor":
    console.log(msgBoasVindas2);
    break;
  case "Santista":
    console.log(msgBoasVindas3);
    break;
  case "Sao-paulino":
    console.log(msgBoasVindas4);
    break;
  case "Corintiano":
    console.log(msgBoasVindas5);
    break;
  case "Palmerense":
    console.log(msgBoasVindas6);
    break;
  case "Cruzeirense":
    console.log(msgBoasVindas7);
    break;
  default:
    console.log(msgBoasVindas8);
}

const mensagemDeEscolha = "Cliquei no setor que deseja";
const mensagemFinal = "Bem vindo ao maracanã";

console.log(mensagemDeEscolha);
console.log(mensagemFinal);
