import fs = require('fs');
import stream = require('stream');

import through = require('through');
import through2 = require('through2');
import MultiStream = require('multistream');

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
    () => fs.createWriteStream('.filepath2'),
];

const factory: MultiStream.FactoryStream = cb => {
    cb(null, fs.createReadStream('.filepath'));

    cb(null, fs.createReadStream('.filepath'));
    cb(null, null);
    cb(new Error('some error'), null);

    // @ts-expect-error
    cb(new Error('some error'), fs.createReadStream('.filepath'));
};

// $ExpectType MultiStream
new MultiStream(streams);
new MultiStream(factory);

// $ExpectType MultiStream
MultiStream.obj(streams);
MultiStream.obj(factory);

// @ts-expect-error
new MultiStream([writable]);
