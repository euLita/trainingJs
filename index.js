/*
Operador logico - Or.
=> Paga MEIA:
- Menores de 18.
- Idosos.
=> Condição 2 para pagar MEIA:
- Adultos (meia apenas com carteirinha).
*/
const readlineSync = require('readline-sync');

let age = readlineSync.question('Input your age: ');
let isWallet = readlineSync.question('have a wallet? ');
// let isAdulta;
if (age >= 18 && age < 60 && isWallet === "n") {
    console.log('intire')
  if (age < 18 || age >= 60 || (isAdulta && isWallet)) {
    console.log('half')
  }
}

/*if(isAdulta && !temCarteirinha){
  console.log('INTEIRA')
} else {
  console.log('MEIA')
}
*/