// Type definitions for busboy v0.2.13
// Project: https://www.npmjs.com/package/busboy
// Definitions by: Jacob Baskin <https://github.com/jacobbaskin>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped
/// <reference path="../node/node.d.ts" />

declare module 'busboy' {
    import * as stream from 'stream';

    interface Options {
        headers: any;
    }

    interface BusboyConfig {
        headers?: any;
        highWaterMark?: number;
        fileHwm?: number;
        defCharset?: string;
        preservePath?: boolean;
        limits?: {
            fieldNameSize?: number;
            fieldSize?: number;
            fields?: number;
            fileSize?: number;
            files?: number;
            parts?: number;
            headerPairs?: number;
        };
    }

    class Busboy extends stream.Writable {
        constructor(options: BusboyConfig);

        on(event: 'field',
           listener: (
               fieldname: string,
               val: any,
               fieldnameTruncated: boolean,
               valTruncated: boolean,
               encoding: string,
               mimetype: string) => void): this;
        on(event: 'file',
           listener: (
               fieldname: string,
               file: NodeJS.ReadableStream,
               filename: string,
               encoding: string,
               mimetype: string) => void): this;
        on(event: 'finish', callback: () => void): this;
        on(event: 'partsLimit', callback: () => void): this;
        on(event: 'filesLimit', callback: () => void): this;
        on(event: 'fieldsLimit', callback: () => void): this;
        on(event: string, listener: Function): this;
    }

    export = Busboy;
}
