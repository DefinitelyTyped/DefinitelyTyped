declare module goog {
    function require(name: 'goog.ui.PopupMenu'): typeof goog.ui.PopupMenu;
}

declare module goog.ui {

    /**
     * A basic menu class.
     * @param {goog.dom.DomHelper=} opt_domHelper Optional DOM helper.
     * @param {goog.ui.MenuRenderer=} opt_renderer Renderer used to render or
     *     decorate the container; defaults to {@link goog.ui.MenuRenderer}.
     * @extends {goog.ui.Menu}
     * @constructor
     */
    class PopupMenu extends goog.ui.Menu {
        constructor(opt_domHelper?: goog.dom.DomHelper, opt_renderer?: goog.ui.MenuRenderer);
        
        /**
         * Decorate an existing HTML structure with the menu. Menu items will be
         * constructed from elements with classname 'goog-menuitem', separators will be
         * made from HR elements.
         * @param {Element} element Element to decorate.
         * @override
         */
        decorateInternal(element: Element): void;
        
        /**
         * Attaches the menu to a new popup position and anchor element.  A menu can
         * only be attached to an element once, since attaching the same menu for
         * multiple positions doesn't make sense.
         *
         * @param {Element} element Element whose click event should trigger the menu.
         * @param {goog.positioning.Corner=} opt_targetCorner Corner of the target that
         *     the menu should be anchored to.
         * @param {goog.positioning.Corner=} opt_menuCorner Corner of the menu that
         *     should be anchored.
         * @param {boolean=} opt_contextMenu Whether the menu should show on
         *     {@link goog.events.EventType.CONTEXTMENU} events, false if it should
         *     show on {@link goog.events.EventType.MOUSEDOWN} events. Default is
         *     MOUSEDOWN.
         * @param {goog.math.Box=} opt_margin Margin for the popup used in positioning
         *     algorithms.
         */
        attach(element: Element, opt_targetCorner?: goog.positioning.Corner, opt_menuCorner?: goog.positioning.Corner, opt_contextMenu?: boolean, opt_margin?: goog.math.Box): void;
        
        /**
         * Creates an object describing how the popup menu should be attached to the
         * anchoring element based on the given parameters. The created object is
         * stored, keyed by {@code element} and is retrievable later by invoking
         * {@link #getAttachTarget(element)} at a later point.
         *
         * Subclass may add more properties to the returned object, as needed.
         *
         * @param {Element} element Element whose click event should trigger the menu.
         * @param {goog.positioning.Corner=} opt_targetCorner Corner of the target that
         *     the menu should be anchored to.
         * @param {goog.positioning.Corner=} opt_menuCorner Corner of the menu that
         *     should be anchored.
         * @param {boolean=} opt_contextMenu Whether the menu should show on
         *     {@link goog.events.EventType.CONTEXTMENU} events, false if it should
         *     show on {@link goog.events.EventType.MOUSEDOWN} events. Default is
         *     MOUSEDOWN.
         * @param {goog.math.Box=} opt_margin Margin for the popup used in positioning
         *     algorithms.
         *
         * @return {Object} An object that describes how the popup menu should be
         *     attached to the anchoring element.
         *
         * @protected
         */
        createAttachTarget(element: Element, opt_targetCorner?: goog.positioning.Corner, opt_menuCorner?: goog.positioning.Corner, opt_contextMenu?: boolean, opt_margin?: goog.math.Box): Object;
        
        /**
         * Returns the object describing how the popup menu should be attach to given
         * element or {@code null}. The object is created and the association is formed
         * when {@link #attach} is invoked.
         *
         * @param {Element} element DOM element.
         * @return {Object} The object created when {@link attach} is invoked on
         *     {@code element}. Returns {@code null} if the element does not trigger
         *     the menu (i.e. {@link attach} has never been invoked on
         *     {@code element}).
         * @protected
         */
        getAttachTarget(element: Element): Object;
        
        /**
         * @param {Element} element Any DOM element.
         * @return {boolean} Whether clicking on the given element will trigger the
         *     menu.
         *
         * @protected
         */
        isAttachTarget(element: Element): boolean;
        
        /**
         * @return {Element} The current element where the popup is anchored, if it's
         *     visible.
         */
        getAttachedElement(): Element;
        
        /**
         * Detaches all listeners
         */
        detachAll(): void;
        
        /**
         * Detaches a menu from a given element.
         * @param {Element} element Element whose click event should trigger the menu.
         */
        detach(element: Element): void;
        
        /**
         * Sets whether the menu should toggle if it is already open.  For context
         * menus this should be false, for toolbar menus it makes more sense to be true.
         * @param {boolean} toggle The new toggle mode.
         */
        setToggleMode(toggle: boolean): void;
        
        /**
         * Gets whether the menu is in toggle mode
         * @return {boolean} toggle.
         */
        getToggleMode(): boolean;
        
        /**
         * Show the menu using given positioning object.
         * @param {goog.positioning.AbstractPosition} position The positioning instance.
         * @param {goog.positioning.Corner=} opt_menuCorner The corner of the menu to be
         *     positioned.
         * @param {goog.math.Box=} opt_margin A margin specified in pixels.
         * @param {Element=} opt_anchor The element which acts as visual anchor for this
         *     menu.
         */
        showWithPosition(position: goog.positioning.AbstractPosition, opt_menuCorner?: goog.positioning.Corner, opt_margin?: goog.math.Box, opt_anchor?: Element): void;
        
        /**
         * Show the menu at a given attached target.
         * @param {Object} target Popup target.
         * @param {number} x The client-X associated with the show event.
         * @param {number} y The client-Y associated with the show event.
         * @protected
         */
        showMenu(target: Object, x: number, y: number): void;
        
        /**
         * Shows the menu immediately at the given client coordinates.
         * @param {number} x The client-X associated with the show event.
         * @param {number} y The client-Y associated with the show event.
         * @param {goog.positioning.Corner=} opt_menuCorner Corner of the menu that
         *     should be anchored.
         */
        showAt(x: number, y: number, opt_menuCorner?: goog.positioning.Corner): void;
        
        /**
         * Shows the menu immediately attached to the given element
         * @param {Element} element The element to show at.
         * @param {goog.positioning.Corner} targetCorner The corner of the target to
         *     anchor to.
         * @param {goog.positioning.Corner=} opt_menuCorner Corner of the menu that
         *     should be anchored.
         */
        showAtElement(element: Element, targetCorner: goog.positioning.Corner, opt_menuCorner?: goog.positioning.Corner): void;
        
        /**
         * Hides the menu.
         */
        hide(): void;
        
        /**
         * Returns whether the menu is currently visible or was visible within about
         * 150 ms ago.  This stops the menu toggling back on if the toggleMode == false.
         * @return {boolean} Whether the popup is currently visible or was visible
         *     within about 150 ms ago.
         */
        isOrWasRecentlyVisible(): boolean;
        
        /**
         * Used to stop the menu toggling back on if the toggleMode == false.
         * @return {boolean} Whether the menu was recently hidden.
         * @protected
         */
        wasRecentlyHidden(): boolean;
        
        /**
         * Handles click events that propagate to the document.
         * @param {goog.events.BrowserEvent} e The browser event.
         * @protected
         */
        onDocClick(e: goog.events.BrowserEvent): void;
        
        /**
         * Handles the key event target loosing focus.
         * @param {goog.events.BrowserEvent} e The browser event.
         * @protected
         * @override
         */
        handleBlur(e: goog.events.BrowserEvent): void;
    }
}
