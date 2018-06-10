// Type definitions for bencode 2.0
// Project: https://github.com/themasch/node-bencode#readme
// Definitions by: Tobenna <https://github.com/tobenna>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

/// <reference types="node" />

declare namespace bencode {
    function byteLength(value: any): number;
    function encodingLength(value: any): number;
    function encode(
        data: any,
        buffer?: Buffer,
        offset?: number
    ): Buffer;
    function decode(
        data: Buffer,
        start?: number,
        end?: number,
        encoding?: string
    ): any;
}

export default bencode;
