/// <reference types="node" />

export = toArray;

/** @deprecated use built-in `Readable.toArray` */
declare function toArray(this: NodeJS.ReadableStream, callback?: (err: any, arr: any[]) => void): Promise<any[]>;
declare function toArray(stream: NodeJS.ReadableStream, callback?: (err: any, arr: any[]) => void): Promise<any[]>;
