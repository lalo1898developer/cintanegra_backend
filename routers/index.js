const express = require('express');

const router = express.Router();
const { verifyToken } = require('../middlewares')

router.use(require('./UserRouter'));
router.use(require('./AuthRouter'));

router.use(verifyToken);
router.use(require('./PostRouter'));

module.exports = router;
