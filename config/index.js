const NODE_ENV = process.env.NODE_ENV || 'TEST';

const config = {
  PRODUCTION: {
    MONGO_URI: `mongodb://${process.env.MONGO_USER}:${process.env.MONGO_PASSWORD}@clustererr-shard-00-00.lyshl.mongodb.net:27017,clustererr-shard-00-01.lyshl.mongodb.net:27017,clustererr-shard-00-02.lyshl.mongodb.net:27017/production?ssl=true&replicaSet=atlas-9yt0oe-shard-0&authSource=admin&retryWrites=true&w=majority`,
  },
  STAGING: {
    MONGO_URI: `mongodb://${process.env.MONGO_USER}:${process.env.MONGO_PASSWORD}@clustererr-shard-00-00.lyshl.mongodb.net:27017,clustererr-shard-00-01.lyshl.mongodb.net:27017,clustererr-shard-00-02.lyshl.mongodb.net:27017/staging?ssl=true&replicaSet=atlas-9yt0oe-shard-0&authSource=admin&retryWrites=true&w=majority`,
  },
  TEST: {
    MONGO_URI: `mongodb://${process.env.MONGO_USER}:${process.env.MONGO_PASSWORD}@clustererr-shard-00-00.lyshl.mongodb.net:27017,clustererr-shard-00-01.lyshl.mongodb.net:27017,clustererr-shard-00-02.lyshl.mongodb.net:27017/test?ssl=true&replicaSet=atlas-9yt0oe-shard-0&authSource=admin&retryWrites=true&w=majority`,
  },
};
// eslint-disable-next-line no-console
console.log('NODE_ENV:', NODE_ENV);
module.exports = config[NODE_ENV];
