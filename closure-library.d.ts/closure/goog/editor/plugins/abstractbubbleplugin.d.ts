declare module goog {
    function require(name: 'goog.editor.plugins.AbstractBubblePlugin'): typeof goog.editor.plugins.AbstractBubblePlugin;
}

declare module goog.editor.plugins {

    /**
     * Base class for bubble plugins. This is used for to connect user behavior
     * in the editor to a goog.ui.editor.Bubble UI element that allows
     * the user to modify the properties of an element on their page (e.g. the alt
     * text of an image tag).
     *
     * Subclasses should override the abstract method getBubbleTargetFromSelection()
     * with code to determine if the current selection should activate the bubble
     * type. The other abstract method createBubbleContents() should be overriden
     * with code to create the inside markup of the bubble.  The base class creates
     * the rest of the bubble.
     *
     * @constructor
     * @extends {goog.editor.Plugin}
     */
    class AbstractBubblePlugin extends goog.editor.Plugin {
        constructor();
        
        /**
         * The constant string used to separate option links.
         * @type {string}
         * @protected
         */
        static DASH_NBSP_STRING: string;
        
        /**
         * Sets the global bubble factory function.
         * @param {function(!Element, number): !goog.ui.editor.Bubble}
         *     bubbleFactory Function that creates a bubble for the given bubble parent
         *     element and z index.
         */
        static setBubbleFactory(bubbleFactory: (arg0: Element, arg1: number) => goog.ui.editor.Bubble): void;
        
        /**
         * Sets the instance bubble factory function.  If set to a non-null value, this
         * function will be used to create a bubble instead of the global factory
         * function.
         * @param {?function(!Element, number): !goog.ui.editor.Bubble} bubbleFactory
         *     Function that creates a bubble for the given bubble parent element and z
         *     index.  Null to reset the factory function.
         */
        setBubbleFactory(bubbleFactory: (arg0: Element, arg1: number) => goog.ui.editor.Bubble): void;
        
        /**
         * Sets whether the bubble should support tabbing through elements.
         * @param {boolean} keyboardNavigationEnabled
         */
        enableKeyboardNavigation(keyboardNavigationEnabled: boolean): void;
        
        /**
         * Sets the bubble parent.
         * @param {Element} bubbleParent An element where the bubble will be
         *     anchored. If null, we will use the application document. This
         *     is useful when you have an editor embedded in a scrolling div.
         */
        setBubbleParent(bubbleParent: Element): void;
        
        /**
         * Returns the bubble map.  Subclasses may override to use a separate map.
         * @return {!Object<goog.ui.editor.Bubble>}
         * @protected
         */
        getBubbleMap(): {[index: string]: goog.ui.editor.Bubble};
        
        /**
         * @return {goog.dom.DomHelper} The dom helper for the bubble window.
         */
        getBubbleDom(): goog.dom.DomHelper;
        
        /**
         * Returns the element whose properties the bubble manipulates.
         * @return {Element} The target element.
         */
        getTargetElement(): Element;
        
        /**
         * Pops up a property bubble for the given selection if appropriate and closes
         * open property bubbles if no longer needed.
         * @param {Element?} selectedElement The selected element.
         * @return {boolean} Always false, allowing every bubble plugin to handle the
         *     event.
         * @protected
         */
        handleSelectionChangeInternal(selectedElement: Element): boolean;
        
        /**
         * Should be overriden by subclasses to return the bubble target element or
         * null if an element of their required type isn't found.
         * @param {Element} selectedElement The target of the selection change event or
         *     the parent container of the current entire selection.
         * @return {Element?} The HTML bubble target element or null if no element of
         *     the required type is not found.
         */
        getBubbleTargetFromSelection(selectedElement: Element): Element;
        
        /**
         * Creates and shows the property bubble.
         * @param {Element} targetElement The target element of the bubble.
         */
        createBubble(targetElement: Element): void;
        
        /**
         * @return {string} The type of bubble shown by this plugin.  Usually the tag
         *     name of the element this bubble targets.
         * @protected
         */
        getBubbleType(): string;
        
