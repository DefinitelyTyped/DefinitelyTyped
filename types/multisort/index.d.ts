// Type definitions for multisort 0.5
// Project: https://github.com/peterkhayes/multisort
// Definitions by: Marek Buchar <https://github.com/CzBuCHi>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

/**
 * Returns sorting function which sorts its argument by given criterions.
 * @param sortings Sort criterions.
 */
declare function multisort<T>(
    criterions: multisort.Criterion<T> | Array<multisort.Criterion<T>>,
): multisort.SortFunction<T>;

/**
 * Sorts given array by given criterions.
 * @param toSort Array to sort.
 * @param sortings Sort criterions.
 */
declare function multisort<T>(
    toSort: T[],
    criterions: multisort.Criterion<T> | Array<multisort.Criterion<T>>,
): T[];

declare namespace multisort {
    /**
     * Functional evaluators don't need any transformation, and can't
     *   have inverted order.
     *
     * Numerical evaluators sort the input directly if the criterion is
     *   non-negative, and in inverted order if the criterion is negative.
     *
     * String evaluators sort the input based on objects properties.
     * - Invert the sort if initial character is ! or ~.
     * - Allow an initial dot: ".prop.subprop" as well as "prop.subprop".
     * - Allow existential criterion by tailing question mark: "prop.subprop?".
     */
    type Criterion<T> = ((item: T) => any) | number | string;

    /**
     * Sorting function.
     */
    interface SortFunction<T> {
        (toSort: T[]): void;
        /**
         * To allow this to plug in to other sorting mechanisms.
         */
        comparator: (a: T, b: T) => number;
    }
}

export = multisort;
