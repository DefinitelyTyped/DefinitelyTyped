import * as stream from 'stream';
import duplexer3 = require('duplexer3');

const writable = new stream.Writable({objectMode: true});
const readable = new stream.Readable({objectMode: true});

writable._write = (input, encoding, done) => {
    if (readable.push(input)) {
        done();
    } else {
        readable.once('drain', done as (...args: any[]) => void);
    }
};

readable._read = n => {
    // no-op
};

// simulate the readable thing closing after a bit
writable.once('finish', () => {
    setTimeout(() => {
        readable.push(null);
    }, 500);
});

const duplex = duplexer3(writable, readable);
const duplex2 = duplexer3({bubbleErrors: true, allowHalfOpen: true}, writable, readable);

duplex.on('data', e => {
    console.log('got data', JSON.stringify(e));
});

duplex.on('finish', () => {
    console.log('got finish event');
});

duplex.on('end', () => {
    console.log('got end event');
});

duplex.write('oh, hi there', () => {
    console.log('finished writing');
});

duplex.end(() => {
    console.log('finished ending');
});
