'use strict';

/*
console.log(document.querySelector('.message').textContent);
document.querySelector('.message').textContent = '🎉 Correct Number!';
console.log(document.querySelector('.message').textContent);

document.querySelector('.number').textContent = 13;
document.querySelector('.score').textContent = 10; 
document.querySelector('.guess').value = 23;
console.log(document.querySelector('.guess').value);
*/

let secretNumber = Math.trunc(Math.random() * 20) + 1;
let score = 20;
let highScore = 0;

const setTheText = function(node, textContent) {
  document.querySelector(node).textContent = textContent;
};

document.querySelector('.check').addEventListener('click', function () {
  const guess = Number(document.querySelector('.guess').value);
  console.log(guess, typeof guess);

  // When there is no input
  if (!guess) {
    // document.querySelector('.message').textContent = '⛔ No number!';
    setTheText('.message', '⛔ No number!');

    // When player wins
  } else if (guess === secretNumber) {
    // document.querySelector('.message').textContent = '🎉 Correct Number!';
    // document.querySelector('.number').textContent = secretNumber;
    setTheText('.message', '🎉 Correct Number!');
    setTheText('.number', secretNumber);

    document.querySelector('body').style.backgroundColor = '#60b347';
    document.querySelector('.number').style.width = '30rem';

    if (highScore < score) {
      highScore = score;
      // document.querySelector('.highscore').textContent = highScore;
      setTheText('.highscore', highScore);

    }

    // When guess is wrong
  } else if (guess !== secretNumber) {
    if (score > 1) {
      // document.querySelector('.message').textContent =
      //   guess > secretNumber ? '📈 Too high!' : '📉 Too low!';
      // document.querySelector('.score').textContent = --score;
      setTheText('.message', guess > secretNumber ? '📈 Too high!' : '📉 Too low!');
      setTheText('.score', --score);
    } else {
      score = 0;
      // document.querySelector('.score').textContent = score;
      // document.querySelector('.message').textContent = '💥 You lost the game!';
      setTheText('.score', score);
      setTheText('.message', '💥 You lost the game!');
    }
  }
});

// Function for Again button
document.querySelector('.again').addEventListener('click', function () {
  secretNumber = Math.trunc(Math.random() * 20) + 1;
  score = 20;
  // document.querySelector('.score').textContent = score;
  // document.querySelector('.message').textContent = 'Start guessing...';
  setTheText('.score', score);
  setTheText('.message', 'Start guessing...');

  document.querySelector('body').removeAttribute('style');
  document.querySelector('.number').removeAttribute('style');
  // document.querySelector('.number').textContent = '?';
  setTheText('.number', '?');
  document.querySelector('.guess').value = '';
});
