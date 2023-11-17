/// <reference types="node" />

declare function bufferFrom(arrayBuffer: ArrayBuffer, byteOffset?: number, length?: number): Buffer;
declare function bufferFrom(str: string, encoding?: string): Buffer;
declare function bufferFrom(data: readonly any[] | Buffer): Buffer;

export = bufferFrom;
