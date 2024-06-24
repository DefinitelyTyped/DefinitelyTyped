// TypeScript Version: 2.2

import * as braces from "braces";
declare namespace micromatch {
    interface Item {
        glob: string;
        regex: RegExp;
        input: string;
        output: string;
    }
    interface Options {
        /**
         * Allow glob patterns without slashes to match a file path based on its basename. Same behavior as [minimatch](https://github.com/isaacs/minimatch) option `matchBase`.
         *
         * @default false
         *
         * @example
         * ```js
         * mm(['a/b.js', 'a/c.md'], '*.js');
         * //=> []
         *
         * mm(['a/b.js', 'a/c.md'], '*.js', {matchBase: true});
         * //=> ['a/b.js']
         * ```
         */
        basename?: boolean | undefined;
        /**
         * Enabled by default, this option enforces bash-like behavior with stars immediately following a bracket expression.
         * Bash bracket expressions are similar to regex character classes, but unlike regex, a star following a bracket expression **does not repeat the bracketed characters**.
         * Instead, the star is treated the same as an other star.
         *
         * @default true
         *
         * @example
         * ```js
         * var files = ['abc', 'ajz'];
         * console.log(mm(files, '[a-c]*'));
         * //=> ['abc', 'ajz']
         *
         * console.log(mm(files, '[a-c]*', {bash: false}));
         * ```
         */
        bash?: boolean | undefined;
        /**
         * Return regex matches in supporting methods.
         *
         * @default undefined
         */
        capture?: boolean | undefined;
        /**
         * Allows glob to match any part of the given string(s).
         *
         * @default undefined
         */
        contains?: boolean | undefined;
        /**
         * Current working directory. Used by `picomatch.split()`
         *
         * @default process.cwd()
         */
        cwd?: string | undefined;
        /**
         * Debug regular expressions when an error is thrown.
         *
         * @default undefined
         */
        debug?: boolean | undefined;
        /**
         * Match dotfiles. Otherwise dotfiles are ignored unless a `.` is explicitly defined in the pattern.
         *
         * @default false
         */
        dot?: boolean | undefined;
        /**
         * Custom function for expanding ranges in brace patterns, such as `{a..z}`.
         * The function receives the range values as two arguments, and it must return a string to be used in the generated regex.
         * It's recommended that returned strings be wrapped in parentheses. This option is overridden by the expandBrace option.
         *
         * @default undefined
         */
        expandRange?: ((left: string, right: string, options: Options) => string) | undefined;
        /**
         * Similar to the `--failglob` behavior in Bash, throws an error when no matches are found.
         *
         * @default false
         */
        failglob?: boolean | undefined;
        /**
         * To speed up processing, full parsing is skipped for a handful common glob patterns. Disable this behavior by setting this option to false.
         *
         * @default true
         */
        fastpaths?: boolean | undefined;
        /**
         * Regex flags to use in the generated regex. If defined, the `nocase` option will be overridden.
         *
         * @default undefined
         */
        flags?: boolean | undefined;
        /**
         * Custom function for formatting the returned string. This is useful for removing leading slashes, converting Windows paths to Posix paths, etc.
         *
         * @default undefined
         */
        format?: ((returnedString: string) => string) | undefined;
        /**
         * One or more glob patterns for excluding strings that should not be matched from the result.
         *
         * @default undefined
         */
        ignore?: string | readonly string[] | undefined;
        /**
         * Retain quotes in the generated regex, since quotes may also be used as an alternative to backslashes.
         *
         * @default false
         */
        keepQuotes?: boolean | undefined;
        /**
         * When `true`, brackets in the glob pattern will be escaped so that only literal brackets will be matched.
         *
         * @default undefined
         */
        literalBrackets?: boolean | undefined;
        /**
         * Support regex positive and negative lookbehinds. Note that you must be using Node 8.1.10 or higher to enable regex lookbehinds.
         *
         * @default true
         */
        lookbehinds?: boolean | undefined;
        /**
         * Alias for `basename`.
         *
         * @default false
         */
        matchBase?: boolean | undefined;
        /**
         * Limit the max length of the input string. An error is thrown if the input string is longer than this value.
         *
         * @default 65536
         */
        maxLength?: number | undefined;
        /**
         * Disable brace matching, so that `{a,b}` and `{1..3}` would be treated as literal characters.
         *
         * @default false
         */
        nobrace?: boolean | undefined;
        /**
         * Disable matching with regex brackets.
         *
         * @default undefined
         */
        nobracket?: boolean | undefined;
        /**
         * Perform case-insensitive matching. Equivalent to the regex `i` flag.
         * Note that this option is ignored when the `flags` option is defined.
         *
         * @default false
         */
        nocase?: boolean | undefined;
        /**
         * Alias for `noextglob`
         *
         * @default false
         */
        noext?: boolean | undefined;
        /**
         * Disable support for matching with extglobs (like `+(a|b)`)
         *
         * @default false
         */
        noextglob?: boolean | undefined;
        /**
         * Disable matching with globstars (`**`).
         *
         * @default undefined
         */
        noglobstar?: boolean | undefined;
        /**
         * Disallow negation (`!`) patterns, and treat leading `!` as a literal character to match.
         *
         * @default undefined
         */
        nonegate?: boolean | undefined;
        /**
         * Disable support for regex quantifiers (like `a{1,2}`) and treat them as brace patterns to be expanded.
         *
         * @default false
         */
        noquantifiers?: boolean | undefined;
        /**
         * Function to be called on ignored items.
         *
         * @default undefined
         */
        onIgnore?: ((item: Item) => void) | undefined;
        /**
         * Function to be called on matched items.
         *
         * @default undefined
         */
        onMatch?: ((item: Item) => void) | undefined;
        /**
         * Function to be called on all items, regardless of whether or not they are matched or ignored.
         *
         * @default undefined
         */
        onResult?: ((item: Item) => void) | undefined;
        /**
         * Support POSIX character classes ("posix brackets").
         *
         * @default false
         */
        posix?: boolean | undefined;
        /**
         * String to prepend to the generated regex used for matching.
         *
         * @default undefined
         */
        prepend?: boolean | undefined;
        /**
         * Use regular expression rules for `+` (instead of matching literal `+`), and for stars that follow closing parentheses or brackets (as in `)*` and `]*`).
         *
         * @default false
         */
        regex?: boolean | undefined;
        /**
         * Throw an error if brackets, braces, or parens are imbalanced.
         *
         * @default undefined
         */
        strictBrackets?: boolean | undefined;
        /**
         * When true, picomatch won't match trailing slashes with single stars.
         *
         * @default undefined
         */
        strictSlashes?: boolean | undefined;
        /**
         * Remove backslashes from returned matches.
         *
         * @default undefined
         *
         * @example
         * In this example we want to match a literal `*`:
         *
         * ```js
         * mm.match(['abc', 'a\\*c'], 'a\\*c');
         * //=> ['a\\*c']
         *
         * mm.match(['abc', 'a\\*c'], 'a\\*c', {unescape: true});
         * //=> ['a*c']
         * ```
         */
        unescape?: boolean | undefined;
        /**
         * Convert all slashes in file paths to forward slashes. This does not convert slashes in the glob pattern itself
         *
         * @default undefined
         */
        windows?: boolean | undefined;
    }

