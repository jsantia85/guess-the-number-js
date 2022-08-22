'use strict';

const secretNum = Math.trunc(Math.random() * 30) + 1
document.querySelector('.number').textContent = secretNum

document.querySelector('.check').addEventListener('click',
  function() {
    const guess = Number(document.querySelector('.guess').value)

    if (!guess) {
      document.querySelector('.message').textContent = 'Please Enter a Number...'
    } else if (guess === secretNum) {
      document.querySelector('.message').textContent = "🙌🏽 Correct Number!"
    }
  })