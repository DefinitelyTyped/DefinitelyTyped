import _ = require("../index");

declare namespace Lodash {
    interface RangeRight {
        /**
         * This method is like `_.range` except that it populates values in
         * descending order.
         *
         * @category Util
         * @param start The start of the range.
         * @param end The end of the range.
         * @param step The value to increment or decrement by.
         * @returns Returns the new array of numbers.
         * @example
         *
         * _.rangeRight(4);
         * // => [3, 2, 1, 0]
         *
         * _.rangeRight(-4);
         * // => [-3, -2, -1, 0]
         *
         * _.rangeRight(1, 5);
         * // => [4, 3, 2, 1]
         *
         * _.rangeRight(0, 20, 5);
         * // => [15, 10, 5, 0]
         *
         * _.rangeRight(0, -4, -1);
         * // => [-3, -2, -1, 0]
         *
         * _.rangeRight(1, 4, 0);
         * // => [1, 1, 1]
         *
         * _.rangeRight(0);
         * // => []
         */
        (): RangeRight;
        /**
         * This method is like `_.range` except that it populates values in
         * descending order.
         *
         * @category Util
         * @param start The start of the range.
         * @param end The end of the range.
         * @param step The value to increment or decrement by.
         * @returns Returns the new array of numbers.
         * @example
         *
         * _.rangeRight(4);
         * // => [3, 2, 1, 0]
         *
         * _.rangeRight(-4);
         * // => [-3, -2, -1, 0]
         *
         * _.rangeRight(1, 5);
         * // => [4, 3, 2, 1]
         *
         * _.rangeRight(0, 20, 5);
         * // => [15, 10, 5, 0]
         *
         * _.rangeRight(0, -4, -1);
         * // => [-3, -2, -1, 0]
         *
         * _.rangeRight(1, 4, 0);
         * // => [1, 1, 1]
         *
         * _.rangeRight(0);
         * // => []
         */
        (end: number): RangeRight1x1;
        /**
         * This method is like `_.range` except that it populates values in
         * descending order.
         *
         * @category Util
         * @param start The start of the range.
         * @param end The end of the range.
         * @param step The value to increment or decrement by.
         * @returns Returns the new array of numbers.
         * @example
         *
         * _.rangeRight(4);
         * // => [3, 2, 1, 0]
         *
         * _.rangeRight(-4);
         * // => [-3, -2, -1, 0]
         *
         * _.rangeRight(1, 5);
         * // => [4, 3, 2, 1]
         *
         * _.rangeRight(0, 20, 5);
         * // => [15, 10, 5, 0]
         *
         * _.rangeRight(0, -4, -1);
         * // => [-3, -2, -1, 0]
         *
         * _.rangeRight(1, 4, 0);
         * // => [1, 1, 1]
         *
         * _.rangeRight(0);
         * // => []
         */
        (end: number, step: number): RangeRight1x2;
        /**
         * This method is like `_.range` except that it populates values in
         * descending order.
         *
         * @category Util
         * @param start The start of the range.
         * @param end The end of the range.
         * @param step The value to increment or decrement by.
         * @returns Returns the new array of numbers.
         * @example
         *
         * _.rangeRight(4);
         * // => [3, 2, 1, 0]
         *
         * _.rangeRight(-4);
         * // => [-3, -2, -1, 0]
         *
         * _.rangeRight(1, 5);
         * // => [4, 3, 2, 1]
         *
         * _.rangeRight(0, 20, 5);
         * // => [15, 10, 5, 0]
         *
         * _.rangeRight(0, -4, -1);
         * // => [-3, -2, -1, 0]
         *
         * _.rangeRight(1, 4, 0);
         * // => [1, 1, 1]
         *
         * _.rangeRight(0);
         * // => []
         */
        (end: number, step: number, start: number): number[];
        /**
         * This method is like `_.range` except that it populates values in
         * descending order.
         *
         * @category Util
         * @param start The start of the range.
         * @param end The end of the range.
         * @param step The value to increment or decrement by.
         * @returns Returns the new array of numbers.
         * @example
         *
         * _.rangeRight(4);
         * // => [3, 2, 1, 0]
         *
         * _.rangeRight(-4);
         * // => [-3, -2, -1, 0]
         *
         * _.rangeRight(1, 5);
         * // => [4, 3, 2, 1]
         *
         * _.rangeRight(0, 20, 5);
         * // => [15, 10, 5, 0]
         *
         * _.rangeRight(0, -4, -1);
         * // => [-3, -2, -1, 0]
         *
         * _.rangeRight(1, 4, 0);
         * // => [1, 1, 1]
         *
         * _.rangeRight(0);
         * // => []
         */
        (index: string | number): RangeRight2x1;
        /**
         * This method is like `_.range` except that it populates values in
         * descending order.
         *
         * @category Util
         * @param start The start of the range.
         * @param end The end of the range.
         * @param step The value to increment or decrement by.
         * @returns Returns the new array of numbers.
         * @example
         *
         * _.rangeRight(4);
         * // => [3, 2, 1, 0]
         *
         * _.rangeRight(-4);
         * // => [-3, -2, -1, 0]
         *
         * _.rangeRight(1, 5);
         * // => [4, 3, 2, 1]
         *
         * _.rangeRight(0, 20, 5);
         * // => [15, 10, 5, 0]
         *
         * _.rangeRight(0, -4, -1);
         * // => [-3, -2, -1, 0]
         *
         * _.rangeRight(1, 4, 0);
         * // => [1, 1, 1]
         *
         * _.rangeRight(0);
         * // => []
         */
        (index: string | number, guard: object): RangeRight2x2;
        /**
         * This method is like `_.range` except that it populates values in
         * descending order.
         *
         * @category Util
         * @param start The start of the range.
         * @param end The end of the range.
         * @param step The value to increment or decrement by.
         * @returns Returns the new array of numbers.
         * @example
         *
         * _.rangeRight(4);
         * // => [3, 2, 1, 0]
         *
         * _.rangeRight(-4);
         * // => [-3, -2, -1, 0]
         *
         * _.rangeRight(1, 5);
         * // => [4, 3, 2, 1]
         *
         * _.rangeRight(0, 20, 5);
         * // => [15, 10, 5, 0]
         *
         * _.rangeRight(0, -4, -1);
         * // => [-3, -2, -1, 0]
         *
         * _.rangeRight(1, 4, 0);
         * // => [1, 1, 1]
         *
         * _.rangeRight(0);
         * // => []
         */
        (index: string | number, guard: object, end: number): number[];
    }
    interface RangeRight1x1 {
        /**
         * This method is like `_.range` except that it populates values in
         * descending order.
         *
         * @category Util
         * @param start The start of the range.
         * @param end The end of the range.
         * @param step The value to increment or decrement by.
         * @returns Returns the new array of numbers.
         * @example
         *
         * _.rangeRight(4);
         * // => [3, 2, 1, 0]
         *
         * _.rangeRight(-4);
         * // => [-3, -2, -1, 0]
         *
         * _.rangeRight(1, 5);
         * // => [4, 3, 2, 1]
         *
         * _.rangeRight(0, 20, 5);
         * // => [15, 10, 5, 0]
         *
         * _.rangeRight(0, -4, -1);
         * // => [-3, -2, -1, 0]
         *
         * _.rangeRight(1, 4, 0);
         * // => [1, 1, 1]
         *
         * _.rangeRight(0);
         * // => []
         */
        (): RangeRight1x1;
        /**
         * This method is like `_.range` except that it populates values in
         * descending order.
         *
         * @category Util
         * @param start The start of the range.
         * @param end The end of the range.
         * @param step The value to increment or decrement by.
         * @returns Returns the new array of numbers.
         * @example
         *
         * _.rangeRight(4);
         * // => [3, 2, 1, 0]
         *
         * _.rangeRight(-4);
         * // => [-3, -2, -1, 0]
         *
         * _.rangeRight(1, 5);
         * // => [4, 3, 2, 1]
         *
         * _.rangeRight(0, 20, 5);
         * // => [15, 10, 5, 0]
         *
         * _.rangeRight(0, -4, -1);
         * // => [-3, -2, -1, 0]
         *
         * _.rangeRight(1, 4, 0);
         * // => [1, 1, 1]
         *
         * _.rangeRight(0);
         * // => []
         */
        (step: number): RangeRight1x2;
        /**
         * This method is like `_.range` except that it populates values in
         * descending order.
         *
         * @category Util
         * @param start The start of the range.
         * @param end The end of the range.
         * @param step The value to increment or decrement by.
         * @returns Returns the new array of numbers.
         * @example
         *
         * _.rangeRight(4);
         * // => [3, 2, 1, 0]
         *
         * _.rangeRight(-4);
         * // => [-3, -2, -1, 0]
         *
         * _.rangeRight(1, 5);
         * // => [4, 3, 2, 1]
         *
         * _.rangeRight(0, 20, 5);
         * // => [15, 10, 5, 0]
         *
         * _.rangeRight(0, -4, -1);
         * // => [-3, -2, -1, 0]
         *
         * _.rangeRight(1, 4, 0);
         * // => [1, 1, 1]
         *
         * _.rangeRight(0);
         * // => []
         */
        (step: number, start: number): number[];
    }
    interface RangeRight1x2 {
        /**
         * This method is like `_.range` except that it populates values in
         * descending order.
         *
         * @category Util
         * @param start The start of the range.
         * @param end The end of the range.
         * @param step The value to increment or decrement by.
         * @returns Returns the new array of numbers.
         * @example
         *
         * _.rangeRight(4);
         * // => [3, 2, 1, 0]
         *
         * _.rangeRight(-4);
         * // => [-3, -2, -1, 0]
         *
         * _.rangeRight(1, 5);
         * // => [4, 3, 2, 1]
         *
         * _.rangeRight(0, 20, 5);
         * // => [15, 10, 5, 0]
         *
         * _.rangeRight(0, -4, -1);
         * // => [-3, -2, -1, 0]
         *
         * _.rangeRight(1, 4, 0);
         * // => [1, 1, 1]
         *
         * _.rangeRight(0);
         * // => []
         */
        (): RangeRight1x2;
        /**
         * This method is like `_.range` except that it populates values in
         * descending order.
         *
         * @category Util
         * @param start The start of the range.
         * @param end The end of the range.
         * @param step The value to increment or decrement by.
         * @returns Returns the new array of numbers.
         * @example
         *
         * _.rangeRight(4);
         * // => [3, 2, 1, 0]
         *
         * _.rangeRight(-4);
         * // => [-3, -2, -1, 0]
         *
         * _.rangeRight(1, 5);
         * // => [4, 3, 2, 1]
         *
         * _.rangeRight(0, 20, 5);
         * // => [15, 10, 5, 0]
         *
         * _.rangeRight(0, -4, -1);
         * // => [-3, -2, -1, 0]
         *
         * _.rangeRight(1, 4, 0);
         * // => [1, 1, 1]
         *
         * _.rangeRight(0);
         * // => []
         */
        (start: number): number[];
    }
    interface RangeRight2x1 {
        /**
         * This method is like `_.range` except that it populates values in
         * descending order.
         *
         * @category Util
         * @param start The start of the range.
         * @param end The end of the range.
         * @param step The value to increment or decrement by.
         * @returns Returns the new array of numbers.
         * @example
         *
         * _.rangeRight(4);
         * // => [3, 2, 1, 0]
         *
         * _.rangeRight(-4);
         * // => [-3, -2, -1, 0]
         *
         * _.rangeRight(1, 5);
         * // => [4, 3, 2, 1]
         *
         * _.rangeRight(0, 20, 5);
         * // => [15, 10, 5, 0]
         *
         * _.rangeRight(0, -4, -1);
         * // => [-3, -2, -1, 0]
         *
         * _.rangeRight(1, 4, 0);
         * // => [1, 1, 1]
         *
         * _.rangeRight(0);
         * // => []
         */
        (): RangeRight2x1;
        /**
         * This method is like `_.range` except that it populates values in
         * descending order.
         *
         * @category Util
         * @param start The start of the range.
         * @param end The end of the range.
         * @param step The value to increment or decrement by.
         * @returns Returns the new array of numbers.
         * @example
         *
         * _.rangeRight(4);
         * // => [3, 2, 1, 0]
         *
         * _.rangeRight(-4);
         * // => [-3, -2, -1, 0]
         *
         * _.rangeRight(1, 5);
         * // => [4, 3, 2, 1]
         *
         * _.rangeRight(0, 20, 5);
         * // => [15, 10, 5, 0]
         *
         * _.rangeRight(0, -4, -1);
         * // => [-3, -2, -1, 0]
         *
         * _.rangeRight(1, 4, 0);
         * // => [1, 1, 1]
         *
         * _.rangeRight(0);
         * // => []
         */
        (guard: object): RangeRight2x2;
        /**
         * This method is like `_.range` except that it populates values in
         * descending order.
         *
         * @category Util
         * @param start The start of the range.
         * @param end The end of the range.
         * @param step The value to increment or decrement by.
         * @returns Returns the new array of numbers.
         * @example
         *
         * _.rangeRight(4);
         * // => [3, 2, 1, 0]
         *
         * _.rangeRight(-4);
         * // => [-3, -2, -1, 0]
         *
         * _.rangeRight(1, 5);
         * // => [4, 3, 2, 1]
         *
         * _.rangeRight(0, 20, 5);
         * // => [15, 10, 5, 0]
         *
         * _.rangeRight(0, -4, -1);
         * // => [-3, -2, -1, 0]
         *
         * _.rangeRight(1, 4, 0);
         * // => [1, 1, 1]
         *
         * _.rangeRight(0);
         * // => []
         */
        (guard: object, end: number): number[];
    }
    interface RangeRight2x2 {
        /**
         * This method is like `_.range` except that it populates values in
         * descending order.
         *
         * @category Util
         * @param start The start of the range.
         * @param end The end of the range.
         * @param step The value to increment or decrement by.
         * @returns Returns the new array of numbers.
         * @example
         *
         * _.rangeRight(4);
         * // => [3, 2, 1, 0]
         *
         * _.rangeRight(-4);
         * // => [-3, -2, -1, 0]
         *
         * _.rangeRight(1, 5);
         * // => [4, 3, 2, 1]
         *
         * _.rangeRight(0, 20, 5);
         * // => [15, 10, 5, 0]
         *
         * _.rangeRight(0, -4, -1);
         * // => [-3, -2, -1, 0]
         *
         * _.rangeRight(1, 4, 0);
         * // => [1, 1, 1]
         *
         * _.rangeRight(0);
         * // => []
         */
        (): RangeRight2x2;
        /**
         * This method is like `_.range` except that it populates values in
         * descending order.
         *
         * @category Util
         * @param start The start of the range.
         * @param end The end of the range.
         * @param step The value to increment or decrement by.
         * @returns Returns the new array of numbers.
         * @example
         *
         * _.rangeRight(4);
         * // => [3, 2, 1, 0]
         *
         * _.rangeRight(-4);
         * // => [-3, -2, -1, 0]
         *
         * _.rangeRight(1, 5);
         * // => [4, 3, 2, 1]
         *
         * _.rangeRight(0, 20, 5);
         * // => [15, 10, 5, 0]
         *
         * _.rangeRight(0, -4, -1);
         * // => [-3, -2, -1, 0]
         *
         * _.rangeRight(1, 4, 0);
         * // => [1, 1, 1]
         *
         * _.rangeRight(0);
         * // => []
         */
        (end: number): number[];
    }
}

declare const rangeStepRight: Lodash.RangeRight;
export = rangeStepRight;
