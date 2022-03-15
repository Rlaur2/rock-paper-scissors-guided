//declaring all the HTML elements that will need some JS
const announce = document.querySelector('.announce');
const nextGameButton = document.querySelector('.next-game');
const playerImage = document.querySelector('.player-image');
const opponentImage = document.querySelector('.opponent-image');
const playerScore = document.querySelector('.player-score');
const ties = document.querySelector('.ties');
const opponentScore = document.querySelector('.opponent-score');
const weaponHeader = document.querySelector('.weapon-header');
const rockButton = document.querySelector('.rock-button');
const paperButton = document.querySelector('.paper-button');
const scissorButton = document.querySelector('.scissor-button');

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
};

//Function that tallys up the score and displays winner of round
playerScore.textContent = 0;
ties.textContent = 0;
opponentScore.textContent = 0;

const decider = (result) => {
    if (result === 'win') {
        playerScore.textContent++;
        announce.textContent = 'Player wins!';
    } else if (result === 'loss') {
        opponentScore.textContent++;
        announce.textContent = 'Opponent wins!';
    } else if (result === 'tie') {
        ties.textContent++;
        announce.textContent = 'Tie round!';
    }
};

//function to display the player and opponent image in arena
const display = (playerChoice,computerSelection) => {
    if (playerChoice === 'Rock') {
        playerImage.src = './rpsImages/rock.png';
    } else if (playerChoice === 'Paper') {
        playerImage.src = './rpsImages/paper.png';
    } else if (playerChoice === 'Scissors') {
        playerImage.src= './rpsImages/scissors.png'
    } if (computerSelection === 'Rock') {
        opponentImage.src = './rpsImages/rock.png';
    } else if (computerSelection === 'Paper') {
        opponentImage.src = './rpsImages/paper.png';
    } else if (computerSelection === 'Scissors') {
        opponentImage.src = './rpsImages/scissors.png';
    }
};



let computerSelection;
//The actual RPS game function is coded here
function battle (playerChoice,computerSelection) {
    computerSelection = computerPlay();
    playerChoice = this.id;
    if (playerChoice === 'Rock' && computerSelection === 'Scissors' || playerChoice === 'Paper' && computerSelection === 'Rock' || playerChoice === 'Scissors' && computerSelection === 'Paper') {
        result = 'win';
    } else if (playerChoice === 'Rock' && computerSelection === 'Paper' || playerChoice === 'Paper' && computerSelection === 'Scissors' || playerChoice === 'Scissors' && computerSelection === 'Rock') {
        result = 'loss';
    } else if (playerChoice === computerSelection) {
        result = 'tie';
    } display(playerChoice,computerSelection);
    decider(result);
    endGame();
};

//Function to reset game state to the start
const resetGame = () => {
    announce.textContent = 'Rock, Paper, Scissors!';
    playerScore.textContent = 0;
    opponentScore.textContent = 0;
    ties.textContent = 0;
    weaponHeader.textContent = 'Choose your weapon!';
    rockButton.addEventListener('click',battle);
    paperButton.addEventListener('click',battle);
    scissorButton.addEventListener('click',battle);
    playerImage.src = '';
    opponentImage.src = '';
    buttonToggle();
};

//Function to end game and remove listeners from buttons
const endGame = () => {
    if (playerScore.textContent == 5) {
        announce.textContent = 'You\'ve won the set!';
    } else if (opponentScore.textContent == 5) {
        announce.textContent = 'You\'ve lost the set!';
    } else return;
    nextGameButton.textContent = 'Play again';
    weaponHeader.textContent = '';
    rockButton.removeEventListener('click',battle);
    paperButton.removeEventListener('click',battle);
    scissorButton.removeEventListener('click',battle);
    nextGameButton.addEventListener('click',resetGame);
    buttonToggle();
};

//Function that switches the CSS of the buttons at end of game
const buttonToggle = () => {
    rockButton.classList.toggle('rock-button');
    rockButton.classList.toggle('rock-end');
    paperButton.classList.toggle('paper-button');
    paperButton.classList.toggle('paper-end');
    scissorButton.classList.toggle('scissor-button');
    scissorButton.classList.toggle('scissor-end');
}

rockButton.addEventListener('click',battle);
paperButton.addEventListener('click',battle);
scissorButton.addEventListener('click',battle);