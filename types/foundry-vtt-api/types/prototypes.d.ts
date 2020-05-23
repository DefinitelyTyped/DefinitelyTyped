declare interface String {
    capitalize(): string;

    titleCase(): string;

    /**
     * Strip any <script> tags which were included within a provided string
     * @returns {String|*}
     */
    stripScripts(): string;

    /**
     * Transform any string into a url-viable slug string
     * @param {string} replacement    The replacement character to separate terms, default is '-'
     * @param {boolean} strict        Replace all non-alphanumeric characters, or allow them? Default false
     * @return {string}               The cleaned slug string
     */
    slugify(replacement?: string, strict?: boolean): string;
}

/* -------------------------------------------- */
/*  Math Functions                              */
/* -------------------------------------------- */

declare interface Math {
    clamped(x: number, min: number, max: number): number;
    decimals(number: number, places: number): number;
}

/* -------------------------------------------- */
/* Number Methods                               */
/* -------------------------------------------- */

declare interface Number {
    ordinalString(): string;

    paddedString(digits: number): string;

    signedString(): string;

    between(a: number, b: number, inclusive?: boolean): boolean;

    /**
     * Test whether a value is numeric
     * This is the highest performing algorithm currently available
     * https://jsperf.com/isnan-vs-typeof/5
     * @param {*} n       A value to test
     * @return {Boolean}  Is it a number?
     */
    isNumeric(n: number): boolean;
}

/* -------------------------------------------- */
/* Array Methods                                */
/* -------------------------------------------- */

declare interface Array<T> {
    fromRange(n: number): Array<T>;

    deepFlatten(): Array<T>;

    /**
     * Test equality of the values of this array against the values of some other Array
     * @param {Array} other
     * @returns {boolean}
     */
    equals(other: Array<T>): boolean;

    /**
     * Partition an original array into two children array based on a logical test
     * Elements which test as false go into the first result while elements testing as true appear in the second
     * @param rule {Function}
     * @return {Array}    An Array of length two whose elements are the partitioned pieces of the original
     */
    partition(rule: Function): Array<T>;

    /**
     * Join an Array using a string separator, first filtering out any parts which return a false-y value
     * @param {string} sep    The separator string
     * @return {string}       The joined string, filtered of any false values
     */
    filterJoin(sep: string): string;

    /**
     * Find an element within the Array and remove it from the array
     * @param {Function} find   A function to use as input to findIndex
     * @return {*|null}         The removed item or null if none was found
     */
    findSplice(find: Function): any | null;
}

declare interface RegExp {
    escape(string: string): string;
}
