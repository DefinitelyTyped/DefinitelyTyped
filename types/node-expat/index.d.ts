// Type definitions for node-expat 2.3
// Project: https://github.com/astro/node-expat
// Definitions by: winston01 <https://github.com/winston01>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped
// TypeScript Version: 3.2

/// <reference types="node" />
import {
    Stream
} from 'stream';

export class Parser extends Stream {
    constructor(encoding?: string);

    // encoding: string;
    // Stream API
    writable: boolean;
    readable: boolean;

    _getNewParser(): Parser;
    // emit(): Function;

    parse(buf: Buffer | string, isFinal?: boolean): boolean;

    setEncoding(encoding: BufferEncoding): void;

    setUnknownEncoding(map: number[], convert?: string): void;

    getError(): string;

    stop(): void;
    pause(): void;
    resume(): void;

    destroy(): any;

    destroySoon(): void;

    write(data: Buffer | string): boolean;

    end(cb?: () => void): any;
    end(chunk: any, cb?: () => void): any;
    end(chunk: any, encoding: BufferEncoding, cb?: () => void): any;

    reset(): void;

    getCurrentLineNumber(): number;
    getCurrentColumnNumber(): number;
    getCurrentByteIndex(): number;
}

export function createParser(cb?: (...args: any[]) => void): Parser;
