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



    