'use strict';

let modal = document.querySelector('.modal');
let overlay = document.querySelector('.overlay');
let close = document.querySelector('.close-modal');
let content = document.querySelectorAll('.show-modal');

let openModal = function () {
  modal.classList.remove('hidden');
  overlay.classList.remove('hidden');
};

let clostBtn = function () {
  modal.classList.add('hidden');
  overlay.classList.add('hidden');
};

for (let i = 0; i < content.length; i++) {
  content[i].addEventListener('click', openModal);
}

close.addEventListener('click', clostBtn);

overlay.addEventListener('click', clostBtn);

document.addEventListener('keydown', function (e) {
  if (e.key == 'Escape' && !modal.classList.contains('hidden')) {
  }
  clostBtn();
});
