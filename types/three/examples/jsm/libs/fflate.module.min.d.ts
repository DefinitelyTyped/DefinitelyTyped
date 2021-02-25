/**
 * Options for compressing data into a DEFLATE format
 */
export interface DeflateOptions {
    /**
     * The level of compression to use, ranging from 0-9.
     *
     * 0 will store the data without compression.
     * 1 is fastest but compresses the worst, 9 is slowest but compresses the best.
     * The default level is 6.
     *
     * Typically, binary data benefits much more from higher values than text data.
     * In both cases, higher values usually take disproportionately longer than the reduction in final size that results.
     *
     * For example, a 1 MB text file could:
     * - become 1.01 MB with level 0 in 1ms
     * - become 400 kB with level 1 in 10ms
     * - become 320 kB with level 9 in 100ms
     */
    level?: 0 | 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9;
    /**
     * The memory level to use, ranging from 0-12. Increasing this increases speed and compression ratio at the cost of memory.
     *
     * Note that this is exponential: while level 0 uses 4 kB, level 4 uses 64 kB, level 8 uses 1 MB, and level 12 uses 16 MB.
     * It is recommended not to lower the value below 4, since that tends to hurt performance.
     * In addition, values above 8 tend to help very little on most data and can even hurt performance.
     *
     * The default value is automatically determined based on the size of the input data.
     */
    mem?: 0 | 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10 | 11 | 12;
}
/**
 * Options for compressing data into a GZIP format
 */
export interface GzipOptions extends DeflateOptions {
    /**
     * When the file was last modified. Defaults to the current time.
     * Set this to 0 to avoid revealing a modification date entirely.
     */
    mtime?: Date | string | number;
    /**
     * The filename of the data. If the `gunzip` command is used to decompress the data, it will output a file
     * with this name instead of the name of the compressed file.
     */
    filename?: string;
}
/**
 * Options for compressing data into a Zlib format
 */
export type ZlibOptions = DeflateOptions;
/**
 * Handler for data (de)compression streams
 * @param data The data output from the stream processor
 * @param final Whether this is the final block
 */
export type FlateStreamHandler = (data: Uint8Array, final: boolean) => void;
/**
 * Handler for asynchronous data (de)compression streams
 * @param err Any error that occurred
 * @param data The data output from the stream processor
 * @param final Whether this is the final block
 */
export type AsyncFlateStreamHandler = (err: Error, data: Uint8Array, final: boolean) => void;
/**
 * Callback for asynchronous (de)compression methods
 * @param err Any error that occurred
 * @param data The resulting data. Only present if `err` is null
 */
export type FlateCallback = (err: Error | string, data: Uint8Array) => void;
interface AsyncOptions {
    /**
     * Whether or not to "consume" the source data. This will make the typed array/buffer you pass in
     * unusable but will increase performance and reduce memory usage.
     */
    consume?: boolean;
}
/**
 * Options for compressing data asynchronously into a DEFLATE format
 */
export interface AsyncDeflateOptions extends DeflateOptions, AsyncOptions {}
/**
 * Options for decompressing DEFLATE data asynchronously
 */
export interface AsyncInflateOptions extends AsyncOptions {
    /**
     * The original size of the data. Currently, the asynchronous API disallows
     * writing into a buffer you provide; the best you can do is provide the
     * size in bytes and be given back a new typed array.
     */
    size?: number;
}
/**
 * Options for compressing data asynchronously into a GZIP format
 */
export interface AsyncGzipOptions extends GzipOptions, AsyncOptions {}
/**
 * Options for decompressing GZIP data asynchronously
 */
export type AsyncGunzipOptions = AsyncOptions;
/**
 * Options for compressing data asynchronously into a Zlib format
 */
export interface AsyncZlibOptions extends ZlibOptions, AsyncOptions {}
/**
 * Options for decompressing Zlib data asynchronously
 */
export type AsyncUnzlibOptions = AsyncInflateOptions;
/**
 * A terminable compression/decompression process
 */
export interface AsyncTerminable {
    /**
     * Terminates the worker thread immediately. The callback will not be called.
     */
    (): void;
}
/**
 * Streaming DEFLATE compression
 */
export class Deflate {
    /**
     * Creates a DEFLATE stream
     * @param opts The compression options
     * @param cb The callback to call whenever data is deflated
     */
    constructor(opts: DeflateOptions, cb?: FlateStreamHandler);
    constructor(cb?: FlateStreamHandler);
    private o;
    private d;
    /**
     * The handler to call whenever data is available
     */
    ondata: FlateStreamHandler;
    private p;
    /**
     * Pushes a chunk to be deflated
     * @param chunk The chunk to push
     * @param final Whether this is the last chunk
     */
    push(chunk: Uint8Array, final?: boolean): void;
}
/**
 * Asynchronous streaming DEFLATE compression
 */
