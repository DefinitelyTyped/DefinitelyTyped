// Type definitions for Pdfkit v0.7.1
// Project: https://github.com/devongovett/blob-stream
// Definitions by: Eric Hillah <https://github.com/erichillah>
// Definitions: https://github.com/borisyankov/DefinitelyTyped

/// <reference path="../node/node.d.ts" />

declare function BlobStream(): BlobStream.IBlobStream;

declare module BlobStream {

    interface IBlobStream extends NodeJS.WritableStream{
        toBlob(type: string): Blob;
        toBlobURL(type: string): string;
    }
}

declare module "blob-stream" {
    export = BlobStream;
}
