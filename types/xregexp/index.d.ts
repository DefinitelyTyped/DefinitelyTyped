// Type definitions for XRegExp 4.3
// Project: http://xregexp.com
// Definitions by: Bart van der Schoor <https://github.com/Bartvds>,
//                 Johannes Fahrenkrug <https://github.com/jfahrenkrug>
//                 Mateusz Jagiełło <https://github.com/sigo>
//                 Anthony Rainer <https://github.com/pristinesource>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

export = XRegExp;

//#region constructor

/**
 * Creates an extended regular expression object for matching text with a pattern. Differs from a
 * native regular expression in that additional syntax and flags are supported. The returned object
 * is in fact a native `RegExp` and works with all native methods.
 *
 * @param pattern - Regex pattern string, or an existing regex object to copy.
 * @param flags - Any combination of flags.
 *
 *   Native flags:
 *     - `g` - global
 *     - `i` - ignore case
 *     - `m` - multiline anchors
 *     - `u` - unicode (ES6)
 *     - `y` - sticky (Firefox 3+, ES6)
 *
 *   Additional XRegExp flags:
 *     - `n` - explicit capture
 *     - `s` - dot matches all (aka singleline)
 *     - `x` - free-spacing and line comments (aka extended)
 *     - `A` - astral (requires the Unicode Base addon)
 *
 *   **Flags cannot be provided when constructing one `RegExp` from another.**
 * @returns Extended regular expression object.
 * @example
 *
 * // With named capture and flag x
 * XRegExp('(?<year>  [0-9]{4} ) -?  # year  \n\
 *          (?<month> [0-9]{2} ) -?  # month \n\
 *          (?<day>   [0-9]{2} )     # day   ', 'x');
 *
 * // Providing a regex object copies it. Native regexes are recompiled using native (not XRegExp)
 * // syntax. Copies maintain extended data, are augmented with `XRegExp.prototype` properties, and
 * // have fresh `lastIndex` properties (set to zero).
 * XRegExp(/regex/);
 */
declare function XRegExp(pattern: string, flags?: string): RegExp;
declare function XRegExp(pattern: RegExp): RegExp;
declare function XRegExp<T extends XRegExp.Pattern>(pattern: T, flags: (T extends RegExp ? undefined : string | undefined)): RegExp;

//#endregion

declare namespace XRegExp {
    //#region types

    /**
     * Valid token scopes used as an argument to the token handler closure passed to `XRegExp.addToken`.
     */
    type TokenScope = 'default' | 'class';

    /**
     * Valid token scopes for adding a token to XRegExp.
     */
    type TokenScopeOption = TokenScope | 'all';

    /**
     * Match or replacement scope that will only match or replace the first occurance.
     */
    type MatchScopeOne = 'one';

    /**
     * Match or replacement scope that will match or replace all occurances.
     */
    type MatchScopeAll = 'all';

    /**
     * Valid match or replacement scopes for when doing a match or replace.
     */
    type MatchScope = MatchScopeOne | MatchScopeAll;

    /**
     * Valid lower case letters that can be used as a flag for when adding a new token to XRegExp.
     */
    type TokenFlagLOWER = 'a'|'b'|'c'|'d'|'e'|'f'|'g'|'h'|'i'|'j'|'k'|'l'|'m'|'n'|'o'|'p'|'q'|'r'|'s'|'t'|'u'|'v'|'w'|'x'|'y'|'z';

    /**
     * Valid upper case letters that can be used as a flag for when adding a new token to XRegExp.
     */
    type TokenFlagUPPER = 'A'|'B'|'C'|'D'|'E'|'F'|'G'|'H'|'I'|'J'|'K'|'L'|'M'|'N'|'O'|'P'|'Q'|'R'|'S'|'T'|'U'|'V'|'W'|'X'|'Y'|'Z';

    /**
     * Valid numbers that can be used as a flag for when adding a new token to XRegExp.
     */
    type TokenFlagNUMBER = '0'|'1'|'2'|'3'|'4'|'5'|'6'|'7'|'8'|'9';

    /**
     * Valid non-letter and non-number characters that can be used as a flag for when adding a new token to XRegExp.
     */
    type TokenFlagOTHER = '_'|'$';

    /**
     * All valid characters that can be used as a flag for when adding a new token to XRegExp.
     */
    type TokenFlag = TokenFlagLOWER | TokenFlagUPPER | TokenFlagNUMBER | TokenFlagOTHER;

    /**
     * Valid features that are installable on RegExp.
     */
    type Feature = 'astral' | 'namespacing';

    /**
     * All valid ways of specifying features to install or uninstall.
     */
    type FeatureOptions = Feature | 'astral namespacing' | 'namespacing astral' |  { astral?: boolean, namespacing?: boolean };

