// Type definitions for stream-each 1.2
// Project: https://github.com/mafintosh/stream-each
// Definitions by: Daniel Cassidy <https://github.com/djcsdy>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

/// <reference types="node"/>

declare function each(stream: NodeJS.ReadableStream,
    iterator: (data: Buffer | string, next: (error?: Error) => void) => void,
    cb: (error?: Error) => void): void;

export = each;
