declare module goog {
    function require(name: 'goog.ui.CharCounter'): typeof goog.ui.CharCounter;
    function require(name: 'goog.ui.CharCounter.Display'): typeof goog.ui.CharCounter.Display;
}

declare module goog.ui {

    /**
     * CharCounter widget. Counts the number of characters in a input field or a
     * text box and displays the number of additional characters that may be
     * entered before the maximum length is reached.
     *
     * @extends {goog.events.EventTarget}
     * @param {HTMLInputElement|HTMLTextAreaElement} elInput Input or text area
     *     element to count the number of characters in.
     * @param {Element} elCount HTML element to display the remaining number of
     *     characters in. You can pass in null for this if you don't want to expose
     *     the number of chars remaining.
     * @param {number} maxLength The maximum length.
     * @param {goog.ui.CharCounter.Display=} opt_displayMode Display mode for this
     *     char counter. Defaults to {@link goog.ui.CharCounter.Display.REMAINING}.
     * @constructor
     * @final
     */
    class CharCounter extends goog.events.EventTarget {
        constructor(elInput: HTMLInputElement|HTMLTextAreaElement, elCount: Element, maxLength: number, opt_displayMode?: goog.ui.CharCounter.Display);
        
        /**
         * Sets the maximum length.
         *
         * @param {number} maxLength The maximum length.
         */
        setMaxLength(maxLength: number): void;
        
        /**
         * Returns the maximum length.
         *
         * @return {number} The maximum length.
         */
        getMaxLength(): number;
        
        /**
         * Sets the display mode.
         *
         * @param {!goog.ui.CharCounter.Display} displayMode The display mode.
         */
        setDisplayMode(displayMode: goog.ui.CharCounter.Display): void;
        
        /**
         * Returns the display mode.
         *
         * @return {!goog.ui.CharCounter.Display} The display mode.
         */
        getDisplayMode(): goog.ui.CharCounter.Display;
        
        /**
         * Checks length of text in input field and updates the counter. Truncates text
         * if the maximum lengths is exceeded.
         */
        checkLength(): void;
    }
}

declare module goog.ui.CharCounter {

    /**
     * Display mode for the char counter.
     * @enum {number}
     */
    type Display = number;
    var Display: {
        REMAINING: Display;
        INCREMENTAL: Display;
    };
}
