// Type definitions for batch-stream 0.1.2
// Project: https://github.com/segmentio/batch-stream
// Definitions by: Nicholas Penree <http://github.com/drudge>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

/// <reference types="node" />


import stream = require('stream');

interface Options {
    size?: number;
    highWaterMark?: number;
}

declare class BatchStream extends stream.Transform {
    size: number;
    batch: any[];

    constructor(options: Options);
}

export = BatchStream;
