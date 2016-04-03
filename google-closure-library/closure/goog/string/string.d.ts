declare module goog {
    function require(name: 'goog.string'): typeof goog.string$;
    function require(name: 'goog.string.Unicode'): typeof goog.string$.Unicode;
}

declare module goog.string$ {

    /**
     * Common Unicode string characters.
     * @enum {string}
     */
    type Unicode = string;
    var Unicode: {
        NBSP: Unicode;
    };

    /**
     * Fast prefix-checker.
     * @param {string} str The string to check.
     * @param {string} prefix A string to look for at the start of {@code str}.
     * @return {boolean} True if {@code str} begins with {@code prefix}.
     */
    function startsWith(str: string, prefix: string): boolean;

    /**
     * Fast suffix-checker.
     * @param {string} str The string to check.
     * @param {string} suffix A string to look for at the end of {@code str}.
     * @return {boolean} True if {@code str} ends with {@code suffix}.
     */
    function endsWith(str: string, suffix: string): boolean;

    /**
     * Case-insensitive prefix-checker.
     * @param {string} str The string to check.
     * @param {string} prefix  A string to look for at the end of {@code str}.
     * @return {boolean} True if {@code str} begins with {@code prefix} (ignoring
     *     case).
     */
    function caseInsensitiveStartsWith(str: string, prefix: string): boolean;

    /**
     * Case-insensitive suffix-checker.
     * @param {string} str The string to check.
     * @param {string} suffix A string to look for at the end of {@code str}.
     * @return {boolean} True if {@code str} ends with {@code suffix} (ignoring
     *     case).
     */
    function caseInsensitiveEndsWith(str: string, suffix: string): boolean;

    /**
     * Case-insensitive equality checker.
     * @param {string} str1 First string to check.
     * @param {string} str2 Second string to check.
     * @return {boolean} True if {@code str1} and {@code str2} are the same string,
     *     ignoring case.
     */
    function caseInsensitiveEquals(str1: string, str2: string): boolean;

    /**
     * Does simple python-style string substitution.
     * subs("foo%s hot%s", "bar", "dog") becomes "foobar hotdog".
     * @param {string} str The string containing the pattern.
     * @param {...*} var_args The items to substitute into the pattern.
     * @return {string} A copy of {@code str} in which each occurrence of
     *     {@code %s} has been replaced an argument from {@code var_args}.
     */
    function subs(str: string, ...var_args: any[]): string;

    /**
     * Converts multiple whitespace chars (spaces, non-breaking-spaces, new lines
     * and tabs) to a single space, and strips leading and trailing whitespace.
     * @param {string} str Input string.
     * @return {string} A copy of {@code str} with collapsed whitespace.
     */
    function collapseWhitespace(str: string): string;

    /**
     * Checks if a string is empty or contains only whitespaces.
     * @param {string} str The string to check.
     * @return {boolean} Whether {@code str} is empty or whitespace only.
     */
    function isEmptyOrWhitespace(str: string): boolean;

    /**
     * Checks if a string is empty.
     * @param {string} str The string to check.
     * @return {boolean} Whether {@code str} is empty.
     */
    function isEmptyString(str: string): boolean;

    /**
     * Checks if a string is empty or contains only whitespaces.
     *
     * TODO(user): Deprecate this when clients have been switched over to
     * goog.string.isEmptyOrWhitespace.
     *
     * @param {string} str The string to check.
     * @return {boolean} Whether {@code str} is empty or whitespace only.
     */
    function isEmpty(str: string): boolean;

    /**
     * Checks if a string is null, undefined, empty or contains only whitespaces.
     * @param {*} str The string to check.
     * @return {boolean} Whether {@code str} is null, undefined, empty, or
     *     whitespace only.
     * @deprecated Use goog.string.isEmptyOrWhitespace(goog.string.makeSafe(str))
     *     instead.
     */
    function isEmptyOrWhitespaceSafe(str: any): boolean;

