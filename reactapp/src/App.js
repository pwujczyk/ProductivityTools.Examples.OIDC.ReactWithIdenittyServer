import React, { useState, useEffect } from 'react';
import logo from './logo.svg';
import Home from './pages/home'
import Login from './pages/login'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import PrivateRoute from './utils/privateroute'

function App() {
  return (
    <Router>
      <Route path="/signin-oidc" component={Home} />
      <Route path="/login" component={Login} />
      <PrivateRoute exact path="/" component={Home} />
    </Router>
  );
}

export default App;