export class AsyncDeflate {
    /**
     * The handler to call whenever data is available
     */
    ondata: AsyncFlateStreamHandler;
    /**
     * Creates an asynchronous DEFLATE stream
     * @param opts The compression options
     * @param cb The callback to call whenever data is deflated
     */
    constructor(opts: DeflateOptions, cb?: AsyncFlateStreamHandler);
    /**
     * Creates an asynchronous DEFLATE stream
     * @param cb The callback to call whenever data is deflated
     */
    constructor(cb?: AsyncFlateStreamHandler);
    /**
     * Pushes a chunk to be deflated
     * @param chunk The chunk to push
     * @param final Whether this is the last chunk
     */
    push(chunk: Uint8Array, final?: boolean): void;
    /**
     * A method to terminate the stream's internal worker. Subsequent calls to
     * push() will silently fail.
     */
    terminate: AsyncTerminable;
}
/**
 * Asynchronously compresses data with DEFLATE without any wrapper
 * @param data The data to compress
 * @param opts The compression options
 * @param cb The function to be called upon compression completion
 * @returns A function that can be used to immediately terminate the compression
 */
export function deflate(data: Uint8Array, opts: AsyncDeflateOptions, cb: FlateCallback): AsyncTerminable;
/**
 * Asynchronously compresses data with DEFLATE without any wrapper
 * @param data The data to compress
 * @param cb The function to be called upon compression completion
 */
export function deflate(data: Uint8Array, cb: FlateCallback): AsyncTerminable;
/**
 * Compresses data with DEFLATE without any wrapper
 * @param data The data to compress
 * @param opts The compression options
 * @returns The deflated version of the data
 */
export function deflateSync(data: Uint8Array, opts?: DeflateOptions): Uint8Array;
/**
 * Streaming DEFLATE decompression
 */
export class Inflate {
    /**
     * Creates an inflation stream
     * @param cb The callback to call whenever data is inflated
     */
    constructor(cb?: FlateStreamHandler);
    private s;
    private o;
    private p;
    private d;
    /**
     * The handler to call whenever data is available
     */
    ondata: FlateStreamHandler;
    private e;
    private c;
    /**
     * Pushes a chunk to be inflated
     * @param chunk The chunk to push
     * @param final Whether this is the final chunk
     */
    push(chunk: Uint8Array, final?: boolean): void;
}
/**
 * Asynchronous streaming DEFLATE decompression
 */
export class AsyncInflate {
    /**
     * The handler to call whenever data is available
     */
    ondata: AsyncFlateStreamHandler;
    /**
     * Creates an asynchronous inflation stream
     * @param cb The callback to call whenever data is deflated
     */
    constructor(cb?: AsyncFlateStreamHandler);
    /**
     * Pushes a chunk to be inflated
     * @param chunk The chunk to push
     * @param final Whether this is the last chunk
     */
    push(chunk: Uint8Array, final?: boolean): void;
    /**
     * A method to terminate the stream's internal worker. Subsequent calls to
     * push() will silently fail.
     */
    terminate: AsyncTerminable;
}
/**
 * Asynchronously expands DEFLATE data with no wrapper
 * @param data The data to decompress
 * @param opts The decompression options
 * @param cb The function to be called upon decompression completion
 * @returns A function that can be used to immediately terminate the decompression
 */
export function inflate(data: Uint8Array, opts: AsyncInflateOptions, cb: FlateCallback): AsyncTerminable;
/**
 * Asynchronously expands DEFLATE data with no wrapper
 * @param data The data to decompress
 * @param cb The function to be called upon decompression completion
 * @returns A function that can be used to immediately terminate the decompression
 */
export function inflate(data: Uint8Array, cb: FlateCallback): AsyncTerminable;
/**
 * Expands DEFLATE data with no wrapper
 * @param data The data to decompress
 * @param out Where to write the data. Saves memory if you know the decompressed size and provide an output buffer of that length.
 * @returns The decompressed version of the data
 */
export function inflateSync(data: Uint8Array, out?: Uint8Array): Uint8Array;
/**
 * Streaming GZIP compression
 */
export class Gzip {
    private c;
    private l;
    private v;
    private o;
    /**
     * The handler to call whenever data is available
     */
    ondata: FlateStreamHandler;
    /**
     * Creates a GZIP stream
     * @param opts The compression options
     * @param cb The callback to call whenever data is deflated
     */
    constructor(opts: GzipOptions, cb?: FlateStreamHandler);
    /**
     * Creates a GZIP stream
     * @param cb The callback to call whenever data is deflated
     */
    constructor(cb?: FlateStreamHandler);
    /**
     * Pushes a chunk to be GZIPped
     * @param chunk The chunk to push
     * @param final Whether this is the last chunk
     */
    push(chunk: Uint8Array, final?: boolean): void;
    private p;
}
/**
 * Asynchronous streaming GZIP compression
 */
