// Type definitions for ipld-block 0.9
// Project: https://github.com/ipld/js-ipld-block
// Definitions by: Felix Kopp <https://github.com/sandtler>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped
/// <reference types="node" />

import CID = require('cids');

declare class Block {
    static isBlock(val: any): boolean;

    constructor(data: Buffer, cid: CID);

    readonly data: Buffer;
    readonly cid: CID;
}

export = Block;
