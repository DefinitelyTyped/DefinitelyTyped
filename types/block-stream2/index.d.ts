// Type definitions for block-stream2 2.1.0
// Project: https://www.npmjs.com/package/block-stream2
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

/// <reference types="node" />

import { Readable } from 'stream';
export = BlockStream2;

class BlockStream2 extends Readable {
    constructor(options?: { size?: number; zeroPadding?: boolean })
}
