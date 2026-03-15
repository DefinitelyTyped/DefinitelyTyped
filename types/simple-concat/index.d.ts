/// <reference types="node" />

import { Readable } from "stream";

/**
 * Collect all data from a readable stream into a single Buffer.
 *
 * @param stream - Readable stream to collect data from
 * @param cb - Callback with error or concatenated Buffer
 */
declare function concat(stream: Readable, cb: (err: Error | null, data: Buffer) => void): void;

export = concat;
