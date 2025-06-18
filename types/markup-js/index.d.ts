export as namespace Mark;

/**
 * Templates to be included in other templates.
 * @see {@link https://github.com/adammark/Markup.js#includes}
 * @default {}
 * @example
 *     Mark.includes.greeting = "My name is {{name|upcase}}!";
 *
 *     var template = "Hello! {{greeting}}";
 *
 *     var result = Mark.up(template, context);
 *     // "Hello! My name is JOHN DOE!"
 * @example
 *     Mark.includes.status = function () {
 *         return "You are here: " + location.href;
 *     };
 *
 *     var template = "Welcome! {{status}}";
 *
 *     var result = Mark.up(template, context);
 *     // "Welcome! You are here: http://www.example.com/"
 */
export var includes: {
    [name: string]: string | (() => string);
};

/**
 * Global variables, by name. Global variables take precedence over context variables.
 * @see {@link https://github.com/adammark/Markup.js#global-variables}
 * @default {}
 * @example
 *     Mark.globals.img_width = 200;
 *
 *     var template = "{{images}} <img width='{{img_width}}'/> {{/images}}";
 */
export var globals: object;

/**
 * The delimiter to use in pipe expressions.
 * @default >
 * @see {@link https://github.com/adammark/Markup.js#changing-the-argument-delimiter}
 * @example
 *     Mark.delimiter = ":";
 */
export var delimiter: string;

/**
 * Collapse white space between HTML elements in the resulting string.
 * @default false
 * @see {@link https://github.com/adammark/Markup.js#white-space}
 * @example
 *     Mark.compact = true;
 */
export var compact: boolean;

/**
 * Options are choices and changes to template rendering defaults.
 */
export interface Options {
    /**
     * Custom pipes can transform variables using functions.
     * @see {@link https://github.com/adammark/Markup.js#pipes}
     * @example
     *     var options = {
     *         pipes: {
     *             mypipe: function (str) { ... }
     *         }
     *     };
     *
     *     var template = "Name: {{name|mypipe}}";
     *
     *     var result = Mark.up(template, context, options);
     */
    pipes?: {
        [key: string]: (input: any, ...args: string[]) => any;
    };

    /**
     * Templates to be included in other templates.
     * @see {@link https://github.com/adammark/Markup.js#includes}
     * @example
     *     var options = {
     *         includes: {
     *             header: "<div> ... </div>",
     *             footer: "<div> ... </div>"
     *             status: function () {
     *                 return "You are here: " + location.href;
     *             }
     *         }
     *     };
     *
     *     var result = Mark.up(template, context, options);
     */
    includes?: {
        [name: string]: string | (() => string);
    };

    /**
     * Global variables, by name. Global variables take precedence over context variables.
     * @see {@link https://github.com/adammark/Markup.js#global-variables}
     * @example
     *     var options = {
     *         globals: {
     *             img_width: 200,
     *             img_height: 300
     *         }
     *     };
     *
     *     var result = Mark.up(template, context, options);
     */
    globals?: object;

    /**
     * The delimiter to use in pipe expressions.
     * @see {@link https://github.com/adammark/Markup.js#changing-the-argument-delimiter}
     * @example
     *     var options = {
     *         delimiter: ":"
     *     };
     *
     *     var result = Mark.up(template, context, options);
     */
    delimiter?: string;

    /**
     * Collapse white space between HTML elements in the resulting string.
     * @see {@link https://github.com/adammark/Markup.js#white-space}
     * @example
     *     var options = {
     *         compact: true
     *     };
     *
     *     var result = Mark.up(template, context, options);
     */
    compact?: boolean;
}

/**
 * Pipes offer a powerful way to transform variables using functions.
 * @see {@link https://github.com/adammark/Markup.js#pipes}
 */
