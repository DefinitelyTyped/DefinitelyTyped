/// <reference types="node" />

import stream = require("stream");

interface Options {
    size?: number | undefined;
    highWaterMark?: number | undefined;
}

declare class BatchStream extends stream.Transform {
    size: number;
    batch: any[];

    constructor(options: Options);
}

export = BatchStream;
