/// <reference types="node" />

import stream = require("stream");

declare namespace BinaryParseStream {
    const One: number;
}

declare class BinaryParseStream extends stream.Transform {
    constructor(options?: stream.TransformOptions);
    static extend(parser: BinaryParseStream): BinaryParseStream;
}

export = BinaryParseStream;
