'use strict';
/*
console.log(document.querySelector('.message').textContent);
document.querySelector('.score').textContent = 12;
document.querySelector('.number').textContent = 18;
document.querySelector('.guess').value = 33;
console.log(document.querySelector('.guess').value);
*/

let secreteNumber = Math.trunc(Math.random() * 20) + 1;

let score = 20;
let highSocre = 0;
const displayMessage = function (message) {
  document.querySelector('.message').textContent = message;
};
document.querySelector('.check').addEventListener('click', function () {
  const guess = Number(document.querySelector('.guess').value);

  // when there is no input
  if (!guess) {
    // document.querySelector('.message').textContent = '⛔ No number!';
    displayMessage('⛔ No number!');
  }
  //when guess is correct
  else if (guess === secreteNumber) {
    // document.querySelector('.message').textContent = '🏆 Correct number';
    displayMessage('🏆 Correct number');
    document.querySelector('.number').textContent = secreteNumber;
    document.querySelector('body').style.backgroundColor = '#60b347';
    document.querySelector('.number').style.width = '30rem';
    if (score > highSocre) {
      highSocre = score;
      document.querySelector('.highscore').textContent = highSocre;
    }
  }
  //   when the guess is incorrect
  else if (guess !== secreteNumber) {
    if (score > 1) {
      //   document.querySelector('.message').textContent =
      //     guess > secreteNumber ? '📈 Too High' : '📈 Too Low';
      displayMessage(guess > secreteNumber ? '📈 Too High' : '📈 Too Low');
      score--;
      document.querySelector('.score').textContent = score;
    } else {
      //   document.querySelector('.message').textContent = '💥 YOu lost';
      displayMessage('💥 YOu lost');
      document.querySelector('.score').textContent = 0;
    }
  }
  /*
  //   when guess is greater
  else if (guess > secreteNumber) {
    if (score > 1) {
      document.querySelector('.message').textContent = '📈 Too High';
      score--;
      document.querySelector('.score').textContent = score;
    } else {
      document.querySelector('.message').textContent = '💥 YOu lost';
      document.querySelector('.score').textContent = 0;
    }
  }
  //   when guess is small
  else if (guess < secreteNumber) {
    if (score > 1) {
      document.querySelector('.message').textContent = '📈 Too Low';
      score--;
      document.querySelector('.score').textContent = score;
    } else {
      document.querySelector('.message').textContent = '💥 YOu lost the game';
      document.querySelector('.score').textContent = 0;
    }
  }
  */
});

document.querySelector('.again').addEventListener('click', function () {
  score = 20;
  secreteNumber = Math.trunc(Math.random() * 20) + 1;

  //   document.querySelector('.message').textContent = 'Start guessing...';
  displayMessage('Start guessing...');
  document.querySelector('.score').textContent = score;
  document.querySelector('.number').textContent = '?';
  document.querySelector('.guess').value = '';
  document.querySelector('body').style.backgroundColor = '#222';
  document.querySelector('.number').style.width = '15rem';
});
