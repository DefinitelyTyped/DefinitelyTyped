/// <reference types="node" />

declare function blobToBuffer(blob: Blob, callback: (error: any, buffer: Buffer) => void): void;
declare namespace blobToBuffer {}
export = blobToBuffer;
