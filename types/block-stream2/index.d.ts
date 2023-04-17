/// <reference types="node" />

import { Readable } from 'stream';
export = BlockStream2;

class BlockStream2 extends Readable {
    constructor(options?: { size?: number; zeroPadding?: boolean })
}
