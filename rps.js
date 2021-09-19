const readline = require('readline-sync');
const VALID_INPUTS = ['Rock', 'Paper', 'Scissors', 'Lizard', 'Spock'];
let myPoints = 0;
let computerPoints = 0;

function matchWinner(myScore, opScore) {
  return myScore > opScore ? 'You win the match!' : 'You lost the match.';
}

function prompt(msg) {
  console.log(`=> ${msg}`);
}

function invalidNumber(number) {
  return number.trimStart() === '' || Number.isNaN(number);
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

prompt('Welcome to Rock, Paper, Scizzors, Lizard, Spock (Best outta 5)!');

while (myPoints < 3 || computerPoints < 3) {
  console.log('_______________________________________');
  let opAnswer = Math.floor(Math.random() * 3);

  prompt('Please select from the following:');
  console.log('1.) Rock\n2.) Paper\n3.) Scissors\n4.) Lizard\n5.) Spock\n');
  let userAnswer = readline.question();

  while (invalidNumber(userAnswer) || !['1', '2', '3', '4', '5'].includes(userAnswer)) {
    prompt(`${userAnswer} is invalid. Please try again`);
    userAnswer = readline.question();
  }

  userAnswer = Number(userAnswer) - 1;

  prompt(`Your choice: ${VALID_INPUTS[userAnswer]}`);
  prompt(`Opponent choice: ${VALID_INPUTS[opAnswer]}`);

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

  if (myPoints === 3  || computerPoints === 3) {
    prompt(matchWinner(myPoints, computerPoints));
    prompt('Would you like to play again? (Y/N)');
    let again = readline.question().toUpperCase();
    while (again[0].toUpperCase() !== 'Y' && again[0].toUpperCase() !== 'N') {
      console.log(again[0].toUpperCase());
      prompt(`${again} is an invalid input. Please input Y or N`);
      again = readline.question().toUpperCase();
    }

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
