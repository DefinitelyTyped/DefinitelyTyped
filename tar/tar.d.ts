// Type definitions for tar v1.0.1
// Project: https://github.com/npm/node-tar
// Definitions by: Maxime LUCE <https://github.com/SomaticIT>
// Definitions: https://github.com/borisyankov/DefinitelyTyped

/// <reference path="../node/node.d.ts" />

declare module "tar" {
    import stream = require("stream");

    //#region Interfaces

    export interface HeaderProperties {
        path?: string;
        mode?: number;
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

    //#endregion

    //#region Enums

    export var fields: {
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

    export var fieldSize: number[];
    export var fieldOffs: number[];
    export var fieldEnds: number[];

    /**
     * Different values of the 'type' field
     * paths match the values of Stats.isX() functions, where appropriate
     */
    export var types: {
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
    export var modes: {
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

    export var numeric: {
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

    export var knownExtended: {
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

    export var headerSize: number;
    export var blockSize: number;

    //#endregion

    //#region Global Methods

    export function Parse(): ParseStream;

    export function Pack(props: HeaderProperties): PackStream;

    export function Extract(path: string): ExtractStream;
    export function Extract(opts: ExtractOptions): ExtractStream;

    //#endregion
}