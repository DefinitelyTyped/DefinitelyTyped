// AUTO-GENERATED: do not modify this file directly.
// If you need to make changes, modify generate-fp.ts (if necessary), then open a terminal in types/lodash/scripts, and do:
// npm run fp

import _ = require("../index");

interface DifferenceBy {
    /**
     * This method is like _.difference except that it accepts iteratee which is invoked for each element of array
     * and values to generate the criterion by which uniqueness is computed. The iteratee is invoked with one
     * argument: (value).
     *
     * @param array The array to inspect.
     * @param values The values to exclude.
     * @param iteratee The iteratee invoked per element.
     * @returns Returns the new array of filtered values.
     */
    (): DifferenceBy;
    /**
     * This method is like _.difference except that it accepts iteratee which is invoked for each element of array
     * and values to generate the criterion by which uniqueness is computed. The iteratee is invoked with one
     * argument: (value).
     *
     * @param array The array to inspect.
     * @param values The values to exclude.
     * @param iteratee The iteratee invoked per element.
     * @returns Returns the new array of filtered values.
     */
    <T1, T2>(iteratee: _.ValueIteratee<T1 | T2>): DifferenceBy1x1<T1, T2>;
    /**
     * This method is like _.difference except that it accepts iteratee which is invoked for each element of array
     * and values to generate the criterion by which uniqueness is computed. The iteratee is invoked with one
     * argument: (value).
     *
     * @param array The array to inspect.
     * @param values The values to exclude.
     * @param iteratee The iteratee invoked per element.
     * @returns Returns the new array of filtered values.
     */
    <T1>(p1: _.__, array: _.List<T1> | null | undefined): DifferenceBy1x2<T1>;
    /**
     * This method is like _.difference except that it accepts iteratee which is invoked for each element of array
     * and values to generate the criterion by which uniqueness is computed. The iteratee is invoked with one
     * argument: (value).
     *
     * @param array The array to inspect.
     * @param values The values to exclude.
     * @param iteratee The iteratee invoked per element.
     * @returns Returns the new array of filtered values.
     */
    <T1, T2>(iteratee: _.ValueIteratee<T1 | T2>, array: _.List<T1> | null | undefined): DifferenceBy1x3<T1, T2>;
    /**
     * This method is like _.difference except that it accepts iteratee which is invoked for each element of array
     * and values to generate the criterion by which uniqueness is computed. The iteratee is invoked with one
     * argument: (value).
     *
     * @param array The array to inspect.
     * @param values The values to exclude.
     * @param iteratee The iteratee invoked per element.
     * @returns Returns the new array of filtered values.
     */
    <T2>(p1: _.__, p2: _.__, values: _.List<T2>): DifferenceBy1x4<T2>;
    /**
     * This method is like _.difference except that it accepts iteratee which is invoked for each element of array
     * and values to generate the criterion by which uniqueness is computed. The iteratee is invoked with one
     * argument: (value).
     *
     * @param array The array to inspect.
     * @param values The values to exclude.
     * @param iteratee The iteratee invoked per element.
     * @returns Returns the new array of filtered values.
     */
    <T1, T2>(iteratee: _.ValueIteratee<T1 | T2>, p2: _.__, values: _.List<T2>): DifferenceBy1x5<T1>;
    /**
     * This method is like _.difference except that it accepts iteratee which is invoked for each element of array
     * and values to generate the criterion by which uniqueness is computed. The iteratee is invoked with one
     * argument: (value).
     *
     * @param array The array to inspect.
     * @param values The values to exclude.
     * @param iteratee The iteratee invoked per element.
     * @returns Returns the new array of filtered values.
     */
    <T1, T2>(p1: _.__, array: _.List<T1> | null | undefined, values: _.List<T2>): DifferenceBy1x6<T1, T2>;
    /**
     * This method is like _.difference except that it accepts iteratee which is invoked for each element of array
     * and values to generate the criterion by which uniqueness is computed. The iteratee is invoked with one
     * argument: (value).
     *
     * @param array The array to inspect.
     * @param values The values to exclude.
     * @param iteratee The iteratee invoked per element.
     * @returns Returns the new array of filtered values.
     */
    <T1, T2>(iteratee: _.ValueIteratee<T1 | T2>, array: _.List<T1> | null | undefined, values: _.List<T2>): T1[];
}
interface DifferenceBy1x1<T1, T2> {
    /**
     * This method is like _.difference except that it accepts iteratee which is invoked for each element of array
     * and values to generate the criterion by which uniqueness is computed. The iteratee is invoked with one
     * argument: (value).
     *
     * @param array The array to inspect.
     * @param values The values to exclude.
     * @param iteratee The iteratee invoked per element.
     * @returns Returns the new array of filtered values.
     */
    (): DifferenceBy1x1<T1, T2>;
    /**
     * This method is like _.difference except that it accepts iteratee which is invoked for each element of array
     * and values to generate the criterion by which uniqueness is computed. The iteratee is invoked with one
     * argument: (value).
     *
     * @param array The array to inspect.
     * @param values The values to exclude.
     * @param iteratee The iteratee invoked per element.
     * @returns Returns the new array of filtered values.
     */
    (array: _.List<T1> | null | undefined): DifferenceBy1x3<T1, T2>;
    /**
     * This method is like _.difference except that it accepts iteratee which is invoked for each element of array
     * and values to generate the criterion by which uniqueness is computed. The iteratee is invoked with one
     * argument: (value).
     *
     * @param array The array to inspect.
     * @param values The values to exclude.
     * @param iteratee The iteratee invoked per element.
     * @returns Returns the new array of filtered values.
     */
    (p1: _.__, values: _.List<T2>): DifferenceBy1x5<T1>;
    /**
     * This method is like _.difference except that it accepts iteratee which is invoked for each element of array
     * and values to generate the criterion by which uniqueness is computed. The iteratee is invoked with one
     * argument: (value).
     *
     * @param array The array to inspect.
     * @param values The values to exclude.
     * @param iteratee The iteratee invoked per element.
     * @returns Returns the new array of filtered values.
     */
    (array: _.List<T1> | null | undefined, values: _.List<T2>): T1[];
}
interface DifferenceBy1x2<T1> {
    /**
     * This method is like _.difference except that it accepts iteratee which is invoked for each element of array
     * and values to generate the criterion by which uniqueness is computed. The iteratee is invoked with one
     * argument: (value).
     *
     * @param array The array to inspect.
     * @param values The values to exclude.
     * @param iteratee The iteratee invoked per element.
     * @returns Returns the new array of filtered values.
     */
    (): DifferenceBy1x2<T1>;
    /**
     * This method is like _.difference except that it accepts iteratee which is invoked for each element of array
     * and values to generate the criterion by which uniqueness is computed. The iteratee is invoked with one
     * argument: (value).
     *
     * @param array The array to inspect.
     * @param values The values to exclude.
     * @param iteratee The iteratee invoked per element.
     * @returns Returns the new array of filtered values.
     */
    <T2>(iteratee: _.ValueIteratee<T1 | T2>): DifferenceBy1x3<T2, T1>;
    /**
     * This method is like _.difference except that it accepts iteratee which is invoked for each element of array
     * and values to generate the criterion by which uniqueness is computed. The iteratee is invoked with one
     * argument: (value).
     *
     * @param array The array to inspect.
     * @param values The values to exclude.
     * @param iteratee The iteratee invoked per element.
     * @returns Returns the new array of filtered values.
     */
    <T2>(p1: _.__, values: _.List<T2>): DifferenceBy1x6<T2, T1>;
    /**
     * This method is like _.difference except that it accepts iteratee which is invoked for each element of array
     * and values to generate the criterion by which uniqueness is computed. The iteratee is invoked with one
     * argument: (value).
     *
     * @param array The array to inspect.
     * @param values The values to exclude.
     * @param iteratee The iteratee invoked per element.
     * @returns Returns the new array of filtered values.
     */
    <T2>(iteratee: _.ValueIteratee<T1 | T2>, values: _.List<T2>): T1[];
}
interface DifferenceBy1x3<T1, T2> {
    /**
     * This method is like _.difference except that it accepts iteratee which is invoked for each element of array
     * and values to generate the criterion by which uniqueness is computed. The iteratee is invoked with one
     * argument: (value).
     *
     * @param array The array to inspect.
     * @param values The values to exclude.
     * @param iteratee The iteratee invoked per element.
     * @returns Returns the new array of filtered values.
     */
    (): DifferenceBy1x3<T1, T2>;
    /**
     * This method is like _.difference except that it accepts iteratee which is invoked for each element of array
     * and values to generate the criterion by which uniqueness is computed. The iteratee is invoked with one
     * argument: (value).
     *
     * @param array The array to inspect.
     * @param values The values to exclude.
     * @param iteratee The iteratee invoked per element.
     * @returns Returns the new array of filtered values.
     */
    (values: _.List<T2>): T1[];
}
interface DifferenceBy1x4<T2> {
    /**
     * This method is like _.difference except that it accepts iteratee which is invoked for each element of array
     * and values to generate the criterion by which uniqueness is computed. The iteratee is invoked with one
     * argument: (value).
     *
     * @param array The array to inspect.
     * @param values The values to exclude.
     * @param iteratee The iteratee invoked per element.
     * @returns Returns the new array of filtered values.
     */
    (): DifferenceBy1x4<T2>;
    /**
     * This method is like _.difference except that it accepts iteratee which is invoked for each element of array
     * and values to generate the criterion by which uniqueness is computed. The iteratee is invoked with one
     * argument: (value).
     *
     * @param array The array to inspect.
     * @param values The values to exclude.
     * @param iteratee The iteratee invoked per element.
     * @returns Returns the new array of filtered values.
     */
    <T1>(iteratee: _.ValueIteratee<T1 | T2>): DifferenceBy1x5<T1>;
    /**
     * This method is like _.difference except that it accepts iteratee which is invoked for each element of array
     * and values to generate the criterion by which uniqueness is computed. The iteratee is invoked with one
     * argument: (value).
     *
     * @param array The array to inspect.
     * @param values The values to exclude.
     * @param iteratee The iteratee invoked per element.
     * @returns Returns the new array of filtered values.
     */
    <T1>(p1: _.__, array: _.List<T1> | null | undefined): DifferenceBy1x6<T1, T2>;
    /**
     * This method is like _.difference except that it accepts iteratee which is invoked for each element of array
     * and values to generate the criterion by which uniqueness is computed. The iteratee is invoked with one
     * argument: (value).
     *
     * @param array The array to inspect.
     * @param values The values to exclude.
     * @param iteratee The iteratee invoked per element.
     * @returns Returns the new array of filtered values.
     */
    <T1>(iteratee: _.ValueIteratee<T1 | T2>, array: _.List<T1> | null | undefined): T1[];
}
interface DifferenceBy1x5<T1> {
    /**
     * This method is like _.difference except that it accepts iteratee which is invoked for each element of array
     * and values to generate the criterion by which uniqueness is computed. The iteratee is invoked with one
     * argument: (value).
     *
     * @param array The array to inspect.
     * @param values The values to exclude.
     * @param iteratee The iteratee invoked per element.
     * @returns Returns the new array of filtered values.
     */
    (): DifferenceBy1x5<T1>;
    /**
     * This method is like _.difference except that it accepts iteratee which is invoked for each element of array
     * and values to generate the criterion by which uniqueness is computed. The iteratee is invoked with one
     * argument: (value).
     *
     * @param array The array to inspect.
     * @param values The values to exclude.
     * @param iteratee The iteratee invoked per element.
     * @returns Returns the new array of filtered values.
     */
    <T2>(array: _.List<T1> | null | undefined): T1[];
}
interface DifferenceBy1x6<T1, T2> {
    /**
     * This method is like _.difference except that it accepts iteratee which is invoked for each element of array
     * and values to generate the criterion by which uniqueness is computed. The iteratee is invoked with one
     * argument: (value).
     *
     * @param array The array to inspect.
     * @param values The values to exclude.
     * @param iteratee The iteratee invoked per element.
     * @returns Returns the new array of filtered values.
     */
    (): DifferenceBy1x6<T1, T2>;
    /**
     * This method is like _.difference except that it accepts iteratee which is invoked for each element of array
     * and values to generate the criterion by which uniqueness is computed. The iteratee is invoked with one
     * argument: (value).
     *
     * @param array The array to inspect.
     * @param values The values to exclude.
     * @param iteratee The iteratee invoked per element.
     * @returns Returns the new array of filtered values.
     */
    (iteratee: _.ValueIteratee<T1 | T2>): T1[];
}

declare const differenceBy: DifferenceBy;
export = differenceBy;
