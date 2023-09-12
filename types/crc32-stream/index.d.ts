// Type definitions for crc32-stream 4.0
// Project: https://github.com/archiverjs/node-crc32-stream
// Definitions by: nadhifikbarw <https://github.com/nadhifikbarw>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

/// <reference types="node" />
import { Transform } from "stream";

export class CRC32Stream extends Transform {
    constructor();
    digest(): Buffer;
    digest(encoding: BufferEncoding): string;
    hex(): string;
    size(): number;
}

export class DeflateCRC32Stream extends Transform {
    constructor();
    digest(): Buffer;
    digest(encoding: BufferEncoding): string;
    hex(): string;
    size(compressed?: boolean): number;
}
