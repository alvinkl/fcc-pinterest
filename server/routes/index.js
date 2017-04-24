const express = require('express')
const router = express.Router()

const Post = require('../model/Post')

const mock = [
  {
    userid: 123,
    image_URI: 'http://www.wkhscounselors.com/images/Pictures/ArticlePics/CollegeCareer/-testing.jpg',
    likes: 0,
    text: 'Testing 1',
  },
  {
    userid: 123,
    image_URI: 'http://www.wkhscounselors.com/images/Pictures/ArticlePics/CollegeCareer/-testing.jpg',
    likes: 1,
    text: 'Testing 2',
  },
  {
    userid: 123,
    image_URI: 'http://www.wkhscounselors.com/images/Pictures/ArticlePics/CollegeCareer/-testing.jpg',
    likes: 2,
    text: 'Testing 3',
  },
  {
    userid: 123,
    image_URI: 'http://www.wkhscounselors.com/images/Pictures/ArticlePics/CollegeCareer/-testing.jpg',
    likes: 4,
    text: 'Testing 4',
  },
  {
    userid: 123,
    image_URI: 'http://www.wkhscounselors.com/images/Pictures/ArticlePics/CollegeCareer/-testing.jpg',
    likes: 20,
    text: 'Testing 5',
  },
]

/* GET home page. */
router.get('/', function(req, res, next) {
  Post.find({}, (err, post) => err ? res.send(err) : res.json(post))
})

router.post('/addPost', (req, res, next) => {
  var post = new Post()
  post.userid = req.body.userid
  post.image_URI = req.body.image_URI
  post.likes = 0
  post.text = req.body.text

  post.save({}, err => err ? res.send(err) : res.json(post))
})

module.exports = router