    interface ScanOptions extends Options {
        /**
         * When `true`, the returned object will include an array of `tokens` (objects), representing each path "segment" in the scanned glob pattern.
         *
         * @default false
         */
        tokens?: boolean | undefined;
        /**
         * When `true`, the returned object will include an array of strings representing each path "segment" in the scanned glob pattern.
         * This is automatically enabled when `options.tokens` is `true`.
         *
         * @default false
         */
        parts?: boolean | undefined;
    }

    interface ScanInfo {
        prefix: string;
        input: string;
        start: number;
        base: string;
        glob: string;
        isBrace: boolean;
        isBracket: boolean;
        isGlob: boolean;
        isExtglob: boolean;
        isGlobstar: boolean;
        negated: boolean;
        negatedExtglob: boolean;
    }

    interface ScanInfoToken {
        value: string;
        depth: number;
        isGlob: boolean;

        backslashes?: boolean | undefined;
        isBrace?: boolean | undefined;
        isBracket?: boolean | undefined;
        isExtglob?: boolean | undefined;
        isGlobstar?: boolean | undefined;
        isPrefix?: boolean | undefined;
        negated?: boolean | undefined;
    }

    interface ScanInfoWithParts extends ScanInfo {
        slashes: number[];
        parts: string[];
    }

    interface ScanInfoWithTokens extends ScanInfoWithParts {
        maxDepth: number;
        tokens: ScanInfoToken[];
    }
}

