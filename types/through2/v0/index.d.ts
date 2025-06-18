/// <reference types="node" />

import stream = require("stream");

declare function through2(
    transform?: (chunk: any, enc: string, callback: () => void) => void,
    flush?: () => void,
): NodeJS.ReadWriteStream;

declare function through2(
    opts?: stream.DuplexOptions,
    transform?: (chunk: any, enc: string, callback: () => void) => void,
    flush?: () => void,
): NodeJS.ReadWriteStream;

declare namespace through2 {
    export function obj(
        transform?: (chunk: any, enc: string, callback: () => void) => void,
        flush?: () => void,
    ): NodeJS.ReadWriteStream;

    export function push(data: any): void;
}

export = through2;
