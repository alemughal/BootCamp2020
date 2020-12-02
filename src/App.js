import React, {useState} from 'react';
import Parent from './Parent';
import './App.css';
import countercontext from './countercontext';

function App() {
  const counterState = useState(0)
  return (
    <countercontext.Provider value={counterState}>
      <div>
        <Parent />
      </div>
    </countercontext.Provider>
  )
}

export default App;
