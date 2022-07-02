// Type definitions for chunk 0.0
// Project: https://github.com/ryancole/chunk
// Definitions by: Florian Keller <https://github.com/ffflorian>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

export as namespace chunk;

declare function chunk<T>(array: ArrayLike<T>, size?: number): T[][];

export = chunk;