interface Micromatch {
    /**
     * The main function takes a list of strings and one or more glob patterns to use for matching.
     *
     * @param list A list of strings to match
     * @param patterns One or more glob patterns to use for matching.
     * @param options See available options for changing how matches are performed
     * @returns Returns an array of matches
     *
     * @example
     * ```js
     * var mm = require('micromatch');
     * mm(list, patterns[, options]);
     *
     * console.log(mm(['a.js', 'a.txt'], ['*.js']));
     * //=> [ 'a.js' ]
     * ```
     */
    (list: readonly string[], patterns: string | readonly string[], options?: micromatch.Options): string[];

    /**
     * Similar to the main function, but `pattern` must be a string.
     *
     * @param list Array of strings to match
     * @param pattern Glob pattern to use for matching.
     * @param options See available options for changing how matches are performed
     * @returns Returns an array of matches
     *
     * @example
     * ```js
     * var mm = require('micromatch');
     * mm.match(list, pattern[, options]);
     *
     * console.log(mm.match(['a.a', 'a.aa', 'a.b', 'a.c'], '*.a'));
     * //=> ['a.a', 'a.aa']
     * ```
     */
    match(list: readonly string[], pattern: string | readonly string[], options?: micromatch.Options): string[];

    /**
     * Returns true if the specified `string` matches the given glob `pattern`.
     *
     * @param string String to match
     * @param pattern Glob pattern to use for matching.
     * @param options See available options for changing how matches are performed
     * @returns Returns true if the string matches the glob pattern.
     *
     * @example
     * ```js
     * var mm = require('micromatch');
     * mm.isMatch(string, pattern[, options]);
     *
     * console.log(mm.isMatch('a.a', '*.a'));
     * //=> true
     * console.log(mm.isMatch('a.b', '*.a'));
     * //=> false
     * ```
     */
    isMatch(string: string, pattern: string | readonly string[], options?: micromatch.Options): boolean;

    /**
     * Returns true if some of the strings in the given `list` match any of the given glob `patterns`.
     *
     * @param list The string or array of strings to test. Returns as soon as the first match is found.
     * @param patterns One or more glob patterns to use for matching.
     * @param options See available options for changing how matches are performed
     * @returns Returns true if any patterns match `str`
     *
     * @example
     * ```js
     * var mm = require('micromatch');
     * mm.some(list, patterns[, options]);
     *
     * console.log(mm.some(['foo.js', 'bar.js'], ['*.js', '!foo.js']));
     * // true
     * console.log(mm.some(['foo.js'], ['*.js', '!foo.js']));
     * // false
     * ```
     */
    some(
        list: string | readonly string[],
        patterns: string | readonly string[],
        options?: micromatch.Options,
    ): boolean;

    /**
     * Returns true if every string in the given `list` matches any of the given glob `patterns`.
     *
     * @param list The string or array of strings to test.
     * @param patterns One or more glob patterns to use for matching.
     * @param options See available options for changing how matches are performed
     * @returns Returns true if any patterns match `str`
     *
     * @example
     * ```js
     * var mm = require('micromatch');
     * mm.every(list, patterns[, options]);
     *
     * console.log(mm.every('foo.js', ['foo.js']));
     * // true
     * console.log(mm.every(['foo.js', 'bar.js'], ['*.js']));
     * // true
     * console.log(mm.every(['foo.js', 'bar.js'], ['*.js', '!foo.js']));
     * // false
     * console.log(mm.every(['foo.js'], ['*.js', '!foo.js']));
     * // false
     * ```
     */
    every(
        list: string | readonly string[],
        patterns: string | readonly string[],
        options?: micromatch.Options,
    ): boolean;