    /**
     * Valid ways os specifying a pattern to use.
     */
    type Pattern = RegExp | string;

    /**
     * An array of valid items to use for chain matching.
     */
    type MatchChainArray = Array<ChainArrayElement | RegExp>;

    /**
     *   Replacement functions are invoked with three or more arguments:
     *     - {string}        substring  - The matched substring (corresponds to `$&` above). Named backreferences are accessible as
     *       properties of this first argument if the `namespacing` feature is off.
     *     - {string}        args[1..n] - arguments, one for each backreference (corresponding to `$1`, `$2`, etc. above).
     *     - {number}        args[n+1]  - The zero-based index of the match within the total search string.
     *     - {string}        args[n+2]  - The total string being searched.
     *     - {XRegExp.NamedGroups} args[n+3]  - If the `namespacing` feature is turned on, the last parameter is the groups object. If the
     *       `namespacing` feature is off, then this argument is not present.
     */
    type ReplacementFunction = ((substring: MatchSubString, ...args: (string | number | NamedGroupsArray)[]) => string);

    /**
     *   Replacement strings can include special replacement syntax:
     *     - `$$` - Inserts a literal $ character.
     *     - `$&`, `$0` - Inserts the matched substring.
     *     - ``$` `` - Inserts the string that precedes the matched substring (left context).
     *     - `$'` - Inserts the string that follows the matched substring (right context).
     *     - `$n`, `$nn` - Where n/nn are digits referencing an existent capturing group, inserts
     *       backreference n/nn.
     *     - `${n}`, `$<n>` - Where n is a name or any number of digits that reference an existent capturing
     *       group, inserts backreference n.
     *
     *   Replacement functions are invoked with three or more arguments:
     *     - {string}        substring  - The matched substring (corresponds to `$&` above). Named backreferences are accessible as
     *       properties of this first argument if the `namespacing` feature is off.
     *     - {string}        args[1..n] - arguments, one for each backreference (corresponding to `$1`, `$2`, etc. above).
     *     - {number}        args[n+1]  - The zero-based index of the match within the total search string.
     *     - {string}        args[n+2]  - The total string being searched.
     *     - {XRegExp.NamedGroups} args[n+3]  - If the `namespacing` feature is turned on, the last parameter is the groups object. If the
     *       `namespacing` feature is off, then this argument is not present.
     */
    type ReplacementValue = string | ReplacementFunction;

    /**
     * Special helper type that sets only specific properties to required.
     */
    type PickRequired<T, K extends keyof T> = T & Required<Pick<T, K>>;

    /**
     * The Unicode character range.
     *
     * All properties but `name` are optional, although one of `bmp` or `astral` is required (unless `inverseOf` is set).
     */
    type UnicodeCharacterRange = PickRequired<UnicodeCharacterRangeBase, 'astral'> | PickRequired<UnicodeCharacterRangeBase, 'bmp'> | PickRequired<UnicodeCharacterRangeBase, 'inverseOf'>;

    //#endregion

    //#region interfaces

    /**
     * The options object for adding a token to XRegExp.
     */
    interface TokenOptions {
        /**
         * Scope where the token applies: `default`, `class`, or `all`.
         */
        scope?: TokenScopeOption;

        /**
         * Single-character flag that triggers the token. This also registers the
         * flag, which prevents XRegExp from throwing an 'unknown flag' error when the flag is used.
         */
        flag?: TokenFlag;

        /**
         * Any custom flags checked for within the token `handler` that are
         * not required to trigger the token. This registers the flags, to prevent XRegExp from
         * throwing an 'unknown flag' error when any of the flags are used.
         */
        optionalFlags?: string;

        /**
         * Whether the `handler` function's output should not be treated as
         * final, and instead be reparseable by other tokens (including the current token). Allows
         * token chaining or deferring.
         */
        reparse?: boolean;

        /**
         * Single character that occurs at the beginning of any successful match
         * of the token (not always applicable). This doesn't change the behavior of the token unless
         * you provide an erroneous value. However, providing it can increase the token's performance
         * since the token can be skipped at any positions where this character doesn't appear.
         */
        leadChar?: string;
    }

    /**
     * Repesents a list of named capture groups. Only valid if the `namespacing` feature is turned on.
     */
    interface NamedGroupsArray {
        /**
         * Named capture groups are accessible as properties.
         */
        [key: string]: string;
    }

    /**
     * Represents an array of matched values if any.
     */
    interface MatchArray extends RegExpMatchArray, Array<string> {
        /**
         * Named capture groups are accessible as properties when the `namespacing`
         * feature is not installed.
         */
        [propName: string]: any;

