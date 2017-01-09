import React from 'react';
import ReactDOM from 'react-dom';
import {Router, Route, browserHistory, IndexRedirect, IndexRoute} from 'react-router';

import App from './components/App';
import SignupForm from './components/SignupForm'
import LoginForm from './components/LoginForm'
import MapContainer from './containers/MapContainer'
import AboutContainer from './containers/AboutContainer'
import ContactContainer from './containers/ContactContainer'
import axios from 'axios';
import store from './store';
import { Provider } from 'react-redux';

ReactDOM.render(
  <Provider store={store} >
    <Router history={browserHistory} >
      <Route path="/" component={App} >
        <Route path="/signup" component={SignupForm} />
        <Route path="/login" component={LoginForm} />
        <Route path="/map" component={MapContainer} />
        <Route path="/about" component={AboutContainer} />
        <Route path="/contact" component={ContactContainer} />
        <IndexRedirect to="/login"/>
      </Route>
    </Router>
  </Provider>,
  document.getElementById('app')
);

