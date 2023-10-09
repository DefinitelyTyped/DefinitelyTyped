// Type definitions for block-stream2 2.1
// Project: https://www.npmjs.com/package/block-stream2
// Definitions by: Trim21 <https://github.com/trim21>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

/// <reference types="node" />

import { Transform } from "stream";

export = BlockStream2;

declare class BlockStream2 extends Transform {
    constructor(options?: { size?: number; zeroPadding?: boolean });
}
