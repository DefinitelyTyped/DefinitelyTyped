declare module goog {
    function require(name: 'goog.i18n.pluralRules'): typeof goog.i18n.pluralRules;
}

declare module goog.i18n.pluralRules {

    /**
     * Plural pattern keyword
     * @enum {string}
     */
    type Keyword = string;
    var Keyword: {
        ZERO: Keyword;
        ONE: Keyword;
        TWO: Keyword;
        FEW: Keyword;
        MANY: Keyword;
        OTHER: Keyword;
    };

    /**
     * Selected Plural rules by locale.
     */
    var select: any;
}
