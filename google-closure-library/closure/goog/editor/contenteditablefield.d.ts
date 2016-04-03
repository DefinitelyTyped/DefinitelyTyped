declare module goog {
    function require(name: 'goog.editor.ContentEditableField'): typeof goog.editor.ContentEditableField;
}

declare module goog.editor {

    /**
     * This class encapsulates an editable field that is just a contentEditable
     * div.
     *
     * To see events fired by this object, please see the base class.
     *
     * @param {string} id An identifer for the field. This is used to find the
     *     field and the element associated with this field.
     * @param {Document=} opt_doc The document that the element with the given
     *     id can be found in.
     * @constructor
     * @extends {goog.editor.Field}
     */
    class ContentEditableField extends goog.editor.Field {
        constructor(id: string, opt_doc?: Document);
    }
}
