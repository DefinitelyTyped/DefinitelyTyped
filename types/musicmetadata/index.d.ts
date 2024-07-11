/// <reference types="node" />

declare module "musicmetadata" {
    import { Readable } from "stream";
    import { EventEmitter } from "events";

    function mm(readStream: Readable, callback: (err: Error, metadata: MM.Metadata) => void): EventEmitter;
    function mm(
        readStream: Readable,
        options: MM.Options,
        callback: (err: Error, metadata: MM.Metadata) => void,
    ): EventEmitter;

    namespace mm {}

    export = mm;
}

declare namespace MM {
    export interface Options {
        duration?: boolean | undefined;
        fileSize?: number | undefined;
    }

    export interface Metadata {
        artist: string[];
        album: string;
        albumartist: string[];
        title: string;
        year: string;
        track: NoOf;
        disk: NoOf;
        genre: string[];
        picture: Picture[];
        duration: number;
    }

    export interface NoOf {
        no: number;
        of: number;
    }

    export interface Picture {
        format: string;
        data: Buffer;
    }
}
