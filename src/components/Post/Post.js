import React, { Component } from 'react'

const Post = props => (
  <div className="card col-xs-4" style={ {width: '20rem'} }>
    <img className="card-img-top img img-responsive" src={ props.image_URI } alt="Card image cap" />
    <div className="card-block">
      <h4 className="card-title">{ props.text }</h4>
      <button onClick={ props.addLike } className="btn btn-primary">like { props.likes }</button>
      <h6>{ props.userid }</h6>
    </div>
  </div>
)

export default Post