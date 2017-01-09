import React, { Component } from 'react';
import axios from 'axios';
import {Link} from 'react-router';
import {signupAndGo} from '../action-creators'
import {connect} from 'react-redux';

class LoginForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      username: '',
      password: ''
    }
  }

  updateInput(field, event) {
    this.setState({
      [field]: event.target.value
    })
  }

  login(e) {
    e.preventDefault();
    axios.get('/api/login', {
      email: this.state.email,
      password: this.state.password
    })
    .then(res => res.data)
    .then(userData => this.props.updateUserStoreAndGo(userData))
    .catch(err => console.error('Oops, there was a problem signing in:', err));
  }

  render() {
    return (
      <div className="row parkerForm">
        <div className="col-xs-6">
          <form onSubmit={this.login.bind(this)}>
            <h1>Login</h1>
            <div className="form-group">
              <label htmlFor="exampleInputEmail1">Email address</label>
              <input 
                onChange={this.updateInput.bind(this, 'email')} 
                value={this.state.email}
                type="email"
                className="form-control"
                id="exampleInputEmail1"
                aria-describedby="emailHelp"
                placeholder="Enter email" />
            </div>
            <div className="form-group">
              <label htmlFor="exampleInputPassword1">Password</label>
              <input
                onChange={this.updateInput.bind(this,'password')}
                value={this.state.password}
                type="password"
                className="form-control"
                id="exampleInputPassword1"
                placeholder="Password"/>
            </div>
            <button type="submit" className="btn btn-primary">Login</button>
            <div>
              <h4>
                <Link className="btn btn-primary" to="/signup">
                  <span>Or click here to sign up</span> 
                </Link>
              </h4>
            </div>
          </form>
        </div>
      </div>
    )
  }
}


export default connect(state=>({state}),{ updateUserStoreAndGo: signupAndGo })(LoginForm)