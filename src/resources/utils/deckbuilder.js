const packs = {
  "basicPack": require('../packs/basic.json'),
  "fantasyPack": require('../packs/fantasy.json'),
}

const deckBuilder = () => {
  const deck = {
    "characters": [],
    "locations": [],
    "items": []
  };
  Object.values(packs).forEach(pack => {
    Object.keys(pack).forEach(list => {
      if(list !== "name")
        deck[list] = pack[list].concat(deck[list]);
    })
  })
  return deck;
}

module.exports = {deckBuilder, packs}