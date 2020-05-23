import React from 'react';

const textArea = (props) => {
    return (
        <div className="TextArea">
            <textarea
                onChange={() => { console.log('TextArea Modified') }}
                value={props.value}>
            </textarea>
        </div>
    )
};

export default textArea;