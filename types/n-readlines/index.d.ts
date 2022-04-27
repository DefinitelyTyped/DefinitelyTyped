// Type definitions for n-readlines 1.0
// Project: https://github.com/nacholibre/node-readlines
// Definitions by: DefinitelyTyped <https://github.com/DefinitelyTyped>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped
// TypeScript Version: 2.3

/// <reference types="node" />

import { PathLike } from 'fs';

export = LineByLine;

declare class LineByLine {
    constructor(file: PathLike | number, options?: Options)
    next(): Buffer | false;
    reset(): void;
    close(): void;
}

interface Options {
    readChunk?: number | undefined;
    newLineCharacter?: string | undefined;
}
