import MiniPass = require('minipass');

const encoding: string | null = null;

new MiniPass();
new MiniPass({objectMode: true});
const mp = new MiniPass({encoding: 'utf8'});

mp.flowing; // $ExpectType boolean
// @ts-expect-error
mp.flowing = true;
mp.bufferLength; // $ExpectType number
// @ts-expect-error
mp.bufferLength = 1;
mp.emittedEnd; // $ExpectType boolean
// @ts-expect-error
mp.emittedEnd = true;
mp.encoding = encoding;
mp.readable; // $ExpectType boolean
mp.writable; // $ExpectType boolean
mp.objectMode; // $ExpectType boolean
mp.paused; // $ExpectType boolean
mp.destroyed; // $ExpectType boolean
mp.buffer; // $ExpectType any
mp.pipes; // $ExpectType any

mp.setEncoding(encoding);
mp.read(); // $ExpectType any
mp.read(1);
mp.write('foo'); // $ExpectType boolean
mp.write('foo', () => {});
mp.write('foo', encoding);
mp.write('foo', encoding, () => {});
mp.end();
mp.end(() => {});
mp.end('bar');
mp.end(new Buffer('bar'));
mp.end('bar', () => {});
mp.end(new Buffer('bar'), () => {});
mp.end('bar', encoding);
mp.end('bar', encoding, () => {});
mp.resume();
mp.pause();
mp.pipe(process.stdout); // $ExpectType WriteStream & { fd: 1; }

mp.promise().then(() => {
    // stream is finished
}, er => {
    // stream emitted an error
});

mp.collect().then(all => {
    all;  // $ExpectType any[]
    // all is an array of all the data emitted
    // encoding is supported in this case, so
    // so the result will be a collection of strings if
    // an encoding is specified, or buffers/objects if not.
    //
    // In an async function, you may do
    // const data = await stream.collect()
});

mp.concat().then(onebigchunk => {
    onebigchunk;  // $ExpectType string | Buffer
    // onebigchunk is a string if the stream
    // had an encoding set, or a buffer otherwise.
});

mp.on('data', chunk => {
    chunk; // $ExpectType any
});
mp.on('readable', () => {});
mp.on('drain', () => {});
mp.on('resume', () => {});
mp.on('end', () => {});
mp.on('prefinish', () => {});
mp.on('finish', () => {});
mp.on('close', () => {});
mp.on('foo', (a, b, c) => {});

process.stdin.pipe(mp).pipe(process.stdout);
