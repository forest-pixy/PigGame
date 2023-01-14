'use strict';

const score0Element = document.getElementById(`score--0`);
const score1Element = document.getElementById(`score--1`);
const diceElement = document.querySelector(`.dice`);
const current0Element = document.getElementById(`current--0`);
const current1Element = document.getElementById(`current--1`);
const player0Element = document.querySelector(`.player--0`);
const player1Element = document.querySelector(`.player--1`);

score0Element.textContent = 0;
score1Element.textContent = 0;
diceElement.classList.add(`hidden`);

const totalScors = [0, 0];
let currentScore = 0;
let activePlayer = 0;
let isPlaying = true;

document.querySelector(`.btn--roll`).addEventListener(`click`, function roll() {
if(isPlaying) {
    let diceNumber = Math.trunc(Math.random() * 6) + 1;
    diceElement.classList.remove(`hidden`);
    diceElement.src = `dice${diceNumber}.png`;
    if(diceNumber !== 1){
        currentScore += diceNumber;
        document.getElementById(`current--${activePlayer}`).textContent = currentScore;
    } else {
        currentScore = 0;
        document.getElementById(`current--${activePlayer}`).textContent = 0;
        activePlayer = activePlayer === 0 ? 1 : 0;
        player0Element.classList.toggle(`player--active`);
        player1Element.classList.toggle(`player--active`);
    }
}
})

document.querySelector(`.btn--hold`).addEventListener(`click`, function hold() {
if(isPlaying) {
    totalScors[activePlayer] += currentScore;
    document.getElementById(`score--${activePlayer}`).textContent = totalScors[activePlayer];
    if(totalScors[activePlayer] >= 100) {
        isPlaying = false;
        document.querySelector(`.player--${activePlayer}`).classList.add(`player--winner`);
        document.querySelector(`.player--${activePlayer}`).classList.remove(`player--active`);
        diceElement.classList.add(`hidden`);
    } else {
        currentScore = 0;
        document.getElementById(`current--${activePlayer}`).textContent = 0;
        activePlayer = activePlayer === 0 ? 1 : 0;
        player0Element.classList.toggle(`player--active`);
        player1Element.classList.toggle(`player--active`);
    }
}
})  

document.querySelector(`.btn--new`).addEventListener(`click`, function newPlay(){
    score0Element.textContent = 0;
    score1Element.textContent = 0;
    current0Element.textContent = 0;
    current1Element.textContent = 0;
    player0Element.classList.remove(`player--winner`);
    player1Element.classList.remove(`player--winner`);
    player0Element.classList.remove(`player--active`);
    player1Element.classList.remove(`player--active`);
    player0Element.classList.add(`player--active`);
    totalScors = [0, 0];
    currentScore = 0;
    activePlayer = 0;
    isPlaying = true;
})