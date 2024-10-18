/// <reference types="node" />

declare function BlobStream(): BlobStream.IBlobStream;

declare namespace BlobStream {
    interface IBlobStream extends NodeJS.WritableStream {
        toBlob(type?: string): Blob;
        toBlobURL(type?: string): string;
    }
}

export = BlobStream;
