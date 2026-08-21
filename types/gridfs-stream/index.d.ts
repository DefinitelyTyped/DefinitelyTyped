/// <reference types="node" />

declare namespace GridFSStream {
    export interface Range {
        startPos: number;
        endPos: number;
    }

    export interface Options {
        _id?: string | undefined;
        filename?: string | undefined;
        mode?: string | undefined;

        range?: Range | undefined;

        // any other options from the GridStore may be passed too, e.g.
        chunkSize?: number | undefined;
        content_type?: string | undefined;
        root?: string | undefined;
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

import mongo = require("mongodb");

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
        findOne(options: GridFSStream.Options, callback: (err: Error, record: any) => void): void;
    }
}

export = g;
