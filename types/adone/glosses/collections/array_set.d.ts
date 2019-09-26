declare namespace adone.collection {
    /**
     * Respresetns a data structure which is a combination of an array and a set.
     * Adding a new member is O(1), testing for membership is O(1),
     * and finding the index of an element is O(1).
     */
    class ArraySet<T = any> {
        /**
         * The number of unique items in this ArraySet.
         * If duplicates have been added, than those do not count towards the size.
         */
        readonly length: number;

        /**
         * Adds the given value to this set.
         *
         * @param allowDuplicates Whether to allow duplicates in the set, false by default
         */
        add(value: T, allowDuplicates?: boolean): this;

        /**
         * Checks whether the given value is a member of the set
         */
        has(value: T): boolean;

        /**
         * Returns the index of the given element.
         * If the value is not present it will return -1
         */
        indexOf(value: T): number;

        /**
         * Converts the set to an array
         */
        toArray(): T[];

        /**
         * Creates an ArraySet from the given iterable object
         *
         * @param allowDuplicates Whether to allow duplicates in the set, false by default
         */
        static from<T>(iterable: Iterable<T>, allowDuplicates?: boolean): ArraySet<T>;
    }
}
