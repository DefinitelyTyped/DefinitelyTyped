declare namespace shuffleArray {
    /**
     * copy - Sets if should return a shuffled copy of the given array. By default it's a falsy value.
     * rng - Specifies a custom random number generator.
     */
    interface ShuffleOptions {
        copy?: boolean;
        rng?: () => number;
    }
    /**
     * picks - Specifies how many random elements you want to pick. By default it picks 1.
     * rng - Specifies a custom random number generator.
     */
    interface PickOptions {
        picks?: number;
        rng?: () => number;
    }
    interface ShuffleArray {
        /**
         * Randomizes the order of the elements in a given array.
         *
         * arr - The given array.
         * options - Optional configuration options.
         */
        <T>(arr: T[], options?: ShuffleOptions): T[];
        /**
         * Pick one or more random elements from the given array. If options.picks is
         * omitted or === 1, a single element will be returned; otherwise an array.
         *
         * arr - The given array.
         * options - Optional configuration options.
         */
        pick<T>(arr: readonly T[], options?: PickOptions): T | T[];
    }
}
declare var shuffleArray: shuffleArray.ShuffleArray;
export = shuffleArray;
