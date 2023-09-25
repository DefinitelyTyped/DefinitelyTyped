// Type definitions for stream-counter 1.0
// Project: https://github.com/andrewrk/node-stream-counter
// Definitions by: Matthew Peveler <https://github.com/MasterOdin>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

/// <reference types="node" />

import { Writable } from "stream";

declare class ByteCounter extends Writable {
    readonly bytes: number;

    on(event: "progress", listener: () => void): this;
    on(event: string | symbol, listener: (...args: any[]) => void): this;
}

export = ByteCounter;