export var pipes: {
    /**
     * Test for an empty array, empty string, null, undefined, or 0.
     * @param obj - The object being tested.
     * @returns The value of `obj` when the condition is true, and false otherwise.
     * @see {@link https://github.com/adammark/Markup.js#pipes}
     * @example {{if apples|empty}}
     */
    empty: <T>(obj: T) => T | false;

    /**
     * Test for the presence of a value.
     * @param obj - The object being tested.
     * @returns The value of `obj` when the condition is true, and false otherwise.
     * @see {@link https://github.com/adammark/Markup.js#pipes}
     * @example {{if apples|notempty}}
     */
    notempty: <T>(obj: T) => T | false;

    /**
     * Test if a number, iterator, or array is greater than n.
     * @param a - The number, iterator, or array.
     * @param b - The value of comparison.
     * @returns The value of `a` when the condition is true, and false otherwise.
     * @see {@link https://github.com/adammark/Markup.js#pipes}
     * @example {{if articles|more>100}}
     * @example {{if #|more>10}}
     */
    more: <T>(a: T, b: number) => T | false;

    /**
     * Test if a number, iterator, or array is greater than n.
     * @param a - The number, iterator, or array.
     * @param b - The value of comparison.
     * @returns The value of `a` when the condition is true, and false otherwise.
     * @see {@link https://github.com/adammark/Markup.js#pipes}
     * @example {if age|less>21}}
     */
    less: <T>(a: T, b: number) => T | false;

    /**
     * Test if a number, iterator, or array is greater than or equal to n.
     * @param a - The number, iterator, or array.
     * @param b - The value of n.
     * @returns The value of `a` when the condition is true, and false otherwise.
     * @example {{if age|ormore>18}}
     * @see {@link https://github.com/adammark/Markup.js#pipes}
     */
    ormore: <T>(a: T, b: number) => T | false;

    /**
     * Test if a number, iterator, or array is less than or equal to n.
     * @param a - The number, iterator, or array.
     * @param b - The value of n.
     * @returns The value of `a` when the condition is true, and false otherwise.
     * @example {{if age|orless>55}}
     * @see {@link https://github.com/adammark/Markup.js#pipes}
     */
    orless: <T>(a: T, b: number) => T | false;

    /**
     * Test if a number, iterator, or array is between n1 and n2, inclusive.
     * @param a - The number, iterator, or array.
     * @param b - The value of n1.
     * @param c - The value of n2.
     * @returns The value of `a` when the condition is true, and false otherwise.
     * @example {{if age|between>18>35}}
     * @see {@link https://github.com/adammark/Markup.js#pipes}
     */
    between: <T>(a: T, b: number, c: number) => T | false;

    /**
     * Test for equality (==).
     * @param a - The value to compare to.
     * @param b - The value being compared.
     * @returns The value of `a` when the condition is true, and false otherwise.
     * @example {{if name|equals>Adam}}
     * @example {{if age|equals>35}}
     * @see {@link https://github.com/adammark/Markup.js#pipes}
     */
    equals: <T>(a: T, b: any) => T | false;

    /**
     * Test for inequality (!=).
     * @param a - The value to compare to.
     * @param b - The value being compared.
     * @returns The value of `a` when the condition is true, and false otherwise.
     * @example {{if name|notequals>Adam}}
     * @see {@link https://github.com/adammark/Markup.js#pipes}
     */
    notequals: <T>(a: T, b: any) => T | false;

    /**
     * Test for a pattern match (case-insensitive).
     * @param str - The string that might have a pattern.
     * @param pattern - The pattern to search for.
     * @returns The value of `str` when the condition is true, and false otherwise.
     * @example {{if name|like>Adam}}
     * @example {{if name|like>a.*}}
     * @see {@link https://github.com/adammark/Markup.js#pipes}
     */
    like: (str: string, pattern: RegExp | string) => string | false;

    /**
     * Test for a non-match (case-insensitive).
     * @param str - The string that might have a pattern.
     * @param pattern - The pattern to search for.
     * @returns The value of `str` when the condition is true, and false otherwise.
     * @example {{if name|notlike>Adam}}
     * @see {@link https://github.com/adammark/Markup.js#pipes}
     */
    notlike: (str: string, pattern: RegExp | string) => string | false;

    /**
     * Display a default value instead of missing input values.
     * @param str - The value to display if it exists.
     * @param val - The default fallback string.
     * @returns The existing value of `str` or the default `val` value.
     * @see {@link https://github.com/adammark/Markup.js#pipes}
     * @example {{title|blank>Untitled}}
     */
    blank: <T>(str: T, val: string) => T | string;

    /**
     * Upper-case a string.
     * @param str - The string to uppercase.
     * @returns The uppercased `str` value.
     * @see {@link https://github.com/adammark/Markup.js#pipes}
     * @example {{name|upcase}}
     */
    upcase: (str: string) => string;

    /**
     * Lower-case a string.
     * @param str - The string to lowercase.
     * @returns The lowercased `str` value.
     * @see {@link https://github.com/adammark/Markup.js#pipes}
     * @example {{name|downcase}}
     */
    downcase: (str: string) => string;

    /**
     * Capitalize the first letter in each word.
     * @param str - The string to capitalcase.
     * @returns The capitalcased `str` value.
     * @see {@link https://github.com/adammark/Markup.js#pipes}
     * @example {{title|capcase}}
     */
    capcase: (str: string) => string;

    /**
     * Chop a string to n chars followed by "..." if n < string length.
     * @param str - The string to chop.
     * @param n - The maximum number of characters.
     * @returns The chopped `str` value.
     * @see {@link https://github.com/adammark/Markup.js#pipes}
     * @example {{description|chop>100}}
     */
    chop: (str: string, n: number) => string;

    /**
     * Chop a string to n words followed by "..." if n < word count.
     * @param str - The string to tease.
     * @param n - The maximum number of words.
     * @returns The teased `str` value.
     * @see {@link https://github.com/adammark/Markup.js#pipes}
     * @example `{{summary|tease>15}}`
     */
    tease: (str: string, n: number) => string;

    /**
     * Trim leading and trailing white space from a string.
     * @param str - The string to trim.
     * @returns The trimmed `str` value.
     * @example {{article|trim}}
     */
    trim: (str: string) => string;

    /**
     * Trim and normalize white space in a string.
     * @param str - The string to pack.
     * @returns The packed `str` value.
     * @see {@link https://github.com/adammark/Markup.js#pipes}
     * @example {{article|pack}}
     */
    pack: (str: string) => string;

    /**
     * Round a number.
     * @param num - The number to round.
     * @returns A number rounded to the nearest integer.
     * @see {@link https://github.com/adammark/Markup.js#pipes}
     * @example {{age|round}}
     */
    round: (num: number) => number;

    /**
     * Strip HTML/XML tags from a string.
     * @param str - The string to remove tags from.
     * @returns A string without HTML/XML tags.
     * @see {@link https://github.com/adammark/Markup.js#pipes}
     * @example {{article|clean}}
     */
    clean: (str: string) => string;

    /**
     * Get the length of an array, string, or iterator.
     * @param obj - The value to gather the length of.
     * @returns The length of the `obj` value.
     * @see {@link https://github.com/adammark/Markup.js#pipes}
     * @example {{apples|length}}
     * @example {{#|length}}
     */
    length: (obj: any) => number;

    /**
     * Get the size of an array, string, or iterator. Alias of length.
     * @param obj - The value to gather the size of.
     * @returns The size of the `obj` value.
     * @see {@link https://github.com/adammark/Markup.js#pipes}
     * @example {{apples|size}}
     * @example {{#|size}}
     */
    size: (obj: any) => number;

    /**
     * Reverse an array. The source array is not modified.
     * @param arr - The array to reverse.
     * @returns The reversed array.
     * @see {@link https://github.com/adammark/Markup.js#pipes}
     * @example {{articles|reverse}} ... {{/articles}}
     */
    reverse: <T>(arr: readonly T[]) => T[];

    /**
     * Join an array with "," or with the given token.
     * @param arr - The array to join.
     * @param separator - The token to join with. Defaults to ",".
     * @returns The joined array.
     * @see {@link https://github.com/adammark/Markup.js#pipes}
     * @example {{names|join> + }}
     */
    join: (arr: readonly any[], separator?: string) => string;

    /**
     * Limit an array to count items beginning at index idx.
     * @param arr - The array continaing items to limit.
     * @param count - The number of items to limit.
     * @param idx - The index to start at. Defaults to 0.
     * @returns The array with a limited count of values.
     * @see {@link https://github.com/adammark/Markup.js#pipes}
     * @example {{contacts|limit>10}} ... {{/contacts}}
     */
    limit: <T>(arr: readonly T[], count: number, idx?: number) => T[];

    /**
     * Split a string on "," or by the given token.
     * @param str - The string to split.
     * @param separator - The token to split on. Defaults to ",".
     * @returns The now split strings.
     * @see {@link https://github.com/adammark/Markup.js#pipes}
     * @example {{names|split>;}} {{.}} {{/names}}
     */
    split: (str: string, separator?: string) => string[];

    /**
     * Output one value if truthy, another if falsy.
     * @param bool - The truthy value for comparison.
     * @param iffy - A value for true `bool`.
     * @param elsy - A value for false `bool`. Defaults to the emtpy string.
     * @returns The value matching the `bool` conditional.
     * @see {@link https://github.com/adammark/Markup.js#pipes}
     * @example {{user.passed|choose>Pass>Fail}}
     */
    choose: (bool: boolean, iffy: string, elsy?: string) => string;

    /**
     * Switch one string value for another.
     * @param obj - The incoming value to compare.
     * @param csv1 - Comma separated keys to match.
     * @param csv2 - Comma separated values to map.
     * @param str - Optional fallback value if no matches are found.
     * @returns The switched `csv2` value matching the `obj` key.
     * @see {@link https://github.com/adammark/Markup.js#pipes}
     * @example {{gender|toggle>M,F>Boy,Girl>N/A}}
     */
    toggle: (obj: string | number, csv1: string, csv2: string, str?: string) => string;

    /**
     * Sort an array, optionally by object property name. The source array is not modified.
     * @param arr - The array to sort.
     * @param prop - An object property name to sort by.
     * @returns The sorted `arr` array.
     * @see {@link https://github.com/adammark/Markup.js#pipes}
     * @example {{users|sort>firstname}} ... {{/users}}
     */
    sort: <T>(arr: readonly T[], prop?: string) => T[];

    /**
     * Format a number to n decimal places.
     * @param num - The number to format.
     * @param n - The decimal places to include.
     * @returns The `num` fixed to `n` decimal places.
     * @see {@link https://github.com/adammark/Markup.js#pipes}
     * @example {{weight|fix>1}}
     */
    fix: (num: number, n: number) => string;

    /**
     * Get the remainder of a number or iterator divided by n.
     * @param num - The numerator.
     * @param n - The denominator.
     * @returns The remainder of `num` divided by `n`.
     * @see {@link https://github.com/adammark/Markup.js#pipes}
     * @example {{rows|mod>10}}
     */
    mod: (num: number, n: number) => number;

    /**
     * Test if a number or iterator is perfectly divisible by n.
     * @param num - The numerator.
     * @param n - The denominator.
     * @returns The value of `num` when the condition is true, and false otherwise.
     * @see {@link https://github.com/adammark/Markup.js#pipes}
     * @example {{if #|divisible>3}}
     */
    divisible: (num: number, n: number) => false | number;

    /**
     * Test if a number or iterator is even.
     * @param num - The number to test.
     * @returns The value of `num` when the condition is true, and false otherwise.
     * @see {@link https://github.com/adammark/Markup.js#pipes}
     * @example {{if #|even}}
     */
    even: (num: number) => false | number;

    /**
     * Test if a number or iterator is odd.
     * @param num - The number to test.
     * @returns The value of `num` when the condition is true, and false otherwise.
     * @see {@link https://github.com/adammark/Markup.js#pipes}
     * @example {{if #|odd}}
     */
    odd: (num: number) => false | number;

    /**
     * Extract a number from a string (e.g. "$1,234.56" or "30px").
     * @param str - The string to extract a number from.
     * @returns The extracted number.
     * @see {@link https://github.com/adammark/Markup.js#pipes}
     * @example {{price|number}}
     */
    number: (str: string) => number;

    /**
     * URL-encode a string.
     * @param str - The string to encode.
     * @returns The URL-encoded string.
     * @see {@link https://github.com/adammark/Markup.js#pipes}
     * @example {{article.link|url}}
     */
    url: (str: string) => string;

    /**
     * Cast an object to a boolean value.
     * @param obj - The object to cast.
     * @returns The resulting boolean value.
     * @see {@link https://github.com/adammark/Markup.js#pipes}
     * @example {{user.geo_pref_flag|bool}}
     */
    bool: (obj: any) => boolean;

    /**
     * Test for falseness.
     * @param obj - The object to test.
     * @returns If the object is falsy.
     * @see {@link https://github.com/adammark/Markup.js#pipes}
     * @example {{if expired|falsy}}
     */
    falsy: (obj: any) => boolean;

    /**
     * Test if an iterator is first.
     * @param iter - The iterator to test.
     * @returns If `iter` is the first value.
     * @see {@link https://github.com/adammark/Markup.js#pipes}
     * @example {{if #|first}}
     */
    first: (iter: number) => boolean;

    /**
     * Test if an iterator is last.
     * @param iter - The iterator to test.
     * @returns If `iter` is the last value.
     * @see {@link https://github.com/adammark/Markup.js#pipes}
     * @example {{if #|last}}
     */
    last: (iter: number) => boolean;

    /**
     * Call an object function.
     * @param obj - The object containing a function.
     * @param fn - The name of the function to call.
     * @param args - Input arguments for the called function.
     * @returns The value returned from the called function.
     * @see {@link https://github.com/adammark/Markup.js#pipes}
     * @see {@link https://github.com/adammark/Markup.js#the-call-pipe}
     * @example
     */
    call: (obj: object, fn: string, ...args: any[]) => any;

    /**
     * Set a variable for later use, outputting nothing.
     * @param obj - The variable to set.
     * @param key - The key for storing the `obj` value.
     * @returns The empty string.
     * @see {@link https://github.com/adammark/Markup.js#pipes}
     * @see {@link https://github.com/adammark/Markup.js#the-set-pipe}
     * @example {{user.birthday|set>bday}}
     */
    set: (obj: any, key: string) => "";

    /**
     * Log any variable to the console.
     * @param obj - The variable to log.
     * @returns The provided `obj` value.
     * @see {@link https://github.com/adammark/Markup.js#pipes}
     * @see {@link https://github.com/adammark/Markup.js#logging}
     * @example {{article.title|log}}
     */
    log: <T>(obj: T) => T;
} & {
    /**
     * Custom pipes can manipulate additional arguments as declared.
     * @see {@link https://github.com/adammark/Markup.js#pipes}
     * @see {@link https://github.com/adammark/Markup.js#writing-custom-pipes}
     */
    [key: string]: (input: any, ...args: string[]) => any;
};

/**
 * Convert structured data into HTML markup or other text formats.
 * @param template - The string with templated values.
 * @param context - Values of properties to replace in the template.
 * @param options - Additional configurations for the template.
 * @returns Template with replaced context properties.
 * @see {@link https://github.com/adammark/Markup.js#usage}
 * @example
 *     var context = {
 *         name: {
 *             first: "John",
 *             last: "Doe"
 *         }
 *     };
 *
 *     var template = "Hi, {{name.first}}!";
 *
 *     var result = Mark.up(template, context); // "Hi, John!"
 * @example
 *     var context = {
 *         person: new Person("Adam")
 *     };
 *
 *     var template = "Hi, {{person.name}}!";
 *
 *     var result = Mark.up(template, context); // "Hi, Adam!"
 */
export function up(template: string, context: object, options?: Options): string;
