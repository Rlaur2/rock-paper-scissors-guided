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
//The actual RPS game is coded here
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
        result = null;
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


//The full game code here that plays 5 times and states the winner 
//I want to include a condition that if round === null then substract 1 from i (if i > 0) but I'm not sure how to do that.
let game = () => {
    for (let i = 0; i < 5; i++) {
        playerChoice = prompt('Choose between "Rock, Paper, or Scissors"');
        playerChoice = caseFix(playerChoice);
        round(playerChoice,computerSelection);
    }
}