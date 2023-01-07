import React, { useState } from 'react';
import './App.css';
import Counter from './Counter';

const App = () => {

  const text = useState('Counter App')

  return (
    <div className="App">
      <header className="App-header">
        <h1 className='App-Title'>{text}</h1>
      </header>
      <Counter initValue={0} />
    </div>
  );
}

export default App;
