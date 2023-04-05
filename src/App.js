import './index.css';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import LoginForm from './Login';
import RegistrationForm from './Register';
import React from 'react';
import admin from './adminPage';
import WelcomePage from './welcomePage';
import facility from './facility';

function App() {
  return (
    <Router>
      <Switch>
        <Route path="/login" exact component={LoginForm} />
        <Route path="/register" component={RegistrationForm} />
        <Route path="/admin" component={admin} />
        <Route path="/facility" component={facility} />
        <Route path="/" component={WelcomePage} />

      </Switch>
    </Router>
  );
}

export default App;
