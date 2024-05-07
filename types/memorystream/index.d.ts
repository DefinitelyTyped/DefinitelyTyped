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
