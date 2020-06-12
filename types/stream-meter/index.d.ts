// Type definitions for stream-meter
// Project: https://github.com/brycebaril/node-stream-meter
// Definitions by: TANAKA Koichi <https://github.com/mugeso>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped
/// <reference types="node" />


import { Transform } from 'stream';

declare function m(maxBytes?: number): m.StreamMeter;

declare namespace m {
    export class StreamMeter extends Transform {
        constructor(maxBytes?: number);
        bytes: number;
        maxBytes: number;
    }
}

export = m;
