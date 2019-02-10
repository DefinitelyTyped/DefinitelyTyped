// Type definitions for unique-random-array 1.0
// Project: https://github.com/sindresorhus/unique-random-array#readme
// Definitions by: BendingBender <https://github.com/BendingBender>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

export = uniqueRandomArray;

declare function uniqueRandomArray<T>(input: T[]): () => T;
