import stream = require('stream');
import split = require('split');

var testStream = new stream.Readable();

testStream.pipe = function <T extends NodeJS.WritableStream>(dest: T) {
    dest.write('This is \r\n new \r\n line');
    return dest;
};

testStream.pipe(split(/(\r?\n)/, null, { maxLength: 20, trailing: false })).on('data', (line: Buffer) => {
    console.log('Line: ' + line.toString('ascii') + '\r\n');
});
