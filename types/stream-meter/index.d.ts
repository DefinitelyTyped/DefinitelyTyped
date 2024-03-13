/// <reference types="node" />

import { Transform } from "stream";

declare function m(maxBytes?: number): m.StreamMeter;

declare namespace m {
    export class StreamMeter extends Transform {
        constructor(maxBytes?: number);
        bytes: number;
        maxBytes: number;
    }
}

export = m;
