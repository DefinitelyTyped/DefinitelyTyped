declare module goog {
    function require(name: 'goog.ui.Dialog'): typeof goog.ui.Dialog;
    function require(name: 'goog.ui.Dialog.EventType'): typeof goog.ui.Dialog.EventType;
    function require(name: 'goog.ui.Dialog.DefaultButtonKeys'): typeof goog.ui.Dialog.DefaultButtonKeys;
    function require(name: 'goog.ui.Dialog.DefaultButtonCaptions'): typeof goog.ui.Dialog.DefaultButtonCaptions;
    function require(name: 'goog.ui.Dialog.Event'): typeof goog.ui.Dialog.Event;
    function require(name: 'goog.ui.Dialog.ButtonSet'): typeof goog.ui.Dialog.ButtonSet;
    function require(name: 'goog.ui.Dialog.ButtonSet.DefaultButtons'): typeof goog.ui.Dialog.ButtonSet.DefaultButtons;
}

declare module goog.ui {

    /**
     * Class for showing simple dialog boxes.
     * The Html structure of the dialog box is:
     * <pre>
     *  Element         Function                Class-name, modal-dialog = default
     * ----------------------------------------------------------------------------
     * - iframe         Iframe mask              modal-dialog-bg
     * - div            Background mask          modal-dialog-bg
     * - div            Dialog area              modal-dialog
     *     - div        Title bar                modal-dialog-title
     *        - span                             modal-dialog-title-text
     *          - text  Title text               N/A
     *        - span                             modal-dialog-title-close
     *          - ??    Close box                N/A
     *     - div        Content area             modal-dialog-content
     *        - ??      User specified content   N/A
     *     - div        Button area              modal-dialog-buttons
     *        - button                           N/A
     *        - button
     *        - ...
     * </pre>
     * @constructor
     * @param {string=} opt_class CSS class name for the dialog element, also used
     *     as a class name prefix for related elements; defaults to modal-dialog.
     *     This should be a single, valid CSS class name.
     * @param {boolean=} opt_useIframeMask Work around windowed controls z-index
     *     issue by using an iframe instead of a div for bg element.
     * @param {goog.dom.DomHelper=} opt_domHelper Optional DOM helper; see {@link
     *     goog.ui.Component} for semantics.
     * @extends {goog.ui.ModalPopup}
     */
    class Dialog extends goog.ui.ModalPopup {
        constructor(opt_class?: string, opt_useIframeMask?: boolean, opt_domHelper?: goog.dom.DomHelper);
        
        /**
         * Event type constant for dialog events.
         * TODO(attila): Change this to goog.ui.Dialog.EventType.SELECT.
         * @type {string}
         * @deprecated Use goog.ui.Dialog.EventType.SELECT.
         */
        static SELECT_EVENT: string;
        
        /**
         * Sets the title.
         * @param {string} title The title text.
         */
        setTitle(title: string): void;
        
        /**
         * Gets the title.
         * @return {string} The title.
         */
        getTitle(): string;
        
        /**
         * Allows arbitrary HTML to be set in the content element.
         * TODO(user): Deprecate in favor of setSafeHtmlContent, once developer docs on
         * using goog.html.SafeHtml are in place.
         * @param {string} html Content HTML.
         */
        setContent(html: string): void;
        
        /**
         * Allows arbitrary HTML to be set in the content element.
         * @param {!goog.html.SafeHtml} html Content HTML.
         */
        setSafeHtmlContent(html: goog.html.SafeHtml): void;
        
        /**
         * Gets the content HTML of the content element as a plain string.
         *
         * Note that this method returns the HTML markup that was previously set via
         * setContent(). In particular, the HTML returned by this method does not
         * reflect any changes to the content element's DOM that were made my means
         * other than setContent().
         *
         * @return {string} Content HTML.
         */
        getContent(): string;
        
        /**
         * Gets the content HTML of the content element.
         * @return {goog.html.SafeHtml} Content HTML.
         */
        getSafeHtmlContent(): goog.html.SafeHtml;
        
        /**
         * Returns the dialog's preferred ARIA role. This can be used to override the
         * default dialog role, e.g. with an ARIA role of ALERTDIALOG for a simple
         * warning or confirmation dialog.
         * @return {goog.a11y.aria.Role} This dialog's preferred ARIA role.
         */
        getPreferredAriaRole(): goog.a11y.aria.Role;
        
