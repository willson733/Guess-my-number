'use strict';
/*
console.log(document.querySelector('.message').textContent);
document.querySelector('.score').textContent = 12;
document.querySelector('.number').textContent = 18;
document.querySelector('.guess').value = 33;
console.log(document.querySelector('.guess').value);
*/
document.querySelector('.check').addEventListener('click', function () {
  const guess = Number(document.querySelector('.guess').value);

  if (!guess) {
    document.querySelector('.message').textContent = '⛔ No number!';
  }
});
