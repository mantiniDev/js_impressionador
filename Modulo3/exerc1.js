// Exercicio 1
function mediaNotas(nota1, nota2, nota3) {
  const media = (nota1 + nota2 + nota3) / 3;
  console.log(`A média desse aluno é ${media}`);
  return media;
}

// Exercicio 2
function mediaFinal(media_antes_da_pf, pf) {
  const media_final = (media_antes_da_pf + pf) / 2;
  console.log(`A média final desse aluno é ${media_final}`);
}

// mediaFinal(mediaNotas(6,6,6),8)

//exercicio 3
function conversor(temperatuaCelsus) {
  const faren = (9 / 5) * temperatuaCelsus + 32;
  console.log(`A temperatura correspondente em Farenheit é ${faren}ºF`);
}
//conversor(100);

function impostos(valorInicialProduto) {
  const valorImposto = valorInicialProduto * 0.08875;
  const valorFinal = valorInicialProduto + valorImposto;
  console.log(
    `O Valor a ser pago é de ${valorFinal} (sendo ${valorImposto} o resultado do acéscimo dos impostos sobre o valor inicial)`
  );
}

impostos(500)