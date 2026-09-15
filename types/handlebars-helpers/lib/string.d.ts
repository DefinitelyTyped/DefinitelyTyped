/**
 * Append the specified `suffix` to the given string.
 *
 * ```handlebars
 * <!-- given that "item.stem" is "foo" -->
 * {{append item.stem ".html"}}
 * <!-- results in:  'foo.html' -->
 * ```
 * @param {String} `str`
 * @param {String} `suffix`
 * @return {String}
 * @api public
 */
export function append(str: string, suffix: string): string;
/**
 * camelCase the characters in the given `string`.
 *
 * ```handlebars
 * {{camelcase "foo bar baz"}};
 * <!-- results in:  'fooBarBaz' -->
 * ```
 * @param {String} `string` The string to camelcase.
 * @return {String}
 * @api public
 */
export function camelcase(str: any): string;
/**
 * Capitalize the first word in a sentence.
 *
 * ```handlebars
 * {{capitalize "foo bar baz"}}
 * <!-- results in:  "Foo bar baz" -->
 * ```
 * @param {String} `str`
 * @return {String}
 * @api public
 */
export function capitalize(str: string): string;
/**
 * Capitalize all words in a string.
 *
 * ```handlebars
 * {{capitalizeAll "foo bar baz"}}
 * <!-- results in:  "Foo Bar Baz" -->
 * ```
 * @param {String} `str`
 * @return {String}
 * @api public
 */
export function capitalizeAll(str: string): string;
/**
 * Center a string using non-breaking spaces
 *
 * @param {String} `str`
 * @param {String} `spaces`
 * @return {String}
 * @api public
 */
export function center(str: string, spaces: string): string;
/**
 * Like trim, but removes both extraneous whitespace **and
 * non-word characters** from the beginning and end of a string.
 *
 * ```handlebars
 * {{chop "_ABC_"}}
 * <!-- results in:  'ABC' -->
 *
 * {{chop "-ABC-"}}
 * <!-- results in:  'ABC' -->
 *
 * {{chop " ABC "}}
 * <!-- results in:  'ABC' -->
 * ```
 * @param {String} `string` The string to chop.
 * @return {String}
 * @api public
 */
export function chop(str: any): string;
/**
 * dash-case the characters in `string`. Replaces non-word
 * characters and periods with hyphens.
 *
 * ```handlebars
 * {{dashcase "a-b-c d_e"}}
 * <!-- results in:  'a-b-c-d-e' -->
 * ```
 * @param {String} `string`
 * @return {String}
 * @api public
 */
export function dashcase(str: any): string;
/**
 * dot.case the characters in `string`.
 *
 * ```handlebars
 * {{dotcase "a-b-c d_e"}}
 * <!-- results in:  'a.b.c.d.e' -->
 * ```
 * @param {String} `string`
 * @return {String}
 * @api public
 */
export function dotcase(str: any): string;
/**
 * Lowercase all of the characters in the given string. Alias for [lowercase](#lowercase).
 *
 * ```handlebars
 * {{downcase "aBcDeF"}}
 * <!-- results in:  'abcdef' -->
 * ```
 * @param {String} `string`
 * @return {String}
 * @alias lowercase
 * @api public
 */
export function downcase(...args: any[]): string;
/**
 * Truncates a string to the specified `length`, and appends
 * it with an elipsis, `…`.
 *
 * ```handlebars
 * {{ellipsis (sanitize "<span>foo bar baz</span>"), 7}}
 * <!-- results in:  'foo bar…' -->
 * {{ellipsis "foo bar baz", 7}}
 * <!-- results in:  'foo bar…' -->
 * ```
 * @param {String} `str`
 * @param {Number} `length` The desired length of the returned string.
 * @return {String} The truncated string.
 * @api public
 */
export function ellipsis(str: string, limit: any): string;
/**
 * Replace spaces in a string with hyphens.
 *
 * ```handlebars
 * {{hyphenate "foo bar baz qux"}}
 * <!-- results in:  "foo-bar-baz-qux" -->
 * ```
 * @param {String} `str`
 * @return {String}
 * @api public
 */
export function hyphenate(str: string): string;
/**
 * Return true if `value` is a string.
 *
 * ```handlebars
 * {{isString "foo"}}
 * <!-- results in:  'true' -->
 * ```
 * @param {String} `value`
 * @return {Boolean}
 * @api public
 */
export function isString(value: string): boolean;
/**
 * Lowercase all characters in the given string.
 *
 * ```handlebars
 * {{lowercase "Foo BAR baZ"}}
 * <!-- results in:  'foo bar baz' -->
 * ```
 * @param {String} `str`
 * @return {String}
 * @api public
 */
