const express = require('express');
const postsRouter = express.Router();


postsRouter.use((req, res, next) => {
  console.log("A request is being made to /posts");

  next(); // THIS IS DIFFERENT
});

const { getAllposts } = require('../db');


postsRouter.get('/', async (req, res) => {
  const posts = await getAllposts();

  res.send({
    "posts": []
  });
});

module.exports = postsRouter;