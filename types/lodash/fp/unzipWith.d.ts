// AUTO-GENERATED: do not modify this file directly.
// If you need to make changes, modify generate-fp.ts (if necessary), then open a terminal in types/lodash/scripts, and do:
// npm run fp

import _ = require("../index");

interface UnzipWith {
    /**
     * This method is like _.unzip except that it accepts an iteratee to specify how regrouped values should be
     * combined. The iteratee is bound to thisArg and invoked with four arguments: (accumulator, value, index,
     * group).
     *
     * @param array The array of grouped elements to process.
     * @param iteratee The function to combine regrouped values.
     * @param thisArg The this binding of iteratee.
     * @return Returns the new array of regrouped elements.
     */
    (): UnzipWith;
    /**
     * This method is like _.unzip except that it accepts an iteratee to specify how regrouped values should be
     * combined. The iteratee is bound to thisArg and invoked with four arguments: (accumulator, value, index,
     * group).
     *
     * @param array The array of grouped elements to process.
     * @param iteratee The function to combine regrouped values.
     * @param thisArg The this binding of iteratee.
     * @return Returns the new array of regrouped elements.
     */
    <T, TResult>(iteratee: (...values: T[]) => TResult): UnzipWith1x1<T, TResult>;
    /**
     * This method is like _.unzip except that it accepts an iteratee to specify how regrouped values should be
     * combined. The iteratee is bound to thisArg and invoked with four arguments: (accumulator, value, index,
     * group).
     *
     * @param array The array of grouped elements to process.
     * @param iteratee The function to combine regrouped values.
     * @param thisArg The this binding of iteratee.
     * @return Returns the new array of regrouped elements.
     */
    <T, TResult>(iteratee: (...values: T[]) => TResult, array: _.List<_.List<T>> | null | undefined): TResult[];
}
interface UnzipWith1x1<T, TResult> {
    /**
     * This method is like _.unzip except that it accepts an iteratee to specify how regrouped values should be
     * combined. The iteratee is bound to thisArg and invoked with four arguments: (accumulator, value, index,
     * group).
     *
     * @param array The array of grouped elements to process.
     * @param iteratee The function to combine regrouped values.
     * @param thisArg The this binding of iteratee.
     * @return Returns the new array of regrouped elements.
     */
    (): UnzipWith1x1<T, TResult>;
    /**
     * This method is like _.unzip except that it accepts an iteratee to specify how regrouped values should be
     * combined. The iteratee is bound to thisArg and invoked with four arguments: (accumulator, value, index,
     * group).
     *
     * @param array The array of grouped elements to process.
     * @param iteratee The function to combine regrouped values.
     * @param thisArg The this binding of iteratee.
     * @return Returns the new array of regrouped elements.
     */
    (array: _.List<_.List<T>> | null | undefined): TResult[];
}

declare const unzipWith: UnzipWith;
export = unzipWith;
