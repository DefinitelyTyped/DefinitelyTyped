// Type definitions for tar 6.1
// Project: https://github.com/npm/node-tar
// Definitions by: Maxime LUCE <https://github.com/SomaticIT>, Connor Peet <https://github.com/connor4312>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped
// TODO: When/if typings for [fstream](https://github.com/npm/fstream) are written, refactor this typing to use it for the various streams.

/// <reference types="node" />

import stream = require('stream');
import zlib = require('zlib');
import MiniPass = require('minipass');

// #region Interfaces

export interface HeaderProperties {
    path: string;
    mode?: number | undefined;
    noProprietary?: boolean | undefined;
    uid?: number | undefined;
    gid?: number | undefined;
    size?: number | undefined;
    mtime?: number | undefined;
    type?: string | undefined;
    uname?: string | undefined;
    gname?: string | undefined;
    devmaj?: number | undefined;
    devmin?: number | undefined;
}

export interface ExtractOptions {
    type?: string | undefined;
    Directory?: boolean | undefined;
    path?: string | undefined;
    strip?: number | undefined;
}

export interface ParseStream extends NodeJS.ReadWriteStream {
    position: number;

    _stream: stream.Stream;
    _ended: boolean;

    _streamEnd(): void;
    _process(c: Buffer): void;
    _startEntry(c: Buffer): void;
}

export interface PackStream extends NodeJS.ReadWriteStream {
    writable: boolean;
    readable: boolean;

    _noProprietary: boolean;
    _global: HeaderProperties;
    _buffer: stream.Stream[];
    _currentEntry: any;
    _processing: boolean;
    _pipeRoot: stream.Stream;
    _needDrain: boolean;
    _paused: boolean;

    addGlobal(props: HeaderProperties): void;
    add(stream: stream.Stream): boolean;
    destroy(): void;

    _process(): void;
}

// #endregion

// #region Enums

export interface Fields {
    path: number;
    mode: number;
    uid: number;
    gid: number;
    size: number;
    mtime: number;
    cksum: number;
    type: number;
    linkpath: number;
    ustar: number;
    ustarvar: number;
    uname: number;
    gname: number;
    devmaj: number;
    devmin: number;
    prefix: number;
    fill: number;
}

export type fields = Fields; // alias for backwards compatbility

export const fieldSize: number[];
export const fieldOffs: number[];
export const fieldEnds: number[];

/**
 * Different values of the 'type' field
 * paths match the values of Stats.isX() functions, where appropriate
 */
export const types: {
    0: string;
    '\0': string;
    '': string;
    1: string;
    2: string;
    3: string;
    4: string;
    5: string;
    6: string;
    7: string;
    g: string;
    x: string;
    A: string;
    D: string;
    I: string;
    K: string;
    L: string;
    M: string;
    N: string;
    S: string;
    V: string;
    X: string;
    File: string;
    OldFile: string;
    Link: string;
    SymbolicLick: string;
    CharacterDevice: string;
    BlockDevice: string;
    Directory: string;
    FIFO: string;
    ContiguousFile: string;
    GlobalExtendedHeader: string;
    ExtendedHeader: string;
    SolarisACL: string;
    GNUDumpDir: string;
    INode: string;
    NextFileHasLonLinkPath: string;
    NextFileHasLongPath: string;
    ContinuationFile: string;
    TapeVolumeHeader: string;
    OldExtendedHeader: string;
};

/**
 * Values for the mode field
 */
export const modes: {
    suid: number;
    sgid: number;
    svtx: number;
    uread: number;
    uwrite: number;
    uexec: number;
    gread: number;
    gwrite: number;
    gexec: number;
    oread: number;
    owrite: number;
    oexec: number;
};

export const numeric: {
    mode: boolean;
    uid: boolean;
    gid: boolean;
    size: boolean;
    mtime: boolean;
    devmaj: boolean;
    devmin: boolean;
    cksum: boolean;
    atime: boolean;
    ctime: boolean;
    dev: boolean;
    ino: boolean;
    nlink: boolean;
};

export const knownExtended: {
    atime: boolean;
    charset: boolean;
    comment: boolean;
    ctime: boolean;
    gid: boolean;
    gname: boolean;
    linkpat: boolean;
    mtime: boolean;
    path: boolean;
    realtime: boolean;
    security: boolean;
    size: boolean;
    uid: boolean;
    uname: boolean;
};

