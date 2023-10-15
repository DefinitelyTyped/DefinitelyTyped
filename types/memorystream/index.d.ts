// Type definitions for memorystream 0.3
// Project: https://github.com/JSBizon/node-memorystream
// Definitions by: bangbang93 <https://github.com/bangbang93>, geniou <https://github.com/geniou>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped
/// <reference types="node" />

import { Duplex, Stream } from "stream";

type DataType = string | Buffer | Stream;

interface Options {
    readable?: boolean;
    writeable?: boolean;
    maxbufsize?: number;
    bufoverflow?: number;
    frequence?: number;
}

declare class MemoryStream extends Duplex {
    constructor(data?: DataType | DataType[], options?: Options);

    static createReadStream: (data?: DataType | DataType[], options?: Options) => MemoryStream;
    static createWriteStream: (data?: DataType | DataType[], options?: Options) => MemoryStream;
}

export = MemoryStream;