        /**
         * This is only present if the the `namespacing` feature is installed
         * using the `XRegExp.install` method.
         */
        groups?: NamedGroupsArray;
    }

    /**
     * Represents an array of matched values.
     */
    interface ExecArray extends RegExpExecArray, Array<string> {
        /**
         * Named capture groups are accessible as properties when the `namespacing`
         * feature is not installed.
         */
        [propName: string]: any;

        /**
         * This is only present if the the `namespacing` feature is installed
         * using the `XRegExp.install` method.
         */
        groups?: NamedGroupsArray;
    }

    /**
     * This is an element in the `XRegExpMatchChainArray` that also specifies a specific back reference.
     */
    interface ChainArrayElement {
        /**
         * The `RegExp` to use.
         */
        regexp: RegExp;
        /**
         * The specific backreference.
         */
        backref: number | string;
    }

    /**
     * A matched substring, including named capture groups as properties, or the `groups` property
     * if the `namespacing` feature is installed.
     */
    interface MatchSubString extends String {
        /**
         * Named capture groups are accessible as properties when the `namespacing`
         * feature is not installed.
         */
        [propName: string]: any;

        /**
         * This is only present if the the `namespacing` feature is installed
         * using the `XRegExp.install` method.
         */
        groups?: NamedGroupsArray;
    }

    /**
     * Replacement details used in and array for replacing multiple items.
     */
    interface ReplacementDetail {
        /**
         * What to search for.
         */
        0: Pattern;

        /**
         * The replacement string or function
         */
        1: ReplacementValue;

        /**
         * Replacement scope. If not explicitly specified and `regex` uses flag g,
         * `scope` is 'all'.
         */
        2?: MatchScope | null;
    }

    /**
     * Additional options for when doing a RegExp union.
     */
    interface UnionOptions {
        /**
         * The conjunction to use for the union. Default is `none`.
         */
        conjunction?: 'or' | 'none' | null;
    }

    /**
     * Options for when doing recursive matching.
     */
    interface MatchRecursiveOptions {
        /**
         * The escape character to use.
         *
         * **Must be exactly one character long.**
         */
        escapeChar?: string | null;

        /**
         * The value names to associate with the matches.
         *
         * Specifying a value here will cause the `XRegExp.matchRecursive` method to
         * return and array of `XRegExp.MatchRecursiveValueNameMatch`
         */
        valueNames?: MatchRecursiveValueNames | null;
    }

    /**
     * Value names for recursive matching parts.
     */
    interface MatchRecursiveValueNames {
        /**
         * Name for the unmatched portion of string leading up to `left` delimiter.
         */
        0: string | null;

        /**
         * Name for the `left` delimiter.
         */
        1: string | null;

        /**
         * Name for the portion of the string inside the `left` and `right` delimiters.
         */
        2: string | null;

        /**
         * Name for the `right` delimiter.
         */
        3: string | null;
    }

    /**
     * A match to a defined value name during a recursive match.
     */
    interface MatchRecursiveValueNameMatch {
        /**
         * The value name as specified in the `XRegExp.MatchRecursiveOptions`
         */
        name: string;

        /**
         * The portion of the string that corresponds to the value name,
         */
        value: string;

        /**
         * The start index of the string portion.
         */
        start: number;

        /**
         * The end index of the string portion.
         */
        end: number;
    }

    /**
     * The Unicode character range base interface.
     */
    interface UnicodeCharacterRangeBase {
        /**
         * The name of the character range.
         */
        name: string;

        /**
         * An alternate name for the character range.
         */
        alias?: string;

        /**
         * This is needed when a token matches orphan high surrogates *and* uses surrogate pairs to match astral code points.
         */
        isBmpLast?: boolean;

        /**
         * Can be used to avoid duplicating character data if a Unicode token is defined as the exact inverse of another token.
         */
        inverseOf?: string;

        /**
         * A combination of literal characters and `\xHH` or `\uHHHH` escape sequences, with hyphens to create ranges.
         * Any regex metacharacters in the data should be escaped, apart from range-creating hyphens.
         * When `astral` is not present, this is used BMP and astral modes.
         * When this is present, it is used in BMP mode and in combination with `astral` in astral mode.
         */
        bmp?: string;

        /**
         * A combination of literal characters and `\xHH` or `\uHHHH` escape sequences, with hyphens to create ranges.
         * Any regex metacharacters in the data should be escaped, apart from range-creating hyphens.
         * When `bmp` is not present this `name` will error in BMP mode, but works in astral mode.
         * When this is present, it is used in combination with `bmp` in astral mode.
         * This can additionally use character classes and alternation, and should use surrogate pairs to represent astral code points.
         */
        astral?: string;
    }

    //#endregion

    //#region constants

