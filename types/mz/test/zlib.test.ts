import zlib = require('mz/zlib');

const buf = Buffer.alloc(Math.random());

zlib.brotliCompress(buf); // $ExpectType Promise<Buffer>
zlib.brotliCompress(buf, (err, res) => {
	err; // $ExpectType Error | null
	res; // $ExpectType Buffer
});

zlib.brotliDecompress(buf); // $ExpectType Promise<Buffer>
zlib.brotliDecompress(buf, (err, res) => {
	err; // $ExpectType Error | null
	res; // $ExpectType Buffer
});

zlib.deflate(buf); // $ExpectType Promise<Buffer>
zlib.deflate(buf, (err, res) => {
	err; // $ExpectType Error | null
	res; // $ExpectType Buffer
});

zlib.deflateRaw(buf); // $ExpectType Promise<Buffer>
zlib.deflateRaw(buf, (err, res) => {
	err; // $ExpectType Error | null
	res; // $ExpectType Buffer
});

zlib.gzip(buf); // $ExpectType Promise<Buffer>
zlib.gzip(buf, (err, res) => {
	err; // $ExpectType Error | null
	res; // $ExpectType Buffer
});

zlib.gunzip(buf); // $ExpectType Promise<Buffer>
zlib.gunzip(buf, (err, res) => {
	err; // $ExpectType Error | null
	res; // $ExpectType Buffer
});

zlib.inflate(buf); // $ExpectType Promise<Buffer>
zlib.inflate(buf, (err, res) => {
	err; // $ExpectType Error | null
	res; // $ExpectType Buffer
});

zlib.inflateRaw(buf); // $ExpectType Promise<Buffer>
zlib.inflateRaw(buf, (err, res) => {
	err; // $ExpectType Error | null
	res; // $ExpectType Buffer
});

zlib.unzip(buf); // $ExpectType Promise<Buffer>
zlib.unzip(buf, (err, res) => {
	err; // $ExpectType Error | null
	res; // $ExpectType Buffer
});
