// Type definitions for json-stream 1.0
// Project: https://github.com/mmalecki/json-stream
// Definitions by: Trim21 <https://github.com/trim21>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

/// <reference types="node" />

import { Transform } from "stream";

declare class JSONStream extends Transform {
    constructor();
}

interface Export {
    (): JSONStream;
    JSONStream: typeof JSONStream;
}

declare const exports: Export;

export = exports;
