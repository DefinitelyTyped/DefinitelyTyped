// Type definitions for bencode 2.0
// Project: https://github.com/themasch/node-bencode#readme
// Definitions by: Tobenna <https://github.com/tobenna>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

/// <reference types="node" />

export function byteLength(value: any): number;
export function encodingLength(value: any): number;
export function encode(data: any, buffer?: Buffer, offset?: number): Buffer;
export function decode(
    data: Buffer,
    start?: number,
    end?: number,
    encoding?: string
): any;
