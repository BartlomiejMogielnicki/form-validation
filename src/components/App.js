import React, { Component } from 'react';
import './App.css';
import InputField from './InputField/InputField'

class App extends Component {
  state = {
    username: '',
    email: '',
    password: '',
    password2: '',
    accept: false
  };

  handleChange = (e) => {
    const input = e.target;
    const inputName = e.target.name;
    if (input.type === 'checkbox') {
      this.setState({
        accept: input.checked
      });
    } else {
      this.setState({
        [inputName]: input.value
      });
    };
  };

  render() {
    return (
      <form>
        <h2>Register Form</h2>
        <InputField
          type='text'
          name='username'
          title='Username'
          placeholder='Enter username...'
          value={this.state.username}
          change={this.handleChange}
        />
        <InputField
          type='email'
          name='email'
          title='Email'
          placeholder='Enter email...'
          value={this.state.email}
          change={this.handleChange}
        />
        <InputField
          type='password'
          name='password'
          title='Password'
          placeholder='Enter password...'
          value={this.state.password}
          change={this.handleChange}
        />
        <InputField
          type='password'
          name='password2'
          title='Confirm password'
          placeholder='Enter password again...'
          value={this.state.password2}
          change={this.handleChange}
        />
        <InputField
          type='checkbox'
          name='accept'
          title='Accept terms'
          checked={this.state.accept}
          change={this.handleChange}
        />
        <button>Submit</button>
      </form>
    );
  };
};

export default App;
