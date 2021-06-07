// Type definitions for node-7z 2.1
// Project: https://github.com/quentinrossetti/node-7z
// Definitions by: Erik Rothoff Andersson <https://github.com/erkie>
//                 Colin Berry <https://github.com/colin969>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped/

/// <reference types="node" />

import * as StreamNS from 'stream';
import { ChildProcess } from 'child_process';

interface Data {
    file: string;
    status: string;
    attributes?: string;
    size?: number;
    sizeCompressed?: number;
    hash?: string;
}

interface Progress {
    percent: number;
    fileCount: number;
    file?: string;
}

// Based off Readable from Streams, node-7z uses Readable but Typescript couldn't extend for Data and Progress typings
declare class ZipStream extends StreamNS.Stream implements NodeJS.ReadableStream {
    /**
     * A utility method for creating Readable Streams out of iterators.
     */
    static from(iterable: Iterable<any> | AsyncIterable<any>, options?: StreamNS.ReadableOptions): ZipStream;

    readable: boolean;
    readonly readableEncoding: BufferEncoding | null;
    readonly readableEnded: boolean;
    readonly readableFlowing: boolean | null;
    readonly readableHighWaterMark: number;
    readonly readableLength: number;
    readonly readableObjectMode: boolean;
    destroyed: boolean;
    constructor(opts?: StreamNS.ReadableOptions);
    _read(size: number): void;
    read(size?: number): any;
    setEncoding(encoding: BufferEncoding): this;
    pause(): this;
    resume(): this;
    isPaused(): boolean;
    unpipe(destination?: NodeJS.WritableStream): this;
    unshift(chunk: any, encoding?: BufferEncoding): void;
    wrap(oldStream: NodeJS.ReadableStream): this;
    push(chunk: any, encoding?: BufferEncoding): boolean;
    _destroy(error: Error | null, callback: (error?: Error | null) => void): void;
    destroy(error?: Error): void;

    // tslint:disable:unified-signatures
    addListener(event: 'end', listener: () => void): this;
    addListener(event: 'data', listener: (data: Data) => void): this;
    addListener(event: 'progress', listener: (progress: Progress) => void): this;
    addListener(event: 'error', listener: (err: Error) => void): this;
    addListener(event: 'pause', listener: () => void): this;
    addListener(event: 'readable', listener: () => void): this;
    addListener(event: 'resume', listener: () => void): this;
    addListener(event: string | symbol, listener: (...args: any[]) => void): this;

    emit(event: 'end'): boolean;
    emit(event: 'data', data: Data): boolean;
    emit(event: 'progress', progress: Progress): boolean;
    emit(event: 'error', err: Error): this;
    emit(event: 'pause'): boolean;
    emit(event: 'readable'): boolean;
    emit(event: 'resume'): boolean;
    emit(event: string | symbol, ...args: any[]): boolean;

    on(event: 'end', listener: () => void): this;
    on(event: 'data', listener: (data: Data) => void): this;
    on(event: 'progress', listener: (progress: Progress) => void): this;
    on(event: 'error', listener: (err: Error) => void): this;
    on(event: 'pause', listener: () => void): this;
    on(event: 'readable', listener: () => void): this;
    on(event: 'resume', listener: () => void): this;
    on(event: string | symbol, listener: (...args: any[]) => void): this;

    once(event: 'end', listener: () => void): this;
    once(event: 'data', listener: (data: Data) => void): this;
    once(event: 'progress', listener: (progress: Progress) => void): this;
    once(event: 'error', listener: (err: Error) => void): this;
    once(event: 'pause', listener: () => void): this;
    once(event: 'readable', listener: () => void): this;
    once(event: 'resume', listener: () => void): this;
    once(event: string | symbol, listener: (...args: any[]) => void): this;

    prependListener(event: 'end', listener: () => void): this;
    prependListener(event: 'data', listener: (data: Data) => void): this;
    prependListener(event: 'progress', listener: (progress: Progress) => void): this;
    prependListener(event: 'error', listener: (err: Error) => void): this;
    prependListener(event: 'pause', listener: () => void): this;
    prependListener(event: 'readable', listener: () => void): this;
    prependListener(event: 'resume', listener: () => void): this;
    prependListener(event: string | symbol, listener: (...args: any[]) => void): this;

