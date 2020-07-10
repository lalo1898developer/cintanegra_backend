const { Post } = require('../models');

module.exports = {
  createOne: (body) => new Post(body),
  readOne: (user, id) => {
    user.posts.id(id);
  },
  readAllActive: (user) => {
    const filteredPosts = user.posts.filter((post) => post.is_active === true);
    return filteredPosts;
  },
  updateOne: (id, user, body) => {
    const updatedPosts = user.posts.map((post) => {
      // eslint-disable-next-line no-underscore-dangle
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
