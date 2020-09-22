import bsplit = require('binary-split');

const output = new Array<Buffer>();
const splitter = bsplit('*snip*');
splitter.on('data', (chunk: Buffer) => {
    output.push(chunk);
});
splitter.on('end', () => {
    if (output.length !== 2 || output[0].toString('utf8') !== 'A' || output[1].toString('utf8') !== 'B') {
        throw new Error('Test failed');
    }
});

const input = Buffer.from('A*snip*B');
splitter.write(input);
splitter.end();
