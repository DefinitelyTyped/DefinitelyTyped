// Type definitions for NaturalSort
// Project: https://github.com/studio-b12/natural-sort
// Definitions by: Antonio Morales <https://github.com/a-morales>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

export as namespace naturalSort;

declare function naturalSort<T>(a: T, b: T): number;
export = naturalSort;