export class AsyncGzip {
    /**
     * The handler to call whenever data is available
     */
    ondata: AsyncFlateStreamHandler;
    /**
     * Creates an asynchronous GZIP stream
     * @param opts The compression options
     * @param cb The callback to call whenever data is deflated
     */
    constructor(opts: GzipOptions, cb?: AsyncFlateStreamHandler);
    /**
     * Creates an asynchronous GZIP stream
     * @param cb The callback to call whenever data is deflated
     */
    constructor(cb?: AsyncFlateStreamHandler);
    /**
     * Pushes a chunk to be GZIPped
     * @param chunk The chunk to push
     * @param final Whether this is the last chunk
     */
    push(chunk: Uint8Array, final?: boolean): void;
    /**
     * A method to terminate the stream's internal worker. Subsequent calls to
     * push() will silently fail.
     */
    terminate: AsyncTerminable;
}
/**
 * Asynchronously compresses data with GZIP
 * @param data The data to compress
 * @param opts The compression options
 * @param cb The function to be called upon compression completion
 * @returns A function that can be used to immediately terminate the compression
 */
export function gzip(data: Uint8Array, opts: AsyncGzipOptions, cb: FlateCallback): AsyncTerminable;
/**
 * Asynchronously compresses data with GZIP
 * @param data The data to compress
 * @param cb The function to be called upon compression completion
 * @returns A function that can be used to immediately terminate the decompression
 */
export function gzip(data: Uint8Array, cb: FlateCallback): AsyncTerminable;
/**
 * Compresses data with GZIP
 * @param data The data to compress
 * @param opts The compression options
 * @returns The gzipped version of the data
 */
export function gzipSync(data: Uint8Array, opts?: GzipOptions): Uint8Array;
/**
 * Streaming GZIP decompression
 */
export class Gunzip {
    private v;
    private p;
    /**
     * The handler to call whenever data is available
     */
    ondata: FlateStreamHandler;
    /**
     * Creates a GUNZIP stream
     * @param cb The callback to call whenever data is inflated
     */
    constructor(cb?: FlateStreamHandler);
    /**
     * Pushes a chunk to be GUNZIPped
     * @param chunk The chunk to push
     * @param final Whether this is the last chunk
     */
    push(chunk: Uint8Array, final?: boolean): void;
}
/**
 * Asynchronous streaming GZIP decompression
 */
export class AsyncGunzip {
    /**
     * The handler to call whenever data is available
     */
    ondata: AsyncFlateStreamHandler;
    /**
     * Creates an asynchronous GUNZIP stream
     * @param cb The callback to call whenever data is deflated
     */
    constructor(cb: AsyncFlateStreamHandler);
    /**
     * Pushes a chunk to be GUNZIPped
     * @param chunk The chunk to push
     * @param final Whether this is the last chunk
     */
    push(chunk: Uint8Array, final?: boolean): void;
    /**
     * A method to terminate the stream's internal worker. Subsequent calls to
     * push() will silently fail.
     */
    terminate: AsyncTerminable;
}
/**
 * Asynchronously expands GZIP data
 * @param data The data to decompress
 * @param opts The decompression options
 * @param cb The function to be called upon decompression completion
 * @returns A function that can be used to immediately terminate the decompression
 */
export function gunzip(data: Uint8Array, opts: AsyncGunzipOptions, cb: FlateCallback): AsyncTerminable;
/**
 * Asynchronously expands GZIP data
 * @param data The data to decompress
 * @param cb The function to be called upon decompression completion
 * @returns A function that can be used to immediately terminate the decompression
 */
export function gunzip(data: Uint8Array, cb: FlateCallback): AsyncTerminable;
/**
 * Expands GZIP data
 * @param data The data to decompress
 * @param out Where to write the data. GZIP already encodes the output size, so providing this doesn't save memory.
 * @returns The decompressed version of the data
 */
export function gunzipSync(data: Uint8Array, out?: Uint8Array): Uint8Array;
/**
 * Streaming Zlib compression
 */
export class Zlib {
    private c;
    private v;
    private o;
    /**
     * The handler to call whenever data is available
     */
    ondata: FlateStreamHandler;
    /**
     * Creates a Zlib stream
     * @param opts The compression options
     * @param cb The callback to call whenever data is deflated
     */
    constructor(opts: ZlibOptions, cb?: FlateStreamHandler);
    /**
     * Creates a Zlib stream
     * @param cb The callback to call whenever data is deflated
     */
    constructor(cb?: FlateStreamHandler);
    /**
     * Pushes a chunk to be zlibbed
     * @param chunk The chunk to push
     * @param final Whether this is the last chunk
     */
    push(chunk: Uint8Array, final?: boolean): void;
    private p;
}
/**
 * Asynchronous streaming Zlib compression
 */
