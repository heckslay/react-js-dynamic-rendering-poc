import React from 'react';

const textInput = (props) => {
    return (
        <div className="TextInput">
            <input type="text"
                onChange={() => { console.log('TextInput Modified') }}
                value={props.value}>
            </input>
        </div>
    )
};

export default textInput;