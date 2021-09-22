const readline = require('readline-sync');
const VALID_INPUTS = ['Rock', 'Paper', 'Scissors', 'Lizard', 'Spock'];
const WINNING_SCORE = 3;
let myPoints = 0;
let computerPoints = 0;

function matchWinner(myScore, opScore) {
  return myScore > opScore ? 'You win the match!' : 'You lost the match.';
}

function prompt(msg) {
  console.log(`=> ${msg}`);
}

function answerChecker(userInput) {
  switch (userInput) {
    case userInput === 'r': return VALID_INPUTS[0];
      break;
    case userInput === 'p': return VALID_INPUTS[1];
      break;
    case userInput === 's': return VALID_INPUTS[2];
      break;
    case userInput === 'l': return VALID_INPUTS[3];
      break;
    case userInput === 'sp': return VALID_INPUTS[4];
      break;
    default: return null;

  }
}

function displayWinner(myAnswer, computerAnswer) {
  if ((VALID_INPUTS[myAnswer] === 'Rock' &&
      (VALID_INPUTS[computerAnswer] === 'Scissors' || VALID_INPUTS[computerAnswer] === 'Lizard')) ||
      (VALID_INPUTS[myAnswer] === 'Paper' &&
      (VALID_INPUTS[computerAnswer] === 'Rock' || VALID_INPUTS[computerAnswer] === 'Spock')) ||
      (VALID_INPUTS[myAnswer] === 'Scissors' &&
      (VALID_INPUTS[computerAnswer] === 'Paper' || VALID_INPUTS[computerAnswer] === 'Lizard')) ||
      (VALID_INPUTS[myAnswer] === 'Lizard' &&
      (VALID_INPUTS[computerAnswer] === 'Spock' || VALID_INPUTS[computerAnswer] === 'Paper')) ||
      (VALID_INPUTS[myAnswer] === 'Spock' &&
      (VALID_INPUTS[computerAnswer] === 'Rock' || VALID_INPUTS[computerAnswer] === 'Scissors'))) {
    return true;
  } else if (VALID_INPUTS[myAnswer] === VALID_INPUTS[computerAnswer]) {
    return false;
  } else {
    return "Round loss";
  }
}

function askToPlayAgain() {
  let replay = readline.question(); //ask to play again

  while(replay[0].toUpperCase() !== 'Y' || replay[0].toUpperCase() !== 'N') {
    prompt(`${replay} is not a valid answer. Please say Yes or No.`);
    replay = readline.question();
  }

  return replay;
}

prompt('Welcome to Rock, Paper, Scizzors, Lizard, Spock (Best outta 5)!');

while (myPoints < WINNING_SCORE || computerPoints < WINNING_SCORE) {
  console.log('_______________________________________');
  let opAnswer = VALID_INPUTS[Math.floor(Math.random() * VALID_INPUTS.length) - 1];

  prompt('Please select from the following:');
  console.log('-Rock(r)\n-Paper(p)\n-Scissors(s)\n-Lizard(l)\n-Spock(sp)\n');
  let userAnswer = readline.question().toLowerCase();

  while (!['r', 'p', 's', 'l', 'sp'].includes(userAnswer)) {
    prompt(`${userAnswer} is invalid. Please try again`);
    userAnswer = readline.question();
  }

  userAnswer = answerChecker(userAnswer);

  prompt(`Your choice: ${userAnswer}`);
  prompt(`Opponent choice: ${opAnswer}`);

  if (displayWinner(userAnswer, opAnswer) === true) {
    prompt('Round won');
    myPoints += 1;
  } else if (displayWinner(userAnswer, opAnswer) === false) {
    prompt("It's a TIE!");
  } else {
    prompt(displayWinner(userAnswer, opAnswer));
    computerPoints += 1;
  }

  prompt(`You: ${myPoints} | Opponent: ${computerPoints}`);

  if (myPoints === WINNING_SCORE  || computerPoints === WINNING_SCORE) {
    prompt(matchWinner(myPoints, computerPoints));
    prompt('Would you like to play again? (Y/N)');
    let again = askToPlayAgain();

    if (again[0].toUpperCase() === 'Y') {
      myPoints = 0;
      computerPoints = 0;
    } else {
      break;
    }
  }
}

console.log('_______________________________________');
prompt('Thank you for playing!');
