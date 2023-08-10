const regularArray = [2,5,2,7,1,3,4,7];

let count = 0;

//while (count < regularArray.length) {
//    regularArray[count] += count;
//    count++;
//}
//console.log('o array atual é: ', regularArray);

//for (let i = 0; i < regularArray.length; i++) {
//   regularArray[i] += i    
//}
//console.log('o array atual é: ', regularArray);

function calculateFibonacciTerm(termNumber){
    let lastTerm = 1;
    let secondToLast = 0;
       
    for (let i = 1; i < termNumber; i++) {
        let auxVar = lastTerm + secondToLast;
        secondToLast = lastTerm;
        lastTerm = auxVar;
    }
    return lastTerm;
}

console.log(`O valor do termo do número 5 da sequencia de fibonaccié ${calculateFibonacciTerm(5)}`)

