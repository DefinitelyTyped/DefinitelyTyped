// Type definitions for blob-to-buffer 1.2
// Project: https://github.com/feross/blob-to-buffer
// Definitions by: nrlquaker <https://github.com/nrlquaker>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped
// TypeScript Version: 2.2

/// <reference types="node" />

declare function blobToBuffer(blob: Blob, callback: (error: any, buffer: Buffer) => void): void;
declare namespace blobToBuffer {}
export = blobToBuffer;
