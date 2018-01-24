import * as _ from "..";
declare module ".." {
    interface LoDashStatic {
        /**
         * Reverses `array` so that the first element becomes the last, the second
         * element becomes the second to last, and so on.
         *
         * **Note:** This method mutates `array` and is based on
         * [`Array#reverse`](https://mdn.io/Array/reverse).
         *
         * @category Array
         * @returns Returns `array`.
         * @example
         *
         * var array = [1, 2, 3];
         *
         * _.reverse(array);
         * // => [3, 2, 1]
         *
         * console.log(array);
         * // => [3, 2, 1]
         */
        reverse<TList extends List<any>>(
            array: TList,
        ): TList;
    }
}