export const headerSize: number;
export const blockSize: number;

export interface ParseOptions {
    strict?: boolean;
    filter?: (path: string, entry: ReadEntry) => boolean;
    onentry?: (entry: ReadEntry) => void;
    onwarn?: (code: string, message: string, data: Buffer) => void;
}
/**
 * A writable stream. Write tar data to it and it will emit entry events for each entry parsed from the tarball. This is used by tar.Extract.
 */
export interface Parse extends ParseStream {
    on(event: 'end' | 'close', listener: () => void): this;
    on(event: 'entry', listener: (entry: ReadEntry) => void): this;
}

export const Parse: {
    new (opt?: ParseOptions): Parse;
};
//#endregion

//#region Global Methods

export interface PackOptions {
    /**
     * A function that will get called with (code, message, data) for any
     * warnings encountered. (See "Warnings and Errors")
     */
    onwarn?(code: string, message: string, data: Buffer): void;
    /**
     * Treat warnings as crash-worthy errors.
     *
     * @default false
     */
    strict?: boolean;
    /**
     * The current working directory for creating the archive.
     *
     * @default process.cwd()
     */
    cwd?: string[];
    /**
     * A path portion to prefix onto the entries in the archive.
     */
    prefix?: string;
    /**
     * Set to any truthy value to create a gzipped archive, or an object with
     * settings for zlib.Gzip()
     */
    gzip?: boolean | zlib.ZlibOptions;
    /**
     * A function that gets called with (path, stat) for each entry being added.
     * Return true to add the entry to the archive, or false to omit it.
     */
    filter?(path: string, stat: FileStat): boolean;
    /**
     * Omit metadata that is system-specific: ctime, atime, uid, gid, uname,
     * gname, dev, ino, and nlink. Note that mtime is still included, because
     * this is necessary for other time-based operations. Additionally, mode is
     * set to a "reasonable default" for most unix systems, based on a umask
     * value of 0o22.
     */
    portable?: boolean;
    /**
     * Allow absolute paths. By default, / is stripped from absolute paths.
     */
    preservePaths?: boolean;
    /**
     * A Map object containing the device and inode value for any file whose
     * nlink is > 1, to identify hard links.
     */
    linkCache?: Map<string, string>;
    /**
     * A Map object that caches calls lstat.
     */
    statCache?: Map<string, string>;
    /**
     * A Map object that caches calls to readdir.
     */
    readdirCache?: Map<string, string>;
    /**
     * A number specifying how many concurrent jobs to run.
     *
     * @default 4
     */
    jobs?: number;
    /**
     * The maximum buffer size for fs.read() operations.
     *
     * @default 16 MB
     */
    maxReadSize?: number;
    /**
     * Do not recursively archive the contents of directories.
     */
    noDirRecurse?: boolean;
    /**
     * Set to true to pack the targets of symbolic links. Without this option,
     * symbolic links are archived as such.
     */
    follow?: boolean;
    /**
     * Suppress pax extended headers. Note that this means that long paths and
     * linkpaths will be truncated, and large or negative numeric values may be
     * interpreted incorrectly.
     */
    noPax?: boolean;
    /**
     * Set to true to omit writing mtime values for entries. Note that this
     * prevents using other mtime-based features like tar.update or the
     * keepNewer option with the resulting tar archive.
     */
    noMtime?: boolean;
    /**
     * Set to a Date object to force a specific mtime for everything added to
     * the archive. Overridden by noMtime.
     */
    mtime?: number;
}

/**
 * Returns a through stream. Use fstream to write files into the pack stream and you will receive tar archive data from the pack stream.
 * This only works with directories, it does not work with individual files.
 * The optional properties object are used to set properties in the tar 'Global Extended Header'.
 */
export class Pack extends MiniPass {
    linkCache: PackOptions['linkCache'];
    readdirCache: PackOptions['readdirCache'];
    statCache: PackOptions['statCache'];

    static Sync: typeof PackSync;

    constructor(opt?: PackOptions);

    add(path: string): this;
}

declare class PackSync extends Pack {
    constructor(opt: PackOptions);

    // pause/resume are no-ops in sync streams.
    pause(): void;
    resume(): void;
}