    /**
     * Checks if a string is null, undefined, empty or contains only whitespaces.
     *
     * TODO(user): Deprecate this when clients have been switched over to
     * goog.string.isEmptyOrWhitespaceSafe.
     *
     * @param {*} str The string to check.
     * @return {boolean} Whether {@code str} is null, undefined, empty, or
     *     whitespace only.
     */
    function isEmptySafe(str: any): boolean;

    /**
     * Checks if a string is all breaking whitespace.
     * @param {string} str The string to check.
     * @return {boolean} Whether the string is all breaking whitespace.
     */
    function isBreakingWhitespace(str: string): boolean;

    /**
     * Checks if a string contains all letters.
     * @param {string} str string to check.
     * @return {boolean} True if {@code str} consists entirely of letters.
     */
    function isAlpha(str: string): boolean;

    /**
     * Checks if a string contains only numbers.
     * @param {*} str string to check. If not a string, it will be
     *     casted to one.
     * @return {boolean} True if {@code str} is numeric.
     */
    function isNumeric(str: any): boolean;

    /**
     * Checks if a string contains only numbers or letters.
     * @param {string} str string to check.
     * @return {boolean} True if {@code str} is alphanumeric.
     */
    function isAlphaNumeric(str: string): boolean;

    /**
     * Checks if a character is a space character.
     * @param {string} ch Character to check.
     * @return {boolean} True if {@code ch} is a space.
     */
    function isSpace(ch: string): boolean;

    /**
     * Checks if a character is a valid unicode character.
     * @param {string} ch Character to check.
     * @return {boolean} True if {@code ch} is a valid unicode character.
     */
    function isUnicodeChar(ch: string): boolean;

    /**
     * Takes a string and replaces newlines with a space. Multiple lines are
     * replaced with a single space.
     * @param {string} str The string from which to strip newlines.
     * @return {string} A copy of {@code str} stripped of newlines.
     */
    function stripNewlines(str: string): string;

    /**
     * Replaces Windows and Mac new lines with unix style: \r or \r\n with \n.
     * @param {string} str The string to in which to canonicalize newlines.
     * @return {string} {@code str} A copy of {@code} with canonicalized newlines.
     */
    function canonicalizeNewlines(str: string): string;

    /**
     * Normalizes whitespace in a string, replacing all whitespace chars with
     * a space.
     * @param {string} str The string in which to normalize whitespace.
     * @return {string} A copy of {@code str} with all whitespace normalized.
     */
    function normalizeWhitespace(str: string): string;

    /**
     * Normalizes spaces in a string, replacing all consecutive spaces and tabs
     * with a single space. Replaces non-breaking space with a space.
     * @param {string} str The string in which to normalize spaces.
     * @return {string} A copy of {@code str} with all consecutive spaces and tabs
     *    replaced with a single space.
     */
    function normalizeSpaces(str: string): string;

    /**
     * Removes the breaking spaces from the left and right of the string and
     * collapses the sequences of breaking spaces in the middle into single spaces.
     * The original and the result strings render the same way in HTML.
     * @param {string} str A string in which to collapse spaces.
     * @return {string} Copy of the string with normalized breaking spaces.
     */
    function collapseBreakingSpaces(str: string): string;

    /**
     * Trims white spaces to the left and right of a string.
     * @param {string} str The string to trim.
     * @return {string} A trimmed copy of {@code str}.
     */
    function trim(str: string): string;

    /**
     * Trims whitespaces at the left end of a string.
     * @param {string} str The string to left trim.
     * @return {string} A trimmed copy of {@code str}.
     */
    function trimLeft(str: string): string;

    /**
     * Trims whitespaces at the right end of a string.
     * @param {string} str The string to right trim.
     * @return {string} A trimmed copy of {@code str}.
     */
    function trimRight(str: string): string;

