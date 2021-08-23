/**
 * Partitions an object given a predicate. All elements satisfying the predicate
 * are part of the first returned object, and all elements that don't are in the
 * second.
 */
declare function partitionObject<Tv>(
    object: {
        [key: string]: Tv;
    },
    callback: (
        value: Tv,
        key: string,
        object: {
            [key: string]: Tv;
        },
    ) => boolean,
    context?: any,
): [
    {
        [key: string]: Tv;
    },
    {
        [key: string]: Tv;
    },
];

declare namespace partitionObject {}

export = partitionObject;
