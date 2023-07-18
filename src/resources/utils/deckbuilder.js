const decks = require('../decks/basic.json');
let characterDeck = new Array();
const deck = {};

const deckBuilder = () => {
  deck.characters = decks.characters;
  deck.locations = decks.locations;
  deck.items = decks.items;
  return deck;
}

module.exports = {deckBuilder}