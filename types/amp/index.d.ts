// Type definitions for amp 0.3
// Project: https://github.com/visionmedia/node-amp
// Definitions by: DefinitelyTyped <https://github.com/DefinitelyTyped>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped
// TypeScript Version: 2.4

/// <reference types="node" />

import * as stream from 'stream';

export function decode(buf: Buffer): Buffer[];

export function encode(args: Buffer[]): Buffer;

export class Stream extends stream.Writable {
    constructor(opts: stream.WritableOptions);

    _write(chunk: any, encoding: string, fn: () => void): void;
}
