declare module goog {
    function require(name: 'goog.ui.ac.InputHandler'): typeof goog.ui.ac.InputHandler;
}

declare module goog.ui.ac {

    /**
     * Class for managing the interaction between an auto-complete object and a
     * text-input or textarea.
     *
     * @param {?string=} opt_separators Separators to split multiple entries.
     *     If none passed, uses ',' and ';'.
     * @param {?string=} opt_literals Characters used to delimit text literals.
     * @param {?boolean=} opt_multi Whether to allow multiple entries
     *     (Default: true).
     * @param {?number=} opt_throttleTime Number of milliseconds to throttle
     *     keyevents with (Default: 150). Use -1 to disable updates on typing. Note
     *     that typing the separator will update autocomplete suggestions.
     * @constructor
     * @extends {goog.Disposable}
     */
    class InputHandler extends goog.Disposable {
        constructor(opt_separators?: string, opt_literals?: string, opt_multi?: boolean, opt_throttleTime?: number);
        
        /**
         * Standard list separators.
         * @type {string}
         * @const
         */
        static STANDARD_LIST_SEPARATORS: string;
        
        /**
         * Literals for quotes.
         * @type {string}
         * @const
         */
        static QUOTE_LITERALS: string;
        
        /**
         * The AutoComplete instance this inputhandler is associated with.
         * @type {goog.ui.ac.AutoComplete}
         */
        ac_: goog.ui.ac.AutoComplete;
        
        /**
         * Attach an instance of an AutoComplete
         * @param {goog.ui.ac.AutoComplete} ac Autocomplete object.
         */
        attachAutoComplete(ac: goog.ui.ac.AutoComplete): void;
        
        /**
         * Returns the associated autocomplete instance.
         * @return {goog.ui.ac.AutoComplete} The associated autocomplete instance.
         */
        getAutoComplete(): goog.ui.ac.AutoComplete;
        
        /**
         * Returns the current active element.
         * @return {Element} The currently active element.
         */
        getActiveElement(): Element;
        
        /**
         * Returns the value of the current active element.
         * @return {string} The value of the current active element.
         */
        getValue(): string;
        
        /**
         * Sets the value of the current active element.
         * @param {string} value The new value.
         */
        setValue(value: string): void;
        
        /**
         * Returns the current cursor position.
         * @return {number} The index of the cursor position.
         */
        getCursorPosition(): number;
        
        /**
         * Sets the cursor at the given position.
         * @param {number} pos The index of the cursor position.
         */
        setCursorPosition(pos: number): void;
        
        /**
         * Attaches the input handler to a target element. The target element
         * should be a textarea, input box, or other focusable element with the
         * same interface.
         * @param {Element|goog.events.EventTarget} target An element to attach the
         *     input handler too.
         */
        attachInput(target: Element|goog.events.EventTarget): void;
        
        /**
         * Detaches the input handler from the provided element.
         * @param {Element|goog.events.EventTarget} target An element to detach the
         *     input handler from.
         */
        detachInput(target: Element|goog.events.EventTarget): void;
        
        /**
         * Attaches the input handler to multiple elements.
         * @param {...Element} var_args Elements to attach the input handler too.
         */
        attachInputs(...var_args: Element[]): void;
        
        /**
         * Detaches the input handler from multuple elements.
         * @param {...Element} var_args Variable arguments for elements to unbind from.
         */
        detachInputs(...var_args: Element[]): void;
        
        /**
         * Selects the given row.  Implements the SelectionHandler interface.
         * @param {Object} row The row to select.
         * @param {boolean=} opt_multi Should this be treated as a single or multi-token
         *     auto-complete?  Overrides previous setting of opt_multi on constructor.
         * @return {boolean} Whether to suppress the update event.
         */
        selectRow(row: Object, opt_multi?: boolean): boolean;
        
        /**
         * Sets the text of the current token without updating the autocomplete
         * choices.
         * @param {string} tokenText The text for the current token.
         * @param {boolean=} opt_multi Should this be treated as a single or multi-token
         *     auto-complete?  Overrides previous setting of opt_multi on constructor.
         * @protected
         */
        setTokenText(tokenText: string, opt_multi?: boolean): void;
        
        /**
         * Sets the entry separator characters.
         *
         * @param {string} separators The separator characters to set.
         * @param {string=} opt_defaultSeparators The defaultSeparator character to set.
         */
        setSeparators(separators: string, opt_defaultSeparators?: string): void;
        
        /**
         * Sets whether to flip the orientation of up & down for hiliting next
         * and previous autocomplete entries.
         * @param {boolean} upsideDown Whether the orientation is upside down.
         */
        setUpsideDown(upsideDown: boolean): void;
        
