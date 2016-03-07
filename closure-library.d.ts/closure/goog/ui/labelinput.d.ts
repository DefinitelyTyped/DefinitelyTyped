declare module goog {
    function require(name: 'goog.ui.LabelInput'): typeof goog.ui.LabelInput;
}

declare module goog.ui {

    /**
     * This creates the label input object.
     * @param {string=} opt_label The text to show as the label.
     * @param {goog.dom.DomHelper=} opt_domHelper Optional DOM helper.
     * @extends {goog.ui.Component}
     * @constructor
     */
    class LabelInput extends goog.ui.Component {
        constructor(opt_label?: string, opt_domHelper?: goog.dom.DomHelper);
        
        /**
         * The label restore delay after leaving the input.
         * @type {number} Delay for restoring the label.
         * @protected
         */
        labelRestoreDelayMs: number;
        
        /**
         * The CSS class name to add to the input when the user has not entered a
         * value.
         */
        labelCssClassName: any;
        
        /**
         * Decorates an existing HTML input element as a label input. If the element
         * has a "label" attribute then that will be used as the label property for the
         * label input object.
         * @param {Element} element The HTML input element to decorate.
         * @override
         */
        decorateInternal(element: Element): void;
        
        /**
         * @return {boolean} Whether the control is currently focused on.
         */
        hasFocus(): boolean;
        
        /**
         * @return {boolean} Whether the value has been changed by the user.
         */
        hasChanged(): boolean;
        
        /**
         * Clears the value of the input element without resetting the default text.
         */
        clear(): void;
        
        /**
         * Clears the value of the input element and resets the default text.
         */
        reset(): void;
        
        /**
         * Use this to set the value through script to ensure that the label state is
         * up to date
         * @param {string} s The new value for the input.
         */
        setValue(s: string): void;
        
        /**
         * Returns the current value of the text box, returning an empty string if the
         * search box is the default value
         * @return {string} The value of the input box.
         */
        getValue(): string;
        
        /**
         * Sets the label text as aria-label, and placeholder when supported.
         * @param {string} label The text to show as the label.
         */
        setLabel(label: string): void;
        
        /**
         * @return {string} The text to show as the label.
         */
        getLabel(): string;
        
        /**
         * This method focuses the input and selects all the text. If the value hasn't
         * changed it will set the value to the label so that the label text is
         * selected.
         */
        focusAndSelect(): void;
        
        /**
         * Enables/Disables the label input.
         * @param {boolean} enabled Whether to enable (true) or disable (false) the
         *     label input.
         */
        setEnabled(enabled: boolean): void;
        
        /**
         * @return {boolean} True if the label input is enabled, false otherwise.
         */
        isEnabled(): boolean;
    }
}
