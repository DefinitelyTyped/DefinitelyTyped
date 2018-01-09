declare namespace adone {
    /**
     * Various archivers
     */
    namespace archive {
        /**
         * tar archiver
         */
        namespace tar {
            namespace I {
                interface Header {
                    /**
                     * File path
                     */
                    name: string;

                    /**
                     * Type of entry, file by default
                     */
                    type: "file" | "directory" | "link" | "symlink" | "block-device" | "character-device" | "fifo" | "contiguous-file";

                    /**
                     * Entry mode, 0755 for dirs and 0644 by default
                     */
                    mode: number;

                    /**
                     * Last modified date for entry, now by default
                     */
                    mtime: number;

                    /**
                     * Entry size, 0 by default
                     */
                    size: number;

                    /**
                     * Linked file name
                     */
                    linkname: string;

                    /**
                     * uid for entry owner, 0 by default
                     */
                    uid: number;

                    /**
                     * gid for entry owner, 9 by default
                     */
                    gid: number;

                    /**
                     * uname of entry owner, null by default
                     */
                    uname: string;

                    /**
                     * gname of entry owner, null by default
                     */
                    gname: string;

                    /**
                     * device minor versio, 0 by default
                     */
                    devmajor: number;

                    /**
                     * device minor version, 0 by default
                     */
                    devminor: number;
                }

                type Optional<T> = {
                    [P in keyof T]?: T[P];
                };

                interface OptionalHeader extends Optional<Header> {
                    /**
                     * File path
                     */
                    name: string;
                }

                interface CommonOptions {
                    /**
                     * Entries filter
                     */
                    ignore?(name: string): boolean;

                    /**
                     * Header mapper, called for each each entry
                     */
                    map?(header: Header): Header | undefined;

                    /**
                     * Set the dmode and fmode to writable
                     */
                    readable?: boolean;

                    /**
                     * Set the dmode and fmode to writable
                     */
                    writable?: boolean;

                    /**
                     * Strip the parts of paths of files
                     */
                    strip?: number;

                    /**
                     * Ensure that packed directories have the corresponding modes
                     */
                    dmode?: number;

                    /**
                     * Ensure that packed files have the corresponding modes
                     */
                    fmode?: number;

                    /**
                     * A custom umask, process.umask() by default
                     */
                    umask?: number;
                }

                interface PackOptions extends CommonOptions {
                    /**
                     * Input read stream modifier, called for each entry
                     */
                    mapStream?(stream: fs.I.ReadStream, header: Header): nodestd.stream.Readable;

                    /**
                     * Pack the contents of the symlink instead of the link itself, false by default
                     */
                    dereference?: boolean;

                    /**
                     * Specifies which entries to pack, all by default
                     */
                    entries?: string[];

                    /**
                     * Whether to sort entries before packing
                     */
                    sort?: boolean;

                    /**
                     * set false to ignore errors due to unsupported entry types (like device files), true by default
                     */
                    strict?: boolean;

                    /**
                     * A custom initial pack stream
                     */
                    pack?: RawPackStream;
                }

                type Writable = nodestd.stream.Writable;

                interface LinkSink extends Writable {
                    linkname: string;
                }

                interface UnpackOptions extends CommonOptions {
                    /**
                     * Input read stream modifier, called for each entry
                     */
                    mapStream?(stream: UnpackSourceStream, header: Header): nodestd.stream.Readable;

                    /**
                     * Whether to change time properties of files
                     */
                    utimes?: boolean;

                    /**
                     * Whether to change owner of the files
                     */
                    chown?: boolean;

                    /**
                     * A custom unpack stream
                     */
                    unpack?: RawUnpackStream;

                    /**
                     * Copies a file if cannot create a link
                     */
                    hardlinkAsFilesFallback?: boolean;
                }

                interface UnpackSourceStream extends nodestd.stream.PassThrough {
                    _parent: RawUnpackStream;
                }
            }

            /**
             * Represents a raw tar unpack stream
             */
            class RawPackStream extends nodestd.stream.Readable {
                entry(header: I.OptionalHeader, buffer: Buffer, callback?: (err: any) => void): I.Writable;
                entry(header: I.OptionalHeader & { type: "symblink", linkname: string }, callback?: (err: any) => void): I.Writable;
                entry(header: I.OptionalHeader & { type: "symlink" }, callback?: (err: any) => void): I.LinkSink;
                entry(header: I.OptionalHeader, callback?: (err: any) => void): I.Writable;

                finalize(): void;

                destroy(err?: any): void;
            }

            /**
             * Represents a raw writable unpack stream
             */
            class RawUnpackStream extends nodestd.stream.Writable {
                on(event: string, listener: (...args: any[]) => void): this;
                on(event: "entry", listener: (header: I.Header, stream: I.UnpackSourceStream, next: (err?: any) => void) => void): this;
                on(event: "close", listener: () => void): this;
                on(event: "drain", listener: () => void): this;
                on(event: "error", listener: (err: Error) => void): this;
                on(event: "finish", listener: () => void): this;
                on(event: "pipe", listener: (src: nodestd.stream.Readable) => void): this;
                on(event: "unpipe", listener: (src: nodestd.stream.Readable) => void): this;

                once(event: string, listener: (...args: any[]) => void): this;
                once(event: "entry", listener: (header: I.Header, stream: I.UnpackSourceStream, next: (err?: any) => void) => void): this;
                once(event: "close", listener: () => void): this;
                once(event: "drain", listener: () => void): this;
                once(event: "error", listener: (err: Error) => void): this;
                once(event: "finish", listener: () => void): this;
                once(event: "pipe", listener: (src: nodestd.stream.Readable) => void): this;
                once(event: "unpipe", listener: (src: nodestd.stream.Readable) => void): this;
            }

            /**
             * Creates a pack stream for the files from the given directory
             *
             * @param cwd directory to pack
             */
            function packStream(cwd: string, options?: I.PackOptions): RawPackStream;

            /**
             * Creates an unpack stream to the given direcotry
             *
             * @param cwd direcotry to unpack to
             */
            function unpackStream(cwd: string, options?: I.UnpackOptions): RawUnpackStream;
        }

        /**
         * zip archiver
         */
        namespace zip {
            /**
             * zip packer
             */
            namespace pack {
                class ZipFile {
                    /**
                     * A readable stream that will produce the contents of the zip file
                     */
                    outputStream: nodestd.stream.Readable;

                    /**
                     * Adds a file from the file system at realPath into the zipfile as metadataPath
                     *
                     * @param path path to the file
                     * @param metadataPath path to the file inside the archive
                     */
                    addFile(path: string, metadataPath: string, options?: {
                        /**
                         * Overrides the value that will be obtained from stat
                         */
                        mtime?: number,

                        /**
                         * Overrides the value that will be obtained from stat
                         */
                        mode?: number,

                        /**
                         * If true, the file data will be deflated (compression method 8).
                         *
                         * If false, the file data will be stored (compression method 0)
                         */
                        compress?: boolean,

                        /**
                         * Use ZIP64 format in this entry's Data Descriptor and Central Directory Record
                         * regardless of if it's required or not (this may be useful for testing.).
                         * Otherwise, packer will use ZIP64 format where necessary.
                         */
                        forceZip64Format?: boolean
                    }): this;

                    /**
                     * Adds a file to the zip file whose content is read from readStream
                     *
                     * @param stream a readable stream for the file
                     * @param metadataPath path to the file inside the archive
                     */
                    addReadStream(stream: nodestd.stream.Readable, metadataPath: string, options?: {
                        /**
                         * Defines modified date, now by default
                         */
                        mtime?: number,

                        /**
                         * Defines file mode, 0o100664 by default
                         */
                        mode?: number,

                        /**
                         * If true, the file data will be deflated (compression method 8).
                         *
                         * If false, the file data will be stored (compression method 0)
                         */
                        compress?: boolean,

                        /**
                         * Use ZIP64 format in this entry's Data Descriptor and Central Directory Record
                         * regardless of if it's required or not (this may be useful for testing.).
                         * Otherwise, packer will use ZIP64 format where necessary.
                         */
                        forceZip64Format?: boolean,

                        /**
                         * If given, it will be checked against the actual number of bytes in the readStream,
                         * and an error will be emitted if there is a mismatch
                         */
                        size?: number
                    }): this;

                    /**
                     * Adds a file to the zip file whose content is buffer
                     *
                     * @param buffer the file's contents, must be at most 0x3fffffff bytes long
                     * @param metadataPath path to the file inside the archive
                     */
                    addBuffer(buffer: Buffer, metadataPath: string, options?: {
                        /**
                         * Defines modified date, now by default
                         */
                        mtime?: number,

                        /**
                         * Defines file mode, 0o100664 by default
                         */
                        mode?: number,

                        /**
                         * If true, the file data will be deflated (compression method 8).
                         *
                         * If false, the file data will be stored (compression method 0)
                         */
                        compress?: boolean,

                        /**
                         * Use ZIP64 format in this entry's Data Descriptor and Central Directory Record
                         * regardless of if it's required or not (this may be useful for testing.).
                         * Otherwise, packer will use ZIP64 format where necessary.
                         */
                        forceZip64Format?: boolean
                    }): this;

                    /**
                     * Adds an entry to the zip file that indicates a directory should be created,
                     * even if no other items in the zip file are contained in the directory
                     */
                    addEmptyDirectory(metadataPath: string, options?: {
                        /**
                         * Defines modified date, now by default
                         */
                        mtime?: number,

                        /**
                         * Defines file mode, 0o40775 by default
                         */
                        mode?: number
                    }): this;

                    /**
                     * Indicates that no more files will be added via addFile(), addReadStream(), or addBuffer().
                     * Some time after calling this function, outputStream will be ended.
                     *
                     * @returns the final guessed size of the file, can be -1 if it is hard to guess before processing. This will happend
                     *      only if compression is enabled, or a stream with no size hint given
                     */
                    end(options?: {
                        /**
                         * If true, packet will include the ZIP64 End of Central Directory Locator and ZIP64 End of Central Directory Record
                         * regardless of whether or not they are required (this may be useful for testing.).
                         * Otherwise, packer will include these structures if necessary
                         */
                        forceZip64Format?: boolean
                    }): Promise<number>;
                }
            }

            /**
             * zip unpacker
             */
            namespace unpack {
                namespace I {
                    interface ExtraField {
                        id: number;
                        data: Buffer;
                    }

                    interface Entry<StringType> {
                        versionMadeBy: number;
                        versionNeededToExtract: number;
                        generalPurposeBitFlag: number;
                        compressionMethod: number;
                        lastModFileTime: number;
                        lastModFileDate: number;
                        crc32: number;
                        compressedSize: number;
                        uncompressedSize: number;
                        fileNameLength: number;
                        extraFieldLength: number;
                        fileCommentLength: number;
                        internalFileAttributes: number;
                        externalFileAttributes: number;
                        relativeOffsetOfLocalHeader: number;

                        /**
                         * The bytes for the file name are decoded with UTF-8 if generalPurposeBitFlag & 0x800, otherwise with CP437.
                         * Alternatively, this field may be populated from the Info-ZIP Unicode Path Extra Field (see extraFields).
                         */
                        fileName: StringType;

                        extraFields: ExtraField[];

                        /**
                         * Comment decoded with the charset indicated by generalPurposeBitFlag & 0x800 as with the fileName
                         */
                        fileComment: StringType;

                        getLastModDate(): adone.I.datetime.Datetime;

                        /**
                         * Whether this entry is encrypted with "Traditional Encryption"
                         */
                        isEncrypted(): boolean;

                        /**
                         * Whether the entry is compressed
                         */
                        isCompressed(): boolean;
                    }

                    interface ZipFile<StringType> extends event.EventEmitter {
                        /**
                         * true until close() is called; then it's false
                         */
                        isOpen: boolean;

                        /**
                         * Total number of central directory records
                         */
                        entryCount: number;

                        /**
                         * Always decoded with CP437 per the spec
                         */
                        comment: StringType;

                        /**
                         * Causes all future calls to openReadStream() to fail,
                         * and closes the fd after all streams created by openReadStream() have emitted their end events
                         */
                        close(): void;

                        readEntry(): Promise<void>;

                        /**
                         * Opens a read stream for the given entry
                         */
                        openReadStream(entry: Entry<StringType>, options?: {
                            /**
                             * The option must be omitted when the entry is not compressed (see isCompressed()),
                             * and either true (or omitted) or false when the entry is compressed.
                             * Specifying decompress: false for a compressed entry causes the read stream
                             * to provide the raw compressed file data without going through a zlib inflate transform
                             */
                            decompress?: boolean,

                            /**
                             * The option must be null (or omitted) for non-encrypted entries,
                             * and false for encrypted entries. Omitting the option for an encrypted entry will result in an err.
                             */
                            decrypt?: boolean,

                            /**
                             * The start byte offset (inclusive) into this entry's file data
                             */
                            start?: number,

                            /**
                             * The end byte offset (exclusive) into this entry's file data
                             */
                            end?: number,
                        }): Promise<nodestd.stream.Readable>;

                        /**
                         * Emitted for each entry.
                         *
                         * If decodeStrings is true, entries emitted via this event have already passed file name validation
                         *
                         * If validateEntrySizes is true and this entry's compressionMethod is 0 (stored without compression),
                         * this entry has already passed entry size validation
                         */
                        on(event: "entry", listener: (entry: Entry<StringType>) => void): this;

                        /**
                         * Emitted after the last entry event has been emitted
                         */
                        on(event: "end", listener: () => void): this;

                        /**
                         * Emitted after the fd is actually closed
                         */
                        on(event: "close", listener: () => void): this;

                        /**
                         * Emitted in the case of errors with reading the zip file
                         */
                        on(event: "error", listener: (err: any) => void): this;

                        /**
                         * Emitted for each entry.
                         *
                         * If decodeStrings is true, entries emitted via this event have already passed file name validation
                         *
                         * If validateEntrySizes is true and this entry's compressionMethod is 0 (stored without compression),
                         * this entry has already passed entry size validation
                         */
                        once(event: "entry", listener: (entry: Entry<StringType>) => void): this;

                        /**
                         * Emitted after the last entry event has been emitted
                         */
                        once(event: "end", listener: () => void): this;

                        /**
                         * Emitted after the fd is actually closed
                         */
                        once(event: "close", listener: () => void): this;

                        /**
                         * Emitted in the case of errors with reading the zip file
                         */
                        once(event: "error", listener: (err: any) => void): this;
                    }

                    interface CommonOptions {
                        /**
                         * Indicates that entries should be read only when readEntry() is called.
                         * If lazyEntries is false, entry events will be emitted as fast as possible
                         * to allow pipe()-ing file data from all entries in parallel.
                         *
                         * Default is false
                         */
                        lazyEntries?: boolean;

                        /**
                         * Causes unpacker to decode strings with CP437 or UTF-8 as required by the spec.
                         *
                         * When turned off zipfile.comment, entry.fileName, and entry.fileComment will be Buffer,
                         * any Info-ZIP Unicode Path Extra Field will be ignored, automatic file name validation will not be performed
                         */
                        decodeStrings?: boolean;

                        /**
                         * Ensures that an entry's reported uncompressed size matches its actual uncompressed size
                         */
                        validateEntrySizes?: boolean;
                    }

                    interface PathOptions extends CommonOptions {
                        /**
                         * Autocloses the file after the last entry reading or when an error occurs
                         *
                         * Default is true
                         */
                        autoClose?: boolean;
                    }

                    interface FdOptions extends CommonOptions {
                        /**
                         * Autocloses the file after the last entry reading or when an error occurs
                         *
                         * Default is false
                         */
                        autoClose?: boolean;
                    }

                    type BufferOptions = CommonOptions;

                    interface RandomAccessReaderOptions extends CommonOptions {
                        /**
                         * Autocloses the file after the last entry reading or when an error occurs
                         *
                         * Default is true
                         */
                        autoClose?: boolean;
                    }
                }

                /**
                 * Opens a file and creates a zipfile unpacker
                 */
                function open(path: string, options: I.PathOptions & { decodeStrings: false }): I.ZipFile<Buffer>;

                /**
                 * Opens a file and creates a zipfile unpacker
                 */
                function open(path: string, options?: I.PathOptions): I.ZipFile<string>;

                /**
                 * Creates a zipfile unpacker for the given fd
                 */
                function fromFd(fd: number, options: I.FdOptions & { decodeStrings: false }): I.ZipFile<Buffer>;

                /**
                 * Creates a zipfile unpacker for the given fd
                 */
                function fromFd(fd: number, options?: I.FdOptions): I.ZipFile<string>;

                /**
                 * Creates a zipfile unpacker for the given buffer
                 */
                function fromBuffer(buffer: Buffer, options: I.BufferOptions & { decodeStrings: false }): I.ZipFile<Buffer>;

                /**
                 * Creates a zipfile unpacker for the given buffer
                 */
                function fromBuffer(buffer: Buffer, options?: I.BufferOptions): I.ZipFile<string>;

                /**
                 * Creates a zipfile unpacker for the given random access reader.
                 * This method of reading a zip file allows clients to implement their own back-end file system
                 *
                 * @param totalSize Indicates the total file size of the zip file
                 */
                function fromRandomAccessReader(
                    reader: fs.AbstractRandomAccessReader,
                    totalSize: number,
                    options: I.RandomAccessReaderOptions & { decodeStrings: false }
                ): I.ZipFile<Buffer>;

                /**
                 * Creates a zipfile unpacker for the given random access reader.
                 * This method of reading a zip file allows clients to implement their own back-end file system
                 *
                 * @param totalSize Indicates the total file size of the zip file
                 */
                function fromRandomAccessReader(
                    reader: fs.AbstractRandomAccessReader,
                    totalSize: number,
                    options?: I.RandomAccessReaderOptions
                ): I.ZipFile<string>;

                /**
                 * Returns null or a String error message depending on the validity of fileName
                 */
                function validateFileName(filename: string): string | null;
            }
        }
    }
}
