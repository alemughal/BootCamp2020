import React, { Fragment, useState } from 'react';
import Message from './Message';
import './App.css';


function App () {
  let [count, setCount] = useState(0)
  return (
    <div className="main">
      <Message value= {count}/>
      <br/>
      <button onClick={ () => setCount (++count) } className="up">Increment</button>
      <button onClick={ () => setCount (--count) } className="down">Decrement</button>
      <button className="update" >Update</button>
    </div>
  )
}

export default App;