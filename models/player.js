const Player = function(name){
  this.name = name;
  this.hand = [];
}

Player.prototype.addCardToHand = function(addCard){
  this.hand.push(addCard);
};

module.exports = Player;
