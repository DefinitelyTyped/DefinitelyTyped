// Type definitions for iconv 2.1.11
// Project: https://github.com/bnoordhuis/node-iconv
// Definitions by: delphinus <https://github.com/delphinus35/>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

///<reference path="../node/node.d.ts" />

declare namespace Iconv {

    interface Static {

        new(fromEncoding: string, toEncoding: string): Iconv;
        (fromEncoding: string, toEncoding: string): Iconv;
    }

    interface Iconv extends NodeJS.EventEmitter {

        writable: boolean;
        convert(input: string | Buffer, encoding?: string): Buffer;
        write(input: string | Buffer, encoding?: string): boolean;
        end(input?: string | Buffer, encoding?: string): void;

        // copy from stream.Stream
        pipe<T extends NodeJS.WritableStream>(destination: T, options?: { end?: boolean; }): T;
    }
}

declare module "iconv" {

    var Iconv: Iconv.Static;
}