    /**
     * A string comparator that ignores case.
     * -1 = str1 less than str2
     *  0 = str1 equals str2
     *  1 = str1 greater than str2
     *
     * @param {string} str1 The string to compare.
     * @param {string} str2 The string to compare {@code str1} to.
     * @return {number} The comparator result, as described above.
     */
    function caseInsensitiveCompare(str1: string, str2: string): number;

    /**
     * String comparison function that handles numbers in a way humans might expect.
     * Using this function, the string "File 2.jpg" sorts before "File 10.jpg". The
     * comparison is mostly case-insensitive, though strings that are identical
     * except for case are sorted with the upper-case strings before lower-case.
     *
     * This comparison function is significantly slower (about 500x) than either
     * the default or the case-insensitive compare. It should not be used in
     * time-critical code, but should be fast enough to sort several hundred short
     * strings (like filenames) with a reasonable delay.
     *
     * @param {string} str1 The string to compare in a numerically sensitive way.
     * @param {string} str2 The string to compare {@code str1} to.
     * @return {number} less than 0 if str1 < str2, 0 if str1 == str2, greater than
     *     0 if str1 > str2.
     */
    function numerateCompare(str1: string, str2: string): number;

    /**
     * URL-encodes a string
     * @param {*} str The string to url-encode.
     * @return {string} An encoded copy of {@code str} that is safe for urls.
     *     Note that '#', ':', and other characters used to delimit portions
     *     of URLs *will* be encoded.
     */
    function urlEncode(str: any): string;

    /**
     * URL-decodes the string. We need to specially handle '+'s because
     * the javascript library doesn't convert them to spaces.
     * @param {string} str The string to url decode.
     * @return {string} The decoded {@code str}.
     */
    function urlDecode(str: string): string;

    /**
     * Converts \n to <br>s or <br />s.
     * @param {string} str The string in which to convert newlines.
     * @param {boolean=} opt_xml Whether to use XML compatible tags.
     * @return {string} A copy of {@code str} with converted newlines.
     */
    function newLineToBr(str: string, opt_xml?: boolean): string;

    /**
     * Escapes double quote '"' and single quote '\'' characters in addition to
     * '&', '<', and '>' so that a string can be included in an HTML tag attribute
     * value within double or single quotes.
     *
     * It should be noted that > doesn't need to be escaped for the HTML or XML to
     * be valid, but it has been decided to escape it for consistency with other
     * implementations.
     *
     * With goog.string.DETECT_DOUBLE_ESCAPING, this function escapes also the
     * lowercase letter "e".
     *
     * NOTE(user):
     * HtmlEscape is often called during the generation of large blocks of HTML.
     * Using statics for the regular expressions and strings is an optimization
     * that can more than half the amount of time IE spends in this function for
     * large apps, since strings and regexes both contribute to GC allocations.
     *
     * Testing for the presence of a character before escaping increases the number
     * of function calls, but actually provides a speed increase for the average
     * case -- since the average case often doesn't require the escaping of all 4
     * characters and indexOf() is much cheaper than replace().
     * The worst case does suffer slightly from the additional calls, therefore the
     * opt_isLikelyToContainHtmlChars option has been included for situations
     * where all 4 HTML entities are very likely to be present and need escaping.
     *
     * Some benchmarks (times tended to fluctuate +-0.05ms):
     *                                     FireFox                     IE6
     * (no chars / average (mix of cases) / all 4 chars)
     * no checks                     0.13 / 0.22 / 0.22         0.23 / 0.53 / 0.80
     * indexOf                       0.08 / 0.17 / 0.26         0.22 / 0.54 / 0.84
     * indexOf + re test             0.07 / 0.17 / 0.28         0.19 / 0.50 / 0.85
     *
     * An additional advantage of checking if replace actually needs to be called
     * is a reduction in the number of object allocations, so as the size of the
     * application grows the difference between the various methods would increase.
     *
     * @param {string} str string to be escaped.
     * @param {boolean=} opt_isLikelyToContainHtmlChars Don't perform a check to see
     *     if the character needs replacing - use this option if you expect each of
     *     the characters to appear often. Leave false if you expect few html
     *     characters to occur in your strings, such as if you are escaping HTML.
     * @return {string} An escaped copy of {@code str}.
     */
    function htmlEscape(str: string, opt_isLikelyToContainHtmlChars?: boolean): string;

