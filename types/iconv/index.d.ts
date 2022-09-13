// Type definitions for iconv 3.0
// Project: https://github.com/bnoordhuis/node-iconv
// Definitions by: DefinitelyTyped <https://github.com/DefinitelyTyped>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

/// <reference types="node" />

import { Stream } from 'stream';

interface Static {
    new (fromEncoding: string, toEncoding: string): Iconv;
    (fromEncoding: string, toEncoding: string): Iconv;
    prototype: Iconv;
}

export interface Iconv extends Stream {
    readonly writable: true;
    convert(input: string, encoding?: BufferEncoding): Buffer;
    convert(input: Buffer): Buffer;
    write(input: string, encoding?: BufferEncoding): boolean;
    write(input: Buffer): boolean;

    end(input: string, encoding?: BufferEncoding): void;
    end(input?: Buffer): void;
}

export const Iconv: Static;

export {};
