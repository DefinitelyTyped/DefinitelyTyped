// Type definitions for stream-shift 1.0
// Project: https://github.com/mafintosh/stream-shift
// Definitions by: Daniel Cassidy <https://github.com/djcsdy>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

/// <reference types="node"/>

declare function shift(stream: NodeJS.ReadableStream): Buffer | string | null;

export = shift;
