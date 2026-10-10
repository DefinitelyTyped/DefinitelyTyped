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
    createZipArchive,
    createZipArchiveSync,
    createZstdCompress,
    createZstdDecompress,
    deflate,
    DeflateRaw,
    deflateRaw,
    deflateRawSync,
    deflateSync,
    getMaxZipContentSize,
    gunzip,
    gunzipSync,
    gzip,
    gzipSync,
    inflate,
    inflateRaw,
    inflateRawSync,
    inflateSync,
    setMaxZipContentSize,
    unzip,
    unzipSync,
    ZipBuffer,
    ZipEntry,
    ZipFile,
    zipFiles,
    ZlibOptions,
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

class CustomDeflateRaw extends DeflateRaw {
    constructor(options?: ZlibOptions) {
        super(options);
    }
}

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
createZstdCompress({ pledgedSrcSize: compressMe.byteLength }); // $ExpectType ZstdCompress
createZstdCompress({ pledgedSrcSize: undefined }); // $ExpectType ZstdCompress
// @ts-expect-error
createZstdCompress({ pledgedSrcSize: "10" });
createZstdDecompress(); // $ExpectType ZstdDecompress
createZstdDecompress({ chunkSize: 1024 }); // $ExpectType ZstdDecompress

zstdCompress(compressMe, (err: Error | null, result: Buffer) => result);
zstdCompress(compressMe, { finishFlush: constants.ZSTD_e_end }, (err: Error | null, result: Buffer) => result);
zstdCompress(compressMe, { pledgedSrcSize: compressMe.byteLength }, (err: Error | null, result: Buffer) => result);
zstdCompressSync(compressMe); // $ExpectType NonSharedBuffer
zstdCompressSync(compressMe, { finishFlush: constants.ZSTD_e_end }); // $ExpectType NonSharedBuffer
zstdCompressSync(compressMe, { pledgedSrcSize: compressMe.byteLength }); // $ExpectType NonSharedBuffer

zstdDecompress(compressMe, (err: Error | null, result: Buffer) => result);
zstdDecompress(
    compressMe,
    { params: { [constants.ZSTD_d_windowLogMax]: 100 } },
    (err: Error | null, result: Buffer) => result,
);
zstdDecompressSync(compressMe); // $ExpectType NonSharedBuffer
zstdDecompressSync(compressMe, { params: { [constants.ZSTD_d_windowLogMax]: 100 } }); // $ExpectType NonSharedBuffer

{
    // $ExpectType (buffer: InputType, options?: BrotliOptions | undefined) => Promise<NonSharedBuffer>
    const pBrotliCompress = promisify(brotliCompress);
    // $ExpectType (buffer: InputType, options?: BrotliOptions | undefined) => Promise<NonSharedBuffer>
    const pBrotliDecompress = promisify(brotliDecompress);
    // $ExpectType (buffer: InputType, options?: ZlibOptions | undefined) => Promise<NonSharedBuffer>
    const pDeflate = promisify(deflate);
    // $ExpectType (buffer: InputType, options?: ZlibOptions | undefined) => Promise<NonSharedBuffer>
    const pDeflateRaw = promisify(deflateRaw);
    // $ExpectType (buffer: InputType, options?: ZlibOptions | undefined) => Promise<NonSharedBuffer>
    const pGzip = promisify(gzip);
    // $ExpectType (buffer: InputType, options?: ZlibOptions | undefined) => Promise<NonSharedBuffer>
    const pGunzip = promisify(gunzip);
    // $ExpectType (buffer: InputType, options?: ZlibOptions | undefined) => Promise<NonSharedBuffer>
    const pInflate = promisify(inflate);
    // $ExpectType (buffer: InputType, options?: ZlibOptions | undefined) => Promise<NonSharedBuffer>
    const pInflateRaw = promisify(inflateRaw);
    // $ExpectType (buffer: InputType, options?: ZlibOptions | undefined) => Promise<NonSharedBuffer>
    const pUnzip = promisify(unzip);
    // $ExpectType (buffer: InputType, options?: ZstdOptions | undefined) => Promise<NonSharedBuffer>
    const pZstdCompress = promisify(zstdCompress);
    // $ExpectType (buffer: InputType, options?: ZstdOptions | undefined) => Promise<NonSharedBuffer>
    const pZstdDecompress = promisify(zstdDecompress);

    (async () => {
        await pBrotliCompress(Buffer.from("buf")); // $ExpectType NonSharedBuffer
        await pBrotliCompress(Buffer.from("buf"), { flush: constants.Z_NO_FLUSH }); // $ExpectType NonSharedBuffer
        await pBrotliDecompress(Buffer.from("buf")); // $ExpectType NonSharedBuffer
        await pBrotliDecompress(Buffer.from("buf"), { flush: constants.Z_NO_FLUSH }); // $ExpectType NonSharedBuffer
        await pDeflate(Buffer.from("buf")); // $ExpectType NonSharedBuffer
        await pDeflate(Buffer.from("buf"), { flush: constants.Z_NO_FLUSH }); // $ExpectType NonSharedBuffer
        await pDeflateRaw(Buffer.from("buf")); // $ExpectType NonSharedBuffer
        await pDeflateRaw(Buffer.from("buf"), { flush: constants.Z_NO_FLUSH }); // $ExpectType NonSharedBuffer
        await pGzip(Buffer.from("buf")); // $ExpectType NonSharedBuffer
        await pGzip(Buffer.from("buf"), { flush: constants.Z_NO_FLUSH }); // $ExpectType NonSharedBuffer
        await pGunzip(Buffer.from("buf")); // $ExpectType NonSharedBuffer
        await pGunzip(Buffer.from("buf"), { flush: constants.Z_NO_FLUSH }); // $ExpectType NonSharedBuffer
        await pInflate(Buffer.from("buf")); // $ExpectType NonSharedBuffer
        await pInflate(Buffer.from("buf"), { flush: constants.Z_NO_FLUSH }); // $ExpectType NonSharedBuffer
        await pInflateRaw(Buffer.from("buf")); // $ExpectType NonSharedBuffer
        await pInflateRaw(Buffer.from("buf"), { flush: constants.Z_NO_FLUSH }); // $ExpectType NonSharedBuffer
        await pUnzip(Buffer.from("buf")); // $ExpectType NonSharedBuffer
        await pUnzip(Buffer.from("buf"), { flush: constants.Z_NO_FLUSH }); // $ExpectType NonSharedBuffer
        await pZstdCompress(Buffer.from("buf")); // $ExpectType NonSharedBuffer
        await pZstdCompress(Buffer.from("buf"), { flush: constants.ZSTD_e_flush }); // $ExpectType NonSharedBuffer
        await pZstdCompress(compressMe, { pledgedSrcSize: compressMe.byteLength }); // $ExpectType NonSharedBuffer
        await pZstdDecompress(Buffer.from("buf")); // $ExpectType NonSharedBuffer
        await pZstdDecompress(Buffer.from("buf"), { flush: constants.ZSTD_e_flush }); // $ExpectType NonSharedBuffer
    })();
}

