const express = require('express');
const router = express.Router();

// declare axios for making http requests
const axios = require('axios');
const API = 'https://jsonplaceholder.typicode.com';

const apiKey = `MvpjntcaeX2Y00hgO3FD66OLyVgQru9DDbn5bIcfseKf1CWwSW`;
const tumblrAPI = `https://api.tumblr.com/v2/blog/yvalgesto.tumblr.com/`;

const photoPosts = `posts/photo?filer=text&api_key=${apiKey}`;

/* GET api listing. */
router.get('/', (req, res) => {
  res.send('api works');
});

// Get all posts
router.get('/posts', (req, res) => {
  // Get posts from the mock api
  // This should ideally be replaced with a service that connects to MongoDB
  axios.get(tumblrAPI+photoPosts)
    .then(resp => {
      res.status(200).json(resp.data);
      console.log(resp.data.posts);
    })
    .catch(error => {
      res.status(500).send(error)
    });
});

module.exports = router;