    /**
     * The XRegExp version number as a string containing three dot-separated parts. For example,
     * '2.0.0-beta-3'.
     */
    const version: string;

    //#endregion

    //#region methods

    /**
     * Extends XRegExp syntax and allows custom flags. This is used internally and can be used to
     * create XRegExp addons. If more than one token can match the same string, the last added wins.
     *
     * @param regex - Regex object that matches the new token.
     * @param handler - Function that returns a new pattern string (using native regex syntax)
     *   to replace the matched token within all future XRegExp regexes. Has access to persistent
     *   properties of the regex being built, through `this`.  The handler function becomes part
     *   of the XRegExp construction process, so be careful not to construct XRegExps within the
     *   function or you will trigger infinite recursion.
     * @param options - Options object with optional properties.
     * @example
     *
     * // Basic usage: Add \a for the ALERT control code
     * XRegExp.addToken(
     *   /\\a/,
     *   () => '\\x07',
     *   { scope: 'all' }
     * );
     * XRegExp('\\a[\\a-\\n]+').test('\x07\n\x07'); // -> true
     *
     * // Add the U (ungreedy) flag from PCRE and RE2, which reverses greedy and lazy quantifiers.
     * // Since `scope` is not specified, it uses 'default' (i.e., transformations apply outside of
     * // character classes only)
     * XRegExp.addToken(
     *   /([?*+]|{\d+(?:,\d*)?})(\??)/,
     *   (match) => `${match[1]}${match[2] ? '' : '?'}`,
     *   { flag: 'U' }
     * );
     * XRegExp('a+', 'U').exec('aaa')[0]; // -> 'a'
     * XRegExp('a+?', 'U').exec('aaa')[0]; // -> 'aaa'
     */
    function addToken(regex: RegExp, handler: (match: MatchArray, scope: TokenScope, flags: string) => string, options?: TokenOptions): void;

    /**
     * Adds to the list of Unicode tokens that XRegExp regexes can match via `\p` or `\P`.
     *
     * @param data - Objects with named character ranges. Each object may have properties
     *   `name`, `alias`, `isBmpLast`, `inverseOf`, `bmp`, and `astral`. All but `name` are
     *   optional, although one of `bmp` or `astral` is required (unless `inverseOf` is set). If
     *   `astral` is absent, the `bmp` data is used for BMP and astral modes. If `bmp` is absent,
     *   the name errors in BMP mode but works in astral mode. If both `bmp` and `astral` are
     *   provided, the `bmp` data only is used in BMP mode, and the combination of `bmp` and
     *   `astral` data is used in astral mode. `isBmpLast` is needed when a token matches orphan
     *   high surrogates *and* uses surrogate pairs to match astral code points. The `bmp` and
     *   `astral` data should be a combination of literal characters and `\xHH` or `\uHHHH` escape
     *   sequences, with hyphens to create ranges. Any regex metacharacters in the data should be
     *   escaped, apart from range-creating hyphens. The `astral` data can additionally use
     *   character classes and alternation, and should use surrogate pairs to represent astral code
     *   points. `inverseOf` can be used to avoid duplicating character data if a Unicode token is
     *   defined as the exact inverse of another token.
     * @example
     *
     * // Basic use
     * XRegExp.addUnicodeData([{
     *   name: 'XDigit',
     *   alias: 'Hexadecimal',
     *   bmp: '0-9A-Fa-f'
     * }]);
     * XRegExp('\\p{XDigit}:\\p{Hexadecimal}+').test('0:3D'); // -> true
     */
    function addUnicodeData(data: Array<UnicodeCharacterRange>): void;

    /**
     * Builds regexes using named subpatterns, for readability and pattern reuse. Backreferences in
     * the outer pattern and provided subpatterns are automatically renumbered to work correctly.
     * Native flags used by provided subpatterns are ignored in favor of the `flags` argument.
     *
     * @param pattern - XRegExp pattern using `{{name}}` for embedded subpatterns. Allows
     *   `({{name}})` as shorthand for `(?<name>{{name}})`. Patterns cannot be embedded within
     *   character classes.
     * @param subs - Lookup object for named subpatterns. Values can be strings or regexes. A
     *   leading `^` and trailing unescaped `$` are stripped from subpatterns, if both are present.
     * @param flags - Any combination of XRegExp flags.
     * @returns Regex with interpolated subpatterns.
     * @example
     *
     * const time = XRegExp.build('(?x)^ {{hours}} ({{minutes}}) $', {
     *   hours: XRegExp.build('{{h12}} : | {{h24}}', {
     *     h12: /1[0-2]|0?[1-9]/,
     *     h24: /2[0-3]|[01][0-9]/
     *   }, 'x'),
     *   minutes: /^[0-5][0-9]$/
     * });
     * time.test('10:59'); // -> true
     * XRegExp.exec('10:59', time).minutes; // -> '59'
     */
    function build(pattern: string, subs: Record<string, Pattern>, flags?: string): RegExp;

