import * as MulterGridfsStorage from 'multer-gridfs-storage';
import {Grid} from "gridfs-stream";

// Exported interfaces
let opt1: MulterGridfsStorage.GfsStorageOptions;
let opt2: MulterGridfsStorage.UrlStorageOptions;

// All options
let gfsCtr = new MulterGridfsStorage({
	gfs: new Grid(),
	filename: (req, file, cb) => cb(null, ''),
	chunkSize: (req, file, cb) => cb(null, 1),
	identifier: (req, file, cb) => cb(null, ''),
	metadata: (req, file, cb) => cb(new Error(), null),
	logLevel: 'all',
	root: (req, file, cb) => cb(null, 'unicorns')
});

let urlCtr = new MulterGridfsStorage({
	url: '',
	filename: (req, file, cb) => cb(null, ''),
	chunkSize: (req, file, cb) => cb(null, 1),
	identifier: (req, file, cb) => cb(null, ''),
	metadata: (req, file, cb) => cb(new Error(), {}),
	logLevel: 'all',
	root: (req, file, cb) => cb(null, '')
});

// Other properties are optional
let gfsOnly = new MulterGridfsStorage({
	gfs: new Grid()
});

let urlOnly = new MulterGridfsStorage({
	url: ''
});

function noop() {
}
// Extends event emitter
gfsCtr.on('connection', noop);
urlCtr.addListener('conection', noop);
gfsOnly.removeAllListeners('conection');
