declare module goog {
    function require(name: 'goog.proto2.TextFormatSerializer'): typeof goog.proto2.TextFormatSerializer;
}

declare module goog.proto2 {

    /**
     * TextFormatSerializer, a serializer which turns Messages into the human
     * readable text format.
     * @param {boolean=} opt_ignoreMissingFields If true, then fields that cannot be
     *     found on the proto when parsing the text format will be ignored.
     * @param {boolean=} opt_useEnumValues If true, serialization code for enums
     *     will use enum integer values instead of human-readable symbolic names.
     * @constructor
     * @extends {goog.proto2.Serializer}
     * @final
     */
    class TextFormatSerializer extends goog.proto2.Serializer {
        constructor(opt_ignoreMissingFields?: boolean, opt_useEnumValues?: boolean);
        
        /**
         * Deserializes a message from text format and places the data in the message.
         * @param {goog.proto2.Message} message The message in which to
         *     place the information.
         * @param {*} data The text format data.
         * @return {?string} The parse error or null on success.
         * @override
         */
        deserializeTo(message: goog.proto2.Message, data: any): string;
        
        /**
         * Serializes a message to a string.
         * @param {goog.proto2.Message} message The message to be serialized.
         * @return {string} The serialized form of the message.
         * @override
         */
        serialize(message: goog.proto2.Message): string;
    }
}

declare module goog.proto2.TextFormatSerializer {

    /**
     * Helper class used by the text format serializer for pretty-printing text.
     * @constructor
     * @private
     */
    interface Printer_ {
        
        /**
         * @return {string} The contents of the printer.
         * @override
         */
        toString(): string;
        
        /**
         * Increases the indentation in the printer.
         */
        indent(): void;
        
        /**
         * Decreases the indentation in the printer.
         */
        dedent(): void;
        
        /**
         * Appends the given value to the printer.
         * @param {*} value The value to append.
         */
        append(value: any): void;
        
        /**
         * Appends a newline to the printer.
         */
        appendLine(): void;
    }

    /**
     * Helper class for tokenizing the text format.
     * @param {string} data The string data to tokenize.
     * @param {boolean=} opt_ignoreWhitespace If true, whitespace tokens will not
     *    be reported by the tokenizer.
     * @param {boolean=} opt_ignoreComments If true, comment tokens will not be
     *    reported by the tokenizer.
     * @constructor
     * @private
     */
    interface Tokenizer_ {
        
        /**
         * @return {goog.proto2.TextFormatSerializer.Tokenizer_.Token} The current
         *     token.
         */
        getCurrent(): goog.proto2.TextFormatSerializer.Tokenizer_.Token;
        
        /**
         * Advances to the next token.
         * @return {boolean} True if a valid token was found, false if the end was
         *    reached or no valid token was found.
         */
        next(): boolean;
    }

    /**
     * Helper class for parsing the text format.
     * @constructor
     * @final
     */
    class Parser {
        constructor();
        
        /**
         * Parses the given data, filling the message as it goes.
         * @param {goog.proto2.Message} message The message to fill.
         * @param {string} data The text format data.
         * @param {boolean=} opt_ignoreMissingFields If true, fields missing in the
         *     proto will be ignored.
         * @return {boolean} True on success, false on failure. On failure, the
         *     getError method can be called to get the reason for failure.
         */
        parse(message: goog.proto2.Message, data: string, opt_ignoreMissingFields?: boolean): boolean;
        
        /**
         * @return {?string} The parse error, if any.
         */
        getError(): string;
    }
}

declare module goog.proto2.TextFormatSerializer.Tokenizer_ {

    /**
     * An enumeration of all the token types.
     * @enum {!RegExp}
     */
    type TokenTypes = RegExp;
    var TokenTypes: {
        END: TokenTypes;
        IDENTIFIER: TokenTypes;
        NUMBER: TokenTypes;
        COMMENT: TokenTypes;
        OPEN_BRACE: TokenTypes;
        CLOSE_BRACE: TokenTypes;
        OPEN_TAG: TokenTypes;
        CLOSE_TAG: TokenTypes;
        OPEN_LIST: TokenTypes;
        CLOSE_LIST: TokenTypes;
        STRING: TokenTypes;
        COLON: TokenTypes;
        COMMA: TokenTypes;
        SEMI: TokenTypes;
        WHITESPACE: TokenTypes;
    };

    /**
     * @typedef {{type: goog.proto2.TextFormatSerializer.Tokenizer_.TokenTypes,
     *            value: ?string}}
     */
    type Token = {type: goog.proto2.TextFormatSerializer.Tokenizer_.TokenTypes; value: string};
}
