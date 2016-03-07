declare module goog {
    function require(name: 'goog.ui.Zippy'): typeof goog.ui.Zippy;
    function require(name: 'goog.ui.ZippyEvent'): typeof goog.ui.ZippyEvent;
}

declare module goog.ui {

    /**
     * Zippy widget. Expandable/collapsible container, clicking the header toggles
     * the visibility of the content.
     *
     * @extends {goog.events.EventTarget}
     * @param {Element|string|null} header Header element, either element
     *     reference, string id or null if no header exists.
     * @param {Element|string|function():Element=} opt_content Content element
     *     (if any), either element reference or string id.  If skipped, the caller
     *     should handle the TOGGLE event in its own way. If a function is passed,
     *     then if will be called to create the content element the first time the
     *     zippy is expanded.
     * @param {boolean=} opt_expanded Initial expanded/visibility state. If
     *     undefined, attempts to infer the state from the DOM. Setting visibility
     *     using one of the standard Soy templates guarantees correct inference.
     * @param {Element|string=} opt_expandedHeader Element to use as the header when
     *     the zippy is expanded.
     * @param {goog.dom.DomHelper=} opt_domHelper An optional DOM helper.
     * @constructor
     */
    class Zippy extends goog.events.EventTarget {
        constructor(header: Element|string|void, opt_content?: Element|string|(() => Element), opt_expanded?: boolean, opt_expandedHeader?: Element|string, opt_domHelper?: goog.dom.DomHelper);
        
        /**
         * Constants for event names
         *
         * @const
         */
        static Events: any;
        
        /**
         * @return {goog.a11y.aria.Role} The ARIA role to be applied to Zippy element.
         */
        getAriaRole(): goog.a11y.aria.Role;
        
        /**
         * @return {Element} The content element.
         */
        getContentElement(): Element;
        
        /**
         * @return {Element} The visible header element.
         */
        getVisibleHeaderElement(): Element;
        
        /**
         * Expands content pane.
         */
        expand(): void;
        
        /**
         * Collapses content pane.
         */
        collapse(): void;
        
        /**
         * Toggles expanded state.
         */
        toggle(): void;
        
        /**
         * Sets expanded state.
         *
         * @param {boolean} expanded Expanded/visibility state.
         */
        setExpanded(expanded: boolean): void;
        
        /**
         * Sets expanded internal state.
         *
         * @param {boolean} expanded Expanded/visibility state.
         * @protected
         */
        setExpandedInternal(expanded: boolean): void;
        
        /**
         * @return {boolean} Whether the zippy is expanded.
         */
        isExpanded(): boolean;
        
        /**
         * Updates the header element's className and ARIA (accessibility) EXPANDED
         * state.
         *
         * @param {boolean} expanded Expanded/visibility state.
         * @protected
         */
        updateHeaderClassName(expanded: boolean): void;
        
        /**
         * @return {boolean} Whether the Zippy handles its own key events.
         */
        isHandleKeyEvents(): boolean;
        
        /**
         * @return {boolean} Whether the Zippy handles its own mouse events.
         */
        isHandleMouseEvents(): boolean;
        
        /**
         * Sets whether the Zippy handles it's own keyboard events.
         * @param {boolean} enable Whether the Zippy handles keyboard events.
         */
        setHandleKeyboardEvents(enable: boolean): void;
        
        /**
         * Sets whether the Zippy handles it's own mouse events.
         * @param {boolean} enable Whether the Zippy handles mouse events.
         */
        setHandleMouseEvents(enable: boolean): void;
    }

    /**
     * Object representing a zippy toggle event.
     *
     * @param {string} type Event type.
     * @param {goog.ui.Zippy} target Zippy widget initiating event.
     * @param {boolean} expanded Expanded state.
     * @extends {goog.events.Event}
     * @constructor
     * @final
     */
    class ZippyEvent extends goog.events.Event {
        constructor(type: string, target: goog.ui.Zippy, expanded: boolean);
    }
}
