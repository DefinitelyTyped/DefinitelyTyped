// Disabling unified-signatures rule so different documentation can be provided for each signature.
// tslint:disable:unified-signatures

export interface ParseOptions {
    /**
     * What to do with reserved keys (default 'ignore').
     * - "ignore" - ignore reserved keys
     * - "throw" - throw SyntaxError in case of reserved keys
     * - "replace" - replace reserved keys, this is the default JSON.parse behaviour, unsafe
     */
    reserved_keys?: "ignore" | "throw" | "replace" | undefined;

    /**
     * Create object as `Object.create(null)` instead of `{}`.
     * - If reserved_keys != 'replace', default is false.
     * - If reserved_keys == 'replace', default is true.
     *
     * It is usually unsafe and not recommended to change this option to false in the last case.
     */
    null_prototype?: boolean | undefined;

    /**
     * Reviver function (follows the JSON spec). This function is called for each member of the object.
     * If a member contains nested objects, the nested objects are transformed before the parent object is.
     */
    reviver?: ((key: any, value: any) => any) | undefined;

    /**
     * Operation mode (default 'json5'). Set to 'json' if you want to throw on non-strict json files.
     */
    mode?: "json5" | "json" | "cjson" | undefined;
}

export interface StringifyOptions {
    /**
     * Output ascii only (default false).
     * If this option is enabled, output will not have any characters except 0x20-0x7f.
     */
    ascii?: boolean | undefined;

    /**
     * This option follows JSON specification.
     * @default '\t'
     */
    indent?: string | number | boolean | undefined;

    /**
     * Enquoting char.
     * - If `mode` is 'json', default is "
     * - Otherwise, default is '
     */
    quote?: "\"" | "'" | undefined;

    /**
     * Whether keys quoting in objects is required or not.
     * If you want `{"q": 1}` instead of `{q: 1}`, set it to true.
     * - If `mode` is 'json', default is true
     * - Otherwise, default is false
     */
    quote_keys?: boolean | undefined;

    /**
     * Sort all keys while stringifying.
     * By default sort order will depend on implementation--with v8 it's insertion order.
     * If set to true, all keys (but not arrays) will be sorted alphabetically.
     * You can provide your own sorting function as well.
     * @default false
     */
    sort_keys?: boolean | ((a: any, b: any) => number) | undefined;

    /**
     * Replacer function or array. This option follows JSON specification.
     * If a function, used to transform the results.
     * If an array, acts as a approved list for selecting the object properties that will be stringified.
     */
    replacer?: ((key: string, value: any) => any) | Array<number | string> | undefined;

    /**
     * Don't output trailing comma. If this option is set, arrays like `[1,2,3,]` will never be generated.
     * Otherwise they may be generated for pretty printing.
     * - If `mode` is JSON, default is true
     * - Otherwise, default is false
     */
    no_trailing_comma?: boolean | undefined;

    /**
     * Operation mode. Set it to 'json' if you want correct json in the output.
     * If it is 'json', following options are implied:
     * - options.quote = '"'
     * - options.no_trailing_comma = true
     * - options.quote_keys = true
     * - '\x' literals are not used
     */
    mode?: "json" | "json5" | "cjson" | undefined;
}

/**
 * Represents a token in a JSON file.
 */
export interface Token {
    /** Raw text of this token. If you join all raws, you will get the original document. */
    raw: string;
    /** Type of the token. */
    type: "whitespace" | "comment" | "key" | "literal" | "separator" | "newline";
    /** Path to the current token in the syntax tree. */
    stack: string[];
    /** Value of the token if token is a key or literal. */
    value?: any;
}

/**
 * Object defining a programming style in which the JSON document was written.
 */
export interface JsonStyle {
    /** Preferred indentation. */
    indent: string;
    /** Preferred newline. */
    newline: string;
    /** " or ' depending on which quote is preferred. */
    quote: string;
    /** True if unquoted keys were used at least once. */
    quote_keys: boolean;
    /** True if input has a whitespace token. */
    has_whitespace: boolean;
    /** True if input has a comment token. */
    has_comments: boolean;
    /** True if input has a newline token. */
    has_newlines: boolean;
    /** True if input has at least one trailing comma. */
    has_trailing_comma: boolean;
}

/**
 * Parse json/json5 text and returns a javascript value it corresponds to.
 * @param text Text to parse
 * @param options Parser options
 */
export function parse(text: string, options?: ParseOptions): any;
/**
 * Compatibility syntax (follows JSON specification).
 * Converts a JavaScript Object Notation (JSON) string into an object.
 * @param text A valid JSON string.
 * @param reviver A function that transforms the results. This function is called for each member of the object.
 * If a member contains nested objects, the nested objects are transformed before the parent object is.
 */
export function parse(text: string, reviver?: (key: any, value: any) => any): any;

/**
 * Convert javascript value to an appropriate json/json5 text.
 * @param value Value to serialize
 * @param options Serializer options
 */
export function stringify(value: any, options?: StringifyOptions): string;
/**
 * Compatibility syntax (follows JSON specification).
 * Converts a JavaScript value to a JavaScript Object Notation (JSON) string.
 * @param value A JavaScript value, usually an object or array, to be converted.
 * @param replacer A function that transforms the results.
 * @param space Adds indentation, white space, and line break characters to the return-value JSON text to make it easier to read.
 */
export function stringify(value: any, replacer?: (key: string, value: any) => any, space?: string | number): string;
/**
 * Compatibility syntax (follows JSON specification).
 * Converts a JavaScript value to a JavaScript Object Notation (JSON) string.
 * @param value A JavaScript value, usually an object or array, to be converted.
 * @param replacer An array of strings and numbers that acts as a approved list for selecting the object properties that will be stringified.
 * @param space Adds indentation, white space, and line break characters to the return-value JSON text to make it easier to read.
 */
export function stringify(value: any, replacer?: Array<number | string> | null, space?: string | number): string;

/**
 * Parse json/json5 text and return an array of tokens it consists of.
 * @param text Text to tokenize
 * @param options Parser options
 */
export function tokenize(text: string, options?: ParseOptions): Token[];

/**
 * Parse json/json5 text and try to guess indentation, quoting style, etc.
 * @param text Text to analyze
 * @param options Parser options
 */
export function analyze(text: string, options?: ParseOptions): JsonStyle;

/**
 * Change json/json5 text, preserving original formatting as much as possible.
 * @param text Original text
 * @param new_value New value you want to set
 * @param options Parser and stringifier options
 *
 * @example
 * // here is your original JSON document:
 * var input = '{"foo": "bar", "baz": 123}'
 *
 * // you need to parse it first:
 * var json = jju.parse(input, {mode: 'json'})
 * // json is { foo: 'bar', baz: 123 }
 *
 * // then you can change it as you like:
 * json.foo = 'quux'
 * json.hello = 'world'
 *
 * // then you run an update function to change the original json:
 * var output = jju.update(input, json, {mode: 'json'})
 * // output is '{"foo": "quux", "baz": 123, "hello": "world"}'
 */
export function update(text: string, new_value: any, options?: ParseOptions & StringifyOptions): string;
