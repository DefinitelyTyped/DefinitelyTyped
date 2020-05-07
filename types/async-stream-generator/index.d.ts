// Type definitions for async-stream-generator 1.0
// Project: https://github.com/MattMorgis/async-stream-generator#readme
// Definitions by: Jakub Jirutka <https://github.com/JakubJirutka>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped
// TypeScript Version: 3.2

/// <reference types="node" />

import { Readable } from 'stream';

declare function streamify(generator: AsyncIterableIterator<any>): Readable;

export = streamify;