{
    let crc = crc32("hello");
    crc = crc32("world", crc); // $ExpectType number

    crc = crc32(Buffer.from("hello", "utf16le")); // $ExpectType number
    crc = crc32(Buffer.from("world", "utf16le"), crc); // $ExpectType number
}

// ZIP archive API

(async () => {
    const data = Buffer.from("hello");

    // ZipEntry
    // @ts-expect-error
    new ZipEntry();
    const entry = await ZipEntry.create("a.txt", data); // $ExpectType ZipEntry
    // $ExpectType ZipEntry
    await ZipEntry.create("b.txt", new Uint8Array(1), {
        comment: "c",
        mode: 0o600,
        modified: new Date(),
        method: "store",
    });
    // @ts-expect-error
    await ZipEntry.create("c.txt", data, { method: "brotli" });
    ZipEntry.createSync("d/", new ArrayBuffer(0), { method: "zstd" }); // $ExpectType ZipEntry
    // $ExpectType ZipEntry
    ZipEntry.createSymlink("link", "a.txt", { mode: 0o777, modified: new Date(), comment: "c" });
    // @ts-expect-error
    ZipEntry.createSymlink("link", "a.txt", { method: "store" });
    // $ExpectType ZipEntry
    const streaming = ZipEntry.createStream("s.bin", (async function*() {
        yield new Uint8Array([1]);
    })(), { method: "deflate" });
    streaming[Symbol.dispose](); // $ExpectType void
    await streaming[Symbol.asyncDispose](); // $ExpectType void

    entry.comment; // $ExpectType string
    entry.compressed; // $ExpectType boolean
    entry.compressedSize; // $ExpectType number
    entry.crc32; // $ExpectType number
    entry.flags; // $ExpectType number
    entry.isDirectory; // $ExpectType boolean
    entry.isFile; // $ExpectType boolean
    entry.isSymlink; // $ExpectType boolean
    entry.mode; // $ExpectType number
    entry.modified; // $ExpectType Date
    entry.method; // $ExpectType number
    entry.name; // $ExpectType string
    entry.nameBuffer; // $ExpectType Buffer || Buffer<ArrayBufferLike>
    entry.rawContent; // $ExpectType Buffer | null || Buffer<ArrayBufferLike> | null
    entry.size; // $ExpectType number
    // @ts-expect-error
    entry.name = "x";
    await entry.content(); // $ExpectType NonSharedBuffer
    await entry.content({ verify: false, maxSize: 1024 }); // $ExpectType NonSharedBuffer
    entry.contentSync({ maxSize: 1024 }); // $ExpectType NonSharedBuffer
    for await (const chunk of entry.contentIterator({ verify: true, maxSize: 1024 })) {
        chunk; // $ExpectType Buffer || Buffer<ArrayBufferLike>
    }

    // createZipArchive / createZipArchiveSync / zipFiles
    createZipArchive([entry]); // $ExpectType Readable
    createZipArchive([entry], "comment"); // $ExpectType Readable
    // $ExpectType Readable
    createZipArchive((async function*() {
        yield entry;
    })(), { comment: "c", baseOffset: 3 });
    // $ExpectType Iterator<Buffer, undefined, any> || Iterator<Buffer<ArrayBufferLike>, undefined, any>
    createZipArchiveSync([entry], { baseOffset: 0 });
    // @ts-expect-error
    createZipArchiveSync((async function*() {
        yield entry;
    })());
    zipFiles([["/tmp/a.txt", "a.txt"]]); // $ExpectType Readable
    zipFiles(new Map([["/tmp/a.txt", "a.txt"]]), "comment"); // $ExpectType Readable
    // $ExpectType Readable
    zipFiles(Object.entries({ "/tmp/a.txt": "a.txt" }), { followSymlinks: false, comment: "c", baseOffset: 0 });

    // getMaxZipContentSize / setMaxZipContentSize
    getMaxZipContentSize(); // $ExpectType number
    setMaxZipContentSize(1024); // $ExpectType void

    // ZipBuffer
    const archive = Buffer.concat([...createZipArchiveSync([entry])]);
    new ZipBuffer(new DataView(archive.buffer, archive.byteOffset, archive.byteLength));
    new ZipBuffer(new ArrayBuffer(0));
    const zb = new ZipBuffer(archive);
    zb.comment; // $ExpectType string
    zb.size; // $ExpectType number
    zb.writable; // $ExpectType boolean
    // @ts-expect-error
    zb.comment = "x";
    await zb.add("b.txt", data, { method: "store" }); // $ExpectType ZipEntry
    zb.addSync("c.txt", new Uint8Array(1)); // $ExpectType ZipEntry
    zb.addEntry(entry); // $ExpectType ZipEntry
    zb.delete("c.txt"); // $ExpectType boolean
    zb.entries(); // $ExpectType Iterator<[string, ZipEntry], undefined, any>
    zb.forEach(function(entry, name, zipBuffer) {
        entry; // $ExpectType ZipEntry
        name; // $ExpectType string
        zipBuffer; // $ExpectType ZipBuffer
    }, {});
    zb.get("a.txt"); // $ExpectType ZipEntry
    zb.has("a.txt"); // $ExpectType boolean
    zb.keys(); // $ExpectType Iterator<string, undefined, any>
    zb.values(); // $ExpectType Iterator<ZipEntry, undefined, any>
    await zb.toBuffer(); // $ExpectType NonSharedBuffer
    await zb.toBuffer("comment"); // $ExpectType NonSharedBuffer
    zb.toBufferSync({ comment: "c", baseOffset: 0 }); // $ExpectType NonSharedBuffer
    for (const [name, e] of zb) {
        name; // $ExpectType string
        e; // $ExpectType ZipEntry
    }
    zb.clear(); // $ExpectType void

    // ZipFile
    // @ts-expect-error
    new ZipFile();
    const zf = await ZipFile.open("archive.zip", { writable: true }); // $ExpectType ZipFile
    ZipFile.openSync("archive.zip"); // $ExpectType ZipFile
    zf.comment; // $ExpectType string
    zf.size; // $ExpectType number
    zf.writable; // $ExpectType boolean
    await zf.add("b.txt", data, { method: "store" }); // $ExpectType ZipEntry
    zf.addSync("c.txt", new ArrayBuffer(1)); // $ExpectType ZipEntry
    await zf.addEntry(streaming); // $ExpectType ZipEntry
    zf.addEntrySync(entry); // $ExpectType ZipEntry
    zf.compact(); // $ExpectType Readable
    zf.compact("comment"); // $ExpectType Readable
    zf.compactSync(); // $ExpectType NonSharedBuffer
    await zf.delete("b.txt"); // $ExpectType boolean
    zf.deleteSync("c.txt"); // $ExpectType boolean
    zf.entries(); // $ExpectType Iterator<[string, Promise<ZipEntry>], undefined, any>
    zf.entriesSync(); // $ExpectType Iterator<[string, ZipEntry], undefined, any>
    zf.forEach((entry, name, zipFile) => {
        entry; // $ExpectType Promise<ZipEntry>
        name; // $ExpectType string
        zipFile; // $ExpectType ZipFile
    });
    zf.forEachSync((entry, name, zipFile) => {
        entry; // $ExpectType ZipEntry
        name; // $ExpectType string
        zipFile; // $ExpectType ZipFile
    }, {});
    await zf.get("a.txt"); // $ExpectType ZipEntry
    zf.getSync("a.txt"); // $ExpectType ZipEntry
    zf.has("a.txt"); // $ExpectType boolean
    zf.keys(); // $ExpectType Iterator<string, undefined, any>
    await zf.stream("a.txt", { verify: true, maxSize: 1024 }); // $ExpectType Readable
    zf.values(); // $ExpectType Iterator<Promise<ZipEntry>, undefined, any>
    zf.valuesSync(); // $ExpectType Iterator<ZipEntry, undefined, any>
    await zf.close(); // $ExpectType void
    zf.closeSync(); // $ExpectType void
})();
