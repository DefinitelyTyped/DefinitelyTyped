// TypeScript Version: 2.1

/// <reference types="node" />

import { Readable } from "stream";

export {};

interface BaseOpenOptions {
    /**
     * When `true` (default), ensures that an entry's reported uncompressed size matches its actual uncompressed size.
     *
     * This check happens as early as possible - during initial reading of entry (for entries with no compression), or during `openReadStream()` (for compressed entries).
     */
    validateEntrySizes?: boolean;

    /**
     * When `true` (default), entry filenames are validated not to be absolute or relative paths. If validation fails, an error is thrown.
     *
     * `false` disables validation.
     *
     * When `decodeStrings` is `false`, `validateFilenames` has no effect.
     *
     * This functionality is also available via `yauzl.validateFilename()`.
     */
    validateFilenames?: boolean;

    /**
     * When `false` (default) and `decodeStrings` is `true`, all backslash (`\`) characters in each `entry.filename` are replaced with forward slashes (`/`).
     *
     * The spec forbids filenames with backslashes, but Microsoft's `System.IO.Compression.ZipFile` class in .NET versions 4.5.0 until 4.6.1 creates non-conformant ZIP files with backslashes in filenames. `strictFilenames` is `false` by default so that clients can read these non-conformant ZIP files without knowing about this Microsoft-specific bug.
     *
     * When `strictFilenames`, `decodeStrings`, and `validateFilenames` options are all `true`, entries with backslashes in their filenames will result in an error.
     */
    strictFilenames?: boolean;

    /**
     * When `true` (default), faulty ZIP files created by Mac OS Archive Utility can be unzipped successfully, despite being malformed.
     *
     * Mac OS Archive Utility creates such faulty ZIPs when either (1) ZIP's size is over 4 GiB, (2) any file in the ZIP is over 4 GiB compressed or uncompressed, or (3) number of files in the ZIP exceeds 65535. See [yauzl#69](https://github.com/thejoshwolfe/yauzl/issues/69) for more details.
     *
     * Handling these ZIPs does have a slight overhead. Also, in some extremely rare cases, it's possible it could also cause a valid ZIP to be mis-interpreted. So if you're sure ZIP is not created by Mac OS Archive Utility, you can disable the support for a very marginal performance improvement.
     */
    supportMacArchive?: boolean;
}

type DecodeStringsOpenOptions =
    | null
    | (BaseOpenOptions & {
        /**
         * When `true` (default), yauzl will decode strings with `CP437` or `UTF8` as required by the spec.
         *
         * If set to `false`:
         *
         * * `zip.comment`, `entry.filename`, and `entry.comment` will be Buffer objects instead of Strings.
         * * Any Info-ZIP Unicode Path Extra Field will be ignored. See `extraFields`.
         * * Automatic filename validation will not be performed.
         */
        decodeStrings?: true;
    });

type NoDecodeStringsOpenOptions = BaseOpenOptions & {
    decodeStrings: false;
};

/**
 * `zip.openReadStream()` and `entry.openReadStream()` both take various options.
 *
 * `start` and `end` options can only be used if `decompress`, `decrypt` and `validateCrc32` are all `false`.
 */
type OpenReadStreamOptions =
    | null
    | {
        /** Set to `false` to disable decompressing compressed data. */
        decompress?: boolean;
        /**
         * Set to `false` to disable decrypting encrypted data.
         *
         * Specifying `decrypt: false` for an encrypted entry causes the readable stream to provide the raw, still-encrypted file data (including the 12-byte header described in the spec).
         */
        decrypt?: boolean;

        /**
         * Set to `false` to disable validation of CRC32 checksum of file data.
         */
        validateCrc32?: boolean;

        /**
         * Stream range of file data beginning at byte index `start`.
         *
         * Can only be used if `decompress`, `decrypt` and `validateCrc32` are all `false`.
         */
        start?: number;

        /**
         * Stream range of file data ending at byte index `end` (exclusive).
         *
         * Can only be used if `decompress`, `decrypt` and `validateCrc32` are all `false`.
         */
        end?: number;
    };

/**
 * Opens ZIP file, ready for reading.
 *
 * It maintains a single file descriptor for the file throughout - `fs.open()` is only called once.
 *
 * @example
 * const zip = await yauzl.open('/path/to/file.zip');
 */
export function open(
    path: string,
    options?: DecodeStringsOpenOptions,
): Promise<Zip<string>>;
export function open(
    path: string,
    options: NoDecodeStringsOpenOptions,
): Promise<Zip<Buffer>>;

