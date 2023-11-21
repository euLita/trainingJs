let choice = [""];
let player1 = prompt("Choose rock, paper, or scissors");
let player2 = prompt("Choose rock, paper, or scissors");

//solucao(joao, andre) {
if (
  (player1 == "rock" && player2 == "scissors") || 
  (player1 == "paper" && player2 == "rock") || 
  (player1 == "scissors" && player2 == "paper")
) {
   console.log('player1 WON!');
} else if (
  (player2 == "rock" && player1 == "scissors") || 
  (player2 == "paper" && player1 == "rock") || 
  (player2 == "scissors" && player1 == "paper")
) {
    console.log('player2 WON!');
} else {
    console.log('draw');
}
