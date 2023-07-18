import React, { useEffect, useState } from 'react';
import './css/main.css';
import Header from './components/header';
import Generator from './components/generator';
import { deckBuilder } from './resources/utils/deckbuilder';
import Menu from './components/menu';
const {version} = require('../package.json');
require('./resources/utils/deckbuilder');

function App() {
  const [ deck, setDeck ] = useState(deckBuilder());

  useEffect(() => {
  }, []);


  return (
    <div className="App">
      <Header version={version}/>
      <Menu />
      <main>
        <Generator array={deck.characters} />
        <Generator array={deck.locations} />
        <Generator array={deck.items} />
      </main>
    </div>
  );
}

export default App;
