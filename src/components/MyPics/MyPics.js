import React, { Component } from 'react'
import axios from 'axios'

export default class MyPics extends Component {
  handleForm = e => {
    e.preventDefault()
    
    axios.post('http://localhost:3100/addPost', {
      userid: this.props.route.auth.getProfile().user_id,
      image_URI: this.state.pictureUrl,
      text: this.state.text
    })
    .then(res => console.log(res))
  }

  render() {
    return (
      <form onSubmit={ this.handleForm }>
        <label htmlFor='pictureUrl'>Picture URL</label>
        <input type="text" onChange={ e => this.setState({ pictureUrl: e.target.value }) }/>
        <label htmlFor='text'>Text</label>
        <input type="text" onChange={ e => this.setState({ text: e.target.value }) }/>
        <button type='submit'>Submit</button>
      </form>
    )
  }
}