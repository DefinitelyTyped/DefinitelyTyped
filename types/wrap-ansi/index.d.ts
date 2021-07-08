// Type definitions for wrap-ansi 8.0
// Project: https://www.npmjs.com/package/wrap-ansi
// Definitions by: Klaus Reimer <https://github.com/kayahr>
//                 Piotr Błażejewicz <https://github.com/peterblazejewicz>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

/**
 * Wrap words to the specified column width.
 *
 * @param input   String with ANSI escape codes. Like one styled by chalk.
 * @param columns Number of columns to wrap the text to.
 * @param options By default the wrap is soft, meaning long words may extend past the column width. Setting
 *                this to true will make it hard wrap at the column width.
 */
declare function wrapAnsi(input: string, columns: number, options?: wrapAnsi.Options): string;

declare namespace wrapAnsi {
    interface Options {
        /** @default false */
        hard?: boolean | undefined;
        /** @default true */
        trim?: boolean | undefined;
        /** @default true */
        wordWrap?: boolean | undefined;
    }
}

export default wrapAnsi;
