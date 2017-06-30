// Type definitions for cbor 2.0.2
// Project: https://github.com/hildjj/node-cbor
// Definitions by: Jeffery Grajkowski <https://github.com/pushplay>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

/// <reference types="node" />

import stream = require("stream");

export function decode(input: Buffer | string): any;
export function decodeAll(input: Buffer | string, callback: (error: any, objs: any[]) => void): void;
export function decodeAllSync(input: Buffer | string): any[];
export function decodeFirst(input: Buffer | string, callback: (error: any, obj: any) => void): void;
export function decodeFirstSync(input: Buffer | string): any;
export function encode(input: any): Buffer;

export class Decoder extends stream.Transform  {
    constructor(params?: {
        input?: Buffer | string;
        encoding?: string;
        tags?: {[tag: number]: (val: any[]) => any}
    });
}

export class Encoder extends stream.Transform {
    constructor();
    addSemanticType<T>(type: new (...args: any[]) => T, encodeFunction: (encoder: Encoder, t: T) => void): void;
    pushAny(input: any): void;
}

export namespace leveldb {
    export function decode(input: Buffer | string): any[];
    export function encode(input: any): Buffer;
    export const buffer: boolean;
    export const name: string;
}
