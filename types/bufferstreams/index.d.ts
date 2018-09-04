// Type definitions for bufferstreams-2.0.1
// Project: https://github.com/nfroidure/BufferStreams
// Definitions by: blackknifes <https://github.com/blackknifes>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

/// <reference types="node" />
import stream = require('stream');

interface Options
{
    objectMode: boolean;
    [propName: string]: any;
}

declare class bufferstreams extends stream.Duplex
{
    constructor(callback: (err: Error | null, buf: Buffer | null, cb: (err?: Error, buf?: Buffer)=>void)=>void);

    constructor(options: Options, callback: (err: Error | null, buf: Buffer | null, cb: (err?: Error, buf?: Buffer)=>void)=>void);
}

export default bufferstreams;