/* eslint-disable no-console */
require('dotenv').config();
const mongoose = require('mongoose');
const { api, PORT } = require('./api');
const { MONGO_URI } = require('./config');

mongoose.connect(
  MONGO_URI,
  { useNewUrlParser: true, useUnifiedTopology: true },
)
  .then(() => console.log('Database connected'))
  .catch((err) => console.log('Error connecting to database', err));

api.listen(PORT, () => console.log(`Listen on ${PORT}`));
