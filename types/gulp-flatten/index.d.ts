/// <reference types="node" />

interface IOptions {
    newPath: string;
}

declare function flatten(options?: IOptions): NodeJS.ReadWriteStream;

declare namespace flatten {}

export = flatten;
