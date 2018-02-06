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
        <T, TResult>(iteratee3: ((...group: T[]) => TResult) | _.List<T> | null | undefined): ZipWith1x1<T, TResult>;
        /**
         * This method is like _.zip except that it accepts an iteratee to specify how grouped values should be
         * combined. The iteratee is bound to thisArg and invoked with four arguments: (accumulator, value, index,
         * group).
         * @param [arrays] The arrays to process.
         * @param [iteratee] The function to combine grouped values.
         * @param [thisArg] The `this` binding of `iteratee`.
         * @return Returns the new array of grouped elements.
         */
        <T, TResult>(iteratee3: ((...group: T[]) => TResult) | _.List<T> | null | undefined, iteratee: ((...group: T[]) => TResult) | _.List<T> | null | undefined): ZipWith1x2<T, TResult>;
        /**
         * This method is like _.zip except that it accepts an iteratee to specify how grouped values should be
         * combined. The iteratee is bound to thisArg and invoked with four arguments: (accumulator, value, index,
         * group).
         * @param [arrays] The arrays to process.
         * @param [iteratee] The function to combine grouped values.
         * @param [thisArg] The `this` binding of `iteratee`.
         * @return Returns the new array of grouped elements.
         */
        <T, TResult>(iteratee3: ((...group: T[]) => TResult) | _.List<T> | null | undefined, iteratee: ((...group: T[]) => TResult) | _.List<T> | null | undefined, iteratee2: ((...group: T[]) => TResult) | _.List<T> | null | undefined): TResult[];
    }
    interface ZipWith1x1<T, TResult> {
        /**
         * This method is like _.zip except that it accepts an iteratee to specify how grouped values should be
         * combined. The iteratee is bound to thisArg and invoked with four arguments: (accumulator, value, index,
         * group).
         * @param [arrays] The arrays to process.
         * @param [iteratee] The function to combine grouped values.
         * @param [thisArg] The `this` binding of `iteratee`.
         * @return Returns the new array of grouped elements.
         */
        (): ZipWith1x1<T, TResult>;
        /**
         * This method is like _.zip except that it accepts an iteratee to specify how grouped values should be
         * combined. The iteratee is bound to thisArg and invoked with four arguments: (accumulator, value, index,
         * group).
         * @param [arrays] The arrays to process.
         * @param [iteratee] The function to combine grouped values.
         * @param [thisArg] The `this` binding of `iteratee`.
         * @return Returns the new array of grouped elements.
         */
        (iteratee: ((...group: T[]) => TResult) | _.List<T> | null | undefined): ZipWith1x2<T, TResult>;
        /**
         * This method is like _.zip except that it accepts an iteratee to specify how grouped values should be
         * combined. The iteratee is bound to thisArg and invoked with four arguments: (accumulator, value, index,
         * group).
         * @param [arrays] The arrays to process.
         * @param [iteratee] The function to combine grouped values.
         * @param [thisArg] The `this` binding of `iteratee`.
         * @return Returns the new array of grouped elements.
         */
        (iteratee: ((...group: T[]) => TResult) | _.List<T> | null | undefined, iteratee2: ((...group: T[]) => TResult) | _.List<T> | null | undefined): TResult[];
    }
    interface ZipWith1x2<T, TResult> {
        /**
         * This method is like _.zip except that it accepts an iteratee to specify how grouped values should be
         * combined. The iteratee is bound to thisArg and invoked with four arguments: (accumulator, value, index,
         * group).
         * @param [arrays] The arrays to process.
         * @param [iteratee] The function to combine grouped values.
         * @param [thisArg] The `this` binding of `iteratee`.
         * @return Returns the new array of grouped elements.
         */
        (): ZipWith1x2<T, TResult>;
        /**
         * This method is like _.zip except that it accepts an iteratee to specify how grouped values should be
         * combined. The iteratee is bound to thisArg and invoked with four arguments: (accumulator, value, index,
         * group).
         * @param [arrays] The arrays to process.
         * @param [iteratee] The function to combine grouped values.
         * @param [thisArg] The `this` binding of `iteratee`.
         * @return Returns the new array of grouped elements.
         */
        (iteratee2: ((...group: T[]) => TResult) | _.List<T> | null | undefined): TResult[];
    }
}

declare const zipWith: Lodash.ZipWith;
export = zipWith;
