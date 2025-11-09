/// <reference types="node" />
import stream = require("stream");

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
