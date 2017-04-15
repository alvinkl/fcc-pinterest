import React, { Component } from 'react'
import { Link } from 'react-router'
import axios from 'axios'
import { Masonry } from 'masonry-layout'

import { post } from '../../../globalConfig'

export default class Home extends Component {
  constructor(props) {
    super(props)
  }

  state = { posts: [] }

  componentWillMount() {
    this.loadData()
  }

  loadData = () => {
    axios.get(post)
      .then(res => {
        this.setState({ posts: res.data.data })
      })
      .catch(err => console.error(err))
  }

  addLike = () => {
    // add like
  }

  renderSearchResult = () => {
    const { posts } = this.state

    return posts.map((post, index) => (
      <div className="card col-xs-4" style={ {width: '20rem'} } key={ index }>
        <img className="card-img-top img img-responsive" src={ post.image_URI } alt="Card image cap" />
        <div className="card-block">
          <h4 className="card-title">{ post.text }</h4>
          <button onClick={ this.addLike } className="btn btn-primary">like { post.likes }</button>
          <h6>{ post.userid }</h6>
        </div>
      </div>
    ))
  }

  render() {
    return (
      <div className="grid">
        <div className="grid" data-masonry='{ "itemSelector": ".grid-item", "columnWidth": 200 }'>
          { this.state.posts && 
            this.renderSearchResult() }
        </div>
      </div>
    )
  }
}