    /**
     * Returns true if **any** of the given glob `patterns` match the specified `string`.
     *
     * @param str The string to test.
     * @param patterns One or more glob patterns to use for matching.
     * @param options See available options for changing how matches are performed
     * @returns Returns true if any patterns match `str`
     *
     * @example
     * ```js
     * var mm = require('micromatch');
     * mm.any(string, patterns[, options]);
     *
     * console.log(mm.any('a.a', ['b.*', '*.a']));
     * //=> true
     * console.log(mm.any('a.a', 'b.*'));
     * //=> false
     * ```
     */
    any(
        str: string | readonly string[],
        patterns: string | readonly string[],
        options?: micromatch.Options,
    ): boolean;

    /**
     * Returns true if **all** of the given `patterns` match the specified string.
     *
     * @param str The string to test.
     * @param patterns One or more glob patterns to use for matching.
     * @param options See available options for changing how matches are performed
     * @returns Returns true if any patterns match `str`
     *
     * @example
     * ```js
     * var mm = require('micromatch');
     * mm.all(string, patterns[, options]);
     *
     * console.log(mm.all('foo.js', ['foo.js']));
     * // true
     *
     * console.log(mm.all('foo.js', ['*.js', '!foo.js']));
     * // false
     *
     * console.log(mm.all('foo.js', ['*.js', 'foo.js']));
     * // true
     *
     * console.log(mm.all('foo.js', ['*.js', 'f*', '*o*', '*o.js']));
     * // true
     * ```
     */
    all(
        str: string | readonly string[],
        patterns: string | readonly string[],
        options?: micromatch.Options,
    ): boolean;

    /**
     * Returns a list of strings that _**do not match any**_ of the given `patterns`.
     *
     * @param list Array of strings to match.
     * @param patterns One or more glob pattern to use for matching.
     * @param options See available options for changing how matches are performed
     * @returns Returns an array of strings that **do not match** the given patterns.
     *
     * @example
     * ```js
     * var mm = require('micromatch');
     * mm.not(list, patterns[, options]);
     *
     * console.log(mm.not(['a.a', 'b.b', 'c.c'], '*.a'));
     * //=> ['b.b', 'c.c']
     * ```
     */
    not(list: readonly string[], patterns: string | readonly string[], options?: micromatch.Options): string[];

    /**
     * Returns true if the given `string` contains the given pattern. Similar to [.isMatch](#isMatch) but the pattern can match any part of the string.
     *
     * @param str The string to match.
     * @param patterns Glob pattern to use for matching.
     * @param options See available options for changing how matches are performed
     * @returns Returns true if the patter matches any part of `str`.
     *
     * @example
     * ```js
     * var mm = require('micromatch');
     * mm.contains(string, pattern[, options]);
     *
     * console.log(mm.contains('aa/bb/cc', '*b'));
     * //=> true
     * console.log(mm.contains('aa/bb/cc', '*d'));
     * //=> false
     * ```
     */
    contains(str: string, patterns: string | readonly string[], options?: micromatch.Options): boolean;

    /**
     * Filter the keys of the given object with the given `glob` pattern and `options`. Does not attempt to match nested keys.
     * If you need this feature, use [glob-object](https://github.com/jonschlinkert/glob-object) instead.
     *
     * @param object The object with keys to filter.
     * @param patterns One or more glob patterns to use for matching.
     * @param options See available options for changing how matches are performed
     * @returns Returns an object with only keys that match the given patterns.
     *
     * @example
     * ```js
     * var mm = require('micromatch');
     * mm.matchKeys(object, patterns[, options]);
     *
     * var obj = { aa: 'a', ab: 'b', ac: 'c' };
     * console.log(mm.matchKeys(obj, '*b'));
     * //=> { ab: 'b' }
     * ```
     */
    matchKeys<T>(object: T, patterns: string | readonly string[], options?: micromatch.Options): Partial<T>;

