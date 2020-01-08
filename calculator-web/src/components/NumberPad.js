import React, { Component } from 'react';

import { Consumer } from './Context';

import CalculatorButtonsList from '../data/buttons';

class NumberPad extends Component {

    render() {
        return (
            <Consumer>
                { ({actions}) => (
                    <section className="number-pad">
                        {CalculatorButtonsList.map( button => {

                            if (button.type === 'operator') {
                                return (
                                <div
                                    key={button.id}
                                    className={`btn btn--operator`}
                                    onClick={ () => actions.addOperator(button.value)}
                                >
                                    {button.label}
                                </div>
                                );
                            } else if (button.type === 'decimal') {
                                return (
                                <div
                                    key={button.id}
                                    className={`btn btn--decimal`}
                                    onClick={ () => actions.addDecimal()}
                                >
                                    {button.label}
                                </div>
                                );
                            } else if (button.type === 'sign') {
                                return (
                                <div
                                    key={button.id}
                                    className={`btn btn--sign`}
                                    onClick={ () => actions.toggleSign()}
                                >
                                    {button.label}
                                </div>
                                );
                            } else if (button.type === 'calculate') {
                                return (
                                <div
                                    key={button.id}
                                    className={`btn btn--calculate`}
                                    onClick={ () => actions.calculate()}
                                >
                                    {button.label}
                                </div>
                                );
                            } else if (button.type === 'clear') {
                                return (
                                <div
                                    key={button.id}
                                    className={`btn btn--clear`}
                                    onClick={ () => actions.clear()}
                                >
                                    {button.label}
                                </div>
                                );
                            }

                            return (
                                <div
                                key={button.id}
                                className={`btn btn--number`}
                                onClick={ () => actions.addNumber(button.value)}
                                >
                                {button.label}
                                </div>
                            );
                        })}
                    </section>
                )}
            </Consumer>
        );
    }
}

export default NumberPad;