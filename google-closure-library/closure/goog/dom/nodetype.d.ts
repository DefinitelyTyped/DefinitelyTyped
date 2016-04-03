declare module goog {
    function require(name: 'goog.dom.NodeType'): typeof goog.dom.NodeType;
}

declare module goog.dom {

    /**
     * Constants for the nodeType attribute in the Node interface.
     *
     * These constants match those specified in the Node interface. These are
     * usually present on the Node object in recent browsers, but not in older
     * browsers (specifically, early IEs) and thus are given here.
     *
     * In some browsers (early IEs), these are not defined on the Node object,
     * so they are provided here.
     *
     * See http://www.w3.org/TR/DOM-Level-2-Core/core.html#ID-1950641247
     * @enum {number}
     */
    type NodeType = number;
    var NodeType: {
        ELEMENT: NodeType;
        ATTRIBUTE: NodeType;
        TEXT: NodeType;
        CDATA_SECTION: NodeType;
        ENTITY_REFERENCE: NodeType;
        ENTITY: NodeType;
        PROCESSING_INSTRUCTION: NodeType;
        COMMENT: NodeType;
        DOCUMENT: NodeType;
        DOCUMENT_TYPE: NodeType;
        DOCUMENT_FRAGMENT: NodeType;
        NOTATION: NodeType;
    };
}
