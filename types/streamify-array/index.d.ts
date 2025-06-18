/// <reference types="node" />

import { Readable } from "stream";

/**
 * Converts an array into a Node readable stream.
 * Elements get removed from the array when they are read from the stream.
 */
declare function streamifyArray(input: any[]): Readable;

export = streamifyArray;
