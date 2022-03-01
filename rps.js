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

//The actual RPS game is played here after invoking the computerPlay function
let round = (playerChoice,computerPlay) => {
    if (playerChoice === 'Rock' && computerPlay === 'Scissors' || playerChoice === 'Paper' && computerPlay === 'Rock' || playerChoice === 'Scissors' && computerPlay === 'Paper') {
        console.log(`You chose ${playerChoice} and your opponent chose ${computerPlay}. You win!`);
        result = 'win';
    } else if (playerChoice === 'Rock' && computerPlay === 'Paper' || playerChoice === 'Paper' && computerPlay === 'Scissors' || playerChoice === 'Scissors' && computerPlay === 'Rock') {
        console.log(`You chose ${playerChoice} and your opponent chose ${computerPlay}. You lose!`);
        result = 'loss';
    } else if (playerChoice === computerPlay) {
        console.log(`Both you and your opponent chose ${playerChoice}. It's a tie!`);
        result = 'tie';
    } else {
        console.log('Pick between "Rock","Paper", or "Scissors"!')
        //In the future I might have to put an if statement here saying 'if play count > 0 then substract one' or something similar.
        //or alternatively, all of these if statements can increase play count except for this last one.
    }
}
