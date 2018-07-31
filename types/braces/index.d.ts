// Type definitions for braces 2.3
// Project: https://github.com/micromatch/braces
// Definitions by: vemoo <https://github.com/vemoo>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

declare namespace braces {
    interface Options {
        /**
         * Generate an "expanded" brace pattern (this option is unncessary with the `.expand` method, which does the same thing).
         *
         * ```js
         * console.log(braces('a/{b,c}/d', {expand: true}));
         * //=> [ 'a/b/d', 'a/c/d' ]
         * ```
         *
         * @default undefined
         */
        expand?: boolean;
        /**
         * Enabled by default.
         *
         * ```js
         * console.log(braces('a/{b,c}/d'));
         * //=> [ 'a/(b|c)/d' ]
         * ```
         *
         * @default true
         */
        optimize?: boolean;
        /**
         * Duplicates are removed by default. To keep duplicates, pass `{nodupes: false}` on the options
         *
         * @default true
         */
        nodupes?: boolean;
        /**
         * When `braces.expand()` is used, or `options.expand` is true, brace patterns will automatically be [optimized](#optionsoptimize)
         * when the difference between the range minimum and range maximum exceeds the `rangeLimit`.
         * This is to prevent huge ranges from freezing your application.
         *
         * You can set this to any number, or change `options.rangeLimit` to `Inifinity` to disable this altogether.
         *
         * @default 250
         *
         * @example
         * ```js
         * // pattern exceeds the "rangeLimit", so it's optimized automatically
         * console.log(braces.expand('{1..1000}'));
         * //=> ['([1-9]|[1-9][0-9]{1,2}|1000)']
         *
         * // pattern does not exceed "rangeLimit", so it's NOT optimized
         * console.log(braces.expand('{1..100}'));
         * //=> ['1', '2', '3', '4', '5', '6', '7', '8', '9', '10', '11' ... '89', 90', '91', '92', '93', '94', '95', '96', '97', '98', '99', '100']
         * ```
         */
        rangeLimit?: number;
        /**
         * Customize range expansion.
         *
         * ```js
         * var range = braces.expand('x{a..e}y', {
         *   transform: function(str) {
         *     return 'foo' + str;
         *   }
         * });
         *
         * console.log(range);
         * //=> [ 'xfooay', 'xfooby', 'xfoocy', 'xfoody', 'xfooey' ]
         * ```
         *
         * @default undefined
         */
        transform?: (str: string) => string;
        /**
         * In regular expressions, quanitifiers can be used to specify how many times a token can be repeated. For example, `a{1,3}` will match the letter `a` one to three times.
         *
         * Unfortunately, regex quantifiers happen to share the same syntax as [Bash lists](#lists)
         *
         * The `quantifiers` option tells braces to detect when [regex quantifiers](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/RegExp#quantifiers)
         * are defined in the given pattern, and not to try to expand them as lists.
         *
         * @default undefined
         *
         * @example
         * ```js
         * var braces = require('braces');
         * console.log(braces('a/b{1,3}/{x,y,z}'));
         * //=> [ 'a/b(1|3)/(x|y|z)' ]
         * console.log(braces('a/b{1,3}/{x,y,z}', {quantifiers: true}));
         * //=> [ 'a/b{1,3}/(x|y|z)' ]
         * console.log(braces('a/b{1,3}/{x,y,z}', {quantifiers: true, expand: true}));
         * //=> [ 'a/b{1,3}/x', 'a/b{1,3}/y', 'a/b{1,3}/z' ]
         * ```
         */
        quantifiers?: boolean;
        /**
         * Strip backslashes that were used for escaping from the result.
         *
         * @default undefined
         */
        unescape?: boolean;
    }
}
interface Braces {
    (pattern: string, options?: braces.Options): string[];
    expand(pattern: string): string[];
}
declare const braces: Braces;
export as namespace braces;
export = braces;
