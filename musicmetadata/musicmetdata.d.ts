// Type definitions for musicmetadata 2.0.4
// Project: https://www.npmjs.com/package/musicmetadata
// Definitions by: Xavier Stouder <https://github.com/Xstoudi>
// Definitions: https://github.com/DefinitelyTyped/

declare module "musicmetadata" {

    import {Readable} from "stream";

    function mm(readStream: Readable, callback: (err: Error, metadata: MM.Metadata) => void);
    function mm(readStream: Readable, options: MM.Options, callback: (err: Error, metadata: MM.Metadata) => void);

    namespace mm { }

    export = mm;
}

declare namespace MM {
    export interface Options {
        duration: boolean;
        fileSize: number;
    }

    export interface Metadata {
        artist: string[];
        album: string;
        albumartist: string[];
        title: string;
        year: string;
        track: NoOf;
        disk: NoOf;
        genre: string;
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