    /**
     * Caches and returns the result of calling `XRegExp(pattern, flags)`. On any subsequent call with
     * the same pattern and flag combination, the cached copy of the regex is returned.
     *
     * @param pattern - Regex pattern string.
     * @param [flags] - Any combination of XRegExp flags.
     * @returns Cached XRegExp object.
     * @example
     *
     * while (match = XRegExp.cache('.', 'gs').exec(str)) {
     *   // The regex is compiled once only
     * }
     */
    function cache(pattern: string, flags: string): RegExp;

    /**
     * Escapes any regular expression metacharacters, for use when matching literal strings. The result
     * can safely be used at any point within a regex that uses any flags.
     *
     * @param str - String to escape.
     * @returns String with regex metacharacters escaped.
     * @example
     *
     * XRegExp.escape('Escaped? <.>');
     * // -> 'Escaped\?\ <\.>'
     */
    function escape(str: string): string;

    /**
     * Executes a regex search in a specified string. Returns a match array or `null`. If the provided
     * regex uses named capture, named capture groups properties are included on the match array.
     * Optional `pos` and `sticky` arguments specify the search start position, and whether the match
     * must start at the specified position only. The `lastIndex` property of the provided regex is not
     * used, but is updated for compatibility. Also fixes browser bugs compared to the native
     * `RegExp.prototype.exec` and can be used reliably cross-browser.
     *
     * @param str - String to search.
     * @param regex - Regex to search with.
     * @param pos - Zero-based index at which to start the search.
     * @param sticky - Whether the match must start at the specified position
     *   only. The string `'sticky'` is accepted as an alternative to `true`.
     * @returns Match array with named capture groups properties, or `null`.
     * @example
     *
     * // Basic use, with named capture groups
     * let match = XRegExp.exec('U+2620', XRegExp('U\\+(?<hex>[0-9A-F]{4})'));
     * match.hex; // -> '2620'
     *
     * // With pos and sticky, in a loop
     * let pos = 2, result = [], match;
     * while (match = XRegExp.exec('<1><2><3><4>5<6>', /<(\d)>/, pos, 'sticky')) {
     *   result.push(match[1]);
     *   pos = match.index + match[0].length;
     * }
     * // result -> ['2', '3', '4']
     */
    function exec(str: string, regex: RegExp, pos?: number, sticky?: boolean | 'sticky'): ExecArray | null;

    /**
     * Executes a provided function once per regex match. Searches always start at the beginning of the
     * string and continue until the end, regardless of the state of the regex's `global` property and
     * initial `lastIndex`.
     *
     * @param str - String to search.
     * @param regex - Regex to search with.
     * @param callback - Function to execute for each match. Invoked with four arguments:
     *   - The match array, with named capture groups properties.
     *   - The zero-based match index.
     *   - The string being traversed.
     *   - The regex object being used to traverse the string.
     * @example
     *
     * // Extracts every other digit from a string
     * const evens = [];
     * XRegExp.forEach('1a2345', /\d/, (match, i) => {
     *   if (i % 2) evens.push(+match[0]);
     * });
     * // evens -> [2, 4]
     */
    function forEach(str: string, regex: RegExp, callback: (matches: MatchArray, index: number, str: string, regex: RegExp) => void): void;

    /**
     * Copies a regex object and adds flag `g`. The copy maintains extended data, is augmented with
     * `XRegExp.prototype` properties, and has a fresh `lastIndex` property (set to zero). Native
     * regexes are not recompiled using XRegExp syntax.
     *
     * @param regex - Regex to globalize.
     * @returns Copy of the provided regex with flag `g` added.
     * @example
     *
     * const globalCopy = XRegExp.globalize(/regex/);
     * globalCopy.global; // -> true
     */
    function globalize(regex: RegExp): RegExp;

    /**
     * Installs optional features according to the specified options. Can be undone using
     * `XRegExp.uninstall`.
     *
     * @param options - Options object or string.
     * @example
     *
     * // With an options object
     * XRegExp.install({
     *   // Enables support for astral code points in Unicode addons (implicitly sets flag A)
     *   astral: true,
     *
     *   // Adds named capture groups to the `groups` property of matches
     *   namespacing: true
     * });
     *
     * // With an options string
     * XRegExp.install('astral namespacing');
     */
    function install(options: FeatureOptions): void;

    /**
     * Checks whether an individual optional feature is installed.
     *
     * @param feature - Name of the feature to check. One of:
     *   - `astral`
     *   - `namespacing`
     * @returns Whether the feature is installed.
     * @example
     *
     * XRegExp.isInstalled('astral');
     */
    function isInstalled(feature: Feature): boolean;