/**
 * Reads from the provided file descriptor, which is presumed to be an open `.zip` file.
 *
 * Note that random access is required by the ZIP file specification, so the file descriptor cannot be an open socket or any other file descriptor that does not support random access.
 */
export function fromFd(
    fd: number,
    options?: DecodeStringsOpenOptions,
): Promise<Zip<string>>;
export function fromFd(
    fd: number,
    options: NoDecodeStringsOpenOptions,
): Promise<Zip<Buffer>>;

/**
 * Open ZIP file from a `Buffer` in memory.
 */
export function fromBuffer(
    buffer: Buffer,
    options?: DecodeStringsOpenOptions,
): Promise<Zip<string>>;
export function fromBuffer(
    buffer: Buffer,
    options: NoDecodeStringsOpenOptions,
): Promise<Zip<Buffer>>;

/**
 * This method of reading a ZIP file allows clients to implement their own back-end file system. For example, a client might translate read calls into network requests.
 *
 * @param reader An instance of a subclass of `yauzl.Reader` which implements the required methods.
 * @param size The total size in bytes of the ZIP file.
 */
export function fromReader(
    reader: Reader,
    size: number,
    options?: DecodeStringsOpenOptions,
): Promise<Zip<string>>;
export function fromReader(
    reader: Reader,
    size: number,
    options: NoDecodeStringsOpenOptions,
): Promise<Zip<Buffer>>;

/**
 * Converts MS-DOS `date` and `time` data into a JavaScript `Date` object. Each parameter is a `Number`, treated as an unsigned 16-bit integer. Note that DOS date/time format does not support timezones, so the date will be interpreted as UTC.
 *
 * NB: Original `yauzl` interpreted dates according to local timezone. UTC is used here instead to ensure consistent result when unzipping the same ZIP anywhere.
 *
 * @param date Date integer
 * @param time Time integer
 * @example
 * const entry = await zip.readEntry();
 * const date = yauzl.dosDateTimeToDate(entry.lastModDate, entry.lastModTime);
 */
export function dosDateTimeToDate(date: number, time: number): Date;

/**
 * Checks filename is not absolute or relative path, and does not contain backslashes (`\`). Throws an error if it does.
 *
 * This function is automatically run for each entry, as long as `decodeStrings` and `validateFilenames` options are `true`.
 */
export function validateFilename(filename: string): void;

/**
 * Instances of `Zip` class are returned by `open()`, `fromFd()`, `fromBuffer()`, and `fromReader()`. The constructor for the class is not part of the public API.
 */
export class Zip<DecodedString extends string | Buffer = string> implements AsyncIterable<Entry<DecodedString>> {
    /**
     * `true` if `Zip` is open for reading. `false` if `zip.close()` has been called.
     */
    get isOpen(): boolean;

    /**
     * Total number of entries in ZIP file.
     */
    get entryCount(): number;

    /**
     * `true` if `entryCount` can be relied on for accuracy.
     *
     * Mac OS Archive Utility truncates `entryCount` to 16 bits (i.e. max 65535), so it can be inaccurate.
     *
     * Where the ZIP file has been identified as possibly a Mac OS ZIP, and it's possible `entryCount` is inaccurate, `entryCountIsCertain` will be `false`. In this case, actual number of entries may be higher than reported (but not lower).
     *
     * As entries are read with `readEntry()`, `entryCount` will be increased if it becomes evident that there are more entries than reported. Once `entryCount` is determined to definitely be accurate, `entryCountIsCertain` will change to `true`.
     */
    get entryCountIsCertain(): boolean;

    /**
     * Always decoded with `CP437` per the spec.
     *
     * If `options.decodeStrings` is `false`, this field is the undecoded `Buffer` instead of a decoded `String`.
     */
    get comment(): DecodedString;

    /** `true` if ZIP file uses ZIP64 extension (allowing more than 65535 files, or file data larger than 4 GiB). */
    get isZip64(): boolean;

    /** `true` if ZIP is a faulty Mac OS Archive Utility ZIP. `false` if it's not known to be. */
    get isMacArchive(): boolean;

    /**
     * Indicates whether ZIP *may* be a Mac OS Archive Utility ZIP.
     */
    get isMaybeMacArchive(): boolean;

    /**
     * Closes file and returns Promise which resolves when underlying file/file descriptor/reader is closed.
     *
     * Files **must** be closed when finished with to avoid resource leakages.
     *
     * @example
     * const zip = await yauzl.open('/path/to/file.zip');
     * // Read entries etc, and then...
     * await zip.close();
     */
    close(): Promise<void>;

