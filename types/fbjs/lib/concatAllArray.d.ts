/**
 * Concats an array of arrays into a single flat array.
 */
declare function concatAllArray<T>(array: Array<T | null | undefined>): T[];

declare namespace concatAllArray {}

export = concatAllArray;
