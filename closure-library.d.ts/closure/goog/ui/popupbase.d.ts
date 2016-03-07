declare module goog {
    function require(name: 'goog.ui.PopupBase'): typeof goog.ui.PopupBase;
    function require(name: 'goog.ui.PopupBase.Type'): typeof goog.ui.PopupBase.Type;
    function require(name: 'goog.ui.PopupBase.EventType'): typeof goog.ui.PopupBase.EventType;
}

declare module goog.ui {

    /**
     * The PopupBase class provides functionality for showing and hiding a generic
     * container element. It also provides the option for hiding the popup element
     * if the user clicks outside the popup or the popup loses focus.
     *
     * @constructor
     * @extends {goog.events.EventTarget}
     * @param {Element=} opt_element A DOM element for the popup.
     * @param {goog.ui.PopupBase.Type=} opt_type Type of popup.
     */
    class PopupBase extends goog.events.EventTarget {
        constructor(opt_element?: Element, opt_type?: goog.ui.PopupBase.Type);
        
        /**
         * A time in ms used to debounce events that happen right after each other.
         *
         * A note about why this is necessary. There are two cases to consider.
         * First case, a popup will usually see a focus event right after it's launched
         * because it's typical for it to be launched in a mouse-down event which will
         * then move focus to the launching button. We don't want to think this is a
         * separate user action moving focus. Second case, a user clicks on the
         * launcher button to close the menu. In that case, we'll close the menu in the
         * focus event and then show it again because of the mouse down event, even
         * though the intention is to just close the menu. This workaround appears to
         * be the least intrusive fix.
         *
         * @type {number}
         */
        static DEBOUNCE_DELAY_MS: number;
        
        /**
         * @return {goog.ui.PopupBase.Type} The type of popup this is.
         */
        getType(): goog.ui.PopupBase.Type;
        
        /**
         * Specifies the type of popup to use.
         *
         * @param {goog.ui.PopupBase.Type} type Type of popup.
         */
        setType(type: goog.ui.PopupBase.Type): void;
        
        /**
         * Returns whether the popup should hide itself asynchronously using a timeout
         * instead of synchronously.
         * @return {boolean} Whether to hide async.
         */
        shouldHideAsync(): boolean;
        
        /**
         * Sets whether the popup should hide itself asynchronously using a timeout
         * instead of synchronously.
         * @param {boolean} b Whether to hide async.
         */
        setShouldHideAsync(b: boolean): void;
        
        /**
         * Returns the dom element that should be used for the popup.
         *
         * @return {Element} The popup element.
         */
        getElement(): Element;
        
        /**
         * Specifies the dom element that should be used for the popup.
         *
         * @param {Element} elt A DOM element for the popup.
         */
        setElement(elt: Element): void;
        
        /**
         * Returns whether the Popup dismisses itself when the user clicks outside of
         * it.
         * @return {boolean} Whether the Popup autohides on an external click.
         */
        getAutoHide(): boolean;
        
        /**
         * Sets whether the Popup dismisses itself when the user clicks outside of it.
         * @param {boolean} autoHide Whether to autohide on an external click.
         */
        setAutoHide(autoHide: boolean): void;
        
        /**
         * Mouse events that occur within an autoHide partner will not hide a popup
         * set to autoHide.
         * @param {!Element} partner The auto hide partner element.
         */
        addAutoHidePartner(partner: Element): void;
        
        /**
         * Removes a previously registered auto hide partner.
         * @param {!Element} partner The auto hide partner element.
         */
        removeAutoHidePartner(partner: Element): void;
        
        /**
         * @return {boolean} Whether the Popup autohides on the escape key.
         */
        getHideOnEscape(): boolean;
        
        /**
         * Sets whether the Popup dismisses itself on the escape key.
         * @param {boolean} hideOnEscape Whether to autohide on the escape key.
         */
        setHideOnEscape(hideOnEscape: boolean): void;
        
        /**
         * @return {boolean} Whether cross iframe dismissal is enabled.
         */
        getEnableCrossIframeDismissal(): boolean;
        
        /**
         * Sets whether clicks in other iframes should dismiss this popup.  In some
         * cases it should be disabled, because it can cause spurious
         * @param {boolean} enable Whether to enable cross iframe dismissal.
         */
        setEnableCrossIframeDismissal(enable: boolean): void;
        
        /**
         * Returns the region inside which the Popup dismisses itself when the user
         * clicks, or null if it's the entire document.
         * @return {Element} The DOM element for autohide, or null if it hasn't been
         *     set.
         */
        getAutoHideRegion(): Element;
        
