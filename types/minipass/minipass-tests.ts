import MiniPass = require('minipass');

const encoding: string | null = null;

new MiniPass();
new MiniPass({objectMode: true});
const mp = new MiniPass({encoding: 'utf8'});

mp.flowing; // $ExpectType boolean
mp.flowing = true; // $ExpectError
mp.bufferLength; // $ExpectType number
mp.bufferLength = 1; // $ExpectError
mp.emittedEnd; // $ExpectType boolean
mp.emittedEnd = true; // $ExpectError
mp.encoding = encoding;
mp.readable; // $ExpectType boolean
mp.writable; // $ExpectType boolean
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
mp.pipe(process.stdout); // $ExpectType WriteStream

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
