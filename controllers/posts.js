var _ = require('lodash');
var express = require('express');

var PostModel = require('../models/post');

module.exports = function createPostsController(app) {
  var router = express.Router();
  var posts = PostModel(app);

  router.get('/posts', function postsIndex(req, res) {
    return res.render('posts/index', {
      title: "Posts",
      posts: posts.all()
    });
  });

  router.get('/posts/new', function newPost(req, res) {
    return res.render('posts/new', {
      title: "Create Post",
      post: {
        title: '',
        content: '',
      }
    });
  });

  router.post('/posts', function createPost(req, res) {
    console.log(req.body);
    var post = _.pick(req.body, 'title', 'content');
    posts.create(post);
    return res.redirect('/posts');
  });

  router.get('/posts/:postId', function editPost(req, res) {
    var post = posts.get(req.params.postId);
    return res.render('posts/edit', {
      title: "Edit Post",
      post: post
    })
  });

  router.put('/posts/:postId', function updatePost(req, res) {
    var post = posts.update(req.params.postId, req.body);
    return res.redirect('/posts');
  });

  router.get('/posts/:postId/destroy', function destroyPost(req, res) {
    posts.destroy(req.params.postId);
    return res.redirect('/posts');
  });

  return router;
}
