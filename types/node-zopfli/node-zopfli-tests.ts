import * as Zopfli from 'node-zopfli';
import * as fs from 'fs';

const opts: Zopfli.Options = {
    verbose: true,
    numiterations: 1
};
const input: Buffer = Buffer.from('foo');
const read = fs.createReadStream('foo');
const write = fs.createWriteStream('foo');

function cb(e: Error, b: Buffer): void {}
function then(b: Buffer): void {}

Zopfli.zlib(input, cb);
Zopfli.zlib(input, opts, cb);
Zopfli.zlib(input, opts).then(then);
Zopfli.zlib(input).then(then);

Zopfli.gzip(input, cb);
Zopfli.gzip(input, opts, cb);
Zopfli.gzip(input, opts).then(then);
Zopfli.gzip(input).then(then);

Zopfli.deflate(input, cb);
Zopfli.deflate(input, opts, cb);
Zopfli.deflate(input, opts).then(then);
Zopfli.deflate(input).then(then);

Zopfli.compress(input, 'zlib', cb);
Zopfli.compress(input, 'zlib', opts, cb);
Zopfli.compress(input, 'zlib', opts).then(then);
Zopfli.compress(input, 'zlib').then(then);

let output: Buffer = Zopfli.gzipSync(input, {});
output = Zopfli.gzipSync(input, opts);

output = Zopfli.deflateSync(input, {});
output = Zopfli.deflateSync(input, opts);

output = Zopfli.zlibSync(input, {});
output = Zopfli.zlibSync(input, opts);

read.pipe(Zopfli.createGzip()).pipe(write);
read.pipe(Zopfli.createGzip(opts)).pipe(write);

read.pipe(Zopfli.createDeflate()).pipe(write);
read.pipe(Zopfli.createDeflate(opts)).pipe(write);

read.pipe(Zopfli.createZlib()).pipe(write);
read.pipe(Zopfli.createZlib(opts)).pipe(write);
