import {
    deflate,
    inflate,
    inflateSync,
    deflateSync,
    deflateRaw,
    inflateRaw,
    inflateRawSync,
    deflateRawSync,
    gunzip,
    gzip,
    gunzipSync,
    gzipSync,
    unzip,
    unzipSync,
    constants,
    createBrotliCompress,
    BrotliOptions,
    createBrotliDecompress,
    BrotliCompress,
    BrotliDecompress,
    brotliCompress,
    brotliDecompressSync,
    brotliDecompress,
} from 'node:zlib';
import { promisify } from 'node:util';

const compressMe = new Buffer("some data");
const compressMeString = "compress me!";

// Deflate / Inflate

deflate(compressMe, (err: Error | null, result: Buffer) => inflate(result, (err: Error | null, result: Buffer) => result));
deflate(
    compressMe,
    { finishFlush: constants.Z_SYNC_FLUSH },
    (err: Error | null, result: Buffer) => inflate(
        result,
        { finishFlush: constants.Z_SYNC_FLUSH },
        (err: Error | null, result: Buffer) => result
    )
);
deflate(compressMeString, (err: Error | null, result: Buffer) => inflate(result, (err: Error | null, result: Buffer) => result));
deflate(
    compressMeString,
    { finishFlush: constants.Z_SYNC_FLUSH },
    (err: Error | null, result: Buffer) => inflate(
        result,
        { finishFlush: constants.Z_SYNC_FLUSH },
        (err: Error | null, result: Buffer) => result
    )
);
const inflated = inflateSync(deflateSync(compressMe));
const inflatedString = inflateSync(deflateSync(compressMeString));

deflateRaw(compressMe, (err: Error | null, result: Buffer) => inflateRaw(result, (err: Error | null, result: Buffer) => result));
deflateRaw(
    compressMe,
    { finishFlush: constants.Z_SYNC_FLUSH },
    (err: Error | null, result: Buffer) => inflateRaw(
        result, { finishFlush: constants.Z_SYNC_FLUSH },
        (err: Error | null, result: Buffer) => result
    )
);
deflateRaw(compressMeString, (err: Error | null, result: Buffer) => inflateRaw(result, (err: Error | null, result: Buffer) => result));
deflateRaw(
    compressMeString,
    { finishFlush: constants.Z_SYNC_FLUSH },
    (err: Error | null, result: Buffer) => inflateRaw(result, { finishFlush: constants.Z_SYNC_FLUSH }, (err: Error | null, result: Buffer) => result),
);
const inflatedRaw: Buffer = inflateRawSync(deflateRawSync(compressMe));
const inflatedRawString: Buffer = inflateRawSync(deflateRawSync(compressMeString));

// gzip

gzip(compressMe, (err: Error | null, result: Buffer) => gunzip(result, (err: Error | null, result: Buffer) => result));
gzip(
    compressMe,
    { finishFlush: constants.Z_SYNC_FLUSH },
    (err: Error | null, result: Buffer) => gunzip(
        result, { finishFlush: constants.Z_SYNC_FLUSH },
        (err: Error | null, result: Buffer) => result
    )
);
const gunzipped: Buffer = gunzipSync(gzipSync(compressMe));

unzip(compressMe, (err: Error | null, result: Buffer) => result);
unzip(compressMe, { finishFlush: constants.Z_SYNC_FLUSH }, (err: Error | null, result: Buffer) => result);
const unzipped: Buffer = unzipSync(compressMe);

const bOpts: BrotliOptions = {
    chunkSize: 123,
    flush: 123123,
    params: {
        [constants.BROTLI_PARAM_LARGE_WINDOW]: true,
        [constants.BROTLI_PARAM_NPOSTFIX]: 123,
    },
    finishFlush: 123123,
};

// brotli

let bC: BrotliCompress = createBrotliCompress();
bC = createBrotliCompress(bOpts);
let bD: BrotliDecompress = createBrotliDecompress();
bD = createBrotliDecompress(bOpts);
// gzip

