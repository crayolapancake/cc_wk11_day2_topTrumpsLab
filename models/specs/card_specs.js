const assert = require('assert');
const Card = require('../card.js');

describe ('Card', function (){

  let card1;
  let card2;

  beforeEach ( function() {

    let card1Spec = {
        name: "Superman",
        intelligence: 6,
        strength: 9,
        agility: 7
      };

    card1 = new Card(card1Spec);

    let card2Spec = {
      name: 'Scarlet Witch',
      intelligence: 7,
      strength: 10,
      agility: 5
      };

    card2 = new Card(card2Spec);

    let card3Spec = {
      name: 'Black Widow',
      intelligence: 8,
      strength: 6,
      agility: 9
      };

    card3 = new Card(card3Spec);

    let card4Spec = {
      name: 'The Flash',
      intelligence: 7,
      strength: 4,
      agility: 10
      };

    card4 = new Card(card4Spec);

    let card5Spec = {
      name: 'Wonder Woman',
      intelligence: 8,
      strength: 7,
      agility: 5
      };

    card5 = new Card(card5Spec);

    let card6Spec = {
      name: 'Batman',
      intelligence: 10,
      strength: 5,
      agility: 6
      };

    card6 = new Card(card6Spec);

  });


  it('should have a name', function() {
    assert.strictEqual('Superman', card1.spec.name)
  });

  it('should have an intelligence', function(){
    assert.strictEqual(10, card6.spec.intelligence)
  });

  it('should have a strength', function(){
    assert.strictEqual(7, card5.spec.strength)
  });

  it('should have an agility', function(){
    assert.strictEqual(9, card3.spec.agility)
  });
})
