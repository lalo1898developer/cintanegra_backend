/* eslint-disable prefer-arrow-callback */
/* eslint-disable func-names */
const mongoose = require('mongoose');
const bcrypt = require('bcrypt');
const { postSchema } = require('./Post');

const SALT_WORK_FACTOR = 10;

const { Schema } = mongoose;

const userSchema = new Schema({
  is_active: {
    type: Boolean,
    default: true,
  },
  firstName: {
    type: String,
    required: true,
    trim: true,
  },
  lastName: {
    type: String,
    required: true,
    trim: true,
  },
  email: {
    type: String,
    required: true,
    trim: true,
    unique: true,
  },
  password: {
    type: String,
    required: true,
    trim: true,
  },
  posts: [postSchema],
}, { timestamps: true, versionKey: false });

userSchema.pre('save', function (next) {
  const user = this;

  // only hash the password if it has been modified (or is new)
  if (!user.isModified('password')) return next();

  // generate a salt
  return bcrypt.genSalt(SALT_WORK_FACTOR, function (errSalt, salt) {
    if (errSalt) return next(errSalt);

    // hash the password using our new salt
    return bcrypt.hash(user.password, salt, function (errHash, hash) {
      if (errHash) return next(errHash);

      // override the cleartext password with the hashed one
      user.password = hash;
      return next();
    });
  });
});

const User = mongoose.model('User', userSchema, 'Users');

module.exports = User;
