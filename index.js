/*
Operador logico - Or.
=> Paga MEIA:
- Menores de 18.
- Idosos.
=> Condição 2 =>  para pagar MEIA:
- Adultos (meia apenas com carteirinha).
*/

const readlineSync = require('readline-sync');
let age = readlineSync.question('Input your age: ');
let isWallet = readlineSync.question('have a wallet? ');
if (age >= 18 && age < 60 && isWallet === "n") {
    console.log('intire')
  if(age < 18 || age >= 60 && isWallet === "y") {
    console.log('half')
  }
}

/** This is a version update */