// Type definitions for BufferList v5.0
// Project: https://github.com/rvagg/bl
// Definitions by: Bart van der Schoor <https://github.com/Bartvds>
//                 Ben Allfree <https://github.com/benallfree>
//                 Alex Potsides <https://github.com/achingbrain>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

/// <reference types="node" />

import BufferList = require("./BufferList");
import { Duplex } from "readable-stream";

interface BufferListStream extends Duplex, BufferList {}

declare class BufferListStream {
    constructor(callbackOrData?: ((err: Error, buffer: Buffer) => void) | Buffer | Buffer[] | BufferList | BufferList[] | string);
    static isBufferList: (other: any) => boolean;
    duplicate: () => BufferListStream;
    shallowSlice(start?: number, end?: number): BufferListStream;
}

export = BufferListStream;
