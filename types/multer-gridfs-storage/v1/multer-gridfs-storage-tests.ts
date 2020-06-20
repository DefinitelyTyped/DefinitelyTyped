import MulterGridfsStorage = require('multer-gridfs-storage');
import { Grid } from "gridfs-stream";

// Exported interfaces
declare const opt1: MulterGridfsStorage.GfsStorageOptions;
declare const opt2: MulterGridfsStorage.UrlStorageOptions;

// All options
const gfsCtr = new MulterGridfsStorage({
    gfs: new Grid(),
    filename: (req, file, cb) => cb(null, ''),
    chunkSize: (req, file, cb) => cb(null, 1),
    identifier: (req, file, cb) => cb(null, ''),
    metadata: (req, file, cb) => cb(new Error(), null),
    logLevel: 'all',
    root: (req, file, cb) => cb(null, 'unicorns')
});

const urlCtr = new MulterGridfsStorage({
    url: '',
    filename: (req, file, cb) => cb(null, ''),
    chunkSize: (req, file, cb) => cb(null, 1),
    identifier: (req, file, cb) => cb(null, ''),
    metadata: (req, file, cb) => cb(new Error(), {}),
    logLevel: 'all',
    root: (req, file, cb) => cb(null, '')
});

// Other properties are optional
const gfsOnly = new MulterGridfsStorage({
    gfs: new Grid()
});

const urlOnly = new MulterGridfsStorage({
    url: ''
});

function noop() {
}
// Extends event emitter
gfsCtr.on('connection', noop);
urlCtr.addListener('conection', noop);
gfsOnly.removeAllListeners('conection');
