// Type definitions for then-eos 1.0
// Project: https://github.com/meoguru/node-then-eos
// Definitions by: Sean Marvi Oliver Genabe <https://github.com/seangenabe>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

/// <reference types="node"/>

type Stream = NodeJS.ReadableStream | NodeJS.WritableStream;

declare function thenEos(stream: Stream): Promise<void>;

export = thenEos;