        /**
         * Sets the dialog's preferred ARIA role. This can be used to override the
         * default dialog role, e.g. with an ARIA role of ALERTDIALOG for a simple
         * warning or confirmation dialog.
         * @param {goog.a11y.aria.Role} role This dialog's preferred ARIA role.
         */
        setPreferredAriaRole(role: goog.a11y.aria.Role): void;
        
        /**
         * Returns the content element so that more complicated things can be done with
         * the content area.  Renders if the DOM is not yet created.  Overrides
         * {@link goog.ui.Component#getContentElement}.
         * @return {Element} The content element.
         * @override
         */
        getContentElement(): Element;
        
        /**
         * Returns the title element so that more complicated things can be done with
         * the title.  Renders if the DOM is not yet created.
         * @return {Element} The title element.
         */
        getTitleElement(): Element;
        
        /**
         * Returns the title text element so that more complicated things can be done
         * with the text of the title.  Renders if the DOM is not yet created.
         * @return {Element} The title text element.
         */
        getTitleTextElement(): Element;
        
        /**
         * Returns the title close element so that more complicated things can be done
         * with the close area of the title.  Renders if the DOM is not yet created.
         * @return {Element} The close box.
         */
        getTitleCloseElement(): Element;
        
        /**
         * Returns the button element so that more complicated things can be done with
         * the button area.  Renders if the DOM is not yet created.
         * @return {Element} The button container element.
         */
        getButtonElement(): Element;
        
        /**
         * Returns the dialog element so that more complicated things can be done with
         * the dialog box.  Renders if the DOM is not yet created.
         * @return {Element} The dialog element.
         */
        getDialogElement(): Element;
        
        /**
         * Returns the background mask element so that more complicated things can be
         * done with the background region.  Renders if the DOM is not yet created.
         * @return {Element} The background mask element.
         * @override
         */
        getBackgroundElement(): Element;
        
        /**
         * Gets the opacity of the background mask.
         * @return {number} Background mask opacity.
         */
        getBackgroundElementOpacity(): number;
        
        /**
         * Sets the opacity of the background mask.
         * @param {number} opacity Background mask opacity.
         */
        setBackgroundElementOpacity(opacity: number): void;
        
        /**
         * Sets the modal property of the dialog. In case the dialog is already
         * inDocument, renders the modal background elements according to the specified
         * modal parameter.
         *
         * Note that non-modal dialogs cannot use an iframe mask.
         *
         * @param {boolean} modal Whether the dialog is modal.
         */
        setModal(modal: boolean): void;
        
        /**
         * @return {boolean} modal Whether the dialog is modal.
         */
        getModal(): boolean;
        
        /**
         * @return {string} The CSS class name for the dialog element.
         */
        getClass(): string;
        
        /**
         * Sets whether the dialog can be dragged.
         * @param {boolean} draggable Whether the dialog can be dragged.
         */
        setDraggable(draggable: boolean): void;
        
        /**
         * Returns a dragger for moving the dialog and adds a class for the move cursor.
         * Defaults to allow dragging of the title only, but can be overridden if
         * different drag targets or dragging behavior is desired.
         * @return {!goog.fx.Dragger} The created dragger instance.
         * @protected
         */
        createDragger(): goog.fx.Dragger;
        
        /**
         * @return {boolean} Whether the dialog is draggable.
         */
        getDraggable(): boolean;
        
        /**
         * Sets the visibility of the dialog box and moves focus to the
         * default button. Lazily renders the component if needed. After this
         * method returns, isVisible() will always return the new state, even
         * if there is a transition.
         * @param {boolean} visible Whether the dialog should be visible.
         * @override
         */
        setVisible(visible: boolean): void;
        
        /**
         * @return {boolean} Whether this dialog has a title close button.
         */
        getHasTitleCloseButton(): boolean;
        
        /**
         * Sets whether the dialog should have a close button in the title bar. There
         * will always be an element for the title close button, but setting this
         * parameter to false will cause it to be hidden and have no active listener.
         * @param {boolean} b Whether this dialog should have a title close button.
         */
        setHasTitleCloseButton(b: boolean): void;
        
        /**
         * @return {boolean} Whether the escape key should close this dialog.
         */
        isEscapeToCancel(): boolean;
        
        /**
         * @param {boolean} b Whether the escape key should close this dialog.
         */
        setEscapeToCancel(b: boolean): void;
        
