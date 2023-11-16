/*Operador logico - Or.
=> Paga MEIA:
- Menores de 18.
- Idosos.
=> Condição 2 para pagar MEIA:
- Adultos (meia apenas com carteirinha).
*/
const readlineSync = require('readline-sync');

let idade = readlineSync.question('Digite sua idade: ');
let temCarteirinha = readlineSync.question('Tem carteirinha? ');
let isAdulta;
if (idade >= 18 && idade < 60) {
   isAdulta = true;
  if (idade < 18 || idade >= 60 || (isAdulta && temCarteirinha)) {
    console.log('MEIA')
  } else {
    console.log('INTEIRA')
  }
} 

/*if(isAdulta && !temCarteirinha){
  console.log('INTEIRA')
} else {
  console.log('MEIA')
}
*/