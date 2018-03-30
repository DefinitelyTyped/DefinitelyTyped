// AUTO-GENERATED: do not modify this file directly.
// If you need to make changes, modify generate-fp.ts (if necessary), then open a terminal in types/lodash/scripts, and do:
// npm run fp

import _ = require("../index");

interface ZipWith {
    /**
     * This method is like _.zip except that it accepts an iteratee to specify how grouped values should be
     * combined. The iteratee is bound to thisArg and invoked with four arguments: (accumulator, value, index,
     * group).
     * @param [arrays] The arrays to process.
     * @param [iteratee] The function to combine grouped values.
     * @param [thisArg] The `this` binding of `iteratee`.
     * @return Returns the new array of grouped elements.
     */
    (): ZipWith;
    /**
     * This method is like _.zip except that it accepts an iteratee to specify how grouped values should be
     * combined. The iteratee is bound to thisArg and invoked with four arguments: (accumulator, value, index,
     * group).
     * @param [arrays] The arrays to process.
     * @param [iteratee] The function to combine grouped values.
     * @param [thisArg] The `this` binding of `iteratee`.
     * @return Returns the new array of grouped elements.
     */
    <T1, T2, TResult>(iteratee: (value1: T1, value2: T2) => TResult): ZipWith1x1<T1, T2, TResult>;
    /**
     * This method is like _.zip except that it accepts an iteratee to specify how grouped values should be
     * combined. The iteratee is bound to thisArg and invoked with four arguments: (accumulator, value, index,
     * group).
     * @param [arrays] The arrays to process.
     * @param [iteratee] The function to combine grouped values.
     * @param [thisArg] The `this` binding of `iteratee`.
     * @return Returns the new array of grouped elements.
     */
    <T1>(p1: _.__, arrays1: _.List<T1>): ZipWith1x2<T1>;
    /**
     * This method is like _.zip except that it accepts an iteratee to specify how grouped values should be
     * combined. The iteratee is bound to thisArg and invoked with four arguments: (accumulator, value, index,
     * group).
     * @param [arrays] The arrays to process.
     * @param [iteratee] The function to combine grouped values.
     * @param [thisArg] The `this` binding of `iteratee`.
     * @return Returns the new array of grouped elements.
     */
    <T1, T2, TResult>(iteratee: (value1: T1, value2: T2) => TResult, arrays1: _.List<T1>): ZipWith1x3<T2, TResult>;
    /**
     * This method is like _.zip except that it accepts an iteratee to specify how grouped values should be
     * combined. The iteratee is bound to thisArg and invoked with four arguments: (accumulator, value, index,
     * group).
     * @param [arrays] The arrays to process.
     * @param [iteratee] The function to combine grouped values.
     * @param [thisArg] The `this` binding of `iteratee`.
     * @return Returns the new array of grouped elements.
     */
    <T2>(p1: _.__, p2: _.__, arrays2: _.List<T2>): ZipWith1x4<T2>;
    /**
     * This method is like _.zip except that it accepts an iteratee to specify how grouped values should be
     * combined. The iteratee is bound to thisArg and invoked with four arguments: (accumulator, value, index,
     * group).
     * @param [arrays] The arrays to process.
     * @param [iteratee] The function to combine grouped values.
     * @param [thisArg] The `this` binding of `iteratee`.
     * @return Returns the new array of grouped elements.
     */
    <T1, T2, TResult>(iteratee: (value1: T1, value2: T2) => TResult, p2: _.__, arrays2: _.List<T2>): ZipWith1x5<T1, TResult>;
    /**
     * This method is like _.zip except that it accepts an iteratee to specify how grouped values should be
     * combined. The iteratee is bound to thisArg and invoked with four arguments: (accumulator, value, index,
     * group).
     * @param [arrays] The arrays to process.
     * @param [iteratee] The function to combine grouped values.
     * @param [thisArg] The `this` binding of `iteratee`.
     * @return Returns the new array of grouped elements.
     */
    <T1, T2>(p1: _.__, arrays1: _.List<T1>, arrays2: _.List<T2>): ZipWith1x6<T1, T2>;
    /**
     * This method is like _.zip except that it accepts an iteratee to specify how grouped values should be
     * combined. The iteratee is bound to thisArg and invoked with four arguments: (accumulator, value, index,
     * group).
     * @param [arrays] The arrays to process.
     * @param [iteratee] The function to combine grouped values.
     * @param [thisArg] The `this` binding of `iteratee`.
     * @return Returns the new array of grouped elements.
     */
    <T1, T2, TResult>(iteratee: (value1: T1, value2: T2) => TResult, arrays1: _.List<T1>, arrays2: _.List<T2>): TResult[];
}
interface ZipWith1x1<T1, T2, TResult> {
    /**
     * This method is like _.zip except that it accepts an iteratee to specify how grouped values should be
     * combined. The iteratee is bound to thisArg and invoked with four arguments: (accumulator, value, index,
     * group).
     * @param [arrays] The arrays to process.
     * @param [iteratee] The function to combine grouped values.
     * @param [thisArg] The `this` binding of `iteratee`.
     * @return Returns the new array of grouped elements.
     */
    (): ZipWith1x1<T1, T2, TResult>;
    /**
     * This method is like _.zip except that it accepts an iteratee to specify how grouped values should be
     * combined. The iteratee is bound to thisArg and invoked with four arguments: (accumulator, value, index,
     * group).
     * @param [arrays] The arrays to process.
     * @param [iteratee] The function to combine grouped values.
     * @param [thisArg] The `this` binding of `iteratee`.
     * @return Returns the new array of grouped elements.
     */
    (arrays1: _.List<T1>): ZipWith1x3<T2, TResult>;
    /**
     * This method is like _.zip except that it accepts an iteratee to specify how grouped values should be
     * combined. The iteratee is bound to thisArg and invoked with four arguments: (accumulator, value, index,
     * group).
     * @param [arrays] The arrays to process.
     * @param [iteratee] The function to combine grouped values.
     * @param [thisArg] The `this` binding of `iteratee`.
     * @return Returns the new array of grouped elements.
     */
    (p1: _.__, arrays2: _.List<T2>): ZipWith1x5<T1, TResult>;
    /**
     * This method is like _.zip except that it accepts an iteratee to specify how grouped values should be
     * combined. The iteratee is bound to thisArg and invoked with four arguments: (accumulator, value, index,
     * group).
     * @param [arrays] The arrays to process.
     * @param [iteratee] The function to combine grouped values.
     * @param [thisArg] The `this` binding of `iteratee`.
     * @return Returns the new array of grouped elements.
     */
    (arrays1: _.List<T1>, arrays2: _.List<T2>): TResult[];
}
interface ZipWith1x2<T1> {
    /**
     * This method is like _.zip except that it accepts an iteratee to specify how grouped values should be
     * combined. The iteratee is bound to thisArg and invoked with four arguments: (accumulator, value, index,
     * group).
     * @param [arrays] The arrays to process.
     * @param [iteratee] The function to combine grouped values.
     * @param [thisArg] The `this` binding of `iteratee`.
     * @return Returns the new array of grouped elements.
     */
    (): ZipWith1x2<T1>;
    /**
     * This method is like _.zip except that it accepts an iteratee to specify how grouped values should be
     * combined. The iteratee is bound to thisArg and invoked with four arguments: (accumulator, value, index,
     * group).
     * @param [arrays] The arrays to process.
     * @param [iteratee] The function to combine grouped values.
     * @param [thisArg] The `this` binding of `iteratee`.
     * @return Returns the new array of grouped elements.
     */
    <T2, TResult>(iteratee: (value1: T1, value2: T2) => TResult): ZipWith1x3<T2, TResult>;
    /**
     * This method is like _.zip except that it accepts an iteratee to specify how grouped values should be
     * combined. The iteratee is bound to thisArg and invoked with four arguments: (accumulator, value, index,
     * group).
     * @param [arrays] The arrays to process.
     * @param [iteratee] The function to combine grouped values.
     * @param [thisArg] The `this` binding of `iteratee`.
     * @return Returns the new array of grouped elements.
     */
    <T2>(p1: _.__, arrays2: _.List<T2>): ZipWith1x6<T2, T1>;
    /**
     * This method is like _.zip except that it accepts an iteratee to specify how grouped values should be
     * combined. The iteratee is bound to thisArg and invoked with four arguments: (accumulator, value, index,
     * group).
     * @param [arrays] The arrays to process.
     * @param [iteratee] The function to combine grouped values.
     * @param [thisArg] The `this` binding of `iteratee`.
     * @return Returns the new array of grouped elements.
     */
    <T2, TResult>(iteratee: (value1: T1, value2: T2) => TResult, arrays2: _.List<T2>): TResult[];
}
interface ZipWith1x3<T2, TResult> {
    /**
     * This method is like _.zip except that it accepts an iteratee to specify how grouped values should be
     * combined. The iteratee is bound to thisArg and invoked with four arguments: (accumulator, value, index,
     * group).
     * @param [arrays] The arrays to process.
     * @param [iteratee] The function to combine grouped values.
     * @param [thisArg] The `this` binding of `iteratee`.
     * @return Returns the new array of grouped elements.
     */
    (): ZipWith1x3<T2, TResult>;
    /**
     * This method is like _.zip except that it accepts an iteratee to specify how grouped values should be
     * combined. The iteratee is bound to thisArg and invoked with four arguments: (accumulator, value, index,
     * group).
     * @param [arrays] The arrays to process.
     * @param [iteratee] The function to combine grouped values.
     * @param [thisArg] The `this` binding of `iteratee`.
     * @return Returns the new array of grouped elements.
     */
    <T1>(arrays2: _.List<T2>): TResult[];
}
interface ZipWith1x4<T2> {
    /**
     * This method is like _.zip except that it accepts an iteratee to specify how grouped values should be
     * combined. The iteratee is bound to thisArg and invoked with four arguments: (accumulator, value, index,
     * group).
     * @param [arrays] The arrays to process.
     * @param [iteratee] The function to combine grouped values.
     * @param [thisArg] The `this` binding of `iteratee`.
     * @return Returns the new array of grouped elements.
     */
    (): ZipWith1x4<T2>;
    /**
     * This method is like _.zip except that it accepts an iteratee to specify how grouped values should be
     * combined. The iteratee is bound to thisArg and invoked with four arguments: (accumulator, value, index,
     * group).
     * @param [arrays] The arrays to process.
     * @param [iteratee] The function to combine grouped values.
     * @param [thisArg] The `this` binding of `iteratee`.
     * @return Returns the new array of grouped elements.
     */
    <T1, TResult>(iteratee: (value1: T1, value2: T2) => TResult): ZipWith1x5<T1, TResult>;
    /**
     * This method is like _.zip except that it accepts an iteratee to specify how grouped values should be
     * combined. The iteratee is bound to thisArg and invoked with four arguments: (accumulator, value, index,
     * group).
     * @param [arrays] The arrays to process.
     * @param [iteratee] The function to combine grouped values.
     * @param [thisArg] The `this` binding of `iteratee`.
     * @return Returns the new array of grouped elements.
     */
    <T1>(p1: _.__, arrays1: _.List<T1>): ZipWith1x6<T1, T2>;
    /**
     * This method is like _.zip except that it accepts an iteratee to specify how grouped values should be
     * combined. The iteratee is bound to thisArg and invoked with four arguments: (accumulator, value, index,
     * group).
     * @param [arrays] The arrays to process.
     * @param [iteratee] The function to combine grouped values.
     * @param [thisArg] The `this` binding of `iteratee`.
     * @return Returns the new array of grouped elements.
     */
    <T1, TResult>(iteratee: (value1: T1, value2: T2) => TResult, arrays1: _.List<T1>): TResult[];
}
interface ZipWith1x5<T1, TResult> {
    /**
     * This method is like _.zip except that it accepts an iteratee to specify how grouped values should be
     * combined. The iteratee is bound to thisArg and invoked with four arguments: (accumulator, value, index,
     * group).
     * @param [arrays] The arrays to process.
     * @param [iteratee] The function to combine grouped values.
     * @param [thisArg] The `this` binding of `iteratee`.
     * @return Returns the new array of grouped elements.
     */
    (): ZipWith1x5<T1, TResult>;
    /**
     * This method is like _.zip except that it accepts an iteratee to specify how grouped values should be
     * combined. The iteratee is bound to thisArg and invoked with four arguments: (accumulator, value, index,
     * group).
     * @param [arrays] The arrays to process.
     * @param [iteratee] The function to combine grouped values.
     * @param [thisArg] The `this` binding of `iteratee`.
     * @return Returns the new array of grouped elements.
     */
    <T2>(arrays1: _.List<T1>): TResult[];
}
interface ZipWith1x6<T1, T2> {
    /**
     * This method is like _.zip except that it accepts an iteratee to specify how grouped values should be
     * combined. The iteratee is bound to thisArg and invoked with four arguments: (accumulator, value, index,
     * group).
     * @param [arrays] The arrays to process.
     * @param [iteratee] The function to combine grouped values.
     * @param [thisArg] The `this` binding of `iteratee`.
     * @return Returns the new array of grouped elements.
     */
    (): ZipWith1x6<T1, T2>;
    /**
     * This method is like _.zip except that it accepts an iteratee to specify how grouped values should be
     * combined. The iteratee is bound to thisArg and invoked with four arguments: (accumulator, value, index,
     * group).
     * @param [arrays] The arrays to process.
     * @param [iteratee] The function to combine grouped values.
     * @param [thisArg] The `this` binding of `iteratee`.
     * @return Returns the new array of grouped elements.
     */
    <TResult>(iteratee: (value1: T1, value2: T2) => TResult): TResult[];
}

declare const zipWith: ZipWith;
export = zipWith;
