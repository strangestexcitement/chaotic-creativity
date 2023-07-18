import './css/main.css';
import Header from './components/header';
const {version} = require('../package.json');


function App() {
  return (
    <div className="App">
      <Header version={version}/>
    </div>
  );
}

export default App;
