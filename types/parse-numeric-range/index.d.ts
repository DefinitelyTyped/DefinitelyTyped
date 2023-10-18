/**
 * Parses expressions like `1-10,20-30`. Returns an energetic (as opposed to lazy) array.
 * @param expression a numeric range expression
 */
declare function parse(expression: string): number[];
export = parse;
