/**
 * Returns `true` only if the environment has native `Symbol` support.
 *
 * Not polyfillable, not forgeable.
 */
declare function hasNativeSymbols(): boolean;
export = hasNativeSymbols;
