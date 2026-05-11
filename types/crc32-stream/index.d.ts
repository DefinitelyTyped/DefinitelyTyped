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
