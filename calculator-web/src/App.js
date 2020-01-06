import React from 'react';
import logo from './logo.svg';
import './App.css';

function App() {

  return (
    <div className="App">
      <main>
          <div class="calculator">
            <section class="display">0</section>
            <section class="number-pad">
                <div class="btn btn--clear" onclick="clear()">Clear</div>
                <div class="btn btn--operand-plus" onclick="addOperator('+')">+</div>
                <div class="btn btn--number-7" onclick="addNumber('7')">7</div>
                <div class="btn btn--number-8" onclick="addNumber('8')">8</div>
                <div class="btn btn--number-9" onclick="addNumber('9')">9</div>
                <div class="btn btn--operand-minus" onclick="addOperator('-')">-</div>
                <div class="btn btn--number-4" onclick="addNumber('4')">4</div>
                <div class="btn btn--number-5" onclick="addNumber('5')">5</div>
                <div class="btn btn--number-6" onclick="addNumber('6')">6</div>
                <div class="btn btn--operand-division" onclick="addOperator('+')">÷</div>
                <div class="btn btn--number-1" onclick="addNumber('7')">7</div>
                <div class="btn btn--number-2" onclick="addNumber('8')">8</div>
                <div class="btn btn--number-3" onclick="addNumber('9')">9</div>
                <div class="btn btn--operand-product" onclick="addOperator('*')">x</div>
                <div class="btn btn--sign" onclick="toggleSign()">+/-</div>
                <div class="btn btn--decimal" onclick="addDecimal('.')">.</div>
                <div class="btn btn--number-0" onclick="addNumber('0')">0</div>
                <div class="btn btn--operand-equal" onclick="calculate()">=</div>
            </section>
        </div>
      </main>
    </div>
  );
}

export default App;
