import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {

  state = {
    display: '0'
  }

  addDecimal = () => {

  }

  addNumber = (value) => {
    this.setState( prevState => {
      if (prevState.display === '0') {
        return {
          display: value
        }
      }

      return {
        display: prevState.display + value
      }
  });
  }

  addOperator = () => {

  }

  calculate = () => {

  }

  clear = () => {
    this.setState({
      display: '0'
    })
  }

  toggleSign = () => {

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
                  <div className="btn btn--operand-division" onClick={ () => this.addOperator('+')}>÷</div>
                  <div className="btn btn--number-1" onClick={ () => this.addNumber('7')}>7</div>
                  <div className="btn btn--number-2" onClick={ () => this.addNumber('8')}>8</div>
                  <div className="btn btn--number-3" onClick={ () => this.addNumber('9')}>9</div>
                  <div className="btn btn--operand-product" onClick={ () => this.addOperator('*')}>x</div>
                  <div className="btn btn--sign" onClick={ () => this.toggleSign()}>+/-</div>
                  <div className="btn btn--decimal" onClick={ () => this.addDecimal('.')}>.</div>
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
