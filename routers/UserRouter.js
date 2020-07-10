const express = require('express');

const router = express.Router();

const { UserController } = require('../controllers');
const { UserValidator } = require('../validators');
const { verifyToken } = require('../middlewares');

router.post('/users', verifyToken, UserValidator.create, UserController.create);
router.get('/users/:id', UserController.readOne);
router.get('/users/', UserController.readAll);
router.patch('/users/:id', UserValidator.update, UserController.update);
router.delete('/users/:id', UserController.delete);

module.exports = router;
