const menu = document.querySelector('#menu');
const close = document.querySelector('#close');
const hamburger = document.querySelector('#hamburger');
const body = document.querySelector('body');

hamburger.addEventListener('click', () => {
    hamburger.classList.toggle('hidden');
    menu.classList.toggle('hidden');
    body.classList.toggle('bg-gray-400');
});

close.addEventListener('click', () => {
    hamburger.classList.toggle('hidden');
    menu.classList.toggle('hidden');
    body.classList.toggle('bg-gray-400');
});
