// Type definitions for busboy 0.3
// Project: https://www.npmjs.com/package/busboy
// Definitions by: Jacob Baskin <https://github.com/jacobbaskin>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped
/// <reference types="node" />

import { Readable, Writable } from 'stream';

export as namespace Busboy;
export = Busboy;

declare class Busboy extends Writable implements Busboy.Busboy {
    constructor(options: Busboy.BusboyConfig);
}
declare namespace Busboy {
    interface Options {
        headers: any;
    }

    interface BusboyConfig {
        headers?: any;
        highWaterMark?: number | undefined;
        fileHwm?: number | undefined;
        defCharset?: string | undefined;
        preservePath?: boolean | undefined;
        limits?: {
            fieldNameSize?: number | undefined;
            fieldSize?: number | undefined;
            fields?: number | undefined;
            fileSize?: number | undefined;
            files?: number | undefined;
            parts?: number | undefined;
            headerPairs?: number | undefined;
        } | undefined;
    }

    interface Busboy extends Writable {
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
               file: Readable,
               filename: string,
               encoding: string,
               mimetype: string) => void): this;
        on(event: 'finish' | 'partsLimit' | 'fielsLimit' | 'fieldsLimit', callback: () => void): this;
        on(event: string | symbol, listener: (...args: any[]) => void): this;
    }
}
