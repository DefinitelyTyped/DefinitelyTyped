/// <reference types="node" />

import { Readable } from "stream";

interface ToStream {
    (buffer: string | Buffer, chunkSize?: number): Readable;
}

declare const toStream: ToStream;

export = toStream;