    prependOnceListener(event: 'end', listener: () => void): this;
    prependOnceListener(event: 'data', listener: (data: Data) => void): this;
    prependOnceListener(event: 'progress', listener: (progress: Progress) => void): this;
    prependOnceListener(event: 'error', listener: (err: Error) => void): this;
    prependOnceListener(event: 'pause', listener: () => void): this;
    prependOnceListener(event: 'readable', listener: () => void): this;
    prependOnceListener(event: 'resume', listener: () => void): this;
    prependOnceListener(event: string | symbol, listener: (...args: any[]) => void): this;

    removeListener(event: 'end', listener: () => void): this;
    removeListener(event: 'data', listener: (data: Data) => void): this;
    removeListener(event: 'progress', listener: (progress: Progress) => void): this;
    removeListener(event: 'error', listener: (error: Error) => void): this;
    removeListener(event: 'pause', listener: () => void): this;
    removeListener(event: 'readable', listener: () => void): this;
    removeListener(event: 'resume', listener: () => void): this;
    removeListener(event: string | symbol, listener: (...args: any[]) => void): this;
    // tslint:enable:unified-signatures

    /** Populated from 7zip's response, wait for 'end' event. */
    info: Map<string, string>;

    [Symbol.asyncIterator](): AsyncIterableIterator<any>;
}

// NOTE - The names are not wrong, some are spelt wrong in the source
interface CommandLineSwitches {
    /** Extract file as alternate stream, if there is ':' character in name (-snc) */
    alternateStreamExtract?: boolean;
    /** Replace ':' character to '_' character in paths of alternate streams (-snr) */
    alternateStreamReplace?: boolean;
    /** Delete files after compression (-sdel) */
    deleteFilesAfter?: boolean;
    /** Usefully qualified file paths (-spf) */
    fullyQualifiedPaths?: boolean;
    /** Store hard links as links (WIM and TAR formats only) (-snh) */
    hardlinks?: boolean;
    /** Set Large Pages mode (-spl) */
    largePages?: boolean;
    /** Set archive timestamp from the most recently modified file (-stl) */
    latestTimeStamp?: boolean;
    /** Stop archive creating, if 7-Zip can't open some input file.(-sse) */
    noArchiveOnFail?: boolean;
    /** Eliminate duplication of root folder for extract command (-spe) */
    noRootDuplication?: boolean;
    /** Disable wildcard matching for file names (-spd) */
    noWildcards?: boolean;
    /** Store NT security (-sni) */
    ntSecurity?: boolean;
    /** Sort files by type while adding to solid 7z archive (-mqs) */
    sortByType?: boolean;
    /** Compress files open for writing (-ssw) */
    openFiles?: boolean;
    /** Recurse subdirectories. For -r0 usage use $raw (-r) */
    recursive?: boolean;
    /** Store symbolic links as links (WIM and TAR formats only) (-snl) */
    symlinks?: boolean;
    /** Show technical information (-slt) */
    techInfo?: boolean;
    /** Show execution time statistics (-bt) */
    timeStats?: boolean;
    /** Write data to stdout (-so) */
    toStdout?: boolean;
    /** Assume Yes on all queries (-y) */
    yes?: boolean;
    /** Store NTFS alternate Streams (-sns) */
    alternateStreamStore?: boolean;
    /** Set Sensitive Case mode (-ssc) */
    caseSensitive?: boolean;
    /** Set Archive name mode (-sa) */
    archiveNameMode?: string;
    /** Type of archive (-t) */
    archiveType?: string;
    /** Set CPU thread affinity mask (hexadecimal number). (-stm) */
    cpuAffinity?: string;
    /** Exclude archive type (-stx) */
    excludeArchiveType?: string;
    /** Read data from StdIn (-si) */
    fromStdin?: string;
    /** Set hash function (-scrc) */
    hashMethod?: string;
    /** Set charset for list files (-scs) */
    listFileCharset?: string;
    /** Set charset for console input/output */
    charset?: string;
    /** Set output log level (-bb) */
    logLevel?: string;
    /** Set Output directory (-o) */
    outputDir?: string;
    /** Set Password (-p) */
    password?: string;
    /** Create SFX archive (-sfx) */
    sfx?: string;
    /** Update options (-u) */
    updateOptions?: string;
    /** Set Working directory (-w) */
    workingDir?: string;
    /** Creates multi-block xz archives by default. Block size can be specified with [Size]{m|g} */
    multiBlockSize?: string;
    /** Exclude archive filenames (-ax) */
    excludeArchive?: string[];
    /** Exclude filenames (-x) */
    exlude?: string[];
    /** Include filenames (-i) */
    include?: string[];
    /** Include archive filenames (-ai) */
    includeArchive?: string[];
    /** Set Compression Method (-m) */
    method?: string[];
    /** Set output stream for output/error/progress (-bs) */
    outputStreams?: string[];
    /** Create Volumes (v) */
    volumes?: string[];
}

