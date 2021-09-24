const readline = require('readline-sync');
const WINNING_SCORE = 3;
const VALID_INPUTS = ['Rock', 'Paper', 'Scissors', 'Lizard', 'Spock'];
const WINNING_MOVES = {
  'Rock': ['Scissors', 'Lizard'],
  'Paper': ['Rock', 'Spock'],
  'Scissors': ['Paper', 'Lizard'],
  'Lizard': ['Spock', 'Paper'],
  'Spock': ['Rock', 'Scissors']
}
let myPoints = 0;
let computerPoints = 0;

function matchWinner(myScore, opScore) {
  return myScore > opScore ? 'You win the match!' : 'You lost the match.';
}

function prompt(msg) {
  console.log(`=> ${msg}`);
}

function answerConverter(userInput) {

  if (userInput === 'r') {
    return VALID_INPUTS[0];
  } else if (userInput === 'p') {
    return VALID_INPUTS[1];
  } else if (userInput === 's') {
    return VALID_INPUTS[2];
  } else if (userInput === 'l') {
    return VALID_INPUTS[3];
  } else {
    return VALID_INPUTS[4];
  }
}

function displayWinner(myAnswer, computerAnswer) {
  if (WINNING_MOVES[myAnswer].includes(computerAnswer)) {
    return true;
  } else {
    return false;
  }
}

function askToPlayAgain() {
  let replay = readline.question(); //ask to play again

  while(replay[0].toUpperCase() !== 'Y' && replay[0].toUpperCase() !== 'N') {
    prompt(`${replay} is not a valid answer. Please say Yes or No (Y/N).`);
    replay = readline.question();
  }

  return replay;
}

prompt('Welcome to Rock, Paper, Scizzors, Lizard, Spock (Best outta 5)!');

while (myPoints < WINNING_SCORE || computerPoints < WINNING_SCORE) {
  console.log('_______________________________________');
  let opAnswer = VALID_INPUTS[Math.ceil(Math.random() * VALID_INPUTS.length) - 1];

  prompt('Please select from the following:');
  console.log('-Rock(r)\n-Paper(p)\n-Scissors(s)\n-Lizard(l)\n-Spock(sp)\n');
  let userAnswer = readline.question().toLowerCase();

  while (!['r', 'p', 's', 'l', 'sp'].includes(userAnswer)) {
    prompt(`${userAnswer} is invalid. Please try again`);
    userAnswer = readline.question();
  }

  userAnswer = answerConverter(userAnswer);

  console.clear();

  if (displayWinner(userAnswer, opAnswer) === true) {
    prompt('Round won');
    myPoints += 1;
  } else if (displayWinner(userAnswer, opAnswer) === false && userAnswer === opAnswer) {
    prompt("It's a Tie!");
  } else {
    prompt('Round lost');
    computerPoints += 1;
  }

  prompt(`Your choice: ${userAnswer}`);
  prompt(`Opponent choice: ${opAnswer}`);
  prompt(`You: ${myPoints} | Opponent: ${computerPoints}`);

  if (myPoints === WINNING_SCORE  || computerPoints === WINNING_SCORE) {
    prompt(matchWinner(myPoints, computerPoints));
    prompt('Would you like to play again? (Y/N)');
    let again = askToPlayAgain();

    if (again[0].toUpperCase() === 'Y') {
      myPoints = 0;
      computerPoints = 0;
      console.clear();
    } else {
      break;
    }
  }
}

console.log('_______________________________________');
prompt('Thank you for playing!');
