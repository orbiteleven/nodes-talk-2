var _ = require('lodash');
var dummyPosts = require('../dummy-posts');

module.exports = function createPostModel(app) {
  this.all = function sortPosts() {
    return _.sortByOrder(dummyPosts, 'id', 'desc')
  };

  this.create = function createPost(post) {
    post.id = dummyPosts.length;
    dummyPosts.push(post);
    return post;
  };

  this.get = function getPost(postId) {
    return _.find(dummyPosts, function findPost(post) {
      if (post.id == postId) return post;
    });
  };

  this.update = function updatePost(postId, updatedPost) {
    console.log(arguments);
    var postIndex = _.findIndex(dummyPosts, function findPostIndex(post, index) {
      if (post.id = postId) return index;
    });
    dummyPosts[postIndex] = updatedPost;
  };

  this.destroy = function removePost(postId) {
    dummyPosts = _.reject(dummyPosts, function removeDummyPost(post) {
      return post.id === parseInt(postId);
    });
  };

  return this;
}