        /**
         * Sets whether the dialog should be disposed when it is hidden.  By default
         * dialogs are not disposed when they are hidden.
         * @param {boolean} b Whether the dialog should get disposed when it gets
         *     hidden.
         */
        setDisposeOnHide(b: boolean): void;
        
        /**
         * @return {boolean} Whether the dialog should be disposed when it is hidden.
         */
        getDisposeOnHide(): boolean;
        
        /**
         * Sets the button set to use.
         * Note: Passing in null will cause no button set to be rendered.
         * @param {goog.ui.Dialog.ButtonSet?} buttons The button set to use.
         */
        setButtonSet(buttons: goog.ui.Dialog.ButtonSet): void;
        
        /**
         * Returns the button set being used.
         * @return {goog.ui.Dialog.ButtonSet?} The button set being used.
         */
        getButtonSet(): goog.ui.Dialog.ButtonSet;
    }
}

declare module goog.ui.Dialog {

    /**
     * Events dispatched by dialogs.
     * @enum {string}
     */
    type EventType = string;
    var EventType: {
        [index: string]: EventType;
        // SELECT: EventType;
        // AFTER_HIDE: EventType;
        // AFTER_SHOW: EventType;
    };

    /**
     * The keys used to identify standard buttons in events.
     * @enum {string}
     */
    type DefaultButtonKeys = string;
    var DefaultButtonKeys: {
        OK: DefaultButtonKeys;
        CANCEL: DefaultButtonKeys;
        YES: DefaultButtonKeys;
        NO: DefaultButtonKeys;
        SAVE: DefaultButtonKeys;
        CONTINUE: DefaultButtonKeys;
    };

    /**
     * The default captions for the default buttons.
     * @enum {string}
     */
    type DefaultButtonCaptions = string;
    var DefaultButtonCaptions: {
        OK: DefaultButtonCaptions;
        CANCEL: DefaultButtonCaptions;
        YES: DefaultButtonCaptions;
        NO: DefaultButtonCaptions;
        SAVE: DefaultButtonCaptions;
        CONTINUE: DefaultButtonCaptions;
    };

    /**
     * Dialog event class.
     * @param {string} key Key identifier for the button.
     * @param {string|Element} caption Caption on the button (might be i18nlized).
     * @constructor
     * @extends {goog.events.Event}
     */
    class Event extends goog.events.Event {
        constructor(key: string, caption: string|Element);
    }

    /**
     * A button set defines the behaviour of a set of buttons that the dialog can
     * show.  Uses the {@link goog.structs.Map} interface.
     * @param {goog.dom.DomHelper=} opt_domHelper Optional DOM helper; see {@link
     *    goog.ui.Component} for semantics.
     * @constructor
     * @extends {goog.structs.Map}
     */
    class ButtonSet extends goog.structs.Map<any, any> {
        constructor(opt_domHelper?: goog.dom.DomHelper);
        
        /**
         * Adds a button to the button set.  Buttons will be displayed in the order they
         * are added.
         *
         * @param {*} key Key used to identify the button in events.
         * @param {*} caption A string caption or a DOM node that can be
         *     appended to a button element.
         * @param {boolean=} opt_isDefault Whether this button is the default button,
         *     Dialog will dispatch for this button if enter is pressed.
         * @param {boolean=} opt_isCancel Whether this button has the same behaviour as
         *    cancel.  If escape is pressed this button will fire.
         * @return {!goog.ui.Dialog.ButtonSet} The button set, to make it easy to chain
         *    "set" calls and build new ButtonSets.
         * @override
         */
        set(key: any, caption: any, opt_isDefault?: boolean, opt_isCancel?: boolean): goog.ui.Dialog.ButtonSet;
        
        /**
         * Adds a button (an object with a key and caption) to this button set. Buttons
         * will be displayed in the order they are added.
         * @see goog.ui.Dialog.DefaultButtons
         * @param {{key: string, caption: string}} button The button key and caption.
         * @param {boolean=} opt_isDefault Whether this button is the default button.
         *     Dialog will dispatch for this button if enter is pressed.
         * @param {boolean=} opt_isCancel Whether this button has the same behavior as
         *     cancel. If escape is pressed this button will fire.
         * @return {!goog.ui.Dialog.ButtonSet} The button set, to make it easy to chain
         *     "addButton" calls and build new ButtonSets.
         */
        addButton(button: {key: string; caption: string}, opt_isDefault?: boolean, opt_isCancel?: boolean): goog.ui.Dialog.ButtonSet;
        