export function lowercase(str: string): string;
/**
 * Return the number of occurrences of `substring` within the
 * given `string`.
 *
 * ```handlebars
 * {{occurrences "foo bar foo bar baz" "foo"}}
 * <!-- results in:  2 -->
 * ```
 * @param {String} `str`
 * @param {String} `substring`
 * @return {Number} Number of occurrences
 * @api public
 */
export function occurrences(str: string, substring: string): number;
/**
 * PascalCase the characters in `string`.
 *
 * ```handlebars
 * {{pascalcase "foo bar baz"}}
 * <!-- results in:  'FooBarBaz' -->
 * ```
 * @param {String} `string`
 * @return {String}
 * @api public
 */
export function pascalcase(str: any): string;
/**
 * path/case the characters in `string`.
 *
 * ```handlebars
 * {{pathcase "a-b-c d_e"}}
 * <!-- results in:  'a/b/c/d/e' -->
 * ```
 * @param {String} `string`
 * @return {String}
 * @api public
 */
export function pathcase(str: any): string;
/**
 * Replace spaces in the given string with pluses.
 *
 * ```handlebars
 * {{plusify "foo bar baz"}}
 * <!-- results in:  'foo+bar+baz' -->
 * ```
 * @param {String} `str` The input string
 * @return {String} Input string with spaces replaced by plus signs
 * @source Stephen Way <https://github.com/stephenway>
 * @api public
 */
export function plusify(str: string, ch: any): string;
/**
 * Prepends the given `string` with the specified `prefix`.
 *
 * ```handlebars
 * <!-- given that "val" is "bar" -->
 * {{prepend val "foo-"}}
 * <!-- results in:  'foo-bar' -->
 * ```
 * @param {String} `str`
 * @param {String} `prefix`
 * @return {String}
 * @api public
 */
export function prepend(str: string, prefix: string): string;
/**
 * Render a block without processing mustache templates inside the block.
 *
 * ```handlebars
 * {{{{#raw}}}}
 * {{foo}}
 * {{{{/raw}}}}
 * <!-- results in:  '{{foo}}' -->
 * ```
 *
 * @param {Object} `options`
 * @return {String}
 * block
 * @api public
 */
export function raw(options: object): string;
/**
 * Remove all occurrences of `substring` from the given `str`.
 *
 * ```handlebars
 * {{remove "a b a b a b" "a "}}
 * <!-- results in:  'b b b' -->
 * ```
 * @param {String} `str`
 * @param {String} `substring`
 * @return {String}
 * @api public
 */
export function remove(str: string, ch: any): string;
/**
 * Remove the first occurrence of `substring` from the given `str`.
 *
 * ```handlebars
 * {{remove "a b a b a b" "a"}}
 * <!-- results in:  ' b a b a b' -->
 * ```
 * @param {String} `str`
 * @param {String} `substring`
 * @return {String}
 * @api public
 */
export function removeFirst(str: string, ch: any): string;
/**
 * Replace all occurrences of substring `a` with substring `b`.
 *
 * ```handlebars
 * {{replace "a b a b a b" "a" "z"}}
 * <!-- results in:  'z b z b z b' -->
 * ```
 * @param {String} `str`
 * @param {String} `a`
 * @param {String} `b`
 * @return {String}
 * @api public
 */
export function replace(str: string, a: string, b: string): string;
/**
 * Replace the first occurrence of substring `a` with substring `b`.
 *
 * ```handlebars
 * {{replace "a b a b a b" "a" "z"}}
 * <!-- results in:  'z b a b a b' -->
 * ```
 * @param {String} `str`
 * @param {String} `a`
 * @param {String} `b`
 * @return {String}
 * @api public
 */
export function replaceFirst(str: string, a: string, b: string): string;
/**
 * Reverse a string.
 *
 * ```handlebars
 * {{reverse "abcde"}}
 * <!-- results in:  'edcba' -->
 * ```
 * @param {String} `str`
 * @return {String}
 * @api public
 */
export function reverse(str: string): string;
/**
 * Sentence case the given string
 *
 * ```handlebars
 * {{sentence "hello world. goodbye world."}}
 * <!-- results in:  'Hello world. Goodbye world.' -->
 * ```
 * @param {String} `str`
 * @return {String}
 * @api public
 */
export function sentence(str: string): string;
/**
 * snake_case the characters in the given `string`.
 *
 * ```handlebars
 * {{snakecase "a-b-c d_e"}}
 * <!-- results in:  'a_b_c_d_e' -->
 * ```
 * @param {String} `string`
 * @return {String}
 * @api public
 */
