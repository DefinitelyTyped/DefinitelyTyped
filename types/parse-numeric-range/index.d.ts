// Type definitions for parse-numeric-range 0.0
// Project: https://github.com/euank/node-parse-numeric-range
// Definitions by: Eoin O'Brien <https://github.com/eoin-obrien>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

/**
 * Parses expressions like `1-10,20-30`. Returns an energetic (as opposed to lazy) array.
 * @param expression a numeric range expression
 */
declare function parse(expression: string): number[];
export = parse;
