/// <reference types="node" />

import * as stream from "stream";

export function decode(buf: Buffer): Buffer[];

export function encode(args: Buffer[]): Buffer;

export class Stream extends stream.Writable {
    constructor(opts: stream.WritableOptions);

    _write(chunk: any, encoding: string, fn: () => void): void;
}
