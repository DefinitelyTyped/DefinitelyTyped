declare module 'stream/consumers' {
    import { Readable } from 'node:stream';
    import { Blob } from 'buffer';
    function buffer(stream: NodeJS.ReadableStream | Readable | AsyncIterator<any>): Promise<Buffer>;
    function text(stream: NodeJS.ReadableStream | Readable | AsyncIterator<any>): Promise<string>;
    function arrayBuffer(stream: NodeJS.ReadableStream | Readable | AsyncIterator<any>): Promise<ArrayBuffer>;
    function blob(stream: NodeJS.ReadableStream | Readable | AsyncIterator<any>): Promise<Blob>;
    function json(stream: NodeJS.ReadableStream | Readable | AsyncIterator<any>): Promise<unknown>;
}
declare module 'node:stream/consumers' {
    export * from 'stream/consumers';
}