    /**
     * Returns a memoized matcher function from the given glob `pattern` and `options`. The returned function takes a string to match as its only argument and returns true if the string is a match.
     *
     * @param pattern Glob pattern
     * @param options See available options for changing how matches are performed.
     * @returns Returns a matcher function.
     *
     * @example
     * ```js
     * var mm = require('micromatch');
     * mm.matcher(pattern[, options]);
     *
     * var isMatch = mm.matcher('*.!(*a)');
     * console.log(isMatch('a.a'));
     * //=> false
     * console.log(isMatch('a.b'));
     * //=> true
     * ```
     */
    matcher(pattern: string, options?: micromatch.Options): (str: string) => boolean;

    /**
     * Returns an array of matches captured by `pattern` in `string, or`null` if the pattern did not match.
     *
     * @param pattern Glob pattern to use for matching.
     * @param string String to match
     * @param options See available options for changing how matches are performed
     * @returns Returns an array of captures if the string matches the glob pattern, otherwise `null`.
     *
     * @example
     * ```js
     * var mm = require('micromatch');
     * mm.capture(pattern, string[, options]);
     *
     * console.log(mm.capture('test/*.js', 'test/foo.js'));
     * //=> ['foo']
     * console.log(mm.capture('test/*.js', 'foo/bar.css'));
     * //=> null
     * ```
     */
    capture(pattern: string, string: string, options?: micromatch.Options): string[] | null;

    /**
     * Create a regular expression from the given glob `pattern`.
     *
     * @param pattern A glob pattern to convert to regex.
     * @param options See available options for changing how matches are performed.
     * @returns Returns a regex created from the given pattern.
     *
     * @example
     * ```js
     * var mm = require('micromatch');
     * mm.makeRe(pattern[, options]);
     *
     * console.log(mm.makeRe('*.js'));
     * //=> /^(?:(\.[\\\/])?(?!\.)(?=.)[^\/]*?\.js)$/
     * ```
     */
    makeRe(pattern: string, options?: micromatch.Options): RegExp;

    /**
     * Expand the given brace `pattern`.
     *
     * @param pattern String with brace pattern to expand.
     * @param options Any options to change how expansion is performed. See the [braces](https://github.com/micromatch/braces) library for all available options.
     *
     * @example
     * ```js
     * var mm = require('micromatch');
     * console.log(mm.braces('foo/{a,b}/bar'));
     * //=> ['foo/(a|b)/bar']
     *
     * console.log(mm.braces('foo/{a,b}/bar', {expand: true}));
     * //=> ['foo/(a|b)/bar']
     * ```
     */
    braces(pattern: string, options?: braces.Options): string[];

    /**
     * Parse a glob pattern to create the source string for a regular expression.
     *
     * @returns Returns an AST
     *
     * @example
     * ```js
     * var mm = require('micromatch');
     * mm.parse(pattern[, options]);
     *
     * var ast = mm.parse('a/{b,c}/d');
     * console.log(ast);
     * // { type: 'root',
     * //   errors: [],
     * //   input: 'a/{b,c}/d',
     * //   nodes:
     * //    [ { type: 'bos', val: '' },
     * //      { type: 'text', val: 'a/' },
     * //      { type: 'brace',
     * //        nodes:
     * //         [ { type: 'brace.open', val: '{' },
     * //           { type: 'text', val: 'b,c' },
     * //           { type: 'brace.close', val: '}' } ] },
     * //      { type: 'text', val: '/d' },
     * //      { type: 'eos', val: '' } ] }
     * ```
     */
    parse(glob: string, options?: micromatch.Options): object;

    /**
     * Scan a glob pattern to separate the pattern into segments.
     */
    scan(pattern: string, options: { parts: true } & micromatch.ScanOptions): micromatch.ScanInfoWithParts;
    scan(pattern: string, options: { tokens: true } & micromatch.ScanOptions): micromatch.ScanInfoWithTokens;
    scan(pattern: string, options?: micromatch.ScanOptions): micromatch.ScanInfo;
}

export as namespace micromatch;

declare const micromatch: Micromatch;
export = micromatch;