declare class PackJob {
    path: string;
    absolute: string;
    entry: unknown | null;
    stat: unknown | null;
    readdir: unknown | null;
    pending: boolean;
    ignore: boolean;
    piped: boolean;

    constructor(path?: string, absolute?: string);
}

/**
 * Returns a through stream. Write tar data to the stream and the files in the tarball will be extracted onto the filesystem.
 * options can be:
 * ```
 * {
 *   path: '/path/to/extract/tar/into',
 *   strip: 0, // how many path segments to strip from the root when extracting
 * }
 * ```
 * options also get passed to the fstream.Writer instance that tar uses internally.
 */
export function Extract(opts: ExtractOptions | string): ParseStream;

export interface FileStat extends stream.Readable, Fields {
    header: HeaderProperties;
    startBlockSize: number;
    blockRemain: number;
    remain: number;
    meta: boolean;
    ignore: boolean;
    size: number;
}

export interface ReadEntry extends MiniPass, HeaderProperties {
    /** The extended metadata object provided to the constructor. */
    extended: any;
    /** The global extended metadata object provided to the constructor. */
    globalExtended: any;
    /** The number of bytes remaining to be written into the stream. */
    remain: number;
    /** The number of 512-byte blocks remaining to be written into the stream. */
    blockRemain: number;
    /** Whether this entry should be ignored. */
    ignore: boolean;
    /**
     * True if this represents metadata about the next entry, false if it
     * represents a filesystem object.
     */
    meta: boolean;
}

export interface CreateOptions {
    /**
     * A function that will get called with (message, data)
     * for any warnings encountered.
     */
    onwarn?(message: string, data: Buffer): void;

    /**
     * Treat warnings as crash-worthy errors. Default false.
     */
    strict?: boolean | undefined;

    /**
     * The current working directory for creating the archive. Defaults to process.cwd().
     */
    cwd?: string | undefined;

    /**
     * Alias for cwd.
     */
    C?: string | undefined;

    /**
     * Set to any truthy value to create a gzipped archive,
     * or an object with settings for zlib.Gzip()
     */
    gzip?: boolean | zlib.ZlibOptions | undefined;

    /**
     * Alias for gzip.
     */
    z?: boolean | zlib.ZlibOptions | undefined;

    /**
     * A function that gets called with (path, stat) for each entry being
     * added. Return true to add the entry to the archive, or false to omit it.
     */
    filter?(path: string, stat: FileStat): boolean;

    /**
     * Omit metadata that is system-specific: ctime, atime, uid, gid, uname,
     * gname, dev, ino, and nlink. Note that mtime is still included,
     * because this is necessary other time-based operations.
     */
    portable?: boolean | undefined;

    /**
     * Allow absolute paths. By default, / is stripped from absolute paths.
     */
    preservePaths?: boolean | undefined;

    /**
     * Alias for presevePaths.
     */
    P?: boolean | undefined;

    /**
     * The mode to set on the created file archive.
     */
    mode?: number | undefined;

    /**
     * Do not recursively archive the contents of directories.
     */
    noDirRecurse?: boolean | undefined;

    /**
     * Set to true to pack the targets of symbolic links. Without this
     * option, symbolic links are archived as such.
     */
    follow?: boolean | undefined;

    /**
     * Alias for follow.
     */
    L?: boolean | undefined;

    /**
     * Alias for follow.
     */
    h?: boolean | undefined;

    /**
     * Suppress pax extended headers. Note that this means that long paths and
     * linkpaths will be truncated, and large or negative numeric values
     * may be interpreted incorrectly.
     */
    noPax?: boolean | undefined;

    /**
     * A path portion to prefix onto the entries in the archive.
     */
    prefix?: string | undefined;
}

export interface ExtractOptions {
    /**
     * A function that will get called with (message, data)
     * for any warnings encountered.
     */
    onwarn?(message: string, data: Buffer): void;

    /**
     * Treat warnings as crash-worthy errors. Default false.
     */
    strict?: boolean | undefined;

    /**
     * Extract files relative to the specified directory. Defaults to
     * process.cwd(). If provided, this must exist and must be a directory.
     */
    cwd?: string | undefined;

    /**
     * Alias for cwd.
     */
    C?: string | undefined;

