declare module goog {
    function require(name: 'goog.labs.html.scrubber'): typeof goog.labs.html.scrubber;
}

declare module goog.labs.html.scrubber {

    /**
     * Groups of elements used to specify containment relationships.
     * @enum {number}
     * @private
     */
    type Group_ = number;
    var Group_: {
        BLOCK_: Group_;
        INLINE_: Group_;
        INLINE_MINUS_A_: Group_;
        MIXED_: Group_;
        TABLE_CONTENT_: Group_;
        HEAD_CONTENT_: Group_;
        TOP_CONTENT_: Group_;
        AREA_ELEMENT_: Group_;
        FORM_ELEMENT_: Group_;
        LEGEND_ELEMENT_: Group_;
        LI_ELEMENT_: Group_;
        DL_PART_: Group_;
        P_ELEMENT_: Group_;
        OPTIONS_ELEMENT_: Group_;
        OPTION_ELEMENT_: Group_;
        PARAM_ELEMENT_: Group_;
        TABLE_ELEMENT_: Group_;
        TR_ELEMENT_: Group_;
        TD_ELEMENT_: Group_;
        COL_ELEMENT_: Group_;
        CHARACTER_DATA_: Group_;
    };

    /**
     * Element scopes limit where close tags can have effects.
     * For example, a table cannot be implicitly closed by a {@code </p>} even if
     * the table appears inside a {@code <p>} because the {@code <table>} element
     * introduces a scope.
     *
     * @enum {number}
     * @private
     */
    type Scope_ = number;
    var Scope_: {
        COMMON_: Scope_;
        BUTTON_: Scope_;
        LIST_ITEM_: Scope_;
        TABLE_: Scope_;
    };

    /** Character code constant for {@code '<'}.  @private */
    var CC_LT_: any;

    /** Character code constant for {@code '!'}.  @private */
    var CC_BANG_: any;

    /** Character code constant for {@code '/'}.  @private */
    var CC_SLASH_: any;

    /** Character code constant for {@code '?'}.  @private */
    var CC_QMARK_: any;

    /** @const @private */
    var ALL_SCOPES_: any;

    /**
     * Replaces tags not on the white-list with empty text nodes, dropping all
     * attributes, and drops other non-text nodes such as comments.
     *
     * @param {!Object<string, boolean>} tagWhitelist a set of lower-case tag names
     *    following the convention established by {@link goog.object.createSet}.
     * @param {!Object<string, Object<string, goog.labs.html.AttributeRewriter>>}
     *        attrWhitelist
     *    maps lower-case tag names and the special string {@code "*"} to functions
     *    from decoded attribute values to sanitized values or {@code null} to
     *    indicate that the attribute is not allowed with that value.
     *
     *    For example, if {@code attrWhitelist['a']['href']} is defined then it
     *    is used to sanitize the value of the link's URL.
     *
     *    If {@code attrWhitelist['*']['id']} is defined, and
     *    {@code attrWhitelist['div']['id']} is not, then the former is used to
     *    sanitize any {@code id} attribute on a {@code <div>} element.
     * @param {string} html a string of HTML
     * @return {string} the input but with potentially dangerous tokens removed.
     */
    function scrub(tagWhitelist: {[index: string]: boolean}, attrWhitelist: {[index: string]: {[index: string]: goog.labs.html.AttributeRewriter}}, html: string): string;

    /**
     * Balances tags in trusted HTML.
     * @param {string} html a string of HTML
     * @return {string} the input but with an end-tag for each non-void start tag
     *     and only for non-void start tags, and with start and end tags nesting
     *     properly.
     */
    function balance(html: string): string;
}