        /**
         * @return {string} The title for bubble shown by this plugin.  Defaults to no
         *     title.  Should be overridden by subclasses.
         * @protected
         */
        getBubbleTitle(): string;
        
        /**
         * @return {boolean} Whether the bubble should prefer placement above the
         *     target element.
         * @protected
         */
        shouldPreferBubbleAboveElement(): boolean;
        
        /**
         * Should be overriden by subclasses to add the type specific contents to the
         *     bubble.
         * @param {Element} bubbleContainer The container element of the bubble to
         *     which the contents should be added.
         * @protected
         */
        createBubbleContents(bubbleContainer: Element): void;
        
        /**
         * Register the handler for the target's CLICK event.
         * @param {Element} target The event source element.
         * @param {Function} handler The event handler.
         * @protected
         * @deprecated Use goog.editor.plugins.AbstractBubblePlugin.
         *     registerActionHandler to register click and enter events.
         */
        registerClickHandler(target: Element, handler: Function): void;
        
        /**
         * Register the handler for the target's CLICK and ENTER key events.
         * @param {Element} target The event source element.
         * @param {Function} handler The event handler.
         * @protected
         */
        registerActionHandler(target: Element, handler: Function): void;
        
        /**
         * Closes the bubble.
         */
        closeBubble(): void;
        
        /**
         * Called after the bubble is shown. The default implementation does nothing.
         * Override it to provide your own one.
         * @protected
         */
        onShow(): void;
        
        /**
         * Called when the bubble is closed or hidden. The default implementation does
         * nothing.
         * @protected
         */
        cleanOnBubbleClose(): void;
        
        /**
         * @return {boolean} Whether the bubble is visible.
         */
        isVisible(): boolean;
        
        /**
         * Reposition the property bubble.
         */
        reposition(): void;
        
        /**
         * Helper method that creates option links (such as edit, test, remove)
         * @param {string} id String id for the span id.
         * @return {Element} The option link element.
         * @protected
         */
        createLinkOption(id: string): Element;
        
        /**
         * Helper method that creates a link with text set to linkText and optionally
         * wires up a listener for the CLICK event or the link. The link is navigable by
         * tabs if {@code enableKeyboardNavigation(true)} was called.
         * @param {string} linkId The id of the link.
         * @param {string} linkText Text of the link.
         * @param {Function=} opt_onClick Optional function to call when the link is
         *     clicked.
         * @param {Element=} opt_container If specified, location to insert link. If no
         *     container is specified, the old link is removed and replaced.
         * @return {Element} The link element.
         * @protected
         */
        createLink(linkId: string, linkText: string, opt_onClick?: Function, opt_container?: Element): Element;
        
        /**
         * Helper method to create a link to insert into the bubble. The link is
         * navigable by tabs if {@code enableKeyboardNavigation(true)} was called.
         * @param {string} linkId The id of the link.
         * @param {string} linkText Text of the link.
         * @param {boolean} isAnchor Set to true to create an actual anchor tag
         *     instead of a span.  Actual links are right clickable (e.g. to open in
         *     a new window) and also update window status on hover.
         * @param {Element=} opt_container If specified, location to insert link. If no
         *     container is specified, the old link is removed and replaced.
         * @return {Element} The link element.
         * @protected
         */
        createLinkHelper(linkId: string, linkText: string, isAnchor: boolean, opt_container?: Element): Element;
        
        /**
         * Makes the given element tabbable.
         *
         * <p>Elements created by createLink[Helper] are tabbable even without
         * calling this method. Call it for other elements if needed.
         *
         * <p>If tabindex is not already set in the element, this function sets it to 0.
         * You'll usually want to also call {@code enableKeyboardNavigation(true)}.
         *
         * @param {!Element} element
         * @protected
         */
        setTabbable(element: Element): void;
        
        /**
         * Inserts a link in the given container if it is specified or removes
         * the old link with this id and replaces it with the new link
         * @param {Element} link Html element to insert.
         * @param {string} linkId Id of the link.
         * @param {Element=} opt_container If specified, location to insert link.
         * @protected
         */
        setupLink(link: Element, linkId: string, opt_container?: Element): void;
    }
}
