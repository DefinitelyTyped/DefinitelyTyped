// Type definitions for async-iterator-to-array 0.0
// Project: https://github.com/achingbrain/async-iterator-to-array
// Definitions by: Christoph Thiede <https://github.com/LinqLover>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

/// <reference types="node" />

/** Collects all values from an async iterator and returns them as an array */
declare function toArray<T>(iterator: AsyncIterator<T>): Promise<T[]>;

export = toArray;
