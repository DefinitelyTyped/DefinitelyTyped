// Type definitions for arrayify-stream 1.0
// Project: https://github.com/rubensworks/arrayify-stream.js#readme
// Definitions by: Joachim Van Herwegen <https://github.com/joachimvh>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

/// <reference types="node" />

import { EventEmitter } from 'events';

/**
 * Converts a Node readable stream into an array that is returned as a promise.
 */
declare function arrayifyStream(input: EventEmitter): Promise<any[]>;

export = arrayifyStream;
