import { promisify } from "node:util";
import {
    BrotliCompress,
    brotliCompress,
    BrotliDecompress,
    brotliDecompress,
    brotliDecompressSync,
    BrotliOptions,
    constants,
    crc32,
    createBrotliCompress,
    createBrotliDecompress,
    createZstdCompress,
    createZstdDecompress,
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
    zstdCompress,
    zstdCompressSync,
    zstdDecompress,
    zstdDecompressSync,
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

// zstd
createZstdCompress(); // $ExpectType ZstdCompress
createZstdCompress({ chunkSize: 1024 }); // $ExpectType ZstdCompress
createZstdDecompress(); // $ExpectType ZstdDecompress
createZstdDecompress({ chunkSize: 1024 }); // $ExpectType ZstdDecompress

zstdCompress(compressMe, (err: Error | null, result: Buffer) => result);
zstdCompress(compressMe, { finishFlush: constants.ZSTD_e_end }, (err: Error | null, result: Buffer) => result);
zstdCompressSync(compressMe); // $ExpectType Buffer || Buffer<ArrayBufferLike>
zstdCompressSync(compressMe, { finishFlush: constants.ZSTD_e_end }); // $ExpectType Buffer || Buffer<ArrayBufferLike>

zstdDecompress(compressMe, (err: Error | null, result: Buffer) => result);
zstdDecompress(
    compressMe,
    { params: { [constants.ZSTD_d_windowLogMax]: 100 } },
    (err: Error | null, result: Buffer) => result,
);
zstdDecompressSync(compressMe); // $ExpectType Buffer || Buffer<ArrayBufferLike>
zstdDecompressSync(compressMe, { params: { [constants.ZSTD_d_windowLogMax]: 100 } }); // $ExpectType Buffer || Buffer<ArrayBufferLike>

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
    // $ExpectType (buffer: InputType, options?: ZstdOptions | undefined) => Promise<Buffer> || (buffer: InputType, options?: ZstdOptions | undefined) => Promise<Buffer<ArrayBufferLike>>
    const pZstdCompress = promisify(zstdCompress);
    // $ExpectType (buffer: InputType, options?: ZstdOptions | undefined) => Promise<Buffer> || (buffer: InputType, options?: ZstdOptions | undefined) => Promise<Buffer<ArrayBufferLike>>
    const pZstdDecompress = promisify(zstdDecompress);

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
        await pZstdCompress(Buffer.from("buf")); // $ExpectType Buffer || Buffer<ArrayBufferLike>
        await pZstdCompress(Buffer.from("buf"), { flush: constants.ZSTD_e_flush }); // $ExpectType Buffer || Buffer<ArrayBufferLike>
        await pZstdDecompress(Buffer.from("buf")); // $ExpectType Buffer || Buffer<ArrayBufferLike>
        await pZstdDecompress(Buffer.from("buf"), { flush: constants.ZSTD_e_flush }); // $ExpectType Buffer || Buffer<ArrayBufferLike>
    })();
}

{
    let crc = crc32("hello");
    crc = crc32("world", crc); // $ExpectType number

    crc = crc32(Buffer.from("hello", "utf16le")); // $ExpectType number
    crc = crc32(Buffer.from("world", "utf16le"), crc); // $ExpectType number
}
