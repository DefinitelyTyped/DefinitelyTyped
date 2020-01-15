// Type definitions for gridfs-stream 0.5.0
// Project: https://github.com/aheckmann/gridfs-stream
// Definitions by: Lior Mualem <https://github.com/liorm>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped
// TypeScript Version: 3.0

/// <reference types="node" />

declare namespace GridFSStream {
    export interface Range {
        startPos: number;
        endPos: number;
    }

    export interface Options {
        _id?: string;
        filename?: string;
        mode?: string;

        range?: Range;

        // any other options from the GridStore may be passed too, e.g.
        chunkSize?: number;
        content_type?: string;
        root?: string;
        metadata?: any;
    }

    export interface WriteStream extends NodeJS.WritableStream {
        writable: boolean;
        name: string;
        id: string;
        options: Options;
        mode: string;
    }

    export interface ReadStream extends NodeJS.ReadableStream {
        readable: boolean;
        paused: boolean;
    }
}


import mongo = require('mongodb');

// Merged declaration, g is both a callable function and a namespace
declare function g(db: any, mongo: any): g.Grid;

declare namespace g {

    export class Grid {

        files: mongo.Collection;
        collection(name?: string): mongo.Collection;
        curCol: string;

        createWriteStream(options?: GridFSStream.Options): GridFSStream.WriteStream;
        createReadStream(options?: GridFSStream.Options): GridFSStream.ReadStream;
        createWriteStream(options?: string): GridFSStream.WriteStream;
        createReadStream(options?: string): GridFSStream.ReadStream;

        remove(options: GridFSStream.Options, callback: (err: Error) => void): void;
        exist(options: GridFSStream.Options, callback: (err: Error, found: boolean) => void): void;
        findOne(options: GridFSStream.Options, callback: (err: Error, record: any)=>void):void;
    }
}

export = g;
