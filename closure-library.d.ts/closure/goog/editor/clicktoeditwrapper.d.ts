declare module goog {
    function require(name: 'goog.editor.ClickToEditWrapper'): typeof goog.editor.ClickToEditWrapper;
}

declare module goog.editor {

    /**
     * Initialize the wrapper, and begin listening to mouse events immediately.
     * @param {goog.editor.Field} fieldObj The editable field being wrapped.
     * @constructor
     * @extends {goog.Disposable}
     */
    class ClickToEditWrapper extends goog.Disposable {
        constructor(fieldObj: goog.editor.Field);
        
        /** @return {goog.editor.Field} The field. */
        getFieldObject(): goog.editor.Field;
        
        /** @return {goog.dom.DomHelper} The dom helper of the uneditable element. */
        getOriginalDomHelper(): goog.dom.DomHelper;
        
        /**
         * Initialize listeners when the uneditable field is added to the document.
         * Also sets up lorem ipsum text.
         */
        enterDocument(): void;
        
        /**
         * Destroy listeners when the field is removed from the document.
         */
        exitDocument(): void;
        
        /**
         * Returns the uneditable field element if the field is not yet editable
         * (equivalent to EditableField.getOriginalElement()), and the editable DOM
         * element if the field is currently editable (equivalent to
         * EditableField.getElement()).
         * @return {Element} The element containing the editable field contents.
         */
        getElement(): Element;
        
        /**
         * Focus on the field object.
         * @param {goog.editor.Field} field The field to focus.
         * @protected
         */
        focusOnFieldObj(field: goog.editor.Field): void;
        
        /**
         * Make the field object editable.
         * @param {goog.editor.Field} field The field to make editable.
         * @protected
         */
        makeFieldEditable(field: goog.editor.Field): void;
    }
}