interface Node7zOptions {
    /**
     * Progress percentage gets fired. Shortcut for { outputStreams: ['b1'] }
     * Use if you want access to the progress event. Has an impact on performances.
     */
    $progress?: boolean;
    /** Create the stream but do not spawn child process */
    $defer?: boolean;
    /** Attach an external child process to be parsed */
    $childProcess?: ChildProcess;
    /** Path to an other 7-Zip binary. Default: 7z */
    $bin?: string;
    /** Some commands accepts more specific targets. See https://github.com/quentinrossetti/node-7z#extract for an example. */
    $cherryPick?: string[];
    /** Pass raw arguments to the child_process.spawn() command */
    $raw?: string[];
    /** Pass options to the child_process.spawn() command */
    $spawnOptions?: object;
}

type SevenZipOptions = Node7zOptions & CommandLineSwitches;

/**
 * Add files to an archive
 * @param archive Archive to create
 * @param source Source files to add to the archive
 * @param options Seven Zip Options
 */
declare function add(archive: string, source: string | string[], options?: SevenZipOptions): ZipStream;
/**
 * Delete files from an archive
 * @param archive Archive to target
 * @param output Target files to remove from the archive
 * @param options Seven Zip Options
 */
declare function _delete(archive: string, target: string | string[], options?: SevenZipOptions): ZipStream;
/**
 * Extracts files from an archive to the current directory or to the output directory. This command copies all extracted files to one directory.
 * @param archive Archive to extract files from
 * @param output Output directory
 * @param options Seven Zip Options
 */
declare function extract(archive: string, output: string, options?: SevenZipOptions): ZipStream;
/**
 * Extracts files from an archive to the current directory or to the output directory.
 * @param archive Archive to extract files from
 * @param output Output directory
 * @param options Seven Zip Options
 */
declare function extractFull(archive: string, output: string, options?: SevenZipOptions): ZipStream;
/**
 * Calculate hash values for files
 * @param target Target files to calculate the hash of
 * @param options Seven Zip Options
 */
declare function hash(target: string | string[], options?: SevenZipOptions): ZipStream;
/**
 * Lists contents of archive
 * @param archive Archive to list the contents from
 * @param options Seven Zip Options
 */
declare function list(archive: string, options?: SevenZipOptions): ZipStream;
/**
 * Rename files in an archive
 * @param archive Archive to target
 * @param target Pairs of target names and new names to rename to
 * @param options Seven Zip Options
 */
declare function rename(archive: string, target: string[][], options?: SevenZipOptions): ZipStream;
/**
 * Tests archive files
 * @param archive Archive to test
 * @param options Seven Zip Options
 */
declare function test(archive: string, options: SevenZipOptions): ZipStream;
/**
 * Update older files in the archive and add files that are not already in the archiv
 * @param archive Archive to update
 * @param source Source files to update from the file-system to the archive
 * @param options Seven Zip Options
 */
declare function update(archive: string, files: string | string[], options?: SevenZipOptions): ZipStream;
/**
 * Registers the child process given by the $childProcess option.
 * Must be deferred with the $defer option during creation.
 * @param stream ZipStream to register listeners on
 */
declare function listen(stream: ZipStream): ZipStream;

export { add, extract, extractFull, _delete as delete, hash, list, rename, test, update, listen };
