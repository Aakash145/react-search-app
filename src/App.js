import { useState } from 'react'

import './App.css'
import { SearchContainer } from './components/SearchContainer'
import { SuggestionsList } from './components/SuggestionsList'

function App() {

  const [results, setResults] = useState([]);

  return (
    <div className="App">
      <div className='search-bar-container'>
        <div id='search-title'>The Curious Search!</div>
        <SearchContainer setResults={setResults}/>
        <SuggestionsList results={results} />
      </div>
    </div>
  );
}

export default App;
