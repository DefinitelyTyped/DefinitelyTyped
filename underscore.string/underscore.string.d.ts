// Type definitions for underscore.string
// Project: https://github.com/epeli/underscore.string
// Definitions by: Ry Racherbaumer <http://github.com/rygine>
// Definitions: https://github.com/borisyankov/DefinitelyTyped

declare module 'underscore.string' {

    /**
     * Determine if a string is 'blank.'
     * @param str
     */
    function isBlank(str: string): boolean;

    /**
     * Removes all html tags from string.
     * @param str
     */
    function stripTags(str: string): string;

    /**
     * Converts first letter of the string to uppercase.
     * ('foo Bar') => 'Foo Bar'
     * @param str
     */
    function capitalize(str: string): string;

    /**
     * Chop a string into pieces.
     * ('whitespace', 3) => ['whi','tes','pac','e']
     * @param str String to chop
     * @param step Size of the pieces
     */
    function chop(str: string, step: number): Array;

    /**
     * Compress some whitespaces to one.
     * (' foo    bar   ') => 'foo bar'
     * @param str
     */
    function clean(str: string): string;

    /**
     * Count occurences of a sub string.
     * ('Hello world', 'l') => 3
     * @param str
     * @param substr
     */
    function count(str: string, substr: string): number;

    /**
     * Convert string to an array of characters.
     * ('Hello') => ['H','e','l','l','o']
     * @param str
     */
    function chars(str: string): Array;

    /**
     * Returns a copy of the string in which all the case-based characters have had their case swapped.
     * ('hELLO') => 'Hello'
     * @param str
     */
    function swapCase(str: string): string;

    /**
     * Converts HTML special characters to their entity equivalents.
     * ('<div>Blah blah blah</div>') => '&lt;div&gt;Blah blah blah&lt;/div&gt;'
     * @param str
     */
    function escapeHTML(str: string): string;

    /**
     * Converts entity characters to HTML equivalents.
     * ('&lt;div&gt;Blah blah blah&lt;/div&gt;') => '<div>Blah blah blah</div>'
     * @param str
     */
    function unescapeHTML(str: string): string;

    /**
     * Escape a string for use in a regular expression.
     * @param str
     */
    function escapeRegExp(str: string): string;

    /**
     * Splice a string like an array.
     * @param str
     * @param i
     * @param howmany
     * @param substr
     */
    function splice(str: string, i: number, howmany: number, substr?: string): string;

    /**
     * Insert a string at index.
     * @param str
     * @param i
     * @param substr
     */
    function insert(str: string, i: number, substr: string): string;

    /**
     * Tests if string contains a substring.
     * ('foobar', 'ob') => true
     * @param str
     * @param needle
     */
    function include(str: string, needle: string): boolean;

    /**
     * Tests if string contains a substring.
     * ('foobar', 'ob') => true
     * @param str
     * @param needle
     */
    function contains(str: string, needle: string): boolean;

    /**
     * Joins strings together with given separator.
     * (' ', 'foo', 'bar') => 'foo bar'
     * @param separator
     * @param args
     */
    function join(separator: string, ...args: string[]): string;

    /**
     * Split string by newlines character.
     * ('Hello\nWorld') => ['Hello', 'World']
     * @param str
     */
    function lines(str: string): Array;

    /**
     * Return reversed string.
     * ('foobar') => 'raboof'
     * @param str
     */
    function reverse(str: string): string;

    /**
     * Checks if string starts with another string.
     * ('image.gif', 'image') => true
     * @param str
     * @param starts
     */
    function startsWith(str: string, starts: string): boolean;

    /**
     * Checks if string ends with another string.
     * ('image.gif', 'gif') => true
     * @param value
     * @param starts
     */
    function endsWith(value: string, starts: string): boolean;

    /**
     * Returns the successor to passed string.
     * ('a') => 'b'
     * @param str
     */
    function succ(str: string): string;

    /**
     * Capitalize first letter of every word in the string.
     * ('my name is epeli') => 'My Name Is Epeli'
     * @param str
     */
    function titleize(str: string): string;

    /**
     * Converts underscored or dasherized string to a camelized one.
     * ('-moz-transform') => 'MozTransform'
     * @param str
     */
    function camelize(str: string): string;

    /**
     * Converts a camelized or dasherized string into an underscored one.
     * ('MozTransform') => 'moz_transform'
     * @param str
     */
    function underscored(str: string): string;

    /**
     * Converts a underscored or camelized string into an dasherized one.
     * ('MozTransform') => '-moz-transform'
     * @param str
     */
    function dasherize(str: string): string;

    /**
     * Converts string to camelized class name.
     * ('some_class_name') => 'SomeClassName'
     * @param str
     */
    function classify(str: string): string;

