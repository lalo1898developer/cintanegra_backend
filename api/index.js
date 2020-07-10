const express = require('express');
const morgan = require('morgan');
const { errors } = require('celebrate');

const api = express();
const PORT = process.env.PORT || 3000;

api.use(morgan('dev'));
api.use(express.urlencoded({ extended: true }));
api.use(express.json({ express: true }));
api.use('/api/v1', require('../routers'));

api.use(errors());

api.get('/', (req, res) => res.send('Hello World!'));

module.exports = { api, PORT };
