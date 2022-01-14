import * as lz4 from 'lz4';
import * as fs from 'fs';

const readStream = fs.createReadStream('test.lz4');
const writeStream = fs.createWriteStream('test');

// test type exports
type Encoder = lz4.Encoder;
type EncoderConstructor = lz4.EncoderConstructor;
type EncoderOptions = lz4.EncoderOptions;
type Decoder = lz4.Decoder;
type DecoderConstructor = lz4.DecoderConstructor;
type DecoderOptions = lz4.DecoderOptions;

const encoder = new lz4.createEncoderStream(); // $ExpectType Encoder
lz4.createEncoderStream(); // $ExpectType Encoder
lz4.createEncoderStream({ blockChecksum: true }); // $ExpectType Encoder
lz4.createEncoderStream({ blockIndependence: true }); // $ExpectType Encoder
lz4.createEncoderStream({ blockMaxSize: 1 }); // $ExpectType Encoder
lz4.createEncoderStream({ dict: true }); // $ExpectType Encoder
lz4.createEncoderStream({ dictId: 1 }); // $ExpectType Encoder
lz4.createEncoderStream({ highCompression: true }); // $ExpectType Encoder
lz4.createEncoderStream({ streamChecksum: true }); // $ExpectType Encoder
lz4.createEncoderStream({ streamSize: true }); // $ExpectType Encoder

lz4.encode(Buffer.from('')); // $ExpectType Buffer
lz4.encode(Buffer.from(''), { blockChecksum: true }); // $ExpectType Buffer
lz4.encode(Buffer.from(''), { blockIndependence: true }); // $ExpectType Buffer
lz4.encode(Buffer.from(''), { blockMaxSize: 1 }); // $ExpectType Buffer
lz4.encode(Buffer.from(''), { dict: true }); // $ExpectType Buffer
lz4.encode(Buffer.from(''), { dictId: 1 }); // $ExpectType Buffer
lz4.encode(Buffer.from(''), { highCompression: true }); // $ExpectType Buffer
lz4.encode(Buffer.from(''), { streamChecksum: true }); // $ExpectType Buffer
lz4.encode(Buffer.from(''), { streamSize: true }); // $ExpectType Buffer

encoder.addListener('data', data => {
    data; // $ExpectType Buffer
});
encoder.on('data', data => {
    data; // $ExpectType Buffer
});
encoder.once('data', data => {
    data; // $ExpectType Buffer
});
encoder.prependListener('data', data => {
    data; // $ExpectType Buffer
});
encoder.prependOnceListener('data', data => {
    data; // $ExpectType Buffer
});
encoder.removeListener('data', data => {
    data; // $ExpectType Buffer
});
encoder.off('data', data => {
    data; // $ExpectType Buffer
});

const decoder = new lz4.createDecoderStream(); // $ExpectType Decoder
lz4.createDecoderStream(); // $ExpectType Decoder
lz4.createDecoderStream({ useJS: true }); // $ExpectType Decoder

lz4.decode(Buffer.from('')); // $ExpectType Buffer
lz4.decode(Buffer.from(''), { useJS: true }); // $ExpectType Buffer

decoder.addListener('data', data => {
    data; // $ExpectType Buffer
});
decoder.on('data', data => {
    data; // $ExpectType Buffer
});
decoder.once('data', data => {
    data; // $ExpectType Buffer
});
decoder.prependListener('data', data => {
    data; // $ExpectType Buffer
});
decoder.prependOnceListener('data', data => {
    data; // $ExpectType Buffer
});
decoder.removeListener('data', data => {
    data; // $ExpectType Buffer
});
decoder.off('data', data => {
    data; // $ExpectType Buffer
});

readStream.pipe(encoder).pipe(writeStream);
readStream.pipe(decoder).pipe(writeStream);

lz4.decodeBlock(Buffer.from(''), Buffer.from('')); // $ExpectType number
lz4.decodeBlock(Buffer.from(''), Buffer.from(''), 1); // $ExpectType number
lz4.decodeBlock(Buffer.from(''), Buffer.from(''), 1, 1); // $ExpectType number

lz4.encodeBound(100); // $ExpectType number

lz4.encodeBlock(Buffer.from(''), Buffer.from('')); // $ExpectType number
lz4.encodeBlock(Buffer.from(''), Buffer.from(''), 1); // $ExpectType number
lz4.encodeBlock(Buffer.from(''), Buffer.from(''), 1, 1); // $ExpectType number

lz4.encodeBlockHC(Buffer.from(''), Buffer.from('')); // $ExpectType number

let data =
    'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.';
data += data;
const input = Buffer.from(data);
let output = Buffer.alloc(lz4.encodeBound(input.length));

const compressedSize = lz4.encodeBlock(input, output);
output = output.slice(0, compressedSize);

console.log('compressed data', output);

let uncompressed = Buffer.alloc(input.length);
const uncompressedSize = lz4.decodeBlock(output, uncompressed);
uncompressed = uncompressed.slice(0, uncompressedSize);

console.log('uncompressed data', uncompressed);
