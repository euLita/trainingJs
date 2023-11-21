/*
Operador logico - Or.
=> Paga MEIA:
- menores de 18.
- idosos.
=> Condição 2
- para pagar MEIA:
- adultos (meia apenas com carteirinha).
*/

let age = prompt('Input your age: ');
let isWallet = prompt('have a wallet? ');

age = parseInt(age);

if ((age >= 18 || age < 60) && isWallet === "n") {
  console.log('intire')
} else if ((age < 18 || age >= 60) && isWallet === 'y') {
  console.log('half')
}

/** This is a version update */