/**
 * The best regular expression (regex) for matching hex color values from string.
 * Pass `strict: true` for strict mode
 */
declare function hexColorRegex(opts?: hexColorRegex.Options): RegExp;

declare namespace hexColorRegex {
    interface Options {
        strict?: boolean | undefined;
    }
}

export = hexColorRegex;
