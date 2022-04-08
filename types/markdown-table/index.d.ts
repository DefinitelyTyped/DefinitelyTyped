// Type definitions for markdown-table 2.0
// Project: https://github.com/wooorm/markdown-table#readme
// Definitions by: cherryblossom <https://github.com/cherryblossom000>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped
// TypeScript Version: 3.4

export = markdownTable;

/**
 * Turns a given matrix of strings (an array of arrays of strings) into a table.
 * @example
 * import table from 'markdown-table'
 *
 * table([
 *   ['Branch', 'Commit'],
 *   ['master', '0123456789abcdef'],
 *   ['staging', 'fedcba9876543210']
 * ])
 * // | Branch  | Commit           |
 * // | ------- | ---------------- |
 * // | master  | 0123456789abcdef |
 * // | staging | fedcba9876543210 |
 *
 * @example
 * table(
 *   [
 *     ['Beep', 'No.', 'Boop'],
 *     ['beep', '1024', 'xyz'],
 *     ['boop', '3388450', 'tuv'],
 *     ['foo', '10106', 'qrstuv'],
 *     ['bar', '45', 'lmno']
 *   ],
 *   {align: ['l', 'c', 'r']}
 * )
 * // | Beep |   No.   |   Boop |
 * // | :--- | :-----: | -----: |
 * // | beep |   1024  |    xyz |
 * // | boop | 3388450 |    tuv |
 * // | foo  |  10106  | qrstuv |
 * // | bar  |    45   |   lmno |
 */
declare function markdownTable(table: readonly string[][], options?: markdownTable.Options): string;

declare namespace markdownTable {
    interface Options {
        /**
         * One style for all columns (`string`), or styles for their respective columns (`string[]`).
         * Each style is either `'l'` (left), `'r'` (right), or `'c'` (center).
         * Other values are treated as `''`, which doesn't place the colon in the alignment row but does align left.
         * Only the lowercased first character is used, so `'Right'` is fine.
         */
        align?: string | string[];

        /**
         * Whether to add a space of padding between delimiters and cells.
         *
         * When `true`, there is padding:
         * ```
         * | Alpha | B     |
         * | ----- | ----- |
         * | C     | Delta |
         * ```
         *
         * When `false`, there is no padding:
         * ```
         * |Alpha|B    |
         * |-----|-----|
         * |C    |Delta|
         * ```
         *
         * @default true
         */
        padding?: boolean;

        /**
         * Whether to begin each row with the delimiter.
         * Note: please don't use this: it could create fragile structures that aren't understandable to some Markdown parsers.
         *
         * When `true`, there are starting delimiters:
         * ```
         * | Alpha | B     |
         * | ----- | ----- |
         * | C     | Delta |
         * ```
         *
         * When `false`, there are no starting delimiters:
         * ```
         * Alpha | B     |
         * ----- | ----- |
         * C     | Delta |
         * ```
         *
         * @default true
         */
        delimiterStart?: boolean;

        /**
         * Whether to end each row with the delimiter.
         * Note: please don't use this: it could create fragile structures that aren't understandable to some Markdown parsers.
         *
         * When `true`, there are ending delimiters:
         * ```
         * | Alpha | B     |
         * | ----- | ----- |
         * | C     | Delta |
         * ```
         *
         * When `false`, there are no ending delimiters:
         * ```
         * | Alpha | B
         * | ----- | -----
         * | C     | Delta
         * ```
         *
         * @default true
         */
        delimiterEnd?: boolean;

        /**
         * Whether to align the delimiters.
         *
         * By default, they are aligned:
         * ```
         * | Alpha | B     |
         * | ----- | ----- |
         * | C     | Delta |
         * ```
         *
         * Pass `false` to make them staggered:
         * ```
         * | Alpha | B |
         * | - | - |
         * | C | Delta |
         * ```
         *
         * @default true
         */
        alignDelimiters?: boolean;

        /**
         * Method to detect the length of a cell.
         *
         * Full-width characters and ANSI-sequences all mess up delimiter alignment when viewing the Markdown source.
         * To fix this, you have to pass in a `stringLength` option to detect the “visible” length of a cell
         * (note that what is and isn’t visible depends on your editor).
         *
         * Without such a function, the following:
         * ```
         * table([
         *   ['Alpha', 'Bravo'],
         *   ['中文', 'Charlie'],
         *   ['👩‍❤️‍👩', 'Delta']
         * ])
         * ```
         * Yields:
         * ```
         * | Alpha | Bravo |
         * | - | - |
         * | 中文 | Charlie |
         * | 👩‍❤️‍👩 | Delta |
         * ```
         *
         * With [`string-width`]{@link https://github.com/sindresorhus/string-width}:
         * ```
         * import width from 'string-width'
         *
         * table(
         *   [
         *     ['Alpha', 'Bravo'],
         *     ['中文', 'Charlie'],
         *     ['👩‍❤️‍👩', 'Delta']
         *   ],
         *   {stringLength: width}
         * )
         * ```
         * Yields:
         * ```
         * | Alpha | Bravo   |
         * | ----- | ------- |
         * | 中文  | Charlie |
         * | 👩‍❤️‍👩    | Delta   |
         * ```
         * @default s => s.length
         */
        stringLength?: (s: string) => number;
    }
}
