import React, { Component } from 'react';

import CalculatorButtonsList from '../data/buttons';

class NumberPad extends Component {

    render() {
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
            <section className="number-pad">
                {this.buttons}
            </section>
        );
    }
}

export default NumberPad;