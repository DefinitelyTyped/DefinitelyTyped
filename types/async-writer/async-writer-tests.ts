
import asyncWriter = require('async-writer');
import stream = require('stream');

class TestStream extends stream.Writable {
    constructor(public output: string) {
        super();
    }
    _write(data: string, encoding: string, callback: Function) {
        this.output += data;
        callback();
    }
}

// Simple usage
function simpleUsage(callback: () => void) {
    var output = '';
    let testStream = new TestStream(output);
    let out = asyncWriter.create(testStream)
    .on('error', (err: Error) => {
        console.error(err);
    })
    .on('finish', () => {
        console.log(testStream.output);
        callback();
    })

    out.write('A');
    out.write('B');
    out.write('C');
    out.end();
}


// Asynchronous, out-of-order writing
function asyncUsage(callback: () => void) {
    var output = '';
    let testStream = new TestStream(output);
    let out = asyncWriter.create(testStream)
    .on('error', (err: Error) => {
        console.error(err);
    })
    .on('finish', () => {
        console.log(testStream.output);
        callback();
    })

    out.write('A');

    let asyncOut = out.beginAsync();
    setTimeout(() => {
        asyncOut.write('B');
        asyncOut.end();
    }, 1000);

    out.write('C');
    out.end();
}

// run test
simpleUsage(() => {
    asyncUsage(() => {
        console.log('DONE');
    });
});
