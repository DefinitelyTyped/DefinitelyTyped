// Type definitions for streamify-string 1.0
// Project: https://github.com/chrisallenlane/streamify-string
// Definitions by: Jesse Wright <https://github.com/me>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

/// <reference types="node" />

import { Readable } from 'stream';

/**
 * Converts a string into a Node readable stream.
 */
declare function streamifyString(str: string, options?: any): Readable;

export = streamifyString;
