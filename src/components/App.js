import React, { Component } from 'react';
import './App.css';
import InputField from './InputField/InputField'

class App extends Component {
  state = {
    username: '',
    email: '',
    password: '',
    password2: '',
    accept: false,

    errors: {
      username: true,
      email: true,
      password: true,
      password2: true,
      accept: true,
    }
  };

  errorMessages = {
    usernameError: 'Username must be at least 3 characters',
    emailError: 'Email is not valid',
    passwordError: 'Password must be at least 6 characters',
    password2Error: 'Password confirm is not correct',
    acceptError: 'You must confirm terms'
  }

  handleChange = e => {
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

  handleSubmit = e => {
    e.preventDefault()
    console.log('Submit!')
  }

  render() {
    return (
      <form onSubmit={this.handleSubmit} noValidate>
        <h2>Register Form</h2>
        <InputField
          type='text'
          name='username'
          title='Username'
          placeholder='Enter username...'
          value={this.state.username}
          change={this.handleChange}
          isError={this.state.errors.username}
        />
        {this.state.errors.username ? <span className='error'>{this.errorMessages.usernameError}</span> : null}
        <br />
        <InputField
          type='email'
          name='email'
          title='Email'
          placeholder='Enter email...'
          value={this.state.email}
          change={this.handleChange}
          isError={this.state.errors.email}
        />
        {this.state.errors.email ? <span className='error'>{this.errorMessages.emailError}</span> : null}
        <br />
        <InputField
          type='password'
          name='password'
          title='Password'
          placeholder='Enter password...'
          value={this.state.password}
          change={this.handleChange}
          isError={this.state.errors.password}
        />
        {this.state.errors.password ? <span className='error'>{this.errorMessages.passwordError}</span> : null}
        <br />
        <InputField
          type='password'
          name='password2'
          title='Confirm password'
          placeholder='Enter password again...'
          value={this.state.password2}
          change={this.handleChange}
          isError={this.state.errors.password2}
        />
        {this.state.errors.password2 ? <span className='error'>{this.errorMessages.password2Error}</span> : null}
        <br />
        <InputField
          type='checkbox'
          name='accept'
          title='Accept terms'
          checked={this.state.accept}
          change={this.handleChange}
          isError={this.state.errors.accept}
        />
        {this.state.errors.accept ? <span className='error'>{this.errorMessages.acceptError}</span> : null}
        <br />
        <button>Submit</button>
      </form>
    );
  };
};

export default App;
