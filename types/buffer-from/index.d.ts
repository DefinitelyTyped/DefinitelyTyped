// Type definitions for buffer-from 1.1
// Project: https://github.com/LinusU/buffer-from#readme
// Definitions by: Nat Burns <https://github.com/burnnat>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

/// <reference types="node" />

declare function bufferFrom(arrayBuffer: ArrayBuffer, byteOffset?: number, length?: number): Buffer;
declare function bufferFrom(str: string, encoding?: string): Buffer;
declare function bufferFrom(data: ReadonlyArray<any> | Buffer): Buffer;

export = bufferFrom;
