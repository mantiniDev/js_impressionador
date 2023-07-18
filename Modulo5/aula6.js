const usuario = { nome: "Daniel", idade: 29, time: "Flamengo" };
const msgBoasVindas1 = "Bem vindo Flamenguista";
const msgBoasVindas2 = "Bem vindo Tricolete";

let numRepeticoes = 0;
do {
  usuario.time === "Flamengo"
    ? console.log(msgBoasVindas1)
    : console.log(msgBoasVindas2);

  const mensagemDeEscolha = "Cliquei no setor que deseja";
  const mensagemFinal = "Bem vindo ao maracanã";

  console.log(mensagemDeEscolha);
  console.log(mensagemFinal);
  numRepeticoes ++;
} while (numRepeticoes < 5);

