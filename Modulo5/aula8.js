function calculateFibonacciTerm(termNumber){
    let lastTerm = 1;
    let secondToLast = 0;

    if(termNumber === 0){
        return 0;
    }
    let currentIteration = 2;
    while (currentIteration <= termNumber) {
        let auxVar = lastTerm + secondToLast;
        secondToLast = lastTerm;
        lastTerm = auxVar;
        currentIteration++;      
    }
    return lastTerm;
}

console.log(`O valor do termo do número 6 da sequencia de fibonaccié ${calculateFibonacciTerm(6)}`)