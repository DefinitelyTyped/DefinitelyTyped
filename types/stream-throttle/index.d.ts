/// <reference types = "node" />

import { Transform } from "stream";

export interface ThrottleOptions {
    readonly rate: number;
    readonly chunksize?: number | undefined;
}

export class Throttle extends Transform {
    constructor(options: ThrottleOptions);
}

export class ThrottleGroup {
    constructor(options: ThrottleOptions);
    throttle(options: ThrottleOptions): Throttle;
}
