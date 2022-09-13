// Type definitions for buffer-to-stream 1.0
// Project: https://github.com/creeperyang/buffer-to-stream#readme
// Definitions by: tpluscode <https://github.com/tpluscode>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

/// <reference types="node" />

import { Readable } from 'stream';

interface ToStream {
    (buffer: string | Buffer, chunkSize?: number): Readable;
}

declare const toStream: ToStream;

export = toStream;
