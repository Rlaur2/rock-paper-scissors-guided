let computerPlay = () => {
    //Code to randomly choose between Rock, paper, or scissors
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
//The actual RPS game is played here after invoking the computerPlay function
let round = (playerChoice,computerSelection) => {
    computerSelection = computerPlay();
    if (playerChoice === 'Rock' && computerSelection === 'Scissors' || playerChoice === 'Paper' && computerSelection === 'Rock' || playerChoice === 'Scissors' && computerSelection === 'Paper') {
        console.log(`You chose ${playerChoice} and your opponent chose ${computerSelection}. You win!`);
        result = 'win';
    } else if (playerChoice === 'Rock' && computerSelection === 'Paper' || playerChoice === 'Paper' && computerSelection === 'Scissors' || playerChoice === 'Scissors' && computerSelection === 'Rock') {
        console.log(`You chose ${playerChoice} and your opponent chose ${computerSelection}. You lose!`);
        result = 'loss';
    } else if (playerChoice === computerSelection) {
        console.log(`Both you and your opponent chose ${playerChoice}. It's a tie!`);
        result = 'tie';
    } else {
        console.log('Pick between "Rock","Paper", or "Scissors"!')
        //In the future I might have to put an if statement here saying 'if play count > 0 then substract one' or something similar.
        //or alternatively, all of these if statements can increase play count except for this last one.
    }
    return result;
}


