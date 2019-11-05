// state
let count = 0;

// cached elements
let countHTML = document.getElementById('count');
let input = document.querySelector('input');
let add = document.getElementById('plus');
let subtract = document.getElementById('minus');
let header = document.querySelector('header');


// event listeners
add.addEventListener('click', addition)
subtract.addEventListener('click', subtraction)

// functions
countHTML.innerHTML = count;

function addition () {
    count += parseFloat(input.value);
    countHTML.textContent = count;
    return ((Math.sign(count) === -1) ? header.classList.add('red') : header.classList.remove('red'));
}

function subtraction () {
    count -= parseFloat(input.value);
    countHTML.textContent = count;
    return ((Math.sign(count) === -1) ? header.classList.add('red') : header.classList.remove('red'));
}