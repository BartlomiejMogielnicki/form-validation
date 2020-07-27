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
    correct: false,
    confirmMessage: '',

    errors: {
      username: false,
      email: false,
      password: false,
      password2: false,
      accept: false,
    }
  };

  errorMessages = {
    usernameError: 'Username must be at least 3 characters',
    emailError: 'Email is not valid',
    passwordError: 'Password must be at least 6 characters',
    password2Error: 'Password confirm is not correct',
    acceptError: 'You must accept terms',
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

  validateForm = () => {
    let username = false;
    let email = false;
    let password = false;
    let password2 = false;
    let accept = false;
    let correct = false;

    // Validate username
    if (this.state.username.length > 2) {
      username = true;
    }
    // Validate email
    const re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    if (re.test(String(this.state.email).toLowerCase())) {
      email = true;
    }
    // Validate password
    if (this.state.password.length > 5) {
      password = true;
    }
    // Validate password2
    if (this.state.password2 === this.state.password && this.state.password2 !== '') {
      password2 = true;
    }
    // Validate accept
    if (this.state.accept) {
      accept = true;
    }
    // Validate form
    if (username && email && password && password2 && accept) {
      correct = true;
    }

    return { username, email, password, password2, accept, correct }
  }

  handleSubmit = e => {
    e.preventDefault()
    const validate = this.validateForm();

    if (validate.correct) {
      this.setState({
        username: '',
        email: '',
        password: '',
        password2: '',
        accept: false,
        confirmMessage: 'Registration Completed',

        errors: {
          username: false,
          email: false,
          password: false,
          password2: false,
          accept: false,
          correct: false,
        }
      })
    } else {
      this.setState({
        correct: validate.correct,
        errors: {
          username: !validate.username,
          email: !validate.email,
          password: !validate.password,
          password2: !validate.password2,
          accept: !validate.accept,
        }
      })
    }
  }

  render() {
    return (
      <div>
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
        {this.state.confirmMessage && <h4>Registration Completed</h4>}
      </div>
    );
  };
};

export default App;
