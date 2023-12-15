/// <reference types="node" />

interface IOptions {
    title?: string | undefined;
    minimal?: boolean | undefined;
}

declare function debug(options?: IOptions): NodeJS.ReadWriteStream;

declare namespace debug {}

export = debug;