    /**
     * Unescapes an HTML string.
     *
     * @param {string} str The string to unescape.
     * @return {string} An unescaped copy of {@code str}.
     */
    function unescapeEntities(str: string): string;

    /**
     * Unescapes a HTML string using the provided document.
     *
     * @param {string} str The string to unescape.
     * @param {!Document} document A document to use in escaping the string.
     * @return {string} An unescaped copy of {@code str}.
     */
    function unescapeEntitiesWithDocument(str: string, document: Document): string;

    /**
     * Do escaping of whitespace to preserve spatial formatting. We use character
     * entity #160 to make it safer for xml.
     * @param {string} str The string in which to escape whitespace.
     * @param {boolean=} opt_xml Whether to use XML compatible tags.
     * @return {string} An escaped copy of {@code str}.
     */
    function whitespaceEscape(str: string, opt_xml?: boolean): string;

    /**
     * Preserve spaces that would be otherwise collapsed in HTML by replacing them
     * with non-breaking space Unicode characters.
     * @param {string} str The string in which to preserve whitespace.
     * @return {string} A copy of {@code str} with preserved whitespace.
     */
    function preserveSpaces(str: string): string;

    /**
     * Strip quote characters around a string.  The second argument is a string of
     * characters to treat as quotes.  This can be a single character or a string of
     * multiple character and in that case each of those are treated as possible
     * quote characters. For example:
     *
     * <pre>
     * goog.string.stripQuotes('"abc"', '"`') --> 'abc'
     * goog.string.stripQuotes('`abc`', '"`') --> 'abc'
     * </pre>
     *
     * @param {string} str The string to strip.
     * @param {string} quoteChars The quote characters to strip.
     * @return {string} A copy of {@code str} without the quotes.
     */
    function stripQuotes(str: string, quoteChars: string): string;

    /**
     * Truncates a string to a certain length and adds '...' if necessary.  The
     * length also accounts for the ellipsis, so a maximum length of 10 and a string
     * 'Hello World!' produces 'Hello W...'.
     * @param {string} str The string to truncate.
     * @param {number} chars Max number of characters.
     * @param {boolean=} opt_protectEscapedCharacters Whether to protect escaped
     *     characters from being cut off in the middle.
     * @return {string} The truncated {@code str} string.
     */
    function truncate(str: string, chars: number, opt_protectEscapedCharacters?: boolean): string;

    /**
     * Truncate a string in the middle, adding "..." if necessary,
     * and favoring the beginning of the string.
     * @param {string} str The string to truncate the middle of.
     * @param {number} chars Max number of characters.
     * @param {boolean=} opt_protectEscapedCharacters Whether to protect escaped
     *     characters from being cutoff in the middle.
     * @param {number=} opt_trailingChars Optional number of trailing characters to
     *     leave at the end of the string, instead of truncating as close to the
     *     middle as possible.
     * @return {string} A truncated copy of {@code str}.
     */
    function truncateMiddle(str: string, chars: number, opt_protectEscapedCharacters?: boolean, opt_trailingChars?: number): string;

    /**
     * Encloses a string in double quotes and escapes characters so that the
     * string is a valid JS string.
     * @param {string} s The string to quote.
     * @return {string} A copy of {@code s} surrounded by double quotes.
     */
    function quote(s: string): string;

    /**
     * Takes a string and returns the escaped string for that character.
     * @param {string} str The string to escape.
     * @return {string} An escaped string representing {@code str}.
     */
    function escapeString(str: string): string;

