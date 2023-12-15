/// <reference types="node" />

import { EventEmitter } from "events";

/**
 * Converts a Node readable stream into an array that is returned as a promise.
 */
declare function arrayifyStream(input: EventEmitter): Promise<any[]>;

export = arrayifyStream;
