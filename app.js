'use strict';

let secretNum = Math.trunc(Math.random() * 30) + 1

let score = 30

document.querySelector('.check').addEventListener('click',
  function() {
    const guess = Number(document.querySelector('.guess').value)

    if (!guess) {
      document.querySelector('.message').textContent = 'Please Enter a Number...'
    } else if (guess === secretNum) {
      document.querySelector('.message').textContent = "🙌🏽 Correct Number!";
      document.querySelector('.number').textContent = secretNum;
      document.querySelector("body").style.backgroundColor = '#60b347';
      document.querySelector('number').style.width = '30rem'
    } else if (guess < secretNum) {
      if (score > 1) {
        document.querySelector('.message').textContent = '⬇️ Too Low';
        score--
        document.querySelector('.score').textContent = score
      } else {
        document.querySelector('.message').textContent = 'Game Over 😔';
        document.querySelector('.score').textContent = 0
      }
    } else if (guess > secretNum) {
      if (score > 1) {
        document.querySelector('.message').textContent = '⬆️ Too High';
        score--
        document.querySelector('.score').textContent = score
      } else {
        document.querySelector('.message').textContent = 'Game Over 😔';
        document.querySelector('.score').textContent = 0
      }
    }
  })

document.querySelector('.again').addEventListener('click', function() {
  score = 30;
  secretNum = Math.trunc(Math.random() * 30) + 1;
  document.querySelector('.message').textContent = 'Start guessing...';
  document.querySelector('.score').textContent = score;
  document.querySelector('.number').textContent = '?';
  document.querySelector('.guess').textContent = '';
  document.querySelector("body").style.backgroundColor = '#222';
  document.querySelector('number').style.width = '15rem'
})