import React, { Component } from 'react';
import TextInput from '../TextInput/TextInput';
import TextArea from '../TextArea/TextArea';

class DynamicComponent extends Component {
    state = {
        inputMap: {
            'TextField': <TextInput id={this.props.id} value={this.props.inputValue} />,
            'TextArea': <TextArea id={this.props.id} value={this.props.inputValue} />
        },
        value: null
    };

    render() {
        return (
            <div>
                {this.state.inputMap[this.props.inputType]}
            </div>
        )
    };
}

export default DynamicComponent;
