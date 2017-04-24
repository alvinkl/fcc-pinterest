import React, { Component } from 'react'
import { Link } from 'react-router'
import axios from 'axios'
import Masonry from 'react-masonry-component'

import { post } from '../../../globalConfig'
import Post from '../Post'

export default class Home extends Component {
  constructor(props) {
    super(props)

    this.userid = props.route.auth.getProfile().user_id
  }

  state = { posts: [] }

  componentWillMount() {
    this.loadData()
  }

  loadData = () => {
    axios.get(post)
      .then(res => {
        this.setState({ posts: res.data })
      })
      .catch(err => console.error(err))
  }

  addLike(userid) {
    const load = this.loadData
    axios.post(`http://localhost:3100/like/${userid}`)
      .then(function(res) { load() })
  }

  renderSearchResult = () => {
    const { posts } = this.state

    return posts.map((post, index) => (
        <Post
          key={ index }
          image_URI={ post.image_URI }
          text={ post.text }
          addLike={ this.addLike.bind(this, post._id) }
          likes={ post.likes }/>
    ))
  }

  render() {
    return (
      <div className="grid">
        <div className="grid" data-masonry='{ "itemSelector": ".grid-item", "columnWidth": 200 }'>
          <Masonry
              disableImagesLoaded={false} // default false
              updateOnEachImageLoad={false} // default false and works only if disableImagesLoaded is false
            >
            { this.state.posts && 
              this.renderSearchResult() }
          </Masonry>
        </div>
      </div>
    )
  }
}