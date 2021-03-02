import { Picomatch } from './picomatch-interface';

export interface PicomatchOptions {
    /**
     * If set, then patterns without slashes will be matched against the basename of the path if it contains slashes.
     * For example, `a?b` would match the path `/xyz/123/acb`, but not `/xyz/acb/123`.
     */
    basename?: boolean;
    /**
     * Follow bash matching rules more strictly - disallows backslashes as escape characters, and treats single stars as globstars (`**`).
     */
    bash?: boolean;
    /**
     * Return regex matches in supporting methods.
     */
    capture?: boolean;
    /**
     * Allows glob to match any part of the given string(s).
     */
    contains?: boolean;
    /**
     * Current working directory. Used by `picomatch.split()`
     */
    cwd?: string;
    /**
     * Debug regular expressions when an error is thrown.
     */
    debug?: boolean;
    /**
     * Enable dotfile matching. By default, dotfiles are ignored unless a `.` is explicitly defined in the pattern, or `options.dot` is true
     */
    dot?: boolean;
    /**
     * Custom function for expanding ranges in brace patterns, such as `{a..z}`.
     * The function receives the range values as two arguments, and it must return a string to be used in the generated regex.
     * It's recommended that returned strings be wrapped in parentheses.
     */
    expandRange?: (a: string, b: string) => string;
    /**
     * Throws an error if no matches are found. Based on the bash option of the same name.
     */
    failglob?: boolean;
    /**
     * To speed up processing, full parsing is skipped for a handful common glob patterns. Disable this behavior by setting this option to `false`.
     */
    fastpaths?: boolean;
    /**
     * Regex flags to use in the generated regex. If defined, the `nocase` option will be overridden.
     */
    flags?: boolean;
    /**
     * Custom function for formatting the returned string. This is useful for removing leading slashes, converting Windows paths to Posix paths, etc.
     */
    format?: (str: string) => string;
    /**
     * One or more glob patterns for excluding strings that should not be matched from the result.
     */
    ignore?: string | string[];
    /**
     * Retain quotes in the generated regex, since quotes may also be used as an alternative to backslashes.
     */
    keepQuotes?: boolean;
    /**
     * When `true`, brackets in the glob pattern will be escaped so that only literal brackets will be matched.
     */
    literalBrackets?: boolean;
    /**
     * Support regex positive and negative lookbehinds. Note that you must be using Node 8.1.10 or higher to enable regex lookbehinds.
     */
    lookbehinds?: boolean;
    /**
     * Alias for `basename`
     */
    matchBase?: boolean;
    /**
     * Limit the max length of the input string. An error is thrown if the input string is longer than this value.
     */
    maxLength?: boolean;
    /**
     * Disable brace matching, so that `{a,b}` and `{1..3}` would be treated as literal characters.
     */
    nobrace?: boolean;
    /**
     * Disable brace matching, so that `{a,b}` and `{1..3}` would be treated as literal characters.
     */
    nobracket?: boolean;
    /**
     * Make matching case-insensitive. Equivalent to the regex `i` flag. Note that this option is overridden by the `flags` option.
     */
    nocase?: boolean;
    /**
     * @deprecated use `nounique` instead.
     * This option will be removed in a future major release. By default duplicates are removed.
     * Disable uniquification by setting this option to false.
     */
    nodupes?: boolean;
    /**
     * Alias for `noextglob`
     */
    noext?: boolean;
    /**
     * Disable support for matching with extglobs (like `+(a\|b)`)
     */
    noextglob?: boolean;
    /**
     * Disable support for matching nested directories with globstars (`**`)
     */
    noglobstar?: boolean;
    /**
     * Disable support for negating with leading `!`
     */
    nonegate?: boolean;
    /**
     * Disable support for regex quantifiers (like `a{1,2}`) and treat them as brace patterns to be expanded.
     */
    noquantifiers?: boolean;
    /**
     * Function to be called on ignored items.
     */
    onIgnore?: (result: Result) => void;
    /**
     * Function to be called on matched items.
     */
    onMatch?: (result: Result) => void;
    /**
     * Function to be called on all items, regardless of whether or not they are matched or ignored.
     */
    onResult?: (result: Result) => void;
    /**
     * Support POSIX character classes ("posix brackets").
     */
    posix?: boolean;
    /**
     * Convert all slashes in file paths to forward slashes. This does not convert slashes in the glob pattern itself
     */
    posixSlashes?: boolean;
    /**
     * Convert all slashes in file paths to forward slashes. This does not convert slashes in the glob pattern itself
     */
    prepend?: boolean;
    /**
     * Use regular expression rules for `+` (instead of matching literal `+`), and for stars that follow closing parentheses or brackets (as in `)*` and `]*`).
     */
    regex?: boolean;
    /**
     * Throw an error if brackets, braces, or parens are imbalanced.
     */
    strictBrackets?: boolean;
    /**
     * When true, picomatch won't match trailing slashes with single stars.
     */
    strictSlashes?: boolean;
    /**
     * Remove backslashes preceding escaped characters in the glob pattern. By default, backslashes are retained.
     */
    unescape?: boolean;
    /**
     * Alias for `posixSlashes`, for backwards compatibility.
     */
    unixify?: boolean;
}

interface Result {
    glob: string;
    state: any;
    regex: RegExp;
    posix: boolean;
    input: string;
    output: string;
    match: ReturnType<Picomatch['test']>['match'];
    isMatch: ReturnType<Picomatch['test']>['isMatch'];
}

// Shut off automatic exporting
export {};
