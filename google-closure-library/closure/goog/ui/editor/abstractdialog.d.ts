declare module goog {
    function require(name: 'goog.ui.editor.AbstractDialog'): typeof goog.ui.editor.AbstractDialog;
    function require(name: 'goog.ui.editor.AbstractDialog.EventType'): typeof goog.ui.editor.AbstractDialog.EventType;
    function require(name: 'goog.ui.editor.AbstractDialog.Builder'): typeof goog.ui.editor.AbstractDialog.Builder;
}

declare module goog.ui.editor {

    /**
     * Creates an object that represents a dialog box.
     * @param {goog.dom.DomHelper} domHelper DomHelper to be used to create the
     * dialog's dom structure.
     * @constructor
     * @extends {goog.events.EventTarget}
     */
    class AbstractDialog extends goog.events.EventTarget {
        constructor(domHelper: goog.dom.DomHelper);
        
        /**
         * The DOM helper for the parent document.
         * @type {goog.dom.DomHelper}
         * @protected
         */
        dom: goog.dom.DomHelper;
        
        /**
         * Causes the dialog box to appear, centered on the screen. Lazily creates the
         * dialog if needed.
         */
        show(): void;
        
        /**
         * Hides the dialog, causing AFTER_HIDE to fire.
         */
        hide(): void;
        
        /**
         * @return {boolean} Whether the dialog is open.
         */
        isOpen(): boolean;
        
        /**
         * Runs the handler registered on the OK button event and closes the dialog if
         * that handler succeeds.
         * This is useful in cases such as double-clicking an item in the dialog is
         * equivalent to selecting it and clicking the default button.
         * @protected
         */
        processOkAndClose(): void;
        
        /**
         * Creates and returns the goog.ui.Dialog control that is being wrapped
         * by this object.
         * @return {!goog.ui.Dialog} Created Dialog control.
         * @protected
         */
        createDialogControl(): goog.ui.Dialog;
        
        /**
         * Returns the HTML Button element for the OK button in this dialog.
         * @return {Element} The button element if found, else null.
         * @protected
         */
        getOkButtonElement(): Element;
        
        /**
         * Returns the HTML Button element for the Cancel button in this dialog.
         * @return {Element} The button element if found, else null.
         * @protected
         */
        getCancelButtonElement(): Element;
        
        /**
         * Returns the HTML Button element for the button added to this dialog with
         * the given button id.
         * @param {string} buttonId The id of the button to get.
         * @return {Element} The button element if found, else null.
         * @protected
         */
        getButtonElement(buttonId: string): Element;
        
        /**
         * Creates and returns the event object to be used when dispatching the OK
         * event to listeners, or returns null to prevent the dialog from closing.
         * Subclasses should override this to return their own subclass of
         * goog.events.Event that includes all data a plugin would need from the dialog.
         * @param {goog.events.Event} e The event object dispatched by the wrapped
         *     dialog.
         * @return {goog.events.Event} The event object to be used when dispatching the
         *     OK event to listeners.
         * @protected
         */
        createOkEvent(e: goog.events.Event): goog.events.Event;
        
        /**
         * Handles the event dispatched by the wrapped dialog control when the user
         * clicks the OK button. Attempts to create the OK event object and dispatches
         * it if successful.
         * @param {goog.ui.Dialog.Event} e wrapped dialog OK event object.
         * @return {boolean} Whether the default action (closing the dialog) should
         *     still be executed. This will be false if the OK event could not be
         *     created to be dispatched, or if any listener to that event returs false
         *     or calls preventDefault.
         * @protected
         */
        handleOk(e: goog.ui.Dialog.Event): boolean;
        
        /**
         * Handles the event dispatched by the wrapped dialog control when the user
         * clicks the Cancel button. Simply dispatches a CANCEL event.
         * @return {boolean} Returns false if any of the handlers called prefentDefault
         *     on the event or returned false themselves.
         * @protected
         */
        handleCancel(): boolean;
    }
}

declare module goog.ui.editor.AbstractDialog {

    /**
     * Event type constants for events the dialog fires.
     * @enum {string}
     */
    type EventType = string;
    var EventType: {
        [index: string]: EventType;
        // AFTER_HIDE: EventType;
        // CANCEL: EventType;
        // OK: EventType;
    };

    /**
     * A builder class for the dialog control. All methods except build return this.
     * @param {goog.ui.editor.AbstractDialog} editorDialog Editor dialog object
     *     that will wrap the wrapped dialog object this builder will create.
     * @constructor
     */
    class Builder {
        constructor(editorDialog: goog.ui.editor.AbstractDialog);
        
        /**
         * Sets the title of the dialog.
         * @param {string} title Title HTML (escaped).
         * @return {!goog.ui.editor.AbstractDialog.Builder} This.
         */
        setTitle(title: string): goog.ui.editor.AbstractDialog.Builder;
        
        /**
         * Adds an OK button to the dialog. Clicking this button will cause {@link
         * handleOk} to run, subsequently dispatching an OK event.
         * @param {string=} opt_label The caption for the button, if not "OK".
         * @return {!goog.ui.editor.AbstractDialog.Builder} This.
         */
        addOkButton(opt_label?: string): goog.ui.editor.AbstractDialog.Builder;
        
        /**
         * Adds a Cancel button to the dialog. Clicking this button will cause {@link
         * handleCancel} to run, subsequently dispatching a CANCEL event.
         * @param {string=} opt_label The caption for the button, if not "Cancel".
         * @return {!goog.ui.editor.AbstractDialog.Builder} This.
         */
        addCancelButton(opt_label?: string): goog.ui.editor.AbstractDialog.Builder;
        
        /**
         * Adds a custom button to the dialog.
         * @param {string} label The caption for the button.
         * @param {function(goog.ui.Dialog.EventType):*} handler Function called when
         *     the button is clicked. It is recommended that this function be a method
         *     in the concrete subclass of AbstractDialog using this Builder, and that
         *     it dispatch an event (see {@link handleOk}).
         * @param {string=} opt_buttonId Identifier to be used to access the button when
         *     calling AbstractDialog.getButtonElement().
         * @return {!goog.ui.editor.AbstractDialog.Builder} This.
         */
        addButton(label: string, handler: (arg0: goog.ui.Dialog.EventType) => any, opt_buttonId?: string): goog.ui.editor.AbstractDialog.Builder;
        
        /**
         * Puts a CSS class on the dialog's main element.
         * @param {string} className The class to add.
         * @return {!goog.ui.editor.AbstractDialog.Builder} This.
         */
        addClassName(className: string): goog.ui.editor.AbstractDialog.Builder;
        
        /**
         * Sets the content element of the dialog.
         * @param {Element} contentElem An element for the main body.
         * @return {!goog.ui.editor.AbstractDialog.Builder} This.
         */
        setContent(contentElem: Element): goog.ui.editor.AbstractDialog.Builder;
        
        /**
         * Builds the wrapped dialog control. May only be called once, after which
         * no more methods may be called on this builder.
         * @return {!goog.ui.Dialog} The wrapped dialog control.
         */
        build(): goog.ui.Dialog;
    }
}
