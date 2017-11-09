// Type definitions for through2 v 0.4.2
// Project: https://github.com/rvagg/through2
// Definitions by: Bart van der Schoor <https://github.com/Bartvds>, jedmao <https://github.com/jedmao>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

/// <reference types="node" />



import stream = require('stream');

declare function through2(transform?: (chunk: any, enc: string, callback: () => void) => void, flush?: () => void): NodeJS.ReadWriteStream;

declare function through2(opts?: stream.DuplexOptions, transform?: (chunk: any, enc: string, callback: () => void) => void, flush?: () => void): NodeJS.ReadWriteStream;

declare namespace through2 {

    export function obj(transform?: (chunk: any, enc: string, callback: () => void) => void, flush?: () => void): NodeJS.ReadWriteStream;

    export function push(data: any): void;

}

export = through2;
