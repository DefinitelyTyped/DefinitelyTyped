// Type definitions for shorten-css-hex 1.1
// Project: https://github.com/dustinspecker/shorten-css-hex
// Definitions by: Ivan Nikolić <https://github.com/niksy>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

/**
 * Shorten 6 character hexadecimal value to 3 characters.
 *
 * @param cssHex Hexadecimal value to shorten.
 */
declare function shortenCssHex(cssHex: string): string;

export = shortenCssHex;
