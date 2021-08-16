import React, { Component } from 'react';
import Scene from './Scene';

import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom"

import Home from './pages/Home';
import Register from './pages/Register';
import Login from './pages/Login';
import Reward from './pages/Reward';
import Profile from './pages/Profile';

import NavBar from './pages/Navbar';

class App extends Component {
  render() {
    return (
      <Router>
      <div>
        <NavBar />
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>

          <Route path="/register">
            <Register />
          </Route>

          <Route path="/login">
            <Login />
          </Route>

          <Route path="/reward">
            <Reward />
          </Route>

          <Route path="/profile">
            <Profile />
          </Route>
        </Switch>
      </div>
      </Router>
    );
  }
}

export default App;
