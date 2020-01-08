import React from 'react';

import './App.css';

import Display from './components/Display';
import NumberPad from './components/NumberPad';

const App = ({display}) => (
  <div className="App">
    <main>
        <div className="calculator">
          <Display/>
          <NumberPad/>
      </div>
    </main>
  </div>
);


export default App;
