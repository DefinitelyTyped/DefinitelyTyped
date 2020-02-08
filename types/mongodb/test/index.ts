// Test source : https://github.com/mongodb/node-mongodb-native

import * as mongodb from 'mongodb';

export const connectionString = 'mongodb://127.0.0.1:27017/test';

const options: mongodb.MongoClientOptions = {
  authSource: ' ',
  loggerLevel: 'debug',
  w: 1,
  wtimeout: 300,
  j: true,
  bufferMaxEntries: 1000,
  readPreference: true ? mongodb.ReadPreference.NEAREST : 'secondaryPreferred',
  promoteValues: true,
  pkFactory: {},
  poolSize: 1,
  socketOptions: {},
  family: 4,
  reconnectTries: 123456,
  reconnectInterval: 123456,
  ssl: true,
  sslValidate: false,
  checkServerIdentity: true
    ? true
    : (host, cert) => {
        return undefined;
      },
  sslCA: ['str'],
  sslCRL: ['str'],
  sslCert: new Buffer(999),
  sslKey: new Buffer(999),
  sslPass: new Buffer(999),
  promoteBuffers: false,
  useNewUrlParser: false,
  useUnifiedTopology: false,
  authMechanism: 'SCRAM-SHA-1',
  forceServerObjectId: false,
  promiseLibrary: Promise,
};

mongodb.MongoClient.connect(
  connectionString,
  options,
  (err: mongodb.MongoError, client: mongodb.MongoClient) => {
    if (err) throw err;
    const db = client.db('test');
    const collection = db.collection('test_crud');
    // Let's close the db
    client.close();
  },
);

async function testFunc(): Promise<mongodb.MongoClient> {
  const testClient: mongodb.MongoClient = await mongodb.connect(connectionString);
  return testClient;
}

mongodb.connect(
  connectionString,
  (err: mongodb.MongoError, client: mongodb.MongoClient) => {},
);
mongodb.connect(
  connectionString,
  options,
  (err: mongodb.MongoError, client: mongodb.MongoClient) => {},
);

// Test other error classes
new mongodb.MongoNetworkError('network error');
new mongodb.MongoParseError('parse error');
