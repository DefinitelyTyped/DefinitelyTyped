// Type definitions for blob-stream v0.1.3
// Project: https://github.com/devongovett/blob-stream
// Definitions by: Eric Hillah <https://github.com/erichillah>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

/// <reference types="node" />

declare function BlobStream(): BlobStream.IBlobStream;

declare namespace BlobStream {

    interface IBlobStream extends NodeJS.WritableStream{
        toBlob(type?: string): Blob;
        toBlobURL(type?: string): string;
    }
}

export = BlobStream;