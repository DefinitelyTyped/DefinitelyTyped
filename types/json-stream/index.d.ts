// Type definitions for json-stream 1.0
// Project: https://github.com/mmalecki/json-stream
// Definitions by: Trim21 <https://github.com/trim21>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

/// <reference types="node" />

import { Readable } from 'stream';

export = JSONStream;

declare class JSONStream extends Readable {
    constructor();
}