    /**
     * Takes a character and returns the escaped string for that character. For
     * example escapeChar(String.fromCharCode(15)) -> "\\x0E".
     * @param {string} c The character to escape.
     * @return {string} An escaped string representing {@code c}.
     */
    function escapeChar(c: string): string;

    /**
     * Determines whether a string contains a substring.
     * @param {string} str The string to search.
     * @param {string} subString The substring to search for.
     * @return {boolean} Whether {@code str} contains {@code subString}.
     */
    function contains(str: string, subString: string): boolean;

    /**
     * Determines whether a string contains a substring, ignoring case.
     * @param {string} str The string to search.
     * @param {string} subString The substring to search for.
     * @return {boolean} Whether {@code str} contains {@code subString}.
     */
    function caseInsensitiveContains(str: string, subString: string): boolean;

    /**
     * Returns the non-overlapping occurrences of ss in s.
     * If either s or ss evalutes to false, then returns zero.
     * @param {string} s The string to look in.
     * @param {string} ss The string to look for.
     * @return {number} Number of occurrences of ss in s.
     */
    function countOf(s: string, ss: string): number;

    /**
     * Removes a substring of a specified length at a specific
     * index in a string.
     * @param {string} s The base string from which to remove.
     * @param {number} index The index at which to remove the substring.
     * @param {number} stringLength The length of the substring to remove.
     * @return {string} A copy of {@code s} with the substring removed or the full
     *     string if nothing is removed or the input is invalid.
     */
    function removeAt(s: string, index: number, stringLength: number): string;

    /**
     *  Removes the first occurrence of a substring from a string.
     *  @param {string} s The base string from which to remove.
     *  @param {string} ss The string to remove.
     *  @return {string} A copy of {@code s} with {@code ss} removed or the full
     *      string if nothing is removed.
     */
    function remove(s: string, ss: string): string;

    /**
     *  Removes all occurrences of a substring from a string.
     *  @param {string} s The base string from which to remove.
     *  @param {string} ss The string to remove.
     *  @return {string} A copy of {@code s} with {@code ss} removed or the full
     *      string if nothing is removed.
     */
    function removeAll(s: string, ss: string): string;

    /**
     * Escapes characters in the string that are not safe to use in a RegExp.
     * @param {*} s The string to escape. If not a string, it will be casted
     *     to one.
     * @return {string} A RegExp safe, escaped copy of {@code s}.
     */
    function regExpEscape(s: any): string;

    /**
     * Repeats a string n times.
     * @param {string} string The string to repeat.
     * @param {number} length The number of times to repeat.
     * @return {string} A string containing {@code length} repetitions of
     *     {@code string}.
     */
    function repeat(string: string, length: number): string;

    /**
     * Pads number to given length and optionally rounds it to a given precision.
     * For example:
     * <pre>padNumber(1.25, 2, 3) -> '01.250'
     * padNumber(1.25, 2) -> '01.25'
     * padNumber(1.25, 2, 1) -> '01.3'
     * padNumber(1.25, 0) -> '1.25'</pre>
     *
     * @param {number} num The number to pad.
     * @param {number} length The desired length.
     * @param {number=} opt_precision The desired precision.
     * @return {string} {@code num} as a string with the given options.
     */
    function padNumber(num: number, length: number, opt_precision?: number): string;

    /**
     * Returns a string representation of the given object, with
     * null and undefined being returned as the empty string.
     *
     * @param {*} obj The object to convert.
     * @return {string} A string representation of the {@code obj}.
     */
    function makeSafe(obj: any): string;

    /**
     * Concatenates string expressions. This is useful
     * since some browsers are very inefficient when it comes to using plus to
     * concat strings. Be careful when using null and undefined here since
     * these will not be included in the result. If you need to represent these
     * be sure to cast the argument to a String first.
     * For example:
     * <pre>buildString('a', 'b', 'c', 'd') -> 'abcd'
     * buildString(null, undefined) -> ''
     * </pre>
     * @param {...*} var_args A list of strings to concatenate. If not a string,
     *     it will be casted to one.
     * @return {string} The concatenation of {@code var_args}.
     */
    function buildString(...var_args: any[]): string;

