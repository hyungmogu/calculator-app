import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {

  state = {
    display: '0'
  }

  render() {
    let display = this.state.display;

    return (
      <div className="App">
        <main>
            <div className="calculator">
              <section className="display">{display}</section>
              <section className="number-pad">
                  <div className="btn btn--clear" onClick="clear()">Clear</div>
                  <div className="btn btn--operand-plus" onClick="addOperator('+')">+</div>
                  <div className="btn btn--number-7" onClick="addNumber('7')">7</div>
                  <div className="btn btn--number-8" onClick="addNumber('8')">8</div>
                  <div className="btn btn--number-9" onClick="addNumber('9')">9</div>
                  <div className="btn btn--operand-minus" onClick="addOperator('-')">-</div>
                  <div className="btn btn--number-4" onClick="addNumber('4')">4</div>
                  <div className="btn btn--number-5" onClick="addNumber('5')">5</div>
                  <div className="btn btn--number-6" onClick="addNumber('6')">6</div>
                  <div className="btn btn--operand-division" onClick="addOperator('+')">÷</div>
                  <div className="btn btn--number-1" onClick="addNumber('7')">7</div>
                  <div className="btn btn--number-2" onClick="addNumber('8')">8</div>
                  <div className="btn btn--number-3" onClick="addNumber('9')">9</div>
                  <div className="btn btn--operand-product" onClick="addOperator('*')">x</div>
                  <div className="btn btn--sign" onClick="toggleSign()">+/-</div>
                  <div className="btn btn--decimal" onClick="addDecimal('.')">.</div>
                  <div className="btn btn--number-0" onClick="addNumber('0')">0</div>
                  <div className="btn btn--operand-equal" onClick="calculate()">=</div>
              </section>
          </div>
        </main>
      </div>
    );
  }
}

export default App;
