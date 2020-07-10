/* eslint-disable no-unused-expressions */
const { User } = require('../models');

module.exports = {
  createOne: (body) => new User(body).save(),
  readOne: (id) => User.findById(id),
  readOneByEmail: (email) => User.findOne({ email }),
  readAll: () => User.find(),
  updateOne: (id, body) => User.findByIdAndUpdate(id, body, { new: true }),
  deleteOne: (id) => User.findByIdAndDelete(id),
  addPost: (user, post) => {
    user.posts.push(post);
    return user.save();
  },
  readAllPosts: (user) => User.find(user, 'posts'),
};
