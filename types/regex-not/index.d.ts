export = regexNot;

/**
 * Create a javascript regular expression for matching everything except for the given string.
 *
 * ### Strict matching ###
 * By default, the returned regex is for strictly (not) matching the exact given pattern
 * (in other words, "match this string if it does NOT exactly equal `foo`").
 *
 * @example
 * import not = require('regex-not');
 *
 * console.log(not('foo'));         //=> /^(?:(?!^(?:foo)$).)+$/
 * console.log(re.test('foo'));     //=> false
 * console.log(re.test('bar'));     //=> true
 * console.log(re.test('foobar'));  //=> true
 * console.log(re.test('barfoo'));  //=> true
 */
declare function regexNot(str: string, options?: regexNot.Options): RegExp;

declare namespace regexNot {
    /**
     * @returns A string to allow you to create your own regex.
     *
     * @example
     * import not = require('regex-not');
     *
     * console.log(not.create('foo'));
     * //=> '^(?:(?!^(?:foo)$).)+$'
     */
    function create(str: string, options?: Options): string;

    interface Options {
        /**
         * You can relax strict matching by setting `contains` to `true` (in other words,
         * "match this string if it does NOT contain `foo`").
         *
         * @default false
         *
         * @example
         * import not = require('regex-not');
         *
         * const re = not('foo', {contains: true});
         * console.log(re.test('foo'));     //=> false
         * console.log(re.test('bar'));     //=> true
         * console.log(re.test('foobar'));  //=> false
         * console.log(re.test('barfoo'));  //=> false
         */
        contains?: boolean;

        /**
         * Controls whether the start of input anchor (`^`) should be generated for the pattern.
         *
         * @default true
         *
         * @example
         * import not = require('regex-not');
         *
         * const re = not('foo');                     // => '^(?:(?!^(?:foo)$).)+$'
         * const re = not('foo', {strictOpen: '*'});  // => '(?:(?!^(?:foo)$).)+$'
         */
        strictOpen?: boolean;

        /**
         * Controls whether the end of input anchor (`$`) should be generated for the pattern.
         *
         * @default true
         *
         * @example
         * import not = require('regex-not');
         *
         * const re = not('foo');                      // => '^(?:(?!^(?:foo)$).)+$'
         * const re = not('foo', {strictClose: '*'});  // => '^(?:(?!^(?:foo)$).)+'
         */
        strictClose?: boolean;

        /**
         * Controls the outermost repetition modifier in the generated RegExp.
         *
         * @default '+'
         *
         * @example
         * import not = require('regex-not');
         *
         * const re = not('foo');                  // => '^(?:(?!^(?:foo)$).)+$'
         * const re = not('foo', {endChar: '*'});  // => '^(?:(?!^(?:foo)$).)*$'
         */
        endChar?: string;

        /**
         * Throw an error when a potentially catastrophic exponential-time regular expression is detected.
         * See [strict-regex](https://github.com/davisjam/safe-regex) for more details and potential implications.
         *
         * @default false
         */
        safe?: boolean;
    }
}
