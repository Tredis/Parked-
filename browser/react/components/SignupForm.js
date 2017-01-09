import React, { Component } from 'react';
import axios from 'axios';
import {connect} from 'react-redux';
import {signupAndGo} from '../action-creators'

class SignupForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      email: '',
      username: '',
      password: '',
      confirmPassword: ''
    }
  }

  createUserHandler(e) {
    e.preventDefault();
    axios.post('/api/signup', {
      email: this.state.email,
      username: this.state.username,
      password: this.state.password
    })
    .then(res => res.data)
    // Why is res.data a damn string??...
    // (after a while)...Maybe body parser's not doing it's job?...
    // Update: Finally after at least 1.5 hours, I had the great idea to
    // try reinstalling the body parser npm package, and it worked!!
    // Maybe a version change just happened or something??
    .then(userData => this.props.updateUserStoreAndGo(userData))
    .catch(err => console.error('Oops, there was a problem signing up:', err));
  }

  updateInput(field, event) {
    this.setState({
      [field]: event.target.value
    })
  }

  render() {
    return (
      <div className="row parkerForm">
        <div className="col-xs-6">
          <h1>Signup</h1>
          <form onSubmit={this.createUserHandler.bind(this)}>
            <div className="form-group">
              <label htmlFor="email">Email address</label>
              <input
                value={this.state.email}
                onChange={this.updateInput.bind(this, 'email')}
                name="email"
                type="email"
                className="form-control"
                id="email"
                aria-describedby="emailHelp"
                placeholder="Enter email" 
                required />
            </div>
            <div className="form-group">
              <label htmlFor="username">User name</label>
              <input
                value={this.state.username}
                onChange={this.updateInput.bind(this, 'username')}
                name="username"
                type="username"
                className="form-control"
                id="username"
                aria-describedby="usernameHelp"
                placeholder="Enter username"
                required />

            </div>
            <div className="form-group">
              <label htmlFor="password">Password</label>
              <input
                value={this.state.password}
                onChange={this.updateInput.bind(this, 'password')}
                type="password"
                className="form-control"
                id="password"
                placeholder="Password"
                required />
            </div>
            <div className="form-group">
              <label htmlFor="confirmation_password">Confirm Password</label>
              <input
                value={this.state.confirmPassword}
                onChange={this.updateInput.bind(this, 'confirmPassword')}
                type="password"
                className="form-control"
                id="confirmation_password"
                placeholder="Password"
                required />
            </div>
            <button type="submit" className="btn btn-primary">Create Account</button>
          </form>
        </div>
      </div>
    )
  }
}

export default connect(state=>({state}),{ updateUserStoreAndGo: signupAndGo })(SignupForm)