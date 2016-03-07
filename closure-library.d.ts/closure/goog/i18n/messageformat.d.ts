declare module goog {
    function require(name: 'goog.i18n.MessageFormat'): typeof goog.i18n.MessageFormat;
}

declare module goog.i18n {

    /**
     * Constructor of MessageFormat.
     * @param {string} pattern The pattern we parse and apply positional parameters
     *     to.
     * @constructor
     * @final
     */
    class MessageFormat {
        constructor(pattern: string);
        
        /**
         * Formats a message, treating '#' with special meaning representing
         * the number (plural_variable - offset).
         * @param {!Object} namedParameters Parameters that either
         *     influence the formatting or are used as actual data.
         *     I.e. in call to fmt.format({'NUM_PEOPLE': 5, 'NAME': 'Angela'}),
         *     object {'NUM_PEOPLE': 5, 'NAME': 'Angela'} holds positional parameters.
         *     1st parameter could mean 5 people, which could influence plural format,
         *     and 2nd parameter is just a data to be printed out in proper position.
         * @return {string} Formatted message.
         */
        format(namedParameters: Object): string;
        
        /**
         * Formats a message, treating '#' as literary character.
         * @param {!Object} namedParameters Parameters that either
         *     influence the formatting or are used as actual data.
         *     I.e. in call to fmt.format({'NUM_PEOPLE': 5, 'NAME': 'Angela'}),
         *     object {'NUM_PEOPLE': 5, 'NAME': 'Angela'} holds positional parameters.
         *     1st parameter could mean 5 people, which could influence plural format,
         *     and 2nd parameter is just a data to be printed out in proper position.
         * @return {string} Formatted message.
         */
        formatIgnoringPound(namedParameters: Object): string;
    }
}

declare module goog.i18n.MessageFormat {

    /**
     * Marks a string and block during parsing.
     * @enum {number}
     * @private
     */
    type Element_ = number;
    var Element_: {
        STRING: Element_;
        BLOCK: Element_;
    };

    /**
     * Block type.
     * @enum {number}
     * @private
     */
    type BlockType_ = number;
    var BlockType_: {
        PLURAL: BlockType_;
        ORDINAL: BlockType_;
        SELECT: BlockType_;
        SIMPLE: BlockType_;
        STRING: BlockType_;
        UNKNOWN: BlockType_;
    };
}