    /**
     * Returns `true` if an object is a regex; `false` if it isn't. This works correctly for regexes
     * created in another frame, when `instanceof` and `constructor` checks would fail.
     *
     * @param value - Object to check.
     * @returns Whether the object is a `RegExp` object.
     * @example
     *
     * XRegExp.isRegExp('string'); // -> false
     * XRegExp.isRegExp(/regex/i); // -> true
     * XRegExp.isRegExp(RegExp('^', 'm')); // -> true
     * XRegExp.isRegExp(XRegExp('(?s).')); // -> true
     */
    function isRegExp(value: any): value is RegExp;

    /**
     * Returns the first matched string, or in global mode, an array containing all matched strings.
     * This is essentially a more convenient re-implementation of `String.prototype.match` that gives
     * the result types you actually want (string instead of `exec`-style array in match-first mode,
     * and an empty array instead of `null` when no matches are found in match-all mode). It also lets
     * you override flag g and ignore `lastIndex`, and fixes browser bugs.
     *
     * @param str - String to search.
     * @param regex - Regex to search with.
     * @param scope - Use 'one' to return the first match as a string. Use 'all' to
     *   return an array of all matched strings. If not explicitly specified and `regex` uses flag g,
     *   `scope` is 'all'.
     * @returns In match-first mode: First match as a string, or `null`. In match-all
     *   mode: Array of all matched strings, or an empty array.
     * @example
     *
     * // Match first
     * XRegExp.match('abc', /\w/); // -> 'a'
     * XRegExp.match('abc', /\w/g, 'one'); // -> 'a'
     * XRegExp.match('abc', /x/g, 'one'); // -> null
     *
     * // Match all
     * XRegExp.match('abc', /\w/g); // -> ['a', 'b', 'c']
     * XRegExp.match('abc', /\w/, 'all'); // -> ['a', 'b', 'c']
     * XRegExp.match('abc', /x/, 'all'); // -> []
     */
    function match(str: string, regex: RegExp, scope: MatchScopeOne): string | null;
    function match(str: string, regex: RegExp, scope: MatchScopeAll): Array<string>;
    function match(str: string, regex: RegExp, scope?: MatchScope): string | Array<string> | null;

    /**
     * Retrieves the matches from searching a string using a chain of regexes that successively search
     * within previous matches. The provided `chain` array can contain regexes and or objects with
     * `regex` and `backref` properties. When a backreference is specified, the named or numbered
     * backreference is passed forward to the next regex or returned.
     *
     * @param str - String to search.
     * @param chain - Regexes that each search for matches within preceding results.
     * @returns Matches by the last regex in the chain, or an empty array.
     * @example
     *
     * // Basic usage; matches numbers within <b> tags
     * XRegExp.matchChain('1 <b>2</b> 3 <b>4 a 56</b>', [
     *   XRegExp('(?is)<b>.*?</b>'),
     *   /\d+/
     * ]);
     * // -> ['2', '4', '56']
     *
     * // Passing forward and returning specific backreferences
     * html = '<a href="http://xregexp.com/api/">XRegExp</a>\
     *         <a href="http://www.google.com/">Google</a>';
     * XRegExp.matchChain(html, [
     *   {regex: /<a href="([^"]+)">/i, backref: 1},
     *   {regex: XRegExp('(?i)^https?://(?<domain>[^/?#]+)'), backref: 'domain'}
     * ]);
     * // -> ['xregexp.com', 'www.google.com']
     */
    function matchChain(str: string, chain: MatchChainArray): MatchArray;

