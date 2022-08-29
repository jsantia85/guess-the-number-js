'use strict';

const secretNum = Math.trunc(Math.random() * 30) + 1
document.querySelector('.number').textContent = secretNum

let score = 30

console.log(typeof score)

document.querySelector('.check').addEventListener('click',
  function() {
    const guess = Number(document.querySelector('.guess').value)

    if (!guess) {
      document.querySelector('.message').textContent = 'Please Enter a Number...'
    } else if (guess === secretNum) {
      document.querySelector('.message').textContent = "🙌🏽 Correct Number!"
      document.querySelector("body").style.backgroundColor = '#60b347'
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