    /**
     * Read next entry from ZIP file. Return value is an instance of `yauzl.Entry` class.
     *
     * When there are no entries left, returns `null`.
     *
     * Calling `.readEntry()` again returns the next entry.
     *
     * @example
     * const entry1 = await zip.readEntry();
     * const entry2 = await zip.readEntry();
     */
    readEntry(): Promise<null | Entry<DecodedString>>;

    /**
     * Read up to `numEntries` entries, and return as an array.
     *
     * If `numEntries` is `null` or `undefined`, reading will continue until all entries are read.
     *
     * WARNING: This is dangerous. If ZIP contains a large number of files, could lead to crash due to out of memory. Safer to use async iteration instead.
     *
     * @example
     * const [entry1, entry2] = await zip.readEntries(2);
     * const [entry3, entry4] = await zip.readEntries(2);
     */
    readEntries(numEntries?: null | number): Promise<Array<Entry<DecodedString>>>;

    /**
     * `Zip`s can be used as async iterators, iterating over entries.
     *
     * @example
     * const zip = await yauzl.open('/path/to/file.zip');
     * for await (const entry of zip) {
     *   // Do something with the entry
     * }
     * await zip.close();
     */
    [Symbol.asyncIterator](): AsyncIterator<Entry<DecodedString>>;

    /**
     * Open a readable stream for the contents of a ZIP file entry. Returns a promise of a stream.
     *
     * It is possible to destroy the `readStream` before it has piped all of its data. To do this, call `readStream.destroy()`. This closes the specific stream, but not the ZIP file as a whole. The underlying file descriptor used for reading from the ZIP file remains open, so calling `zip.close()` is still required.
     *
     * @param entry An `Entry` object from this `Zip`.
     * @example
     * const readStream = await zip.openReadStream(entry);
     * readStream.pipe(writeStream);
     */
    openReadStream(
        entry: Entry<DecodedString>,
        options?: OpenReadStreamOptions,
    ): Promise<Readable>;
}

/**
 * Instances of `Entry` class are returned by `zip.readEntry()`, `zip.readEntries()`, or using a `Zip` as an async iterator. The constructor for the class is not part of the public API.
 *
 * Objects of this class represent ZIP file entries. Refer to the [ZIP file specification](https://pkware.cachefly.net/webdocs/casestudies/APPNOTE.TXT) for more details about these fields.
 */
export class Entry<DecodedString extends string | Buffer = string> {
    get versionMadeBy(): number;
    get versionNeededToExtract(): number;
    get generalPurposeBitFlag(): number;
    get compressionMethod(): number;
    get lastModDate(): number;
    get lastModTime(): number;
    get crc32(): number;
    get compressedSize(): number;
    get uncompressedSize(): number;
    get internalFileAttributes(): number;
    get externalFileAttributes(): number;
    get fileHeaderOffset(): number;
    get fileDataOffset(): undefined | number;

    /**
     * Following the spec, the bytes for the filename are decoded as `UTF8` if `generalPurposeBitFlag & 0x800`, otherwise as `CP437`. Alternatively, this field may be populated from the Info-ZIP Unicode Path Extra Field (see `extraFields`).
     *
     * This field is automatically validated unless `decodeStrings` or `validateFilenames` options are false.
     *
     * If `decodeStrings` option is `false`, this field is the undecoded `Buffer` instead of a decoded `String`. In that case, `generalPurposeBitFlag` and any Info-ZIP Unicode Path Extra Field are ignored.
     *
     * NB: In original `yauzl`, this field was named `fileName` (capital `N`).
     */
    get filename(): DecodedString;

    /**
     * `true` if `uncompressedSize` is reliable.
     *
     * Mac OS Archive Utility truncates `uncompressedSize` to 32 bits (i.e. max size 4 GiB), so it is inaccurate for files >= 4 GiB in size.
     *
     * Where the ZIP file has been identified as possibly a Mac OS ZIP, and it's possible `uncompressedSize` is inaccurate, `uncompressedSizeIsCertain` will be `false`. In this case, actual `uncompressedSize` may be higher than reported (but not lower).
     *
     * After `openReadStream()` has completed streaming out the file, `uncompressedSize` will be updated to reflect the accurate uncompressed data size, and `uncompressedSizeIsCertain` will change to `true`. NB: This doesn't happen if either decompression (`decompress` option) or entry size validation (`validateEntrySizes` option) are disabled. Both are enabled by default.
     */
    get uncompressedSizeIsCertain(): boolean;

