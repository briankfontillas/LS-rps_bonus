const readline = require('readline-sync');
const VALID_INPUTS = ['Rock', 'Paper', 'Scizzors'];

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

  if (myAnswer === computerAnswer) {
    prompt("It's a TIE!");
  }

  if (VALID_INPUTS[myAnswer] === 'Rock') {
    if (VALID_INPUTS[computerAnswer] === 'Paper') {
      prompt('YOU LOSE');
    }
    else if (VALID_INPUTS[computerAnswer] === 'Scizzors') {
      prompt('YOU WIN');
    }
  }

  if (VALID_INPUTS[myAnswer] === 'Paper') {
    if (VALID_INPUTS[computerAnswer] === 'Scizzors') {
      prompt('YOU LOSE');
    }
    else if (VALID_INPUTS[computerAnswer] === 'Rock') {
      prompt('YOU WIN');
    }
  }

  if (VALID_INPUTS[myAnswer] === 'Scizzors') {
    if (VALID_INPUTS[computerAnswer] === 'Rock') {
      prompt('YOU LOSE');
    }
    else if (VALID_INPUTS[computerAnswer] === 'Paper') {
      prompt('YOU WIN');
    }
  }

  prompt('Would you like to play again? (Y/N)');
  let playAgain = readline.question();

  if (playAgain[0].toUpperCase() === 'N') {
    break;
  }
}


prompt('Thank you for playing!');
