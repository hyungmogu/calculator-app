import React from 'react';

const CalculatorContext = React.createContext();

export class Provider extends Component {
    state = {
        display: '0',
        currentNumber: '0',
        lock: false
    }

    handleAddDecimal = () => {
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

    handleAddNumber = (value) => {
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

    handleAddOperator = (value) => {
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

    handleCalculate = () => {
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

    handleClear = () => {
        this.setState({
            display: '0',
            currentNumber: '0',
            lock: false
        })
    }

    handleToggleSign = () => {
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
        return (
            <CalculatorContext.Provider
                value={{
                    display: this.state.display,
                    currentNumber: this.state.currentNumber,
                    lock: this.state.lock,
                    action: {
                        addOperator: this.handleAddOperator,
                        addDecimal: this.handleAddDecimal,
                        toggleSign: this.handleToggleSign,
                        calculate: this.handleCalculate,
                        clear: this.handleClear,
                        addNumber: this.handleAddNumber
                    }
                }}
            >
                {this.props.children}
            </CalculatorContext.Provider>
        );
    }
}

export const Consumer = CalculatorContext.Consumer;