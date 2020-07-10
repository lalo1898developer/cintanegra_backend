const express = require('express');

const router = express.Router();

const { PostController } = require('../controllers');
const { PostValidator } = require('../validators');

router.post('/users/:idUser/posts', PostValidator.create, PostController.create);
router.get('/users/:idUser/posts', PostValidator.readAll, PostController.readAll);
router.get('/users/:idUser/posts/:id', PostValidator.readOne, PostController.readOne);
router.patch('/users/:idUser/posts/:id', PostValidator.updateOne, PostController.updateOne);
router.delete('/users/:idUser/posts/:id', PostValidator.deleteOne, PostController.deleteOne);

module.exports = router;