brotliCompress(compressMe, (err: Error | null, result: Buffer) => gunzip(result, (err: Error | null, result: Buffer) => result));
brotliCompress(
    compressMe,
    { finishFlush: constants.BROTLI_OPERATION_FINISH },
    (err: Error | null, result: Buffer) => gunzip(
        result, { finishFlush: constants.Z_SYNC_FLUSH },
        (err: Error | null, result: Buffer) => result
    )
);
const brotlied: Buffer = brotliDecompressSync(brotliDecompressSync(compressMe));

brotliDecompress(compressMe, (err: Error | null, result: Buffer) => result);
brotliDecompress(compressMe, { finishFlush: constants.BROTLI_OPERATION_FINISH }, (err: Error | null, result: Buffer) => result);

{
    // $ExpectType (buffer: InputType, options?: BrotliOptions | undefined) => Promise<Buffer>
    const pBrotliCompress = promisify(brotliCompress);
    // $ExpectType (buffer: InputType, options?: BrotliOptions | undefined) => Promise<Buffer>
    const pBrotliDecompress = promisify(brotliDecompress);
    // $ExpectType (buffer: InputType, options?: ZlibOptions | undefined) => Promise<Buffer>
    const pDeflate = promisify(deflate);
    // $ExpectType (buffer: InputType, options?: ZlibOptions | undefined) => Promise<Buffer>
    const pDeflateRaw = promisify(deflateRaw);
    // $ExpectType (buffer: InputType, options?: ZlibOptions | undefined) => Promise<Buffer>
    const pGzip = promisify(gzip);
    // $ExpectType (buffer: InputType, options?: ZlibOptions | undefined) => Promise<Buffer>
    const pGunzip = promisify(gunzip);
    // $ExpectType (buffer: InputType, options?: ZlibOptions | undefined) => Promise<Buffer>
    const pInflate = promisify(inflate);
    // $ExpectType (buffer: InputType, options?: ZlibOptions | undefined) => Promise<Buffer>
    const pInflateRaw = promisify(inflateRaw);
    // $ExpectType (buffer: InputType, options?: ZlibOptions | undefined) => Promise<Buffer>
    const pUnzip = promisify(unzip);

    (async () => {
        await pBrotliCompress(Buffer.from('buf')); // $ExpectType Buffer
        await pBrotliCompress(Buffer.from('buf'), { flush: constants.Z_NO_FLUSH }); // $ExpectType Buffer
        await pBrotliDecompress(Buffer.from('buf')); // $ExpectType Buffer
        await pBrotliDecompress(Buffer.from('buf'), { flush: constants.Z_NO_FLUSH }); // $ExpectType Buffer
        await pDeflate(Buffer.from('buf')); // $ExpectType Buffer
        await pDeflate(Buffer.from('buf'), { flush: constants.Z_NO_FLUSH }); // $ExpectType Buffer
        await pDeflateRaw(Buffer.from('buf')); // $ExpectType Buffer
        await pDeflateRaw(Buffer.from('buf'), { flush: constants.Z_NO_FLUSH }); // $ExpectType Buffer
        await pGzip(Buffer.from('buf')); // $ExpectType Buffer
        await pGzip(Buffer.from('buf'), { flush: constants.Z_NO_FLUSH }); // $ExpectType Buffer
        await pGunzip(Buffer.from('buf')); // $ExpectType Buffer
        await pGunzip(Buffer.from('buf'), { flush: constants.Z_NO_FLUSH }); // $ExpectType Buffer
        await pInflate(Buffer.from('buf')); // $ExpectType Buffer
        await pInflate(Buffer.from('buf'), { flush: constants.Z_NO_FLUSH }); // $ExpectType Buffer
        await pInflateRaw(Buffer.from('buf')); // $ExpectType Buffer
        await pInflateRaw(Buffer.from('buf'), { flush: constants.Z_NO_FLUSH }); // $ExpectType Buffer
        await pUnzip(Buffer.from('buf')); // $ExpectType Buffer
        await pUnzip(Buffer.from('buf'), { flush: constants.Z_NO_FLUSH }); // $ExpectType Buffer
    })();
}
