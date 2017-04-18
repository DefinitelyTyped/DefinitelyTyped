declare module goog {
    function require(name: 'goog.dom.AbstractMultiRange'): typeof goog.dom.AbstractMultiRange;
}

declare module goog.dom {

    /**
     * Creates a new multi range with no properties.  Do not use this
     * constructor: use one of the goog.dom.Range.createFrom* methods instead.
     * @constructor
     * @extends {goog.dom.AbstractRange}
     */
    class AbstractMultiRange extends goog.dom.AbstractRange {
        constructor();
    }
}
