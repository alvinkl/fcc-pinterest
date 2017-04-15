import React, { Component } from 'react'

const Header = auth => (
  <nav className="navbar navbar-default">
    <div className="container-fluid">
      <div className="navbar-header">
        <a className="navbar-brand" href="#">WebSiteName</a>
      </div>
      <ul className="nav navbar-nav">
        <li className="active"><a href="#">All</a></li>
      </ul>
      <ul className="nav navbar-nav navbar-right">
        <li><button>Login</button></li>
      </ul>
    </div>
  </nav>
)

export default Header