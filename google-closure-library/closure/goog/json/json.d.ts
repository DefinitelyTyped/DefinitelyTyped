declare module goog {
    function require(name: 'goog.json'): typeof goog.json;
    function require(name: 'goog.json.Serializer'): typeof goog.json.Serializer;
}

declare module goog.json {

    /**
     * JSON replacer, as defined in Section 15.12.3 of the ES5 spec.
     * @see http://ecma-international.org/ecma-262/5.1/#sec-15.12.3
     *
     * TODO(nicksantos): Array should also be a valid replacer.
     *
     * @typedef {function(this:Object, string, *): *}
     */
    type Replacer = (arg0: string, arg1: any) => any;

    /**
     * JSON reviver, as defined in Section 15.12.2 of the ES5 spec.
     * @see http://ecma-international.org/ecma-262/5.1/#sec-15.12.3
     *
     * @typedef {function(this:Object, string, *): *}
     */
    type Reviver = (arg0: string, arg1: any) => any;

    /**
     * Class that is used to serialize JSON objects to a string.
     * @param {?goog.json.Replacer=} opt_replacer Replacer.
     * @constructor
     */
    class Serializer {
        constructor(opt_replacer?: goog.json.Replacer);
        
        /**
         * Serializes an object or a value to a JSON string.
         *
         * @param {*} object The object to serialize.
         * @throws Error if there are loops in the object graph.
         * @return {string} A JSON string representation of the input.
         */
        serialize(object: any): string;
        
        /**
         * Serializes a generic value to a JSON string
         * @protected
         * @param {*} object The object to serialize.
         * @param {Array<string>} sb Array used as a string builder.
         * @throws Error if there are loops in the object graph.
         */
        serializeInternal(object: any, sb: Array<string>): void;
        
        /**
         * Serializes an array to a JSON string
         * @param {Array<string>} arr The array to serialize.
         * @param {Array<string>} sb Array used as a string builder.
         * @protected
         */
        serializeArray(arr: Array<string>, sb: Array<string>): void;
    }

    /**
     * Tests if a string is an invalid JSON string. This only ensures that we are
     * not using any invalid characters
     * @param {string} s The string to test.
     * @return {boolean} True if the input is a valid JSON string.
     */
    function isValid(s: string): boolean;

    /**
     * Parses a JSON string and returns the result. This throws an exception if
     * the string is an invalid JSON string.
     *
     * Note that this is very slow on large strings. If you trust the source of
     * the string then you should use unsafeParse instead.
     *
     * @param {*} s The JSON string to parse.
     * @throws Error if s is invalid JSON.
     * @return {Object} The object generated from the JSON string, or null.
     */
    function parse(s: any): Object;

    /**
     * Parses a JSON string and returns the result. This uses eval so it is open
     * to security issues and it should only be used if you trust the source.
     *
     * @param {string} s The JSON string to parse.
     * @return {Object} The object generated from the JSON string.
     */
    function unsafeParse(s: string): Object;

    /**
     * Serializes an object or a value to a JSON string.
     *
     * @param {*} object The object to serialize.
     * @param {?goog.json.Replacer=} opt_replacer A replacer function
     *     called for each (key, value) pair that determines how the value
     *     should be serialized. By defult, this just returns the value
     *     and allows default serialization to kick in.
     * @throws Error if there are loops in the object graph.
     * @return {string} A JSON string representation of the input.
     */
    function serialize(object: any, opt_replacer?: goog.json.Replacer): string;
}
