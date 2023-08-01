import React, { useEffect, useState } from 'react';
import './css/main.css';
import Header from './components/header';
import Generator from './components/generator';
import { deckBuilder } from './resources/utils/deckbuilder';
import Menu from './components/menu';
import Button from './components/button';
const {version} = require('../package.json');
require('./resources/utils/deckbuilder');

function App() {
  const [ deck, setDeck ] = useState(deckBuilder());
  const [selectedItems, setSelectedItems] = useState({
    "character": "bear",
    "location": "house",
    "item": "boat"
  });

  const reroll = () => {
    let selItems = {...selectedItems};
    selItems.character = getRandomElement(deck.characters);
    selItems.location = getRandomElement(deck.locations);
    selItems.item = getRandomElement(deck.items);
    setSelectedItems(selItems);
  }

  const getRandomElement = (array) => {
    return array[Math.floor(Math.random() * array.length)];
  }

  useEffect(() => {
  }, []);


  return (
    <div className="App">
      <Header version={version}/>
      <Menu />
      <main>
        <Generator selectedItem={selectedItems.character}/>
        <Generator selectedItem={selectedItems.location} />
        <Generator selectedItem={selectedItems.item}/>
        <Button text="Reroll" onClick={() => {reroll()}}/>
      </main>
    </div>
  );
}

export default App;
