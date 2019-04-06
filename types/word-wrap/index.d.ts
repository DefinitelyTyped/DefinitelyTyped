// Type definitions for word-wrap 1.2
// Project: https://github.com/jonschlinkert/word-wrap
// Definitions by: Claas Ahlrichs <https://github.com/claasahl>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped
// TypeScript Version: 2.7

export = word_wrap;

interface Options {
    /**
     * The width of the text before wrapping to a new line.
     *
     * Default: 50
     */
    width?: number;
    /**
     * The string to use at the beginning of each line.
     *
     * Default: `  ` (two spaces)
     */
    indent?: string;
    /**
     * The string to use at the end of each line.
     *
     * Default: \n
     */
    newline?: string;
    /**
     * An escape function to run on each line after splitting them.
     *
     * Default: function(str){return str;}
     */
    escape?: (str: string) => string;
    /**
     * Trim trailing whitespace from the returned string. This option is included since .trim() would also strip the leading indentation from the first line.
     *
     * Default: false
     */
    trim?: boolean;
    /**
     * Break a word between any two letters when the word is longer than the specified width.
     *
     * Default: false
     */
    cut?: boolean;
}

declare function word_wrap(str: string, options?: Options): string;
