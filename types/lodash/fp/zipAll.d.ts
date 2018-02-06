import _ = require("../index");

declare namespace Lodash {
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
        <T1, T2>(arrays1: _.List<T1>, arrays2: _.List<T2>): Zip1x2<T1, T2>;
        /**
         * Creates an array of grouped elements, the first of which contains the first elements of the given arrays,
         * the second of which contains the second elements of the given arrays, and so on.
         *
         * @param arrays The arrays to process.
         * @return Returns the new array of grouped elements.
         */
        <T1, T2, T3>(arrays1: _.List<T1>, arrays2: _.List<T2>, arrays3: _.List<T3>): Zip1x3<T1, T2, T3>;
        /**
         * Creates an array of grouped elements, the first of which contains the first elements of the given arrays,
         * the second of which contains the second elements of the given arrays, and so on.
         *
         * @param arrays The arrays to process.
         * @return Returns the new array of grouped elements.
         */
        <T1, T2, T3, T4>(arrays1: _.List<T1>, arrays2: _.List<T2>, arrays3: _.List<T3>, arrays4: _.List<T4>): Array<[T1 | undefined, T2 | undefined, T3 | undefined, T4 | undefined]>;
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
        <T2>(arrays2: _.List<T2>): Zip1x2<T2, T1>;
        /**
         * Creates an array of grouped elements, the first of which contains the first elements of the given arrays,
         * the second of which contains the second elements of the given arrays, and so on.
         *
         * @param arrays The arrays to process.
         * @return Returns the new array of grouped elements.
         */
        <T2, T3>(arrays2: _.List<T2>, arrays3: _.List<T3>): Zip1x3<T2, T3, T1>;
        /**
         * Creates an array of grouped elements, the first of which contains the first elements of the given arrays,
         * the second of which contains the second elements of the given arrays, and so on.
         *
         * @param arrays The arrays to process.
         * @return Returns the new array of grouped elements.
         */
        <T2, T3, T4>(arrays2: _.List<T2>, arrays3: _.List<T3>, arrays4: _.List<T4>): Array<[T1 | undefined, T2 | undefined, T3 | undefined, T4 | undefined]>;
    }
    interface Zip1x2<T1, T2> {
        /**
         * Creates an array of grouped elements, the first of which contains the first elements of the given arrays,
         * the second of which contains the second elements of the given arrays, and so on.
         *
         * @param arrays The arrays to process.
         * @return Returns the new array of grouped elements.
         */
        (): Zip1x2<T1, T2>;
        /**
         * Creates an array of grouped elements, the first of which contains the first elements of the given arrays,
         * the second of which contains the second elements of the given arrays, and so on.
         *
         * @param arrays The arrays to process.
         * @return Returns the new array of grouped elements.
         */
        <T3>(arrays3: _.List<T3>): Zip1x3<T3, T1, T2>;
        /**
         * Creates an array of grouped elements, the first of which contains the first elements of the given arrays,
         * the second of which contains the second elements of the given arrays, and so on.
         *
         * @param arrays The arrays to process.
         * @return Returns the new array of grouped elements.
         */
        <T3, T4>(arrays3: _.List<T3>, arrays4: _.List<T4>): Array<[T1 | undefined, T2 | undefined, T3 | undefined, T4 | undefined]>;
    }
    interface Zip1x3<T1, T2, T3> {
        /**
         * Creates an array of grouped elements, the first of which contains the first elements of the given arrays,
         * the second of which contains the second elements of the given arrays, and so on.
         *
         * @param arrays The arrays to process.
         * @return Returns the new array of grouped elements.
         */
        (): Zip1x3<T1, T2, T3>;
        /**
         * Creates an array of grouped elements, the first of which contains the first elements of the given arrays,
         * the second of which contains the second elements of the given arrays, and so on.
         *
         * @param arrays The arrays to process.
         * @return Returns the new array of grouped elements.
         */
        <T4>(arrays4: _.List<T4>): Array<[T1 | undefined, T2 | undefined, T3 | undefined, T4 | undefined]>;
    }
}

declare const zipAll: Lodash.Zip;
export = zipAll;