    /**
     * A function that gets called with (path, stat) for each entry being
     * added. Return true to emit the entry from the archive, or false to skip it.
     */
    filter?(path: string, stat: FileStat): boolean;

    /**
     * Set to true to keep the existing file on disk if it's newer than
     * the file in the archive.
     */
    newer?: boolean | undefined;

    /**
     * Alias for newer.
     */
    'keep-newer'?: boolean | undefined;

    /**
     * Alias for newer.
     */
    'keep-newer-files'?: boolean | undefined;

    /**
     * Do not overwrite existing files. In particular, if a file appears more
     * than once in an archive, later copies will not overwrite earlier copies
     */
    keep?: boolean | undefined;

    /**
     * Alias for keep.
     */
    k?: boolean | undefined;

    /**
     * Alias for keep.
     */
    'keep-existing'?: boolean | undefined;

    /**
     * Unlink files before creating them. Without this option, tar overwrites
     * existing files, which preserves existing hardlinks. With this option,
     * existing hardlinks will be broken, as will any symlink that would
     * affect the location of an extracted file.
     */
    unlink?: boolean | undefined;

    /**
     * Remove the specified number of leading path elements. Pathnames with
     * fewer elements will be silently skipped. Note that the pathname
     * is edited after applying the filter, but before security checks.
     */
    strip?: number | undefined;

    /**
     * Alias for strip.
     */
    'strip-components'?: number | undefined;

    /**
     * Alias for strip.
     */
    stripComponents?: number | undefined;

    /**
     * If true, tar will set the uid and gid of extracted entries to the uid
     * and gid fields in the archive. This defaults to true when run as root,
     * and false otherwise. If false, then files and directories will be set
     * with the owner and group of the user running the process. This is
     * similar to -p in tar(1), but ACLs and other system-specific data is
     * never unpacked in this implementation, and modes
     * are set by default already.
     */
    preserveOwner?: boolean | undefined;

    /**
     * Alias for preserveOwner.
     */
    p?: boolean | undefined;

    /**
     * Set to a number to force ownership of all extracted files and folders,
     * and all implicitly created directories, to be owned by the specified
     * user id, regardless of the uid field in the archive. Cannot be used
     * along with preserveOwner. Requires also setting a gid option.
     */
    uid?: number | undefined;

    /**
     * Set to a number to force ownership of all extracted files and folders,
     * and all implicitly created directories, to be owned by the specified
     * group id, regardless of the gid field in the archive. Cannot be used
     * along with preserveOwner. Requires also setting a uid option
     */
    gid?: number | undefined;

    /**
     * Set to true to omit writing mtime value for extracted entries.
     * [Alias: m, no-mtime]
     */
    noMtime?: boolean | undefined;
    m?: boolean | undefined;
    'no-mtime'?: boolean | undefined;

    /**
     * Provide a function that takes an entry object, and returns a stream,
     * or any falsey value. If a stream is provided, then that stream's data
     * will be written instead of the contents of the archive entry. If a
     * falsey value is provided, then the entry is written to disk as normal.
     * (To exclude items from extraction, use the filter option described above.)
     */
    transform?(entry: ReadEntry): NodeJS.WritableStream | undefined | false | null;

    /**
     * A function that gets called with (entry) for each entry that passes the
     * filter.
     */
    onentry?(entry: ReadEntry): void;

    /**
     * Set to true to omit calling `fs.chmod()` to ensure that the extracted file
     * matches the entry mode. This also suppresses the call to `process.umask()`
     * to determine the default umask value, since tar will extract with whatever
     * mode is provided, and let the process `umask` apply normally.
     */
    noChmod?: boolean | undefined;

    // The following options are mostly internal, but can be modified in some
    // advanced use cases, such as re-using caches between runs.

    /**
     * The maximum buffer size for fs.read() operations (in bytes). Defaults to 16 MB.
     */
    maxReadSize?: number | undefined;

    /**
     * The maximum size of meta entries that is supported. Defaults to 1 MB.
     */
    maxMetaEntrySize?: number | undefined;
}

export interface ListOptions {
    /**
     * Treat warnings as crash-worthy errors. Default false.
     */
    strict?: boolean | undefined;

