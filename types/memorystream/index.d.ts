// Type definitions for memorystream 0.3
// Project: https://github.com/JSBizon/node-memorystream
// Definitions by: bangbang93 <https://github.com/bangbang93>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped
/// <reference types="node" />

import { Stream, Duplex } from "stream";

type DataType = string | Buffer | Stream;

interface Options {
    readable: boolean;
    writeable: boolean;
    maxbufsize: number;
    bufoverflow: number;
    frequence: number;
}

declare class MemoryStream extends Duplex {
    constructor(
        data?: DataType | DataType[],
        options?: Options,
    );
}

export = MemoryStream;
