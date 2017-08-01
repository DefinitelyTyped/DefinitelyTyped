import * as MulterGridfsStorage from 'multer-gridfs-storage';
import {Db, MongoClient, Server} from "mongodb";

// Exported interfaces
let opt1: MulterGridfsStorage.DbStorageOptions;
let opt2: MulterGridfsStorage.UrlStorageOptions;
let conf: MulterGridfsStorage.FileConfig;

// Connection promise
let dbPromise = MongoClient.connect('url');

let server = new Server('localhost', 27017);
let db = new Db('database', server);

// All options
let dbFileStorage = new MulterGridfsStorage({
    db: db,
    file: function(req, file) {
        return 'a';
    }
});

let urlFileStorage = new MulterGridfsStorage({
    url: 'mongodb://yourhost:27017/database',
    connectionOpts: {},
    file: (req, file) => {
        return {};
    }
});


// Other properties are optional
let promiseStorage = new MulterGridfsStorage({
    db: dbPromise
});

let dbStorage = new MulterGridfsStorage({
    db: db
});

let urlStorage = new MulterGridfsStorage({
    url: 'mongodb://yourhost:27017/database'
});

function noop() {
}

// Extends event emitter
promiseStorage.on('connection', noop);
urlStorage.addListener('conection', noop);
dbStorage.removeAllListeners('conection');
