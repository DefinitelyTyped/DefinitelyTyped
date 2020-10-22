import toArray = require('stream-to-array');
import * as stream from 'stream';
import * as util from 'util';

const stream1 = new stream.Readable();
toArray(stream1); // $ExpectType Promise<any[]>
toArray(stream1, (err, arr) => {
    err; // $ExpectType any
    arr; // $ExpectType any[]
});

const stream2: stream.Readable & { toArray?: typeof toArray } = new stream.Readable();
stream2.toArray = toArray;
stream2.toArray(); // $ExpectType Promise<any[]>
stream2.toArray((err, arr) => {
    err; // $ExpectType any
    arr; // $ExpectType any[]
});

toArray(stream1)
    .then(parts => {
        const buffers = parts
            .map(part => util.isBuffer(part) ? part : Buffer.from(part));
        return Buffer.concat(buffers);
    });
