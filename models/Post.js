/* eslint-disable prefer-arrow-callback */
/* eslint-disable func-names */
const mongoose = require('mongoose');

const { Schema } = mongoose;

const postSchema = new Schema({
  image: { type: String },
  title: {
    type: String,
    required: true,
    trim: true,
  },
  body: {
    type: String,
    required: true,
  },
  date: {
    type: Date,
    default: Date.now(),
  },
  permissions: {
    type: String,
    enum: ['PUBLIC', 'PRIVATE'],
    default: 'PUBLIC',
  },
  is_active: {
    type: Boolean,
    default: true,
  },
});

const Post = mongoose.model('Post', postSchema);

module.exports = { Post, postSchema };