    /**
     * Returns a string with at least 64-bits of randomness.
     *
     * Doesn't trust Javascript's random function entirely. Uses a combination of
     * random and current timestamp, and then encodes the string in base-36 to
     * make it shorter.
     *
     * @return {string} A random string, e.g. sn1s7vb4gcic.
     */
    function getRandomString(): string;

    /**
     * Compares two version numbers.
     *
     * @param {string|number} version1 Version of first item.
     * @param {string|number} version2 Version of second item.
     *
     * @return {number}  1 if {@code version1} is higher.
     *                   0 if arguments are equal.
     *                  -1 if {@code version2} is higher.
     */
    function compareVersions(version1: string|number, version2: string|number): number;

    /**
     * String hash function similar to java.lang.String.hashCode().
     * The hash code for a string is computed as
     * s[0] * 31 ^ (n - 1) + s[1] * 31 ^ (n - 2) + ... + s[n - 1],
     * where s[i] is the ith character of the string and n is the length of
     * the string. We mod the result to make it between 0 (inclusive) and 2^32
     * (exclusive).
     * @param {string} str A string.
     * @return {number} Hash value for {@code str}, between 0 (inclusive) and 2^32
     *  (exclusive). The empty string returns 0.
     */
    function hashCode(str: string): number;

    /**
     * Generates and returns a string which is unique in the current document.
     * This is useful, for example, to create unique IDs for DOM elements.
     * @return {string} A unique id.
     */
    function createUniqueString(): string;

    /**
     * Converts the supplied string to a number, which may be Infinity or NaN.
     * This function strips whitespace: (toNumber(' 123') === 123)
     * This function accepts scientific notation: (toNumber('1e1') === 10)
     *
     * This is better than Javascript's built-in conversions because, sadly:
     *     (Number(' ') === 0) and (parseFloat('123a') === 123)
     *
     * @param {string} str The string to convert.
     * @return {number} The number the supplied string represents, or NaN.
     */
    function toNumber(str: string): number;

    /**
     * Returns whether the given string is lower camel case (e.g. "isFooBar").
     *
     * Note that this assumes the string is entirely letters.
     * @see http://en.wikipedia.org/wiki/CamelCase#Variations_and_synonyms
     *
     * @param {string} str String to test.
     * @return {boolean} Whether the string is lower camel case.
     */
    function isLowerCamelCase(str: string): boolean;

    /**
     * Returns whether the given string is upper camel case (e.g. "FooBarBaz").
     *
     * Note that this assumes the string is entirely letters.
     * @see http://en.wikipedia.org/wiki/CamelCase#Variations_and_synonyms
     *
     * @param {string} str String to test.
     * @return {boolean} Whether the string is upper camel case.
     */
    function isUpperCamelCase(str: string): boolean;

    /**
     * Converts a string from selector-case to camelCase (e.g. from
     * "multi-part-string" to "multiPartString"), useful for converting
     * CSS selectors and HTML dataset keys to their equivalent JS properties.
     * @param {string} str The string in selector-case form.
     * @return {string} The string in camelCase form.
     */
    function toCamelCase(str: string): string;

    /**
     * Converts a string from camelCase to selector-case (e.g. from
     * "multiPartString" to "multi-part-string"), useful for converting JS
     * style and dataset properties to equivalent CSS selectors and HTML keys.
     * @param {string} str The string in camelCase form.
     * @return {string} The string in selector-case form.
     */
    function toSelectorCase(str: string): string;

