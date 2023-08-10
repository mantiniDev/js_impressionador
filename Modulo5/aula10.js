function calculateFibonacciTerm(termNumber) {
  if (termNumber === 0) {
    return 0;
  }
  if (termNumber === 1) {
    return 1;
  }
  return (
    calculateFibonacciTerm(termNumber - 1) +
    calculateFibonacciTerm(termNumber - 2)
  );
}

console.log(
  `O valor do termo do número 2 da sequencia de fibonaccié ${calculateFibonacciTerm(
    6
  )}`
);