export class AsyncZlib {
    /**
     * The handler to call whenever data is available
     */
    ondata: AsyncFlateStreamHandler;
    /**
     * Creates an asynchronous DEFLATE stream
     * @param opts The compression options
     * @param cb The callback to call whenever data is deflated
     */
    constructor(opts: ZlibOptions, cb?: AsyncFlateStreamHandler);
    /**
     * Creates an asynchronous DEFLATE stream
     * @param cb The callback to call whenever data is deflated
     */
    constructor(cb?: AsyncFlateStreamHandler);
    /**
     * Pushes a chunk to be deflated
     * @param chunk The chunk to push
     * @param final Whether this is the last chunk
     */
    push(chunk: Uint8Array, final?: boolean): void;
    /**
     * A method to terminate the stream's internal worker. Subsequent calls to
     * push() will silently fail.
     */
    terminate: AsyncTerminable;
}
/**
 * Asynchronously compresses data with Zlib
 * @param data The data to compress
 * @param opts The compression options
 * @param cb The function to be called upon compression completion
 */
export function zlib(data: Uint8Array, opts: AsyncZlibOptions, cb: FlateCallback): AsyncTerminable;
/**
 * Asynchronously compresses data with Zlib
 * @param data The data to compress
 * @param cb The function to be called upon compression completion
 * @returns A function that can be used to immediately terminate the compression
 */
export function zlib(data: Uint8Array, cb: FlateCallback): AsyncTerminable;
/**
 * Compress data with Zlib
 * @param data The data to compress
 * @param opts The compression options
 * @returns The zlib-compressed version of the data
 */
export function zlibSync(data: Uint8Array, opts: ZlibOptions): Uint8Array;
/**
 * Streaming Zlib decompression
 */
export class Unzlib {
    private v;
    private p;
    /**
     * The handler to call whenever data is available
     */
    ondata: FlateStreamHandler;
    /**
     * Creates a Zlib decompression stream
     * @param cb The callback to call whenever data is inflated
     */
    constructor(cb?: FlateStreamHandler);
    /**
     * Pushes a chunk to be unzlibbed
     * @param chunk The chunk to push
     * @param final Whether this is the last chunk
     */
    push(chunk: Uint8Array, final?: boolean): void;
}
/**
 * Asynchronous streaming Zlib decompression
 */
export class AsyncUnzlib {
    /**
     * The handler to call whenever data is available
     */
    ondata: AsyncFlateStreamHandler;
    /**
     * Creates an asynchronous Zlib decompression stream
     * @param cb The callback to call whenever data is deflated
     */
    constructor(cb?: AsyncFlateStreamHandler);
    /**
     * Pushes a chunk to be decompressed from Zlib
     * @param chunk The chunk to push
     * @param final Whether this is the last chunk
     */
    push(chunk: Uint8Array, final?: boolean): void;
    /**
     * A method to terminate the stream's internal worker. Subsequent calls to
     * push() will silently fail.
     */
    terminate: AsyncTerminable;
}
/**
 * Asynchronously expands Zlib data
 * @param data The data to decompress
 * @param opts The decompression options
 * @param cb The function to be called upon decompression completion
 * @returns A function that can be used to immediately terminate the decompression
 */
export function unzlib(data: Uint8Array, opts: AsyncGunzipOptions, cb: FlateCallback): AsyncTerminable;
/**
 * Asynchronously expands Zlib data
 * @param data The data to decompress
 * @param cb The function to be called upon decompression completion
 * @returns A function that can be used to immediately terminate the decompression
 */
export function unzlib(data: Uint8Array, cb: FlateCallback): AsyncTerminable;
/**
 * Expands Zlib data
 * @param data The data to decompress
 * @param out Where to write the data. Saves memory if you know the decompressed size and provide an output buffer of that length.
 * @returns The decompressed version of the data
 */
export function unzlibSync(data: Uint8Array, out?: Uint8Array): Uint8Array;
export { gzip as compress, AsyncGzip as AsyncCompress };
export { gzipSync as compressSync, Gzip as Compress };
/**
 * Streaming GZIP, Zlib, or raw DEFLATE decompression
 */
export class Decompress {
    private G;
    private I;
    private Z;
    /**
     * Creates a decompression stream
     * @param cb The callback to call whenever data is decompressed
     */
    constructor(cb?: FlateStreamHandler);
    private s;
    /**
     * The handler to call whenever data is available
     */
    ondata: FlateStreamHandler;
    private p;
    /**
     * Pushes a chunk to be decompressed
     * @param chunk The chunk to push
     * @param final Whether this is the last chunk
     */
    push(chunk: Uint8Array, final?: boolean): void;
}
/**
 * Asynchronous streaming GZIP, Zlib, or raw DEFLATE decompression
 */
