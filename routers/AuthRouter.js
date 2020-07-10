const express = require('express');

const router = express.Router();

const { UserController } = require('../controllers');
const { UserValidator } = require('../validators');

router.post('/signup', UserValidator.create, UserController.signup);
router.post('/login', UserValidator.login, UserController.login);

module.exports = router;
