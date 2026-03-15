/// <reference types="node" />

import { Readable } from "stream";

/**
 * Unpipe a stream from all destinations.
 *
 * @param stream The stream to unpipe from all destinations.
 */
declare function unpipe(stream: Readable): void;

export = unpipe;
