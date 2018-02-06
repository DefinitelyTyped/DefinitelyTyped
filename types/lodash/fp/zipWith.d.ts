import _ = require("../index");

declare namespace Lodash {
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
        <T1, T2, TResult>(iteratee: (value1: T1, value2: T2) => TResult, arrays1: _.List<T1>): ZipWith1x2<T2, TResult>;
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
        (arrays1: _.List<T1>): ZipWith1x2<T2, TResult>;
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
    interface ZipWith1x2<T2, TResult> {
        /**
         * This method is like _.zip except that it accepts an iteratee to specify how grouped values should be
         * combined. The iteratee is bound to thisArg and invoked with four arguments: (accumulator, value, index,
         * group).
         * @param [arrays] The arrays to process.
         * @param [iteratee] The function to combine grouped values.
         * @param [thisArg] The `this` binding of `iteratee`.
         * @return Returns the new array of grouped elements.
         */
        (): ZipWith1x2<T2, TResult>;
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
}

declare const zipWith: Lodash.ZipWith;
export = zipWith;
