import React, { Component } from 'react';

import logo from './logo.svg';
import './App.css';

import CalculatorButtonsList from './data/buttons';

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
    let buttons = CalculatorButtonsList.map( button => {

      if (button.type === 'operator') {
        return (
          <div
            key={button.id}
            className={`btn btn--operator`}
            onClick={ () => this.addOperator(button.value)}
          >
            {button.label}
          </div>
        );
      } else if (button.type === 'decimal') {
        return (
          <div
            key={button.id}
            className={`btn btn--decimal`}
            onClick={ () => this.addDecimal()}
          >
            {button.label}
          </div>
        );
      } else if (button.type === 'sign') {
        return (
          <div
            key={button.id}
            className={`btn btn--sign`}
            onClick={ () => this.toggleSign()}
          >
            {button.label}
          </div>
        );
      } else if (button.type === 'calculate') {
        return (
          <div
            key={button.id}
            className={`btn btn--calculate`}
            onClick={ () => this.calculate()}
          >
            {button.label}
          </div>
        );
      } else if (button.type === 'clear') {
        return (
          <div
            key={button.id}
            className={`btn btn--clear`}
            onClick={ () => this.clear()}
          >
            {button.label}
          </div>
        );
      }

      return (
        <div
          key={button.id}
          className={`btn btn--number`}
          onClick={ () => this.addNumber(button.value)}
        >
          {button.label}
        </div>
      );
    });

    return (
      <div className="App">
        <main>
            <div className="calculator">
              <section className="display">{display}</section>
              <section className="number-pad">
                  {buttons}
              </section>
          </div>
        </main>
      </div>
    );
  }
}

export default App;
