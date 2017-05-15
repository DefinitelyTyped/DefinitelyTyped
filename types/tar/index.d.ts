// Type definitions for tar v1.0.1
// Project: https://github.com/npm/node-tar
// Definitions by: Maxime LUCE <https://github.com/SomaticIT>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped
// TODO: When/if typings for [fstream](https://github.com/npm/fstream) are written, refactor this typing to use it for the various streams.

/// <reference types="node" />


import stream = require("stream");

// #region Interfaces

export interface HeaderProperties {
    path?: string;
    mode?: number;
    noProprietary?: boolean;
    uid?: number;
    gid?: number;
    size?: number;
    mtime?: number;
    uname?: string;
    gname?: string;
    devmaj?: number;
    devmin?: number;
}

export interface ExtractOptions {
    type?: string;
    Directory?: boolean;
    path?: string;
    strip?: number;
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

export interface ExtractStream extends ParseStream {
}

// #endregion

// #region Enums

export declare var fields: {
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
};

export declare var fieldSize: number[];
export declare var fieldOffs: number[];
export declare var fieldEnds: number[];

/**
 * Different values of the 'type' field
 * paths match the values of Stats.isX() functions, where appropriate
 */
export declare var types: {
    0: string;
    "\0": string;
    "": string;
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
export declare var modes: {
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

export declare var numeric: {
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

export declare var knownExtended: {
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

export declare var headerSize: number;
export declare var blockSize: number;

//#endregion

//#region Global Methods

/**
 * Returns a writable stream. Write tar data to it and it will emit entry events for each entry parsed from the tarball. This is used by tar.Extract.
 */
export declare function Parse(): ParseStream;
/**
 * Returns a through stream. Use fstream to write files into the pack stream and you will receive tar archive data from the pack stream.
 * This only works with directories, it does not work with individual files.
 * The optional properties object are used to set properties in the tar 'Global Extended Header'.
 */
export declare function Pack(props?: HeaderProperties): PackStream;
/**
 * Returns a through stream. Write tar data to the stream and the files in the tarball will be extracted onto the filesystem.
 */
export declare function Extract(path: string): ExtractStream;
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
export declare function Extract(opts: ExtractOptions): ExtractStream;
