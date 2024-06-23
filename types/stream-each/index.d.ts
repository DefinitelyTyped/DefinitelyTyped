/// <reference types="node"/>

declare function each(
    stream: NodeJS.ReadableStream,
    iterator: (data: Buffer | string, next: (error?: Error) => void) => void,
    cb: (error?: Error) => void,
): void;

export = each;
