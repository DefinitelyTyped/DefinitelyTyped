import { promisify } from "node:util";
import {
    BrotliCompress,
    brotliCompress,
    BrotliDecompress,
    brotliDecompress,
    brotliDecompressSync,
    BrotliOptions,
    constants,
    createBrotliCompress,
    createBrotliDecompress,
    deflate,
    deflateRaw,
    deflateRawSync,
    deflateSync,
    gunzip,
    gunzipSync,
    gzip,
    gzipSync,
    inflate,
    inflateRaw,
    inflateRawSync,
    inflateSync,
    unzip,
    unzipSync,
} from "node:zlib";

const compressMe = new Buffer("some data");
const compressMeString = "compress me!";

// Deflate / Inflate

deflate(
    compressMe,
    (err: Error | null, result: Buffer) => inflate(result, (err: Error | null, result: Buffer) => result),
);
deflate(
    compressMe,
    { finishFlush: constants.Z_SYNC_FLUSH },
    (err: Error | null, result: Buffer) =>
        inflate(
            result,
            { finishFlush: constants.Z_SYNC_FLUSH },
            (err: Error | null, result: Buffer) => result,
        ),
);
deflate(
    compressMeString,
    (err: Error | null, result: Buffer) => inflate(result, (err: Error | null, result: Buffer) => result),
);
deflate(
    compressMeString,
    { finishFlush: constants.Z_SYNC_FLUSH },
    (err: Error | null, result: Buffer) =>
        inflate(
            result,
            { finishFlush: constants.Z_SYNC_FLUSH },
            (err: Error | null, result: Buffer) => result,
        ),
);
const inflated = inflateSync(deflateSync(compressMe));
const inflatedString = inflateSync(deflateSync(compressMeString));

deflateRaw(
    compressMe,
    (err: Error | null, result: Buffer) => inflateRaw(result, (err: Error | null, result: Buffer) => result),
);
deflateRaw(
    compressMe,
    { finishFlush: constants.Z_SYNC_FLUSH },
    (err: Error | null, result: Buffer) =>
        inflateRaw(
            result,
            { finishFlush: constants.Z_SYNC_FLUSH },
            (err: Error | null, result: Buffer) => result,
        ),
);
deflateRaw(
    compressMeString,
    (err: Error | null, result: Buffer) => inflateRaw(result, (err: Error | null, result: Buffer) => result),
);
deflateRaw(
    compressMeString,
    { finishFlush: constants.Z_SYNC_FLUSH },
    (err: Error | null, result: Buffer) =>
        inflateRaw(result, { finishFlush: constants.Z_SYNC_FLUSH }, (err: Error | null, result: Buffer) => result),
);
const inflatedRaw: Buffer = inflateRawSync(deflateRawSync(compressMe));
const inflatedRawString: Buffer = inflateRawSync(deflateRawSync(compressMeString));

// gzip

