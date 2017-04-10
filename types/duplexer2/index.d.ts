// Type definitions for duplexer2 0.1
// Project: https://github.com/deoxxa/duplexer2
// Definitions by: Zlatko Andonovski <https://github.com/Goldsmith42/>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

// Definition file started by dts-gen

/// <reference types="node" />

declare function duplexer2(options: {bubbleErrors: boolean}, writable: NodeJS.WritableStream, readable: NodeJS.ReadableStream): NodeJS.ReadWriteStream;
declare function duplexer2(writable: NodeJS.WritableStream, readable: NodeJS.ReadableStream): NodeJS.ReadWriteStream;

export = duplexer2;
