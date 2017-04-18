declare module goog {
    function require(name: 'goog.ui.AbstractSpellChecker'): typeof goog.ui.AbstractSpellChecker;
    function require(name: 'goog.ui.AbstractSpellChecker.AsyncResult'): typeof goog.ui.AbstractSpellChecker.AsyncResult;
}

declare module goog.ui {

    /**
     * Abstract base class for spell checker editor implementations. Provides basic
     * functionality such as word lookup and caching.
     *
     * @param {goog.spell.SpellCheck} spellCheck Instance of the SpellCheck
     *     support object to use. A single instance can be shared by multiple editor
     *     components.
     * @param {goog.dom.DomHelper=} opt_domHelper Optional DOM helper.
     * @constructor
     * @extends {goog.ui.Component}
     */
    class AbstractSpellChecker extends goog.ui.Component {
        constructor(spellCheck: goog.spell.SpellCheck, opt_domHelper?: goog.dom.DomHelper);
        
        /**
         * Class name for suggestions menu.
         *
         * @type {string}
         */
        suggestionsMenuClassName: string;
        
        /**
         * Whether corrected words should be highlighted.
         *
         * @type {boolean}
         */
        markCorrected: boolean;
        
        /**
         * Markers for the text that does not need to be included in the processing.
         *
         * For rich text editor this is a list of strings formatted as
         * tagName.className or className. If both are specified, the element will be
         * excluded if BOTH are matched. If only a className is specified, then we will
         * exclude regions with the className. If only one marker is needed, it may be
         * passed as a string.
         * For plain text editor this is a RegExp that matches the excluded text.
         *
         * Used exclusively by the derived classes
         *
         * @type {Array<string>|string|RegExp|undefined}
         * @protected
         */
        excludeMarker: Array<string>|string|RegExp|void;
        
        /**
         * @return {goog.spell.SpellCheck} The handler used for caching and lookups.
         */
        getSpellCheck(): goog.spell.SpellCheck;
        
        /**
         * Sets the spell checker used for caching and lookups.
         * @param {goog.spell.SpellCheck} spellCheck The handler used for caching and
         *     lookups.
         */
        setSpellCheck(spellCheck: goog.spell.SpellCheck): void;
        
        /**
         * Sets the handler used for caching and lookups.
         * @param {goog.spell.SpellCheck} handler The handler used for caching and
         *     lookups.
         * @deprecated Use #setSpellCheck instead.
         */
        setHandler(handler: goog.spell.SpellCheck): void;
        
        /**
         * @return {goog.ui.PopupMenu|undefined} The suggestions menu.
         * @protected
         */
        getMenu(): goog.ui.PopupMenu|void;
        
        /**
         * @return {goog.ui.MenuItem|undefined} The menu item for edit word option.
         * @protected
         */
        getMenuEdit(): goog.ui.MenuItem|void;
        
        /**
         * @return {number} The index of the latest misspelled word to be added.
         * @protected
         */
        getLastIndex(): number;
        
        /**
         * @return {number} Increments and returns the index for the next misspelled
         *     word to be added.
         * @protected
         */
        getNextIndex(): number;
        
        /**
         * Sets the marker for the excluded text.
         *
         * {@see goog.ui.AbstractSpellChecker.prototype.excludeMarker}
         *
         * @param {Array<string>|string|RegExp|null} marker A RegExp for plain text
         *        or class names for the rich text spell checker for the elements to
         *        exclude from checking.
         */
        setExcludeMarker(marker: Array<string>|string|RegExp|void): void;
        
        /**
         * Checks spelling for all text.
         * Should be overridden by implementation.
         */
        check(): void;
        
        /**
         * Hides correction UI.
         * Should be overridden by implementation.
         */
        resume(): void;
        
        /**
         * @return {boolean} Whether the correction ui is visible.
         */
        isVisible(): boolean;
        
        /**
         * Clears the word to element references map used by replace/ignore.
         * @protected
         */
        clearWordElements(): void;
        
        /**
         * Ignores spelling of word.
         *
         * @param {string} word Word to add.
         */
        ignoreWord(word: string): void;
        
        /**
         * Replaces word.
         *
         * @param {Element} el An element wrapping the word that should be replaced.
         * @param {string} old Word that was replaced.
         * @param {string} word Word to replace with.
         */
        replaceWord(el: Element, old: string, word: string): void;
        
        /**
         * Displays suggestions menu.
         *
         * @param {Element} el Element to display menu for.
         * @param {goog.events.BrowserEvent|goog.math.Coordinate=} opt_pos Position to
         *     display menu at relative to the viewport (in client coordinates), or a
         *     mouse event.
         */
        showSuggestionsMenu(el: Element, opt_pos?: goog.events.BrowserEvent|goog.math.Coordinate): void;
        
        /**
         * Initializes suggestions menu. Populates menu with separator and ignore option
         * that are always valid. Suggestions are later added above the separator.
         *
         * @protected
         */
        initSuggestionsMenu(): void;
        
        /**
         * Handles correction menu actions.
         *
         * @param {goog.events.Event} event Action event.
         * @protected
         */
        onCorrectionAction(event: goog.events.Event): void;
        
        /**
         * Removes spell-checker markup and restore the node to text.
         *
         * @param {Element} el Word element. MUST have a text node child.
         * @protected
         */
        removeMarkup(el: Element): void;
        
        /**
         * Updates element based on word status. Either converts it to a text node, or
         * merges it with the previous or next text node if the status of the world is
         * VALID, in which case the element itself is eliminated.
         *
         * @param {Element} el Word element.
         * @param {string} word Word to update status for.
         * @param {goog.spell.SpellCheck.WordStatus} status Status of word.
         * @protected
         */
        updateElement(el: Element, word: string, status: goog.spell.SpellCheck.WordStatus): void;
        
