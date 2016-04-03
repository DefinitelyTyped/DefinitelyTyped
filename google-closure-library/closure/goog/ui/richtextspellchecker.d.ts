declare module goog {
    function require(name: 'goog.ui.RichTextSpellChecker'): typeof goog.ui.RichTextSpellChecker;
}

declare module goog.ui {

    /**
     * Rich text spell checker implementation.
     *
     * @param {goog.spell.SpellCheck} handler Instance of the SpellCheckHandler
     *     support object to use. A single instance can be shared by multiple editor
     *     components.
     * @param {goog.dom.DomHelper=} opt_domHelper Optional DOM helper.
     * @constructor
     * @extends {goog.ui.AbstractSpellChecker}
     */
    class RichTextSpellChecker extends goog.ui.AbstractSpellChecker {
        constructor(handler: goog.spell.SpellCheck, opt_domHelper?: goog.dom.DomHelper);
        
        /**
         * Class name for word spans.
         * @type {string}
         */
        wordClassName: string;
        
        /**
         * Tag name portion of the marker for the text that does not need to be checked
         * for spelling.
         *
         * @type {Array<string|undefined>}
         */
        excludeTags: Array<string|void>;
        
        /**
         * CSS Style text for invalid words. As it's set inside the rich edit iframe
         * classes defined in the parent document are not availble, thus the style is
         * set inline.
         * @type {string}
         */
        invalidWordCssText: string;
        
        /**
         * Decorates the element for the UI component.
         *
         * @param {Element} element Element to decorate.
         * @override
         */
        decorateInternal(element: Element): void;
        
        /**
         * Processes word.
         *
         * @param {Node} node Node containing word.
         * @param {string} word Word to process.
         * @param {goog.spell.SpellCheck.WordStatus} status Status of the word.
         * @protected
         * @override
         */
        processWord(node: Node, word: string, status: goog.spell.SpellCheck.WordStatus): void;
        
        /**
         * Processes recognized text and separators.
         *
         * @param {Node} node Node containing separator.
         * @param {string} text Text to process.
         * @protected
         * @override
         */
        processRange(node: Node, text: string): void;
        
        /**
         * Updates or replaces element based on word status.
         * @see goog.ui.AbstractSpellChecker.prototype.updateElement_
         *
         * Overridden from AbstractSpellChecker because we need to be mindful of
         * deleting the currentNode_ - this can break our pending processing.
         *
         * @param {Element} el Word element.
         * @param {string} word Word to update status for.
         * @param {goog.spell.SpellCheck.WordStatus} status Status of word.
         * @protected
         * @override
         */
        updateElement(el: Element, word: string, status: goog.spell.SpellCheck.WordStatus): void;
        
        /**
         * Returns desired element properties for the specified status.
         *
         * @param {goog.spell.SpellCheck.WordStatus} status Status of the word.
         * @return {!Object} Properties to apply to word element.
         * @protected
         * @override
         */
        getElementProperties(status: goog.spell.SpellCheck.WordStatus): Object;
        
        /**
         * Returns whether the editor node is an iframe.
         *
         * @return {boolean} true the editor node is an iframe, otherwise false.
         * @protected
         */
        isEditorIframe(): boolean;
        
        /**
         * Handles keyboard events inside the editor to allow keyboard navigation
         * between misspelled words and activation of the suggestion menu.
         *
         * @param {goog.events.BrowserEvent} e the key event.
         * @return {boolean} The handled value.
         * @protected
         */
        handleRootNodeKeyEvent(e: goog.events.BrowserEvent): boolean;
    }
}
