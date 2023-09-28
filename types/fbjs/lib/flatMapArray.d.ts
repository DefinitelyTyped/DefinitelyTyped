/**
 * Applies a function to every item in an array and concatenates the resulting
 * arrays into a single flat array.
 */
declare function flatMapArray<TValue, TNext>(array: TValue[], fn: (value: TValue, index: number) => TNext[]): TNext[];

declare namespace flatMapArray {}

export = flatMapArray;