gzip(compressMe, (err: Error | null, result: Buffer) => gunzip(result, (err: Error | null, result: Buffer) => result));
gzip(
    compressMe,
    { finishFlush: constants.Z_SYNC_FLUSH },
    (err: Error | null, result: Buffer) =>
        gunzip(
            result,
            { finishFlush: constants.Z_SYNC_FLUSH },
            (err: Error | null, result: Buffer) => result,
        ),
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

brotliCompress(
    compressMe,
    (err: Error | null, result: Buffer) => gunzip(result, (err: Error | null, result: Buffer) => result),
);
brotliCompress(
    compressMe,
    { finishFlush: constants.BROTLI_OPERATION_FINISH },
    (err: Error | null, result: Buffer) =>
        gunzip(
            result,
            { finishFlush: constants.Z_SYNC_FLUSH },
            (err: Error | null, result: Buffer) => result,
        ),
);
const brotlied: Buffer = brotliDecompressSync(brotliDecompressSync(compressMe));

brotliDecompress(compressMe, (err: Error | null, result: Buffer) => result);
brotliDecompress(
    compressMe,
    { finishFlush: constants.BROTLI_OPERATION_FINISH },
    (err: Error | null, result: Buffer) => result,
);

{
    // $ExpectType (buffer: InputType, options?: BrotliOptions | undefined) => Promise<Buffer> || (buffer: InputType, options?: BrotliOptions | undefined) => Promise<Buffer<ArrayBufferLike>>
    const pBrotliCompress = promisify(brotliCompress);
    // $ExpectType (buffer: InputType, options?: BrotliOptions | undefined) => Promise<Buffer> || (buffer: InputType, options?: BrotliOptions | undefined) => Promise<Buffer<ArrayBufferLike>>
    const pBrotliDecompress = promisify(brotliDecompress);
    // $ExpectType (buffer: InputType, options?: ZlibOptions | undefined) => Promise<Buffer> || (buffer: InputType, options?: ZlibOptions | undefined) => Promise<Buffer<ArrayBufferLike>>
    const pDeflate = promisify(deflate);
    // $ExpectType (buffer: InputType, options?: ZlibOptions | undefined) => Promise<Buffer> || (buffer: InputType, options?: ZlibOptions | undefined) => Promise<Buffer<ArrayBufferLike>>
    const pDeflateRaw = promisify(deflateRaw);
    // $ExpectType (buffer: InputType, options?: ZlibOptions | undefined) => Promise<Buffer> || (buffer: InputType, options?: ZlibOptions | undefined) => Promise<Buffer<ArrayBufferLike>>
    const pGzip = promisify(gzip);
    // $ExpectType (buffer: InputType, options?: ZlibOptions | undefined) => Promise<Buffer> || (buffer: InputType, options?: ZlibOptions | undefined) => Promise<Buffer<ArrayBufferLike>>
    const pGunzip = promisify(gunzip);
    // $ExpectType (buffer: InputType, options?: ZlibOptions | undefined) => Promise<Buffer> || (buffer: InputType, options?: ZlibOptions | undefined) => Promise<Buffer<ArrayBufferLike>>
    const pInflate = promisify(inflate);
    // $ExpectType (buffer: InputType, options?: ZlibOptions | undefined) => Promise<Buffer> || (buffer: InputType, options?: ZlibOptions | undefined) => Promise<Buffer<ArrayBufferLike>>
    const pInflateRaw = promisify(inflateRaw);
    // $ExpectType (buffer: InputType, options?: ZlibOptions | undefined) => Promise<Buffer> || (buffer: InputType, options?: ZlibOptions | undefined) => Promise<Buffer<ArrayBufferLike>>
    const pUnzip = promisify(unzip);

    (async () => {
        await pBrotliCompress(Buffer.from("buf")); // $ExpectType Buffer || Buffer<ArrayBufferLike>
        await pBrotliCompress(Buffer.from("buf"), { flush: constants.Z_NO_FLUSH }); // $ExpectType Buffer || Buffer<ArrayBufferLike>
        await pBrotliDecompress(Buffer.from("buf")); // $ExpectType Buffer || Buffer<ArrayBufferLike>
        await pBrotliDecompress(Buffer.from("buf"), { flush: constants.Z_NO_FLUSH }); // $ExpectType Buffer || Buffer<ArrayBufferLike>
        await pDeflate(Buffer.from("buf")); // $ExpectType Buffer || Buffer<ArrayBufferLike>
        await pDeflate(Buffer.from("buf"), { flush: constants.Z_NO_FLUSH }); // $ExpectType Buffer || Buffer<ArrayBufferLike>
        await pDeflateRaw(Buffer.from("buf")); // $ExpectType Buffer || Buffer<ArrayBufferLike>
        await pDeflateRaw(Buffer.from("buf"), { flush: constants.Z_NO_FLUSH }); // $ExpectType Buffer || Buffer<ArrayBufferLike>
        await pGzip(Buffer.from("buf")); // $ExpectType Buffer || Buffer<ArrayBufferLike>
        await pGzip(Buffer.from("buf"), { flush: constants.Z_NO_FLUSH }); // $ExpectType Buffer || Buffer<ArrayBufferLike>
        await pGunzip(Buffer.from("buf")); // $ExpectType Buffer || Buffer<ArrayBufferLike>
        await pGunzip(Buffer.from("buf"), { flush: constants.Z_NO_FLUSH }); // $ExpectType Buffer || Buffer<ArrayBufferLike>
        await pInflate(Buffer.from("buf")); // $ExpectType Buffer || Buffer<ArrayBufferLike>
        await pInflate(Buffer.from("buf"), { flush: constants.Z_NO_FLUSH }); // $ExpectType Buffer || Buffer<ArrayBufferLike>
        await pInflateRaw(Buffer.from("buf")); // $ExpectType Buffer || Buffer<ArrayBufferLike>
        await pInflateRaw(Buffer.from("buf"), { flush: constants.Z_NO_FLUSH }); // $ExpectType Buffer || Buffer<ArrayBufferLike>
        await pUnzip(Buffer.from("buf")); // $ExpectType Buffer || Buffer<ArrayBufferLike>
        await pUnzip(Buffer.from("buf"), { flush: constants.Z_NO_FLUSH }); // $ExpectType Buffer || Buffer<ArrayBufferLike>
    })();
}