export class AsyncDecompress {
    private G;
    private I;
    private Z;
    /**
     * Creates an asynchronous decompression stream
     * @param cb The callback to call whenever data is decompressed
     */
    constructor(cb?: AsyncFlateStreamHandler);
    /**
     * The handler to call whenever data is available
     */
    ondata: AsyncFlateStreamHandler;
    /**
     * Pushes a chunk to be decompressed
     * @param chunk The chunk to push
     * @param final Whether this is the last chunk
     */
    push(chunk: Uint8Array, final?: boolean): void;
}
/**
 * Asynchrononously expands compressed GZIP, Zlib, or raw DEFLATE data, automatically detecting the format
 * @param data The data to decompress
 * @param opts The decompression options
 * @param cb The function to be called upon decompression completion
 * @returns A function that can be used to immediately terminate the decompression
 */
export function decompress(data: Uint8Array, opts: AsyncInflateOptions, cb: FlateCallback): AsyncTerminable;
/**
 * Asynchrononously expands compressed GZIP, Zlib, or raw DEFLATE data, automatically detecting the format
 * @param data The data to decompress
 * @param cb The function to be called upon decompression completion
 * @returns A function that can be used to immediately terminate the decompression
 */
export function decompress(data: Uint8Array, cb: FlateCallback): AsyncTerminable;
/**
 * Expands compressed GZIP, Zlib, or raw DEFLATE data, automatically detecting the format
 * @param data The data to decompress
 * @param out Where to write the data. Saves memory if you know the decompressed size and provide an output buffer of that length.
 * @returns The decompressed version of the data
 */
export function decompressSync(data: Uint8Array, out?: Uint8Array): Uint8Array;
/**
 * Attributes for files added to a ZIP archive object
 */
export interface ZipAttributes {
    /**
     * The operating system of origin for this file. The value is defined
     * by PKZIP's APPNOTE.txt, section 4.4.2.2. For example, 0 (the default)
     * is MS/DOS, 3 is UNIX, 19 is macOS.
     */
    os?: number;
    /**
     * The file's attributes. These are traditionally somewhat complicated
     * and platform-dependent, so using them is scarcely necessary. However,
     * here is a representation of what this is, bit by bit:
     *
     * `TTTTugtrwxrwxrwx0000000000ADVSHR`
     *
     * TTTT = file type (rarely useful)
     *
     * u = setuid, g = setgid, t = sticky
     *
     * rwx = user permissions, rwx = group permissions, rwx = other permissions
     *
     * 0000000000 = unused
     *
     * A = archive, D = directory, V = volume label, S = system file, H = hidden, R = read-only
     *
     * If you want to set the Unix permissions, for instance, just bit shift by 16, e.g. 0644 << 16
     */
    attrs?: number;
    /**
     * Extra metadata to add to the file. This field is defined by PKZIP's APPNOTE.txt,
     * section 4.4.28. At most 65,535 bytes may be used in each ID. The ID must be an
     * integer between 0 and 65,535, inclusive.
     *
     * This field is incredibly rare and almost never needed except for compliance with
     * proprietary standards and software.
     */
    extra?: Record<number, Uint8Array>;
    /**
     * The comment to attach to the file. This field is defined by PKZIP's APPNOTE.txt,
     * section 4.4.26. The comment must be at most 65,535 bytes long UTF-8 encoded. This
     * field is not read by consumer software.
     */
    comment?: string;
    /**
     * When the file was last modified. Defaults to the current time.
     */
    mtime?: GzipOptions['mtime'];
}
/**
 * Options for creating a ZIP archive
 */
export interface ZipOptions extends DeflateOptions, ZipAttributes {}
/**
 * Options for asynchronously creating a ZIP archive
 */
export interface AsyncZipOptions extends AsyncDeflateOptions, ZipAttributes {}
/**
 * Options for asynchronously expanding a ZIP archive
 */
export type AsyncUnzipOptions = AsyncOptions;
/**
 * A file that can be used to create a ZIP archive
 */
export type ZippableFile = Uint8Array | [Uint8Array, ZipOptions];
/**
 * A file that can be used to asynchronously create a ZIP archive
 */
export type AsyncZippableFile = Uint8Array | [Uint8Array, AsyncZipOptions];
/**
 * The complete directory structure of a ZIPpable archive
 */
export interface Zippable {
    [path: string]: Zippable | ZippableFile;
}
/**
 * The complete directory structure of an asynchronously ZIPpable archive
 */
export interface AsyncZippable {
    [path: string]: AsyncZippable | AsyncZippableFile;
}
/**
 * An unzipped archive. The full path of each file is used as the key,
 * and the file is the value
 */
export interface Unzipped {
    [path: string]: Uint8Array;
}
/**
 * Handler for string generation streams
 * @param data The string output from the stream processor
 * @param final Whether this is the final block
 */
