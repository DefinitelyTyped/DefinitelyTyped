// Type definitions for weighted-random-object 1.0
// Project: https://github.com/misund/weighted-random-object
// Definitions by: mike castleman <https://github.com/mlc>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

// TypeScript Version: 2.7

interface Weighted {
    weight: number;
}

declare function weightedRandomObject<T extends Weighted>(objects: ReadonlyArray<T>): T;

export = weightedRandomObject;
