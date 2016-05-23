// Type definitions for wrap-ansi v2.0.0
// Project: https://www.npmjs.com/package/wrap-ansi
// Definitions by: Klaus Reimer <https://github.com/kayahr>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped


/**
 * Wrap words to the specified column width.
 *
 * @param input   String with ANSI escape codes. Like one styled by chalk.
 * @param columns Number of columns to wrap the text to.
 * @param options By default the wrap is soft, meaning long words may extend past the column width. Setting 
 *                this to true will make it hard wrap at the column width.
 */
declare function wrapAnsi(input: string, columns: number, options?: { hard?: boolean }): string;

declare namespace wrapAnsi {}

export = wrapAnsi;