    /**
     * Converts an underscored, camelized, or dasherized string into a humanized one.
     * Also removes beginning and ending whitespace, and removes the postfix '_id'.
     * ('  capitalize dash-CamelCase_underscore trim  ') => 'Capitalize dash camel case underscore trim'
     * @param str
     */
    function humanize(str: string): string;

    /**
     * Trims defined characters from begining and ending of the string.
     * Defaults to whitespace characters.
     * ('  foobar   ') => 'foobar'
     * ('_-foobar-_', '_-') => 'foobar'
     * @param str
     * @param characters
     */
    function trim(str: string, characters?: string): string;

    /**
     * Trims defined characters from begining and ending of the string.
     * Defaults to whitespace characters.
     * ('  foobar   ') => 'foobar'
     * ('_-foobar-_', '_-') => 'foobar'
     * @param str
     * @param characters
     */
    function strip(str: string, characters?: string): string;

    /**
     * Left trim. Similar to trim, but only for left side.
     * @param str
     * @param characters
     */
    function ltrim(str: string, characters?: string): string;

    /**
     * Left trim. Similar to trim, but only for left side.
     * @param str
     * @param characters
     */
    function lstrip(str: string, characters?: string): string;

    /**
     * Right trim. Similar to trim, but only for right side.
     * @param str
     * @param characters
     */
    function rtrim(str: string, characters?: string): string;

    /**
     * Right trim. Similar to trim, but only for right side.
     * @param str
     * @param characters
     */
    function rstrip(str: string, characters?: string): string;

    /**
     * Truncate string to specified length.
     * ('Hello world').truncate(5) => 'Hello...'
     * ('Hello').truncate(10) => 'Hello'
     * @param str
     * @param length
     * @param truncateStr
     */
    function truncate(str: string, length: number, truncateStr?: string): string;

    /**
     * Elegant version of truncate.
     * Makes sure the pruned string does not exceed the original length.
     * Avoid half-chopped words when truncating.
     * ('Hello, cruel world', 15) => 'Hello, cruel...'
     * @param str
     * @param length
     * @param pruneStr
     */
    function prune(str: string, length: number, pruneStr?: string): string;

    /**
     * Split string by delimiter (String or RegExp).
     * /\s+/ by default.
     * ('   I   love   you   ') => ['I','love','you']
     * ('I_love_you', '_') => ['I','love','you']
     * @param str
     * @param delimiter
     */
    function words(str: string, delimiter?: string): Array;

    /**
     * Pads a string with characters until the total string length is equal to the passed length parameter.
     * By default, pads on the left with the space char (' ').
     * padStr is truncated to a single character if necessary.
     * ('1', 8) => '       1'
     * ('1', 8, '0') => '00000001'
     * ('1', 8, '0', 'right') => '10000000'
     * ('1', 8, '0', 'both') => '00001000'
     * ('1', 8, 'bleepblorp', 'both') => 'bbbb1bbb'
     * @param str
     * @param length
     * @param padStr
     * @param type
     */
    function pad(str: string, length: number, padStr?:string, type?: string): string;

    /**
     * Left-pad a string.
     * Alias for pad(str, length, padStr, 'left')
     * ('1', 8, '0') => '00000001'
     * @param str
     * @param length
     * @param padStr
     */
    function lpad(str: string, length: number, padStr?: string): string;

    /**
     * Left-pad a string.
     * Alias for pad(str, length, padStr, 'left')
     * ('1', 8, '0') => '00000001'
     * @param str
     * @param length
     * @param padStr
     */
    function rjust(str: string, length: number, padStr?: string): string;

    /**
     * Right-pad a string.
     * Alias for pad(str, length, padStr, 'right')
     * ('1', 8, '0') => '10000000'
     * @param str
     * @param length
     * @param padStr
     */
    function rpad(str: string, length: number, padStr?: string): string;

    /**
     * Right-pad a string.
     * Alias for pad(str, length, padStr, 'right')
     * ('1', 8, '0') => '10000000'
     * @param str
     * @param length
     * @param padStr
     */
    function ljust(str: string, length: number, padStr?: string): string;

    /**
     * Left/right-pad a string.
     * Alias for pad(str, length, padStr, 'both')
     * ('1', 8, '0') => '00001000'
     * @param str
     * @param length
     * @param padStr
     */
    function lrpad(str: string, length: number, padStr?: string): string;

    /**
     * Left/right-pad a string.
     * Alias for pad(str, length, padStr, 'both')
     * ('1', 8, '0') => '00001000'
     * @param str
     * @param length
     * @param padStr
     */
    function center(str: string, length: number, padStr?: string): string;

    function sprintf(format: string, ...args: any[]): string;

