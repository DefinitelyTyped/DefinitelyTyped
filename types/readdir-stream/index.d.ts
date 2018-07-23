// Type definitions for readdir-stream v0.1.0
// Project: https://github.com/logicalparadox/readdir-stream
// Definitions by: Bart van der Schoor <https://github.com/Bartvds>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped
// TypeScript Version: 2.4

/// <reference types="node" />


declare function readdir(dir: string): NodeJS.ReadableStream;
export = readdir;
