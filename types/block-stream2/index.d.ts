/// <reference types="node" />

import { Transform } from "stream";

export = BlockStream2;

declare class BlockStream2 extends Transform {
    constructor(options?: { size?: number; zeroPadding?: boolean });
}
