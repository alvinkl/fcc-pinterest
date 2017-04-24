import React, { Component } from 'react'
import { Router, Route, hashHistory as history } from 'react-router'
import axios from 'axios'

import AuthService from './auth/AuthService'

// Layout
import CoreLayout from './containers/CoreLayout'
import Home from './components/Home'
import MyPics from './components/MyPics'
import AddPic from './components/AddPic'

const auth = new AuthService('7q4FGAlMLZH06P4yGfEGVwwFcNL6UPyP', 'alvinkl.au.auth0.com');

const requireAuth = (nextState, replace) => {
  if (!auth.loggedIn()) {
    replace({ pathname: '/login' });
  }
}

class App extends Component {
  constructor(props) {
    super(props)
  }

  render() {
    return (
      <Router history={ history }>
        <Route component={ CoreLayout } auth={ auth }> 
          <div className="container-fluid">
            <Route path='/' component={ Home } auth={ auth }/>
            <Route path='mypics' component={ MyPics } auth={ auth }/>
            <Route path='addPic' component={ AddPic }auth={ auth }/>
            <Route path='login' component={ () => auth.login() }></Route>
          </div>
        </Route>
      </Router>
    )
  }
}

export default App
