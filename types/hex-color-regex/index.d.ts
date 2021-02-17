// Type definitions for hex-color-regex 1.1
// Project: https://github.com/regexps/hex-color-regex#readme
// Definitions by: Piotr Błażejewicz <https://github.com/peterblazejewicz>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

/**
 * The best regular expression (regex) for matching hex color values from string.
 * Pass `strict: true` for strict mode
 */
declare function hexColorRegex(opts?: hexColorRegex.Options): RegExp;

declare namespace hexColorRegex {
    interface Options {
        strict?: boolean;
    }
}

export = hexColorRegex;
