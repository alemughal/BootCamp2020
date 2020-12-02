import React, { useReducer } from 'react';
import counterReducer from './counterReducer'

const Child2 = () => {
    let [state, dispach] = useReducer(counterReducer, 1);
    return (
        <div>
            <h2>This is second child using counterReducer</h2>
            <h2>This is your counter value: {state}</h2>

            <button onClick={() => dispach('INCREAMENT')}>Increament</button>
        </div>
    )
}

export default Child2;