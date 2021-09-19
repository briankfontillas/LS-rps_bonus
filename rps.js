const readline = require('readline-sync');
const VALID_INPUTS = ['Rock', 'Paper', 'Scizzors'];
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

while (true) {
  let computerAnswer = Math.floor(Math.random() * 3);
  prompt('Welcome to Rock, Paper, Scizzors!');
  console.log('_______________________________________');

  prompt('Please select from the following:');
  console.log('1.) Rock\n2.) Paper\n3.) Scizzors\n');
  let myAnswer = readline.question();

  while (invalidNumber(myAnswer) || !['1', '2', '3'].includes(myAnswer)) {
    prompt(`${myAnswer} is invalid. Please try again`);
    myAnswer = readline.question();
  }

  myAnswer = Number(myAnswer) - 1;

  prompt(`Your choice: ${VALID_INPUTS[myAnswer]}`);
  prompt(`Opponent choice: ${VALID_INPUTS[computerAnswer]}`);

  if ((VALID_INPUTS[myAnswer] === 'Rock' && VALID_INPUTS[computerAnswer] === 'Scizzors') ||
      (VALID_INPUTS[myAnswer] === 'Paper' && VALID_INPUTS[computerAnswer] === 'Rock') ||
      (VALID_INPUTS[myAnswer] === 'Scizzors' && VALID_INPUTS[computerAnswer] === 'Paper')) {
    prompt('You are the WINNER!');
    myPoints += 1;
  } else if ((VALID_INPUTS[myAnswer] === 'Rock' && VALID_INPUTS[computerAnswer] === 'Paper') ||
            (VALID_INPUTS[myAnswer] === 'Paper' && VALID_INPUTS[computerAnswer] === 'Scizzors') ||
            (VALID_INPUTS[myAnswer] === 'Scizzors' && VALID_INPUTS[computerAnswer] === 'Rock')) {
    prompt('You Lose!');
    computerPoints += 1;
  } else {
    prompt('It is a Tie!');
  }


  prompt('Would you like to play again? (Y/N)');
  let playAgain = readline.question().toUpperCase();

  while (playAgain[0] !== 'Y' && playAgain[0] !== 'N') {
    prompt('Choice invalid. Please input either Y or N:');
    playAgain = readline.question().toUpperCase();
  }

  if (playAgain[0].toUpperCase() === 'N') {
    break;
  }
}

console.log('_______________________________________');
prompt(`Your score: ${myPoints}`);
prompt(`Computer score ${computerPoints}`);
prompt(matchWinner(myPoints, computerPoints));
prompt('Thank you for playing!');
