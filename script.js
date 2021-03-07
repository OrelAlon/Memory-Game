//
////set element

const set = (e) => document.querySelector(e);
const setAll = (e) => document.querySelectorAll(e);
const newEl = (e) => document.createElement(e);
//
const eazyGame = 12;
const cards = setAll('.card');
const resetBtn = set('#resetBtn');
const openCard = set('.openCard');
const cardContainer = set('.cardContainer');

let flipedCard = false;
let firstCard;
let secondCard;
let lockBord = false;
////click card function
cards.forEach((card) => card.addEventListener('click', flipCard));
resetBtn.addEventListener('click', shuffle);
// resetBtn.addEventListener('click', resetGame);
function flipCard() {
  if (lockBord) return;
  if (this == firstCard) return;
  this.classList.add('flip');

  if (!flipedCard) {
    flipedCard = true;
    firstCard = this;
  } else {
    flipedCard = false;
    secondCard = this;
    if (firstCard.dataset.framework === secondCard.dataset.framework) {
      usedCard();
    } else {
      unFlipCard();
    }
  }
}
function usedCard() {
  firstCard.addEventListener('click', flipCard);
  secondCard.addEventListener('click', flipCard);
}
function unFlipCard() {
  lockBord = true;
  setTimeout(() => {
    firstCard.classList.remove('flip');
    secondCard.classList.remove('flip');
    lockBord = false;
  }, 1000);
}
function shuffle() {
  cards.forEach((card) => {
    let randomPos = Math.floor(Math.random() * 12);
    card.style.order = randomPos;
  });
}
// function resetGame() {
//   createGame();
// }

// function shuffle(array) {
//   let currentIndex = array.length;
//   let temporaryValue = 0;
//   let randomIndex = 0;

//   // While there remain elements to shuffle...
//   while (0 !== currentIndex) {
//     // Pick a remaining element...
//     randomIndex = Math.floor(Math.random() * currentIndex);
//     currentIndex -= 1;

//     // And swap it with the current element.
//     temporaryValue = array[currentIndex];
//     array[currentIndex] = array[randomIndex];
//     array[randomIndex] = temporaryValue;
//     console.log('suff');
//   }

//   return array;
// }
// shuffle([1, 2, 3, 4, 5, 56, 6, 77, 88, 99, 7, 66]);
