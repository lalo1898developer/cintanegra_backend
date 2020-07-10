/* eslint-disable no-underscore-dangle */
const { Post } = require('../models');

module.exports = {
  createOne: (body) => new Post(body),
  addPost: (user, post) => {
    user.posts.push(post);
    return user.save();
  },
  readOne: (user, id) => {
    const post = user.posts.id(id);
    if (post.is_active === false) return undefined;
    return post;
  },
  readAllActive: (user) => {
    const filteredPosts = user.posts.filter((post) => post.is_active === true);
    return filteredPosts;
  },
  updateOne: (id, user, body) => {
    const updatedPosts = user.posts.map((post) => {
      if (post._id.toString() === id) {
        const updatedPost = Object.assign(post, body);
        return updatedPost;
      }
      return post;
    });
    // eslint-disable-next-line no-param-reassign
    user.posts = updatedPosts;
    return user.save();
  },
};
