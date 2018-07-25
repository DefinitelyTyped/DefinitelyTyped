// Type definitions for throttle 1.0
// Project: https://github.com/TooTallNate/node-throttle
// Definitions by: BendingBender <https://github.com/BendingBender>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

/// <reference types="node" />
import * as stream from 'stream';

export = Throttle;

declare class Throttle extends stream.Transform {
    constructor(options: number | Throttle.Options);
}

declare namespace Throttle {
    interface Options extends stream.TransformOptions {
        bps: number;
        chunkSize?: number;
    }
}
