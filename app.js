'use strict';

let secretNum = Math.trunc(Math.random() * 30) + 1;
let score = 30;
let highscore = 0;

const displayMessage = function(message) {
  document.querySelector('.message').textContent = message;
}

document.querySelector('.check').addEventListener('click',
  function() {
    const guess = Number(document.querySelector('.guess').value)

    if (!guess) {
      displayMessage('Please Enter a Number...');
    } else if (guess === secretNum) {
      displayMessage("🙌🏽 Correct Number!")
      document.querySelector('.number').textContent = secretNum;

      document.querySelector("body").style.backgroundColor = '#60b347';
      document.querySelector('.number').style.width = '30rem'

      if (score > highscore) {
        highscore = score;
        document.querySelector('.highscore').textContent = highscore;
      }
    } else if (guess !== secretNum) {
      if (score > 1) {
        displayMessage(guess > secretNum ? '⬆️ Too High' : '⬇️ Too Low');
        score--;
        document.querySelector('.score').textContent = score;
      } else {
        displayMessage('Game Over 😔');
        document.querySelector('.score').textContent = 0;
      }
    }
  })

document.querySelector('.again').addEventListener('click', function() {
  score = 30;
  secretNum = Math.trunc(Math.random() * 30) + 1;
  displayMessage('Start guessing...');
  document.querySelector('.score').textContent = score;
  document.querySelector('.number').textContent = '?';
  document.querySelector('.guess').value = ' ';
  document.querySelector("body").style.backgroundColor = '#222';
  document.querySelector('.number').style.width = '15rem'
})