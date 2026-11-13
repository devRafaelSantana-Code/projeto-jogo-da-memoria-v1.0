"use strict";

const CLASSES = {
   FRONT: "card-front",
   BACK: "card-back",
   CARD: "card",
   ICON: "icon",
   FLIP: "flip",
};

const gameBoard = document.querySelector("#gameBoard");
const gameOverLayer = document.querySelector("#gameOver");
const restartButton = document.querySelector("#restart");

function startGame() {
   const cards = game.createCardsFromTechs();
   initializeCards(cards);
}

function initializeCards(cards) {
   gameBoard.innerHTML = "";

   cards.forEach((card) => {
      const cardElement = document.createElement("div");
      cardElement.id = card.id;
      cardElement.classList.add(CLASSES.CARD);
      cardElement.dataset.icon = card.icon;

      createCardContent(card, cardElement);

      cardElement.addEventListener("click", flipCard);
      gameBoard.appendChild(cardElement);
   });
}

function createCardContent(card, cardElement) {
   createCardFace(CLASSES.FRONT, card, cardElement);
   createCardFace(CLASSES.BACK, card, cardElement);
}

function createCardFace(face, card, element) {
   const cardElementFace = document.createElement("div");
   cardElementFace.classList.add(face);

   if (face === CLASSES.FRONT) {
      const iconElement = document.createElement("img");
      iconElement.classList.add(CLASSES.ICON);
      iconElement.src = `./assets/images/${card.icon}.png`;
      iconElement.alt = `Ícone ${card.icon}`;
      cardElementFace.appendChild(iconElement);
   } else {
      cardElementFace.textContent = "</>";
   }

   element.appendChild(cardElementFace);
}

function flipCard() {
   if (!game.setCard(this.id)) return;

   this.classList.add(CLASSES.FLIP);

   if (!game.secondCard) return;

   if (game.checkMatch()) {
      game.clearCards();

      if (game.checkGameOver() && gameOverLayer) {
         gameOverLayer.style.display = "flex";
      }
   } else {
      const firstCardView = document.getElementById(game.firstCard.id);
      const secondCardView = document.getElementById(game.secondCard.id);

      setTimeout(() => {
         firstCardView?.classList.remove(CLASSES.FLIP);
         secondCardView?.classList.remove(CLASSES.FLIP);
         game.unflipCards();
      }, 1000);
   }
}

function restart() {
   game.clearCards();
   if (gameOverLayer) {
      gameOverLayer.style.display = "none";
   }
   startGame();
}

restartButton?.addEventListener("click", restart);
startGame();
