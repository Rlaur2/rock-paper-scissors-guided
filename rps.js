//Function to randomly choose between Rock, Paper, or Scissors
let computerPlay = () => {
    let rng = Math.floor(Math.random()*3);
   if (rng === 0) {
       aiChoice = 'Rock';
   } else if (rng === 1) {
       aiChoice = 'Paper';
   } else {
       aiChoice = 'Scissors';
   }
   return aiChoice
}

let computerSelection;
//The actual RPS game function is coded here
let battle = (playerChoice,computerSelection) => {
    computerSelection = computerPlay();
    if (playerChoice === 'Rock' && computerSelection === 'Scissors' || playerChoice === 'Paper' && computerSelection === 'Rock' || playerChoice === 'Scissors' && computerSelection === 'Paper') {
        result = 'win';
        console.log(`You chose ${playerChoice} and your opponent chose ${computerSelection}. You win!`);
        
    } else if (playerChoice === 'Rock' && computerSelection === 'Paper' || playerChoice === 'Paper' && computerSelection === 'Scissors' || playerChoice === 'Scissors' && computerSelection === 'Rock') {
        result = 'loss';
        console.log(`You chose ${playerChoice} and your opponent chose ${computerSelection}. You lose!`);
    } else if (playerChoice === computerSelection) {
        result = 'tie';
        console.log(`Both you and your opponent chose ${playerChoice}. It's a tie!`);       
    } else {
        result = null;
        console.log('Pick between "Rock","Paper", or "Scissors"!')
    }
    return result;
}
//Function to correct type case (lower case, all CAPS etc.)
let caseFix = (word) => {
    wordLower = word.toLowerCase();
    wordFirst = wordLower.slice(0,1);
    wordFirstUpper = wordFirst.toUpperCase();
    final = wordLower.replace(wordFirst, wordFirstUpper);
    return final;
}

console.log('Type "playRPS()" without the quotes to start the 5 round game of Rock, Paper, Scissors!')
//The full game code here that plays 5 times and states the winner 
let playRPS = () => {
    let winCount = 0;
    let lossCount = 0;
    let tieCount = 0;
    for (let i = 1; i <= 5; i++) {
        console.log(`Round: ${i}`)
        playerChoice = prompt('Choose between "Rock, Paper, or Scissors"');
        playerChoice = caseFix(playerChoice);
        let round = battle(playerChoice,computerSelection);
        if (round === null) {
            i--;
        } else if (round === 'win') {
             winCount++;
        } else if (round === 'loss') {
            lossCount++;            
        } else if (round === 'tie') {
            tieCount++;
        }} if (winCount > lossCount) {
            alert(`You won ${winCount} time(s), you loss ${lossCount} time(s), and you tied ${tieCount} time(s).`);
            alert('Congratulations you\'ve won the set!')
        } else if (winCount < lossCount) {
            alert(`You won ${winCount} time(s), you loss ${lossCount} time(s), and you tied ${tieCount} time(s).`);
            alert('You\'ve lost the set! Too bad loser!');
        } else if (winCount === lossCount) {
            alert(`You won ${winCount} time(s), you loss ${lossCount} time(s), and you tied ${tieCount} time(s).`);
            alert('Tie game!');
        }}
    