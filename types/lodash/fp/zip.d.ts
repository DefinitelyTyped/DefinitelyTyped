// AUTO-GENERATED: do not modify this file directly.
// If you need to make changes, modify generate-fp.ts (if necessary), then open a terminal in types/lodash/scripts, and do:
// npm run fp

import _ = require("../index");

interface Zip {
    /**
     * Creates an array of grouped elements, the first of which contains the first elements of the given arrays,
     * the second of which contains the second elements of the given arrays, and so on.
     *
     * @param arrays The arrays to process.
     * @return Returns the new array of grouped elements.
     */
    (): Zip;
    /**
     * Creates an array of grouped elements, the first of which contains the first elements of the given arrays,
     * the second of which contains the second elements of the given arrays, and so on.
     *
     * @param arrays The arrays to process.
     * @return Returns the new array of grouped elements.
     */
    <T1>(arrays1: _.List<T1>): Zip1x1<T1>;
    /**
     * Creates an array of grouped elements, the first of which contains the first elements of the given arrays,
     * the second of which contains the second elements of the given arrays, and so on.
     *
     * @param arrays The arrays to process.
     * @return Returns the new array of grouped elements.
     */
    <T1, T2>(arrays1: _.List<T1>, arrays2: _.List<T2>): Array<[T1 | undefined, T2 | undefined]>;
}
interface Zip1x1<T1> {
    /**
     * Creates an array of grouped elements, the first of which contains the first elements of the given arrays,
     * the second of which contains the second elements of the given arrays, and so on.
     *
     * @param arrays The arrays to process.
     * @return Returns the new array of grouped elements.
     */
    (): Zip1x1<T1>;
    /**
     * Creates an array of grouped elements, the first of which contains the first elements of the given arrays,
     * the second of which contains the second elements of the given arrays, and so on.
     *
     * @param arrays The arrays to process.
     * @return Returns the new array of grouped elements.
     */
    <T2>(arrays2: _.List<T2>): Array<[T1 | undefined, T2 | undefined]>;
}

declare const zip: Zip;
declare namespace zip {}
export = zip;