    /**
     * Extract files relative to the specified directory. Defaults to
     * process.cwd(). If provided, this must exist and must be a directory.
     */
    cwd?: string | undefined;

    /**
     * Alias for cwd.
     */
    C?: string | undefined;

    /**
     * A function that gets called with (path, stat) for each entry being
     * added. Return true to emit the entry from the archive, or false to skip it.
     */
    filter?(path: string, entry: FileStat): boolean;

    /**
     * A function that gets called with (entry) for each entry that passes the
     * filter. This is important for when both file and sync are set, because
     * it will be called synchronously.
     */
    onentry?(entry: ReadEntry): void;

    /**
     * The maximum buffer size for fs.read() operations. Defaults to 16 MB.
     */
    maxReadSize?: number | undefined;

    /**
     * By default, entry streams are resumed immediately after the call to
     * onentry. Set noResume: true to suppress this behavior. Note that by
     * opting into this, the stream will never complete until the entry
     * data is consumed.
     */
    noResume?: boolean | undefined;
}

export interface ReplaceOptions {
    /**
     * Required. Write the tarball archive to the specified filename.
     */
    file: string;

    /**
     * Act synchronously. If this is set, then any provided file will be
     * fully written after the call to tar.c.
     */
    sync?: boolean | undefined;

    /**
     * A function that will get called with (message, data)
     * for any warnings encountered.
     */
    onwarn?(message: string, data: Buffer): void;

    /**
     * Treat warnings as crash-worthy errors. Default false.
     */
    strict?: boolean | undefined;

    /**
     * Extract files relative to the specified directory. Defaults to
     * process.cwd(). If provided, this must exist and must be a directory.
     */
    cwd?: string | undefined;

    /**
     * Alias for cwd.
     */
    C?: string | undefined;

    /**
     * A path portion to prefix onto the entries in the archive.
     */
    prefix?: string | undefined;

    /**
     * Set to any truthy value to create a gzipped archive,
     * or an object with settings for zlib.Gzip()
     */
    gzip?: boolean | zlib.ZlibOptions | undefined;

    /**
     * A function that gets called with (path, stat) for each entry being
     * added. Return true to emit the entry from the archive, or false to skip it.
     */
    filter?(path: string, stat: FileStat): boolean;

    /**
     * Allow absolute paths. By default, / is stripped from absolute paths.
     */
    preservePaths?: boolean | undefined;

    /**
     * The maximum buffer size for fs.read() operations. Defaults to 16 MB.
     */
    maxReadSize?: number | undefined;

    /**
     * Do not recursively archive the contents of directories.
     */
    noDirRecurse?: boolean | undefined;

    /**
     * Set to true to pack the targets of symbolic links. Without this
     * option, symbolic links are archived as such.
     */
    follow?: boolean | undefined;

    /**
     * Alias for follow.
     */
    L?: boolean | undefined;

    /**
     * Alias for follow.
     */
    h?: boolean | undefined;

    /**
     * uppress pax extended headers. Note that this means that long paths and
     * linkpaths will be truncated, and large or negative numeric values
     * may be interpreted incorrectly.
     */
    noPax?: boolean | undefined;
}

export interface FileOptions {
    /**
     * Uses the given file as the input or output of this function.
     */
    file?: string | undefined;

    /**
     * Alias for file.
     */
    f?: string | undefined;
}

export type RequiredFileOptions = {
    /**
     * Uses the given file as the input or output of this function.
     */
    file: string;
} | {
    /**
     * Alias for file.
     */
    f: string;
};

/**
 * Create a tarball archive. The fileList is an array of paths to add to the
 * tarball. Adding a directory also adds its children recursively. An entry in
 * fileList that starts with an @ symbol is a tar archive whose entries will
 * be added. To add a file that starts with @, prepend it with `./`.
 *
 * Archive data may be read from the returned stream.
 */
export function create(
    options: CreateOptions,
    fileList: ReadonlyArray<string>,
    callback?: (err?: Error) => void,
): stream.Readable;

/**
 * Create a tarball archive. The fileList is an array of paths to add to the
 * tarball. Adding a directory also adds its children recursively. An entry in
 * fileList that starts with an @ symbol is a tar archive whose entries will
 * be added. To add a file that starts with @, prepend it with `./`.
 */
