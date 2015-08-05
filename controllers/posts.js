var _ = require('lodash');
var express = require('express');

var PostModel = require('../models/post');

module.exports = function createPostsController(app) {
  var router = express.Router();
  var Posts = PostModel(app);

  router.get('/posts', function postsIndex(req, res) {
    return Posts.all(function renderPosts(err, posts) {
      if (err) {res.render(404)}
      return res.render('posts/index', {
        title: "Posts",
        posts: posts
      });
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
    var post = _.pick(req.body, 'title', 'content');
    Posts.create(post);
    return res.redirect('/posts');
  });

  router.get('/posts/:postId', function editPost(req, res) {
    return Posts.get(req.params.postId, function renderEditPost(err, post) {
      return res.render('posts/edit', {
        title: "Edit Post",
        post: post
      });
    });
  });

  router.put('/posts/:postId', function updatePost(req, res) {
    return Posts.update(req.params.postId, req.body, function renderPostUpdate(err, posts) {
      return res.redirect('/posts');
    });
  });

  router.get('/posts/:postId/destroy', function destroyPost(req, res) {
    Posts.destroy(req.params.postId);
    return res.redirect('/posts');
  });

  return router;
}