export function snakecase(str: any): string;
/**
 * Split `string` by the given `character`.
 *
 * ```handlebars
 * {{split "a,b,c" ","}}
 * <!-- results in:  ['a', 'b', 'c'] -->
 * ```
 * @param {String} `string` The string to split.
 * @return {String} `character` Default is an empty string.
 * @api public
 */
export function split(str: any, ch: any): string;
/**
 * Tests whether a string begins with the given prefix.
 *
 * ```handlebars
 * {{#startsWith "Goodbye" "Hello, world!"}}
 *   Whoops
 * {{else}}
 *   Bro, do you even hello world?
 * {{/startsWith}}
 * ```
 * contributor Dan Fox <http://github.com/iamdanfox>
 * @param {String} `prefix`
 * @param {String} `testString`
 * @param {String} `options`
 * @return {String}
 * block
 * @api public
 */
export function startsWith(prefix: string, str: any, options: string, ...args: any[]): string;
/**
 * Title case the given string.
 *
 * ```handlebars
 * {{titleize "this is title case"}}
 * <!-- results in:  'This Is Title Case' -->
 * ```
 * @param {String} `str`
 * @return {String}
 * @api public
 */
export function titleize(str: string): string;
/**
 * Removes extraneous whitespace from the beginning and end
 * of a string.
 *
 * ```handlebars
 * {{trim " ABC "}}
 * <!-- results in:  'ABC' -->
 * ```
 * @param {String} `string` The string to trim.
 * @return {String}
 * @api public
 */
export function trim(str: any): string;
/**
 * Removes extraneous whitespace from the beginning of a string.
 *
 * ```handlebars
 * {{trim " ABC "}}
 * <!-- results in:  'ABC ' -->
 * ```
 * @param {String} `string` The string to trim.
 * @return {String}
 * @api public
 */
export function trimLeft(str: any): string;
/**
 * Removes extraneous whitespace from the end of a string.
 *
 * ```handlebars
 * {{trimRight " ABC "}}
 * <!-- results in:  ' ABC' -->
 * ```
 * @param {String} `string` The string to trim.
 * @return {String}
 * @api public
 */
export function trimRight(str: any): string;
/**
 * Truncate a string to the specified `length`. Also see [ellipsis](#ellipsis).
 *
 * ```handlebars
 * truncate("foo bar baz", 7);
 * <!-- results in:  'foo bar' -->
 * truncate(sanitize("<span>foo bar baz</span>", 7));
 * <!-- results in:  'foo bar' -->
 * ```
 * @param {String} `str`
 * @param {Number} `limit` The desired length of the returned string.
 * @param {String} `suffix` Optionally supply a string to use as a suffix to
 * denote when the string has been truncated. Otherwise an ellipsis (`…`) will be used.
 * @return {String} The truncated string.
 * @api public
 */
export function truncate(str: string, limit: number, suffix: string): string;
/**
 * Truncate a string to have the specified number of words.
 * Also see [truncate](#truncate).
 *
 * ```handlebars
 * truncateWords("foo bar baz", 1);
 * <!-- results in:  'foo…' -->
 * truncateWords("foo bar baz", 2);
 * <!-- results in:  'foo bar…' -->
 * truncateWords("foo bar baz", 3);
 * <!-- results in:  'foo bar baz' -->
 * ```
 * @param {String} `str`
 * @param {Number} `limit` The desired length of the returned string.
 * @param {String} `suffix` Optionally supply a string to use as a suffix to
 * denote when the string has been truncated.
 * @return {String} The truncated string.
 * @api public
 */
export function truncateWords(str: string, count: any, suffix: string): string;
/**
 * Uppercase all of the characters in the given string. Alias for [uppercase](#uppercase).
 *
 * ```handlebars
 * {{upcase "aBcDeF"}}
 * <!-- results in:  'ABCDEF' -->
 * ```
 * @param {String} `string`
 * @return {String}
 * @alias uppercase
 * @api public
 */
export function upcase(...args: any[]): string;
/**
 * Uppercase all of the characters in the given string. If used as a
 * block helper it will uppercase the entire block. This helper
 * does not support inverse blocks.
 *
 * ```handlebars
 * {{uppercase "aBcDeF"}}
 * <!-- results in:  'ABCDEF' -->
 * ```
 * @related capitalize capitalizeAll
 * @param {String} `str` The string to uppercase
 * @param {Object} `options` Handlebars options object
 * @return {String}
 * block
 * @api public
 */
export function uppercase(str: string): string;
