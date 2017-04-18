declare module goog {
    function require(name: 'goog.dom.BrowserFeature'): typeof goog.dom.BrowserFeature;
}

declare module goog.dom {

    /**
     * Enum of browser capabilities.
     * @enum {boolean}
     */
    type BrowserFeature = boolean;
    var BrowserFeature: {
        CAN_ADD_NAME_OR_TYPE_ATTRIBUTES: BrowserFeature;
        CAN_USE_CHILDREN_ATTRIBUTE: BrowserFeature;
        CAN_USE_INNER_TEXT: BrowserFeature;
        CAN_USE_PARENT_ELEMENT_PROPERTY: BrowserFeature;
        INNER_HTML_NEEDS_SCOPED_ELEMENT: BrowserFeature;
        LEGACY_IE_RANGES: BrowserFeature;
    };
}
