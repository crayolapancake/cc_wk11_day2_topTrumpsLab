const assert = require('assert');
const Game = require('../game.js');
const Player = require('../player.js');
const Card = require('../card.js');

  // let game1;
  beforeEach( function() {

    player1 = new Player('Aileen');
    player2 = new Player('Jemma');

    card1 = new Card ({name: "Superman",
    intelligence: 6,
    strength: 9,
    agility: 7})

    card2 = new Card ({name: 'Scarlet Witch',
    intelligence: 7,
    strength: 10,
    agility: 5})

    let deck = [card1, card2]
    game1 = new Game(player1, player2, deck);
  });

describe ('Game', function(){

  it ('should have card2 in hand', function(){
    game1.dealCardsToPlayer(player1);
    const actual = player1.hand;
    assert.deepStrictEqual(actual, [card2]);
  });

});
