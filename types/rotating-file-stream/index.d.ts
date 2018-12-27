// Type definitions for rotating-file-stream 1.3
// Project: https://github.com/iccicci/rotating-file-stream#readme
// Definitions by: Daniel Schopf <https://github.com/Danscho>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

/// <reference types="node" />

import { WriteStream } from "fs";

export = rfs;
declare function rfs(filename: string, options: rfs.RfsOptions): WriteStream;

declare namespace rfs {
    type CompressFn = (srcFileName: string, destinationFileName: string) => string;
    interface RfsOptions {
        compress?: string | true | CompressFn;
        highWaterMark?: number;
        history?: string;
        immutable?: boolean;
        initialRotation?: boolean;
        interval?: string;
        maxFiles?: number;
        maxSize?: string;
        mode?: number;
        path?: string;
        rotate?: number;
        rotationTime?: boolean;
        size?: string;
    }
}
