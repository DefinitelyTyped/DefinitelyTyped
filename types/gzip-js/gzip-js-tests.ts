import * as gz from 'gzip-js';

const options = {
    level: 3,
    name: 'hello-world.txt',
    timestamp: Date.now() / 1000,
};

const out = Buffer.from(gz.zip('Hello world', options));
console.log(out);

let buf;
buf = Buffer.from(gz.unzip([42, 42, 42]));
buf = Buffer.from(gz.unzip(Buffer.from([42, 42, 42])));
buf = Buffer.from(gz.unzip(new Uint8Array([42, 42, 42])));
console.log(buf.toString());
