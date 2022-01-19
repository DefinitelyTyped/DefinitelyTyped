// Type definitions for streamify-string 1.0
// Project: https://github.com/chrisallenlane/streamify-string
// Definitions by: Jesse Wright <https://github.com/jeswr>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

/// <reference types="node" />

import { Readable } from 'stream';

// tslint:disable-next-line:no-empty-interface
interface Streamify extends Readable {}
interface StreamifyConstructor {
  new (str: string, options?: any): Streamify;
  (str: string, options?: any): Streamify;
}

/**
 * Converts a string into a Node readable stream.
 */
declare const Streamify: StreamifyConstructor;

export = Streamify;
