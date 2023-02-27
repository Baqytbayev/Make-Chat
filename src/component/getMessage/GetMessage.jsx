import React from 'react';
import './GetMessage.css'

const GetMessage = (props) => {
    return (
        <div className = 'divOfText'>
            <h1 className = 'Author'>Author: {props.author}</h1>
            <p className={'message'}>Message: {props.message}</p>
            <p className = 'message'>DateTime: <span>{props.datetime}</span></p>
        </div>
    )
};
export default GetMessage;