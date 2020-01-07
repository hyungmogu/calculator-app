import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {

  state = {
    display: '0',
    currentNumber: '0'
  }

  addDecimal = () => {
    let decimal = '.';

    this.setState( prevState => {
      if (prevState.lock) {
        return null;
      }

      if (prevState.currentNumber.includes(decimal)) {
        return null;
      }

      if (prevState.display[prevState.display.length - 1].trim() === '') {
        return {
          display: prevState.display + '0' + decimal,
          currentNumber: prevState.currentNumber + decimal
        }
      }

      return {
        display: prevState.display + decimal,
        currentNumber: prevState.currentNumber + decimal
      }
    });
  }

  addNumber = (value) => {
    this.setState( prevState => {

      if (prevState.lock) {
        return null;
      }

      if (prevState.display === '0') {
        return {
          display: value,
          currentNumber: value
        }
      }

      return {
        display: prevState.display + value,
        currentNumber: prevState.currentNumber + value
      }
    });
  }

  addOperator = (value) => {
    this.setState( prevState => {
      let secondLastDigit = prevState.display[prevState.display.length - 2];
      let operators = ['+', '-', '/', '*'];

      if (prevState.lock) {
        return null;
      }

      if (operators.includes(secondLastDigit)) {
        return {
          display: `${prevState.display.slice(0, -3)} ${value} `,
          currentNumber: '0'
        }
      }

      return {
        display: `${prevState.display} ${value} `,
        currentNumber: '0'
      }
    });
  }

  calculate = () => {
    this.setState( prevState => {
      let newNumber;

      if (prevState.lock) {
        return null;
      }

      try {
        newNumber = `${eval(prevState.display)}`;
      } catch (Error) {
        return {
          display: 'Error',
          lock: true
        }
      }

      if (newNumber === 'Infinity') {
        return {
          display: newNumber,
          lock: true
        }
      }

      return {
        display: newNumber,
        currentNumber: newNumber
      }
    });
  }

  clear = () => {
    this.setState({
      display: '0',
      currentNumber: '0',
      lock: false
    })
  }

  toggleSign = () => {
    this.setState( prevState => {

      if (prevState.lock) {
        return null;
      }

      if (prevState.currentNumber === '0') {
        return null;
      }

      let newCurrentNumber = `${-1 * parseFloat(prevState.currentNumber)}`;

      return {
        display: prevState.display.replace(/([^\s]+)$/i, newCurrentNumber),
        currentNumber: newCurrentNumber
      }
    });
  }

  render() {
    let display = this.state.display;

    return (
      <div className="App">
        <main>
            <div className="calculator">
              <section className="display">{display}</section>
              <section className="number-pad">
                  <div className="btn btn--clear" onClick={ () => this.clear()}>Clear</div>
                  <div className="btn btn--operand-plus" onClick={ () => this.addOperator('+')}>+</div>
                  <div className="btn btn--number-7" onClick={ () => this.addNumber('7')}>7</div>
                  <div className="btn btn--number-8" onClick={ () => this.addNumber('8')}>8</div>
                  <div className="btn btn--number-9" onClick={ () => this.addNumber('9')}>9</div>
                  <div className="btn btn--operand-minus" onClick={ () => this.addOperator('-')}>-</div>
                  <div className="btn btn--number-4" onClick={ () => this.addNumber('4')}>4</div>
                  <div className="btn btn--number-5" onClick={ () => this.addNumber('5')}>5</div>
                  <div className="btn btn--number-6" onClick={ () => this.addNumber('6')}>6</div>
                  <div className="btn btn--operand-division" onClick={ () => this.addOperator('/')}>÷</div>
                  <div className="btn btn--number-1" onClick={ () => this.addNumber('1')}>1</div>
                  <div className="btn btn--number-2" onClick={ () => this.addNumber('2')}>2</div>
                  <div className="btn btn--number-3" onClick={ () => this.addNumber('3')}>3</div>
                  <div className="btn btn--operand-product" onClick={ () => this.addOperator('*')}>x</div>
                  <div className="btn btn--sign" onClick={ () => this.toggleSign()}>+/-</div>
                  <div className="btn btn--decimal" onClick={ () => this.addDecimal()}>.</div>
                  <div className="btn btn--number-0" onClick={ () => this.addNumber('0')}>0</div>
                  <div className="btn btn--operand-equal" onClick={ () => this.calculate()}>=</div>
              </section>
          </div>
        </main>
      </div>
    );
  }
}

export default App;
