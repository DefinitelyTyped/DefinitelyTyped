// Type definitions for binary-parse-stream 1.3
// Project: https://github.com/nathan7/binary-parse-stream
// Definitions by: Florian Keller <https://github.com/ffflorian>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

/// <reference types="node" />

import stream = require('stream');

declare namespace BinaryParseStream {
    const One: number;
}

declare class BinaryParseStream extends stream.Transform {
    constructor(options?: stream.TransformOptions);
    static extend(parser: BinaryParseStream): BinaryParseStream;
}

export = BinaryParseStream;