export type StringStreamHandler = (data: string, final: boolean) => void;
/**
 * Callback for asynchronous ZIP decompression
 * @param err Any error that occurred
 * @param data The decompressed ZIP archive
 */
export type UnzipCallback = (err: Error | string, data: Unzipped) => void;
/**
 * Handler for streaming ZIP decompression
 * @param file The file that was found in the archive
 */
export type UnzipFileHandler = (file: UnzipFile) => void;
/**
 * Streaming UTF-8 decoding
 */
export class DecodeUTF8 {
    private p;
    private t;
    /**
     * Creates a UTF-8 decoding stream
     * @param cb The callback to call whenever data is decoded
     */
    constructor(cb?: StringStreamHandler);
    /**
     * Pushes a chunk to be decoded from UTF-8 binary
     * @param chunk The chunk to push
     * @param final Whether this is the last chunk
     */
    push(chunk: Uint8Array, final?: boolean): void;
    /**
     * The handler to call whenever data is available
     */
    ondata: StringStreamHandler;
}
/**
 * Streaming UTF-8 encoding
 */
export class EncodeUTF8 {
    /**
     * Creates a UTF-8 decoding stream
     * @param cb The callback to call whenever data is encoded
     */
    constructor(cb?: FlateStreamHandler);
    /**
     * Pushes a chunk to be encoded to UTF-8
     * @param chunk The string data to push
     * @param final Whether this is the last chunk
     */
    push(chunk: string, final?: boolean): void;
    /**
     * The handler to call whenever data is available
     */
    ondata: FlateStreamHandler;
}
/**
 * Converts a string into a Uint8Array for use with compression/decompression methods
 * @param str The string to encode
 * @param latin1 Whether or not to interpret the data as Latin-1. This should
 *               not need to be true unless decoding a binary string.
 * @returns The string encoded in UTF-8/Latin-1 binary
 */
export function strToU8(str: string, latin1?: boolean): Uint8Array;
/**
 * Converts a Uint8Array to a string
 * @param dat The data to decode to string
 * @param latin1 Whether or not to interpret the data as Latin-1. This should
 *               not need to be true unless encoding to binary string.
 * @returns The original UTF-8/Latin-1 string
 */
export function strFromU8(dat: Uint8Array, latin1?: boolean): string;
/**
 * A stream that can be used to create a file in a ZIP archive
 */
export interface ZipInputFile extends ZipAttributes {
    /**
     * The filename to associate with the data provided to this stream. If you
     * want a file in a subdirectory, use forward slashes as a separator (e.g.
     * `directory/filename.ext`). This will still work on Windows.
     */
    filename: string;
    /**
     * The size of the file in bytes. This attribute may be invalid after
     * the file is added to the ZIP archive; it must be correct only before the
     * stream completes.
     *
     * If you don't want to have to compute this yourself, consider extending the
     * ZipPassThrough class and overriding its process() method, or using one of
     * ZipDeflate or AsyncZipDeflate.
     */
    size: number;
    /**
     * A CRC of the original file contents. This attribute may be invalid after
     * the file is added to the ZIP archive; it must be correct only before the
     * stream completes.
     *
     * If you don't want to have to generate this yourself, consider extending the
     * ZipPassThrough class and overriding its process() method, or using one of
     * ZipDeflate or AsyncZipDeflate.
     */
    crc: number;
    /**
     * The compression format for the data stream. This number is determined by
     * the spec in PKZIP's APPNOTE.txt, section 4.4.5. For example, 0 = no
     * compression, 8 = deflate, 14 = LZMA
     */
    compression: number;
    /**
     * Bits 1 and 2 of the general purpose bit flag, specified in PKZIP's
     * APPNOTE.txt, section 4.4.4. Should be between 0 and 3. This is unlikely
     * to be necessary.
     */
    flag?: number;
    /**
     * The handler to be called when data is added. After passing this stream to
     * the ZIP file object, this handler will always be defined. To call it:
     *
     * `stream.ondata(error, chunk, final)`
     *
     * error = any error that occurred (null if there was no error)
     *
     * chunk = a Uint8Array of the data that was added (null if there was an
     * error)
     *
     * final = boolean, whether this is the final chunk in the stream
     */
    ondata?: AsyncFlateStreamHandler;
    /**
     * A method called when the stream is no longer needed, for clean-up
     * purposes. This will not always be called after the stream completes,
     * so you may wish to call this.terminate() after the final chunk is
     * processed if you have clean-up logic.
     */
    terminate?: AsyncTerminable;
}
/**
 * A pass-through stream to keep data uncompressed in a ZIP archive.
 */