        /**
         * Attaches the button set to an element, rendering it inside.
         * @param {Element} el Container.
         */
        attachToElement(el: Element): void;
        
        /**
         * Renders the button set inside its container element.
         */
        render(): void;
        
        /**
         * Decorates the given element by adding any {@code button} elements found
         * among its descendants to the button set.  The first button found is assumed
         * to be the default and will receive focus when the button set is rendered.
         * If a button with a name of {@link goog.ui.Dialog.DefaultButtonKeys.CANCEL}
         * is found, it is assumed to have "Cancel" semantics.
         * TODO(attila):  ButtonSet should be a goog.ui.Component.  Really.
         * @param {Element} element The element to decorate; should contain buttons.
         */
        decorate(element: Element): void;
        
        /**
         * Gets the component's element.
         * @return {Element} The element for the component.
         * TODO(user): Remove after refactoring to goog.ui.Component.
         */
        getElement(): Element;
        
        /**
         * Returns the dom helper that is being used on this component.
         * @return {!goog.dom.DomHelper} The dom helper used on this component.
         * TODO(user): Remove after refactoring to goog.ui.Component.
         */
        getDomHelper(): goog.dom.DomHelper;
        
        /**
         * Sets the default button.
         * @param {?string} key The default button.
         */
        setDefault(key: string): void;
        
        /**
         * Returns the default button.
         * @return {?string} The default button.
         */
        getDefault(): string;
        
        /**
         * Sets the cancel button.
         * @param {?string} key The cancel button.
         */
        setCancel(key: string): void;
        
        /**
         * Returns the cancel button.
         * @return {?string} The cancel button.
         */
        getCancel(): string;
        
        /**
         * Returns the HTML Button element.
         * @param {string} key The button to return.
         * @return {Element} The button, if found else null.
         */
        getButton(key: string): Element;
        
        /**
         * Returns all the HTML Button elements in the button set container.
         * @return {!NodeList} A live NodeList of the buttons.
         */
        getAllButtons(): NodeList;
        
        /**
         * Enables or disables a button in this set by key. If the button is not found,
         * does nothing.
         * @param {string} key The button to enable or disable.
         * @param {boolean} enabled True to enable; false to disable.
         */
        setButtonEnabled(key: string, enabled: boolean): void;
        
        /**
         * Enables or disables all of the buttons in this set.
         * @param {boolean} enabled True to enable; false to disable.
         */
        setAllButtonsEnabled(enabled: boolean): void;
        
        /**
         * Creates a new ButtonSet with a single 'OK' button, which is also set with
         * cancel button semantics so that pressing escape will close the dialog.
         * @return {!goog.ui.Dialog.ButtonSet} The created ButtonSet.
         */
        static createOk(): goog.ui.Dialog.ButtonSet;
        
        /**
         * Creates a new ButtonSet with 'OK' (default) and 'Cancel' buttons.
         * @return {!goog.ui.Dialog.ButtonSet} The created ButtonSet.
         */
        static createOkCancel(): goog.ui.Dialog.ButtonSet;
        
        /**
         * Creates a new ButtonSet with 'Yes' (default) and 'No' buttons.
         * @return {!goog.ui.Dialog.ButtonSet} The created ButtonSet.
         */
        static createYesNo(): goog.ui.Dialog.ButtonSet;
        
        /**
         * Creates a new ButtonSet with 'Yes', 'No' (default), and 'Cancel' buttons.
         * @return {!goog.ui.Dialog.ButtonSet} The created ButtonSet.
         */
        static createYesNoCancel(): goog.ui.Dialog.ButtonSet;
        
        /**
         * Creates a new ButtonSet with 'Continue', 'Save', and 'Cancel' (default)
         * buttons.
         * @return {!goog.ui.Dialog.ButtonSet} The created ButtonSet.
         */
        static createContinueSaveCancel(): goog.ui.Dialog.ButtonSet;
    }
}

declare module goog.ui.Dialog.ButtonSet {

    /**
     * The standard buttons (keys associated with captions).
     * @enum {{key: string, caption: string}}
     */
    type DefaultButtons = {key: string; caption: string};
    var DefaultButtons: {
        OK: DefaultButtons;
        CANCEL: DefaultButtons;
        YES: DefaultButtons;
        NO: DefaultButtons;
        SAVE: DefaultButtons;
        CONTINUE: DefaultButtons;
    };
}