    /**
     * `Array` with each entry in the form `{id, data}`, where `id` is a `Number` and `data` is a `Buffer`.
     *
     * This library looks for and reads the ZIP64 Extended Information Extra Field (0x0001) in order to support ZIP64 format ZIP files.
     *
     * This library also looks for and reads the Info-ZIP Unicode Path Extra Field (0x7075) in order to support some ZIP files that use it instead of General Purpose Bit 11 to convey `UTF8` filenames. When the field is identified and verified to be reliable (see the ZIP file spec), the filename in this field is stored in the `filename` property, and the filename in the central directory record for this entry is ignored. When `decodeStrings` is `false`, any Info-ZIP Unicode Path Extra Fields are ignored.
     *
     * None of the other fields are considered significant by this library. Fields that this library reads are left unaltered in the `extraFields` array.
     */
    get extraFields(): Array<{ id: number; data: Buffer }>;

    /**
     * `String` decoded with the charset indicated by `generalPurposeBitFlag & 0x800`, as with `filename` (the Info-ZIP Unicode Path Extra Field has no effect on the charset used for this field).
     *
     * If `decodeStrings` is `false`, this field is the undecoded `Buffer` instead of a decoded `String`.
     */
    get comment(): DecodedString;

    /**
     * Get last mod date as a `Date` object. Effectively implemented as:
     *
     * ```js
     * dosDateTimeToDate(entry.lastModDate, entry.lastModTime)
     * ```
     *
     * See `dosDateTimeToDate()`.
     */
    get getLastMod(): Date;

    /**
     * Returns whether this entry is encrypted with "Traditional Encryption". Effectively implemented as:
     *
     * ```js
     * (entry.generalPurposeBitFlag & 0x1) !== 0
     * ```
     *
     * Note that "Strong Encryption" is not supported, and will result in an error.
     */
    get isEncrypted(): boolean;

    /**
     * Effectively implemented as:
     *
     * ```js
     * entry.compressionMethod !== 0
     * ```
     *
     * NB: This differs slightly from original `yauzl`'s behavior. `yauzl` would return `false` for an entry which is compressed, but with a compression method other than `8` (Deflate compression).
     */
    get isCompressed(): boolean;

    /**
     * Open a readable stream for the contents of a ZIP file entry. Returns a promise of a stream.
     *
     * @see {Zip.prototype.openReadStream}
     */
    openReadStream(options?: OpenReadStreamOptions): Promise<Readable>;
}

/**
 * This class is meant to be subclassed by clients and instantiated for the `fromReader()` function.
 *
 * If creating your own `Reader` subclass, it should provide the following methods:
 *
 * * `_createReadStream(start, length)` (required)
 * * `async _read(start, length)` (optional)
 * * `async _open()` (optional)
 * * `async _close()` (optional)
 *
 * The file readers provided by `yauzl` for `open()` etc are subclasses of `Reader`. Their implementations can be found in `lib/reader.js`.
 */
export class Reader {
    /**
     * Open reader.
     *
     * Calls `._open()` method defined by subclass.
     *
     * If already open, does nothing.
     */
    open(): Promise<void>;

    /**
     * Close reader.
     *
     * Calls `._close()` method defined by subclass.
     *
     * If already closed, does nothing.
     *
     * @throws {Error} If Reader is currently being read from
     */
    close(): Promise<void>;

    /**
     * Read bytes into Buffer.
     *
     * @param start Starting position to read at
     * @param length Number of bytes to read
     * @throws {Error} If Reader is not open
     */
    read(start: number, length: number): Promise<Buffer>;

    /**
     * Create readable stream to read from Reader.
     *
     * @param start Position to start reading at
     * @param length Number of bytes to read
     * @throws {Error}  If arguments invalid or reader is not open
     */
    createReadStream(start: number, length: number): Readable;

    /**
     * Open Reader.
     *
     * Default implementation does nothing. Subclasses can optionally implement this.
     */
    _open(): Promise<void>;

    /**
     * Close Reader.
     *
     * Default implementation does nothing. Subclasses can optionally implement this.
     */
    _close(): Promise<void>;

    /**
     * Read bytes from Reader into a Buffer.
     *
     * Subclasses can override this.
     *
     * @param start - Starting position to read at
     * @param length - Number of bytes to read
     */
    _read(start: number, length: number): Promise<Buffer>;

    /**
     * Create readable stream to read from Reader.
     *
     * Subclasses must implement this.
     *
     * @param  start Position to start reading at
     * @param  length Number of bytes to read
     * @throws {Error} If fail to create stream
     */
    _createReadStream(start: number, length: number): Readable;
}
