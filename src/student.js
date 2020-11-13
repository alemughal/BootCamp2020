import React from 'react';


function Student (props) {
    return (
        <div>
            <h1>Your Name: {props.name}</h1>
            <h1>Your Roll: {props.roll} </h1>   
            <h1>Your Course: {props.course}</h1>
            <h1>Your City: {props.city}</h1>
        </div>
    )
}

export default Student