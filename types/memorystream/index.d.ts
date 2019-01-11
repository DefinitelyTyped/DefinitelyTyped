// Type definitions for memorystream 0.3
// Project: https://github.com/JSBizon/node-memorystream
// Definitions by: My Self <https://github.com/me>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

import { Stream, Duplex } from "stream";

type DataType = string | Buffer | Stream;

interface IOptions {
    readable: boolean;
    writeable: boolean;
    maxbufsize: number;
    bufoverflow: number;
    frequence: number;
}

declare class MemoryStream extends Duplex {
    constructor(
        data?: DataType | DataType[],
        options?: IOptions,
    );
}

export = MemoryStream;