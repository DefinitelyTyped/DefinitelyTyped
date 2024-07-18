declare const intersect: {
    /**
     * Find the intersection of arrays a and b.
     * The individual arrays are expected to be sets, i.e. there's no duplicate elements in them.
     */
    <T>(a: readonly T[], b: readonly T[]): T[];
    /**
     * Find the intersection of all subarrays.
     * The individual arrays are expected to be sets, i.e. there's no duplicate elements in them.
     */
    <T>(arrays: ReadonlyArray<readonly T[]>): T[];
    /**
     * Find the intersection of two large arrays.
     * May perform better than default when there are over approximately 125 elements
     */
    big<T>(a: readonly T[], b: readonly T[]): T[];
};

export = intersect;
