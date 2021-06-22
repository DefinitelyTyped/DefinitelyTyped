// Type definitions for buffer-split 1.0
// Project: https://github.com/soldair/node-buffer-split#readme
// Definitions by: Ciffelia <https://github.com/ciffelia>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

/// <reference types="node" />

declare function bufferSplit(buf: Buffer, splitBuf: Buffer, includeDelim?: boolean): Buffer[];

export = bufferSplit;
