// Type definitions for streamify-array 1.0
// Project: https://github.com/rubensworks/streamify-array.js#readme
// Definitions by: Joachim Van Herwegen <https://github.com/joachimvh>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

/// <reference types="node" />

import { Readable } from 'stream';

/**
 * Converts an array into a Node readable stream.
 * Elements get removed from the array when they are read from the stream.
 */
declare function streamifyArray(input: any[]): Readable;

export = streamifyArray;
