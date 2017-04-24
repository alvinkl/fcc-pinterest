import React, { Component } from 'react'
import axios from 'axios'
import Masonry from 'react-masonry-component'

import Post from '../Post'

export default class MyPics extends Component {
  constructor(props) {
    super(props)

    this.userid = props.route.auth.getProfile().user_id
  }

  state = { posts: [] }

  loadData = () => {
    axios.get(`http://localhost:3100/mypic/${ this.userid }`)
      .then(res => { this.setState({ posts: res.data }) })
  }

  componentDidMount() {
    this.loadData()
  }

  renderSearchResult = () => {
    const { posts } = this.state

    return posts.map((post, index) => (
        <Post
          key={ index }
          image_URI={ post.image_URI }
          text={ post.text }
          addLike={ this.addLike }
          likes={ post.likes }
          disabled={ true } />
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