    function vsprintf(fmt: string, ...argv: any[]): string;

    /**
     * Parse string to number.
     * Returns NaN if string can't be parsed to number.
     * ('2.556').toNumber() => 3
     * ('2.556').toNumber(1) => 2.6
     * @param str
     * @param decimals
     */
    function toNumber(str: string, decimals?: number): number;

    function numberFormat(number: number, dec?: number, dsep?: string, tsep?: string): string;

    /**
     * Searches a string from left to right for a pattern.
     * Returns a substring consisting of the characters in the string that are to the right of the pattern.
     * If no match found, returns entire string.
     * ('This_is_a_test_string').strRight('_') => 'is_a_test_string'
     * @param str
     * @param sep
     */
    function strRight(str: string, sep: string): string;

    /**
     * Searches a string from right to left for a pattern.
     * Returns a substring consisting of the characters in the string that are to the right of the pattern.
     * If no match found, returns entire string.
     * ('This_is_a_test_string').strRightBack('_') => 'string'
     * @param str
     * @param sep
     */
    function strRightBack(str: string, sep: string): string;

    /**
     * Searches a string from left to right for a pattern.
     * Returns a substring consisting of the characters in the string that are to the left of the pattern.
     * If no match found, returns entire string.
     * ('This_is_a_test_string').strLeft('_') => 'This'
     * @param str
     * @param sep
     */
    function strLeft(str: string, sep: string): string;

    /**
     * Searches a string from right to left for a pattern.
     * Returns a substring consisting of the characters in the string that are to the left of the pattern.
     * If no match found, returns entire string.
     * ('This_is_a_test_string').strLeftBack('_') => 'This_is_a_test'
     * @param str
     * @param sep
     */
    function strLeftBack(str: string, sep: string): string;

    /**
     * Join an array into a human readable sentence.
     * (['jQuery', 'Mootools', 'Prototype']) => 'jQuery, Mootools and Prototype'
     * (['jQuery', 'Mootools', 'Prototype'], ', ', ' unt ') => 'jQuery, Mootools unt Prototype'
     * @param array
     * @param separator
     * @param lastSeparator
     * @param serial
     */
    function toSentence(array: Array, separator?: string, lastSeparator?: string, serial?: boolean): string;

    /**
     * The same as toSentence, but uses ', ' as default for lastSeparator.
     * @param array
     * @param separator
     * @param lastSeparator
     */
    function toSentenceSerial(array: Array, separator?: string, lastSeparator?: string): string;

    /**
     * Transform text into a URL slug. Replaces whitespaces, accentuated, and special characters with a dash.
     * ('Un éléphant à l'orée du bois') => 'un-elephant-a-loree-du-bois'
     * @param str
     */
    function slugify(str: string): string;

    /**
     * Surround a string with another string.
     * ('foo', 'ab') => 'abfooab'
     * @param str
     * @param wrapper
     */
    function surround(str: string, wrapper: string): string;

    /**
     * Quotes a string.
     * quoteChar defaults to "
     * ('foo') => '"foo"'
     * @param str
     */
    function quote(str: string, quoteChar?: string): string;

    /**
     * Quotes a string.
     * quoteChar defaults to "
     * ('foo') => '"foo"'
     * @param str
     */
    function q(str: string, quoteChar?: string): string;

    /**
     * Unquotes a string.
     * quoteChar defaults to "
     * ('"foo"') => 'foo'
     * ("'foo'", "'") => 'foo'
     * @param str
     */
    function unquote(str: string, quoteChar?: string): string;

    /**
     * Repeat a string with an optional separator.
     * ('foo', 3) => 'foofoofoo'
     * ('foo', 3, 'bar') => 'foobarfoobarfoo'
     * @param value
     * @param count
     * @param separator
     */
    function repeat(value: string, count: number, separator?:string): string;

    /**
     * Naturally sort strings like humans would do.
     * Caution: this function is charset dependent.
     * @param str1
     * @param str2
     */
    function naturalCmp(str1: string, str2: string): number;

    /**
     * Calculates Levenshtein distance between two strings.
     * ('kitten', 'kittah') => 2
     * @param str1
     * @param str2
     */
    function levenshtein(str1: string, str2: string): number;

    /**
     * Turn strings that can be commonly considered as booleans to real booleans.
     * Such as "true", "false", "1" and "0". This function is case insensitive.
     * ('true') => true
     * ('FALSE') => false
     * ('random') => undefined
     * ('truthy', ['truthy'], ['falsy']) => true
     * ('true only at start', [/^true/]) => true
     * @param str
     * @param trueValues
     * @param falseValues
     */
    function toBoolean(str: string, trueValues?: Array, falseValues?: Array): boolean;

}
