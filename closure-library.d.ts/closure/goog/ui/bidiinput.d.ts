declare module goog {
    function require(name: 'goog.ui.BidiInput'): typeof goog.ui.BidiInput;
}

declare module goog.ui {

    /**
     * Default implementation of BidiInput.
     *
     * @param {goog.dom.DomHelper=} opt_domHelper  Optional DOM helper.
     * @constructor
     * @extends {goog.ui.Component}
     */
    class BidiInput extends goog.ui.Component {
        constructor(opt_domHelper?: goog.dom.DomHelper);
        
        /**
         * Decorates the given HTML element as a BidiInput. The HTML element can be an
         * input element with type='text', a textarea element, or any contenteditable.
         * Overrides {@link goog.ui.Component#decorateInternal}.  Considered protected.
         * @param {Element} element  Element to decorate.
         * @protected
         * @override
         */
        decorateInternal(element: Element): void;
        
        /**
         * Returns the direction of the input element.
         * @return {?string} Return 'rtl' for right-to-left text,
         *     'ltr' for left-to-right text, or null if the value itself is not
         *     enough to determine directionality (e.g. an empty value), and the
         *     direction is inherited from a parent element (typically the body
         *     element).
         */
        getDirection(): string;
        
        /**
         * Sets the value of the underlying input field, and sets the direction
         * according to the given value.
         * @param {string} value  The Value to set in the underlying input field.
         */
        setValue(value: string): void;
        
        /**
         * Returns the value of the underlying input field.
         * @return {string} Value of the underlying input field.
         */
        getValue(): string;
    }
}