export class ZipPassThrough implements ZipInputFile {
    filename: string;
    crc: number;
    size: number;
    compression: number;
    os?: number;
    attrs?: number;
    comment?: string;
    extra?: Record<number, Uint8Array>;
    mtime?: GzipOptions['mtime'];
    ondata: AsyncFlateStreamHandler;
    private c;
    /**
     * Creates a pass-through stream that can be added to ZIP archives
     * @param filename The filename to associate with this data stream
     */
    constructor(filename: string);
    /**
     * Processes a chunk and pushes to the output stream. You can override this
     * method in a subclass for custom behavior, but by default this passes
     * the data through. You must call this.ondata(err, chunk, final) at some
     * point in this method.
     * @param chunk The chunk to process
     * @param final Whether this is the last chunk
     */
    protected process(chunk: Uint8Array, final: boolean): void;
    /**
     * Pushes a chunk to be added. If you are subclassing this with a custom
     * compression algorithm, note that you must push data from the source
     * file only, pre-compression.
     * @param chunk The chunk to push
     * @param final Whether this is the last chunk
     */
    push(chunk: Uint8Array, final?: boolean): void;
}
/**
 * Streaming DEFLATE compression for ZIP archives. Prefer using AsyncZipDeflate
 * for better performance
 */
export class ZipDeflate implements ZipInputFile {
    filename: string;
    crc: number;
    size: number;
    compression: number;
    flag: 0 | 1 | 2 | 3;
    os?: number;
    attrs?: number;
    comment?: string;
    extra?: Record<number, Uint8Array>;
    mtime?: GzipOptions['mtime'];
    ondata: AsyncFlateStreamHandler;
    private d;
    /**
     * Creates a DEFLATE stream that can be added to ZIP archives
     * @param filename The filename to associate with this data stream
     * @param opts The compression options
     */
    constructor(filename: string, opts?: DeflateOptions);
    process(chunk: Uint8Array, final: boolean): void;
    /**
     * Pushes a chunk to be deflated
     * @param chunk The chunk to push
     * @param final Whether this is the last chunk
     */
    push(chunk: Uint8Array, final?: boolean): void;
}
/**
 * Asynchronous streaming DEFLATE compression for ZIP archives
 */
export class AsyncZipDeflate implements ZipInputFile {
    filename: string;
    crc: number;
    size: number;
    compression: number;
    flag: 0 | 1 | 2 | 3;
    os?: number;
    attrs?: number;
    comment?: string;
    extra?: Record<number, Uint8Array>;
    mtime?: GzipOptions['mtime'];
    ondata: AsyncFlateStreamHandler;
    private d;
    terminate: AsyncTerminable;
    /**
     * Creates a DEFLATE stream that can be added to ZIP archives
     * @param filename The filename to associate with this data stream
     * @param opts The compression options
     */
    constructor(filename: string, opts?: DeflateOptions);
    process(chunk: Uint8Array, final: boolean): void;
    /**
     * Pushes a chunk to be deflated
     * @param chunk The chunk to push
     * @param final Whether this is the last chunk
     */
    push(chunk: Uint8Array, final?: boolean): void;
}
/**
 * A zippable archive to which files can incrementally be added
 */
export class Zip {
    private u;
    private d;
    /**
     * Creates an empty ZIP archive to which files can be added
     * @param cb The callback to call whenever data for the generated ZIP archive
     *           is available
     */
    constructor(cb?: AsyncFlateStreamHandler);
    /**
     * Adds a file to the ZIP archive
     * @param file The file stream to add
     */
    add(file: ZipInputFile): void;
    /**
     * Ends the process of adding files and prepares to emit the final chunks.
     * This *must* be called after adding all desired files for the resulting
     * ZIP file to work properly.
     */
    end(): void;
    private e;
    /**
     * A method to terminate any internal workers used by the stream. Subsequent
     * calls to add() will fail.
     */
    terminate(): void;
    /**
     * The handler to call whenever data is available
     */
    ondata: AsyncFlateStreamHandler;
}
/**
 * Asynchronously creates a ZIP file
 * @param data The directory structure for the ZIP archive
 * @param opts The main options, merged with per-file options
 * @param cb The callback to call with the generated ZIP archive
 * @returns A function that can be used to immediately terminate the compression
 */
export function zip(data: AsyncZippable, opts: AsyncZipOptions, cb: FlateCallback): AsyncTerminable;
/**
 * Asynchronously creates a ZIP file
 * @param data The directory structure for the ZIP archive
 * @param cb The callback to call with the generated ZIP archive
 * @returns A function that can be used to immediately terminate the compression
 */
export function zip(data: AsyncZippable, cb: FlateCallback): AsyncTerminable;
/**
 * Synchronously creates a ZIP file. Prefer using `zip` for better performance
 * with more than one file.
 * @param data The directory structure for the ZIP archive
 * @param opts The main options, merged with per-file options
 * @returns The generated ZIP archive
 */
