const NODE_ENV = process.env.NODE_ENV || 'TEST';

const config = {
  PRODUCTION: {
    MONGO_URI: `mongodb+srv://${process.env.MONGO_USER}:${process.env.MONGO_PASSWORD}@clustererr.lyshl.mongodb.net/production?authSource=admin&replicaSet=atlas-9yt0oe-shard-0&readPreference=primary&appname=MongoDB%20Compass&ssl=true`,
  },
  STAGING: {
    MONGO_URI: `mongodb+srv://${process.env.MONGO_USER}:${process.env.MONGO_PASSWORD}@clustererr.lyshl.mongodb.net/staging?authSource=admin&replicaSet=atlas-9yt0oe-shard-0&readPreference=primary&appname=MongoDB%20Compass&ssl=true`,
  },
  TEST: {
    MONGO_URI: `mongodb+srv://${process.env.MONGO_USER}:${process.env.MONGO_PASSWORD}@clustererr.lyshl.mongodb.net/test?authSource=admin&replicaSet=atlas-9yt0oe-shard-0&readPreference=primary&appname=MongoDB%20Compass&ssl=true`,
  },
};
// eslint-disable-next-line no-console
console.log('NODE_ENV:', NODE_ENV);
module.exports = config[NODE_ENV];
