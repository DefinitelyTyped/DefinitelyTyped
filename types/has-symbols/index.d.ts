// Type definitions for has-symbols 1.0
// Project: https://github.com/ljharb/has-symbols#readme
// Definitions by: Jordan Harband <https://github.com/ljharb>
//                 ExE Boss <https://github.com/ExE-Boss>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

/**
 * Returns `true` only if the environment has native `Symbol` support.
 *
 * Not polyfillable, not forgeable.
 */
declare function hasNativeSymbols(): boolean;
export = hasNativeSymbols;
