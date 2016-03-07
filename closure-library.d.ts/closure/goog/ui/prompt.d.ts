declare module goog {
    function require(name: 'goog.ui.Prompt'): typeof goog.ui.Prompt;
}

declare module goog.ui {

    /**
     * Creates an object that represents a prompt (used in place of javascript's
     * prompt). The html structure of the prompt is the same as the layout for
     * dialog.js except for the addition of a text box which is placed inside the
     * "Content area" and has the default class-name 'modal-dialog-userInput'
     *
     * @param {string} promptTitle The title of the prompt.
     * @param {string|!goog.html.SafeHtml} promptHtml The HTML body of the prompt.
     *     The variable is trusted and it should be already properly escaped.
     * @param {Function} callback The function to call when the user selects Ok or
     *     Cancel. The function should expect a single argument which represents
     *     what the user entered into the prompt. If the user presses cancel, the
     *     value of the argument will be null.
     * @param {string=} opt_defaultValue Optional default value that should be in
     *     the text box when the prompt appears.
     * @param {string=} opt_class Optional prefix for the classes.
     * @param {boolean=} opt_useIframeForIE For IE, workaround windowed controls
     *     z-index issue by using a an iframe instead of a div for bg element.
     * @param {goog.dom.DomHelper=} opt_domHelper Optional DOM helper; see {@link
     *    goog.ui.Component} for semantics.
     * @constructor
     * @extends {goog.ui.Dialog}
     */
    class Prompt extends goog.ui.Dialog {
        constructor(promptTitle: string, promptHtml: string|goog.html.SafeHtml, callback: Function, opt_defaultValue?: string, opt_class?: string, opt_useIframeForIE?: boolean, opt_domHelper?: goog.dom.DomHelper);
        
        /**
         * Sets the validation function that takes a string and returns true if the
         * string is accepted, false otherwise.
         * @param {function(string): boolean} fn The validation function to use on user
         *     input.
         */
        setValidationFunction(fn: (arg0: string) => boolean): void;
        
        /**
         * @return {HTMLInputElement} The user input element. May be null if the Prompt
         *     has not been rendered.
         */
        getInputElement(): HTMLInputElement;
        
        /**
         * Sets an input decorator function.  This function will be called in
         * #enterDocument and will be passed the input element.  This is useful for
         * attaching handlers to the input element for specific change events,
         * for example.
         * @param {function(Element)} inputDecoratorFn A function to call on the input
         *     element on #enterDocument.
         */
        setInputDecoratorFn(inputDecoratorFn: (arg0: Element) => any): void;
        
        /**
         * Set the number of rows in the user input element.
         * A values of 1 means use an <input> element.  If the prompt is already
         * rendered then you cannot change from <input> to <textarea> or vice versa.
         * @param {number} rows Number of rows for user input element.
         * @throws {goog.ui.Component.Error.ALREADY_RENDERED} If the component is
         *    already rendered and an attempt to change between <input> and <textarea>
         *    is made.
         */
        setRows(rows: number): void;
        
        /**
         * @return {number} The number of rows in the user input element.
         */
        getRows(): number;
        
        /**
         * Set the number of cols in the user input element.
         * @param {number} cols Number of cols for user input element.
         */
        setCols(cols: number): void;
        
        /**
         * @return {number} The number of cols in the user input element.
         */
        getCols(): number;
        
        /**
         * Causes the prompt to appear, centered on the screen, gives focus
         * to the text box, and selects the text
         * @param {boolean} visible Whether the dialog should be visible.
         * @override
         */
        setVisible(visible: boolean): void;
        
        /**
         * Sets the default value of the prompt when it is displayed.
         * @param {string} defaultValue The default value to display.
         */
        setDefaultValue(defaultValue: string): void;
    }
}
