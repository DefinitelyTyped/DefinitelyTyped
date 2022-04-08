// Type definitions for float-regex 1.0
// Project: https://github.com/substack/float-regex
// Definitions by: Anjun Wang <https://github.com/wanganjun>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

/**
 * regular expression for real floating point values in javascript notation:
 * ```
 * /[-+]?(?:\d*\.?\d+|\d+\.?\d*)(?:[eE][-+]?\d+)?/
 * ```
 *
 * does not match:
 * * +/- Infinity
 * * NaN
 */
declare const regexp: RegExp;
export = regexp;
