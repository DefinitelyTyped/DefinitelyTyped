/// <reference types="node" />

declare function toArray(
    stream: NodeJS.ReadableStream,
    callback: (err: any, arr: any[]) => void,
): NodeJS.ReadWriteStream;
export = toArray;
