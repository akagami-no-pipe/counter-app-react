import { useState } from 'react';
import PropTypes from 'prop-types';

export const CounterApp = ({value}) => {

    const [counter, setCounter] = useState(value);

    const sumaUno = () => {
        setCounter(counter + 1);
        // setCounter((c) => c + 1);
    };

    const reset = () => {
        setCounter(value);
        // setCounter((c) => c - 1);
    };

    const restaUno = () => {
        setCounter(counter - 1);
        // setCounter(value);
    };
    
    return <>
        <h1>CounterApp</h1>
        <h2> { counter } </h2>
        <button onClick={sumaUno}>+1</button>
        <button aria-label='btn-reset' onClick={reset}>reset</button>
        <button onClick={restaUno}>-1</button>
    </>
};

CounterApp.propTypes = {
    value: PropTypes.number,
};

