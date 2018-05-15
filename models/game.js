const Player = require('./player');
const Card = require('./card');

  const Game = function(player1, player2, deck){
    this.player1 = player1;
    this.player2 = player2;
    this.deck = deck;
  }

  Game.prototype.dealCardsToPlayer = function(player){
    player.addCardToHand(this.deck.pop());
  };

module.exports = Game;
