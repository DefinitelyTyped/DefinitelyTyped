// Type definitions for @wordpress/is-shallow-equal 1.4
// Project: https://github.com/WordPress/gutenberg/tree/master/packages/is-shallow-equal/README.md
// Definitions by: Derek Sifford <https://github.com/dsifford>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped
// TypeScript Version: 3.5

declare const isShallowEqual: {
    /**
     * Returns `true` if the two arrays or objects are shallow equal, or `false` otherwise.
     *
     * @param a - First object or array to compare.
     * @param b - Second object or array to compare.
     *
     * @returns Whether the two values are shallow equal.
     */
    (a: ArrayLike<any> | object, b: ArrayLike<any> | object): boolean;

    /**
     * Returns true if the two arrays are shallow equal, or false otherwise.
     *
     * @param a - First array to compare.
     * @param b - Second array to compare.
     *
     * @returns Whether the two arrays are shallow equal.
     */
    isShallowEqualArrays(a: ArrayLike<any>, b: ArrayLike<any>): boolean;

    /**
     * Returns `true` if the two objects are shallow equal, or `false` otherwise.
     *
     * @param a - First object to compare.
     * @param b - Second object to compare.
     *
     * @returns Whether the two objects are shallow equal.
     */
    isShallowEqualObjects(a: object, b: object): boolean;
};

export = isShallowEqual;
