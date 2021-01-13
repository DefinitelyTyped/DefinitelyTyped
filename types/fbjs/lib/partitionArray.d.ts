/**
 * Partitions an array given a predicate. All elements satisfying the predicate
 * are part of the first returned array, and all elements that don't are in the
 * second.
 */
declare function partitionArray<Tv>(
    array: Array<Tv>,
    predicate: (value: Tv, index: number, array: Array<Tv>) => boolean,
    context?: any,
): [Array<Tv>, Array<Tv>];

declare namespace partitionArray {}

export = partitionArray;
