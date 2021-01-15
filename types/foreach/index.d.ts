// Type definitions for foreach 2.0
// Project: https://github.com/manuelstofer/foreach
// Definitions by: ExE Boss <https://github.com/ExE-Boss>
//                 Jordan Harband <https://github.com/ljharb>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

/**
 * Performs the specified action for each element in an array.
 *
 * @param callbackfn A function that accepts up to three arguments.
 *        `forEach` calls the `callbackfn` function one time for each element in the array.
 * @param thisArg A value to which the `this` keyword can refer in the `callbackfn` function.
 *        If `thisArg` is omitted, `undefined` is used as the `this` value.
 */
declare function forEach<O extends ArrayLike<unknown>, THIS_ARG = undefined>(
    array: O,
    callbackfn: (
        this: THIS_ARG,
        value: O extends ArrayLike<infer T> ? T : unknown,
        index: number,
        array: O,
    ) => void,
    thisArg?: THIS_ARG,
): void;

/**
 * Performs the specified action for each own property in an object.
 *
 * @param callbackfn A function that accepts up to three arguments.
 *        `forEach` calls the `callbackfn` function one time for each own property in the object.
 * @param thisArg A value to which the `this` keyword can refer in the `callbackfn` function.
 *        If `thisArg` is omitted, `undefined` is used as the `this` value.
 */
declare function forEach<O extends Record<string, unknown>, THIS_ARG = undefined>(
    target: O,
    callbackfn: (
        this: THIS_ARG,
        value: O extends Record<string, infer T> ? T : unknown,
        property: string,
        target: O,
    ) => void,
    thisArg?: THIS_ARG,
): void;

export = forEach;
