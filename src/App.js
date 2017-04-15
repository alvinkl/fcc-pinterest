import React, { Component } from 'react'
import { Router, Route, hashHistory as history } from 'react-router'
import axios from 'axios'


// Layout
import CoreLayout from './containers/CoreLayout'
import Home from './components/Home'

class App extends Component {
  constructor(props) {
    super(props)

  }

  render() {
    return (
      <Router history={ history }>
        <Route component={ CoreLayout }> 
          <div className="container-fluid">
            <Route path='/' component={ Home }/>
          </div>
        </Route>
      </Router>
    )
  }
}

export default App