        /**
         * Sets whether auto-completed tokens should be wrapped with whitespace.
         * @param {boolean} newValue boolean value indicating whether or not
         *     auto-completed tokens should be wrapped with whitespace.
         */
        setWhitespaceWrapEntries(newValue: boolean): void;
        
        /**
         * Sets whether new tokens should be generated from literals.  That is, should
         * hello'world be two tokens, assuming ' is a literal?
         * @param {boolean} newValue boolean value indicating whether or not
         * new tokens should be generated from literals.
         */
        setGenerateNewTokenOnLiteral(newValue: boolean): void;
        
        /**
         * Sets the regular expression used to trim the tokens before passing them to
         * the matcher:  every substring that matches the given regular expression will
         * be removed.  This can also be set to null to disable trimming.
         * @param {RegExp} trimmer Regexp to use for trimming or null to disable it.
         */
        setTrimmingRegExp(trimmer: RegExp): void;
        
        /**
         * Sets whether we will prevent the default input behavior (moving focus to the
         * next focusable  element) on TAB.
         * @param {boolean} newValue Whether to preventDefault on TAB.
         */
        setPreventDefaultOnTab(newValue: boolean): void;
        
        /**
         * Sets whether we will prevent highlighted item selection on TAB.
         * @param {boolean} newValue Whether to prevent selection on TAB.
         */
        setPreventSelectionOnTab(newValue: boolean): void;
        
        /**
         * Sets whether separators perform autocomplete.
         * @param {boolean} newValue Whether to autocomplete on separators.
         */
        setSeparatorCompletes(newValue: boolean): void;
        
        /**
         * Sets whether separators perform autocomplete.
         * @param {boolean} newValue Whether to autocomplete on separators.
         */
        setSeparatorSelects(newValue: boolean): void;
        
        /**
         * Gets the time to wait before updating the results. If the update during
         * typing flag is switched on, this delay counts from the last update,
         * otherwise from the last keypress.
         * @return {number} Throttle time in milliseconds.
         */
        getThrottleTime(): number;
        
        /**
         * Sets whether a row has just been selected.
         * @param {boolean} justSelected Whether or not the row has just been selected.
         */
        setRowJustSelected(justSelected: boolean): void;
        
        /**
         * Sets the time to wait before updating the results.
         * @param {number} time New throttle time in milliseconds.
         */
        setThrottleTime(time: number): void;
        
        /**
         * Gets whether the result list is updated during typing.
         * @return {boolean} Value of the flag.
         */
        getUpdateDuringTyping(): boolean;
        
        /**
         * Sets whether the result list should be updated during typing.
         * @param {boolean} value New value of the flag.
         */
        setUpdateDuringTyping(value: boolean): void;
        
        /**
         * Handles a key event.
         * @param {goog.events.BrowserEvent} e Browser event object.
         * @return {boolean} True if the key event was handled.
         * @protected
         */
        handleKeyEvent(e: goog.events.BrowserEvent): boolean;
        
        /**
         * @return {boolean} Whether this inputhandler need to listen on key-up.
         * @protected
         */
        needKeyUpListener(): boolean;
        
        /**
         * Handles the key up event. Registered only if needKeyUpListener returns true.
         * @param {goog.events.Event} e The keyup event.
         * @return {boolean} Whether an action was taken or not.
         * @protected
         */
        handleKeyUp(e: goog.events.Event): boolean;
        
        /**
         * Handles an element getting focus.
         * @param {goog.events.Event} e Browser event object.
         * @protected
         */
        handleFocus(e: goog.events.Event): void;
        
        /**
         * Registers handlers for the active element when it receives focus.
         * @param {Element} target The element to focus.
         * @protected
         */
        processFocus(target: Element): void;
        
        /**
         * Handles an element blurring.
         * @param {goog.events.Event=} opt_e Browser event object.
         * @protected
         */
        handleBlur(opt_e?: goog.events.Event): void;
        
        /**
         * Helper function that does the logic to handle an element blurring.
         * @protected
         */
        processBlur(): void;
        
        /**
         * For subclasses to override to handle the mouse-down event.
         * @param {goog.events.BrowserEvent} e Browser event object.
         * @protected
         */
        handleMouseDown(e: goog.events.BrowserEvent): void;
        
        /**
         * Checks if an update has occurred and notified the autocomplete of the new
         * token.
         * @param {boolean=} opt_force If true the menu will be forced to update.
         */
        update(opt_force?: boolean): void;
        
        /**
         * Parses a text area or input box for the currently highlighted token.
         * @return {string} Token to complete.
         * @protected
         */
        parseToken(): string;
    }
}
