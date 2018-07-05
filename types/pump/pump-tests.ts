import pump = require('pump');
import { createReadStream, createWriteStream } from 'fs';
import { Transform } from 'stream';

const rs = createReadStream('/dev/random');
const ws = createWriteStream('/dev/null');

function toHex() {
    const reverse: Transform = new Transform();

    (reverse as any)._transform = (chunk: any, enc: any, callback: any) => {
        reverse.push(chunk.toString('hex'));
        callback();
    };

    return reverse;
}

let wsClosed = false;
let rsClosed = false;
let callbackCalled = false;

function check() {
    if (wsClosed && rsClosed && callbackCalled) console.log(`pump finished`);
}

ws.on('close', () => {
    wsClosed = true;
    check();
});

rs.on('close', () => {
    rsClosed = true;
    check();
});

pump(rs, toHex(), toHex(), toHex(), ws, () => {
    callbackCalled = true;
    check();
});

setTimeout(() => {
    rs.destroy();
}, 1000);

setTimeout(() => {
    throw new Error('timeout');
}, 5000);

pump(createReadStream('/dev/random'), toHex(), createWriteStream('/dev/null'));

pump([createReadStream('/dev/random'), toHex(), createWriteStream('/dev/null')]);