export function zipSync(data: Zippable, opts?: ZipOptions): Uint8Array;
/**
 * A decoder for files in ZIP streams
 */
export interface UnzipDecoder {
    /**
     * The handler to call whenever data is available
     */
    ondata: AsyncFlateStreamHandler;
    /**
     * Pushes a chunk to be decompressed
     * @param data The data in this chunk. Do not consume (detach) this data.
     * @param final Whether this is the last chunk in the data stream
     */
    push(data: Uint8Array, final: boolean): void;
    /**
     * A method to terminate any internal workers used by the stream. Subsequent
     * calls to push() should silently fail.
     */
    terminate?: AsyncTerminable;
}
/**
 * A constructor for a decoder for unzip streams
 */
export interface UnzipDecoderConstructor {
    /**
     * Creates an instance of the decoder
     * @param filename The name of the file
     * @param size The compressed size of the file
     * @param originalSize The original size of the file
     */
    new (filename: string, size?: number, originalSize?: number): UnzipDecoder;
    /**
     * The compression format for the data stream. This number is determined by
     * the spec in PKZIP's APPNOTE.txt, section 4.4.5. For example, 0 = no
     * compression, 8 = deflate, 14 = LZMA
     */
    compression: number;
}
/**
 * Streaming file extraction from ZIP archives
 */
export interface UnzipFile {
    /**
     * The handler to call whenever data is available
     */
    ondata: AsyncFlateStreamHandler;
    /**
     * The name of the file
     */
    name: string;
    /**
     * The compression format for the data stream. This number is determined by
     * the spec in PKZIP's APPNOTE.txt, section 4.4.5. For example, 0 = no
     * compression, 8 = deflate, 14 = LZMA. If start() is called but there is no
     * decompression stream available for this method, start() will throw.
     */
    compression: number;
    /**
     * The compressed size of the file
     */
    size?: number;
    /**
     * The original size of the file
     */
    originalSize?: number;
    /**
     * Starts reading from the stream. Calling this function will always enable
     * this stream, but ocassionally the stream will be enabled even without
     * this being called.
     */
    start(): void;
    /**
     * A method to terminate any internal workers used by the stream. ondata
     * will not be called any further.
     */
    terminate: AsyncTerminable;
}
/**
 * Streaming pass-through decompression for ZIP archives
 */
export class UnzipPassThrough implements UnzipDecoder {
    static compression: number;
    ondata: AsyncFlateStreamHandler;
    push(data: Uint8Array, final: boolean): void;
}
/**
 * Streaming DEFLATE decompression for ZIP archives. Prefer AsyncZipInflate for
 * better performance.
 */
export class UnzipInflate implements UnzipDecoder {
    static compression: number;
    private i;
    ondata: AsyncFlateStreamHandler;
    /**
     * Creates a DEFLATE decompression that can be used in ZIP archives
     */
    constructor();
    push(data: Uint8Array, final: boolean): void;
}
/**
 * Asynchronous streaming DEFLATE decompression for ZIP archives
 */
export class AsyncUnzipInflate implements UnzipDecoder {
    static compression: number;
    private i;
    ondata: AsyncFlateStreamHandler;
    terminate: AsyncTerminable;
    /**
     * Creates a DEFLATE decompression that can be used in ZIP archives
     */
    constructor(_: string, sz?: number);
    push(data: Uint8Array, final: boolean): void;
}
/**
 * A ZIP archive decompression stream that emits files as they are discovered
 */
export class Unzip {
    private d;
    private c;
    private p;
    private k;
    private o;
    /**
     * Creates a ZIP decompression stream
     * @param cb The callback to call whenever a file in the ZIP archive is found
     */
    constructor(cb?: UnzipFileHandler);
    /**
     * Pushes a chunk to be unzipped
     * @param chunk The chunk to push
     * @param final Whether this is the last chunk
     */
    push(chunk: Uint8Array, final?: boolean): any;
    /**
     * Registers a decoder with the stream, allowing for files compressed with
     * the compression type provided to be expanded correctly
     * @param decoder The decoder constructor
     */
    register(decoder: UnzipDecoderConstructor): void;
    /**
     * The handler to call whenever a file is discovered
     */
    onfile: UnzipFileHandler;
}
/**
 * Asynchronously decompresses a ZIP archive
 * @param data The raw compressed ZIP file
 * @param cb The callback to call with the decompressed files
 * @returns A function that can be used to immediately terminate the unzipping
 */
export function unzip(data: Uint8Array, cb: UnzipCallback): AsyncTerminable;
/**
 * Synchronously decompresses a ZIP archive. Prefer using `unzip` for better
 * performance with more than one file.
 * @param data The raw compressed ZIP file
 * @returns The decompressed files
 */
export function unzipSync(data: Uint8Array): Unzipped;
