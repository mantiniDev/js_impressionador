function calculateSquareRoot(radicand) {
  //console.log(radicand);
  return radicand ** (1 / 2);
}

function calculatePythagoras(side1, side2) {
  //console.log(side1,side2)
  const sum = side1 ** 2 + side2 ** 2;
  //console.log(sum)
  return calculateSquareRoot(sum);
}

console.log(
  `A Hyp de um triangulo de lados 3 e 4: ${calculatePythagoras(3, 4)}`
);
