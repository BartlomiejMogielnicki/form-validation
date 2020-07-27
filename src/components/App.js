import React, { Component } from 'react';
import './App.css';
import InputField from './InputField/InputField'

class App extends Component {
  render() {
    return (
      <form>
        <h2>Register Form</h2>
        <InputField />
        <InputField />
        <InputField />
        <InputField />
        <button>Submit</button>
      </form>
    );
  }
}

export default App;
