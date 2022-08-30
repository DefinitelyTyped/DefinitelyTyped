// Type definitions for simple-swizzle 0.2
// Project: https://github.com/qix-/node-simple-swizzle
// Definitions by: BendingBender <https://github.com/BendingBender>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped
// Minimum TypeScript Version: 4.1

export = swizzle;

/**
 * [Swizzle](https://en.wikipedia.org/wiki/Swizzling_(computer_graphics)) your function arguments.
 *
 * @example
 * import swizzle = require('simple-swizzle');
 *
 * function myFunc(...args: Array<number | number[]>): number[] {
 *     const argsArr = swizzle(args);
 *     // ...
 *     return argsArr;
 * }
 *
 * myFunc(1, [2, 3], 4); // [1, 2, 3, 4]
 * myFunc(1, 2, 3, 4);   // [1, 2, 3, 4]
 * myFunc([1, 2, 3, 4]); // [1, 2, 3, 4]
 */
declare function swizzle<TElement extends unknown>(arguments: ArrayLike<TElement | ArrayLike<TElement>>): TElement[];

declare namespace swizzle {
    /**
     * Functions can also be wrapped to automatically swizzle arguments and be passed the resulting array.
     *
     * @example
     * import swizzle = require('simple-swizzle');
     *
     * const swizzledFn = swizzle.wrap((args: number[]): number[] {
     *     // ...
     *     return args;
     * });
     *
     * swizzledFn(1, [2, 3], 4); // [1, 2, 3, 4]
     * swizzledFn(1, 2, 3, 4);   // [1, 2, 3, 4]
     * swizzledFn([1, 2, 3, 4]); // [1, 2, 3, 4]
     */
    function wrap<TFn extends (arguments: any[]) => unknown>(
        fn: TFn,
    ): (
        ...args: Parameters<TFn>[0] extends Array<infer TElement> ? Array<TElement | TElement[]> : never
    ) => ReturnType<TFn>;
}
