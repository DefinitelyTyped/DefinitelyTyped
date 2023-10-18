/// <reference types="node" />

declare function series<T extends NodeJS.ReadableStream>(...streams: T[]): NodeJS.ReadWriteStream;
export = series;
