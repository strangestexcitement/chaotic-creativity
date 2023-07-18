import React, { useEffect, useState } from 'react';
import './css/main.css';
import Header from './components/header';
import Generator from './components/generator';
import { deckBuilder } from './resources/utils/deckbuilder';
const {version} = require('../package.json');
require('./resources/utils/deckbuilder')




function App() {
  let deck = deckBuilder();

  return (
    <div className="App">
      <Header version={version}/>
      <main>
        <Generator array={deck.characters} />
        <Generator array={deck.locations} />
        <Generator array={deck.items} />
      </main>
    </div>
  );
}

export default App;
