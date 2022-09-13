// Type definitions for fast-crc32c 2.0
// Project: https://github.com/ashi009/node-fast-crc32c#readme
// Definitions by: naeem <https://github.com/naeemy>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

/// <reference types="node" />

export function calculate(buf: Buffer | string, initial?: number): number;
