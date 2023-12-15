/// <reference types="node" />

import { Readable } from "stream";

// eslint-disable-next-line @typescript-eslint/no-empty-interface
interface Streamify extends Readable {}
interface StreamifyConstructor {
    new(str: string, options?: any): Streamify;
    (str: string, options?: any): Streamify;
}

/**
 * Converts a string into a Node readable stream.
 */
declare const Streamify: StreamifyConstructor;

export = Streamify;
