declare module goog {
    function require(name: 'goog.dom.SavedCaretRange'): typeof goog.dom.SavedCaretRange;
}

declare module goog.dom {

    /**
     * A struct for holding context about saved selections.
     * This can be used to preserve the selection and restore while the DOM is
     * manipulated, or through an asynchronous call. Use goog.dom.Range factory
     * methods to obtain an {@see goog.dom.AbstractRange} instance, and use
     * {@see goog.dom.AbstractRange#saveUsingCarets} to obtain a SavedCaretRange.
     * For editor ranges under content-editable elements or design-mode iframes,
     * prefer using {@see goog.editor.range.saveUsingNormalizedCarets}.
     * @param {goog.dom.AbstractRange} range The range being saved.
     * @constructor
     * @extends {goog.dom.SavedRange}
     */
    class SavedCaretRange extends goog.dom.SavedRange {
        constructor(range: goog.dom.AbstractRange);
        
        /**
         * A regex that will match all saved range carets in a string.
         * @type {RegExp}
         */
        static CARET_REGEX: RegExp;
        
        /**
         * Gets the range that this SavedCaretRage represents, without selecting it
         * or removing the carets from the DOM.
         * @return {goog.dom.AbstractRange?} An abstract range.
         */
        toAbstractRange(): goog.dom.AbstractRange;
        
        /**
         * Gets carets.
         * @param {boolean} start If true, returns the start caret. Otherwise, get the
         *     end caret.
         * @return {Element} The start or end caret in the given document.
         */
        getCaret(start: boolean): Element;
        
        /**
         * Removes the carets from the current restoration document.
         * @param {goog.dom.AbstractRange=} opt_range A range whose offsets have already
         *     been adjusted for caret removal; it will be adjusted if it is also
         *     affected by post-removal operations, such as text node normalization.
         * @return {goog.dom.AbstractRange|undefined} The adjusted range, if opt_range
         *     was provided.
         */
        removeCarets(opt_range?: goog.dom.AbstractRange): goog.dom.AbstractRange|void;
        
        /**
         * Sets the document where the range will be restored.
         * @param {!Document} doc An HTML document.
         */
        setRestorationDocument(doc: Document): void;
        
        /**
         * Reconstruct the selection from the given saved range. Removes carets after
         * restoring the selection. If restore does not dispose this saved range, it may
         * only be restored a second time if innerHTML or some other mechanism is used
         * to restore the carets to the dom.
         * @return {goog.dom.AbstractRange?} Restored selection.
         * @override
         * @protected
         */
        restoreInternal(): goog.dom.AbstractRange;
        
        /**
         * Returns whether two strings of html are equal, ignoring any saved carets.
         * Thus two strings of html whose only difference is the id of their saved
         * carets will be considered equal, since they represent html with the
         * same selection.
         * @param {string} str1 The first string.
         * @param {string} str2 The second string.
         * @return {boolean} Whether two strings of html are equal, ignoring any
         *     saved carets.
         */
        static htmlEqual(str1: string, str2: string): boolean;
    }
}
