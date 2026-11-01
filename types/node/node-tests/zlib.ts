import { createReadStream } from "node:fs";
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

// zip: ZipEntry

{
    ZipEntry.create("example.bin", new Uint8Array(16), { mode: 0o755 }); // $ExpectType Promise<ZipEntry>
    ZipEntry.createSync("example.txt", Buffer.from("hello world"), { method: "zstd" }); // $ExpectType ZipEntry
    ZipEntry.createSymlink("source", "target", { modified: new Date(2000, 0, 2) }); // $ExpectType ZipEntry

    (async () => {
        const byteGenerator = (async function*() {
            yield new Uint8Array(16);
        })();
        // $ExpectType ZipEntry
        await using zipEntry = ZipEntry.createStream("example.txt", byteGenerator, { method: "deflate" });
    })();

    const stringGenerator = (async function*() {
        yield "hello world";
    })();
    // @ts-expect-error stream chunks must be Uint8Array
    ZipEntry.createStream("example.txt", stringGenerator, { method: "deflate" });

    // @ts-expect-error no public constructor for ZipEntry
    new ZipEntry();

    // @ts-expect-error string is not valid uncompressed data
    ZipEntry.create("example.txt", "string");
    // @ts-expect-error method cannot be "gzip"
    ZipEntry.createSync("example.txt", Buffer.from("hello world"), { method: "gzip" });
    // @ts-expect-error method cannot be selected for symlinks
    ZipEntry.createSymlink("source", "target", { method: "store" });

    for (const entry of ZipEntry.read(new DataView(new ArrayBuffer(16)))) {
        entry; // $ExpectType ZipEntry
    }

    using zipEntry = ZipEntry.createSync("a.txt", Buffer.from("hello world")); // $ExpectType ZipEntry
    zipEntry.method; // $ExpectType number
    zipEntry.modified; // $ExpectType Date

    zipEntry.name; // $ExpectType string
    zipEntry.nameBuffer; // $ExpectType Buffer || Buffer<ArrayBufferLike>

    // @ts-expect-error read-only properties
    zipEntry.method = 0;
    // @ts-expect-error read-only properties
    zipEntry.name = "b.txt";

    zipEntry.rawContent; // $ExpectType Buffer | null || Buffer<ArrayBufferLike> | null

    zipEntry.content({ verify: false }); // $ExpectType Promise<NonSharedBuffer>
    zipEntry.contentSync({ maxSize: 512 }); // $ExpectType NonSharedBuffer

    zipEntry.contentIterator({ verify: false }); // $ExpectType AsyncIterator<Buffer, undefined, any> || AsyncIterator<Buffer<ArrayBufferLike>, undefined, any>
}

// zip: ZipBuffer

{
    // @ts-expect-error string is not a valid buffer source
    new ZipBuffer("archive.zip");

    const zipBuffer = new ZipBuffer(Buffer.alloc(0));

    // ZipBuffer is always writable.
    zipBuffer.writable; // $ExpectType true

    for (const [name, entry] of zipBuffer) {
        name; // $ExpectType string
        entry; // $ExpectType ZipEntry
    }
    for (const [name, entry] of zipBuffer.entries()) {
        name; // $ExpectType string
        entry; // $ExpectType ZipEntry
    }

    for (const name of zipBuffer.keys()) {
        name; // $ExpectType string
    }
    for (const entry of zipBuffer.values()) {
        entry; // $ExpectType ZipEntry
    }

    zipBuffer.forEach((entry, name, self) => {
        entry; // $ExpectType ZipEntry
        name; // $ExpectType string
        self; // $ExpectType ZipBuffer
    }, {});

    zipBuffer.add("a.txt", Buffer.from("tést", "utf8"), { method: "deflate" }); // $ExpectType Promise<ZipEntry>
    zipBuffer.addSync("directory/", Buffer.alloc(0), { comment: "comment" }); // $ExpectType ZipEntry
    zipBuffer.addEntry(ZipEntry.createSymlink("source", "target", { modified: new Date(2000, 0, 2) })); // $ExpectType ZipEntry

    zipBuffer.get("directory/"); // $ExpectType ZipEntry
    zipBuffer.has("directory/"); // $ExpectType boolean
    zipBuffer.delete("directory/"); // $ExpectType boolean

    zipBuffer.toBuffer("comment override"); // $ExpectType Promise<NonSharedBuffer>
    zipBuffer.toBufferSync({ baseOffset: 16 }); // $ExpectType NonSharedBuffer

    zipBuffer.clear(); // $ExpectType void
}

// zip: ZipFile

