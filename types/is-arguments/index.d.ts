// Type definitions for is-arguments 1.0
// Project: https://github.com/ljharb/is-arguments
// Definitions by: Jordan Harband <https://github.com/ljharb>
//                 ExE Boss <https://github.com/ExE-Boss>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

export = isArguments;

/**
 * This function determines whether `value` is an `arguments` object.
 *
 * **Caveats:** If you have modified an actual `arguments` object by giving
 * it a `Symbol.toStringTag` property, then this function will return `false`.
 */
declare function isArguments(value: unknown): value is IArguments;
