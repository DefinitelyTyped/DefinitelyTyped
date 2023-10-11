import { promisify } from "node:util";
import {
    BrotliCompress,
    brotliCompress,
    BrotliDecompress,
    brotliDecompress,
    brotliDecompressSync,
    BrotliOptions,
    CompressDeflateInfoResult,
    CompressDeflateRawInfoResult,    
    CompressInflateInfoResult,
    CompressInflateRawInfoResult,
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

// Deflate / Inflate With Info

deflate(
    compressMe,
    { finishFlush: constants.Z_SYNC_FLUSH, info: true },
    (err: Error | null, result: CompressDeflateInfoResult) =>
        inflate(
            result.buffer,
            { finishFlush: constants.Z_SYNC_FLUSH, info: true },
            (err: Error | null, result: CompressInflateInfoResult) => result,
        ),
);
deflate(
    compressMeString,
    { finishFlush: constants.Z_SYNC_FLUSH, info: true },
    (err: Error | null, result: CompressDeflateInfoResult) =>
        inflate(
            result.buffer,
            { finishFlush: constants.Z_SYNC_FLUSH, info: true },
            (err: Error | null, result: CompressInflateInfoResult) => result,
        ),
);
const inflatedWithInfo: CompressInflateInfoResult = inflateSync(deflateSync(compressMe, { info: true }).buffer, { info: true });
const inflatedStringWithInfo: CompressInflateInfoResult = inflateSync(deflateSync(compressMeString, { info: true }).buffer, { info: true });

deflateRaw(
    compressMe,
    { finishFlush: constants.Z_SYNC_FLUSH, info: true },
    (err: Error | null, result: CompressDeflateRawInfoResult) =>
        inflateRaw(
            result.buffer,
            { finishFlush: constants.Z_SYNC_FLUSH, info: true },
            (err: Error | null, result: CompressInflateRawInfoResult) => result,
        ),
);
deflateRaw(
    compressMeString,
    { finishFlush: constants.Z_SYNC_FLUSH, info: true },
    (err: Error | null, result: CompressDeflateRawInfoResult) =>
        inflateRaw(result.buffer, { finishFlush: constants.Z_SYNC_FLUSH, info: true }, (err: Error | null, result: CompressInflateRawInfoResult) => result),
);
const inflatedRawWithInfo: CompressInflateRawInfoResult = inflateRawSync(deflateRawSync(compressMe, { info: true }).buffer, { info: true });
const inflatedRawStringWithInfo: CompressInflateRawInfoResult = inflateRawSync(deflateRawSync(compressMeString, { info: true }).buffer, { info: true});

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
    // $ExpectType (buffer: InputType, options?: BrotliOptions | undefined) => Promise<Buffer>
    const pBrotliCompress = promisify(brotliCompress);
    // $ExpectType (buffer: InputType, options?: BrotliOptions | undefined) => Promise<Buffer>
    const pBrotliDecompress = promisify(brotliDecompress);
    // $ExpectType { (buffer: InputType, options?: ZlibOptionsWithoutInfo | undefined): Promise<Buffer>; (buffer: InputType, options?: ZlibOptionsWithInfo | undefined): Promise<CompressDeflateInfoResult>; }
    const pDeflate = promisify(deflate);
    // $ExpectType { (buffer: InputType, options?: ZlibOptionsWithoutInfo | undefined): Promise<Buffer>; (buffer: InputType, options?: ZlibOptionsWithInfo | undefined): Promise<CompressDeflateRawInfoResult>; }
    const pDeflateRaw = promisify(deflateRaw);
    // $ExpectType (buffer: InputType, options?: ZlibOptions | undefined) => Promise<Buffer>
    const pGzip = promisify(gzip);
    // $ExpectType (buffer: InputType, options?: ZlibOptions | undefined) => Promise<Buffer>
    const pGunzip = promisify(gunzip);
    // $ExpectType { (buffer: InputType, options?: ZlibOptionsWithoutInfo | undefined): Promise<Buffer>; (buffer: InputType, options?: ZlibOptionsWithInfo | undefined): Promise<CompressInflateInfoResult>; }
    const pInflate = promisify(inflate);
    // $ExpectType { (buffer: InputType, options?: ZlibOptionsWithoutInfo | undefined): Promise<Buffer>; (buffer: InputType, options?: ZlibOptionsWithInfo | undefined): Promise<CompressInflateRawInfoResult>; }
    const pInflateRaw = promisify(inflateRaw);
    // $ExpectType (buffer: InputType, options?: ZlibOptions | undefined) => Promise<Buffer>
    const pUnzip = promisify(unzip);

    (async () => {
        await pBrotliCompress(Buffer.from("buf")); // $ExpectType Buffer
        await pBrotliCompress(Buffer.from("buf"), { flush: constants.Z_NO_FLUSH }); // $ExpectType Buffer
        await pBrotliDecompress(Buffer.from("buf")); // $ExpectType Buffer
        await pBrotliDecompress(Buffer.from("buf"), { flush: constants.Z_NO_FLUSH }); // $ExpectType Buffer
        await pDeflate(Buffer.from("buf")); // $ExpectType Buffer
        await pDeflate(Buffer.from("buf"), { flush: constants.Z_NO_FLUSH }); // $ExpectType Buffer
        await pDeflateRaw(Buffer.from("buf")); // $ExpectType Buffer
        await pDeflateRaw(Buffer.from("buf"), { flush: constants.Z_NO_FLUSH }); // $ExpectType Buffer
        await pDeflate(Buffer.from("buf"), { info: true }); // $ExpectType CompressDeflateInfoResult
        await pDeflate(Buffer.from("buf"), { flush: constants.Z_NO_FLUSH, info: true }); // $ExpectType CompressDeflateInfoResult
        await pDeflateRaw(Buffer.from("buf"), { info: true }); // $ExpectType CompressDeflateRawInfoResult
        await pDeflateRaw(Buffer.from("buf"), { flush: constants.Z_NO_FLUSH, info: true }); // $ExpectType CompressDeflateRawInfoResult
        await pGzip(Buffer.from("buf")); // $ExpectType Buffer
        await pGzip(Buffer.from("buf"), { flush: constants.Z_NO_FLUSH }); // $ExpectType Buffer
        await pGunzip(Buffer.from("buf")); // $ExpectType Buffer
        await pGunzip(Buffer.from("buf"), { flush: constants.Z_NO_FLUSH }); // $ExpectType Buffer
        await pInflate(Buffer.from("buf")); // $ExpectType Buffer
        await pInflate(Buffer.from("buf"), { flush: constants.Z_NO_FLUSH }); // $ExpectType Buffer
        await pInflateRaw(Buffer.from("buf")); // $ExpectType Buffer
        await pInflateRaw(Buffer.from("buf"), { flush: constants.Z_NO_FLUSH }); // $ExpectType Buffer
        await pInflate(Buffer.from("buf"), { info: true }); // $ExpectType CompressInflateInfoResult
        await pInflate(Buffer.from("buf"), { flush: constants.Z_NO_FLUSH, info: true }); // $ExpectType CompressInflateInfoResult
        await pInflateRaw(Buffer.from("buf"), { info: true }); // $ExpectType CompressInflateRawInfoResult
        await pInflateRaw(Buffer.from("buf"), { flush: constants.Z_NO_FLUSH, info: true }); // $ExpectType CompressInflateRawInfoResult
        await pUnzip(Buffer.from("buf")); // $ExpectType Buffer
        await pUnzip(Buffer.from("buf"), { flush: constants.Z_NO_FLUSH }); // $ExpectType Buffer
    })();
}
