// Type definitions for iconv-lite
// Project: https://github.com/ashtuchkin/iconv-lite
// Definitions by: Martin Poelstra <https://github.com/poelstra>
// Definitions: https://github.com/borisyankov/DefinitelyTyped

/// <reference types="node" />

import stream = require("stream");

export interface Options {
    stripBOM: boolean;
    addBOM: boolean;
    defaultEncoding: string;
}

export function decode(buffer: Buffer, encoding: string, options?: Options): string;
export function encode(source: string, encoding: string, options?: Options): Buffer;
export function encodingExists(encoding: string): boolean;

export class DecodeStream extends stream.Transform {
    collect(cb: (err: Error, decoded: string) => any): DecodeStream;
}

export class EncodeStream extends stream.Transform {
    collect(cb: (err: Error, decoded: Buffer) => any): EncodeStream;
}

export function decodeStream(encoding: string, options?: Options): DecodeStream;
export function encodeStream(encoding: string, options?: Options): EncodeStream;

export function extendNodeEncodings(): void;
export function undoExtendNodeEncodings(): void;
