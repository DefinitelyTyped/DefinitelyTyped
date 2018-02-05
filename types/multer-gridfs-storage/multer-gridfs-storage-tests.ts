import MulterGridfsStorage = require('multer-gridfs-storage');
import { Db, MongoClient, Server } from "mongodb";

// Exported interfaces
const conf: MulterGridfsStorage.FileConfig = {
    filename: 'name',
    bucketName: 'plants'
};

// Connection promise
const dbPromise = MongoClient.connect('mongodb://yourhost:27017/database');

const server = new Server('localhost', 27017);
const db = new Db('database', server);

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

const opt2: MulterGridfsStorage.UrlStorageOptions = {
    url: 'mongodb://yourhost:27017/database',
    connectionOpts: {},
    file: (req, file) => {
        return {
            metadata: file.mimetype
        };
    }
};

// All options
const dbFileStorage = new MulterGridfsStorage(opt1);

const urlFileStorage = new MulterGridfsStorage(opt2);

// Other properties are optional
const promiseStorage = new MulterGridfsStorage({
    db: dbPromise
});

const dbStorage = new MulterGridfsStorage({
    db
});

const urlStorage = new MulterGridfsStorage({
    url: 'mongodb://yourhost:27017/database'
});

// Extends event emitter
promiseStorage.on('connection', () => {});
urlStorage.addListener('conection', () => {});
dbStorage.removeAllListeners('conection');