    /**
     * Returns an array of match strings between outermost left and right delimiters, or an array of
     * objects with detailed match parts and position data. An error is thrown if delimiters are
     * unbalanced within the data.
     *
     * @param str - String to search.
     * @param left - Left delimiter as an XRegExp pattern.
     * @param right - Right delimiter as an XRegExp pattern.
     * @param flags - Any native or XRegExp flags, used for the left and right delimiters.
     * @param options - Lets you specify `valueNames` and `escapeChar` options.
     * @returns Array of matches, or an empty array.
     * @example
     *
     * // Basic usage
     * let str = '(t((e))s)t()(ing)';
     * XRegExp.matchRecursive(str, '\\(', '\\)', 'g');
     * // -> ['t((e))s', '', 'ing']
     *
     * // Extended information mode with valueNames
     * str = 'Here is <div> <div>an</div></div> example';
     * XRegExp.matchRecursive(str, '<div\\s*>', '</div>', 'gi', {
     *   valueNames: ['between', 'left', 'match', 'right']
     * });
     * // -> [
     * // {name: 'between', value: 'Here is ',       start: 0,  end: 8},
     * // {name: 'left',    value: '<div>',          start: 8,  end: 13},
     * // {name: 'match',   value: ' <div>an</div>', start: 13, end: 27},
     * // {name: 'right',   value: '</div>',         start: 27, end: 33},
     * // {name: 'between', value: ' example',       start: 33, end: 41}
     * // ]
     *
     * // Omitting unneeded parts with null valueNames, and using escapeChar
     * str = '...{1}.\\{{function(x,y){return {y:x}}}';
     * XRegExp.matchRecursive(str, '{', '}', 'g', {
     *   valueNames: ['literal', null, 'value', null],
     *   escapeChar: '\\'
     * });
     * // -> [
     * // {name: 'literal', value: '...',  start: 0, end: 3},
     * // {name: 'value',   value: '1',    start: 4, end: 5},
     * // {name: 'literal', value: '.\\{', start: 6, end: 9},
     * // {name: 'value',   value: 'function(x,y){return {y:x}}', start: 10, end: 37}
     * // ]
     *
     * // Sticky mode via flag y
     * str = '<1><<<2>>><3>4<5>';
     * XRegExp.matchRecursive(str, '<', '>', 'gy');
     * // -> ['1', '<<2>>', '3']
     */
    function matchRecursive(str: string, left: string, right: string, flags?: string | null): Array<string>;
    function matchRecursive<T extends (MatchRecursiveOptions | null | undefined)>(str: string, left: string, right: string, flags?: string | null, options?: T)
        : T extends Required<Pick<MatchRecursiveOptions, 'valueNames'>> ? Array<MatchRecursiveValueNameMatch> : Array<string>;

    /**
     * Returns a new string with one or all matches of a pattern replaced. The pattern can be a string
     * or regex, and the replacement can be a string or a function to be called for each match. To
     * perform a global search and replace, use the optional `scope` argument or include flag g if using
     * a regex. Replacement strings can use `${n}` or `$<n>` for named and numbered backreferences.
     * Replacement functions can use named backreferences via `arguments[0].name`. Also fixes browser
     * bugs compared to the native `String.prototype.replace` and can be used reliably cross-browser.
     *
     * @param str - String to search.
     * @param search - Search pattern to be replaced.
     * @param replacement - Replacement string or a function invoked to create it.
     * @param scope - Use 'one' to replace the first match only, or 'all'. If not explicitly specified and using a regex with
     *        flag g, `scope` is 'all'.
     * @returns New string with one or all matches replaced.
     * @example
     *
     * // Regex search, using named backreferences in replacement string
     * const name = XRegExp('(?<first>\\w+) (?<last>\\w+)');
     * XRegExp.replace('John Smith', name, '$<last>, $<first>');
     * // -> 'Smith, John'
     *
     * // Regex search, using named backreferences in replacement function
     * XRegExp.replace('John Smith', name, (match) => `${match.last as string}, ${match.first as string}`);
     * // -> 'Smith, John'
     *
     * // String search, with replace-all
     * XRegExp.replace('RegExp builds RegExps', 'RegExp', 'XRegExp', 'all');
     * // -> 'XRegExp builds XRegExps'
     */
    function replace(str: string, search: Pattern, replacement: ReplacementValue, scope?: MatchScope): string;

    /**
     * Performs batch processing of string replacements. Used like `XRegExp.replace`, but accepts an
     * array of replacement details. Later replacements operate on the output of earlier replacements.
     * Replacement details are accepted as an array with a regex or string to search for, the
     * replacement string or function, and an optional scope of 'one' or 'all'. Uses the XRegExp
     * replacement text syntax, which supports named backreference properties via `${name}` or
     * `$<name>`.
     *
     * @param str - String to search.
     * @param replacements - Array of replacement detail arrays.
     * @returns New string with all replacements.
     * @example
     *
     * str = XRegExp.replaceEach(str, [
     *   [XRegExp('(?<name>a)'), 'z${name}'],
     *   [/b/gi, 'y'],
     *   [/c/g, 'x', 'one'], // scope 'one' overrides /g
     *   [/d/, 'w', 'all'],  // scope 'all' overrides lack of /g
     *   ['e', 'v', 'all'],  // scope 'all' allows replace-all for strings
     *   [/f/g, ($0) => $0.toUpperCase()]
     * ]);
     */
    function replaceEach(str: string, replacements: Array<ReplacementDetail>): string;

