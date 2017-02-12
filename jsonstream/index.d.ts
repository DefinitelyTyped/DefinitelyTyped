// Type definitions for JSONStream v0.8.0
// Project: http://github.com/dominictarr/JSONStream
// Definitions by: Bart van der Schoor <https://github.com/Bartvds>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

/// <reference types="node" />



export interface Options {
    recurse: boolean;
}

export declare function parse(pattern: any): NodeJS.ReadWriteStream;
export declare function parse(patterns: any[]): NodeJS.ReadWriteStream;

export declare function stringify(): NodeJS.ReadWriteStream;
export declare function stringify(open: string, sep: string, close: string): NodeJS.ReadWriteStream;

export declare function stringifyObject(): NodeJS.ReadWriteStream;
export declare function stringifyObject(open: string, sep: string, close: string): NodeJS.ReadWriteStream;
