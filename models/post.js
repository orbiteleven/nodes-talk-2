var _ = require('lodash');
var ObjectId = require('mongodb-core').BSON.ObjectId;

module.exports = function createPostModel(app) {
  var db = app.get('db');
  var posts = db.collection('posts');

  posts.createIndex({'createdAt': -1});

  this.all = function allPosts(callback) {
    posts.find().sort({createdAt: -1}).toArray(callback);
  };

  this.create = function createPost(post, callback) {
    post.createdAt = new Date();
    posts.insert(post, callback);
  };

  this.get = function getPost(postId, callback) {
    posts.findOne({_id: new ObjectId(postId)}, callback);
  };

  this.update = function updatePost(postId, updatedPost, callback) {
    posts.findOne({_id: new ObjectId(postId)}, function updatePost(err, post) {
      if (err) {return callback(err, null);}
      updatedPost = _.assign(post, updatedPost);
      posts.update(
        {_id: new ObjectId(postId)},
        updatedPost,
        callback);
    });
  };

  this.destroy = function removePost(postId, callback) {
    posts.remove({_id: new ObjectId(postId)}, callback);
  };

  return this;
}
