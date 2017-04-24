import React, { Component } from 'react'
import { Link } from 'react-router'

const Header = props => (
  <nav className="navbar navbar-default">
    <div className="container-fluid">
      <div className="navbar-header">
        <a className="navbar-brand" href="#">Picterest</a>
      </div>
      <ul className="nav navbar-nav">
        <li className="active"><a href="#">All</a></li>
        {
          props.auth.loggedIn() &&
          <li><Link to='mypics'>My Pics</Link></li>
        }
        {
          props.auth.loggedIn() &&
          <li><Link to='addPic'>Add Pic</Link></li>
        }
      </ul>
      <ul className="nav navbar-nav navbar-right">
        { !props.auth.loggedIn() &&
          <li><button onClick={ () => props.auth.login() }>Login</button></li>
        }
      </ul>
    </div>
  </nav>
)

export default Header