{
    // @ts-expect-error no public constructor for ZipFile
    new ZipFile();

    ZipFile.open("archive.zip", { writable: true }); // $ExpectType Promise<ZipFile>
    const zipFile = ZipFile.openSync("archive.zip", { writable: true }); // $ExpectType ZipFile

    // ZipFile is not always writable, unlike ZipBuffer.
    zipFile.writable; // $ExpectType boolean

    // @ts-expect-error string is not valid uncompressed data
    zipFile.add("a.txt", "string");
    // @ts-expect-error string is not valid uncompressed data
    zipFile.addSync("a.txt", "string");

    zipFile.add("a.bin", new ArrayBuffer(16)); // $ExpectType Promise<ZipEntry>
    zipFile.addSync("a.txt", Buffer.from("string")); // $ExpectType ZipEntry
    zipFile.delete("a.bin"); // $ExpectType Promise<boolean>
    zipFile.deleteSync("a.txt"); // $ExpectType boolean
    zipFile.stream("huge.bin", { maxSize: 512 }); // $ExpectType Promise<Readable>

    for (const [name, entry] of zipFile.entries()) {
        name; // $ExpectType string
        entry; // $ExpectType Promise<ZipEntry>
    }
    for (const [name, entry] of zipFile.entriesSync()) {
        name; // $ExpectType string
        entry; // $ExpectType ZipEntry
    }

    zipFile.forEach((entry, name, self) => {
        entry; // $ExpectType Promise<ZipEntry>
        name; // $ExpectType string
        self; // $ExpectType ZipFile
    }, {});
    zipFile.forEachSync((entry, name, self) => {
        entry; // $ExpectType ZipEntry
        name; // $ExpectType string
        self; // $ExpectType ZipFile
    }, {});

    zipFile.get("a.txt"); // $ExpectType Promise<ZipEntry>
    zipFile.getSync("a.txt"); // $ExpectType ZipEntry

    (async () => {
        const zipEntryStream = ZipEntry.createStream("foo", createReadStream("foo")); // $ExpectType ZipEntry
        await zipFile.addEntry(zipEntryStream); // $ExpectType ZipEntry
    })();

    const zipEntrySync = ZipEntry.createSync("foo", Buffer.from("foo")); // $ExpectType ZipEntry
    zipFile.addEntrySync(zipEntrySync); // $ExpectType ZipEntry

    zipFile.has("filename.bin"); // $ExpectType boolean
    zipFile.keys(); // $ExpectType Iterator<string, undefined, any>
    zipFile.values(); // $ExpectType Iterator<Promise<ZipEntry>, undefined, any>
    zipFile.valuesSync(); // $ExpectType Iterator<ZipEntry, undefined, any>

    zipFile.compact(); // $ExpectType Readable
    zipFile.compact("comment here"); // $ExpectType Readable
    zipFile.compactSync(); // $ExpectType NonSharedBuffer
    zipFile.compactSync("comment here"); // $ExpectType NonSharedBuffer

    zipFile.close(); // $ExpectType Promise<void>
    zipFile.closeSync(); // $ExpectType void
}

// zip: createZipArchive(Sync)

{
    const zipEntry = ZipEntry.createSync("a.bin", new Uint8Array(16));
    const zipEntryGenerator = (async function*() {
        yield await ZipEntry.create("a.bin", new Uint8Array(16));
    })();

    createZipArchive([zipEntry], "comment"); // $ExpectType Readable
    createZipArchive([zipEntry], { comment: "comment" }); // $ExpectType Readable
    createZipArchive(zipEntryGenerator, "comment"); // $ExpectType Readable

    createZipArchiveSync([zipEntry], "comment"); // $ExpectType Iterator<Buffer, undefined, any> || Iterator<Buffer<ArrayBufferLike>, undefined, any>
    createZipArchiveSync([zipEntry], { comment: "comment" }); // $ExpectType Iterator<Buffer, undefined, any> || Iterator<Buffer<ArrayBufferLike>, undefined, any>
    // @ts-expect-error async generators are not accepted; a sync Iterable is expected
    createZipArchiveSync(zipEntryGenerator, "comment");

    createZipArchive(new ZipBuffer(Buffer.alloc(0)).values()); // $ExpectType Readable
    createZipArchiveSync(ZipEntry.read(Buffer.alloc(0))); // $ExpectType Iterator<Buffer, undefined, any> || Iterator<Buffer<ArrayBufferLike>, undefined, any>
}

// zip: zipFiles

{
    // $ExpectType Readable
    zipFiles([["/tmp/README.md", "README.md"], ["/tmp/dist/index.js", "index.js"]], "app/v0.1.0");

    // $ExpectType Readable
    zipFiles([["/tmp/README.md", "README.md"]] as const);

    // $ExpectType Readable
    zipFiles(new Map([["/tmp/README.md", "README.md"]]), { comment: "app/v0.1.0" });

    // @ts-expect-error tuple expects [string, string] pairs
    zipFiles([["README.md"]], "app/v0.1.0");
    // @ts-expect-error tuple expects [string, string] pairs
    zipFiles(["README.md", "dist/index.js"], "app/v0.1.0");

    // $ExpectType Readable
    zipFiles(Object.entries({ "/tmp/README.md": "README.md", "/tmp/dist/index.js": "index.js" }), {
        comment: "app/v0.1.0",
        followSymlinks: false,
    });
}

// zip: get/setMaxZipContentSize

{
    const maxZipContentSize = getMaxZipContentSize(); // $ExpectType number
    setMaxZipContentSize(maxZipContentSize + 1); // $ExpectType void
}
