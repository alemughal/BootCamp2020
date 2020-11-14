import React from 'react';

function Message (props) {
    return (
        <h1 className="message">Value of you counter: {props.value} </h1>
    )
}

export default Message;