import fs = require('fs');
import stream = require('stream');

import through = require('through');
import through2 = require('through2');
import multistream = require('multistream');

const readable = new stream.Readable();
const writable = new stream.Writable();
const transform = new stream.Transform();
const duplex = new stream.Duplex();
const pass = new stream.PassThrough();

const streams = [
    readable,
    transform,
    duplex,
    pass,
    through(),
    through2(),
    fs.createReadStream('.filepath'),
    () => fs.createWriteStream('.filepath2')
];

const factory: multistream.FactoryStream = (cb) => {
    if (1 === 1) return cb(null, fs.createReadStream('.filepath'));

    cb(null, fs.createReadStream('.filepath'));
    cb(null, null);
    cb(new Error('some error'), null);

    // $ExpectError
    cb(new Error('some error'), fs.createReadStream('.filepath'));
};

// $ExpectType ReadableStream
multistream(streams);
multistream(factory);

// $ExpectType ReadableStream
multistream.obj(streams);
multistream.obj(factory);

// $ExpectError
multistream([writable]);
