// Type definitions for stream-array 1.1
// Project: https://github.com/mimetnet/node-stream-array
// Definitions by: Tyler Murphy <https://github.com/Tyler-Murphy>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped
/// <reference types="node" />

import { Readable } from 'stream';

declare function streamify(array: ReadonlyArray<any>): Readable;

export = streamify;
