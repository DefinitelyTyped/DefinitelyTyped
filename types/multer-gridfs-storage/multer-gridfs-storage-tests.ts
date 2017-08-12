import * as MulterGridfsStorage from 'multer-gridfs-storage';
import { Db, MongoClient, Server } from "mongodb";

// Exported interfaces
let opt1: MulterGridfsStorage.DbStorageOptions;
let opt2: MulterGridfsStorage.UrlStorageOptions;
let conf: MulterGridfsStorage.FileConfig;

conf = {
    filename: 'name',
    bucketName: 'plants'
};

// Connection promise
let dbPromise = MongoClient.connect('mongodb://yourhost:27017/database');

let server = new Server('localhost', 27017);
let db = new Db('database', server);

opt1 = {
    db,
    file: (req, file) => {
        return new Promise((resolve) => {
            resolve({
                filename: file.originalname
            });
        });
    }
};

opt2 = {
    url: 'mongodb://yourhost:27017/database',
    connectionOpts: {},
    file: (req, file) => {
        return {
            metadata: file.mimetype
        };
    }
};

// All options
let dbFileStorage = new MulterGridfsStorage(opt1);

let urlFileStorage = new MulterGridfsStorage(opt2);

// Other properties are optional
let promiseStorage = new MulterGridfsStorage({
    db: dbPromise
});

let dbStorage = new MulterGridfsStorage({
    db
});

let urlStorage = new MulterGridfsStorage({
    url: 'mongodb://yourhost:27017/database'
});

// Extends event emitter
promiseStorage.on('connection', () => {});
urlStorage.addListener('conection', () => {});
dbStorage.removeAllListeners('conection');
