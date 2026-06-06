/// <reference types="node"/>

type Stream = NodeJS.ReadableStream | NodeJS.WritableStream;

declare function thenEos(stream: Stream): Promise<void>;

export = thenEos;