        /**
         * Generates unique Ids for spell checker elements.
         * @param {number=} opt_id Id to suffix with.
         * @return {string} Unique element id.
         * @protected
         */
        makeElementId(opt_id?: number): string;
        
        /**
         * Returns the span element that matches the given number index.
         * @param {number} index Number index that is used in the element id.
         * @return {Element} The matching span element or null if no span matches.
         * @protected
         */
        getElementByIndex(index: number): Element;
        
        /**
         * Creates an element for a specified word and stores a reference to it.
         *
         * @param {string} word Word to create element for.
         * @param {goog.spell.SpellCheck.WordStatus} status Status of word.
         * @return {!HTMLSpanElement} The created element.
         * @protected
         */
        createWordElement(word: string, status: goog.spell.SpellCheck.WordStatus): HTMLSpanElement;
        
        /**
         * Stores a reference to word element.
         *
         * @param {string} word The word to store.
         * @param {HTMLSpanElement} el The element associated with it.
         * @protected
         */
        registerWordElement(word: string, el: HTMLSpanElement): void;
        
        /**
         * Returns desired element properties for the specified status.
         * Should be overridden by implementation.
         *
         * @param {goog.spell.SpellCheck.WordStatus} status Status of word.
         * @return {Object} Properties to apply to the element.
         * @protected
         */
        getElementProperties(status: goog.spell.SpellCheck.WordStatus): Object;
        
        /**
         * Precharges local dictionary cache. This is optional, but greatly reduces
         * amount of subsequent churn in the DOM tree because most of the words become
         * known from the very beginning.
         *
         * @param {string} text Text to process.
         * @param {number} words Max number of words to scan.
         * @return {number} number of words actually scanned.
         * @protected
         */
        populateDictionary(text: string, words: number): number;
        
        /**
         * Processes word.
         * Should be overridden by implementation.
         *
         * @param {Node} node Node containing word.
         * @param {string} text Word to process.
         * @param {goog.spell.SpellCheck.WordStatus} status Status of the word.
         * @protected
         */
        processWord(node: Node, text: string, status: goog.spell.SpellCheck.WordStatus): void;
        
        /**
         * Processes range of text that checks out (contains no unrecognized words).
         * Should be overridden by implementation. May contain words and separators.
         *
         * @param {Node} node Node containing text range.
         * @param {string} text text to process.
         * @protected
         */
        processRange(node: Node, text: string): void;
        
        /**
         * Starts asynchronous processing mode.
         *
         * @protected
         */
        initializeAsyncMode(): void;
        
        /**
         * Finalizes asynchronous processing mode. Should be called after there is no
         * more text to process and processTextAsync and/or continueAsyncProcessing
         * returned FINISHED.
         *
         * @protected
         */
        finishAsyncProcessing(): void;
        
        /**
         * Blocks processing of spell checker READY events. This is used in dictionary
         * recharge and async mode so that completion is not signaled prematurely.
         *
         * @protected
         */
        blockReadyEvents(): void;
        
        /**
         * Unblocks processing of spell checker READY events. This is used in
         * dictionary recharge and async mode so that completion is not signaled
         * prematurely.
         *
         * @protected
         */
        unblockReadyEvents(): void;
        
        /**
         * Splits text into individual words and blocks of separators. Calls virtual
         * processWord_ and processRange_ methods.
         *
         * @param {Node} node Node containing text.
         * @param {string} text Text to process.
         * @return {goog.ui.AbstractSpellChecker.AsyncResult} operation result.
         * @protected
         */
        processTextAsync(node: Node, text: string): goog.ui.AbstractSpellChecker.AsyncResult;
        
        /**
         * Continues processing started by processTextAsync. Calls virtual
         * processWord_ and processRange_ methods.
         *
         * @return {goog.ui.AbstractSpellChecker.AsyncResult} operation result.
         * @protected
         */
        continueAsyncProcessing(): goog.ui.AbstractSpellChecker.AsyncResult;
        
        /**
         * Navigate keyboard focus in the given direction.
         *
         * @param {goog.ui.AbstractSpellChecker.Direction} direction The direction to
         *     navigate in.
         * @return {boolean} Whether the action is handled here.  If not handled
         *     here, the initiating event may be propagated.
         * @protected
         */
        navigate(direction: goog.ui.AbstractSpellChecker.Direction): boolean;
        
        /**
         * Returns the index of the currently focussed invalid word element. This index
         * starts at one instead of zero.
         *
         * @return {number} the index of the currently focussed element
         * @protected
         */
        getFocusedElementIndex(): number;
        
        /**
         * Sets the index of the currently focussed invalid word element. This index
         * should start at one instead of zero.
         *
         * @param {number} focusElementIndex the index of the currently focussed element
         * @protected
         */
        setFocusedElementIndex(focusElementIndex: number): void;
        
        /**
         * Sets the focus on the provided word element.
         *
         * @param {Element} element The word element that should receive focus.
         * @protected
         */
        focusOnElement(element: Element): void;
    }
}

declare module goog.ui.AbstractSpellChecker {

    /**
     * Constants for representing the direction while navigating.
     *
     * @enum {number}
     */
    type Direction = number;
    var Direction: {
        PREVIOUS: Direction;
        NEXT: Direction;
    };

    /**
     * Constants for the result of asynchronous processing.
     * @enum {number}
     */
    type AsyncResult = number;
    var AsyncResult: {
        PENDING: AsyncResult;
        DONE: AsyncResult;
    };
}
