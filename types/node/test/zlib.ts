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
} from "zlib";

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
