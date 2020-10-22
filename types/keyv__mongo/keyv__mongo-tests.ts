import Keyv = require('keyv');
import KeyvMongo = require('@keyv/mongo');

new Keyv('mongodb://user:pass@localhost:27017/dbname', { collection: 'cache' });

new KeyvMongo({ uri: 'mongodb://user:pass@localhost:27017/dbname' });
new KeyvMongo({ url: 'mongodb://user:pass@localhost:27017/dbname' });
new KeyvMongo({ collection: 'cache' });
new KeyvMongo('mongodb://user:pass@localhost:27017/dbname');

const mongo = new KeyvMongo('mongodb://user:pass@localhost:27017/dbname');
new Keyv({ store: mongo });
