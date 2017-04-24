import React from 'react'

import Header from './Header'

const CoreLayout = props => (
  <div>
    <Header auth={ props.route.auth }/>
    <div className="layout">
      { props.children }
    </div>
  </div>
)

export default CoreLayout