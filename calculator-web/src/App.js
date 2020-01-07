import React from 'react';

import './App.css';

import NumberPad from './components/NumberPad';

const App = ({display}) => (
  <div className="App">
    <main>
        <div className="calculator">
          <section className="display">{display}</section>
          <NumberPad/>
      </div>
    </main>
  </div>
);


export default App;
