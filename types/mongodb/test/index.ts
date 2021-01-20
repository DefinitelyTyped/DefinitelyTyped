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

mongodb.MongoClient.connect(connectionString, options, (err: mongodb.MongoError, client: mongodb.MongoClient) => {
    if (err) throw err;
    const db = client.db('test');
    const collection = db.collection('test_crud');
    // Let's close the db
    client.close();
});

const unifiedTopologyOptions: mongodb.UnifiedTopologyOptions = {
    useUnifiedTopology: true,
    heartbeatFrequencyMS: 20_000,
    localThresholdMS: 10,
    maxIdleTimeMS: 1_000,
    maxPoolSize: 20,
    minPoolSize: 5,
    serverSelectionTimeoutMS: 20_000,
    waitQueueTimeoutMS: 15,
};

new mongodb.MongoClient('mongodb://localhost:27017', unifiedTopologyOptions);

async function testFunc(): Promise<mongodb.MongoClient> {
    const testClient: mongodb.MongoClient = await mongodb.connect(connectionString);
    return testClient;
}

mongodb.connect(connectionString, (err: mongodb.MongoError, client: mongodb.MongoClient) => {
    err.hasErrorLabel('label'); // $ExpectType boolean
});
mongodb.connect(connectionString, options, (err: mongodb.MongoError, client: mongodb.MongoClient) => {});

// TLS
const userName = '';
const password = '';
const url = `mongodb://${userName}:${password}@server:27017?authMechanism=MONGODB-X509&tls=true`;
const client = new mongodb.MongoClient(url, {
    tls: true,
    tlsAllowInvalidHostnames: true,
    tlsCAFile: `${__dirname}/certs/ca.pem`,
    tlsCertificateKeyFile: `${__dirname}/certs/x509/client.pem`,
    tlsCertificateKeyFilePassword: '10gen',
});
console.log(client.readPreference.mode, client.writeConcern.w);

// Test other error classes
new mongodb.MongoNetworkError('network error');
new mongodb.MongoParseError('parse error');

// Streams
const gridFSBucketTests = (bucket: mongodb.GridFSBucket) => {
    const openUploadStream = bucket.openUploadStream('file.dat');
    openUploadStream.on('close', () => {});
    openUploadStream.on('end', () => {});
    openUploadStream.abort(); // $ExpectType void
    openUploadStream.abort(() => {
        openUploadStream.removeAllListeners();
    });
    openUploadStream.abort(error => {
        error; // $ExpectType MongoError
    });
    openUploadStream.abort((error, result) => {});
};

// Compression
const compressedClient = new mongodb.MongoClient(url, { compression: { compressors: ['zlib', 'snappy'] } });
