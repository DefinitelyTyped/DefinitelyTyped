/// <reference types="node" />
import * as stream from "stream";

export = Throttle;

declare class Throttle extends stream.Transform {
    constructor(options: number | Throttle.Options);
}

declare namespace Throttle {
    interface Options extends stream.TransformOptions {
        bps: number;
        chunkSize?: number | undefined;
    }
}
