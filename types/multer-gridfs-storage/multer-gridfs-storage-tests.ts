import MulterGridfsStorage = require('multer-gridfs-storage');
import { Db, MongoClient } from 'mongodb';
import * as mongoose from 'mongoose';

// Exported interfaces
const conf: MulterGridfsStorage.FileConfig = {
    filename: 'name',
    bucketName: 'plants'
};

// Mongoose promise
const mongoosePromise = mongoose.connect('mongodb://yourhost:27017/database');
const mgConnectionPromise = mongoose
    .connect('mongodb://yourhost:27017/database')
    .then(instance => instance.connection);

declare const db: Db;

// Database instance
const opt1: MulterGridfsStorage.DbStorageOptions = {
    db,
    file: (req, file) => {
        return new Promise((resolve) => {
            resolve({
                filename: file.originalname
            });
        });
    }
};

const dbFileStorage = new MulterGridfsStorage(opt1);

const opt2: MulterGridfsStorage.DbStorageOptions = {
    db: mongoosePromise,
    file: (req, file) => {
        return {
            disableMd5: true
        };
    }
};

const opt3: MulterGridfsStorage.DbStorageOptions = {
    db: mgConnectionPromise,
    file: (req, file) => {
        return 5;
    }
};

const mongooseStorage = new MulterGridfsStorage(opt2);
const mgConnectionStorage = new MulterGridfsStorage(opt3);

// Url based instance
const opt4: MulterGridfsStorage.UrlStorageOptions = {
    url: 'mongodb://yourhost:27017/database',
    options: {},
    file: (req, file) => {
        return {
            metadata: file.mimetype
        };
    }
};

const urlFileStorage = new MulterGridfsStorage(opt4);

// Cache
const opt5: MulterGridfsStorage.UrlStorageOptions = {
    url: 'mongodb://yourhost:27017/database',
    cache: 'cache'
};

// Generators
const opt6: MulterGridfsStorage.UrlStorageOptions = {
    url: 'mongodb://yourhost:27017/database',
    *file(req, file) {
        yield {
            metadata: file.mimetype
        };
    }
};

const cachedStorage = new MulterGridfsStorage(opt5);

// Connection promise
const clientPromise = MongoClient.connect('mongodb://yourhost:27017/database');
const dbPromise = clientPromise.then(client => client.db('database'));
// Other properties are optional
const promiseStorage = new MulterGridfsStorage({db: dbPromise});
const clientPromiseStorage = new MulterGridfsStorage({db: dbPromise, client: clientPromise});

const dbStorage = new MulterGridfsStorage({db});

const urlStorage = new MulterGridfsStorage({
    url: 'mongodb://yourhost:27017/database'
});

// Ready method
clientPromiseStorage.ready().then(result => {
    const db = result.db;
    const client = result.client;
});

MulterGridfsStorage.generateBytes().then(result => {
    const filename = result.filename;
    console.log(result);
});

// Extends event emitter
promiseStorage.on('connection', () => {
});
urlStorage.addListener('conection', () => {
});
dbStorage.removeAllListeners('conection');

MulterGridfsStorage.cache.connections();
