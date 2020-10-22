// Samples from:
// https://github.com/aheckmann/gridfs-stream

import fs = require('fs');
import mongo = require('mongodb');
import Grid = require('gridfs-stream');

// create or use an existing mongodb-native db instance
var db = new mongo.Db('gridfs-stream-test', new mongo.Server("127.0.0.1", 27017));
var gfs = Grid(db, mongo);

// streaming to gridfs
var writestream = gfs.createWriteStream({
    filename: 'my_file.txt'
});
fs.createReadStream('blob.txt').pipe(writestream);

// streaming from gridfs
var readstream = gfs.createReadStream({
    filename: 'my_file.txt'
});

//error handling, e.g. file does not exist
readstream.on('error', function (err: any) {
    console.log('An error occurred!', err);
    throw err;
});

var bufs: Array<any> = [];
readstream.on('data', function(d: any){ bufs.push(d); });
readstream.on('end', function() {
    var buf = Buffer.concat(bufs);
});
