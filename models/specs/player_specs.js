const assert = require('assert');
const Player = require('../player.js');
const Card = require('../card.js');

beforeEach ( function() {

  player1 = new Player('Aileen');
  player2 = new Player('Jemma');
  card1 = new Card ({name: "Superman",
  intelligence: 6,
  strength: 9,
  agility: 7})
})

describe ('Player', function (){

  it ('should start with empty hand', function(){
    const actual = player1.hand;
    assert.deepStrictEqual(actual, []);
  });

  it ('should be able to add card to hand', function(){
    player2.addCardToHand(card1);
    const actual = player2.hand.length;
    assert.strictEqual(actual, 1);
  });

  it('should have a name', function(){
    const actual = player1.name;
    assert.strictEqual(actual, 'Aileen');
  });

});