        /**
         * Sets the region inside which the Popup dismisses itself when the user
         * clicks.
         * @param {Element} element The DOM element for autohide.
         */
        setAutoHideRegion(element: Element): void;
        
        /**
         * Sets transition animation on showing and hiding the popup.
         * @param {goog.fx.Transition=} opt_showTransition Transition to play on
         *     showing the popup.
         * @param {goog.fx.Transition=} opt_hideTransition Transition to play on
         *     hiding the popup.
         */
        setTransition(opt_showTransition?: goog.fx.Transition, opt_hideTransition?: goog.fx.Transition): void;
        
        /**
         * Returns the time when the popup was last shown.
         *
         * @return {number} time in ms since epoch when the popup was last shown, or
         * -1 if the popup was never shown.
         */
        getLastShowTime(): number;
        
        /**
         * Returns the time when the popup was last hidden.
         *
         * @return {number} time in ms since epoch when the popup was last hidden, or
         * -1 if the popup was never hidden or is currently showing.
         */
        getLastHideTime(): number;
        
        /**
         * Returns the event handler for the popup. All event listeners belonging to
         * this handler are removed when the tooltip is hidden. Therefore,
         * the recommended usage of this handler is to listen on events in
         * {@link #onShow_}.
         * @return {goog.events.EventHandler<T>} Event handler for this popup.
         * @protected
         * @this T
         * @template T
         */
        getHandler<T>(): goog.events.EventHandler<T>;
        
        /**
         * Returns whether the popup is currently visible.
         *
         * @return {boolean} whether the popup is currently visible.
         */
        isVisible(): boolean;
        
        /**
         * Returns whether the popup is currently visible or was visible within about
         * 150 ms ago. This is used by clients to handle a very specific, but common,
         * popup scenario. The button that launches the popup should close the popup
         * on mouse down if the popup is alrady open. The problem is that the popup
         * closes itself during the capture phase of the mouse down and thus the button
         * thinks it's hidden and this should show it again. This method provides a
         * good heuristic for clients. Typically in their event handler they will have
         * code that is:
         *
         * if (menu.isOrWasRecentlyVisible()) {
         *   menu.setVisible(false);
         * } else {
         *   ... // code to position menu and initialize other state
         *   menu.setVisible(true);
         * }
         * @return {boolean} Whether the popup is currently visible or was visible
         *     within about 150 ms ago.
         */
        isOrWasRecentlyVisible(): boolean;
        
        /**
         * Sets whether the popup should be visible. After this method
         * returns, isVisible() will always return the new state, even if
         * there is a transition.
         *
         * @param {boolean} visible Desired visibility state.
         */
        setVisible(visible: boolean): void;
        
        /**
         * Repositions the popup according to the current state.
         * Should be overriden by subclases.
         */
        reposition(): void;
        
        /**
         * Shows the popup element.
         * @protected
         */
        showPopupElement(): void;
        
        /**
         * Hides the popup element.
         * @protected
         */
        hidePopupElement(): void;
        
        /**
         * Called before the popup is shown. Derived classes can override to hook this
         * event but should make sure to call the parent class method.
         *
         * @return {boolean} If anyone called preventDefault on the event object (or
         *     if any of the handlers returns false this will also return false.
         * @protected
         */
        onBeforeShow(): boolean;
        
        /**
         * Called after the popup is shown. Derived classes can override to hook this
         * event but should make sure to call the parent class method.
         * @protected
         * @suppress {underscore|visibility}
         */
        onShow_(): void;
        
        /**
         * Called before the popup is hidden. Derived classes can override to hook this
         * event but should make sure to call the parent class method.
         *
         * @param {Object=} opt_target Target of the event causing the hide.
         * @return {boolean} If anyone called preventDefault on the event object (or
         *     if any of the handlers returns false this will also return false.
         * @protected
         * @suppress {underscore|visibility}
         */
        onBeforeHide_(opt_target?: Object): boolean;
        
        /**
         * Called after the popup is hidden. Derived classes can override to hook this
         * event but should make sure to call the parent class method.
         * @param {Object=} opt_target Target of the event causing the hide.
         * @protected
         * @suppress {underscore|visibility}
         */
        onHide_(opt_target?: Object): void;
    }
}

declare module goog.ui.PopupBase {

    /**
     * Constants for type of Popup
     * @enum {string}
     */
    type Type = string;
    var Type: {
        TOGGLE_DISPLAY: Type;
        MOVE_OFFSCREEN: Type;
    };

    /**
     * Constants for event type fired by Popup
     *
     * @enum {string}
     */
    type EventType = string;
    var EventType: {
        BEFORE_SHOW: EventType;
        SHOW: EventType;
        BEFORE_HIDE: EventType;
        HIDE: EventType;
    };
}