    /**
     * Splits a string into an array of strings using a regex or string separator. Matches of the
     * separator are not included in the result array. However, if `separator` is a regex that contains
     * capturing groups, backreferences are spliced into the result each time `separator` is matched.
     * Fixes browser bugs compared to the native `String.prototype.split` and can be used reliably
     * cross-browser.
     *
     * @param str - String to split.
     * @param separator - Regex or string to use for separating the string.
     * @param limit - Maximum number of items to include in the result array.
     * @returns Array of substrings.
     * @example
     *
     * // Basic use
     * XRegExp.split('a b c', ' ');
     * // -> ['a', 'b', 'c']
     *
     * // With limit
     * XRegExp.split('a b c', ' ', 2);
     * // -> ['a', 'b']
     *
     * // Backreferences in result array
     * XRegExp.split('..word1..', /([a-z]+)(\d+)/i);
     * // -> ['..', 'word', '1', '..']
     */
    function split(str: string, separator: Pattern, limit?: number): Array<string>;

    /**
     * Provides tagged template literals that create regexes with XRegExp syntax and flags. The
     * provided pattern is handled as a raw string, so backslashes don't need to be escaped.
     *
     * Interpolation of strings and regexes shares the features of `XRegExp.build`. Interpolated
     * patterns are treated as atomic units when quantified, interpolated strings have their special
     * characters escaped, a leading `^` and trailing unescaped `$` are stripped from interpolated
     * regexes if both are present, and any backreferences within an interpolated regex are
     * rewritten to work within the overall pattern.
     *
     * @param flags - Any combination of XRegExp flags.
     * @returns Handler for template literals that construct regexes with XRegExp syntax.
     * @example
     *
     * const h12 = /1[0-2]|0?[1-9]/;
     * const h24 = /2[0-3]|[01][0-9]/;
     * const hours = XRegExp.tag('x')`${h12} : | ${h24}`;
     * const minutes = /^[0-5][0-9]$/;
     * // Note that explicitly naming the 'minutes' group is required for named backreferences
     * const time = XRegExp.tag('x')`^ ${hours} (?<minutes>${minutes}) $`;
     * time.test('10:59'); // -> true
     * XRegExp.exec('10:59', time).minutes; // -> '59'
     */
    function tag(flags?: string | null): (literals: TemplateStringsArray, ...substitutions: any[]) => RegExp;

    /**
     * Executes a regex search in a specified string. Returns `true` or `false`. Optional `pos` and
     * `sticky` arguments specify the search start position, and whether the match must start at the
     * specified position only. The `lastIndex` property of the provided regex is not used, but is
     * updated for compatibility. Also fixes browser bugs compared to the native
     * `RegExp.prototype.test` and can be used reliably cross-browser.
     *
     * @param str - String to search.
     * @param regex - Regex to search with.
     * @param pos - Zero-based index at which to start the search.
     * @param sticky - Whether the match must start at the specified position
     *   only. The string `'sticky'` is accepted as an alternative to `true`.
     * @returns Whether the regex matched the provided value.
     * @example
     *
     * // Basic use
     * XRegExp.test('abc', /c/); // -> true
     *
     * // With pos and sticky
     * XRegExp.test('abc', /c/, 0, 'sticky'); // -> false
     * XRegExp.test('abc', /c/, 2, 'sticky'); // -> true
     */
    function test(str: string, regex: Pattern, pos?: number, sticky?: boolean | 'sticky'): boolean;

    /**
     * Uninstalls optional features according to the specified options. All optional features start out
     * uninstalled, so this is used to undo the actions of `XRegExp.install`.
     *
     * @param options - Options object or string.
     * @example
     *
     * // With an options object
     * XRegExp.uninstall({
     *   // Disables support for astral code points in Unicode addons
     *   astral: true,
     *
     *   // Don't add named capture groups to the `groups` property of matches
     *   namespacing: true
     * });
     *
     * // With an options string
     * XRegExp.uninstall('astral namespacing');
     */
    function uninstall(options: FeatureOptions): void;

    /**
     * Returns an XRegExp object that is the union of the given patterns. Patterns can be provided as
     * regex objects or strings. Metacharacters are escaped in patterns provided as strings.
     * Backreferences in provided regex objects are automatically renumbered to work correctly within
     * the larger combined pattern. Native flags used by provided regexes are ignored in favor of the
     * `flags` argument.
     *
     * @param patterns - Regexes and strings to combine.
     * @param flags - Any combination of XRegExp flags.
     * @param options - Options object with optional properties.
     * @returns Union of the provided regexes and strings.
     * @example
     *
     * XRegExp.union(['a+b*c', /(dogs)\1/, /(cats)\1/], 'i');
     * // -> /a\+b\*c|(dogs)\1|(cats)\2/i
     *
     * XRegExp.union([/man/, /bear/, /pig/], 'i', {conjunction: 'none'});
     * // -> /manbearpig/i
     */
    function union(patterns: Array<Pattern>, flags?: string | null, options?: UnionOptions): RegExp;

    //#endregion
}
