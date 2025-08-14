import zlib = require("mz/zlib");

const buf = Buffer.alloc(Math.random());

zlib.brotliCompress(buf); // $ExpectType Promise<Buffer> || Promise<Buffer<ArrayBufferLike>>
zlib.brotliCompress(buf, (err, res) => {
    err; // $ExpectType Error | null
    res; // $ExpectType Buffer || Buffer<ArrayBufferLike>
});

zlib.brotliDecompress(buf); // $ExpectType Promise<Buffer> || Promise<Buffer<ArrayBufferLike>>
zlib.brotliDecompress(buf, (err, res) => {
    err; // $ExpectType Error | null
    res; // $ExpectType Buffer || Buffer<ArrayBufferLike>
});

zlib.deflate(buf); // $ExpectType Promise<Buffer> || Promise<Buffer<ArrayBufferLike>>
zlib.deflate(buf, (err, res) => {
    err; // $ExpectType Error | null
    res; // $ExpectType Buffer || Buffer<ArrayBufferLike>
});

zlib.deflateRaw(buf); // $ExpectType Promise<Buffer> || Promise<Buffer<ArrayBufferLike>>
zlib.deflateRaw(buf, (err, res) => {
    err; // $ExpectType Error | null
    res; // $ExpectType Buffer || Buffer<ArrayBufferLike>
});

zlib.gzip(buf); // $ExpectType Promise<Buffer> || Promise<Buffer<ArrayBufferLike>>
zlib.gzip(buf, (err, res) => {
    err; // $ExpectType Error | null
    res; // $ExpectType Buffer || Buffer<ArrayBufferLike>
});

zlib.gunzip(buf); // $ExpectType Promise<Buffer> || Promise<Buffer<ArrayBufferLike>>
zlib.gunzip(buf, (err, res) => {
    err; // $ExpectType Error | null
    res; // $ExpectType Buffer || Buffer<ArrayBufferLike>
});

zlib.inflate(buf); // $ExpectType Promise<Buffer> || Promise<Buffer<ArrayBufferLike>>
zlib.inflate(buf, (err, res) => {
    err; // $ExpectType Error | null
    res; // $ExpectType Buffer || Buffer<ArrayBufferLike>
});

zlib.inflateRaw(buf); // $ExpectType Promise<Buffer> || Promise<Buffer<ArrayBufferLike>>
zlib.inflateRaw(buf, (err, res) => {
    err; // $ExpectType Error | null
    res; // $ExpectType Buffer || Buffer<ArrayBufferLike>
});

zlib.unzip(buf); // $ExpectType Promise<Buffer> || Promise<Buffer<ArrayBufferLike>>
zlib.unzip(buf, (err, res) => {
    err; // $ExpectType Error | null
    res; // $ExpectType Buffer || Buffer<ArrayBufferLike>
});
