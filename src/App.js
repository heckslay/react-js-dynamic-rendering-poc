import React, { Component } from 'react';
import DynamicComponent from './Components/DynamicComponent/DynamicComponent';
import './App.css';

class App extends Component {
  state = {
    inputs: [
      {
        "id": 413,
        "inputType": "TextArea",
        "value": "12"
      },
      {
        "id": 415,
        "inputType": "TextField",
        "value": "300 არაგველის ქუჩა, ახმეტა, ახმეტის მუნიციპალიტეტი, კახეთი"
      }
    ]
  };

  render() {
    const inputs = this.state.inputs;
    return (
      <div className="App">
        {
          inputs.map((input, index) => {
            return  <DynamicComponent key={input.id} inputType={input.inputType} inputValue={input.value}></DynamicComponent>;
          })
        }
      </div>
    )
  };
}

export default App;