export function create(options: CreateOptions & FileOptions, fileList: ReadonlyArray<string>): Promise<void>;
export function create(options: CreateOptions & FileOptions & { sync: true }, fileList: ReadonlyArray<string>): void;
export function create(
    options: CreateOptions & FileOptions,
    fileList: ReadonlyArray<string>,
    callback: (err?: Error) => void,
): void;

/**
 * Alias for create
 */
export const c: typeof create;

/**
 * Extract a tarball archive. The fileList is an array of paths to extract
 * from the tarball. If no paths are provided, then all the entries are
 * extracted. If the archive is gzipped, then tar will detect this and unzip
 * it. Note that all directories that are created will be forced to be
 * writable, readable, and listable by their owner, to avoid cases where a
 * directory prevents extraction of child entries by virtue of its mode. Most
 * extraction errors will cause a warn event to be emitted. If the cwd is
 * missing, or not a directory, then the extraction will fail completely.
 *
 * Archive data should be written to the returned stream.
 */
export function extract(
    options: ExtractOptions,
    fileList?: ReadonlyArray<string>,
    callback?: (err?: Error) => void,
): stream.Writable;

/**
 * Extract a tarball archive. The fileList is an array of paths to extract
 * from the tarball. If no paths are provided, then all the entries are
 * extracted. If the archive is gzipped, then tar will detect this and unzip
 * it. Note that all directories that are created will be forced to be
 * writable, readable, and listable by their owner, to avoid cases where a
 * directory prevents extraction of child entries by virtue of its mode. Most
 * extraction errors will cause a warn event to be emitted. If the cwd is
 * missing, or not a directory, then the extraction will fail completely.
 */
export function extract(options: ExtractOptions & FileOptions, fileList?: ReadonlyArray<string>): Promise<void>;
export function extract(options: ExtractOptions & FileOptions & { sync: true }, fileList?: ReadonlyArray<string>): void;
export function extract(
    options: ExtractOptions & FileOptions,
    fileList: ReadonlyArray<string> | undefined,
    callback: (err?: Error) => void,
): void;

/**
 * Alias for extract
 */
export const x: typeof extract;

/**
 * List the contents of a tarball archive. The fileList is an array of paths
 * to list from the tarball. If no paths are provided, then all the entries
 * are listed. If the archive is gzipped, then tar will detect this and unzip
 * it.
 */
export function list(options: ListOptions & RequiredFileOptions, fileList?: ReadonlyArray<string>): Promise<void>;
export function list(options: ListOptions & RequiredFileOptions & { sync: true }, fileList?: ReadonlyArray<string>): void;
export function list(callback?: (err?: Error) => void): Parse;
export function list(optionsOrFileList: ListOptions | ReadonlyArray<string>, callback?: (err?: Error) => void): Parse;
export function list(options: ListOptions, fileList: ReadonlyArray<string>, callback?: (err?: Error) => void): Parse;

/**
 * Alias for list
 */
export const t: typeof list;

/**
 * Add files to an existing archive. Because later entries override earlier
 * entries, this effectively replaces any existing entries. The fileList is an
 * array of paths to add to the tarball. Adding a directory also adds its
 * children recursively. An entry in fileList that starts with an @ symbol is
 * a tar archive whose entries will be added. To add a file that
 * starts with @, prepend it with ./.
 */
export function replace(options: ReplaceOptions, fileList?: ReadonlyArray<string>): Promise<void>;
export function replace(
    options: ReplaceOptions,
    fileList: ReadonlyArray<string> | undefined,
    callback: (err?: Error) => void,
): Promise<void>;

/**
 * Alias for replace
 */
export const r: typeof replace;

/**
 * Add files to an archive if they are newer than the entry already in the
 * tarball archive. The fileList is an array of paths to add to the tarball.
 * Adding a directory also adds its children recursively. An entry in fileList
 * that starts with an @ symbol is a tar archive whose entries will be added.
 * To add a file that starts with @, prepend it with ./.
 */
export function update(options: ReplaceOptions, fileList?: ReadonlyArray<string>): Promise<void>;
export function update(
    options: ReplaceOptions,
    fileList: ReadonlyArray<string> | undefined,
    callback: (err?: Error) => void,
): Promise<void>;

/**
 * Alias for update
 */
export const u: typeof update;

export {};