    /**
     * Converts a string into TitleCase. First character of the string is always
     * capitalized in addition to the first letter of every subsequent word.
     * Words are delimited by one or more whitespaces by default. Custom delimiters
     * can optionally be specified to replace the default, which doesn't preserve
     * whitespace delimiters and instead must be explicitly included if needed.
     *
     * Default delimiter => " ":
     *    goog.string.toTitleCase('oneTwoThree')    => 'OneTwoThree'
     *    goog.string.toTitleCase('one two three')  => 'One Two Three'
     *    goog.string.toTitleCase('  one   two   ') => '  One   Two   '
     *    goog.string.toTitleCase('one_two_three')  => 'One_two_three'
     *    goog.string.toTitleCase('one-two-three')  => 'One-two-three'
     *
     * Custom delimiter => "_-.":
     *    goog.string.toTitleCase('oneTwoThree', '_-.')       => 'OneTwoThree'
     *    goog.string.toTitleCase('one two three', '_-.')     => 'One two three'
     *    goog.string.toTitleCase('  one   two   ', '_-.')    => '  one   two   '
     *    goog.string.toTitleCase('one_two_three', '_-.')     => 'One_Two_Three'
     *    goog.string.toTitleCase('one-two-three', '_-.')     => 'One-Two-Three'
     *    goog.string.toTitleCase('one...two...three', '_-.') => 'One...Two...Three'
     *    goog.string.toTitleCase('one. two. three', '_-.')   => 'One. two. three'
     *    goog.string.toTitleCase('one-two.three', '_-.')     => 'One-Two.Three'
     *
     * @param {string} str String value in camelCase form.
     * @param {string=} opt_delimiters Custom delimiter character set used to
     *      distinguish words in the string value. Each character represents a
     *      single delimiter. When provided, default whitespace delimiter is
     *      overridden and must be explicitly included if needed.
     * @return {string} String value in TitleCase form.
     */
    function toTitleCase(str: string, opt_delimiters?: string): string;

    /**
     * Capitalizes a string, i.e. converts the first letter to uppercase
     * and all other letters to lowercase, e.g.:
     *
     * goog.string.capitalize('one')     => 'One'
     * goog.string.capitalize('ONE')     => 'One'
     * goog.string.capitalize('one two') => 'One two'
     *
     * Note that this function does not trim initial whitespace.
     *
     * @param {string} str String value to capitalize.
     * @return {string} String value with first letter in uppercase.
     */
    function capitalize(str: string): string;

    /**
     * Parse a string in decimal or hexidecimal ('0xFFFF') form.
     *
     * To parse a particular radix, please use parseInt(string, radix) directly. See
     * https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/parseInt
     *
     * This is a wrapper for the built-in parseInt function that will only parse
     * numbers as base 10 or base 16.  Some JS implementations assume strings
     * starting with "0" are intended to be octal. ES3 allowed but discouraged
     * this behavior. ES5 forbids it.  This function emulates the ES5 behavior.
     *
     * For more information, see Mozilla JS Reference: http://goo.gl/8RiFj
     *
     * @param {string|number|null|undefined} value The value to be parsed.
     * @return {number} The number, parsed. If the string failed to parse, this
     *     will be NaN.
     */
    function parseInt(value: string|number|void|void): number;

    /**
     * Splits a string on a separator a limited number of times.
     *
     * This implementation is more similar to Python or Java, where the limit
     * parameter specifies the maximum number of splits rather than truncating
     * the number of results.
     *
     * See http://docs.python.org/2/library/stdtypes.html#str.split
     * See JavaDoc: http://goo.gl/F2AsY
     * See Mozilla reference: http://goo.gl/dZdZs
     *
     * @param {string} str String to split.
     * @param {string} separator The separator.
     * @param {number} limit The limit to the number of splits. The resulting array
     *     will have a maximum length of limit+1.  Negative numbers are the same
     *     as zero.
     * @return {!Array<string>} The string, split.
     */
    function splitLimit(str: string, separator: string, limit: number): Array<string>;

    /**
     * Computes the Levenshtein edit distance between two strings.
     * @param {string} a
     * @param {string} b
     * @return {number} The edit distance between the two strings.
     */
    function editDistance(a: string, b: string): number;
}
