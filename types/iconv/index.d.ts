// Type definitions for iconv 2.1.11
// Project: https://github.com/bnoordhuis/node-iconv
// Definitions by: delphinus <https://github.com/delphinus35>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

///<reference types="node" />

declare namespace Iconv {

    interface Static {

        new(fromEncoding: string, toEncoding: string): Iconv;
        (fromEncoding: string, toEncoding: string): Iconv;
    }

    interface Iconv extends NodeJS.WritableStream {

        writable: boolean;
        convert(input: string | Buffer, encoding?: string): Buffer;
        write(input: string | Buffer, encoding?: string): boolean;
        end(input?: string | Buffer, encoding?: string): void;

        // copy from NodeJS.WritableStream for compatibility
        write(buffer: Buffer|string, cb?: Function): boolean;
        write(str: string, encoding?: string, cb?: Function): boolean;
        end(): this;
        end(buffer: Buffer, cb?: Function): this;
        end(str: string, cb?: Function): this;
        end(str: string, encoding?: string, cb?: Function): this;

        // copy from stream.Stream
        pipe<T extends NodeJS.WritableStream>(destination: T, options?: { end?: boolean; }): T;
    }
}

declare var Iconv: Iconv.Static;
export = Iconv;
