"use strict";

const game = {
   lockMode: false,
   firstCard: null,
   secondCard: null,
   cards: [],

   techs: [
      "bootstrap",
      "css",
      "electron",
      "firebase",
      "html",
      "javascript",
      "jquery",
      "mongo",
      "node",
      "react",
   ],

   setCard(id) {
      if (this.lockMode) return false;

      const card = this.cards.find((item) => item.id === id);

      if (!card || card.flipped) return false;

      if (!this.firstCard) {
         this.firstCard = card;
         card.flipped = true;
         return true;
      }

      this.secondCard = card;
      card.flipped = true;
      this.lockMode = true;
      return true;
   },

   checkMatch() {
      if (!this.firstCard || !this.secondCard) return false;
      return this.firstCard.icon === this.secondCard.icon;
   },

   clearCards() {
      this.firstCard = null;
      this.secondCard = null;
      this.lockMode = false;
   },

   unflipCards() {
      if (this.firstCard) this.firstCard.flipped = false;
      if (this.secondCard) this.secondCard.flipped = false;
      this.clearCards();
   },

   checkGameOver() {
      return this.cards.every((card) => card.flipped);
   },

   createCardsFromTechs() {
      this.cards = this.techs.flatMap((tech) => this.createPairFromTech(tech));
      this.shuffleCards();
      return this.cards;
   },

   createPairFromTech(tech) {
      const randomId = this.createIdWithTech(tech);

      return [
         { id: `${randomId}_1`, icon: tech, flipped: false },
         { id: `${randomId}_2`, icon: tech, flipped: false },
      ];
   },

   createIdWithTech(tech) {
      return `${tech}_${Math.floor(Math.random() * 1000)}`;
   },

   shuffleCards() {
      let currentIndex = this.cards.length;

      while (currentIndex !== 0) {
         const randomIndex = Math.floor(Math.random() * currentIndex);
         currentIndex--;

         [this.cards[randomIndex], this.cards[currentIndex]] = [
            this.cards[currentIndex],
            this.cards[randomIndex],
         ];
      }
   },
};
