// Type definitions for JSONStream v0.8.0
// Project: http://github.com/dominictarr/JSONStream
// Definitions by: Bart van der Schoor <https://github.com/Bartvds>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

/// <reference path="../node/node.d.ts" />



export interface Options {
    recurse: boolean;
}

declare export function parse(pattern: any): NodeJS.ReadWriteStream;
declare export function parse(patterns: any[]): NodeJS.ReadWriteStream;

declare export function stringify(): NodeJS.ReadWriteStream;
declare export function stringify(open: string, sep: string, close: string): NodeJS.ReadWriteStream;

declare export function stringifyObject(): NodeJS.ReadWriteStream;
declare export function stringifyObject(open: string, sep: string, close: string): NodeJS.ReadWriteStream;
