import React, { Fragment, useContext } from 'react';
import countercontext from './countercontext';


function GrandChild() {
    let countervalue = useContext(countercontext)
    let value = 12
    return (
        <Fragment>
            <h1>This is your first Grand Child using CounterContext</h1>
            <h2>Counter Value: {countervalue[0]}</h2>

            <button onClick={() => countervalue[1](++countervalue[0])}>
                Increament
            </button>
        </Fragment>
    )
}

export default GrandChild