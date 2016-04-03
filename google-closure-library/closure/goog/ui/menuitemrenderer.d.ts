declare module goog {
    function require(name: 'goog.ui.MenuItemRenderer'): typeof goog.ui.MenuItemRenderer;
}

declare module goog.ui {

    /**
     * Default renderer for {@link goog.ui.MenuItem}s.  Each item has the following
     * structure:
     * <pre>
     *   <div class="goog-menuitem">
     *     <div class="goog-menuitem-content">
     *       ...(menu item contents)...
     *     </div>
     *   </div>
     * </pre>
     * @constructor
     * @extends {goog.ui.ControlRenderer}
     */
    class MenuItemRenderer extends goog.ui.ControlRenderer {
        constructor();
        
        /**
         * CSS class name the renderer applies to menu item elements.
         * @type {string}
         */
        static CSS_CLASS: string;
        
        /**
         * Overrides {@link goog.ui.ControlRenderer#createDom} by adding extra markup
         * and stying to the menu item's element if it is selectable or checkable.
         * @param {goog.ui.Control} item Menu item to render.
         * @return {Element} Root element for the item.
         * @override
         */
        createDom(item: goog.ui.Control): Element;
        
        /**
         * Overrides {@link goog.ui.ControlRenderer#decorate} by initializing the
         * menu item to checkable based on whether the element to be decorated has
         * extra stying indicating that it should be.
         * @param {goog.ui.Control} item Menu item instance to decorate the element.
         * @param {Element} element Element to decorate.
         * @return {Element} Decorated element.
         * @override
         */
        decorate(item: goog.ui.Control, element: Element): Element;
        
        /**
         * Takes a menu item's root element, and sets its content to the given text
         * caption or DOM structure.  Overrides the superclass immplementation by
         * making sure that the checkbox structure (for selectable/checkable menu
         * items) is preserved.
         * @param {Element} element The item's root element.
         * @param {goog.ui.ControlContent} content Text caption or DOM structure to be
         *     set as the item's content.
         * @override
         */
        setContent(element: Element, content: goog.ui.ControlContent): void;
        
        /**
         * Returns true if the element appears to have a proper menu item structure by
         * checking whether its first child has the appropriate structural class name.
         * @param {Element} element Element to check.
         * @return {boolean} Whether the element appears to have a proper menu item DOM.
         * @protected
         */
        hasContentStructure(element: Element): boolean;
        
        /**
         * Wraps the given text caption or existing DOM node(s) in a structural element
         * containing the menu item's contents.
         * @param {goog.ui.ControlContent} content Menu item contents.
         * @param {goog.dom.DomHelper} dom DOM helper for document interaction.
         * @return {Element} Menu item content element.
         * @protected
         */
        createContent(content: goog.ui.ControlContent, dom: goog.dom.DomHelper): Element;
        
        /**
         * Enables/disables radio button semantics on the menu item.
         * @param {goog.ui.Control} item Menu item to update.
         * @param {Element} element Menu item element to update (may be null if the
         *     item hasn't been rendered yet).
         * @param {boolean} selectable Whether the item should be selectable.
         */
        setSelectable(item: goog.ui.Control, element: Element, selectable: boolean): void;
        
        /**
         * Enables/disables checkbox semantics on the menu item.
         * @param {goog.ui.Control} item Menu item to update.
         * @param {Element} element Menu item element to update (may be null if the
         *     item hasn't been rendered yet).
         * @param {boolean} checkable Whether the item should be checkable.
         */
        setCheckable(item: goog.ui.Control, element: Element, checkable: boolean): void;
        
        /**
         * Determines whether the item contains a checkbox element.
         * @param {Element} element Menu item root element.
         * @return {boolean} Whether the element contains a checkbox element.
         * @protected
         */
        hasCheckBoxStructure(element: Element): boolean;
        
        /**
         * Adds or removes extra markup and CSS styling to the menu item to make it
         * selectable or non-selectable, depending on the value of the
         * {@code selectable} argument.
         * @param {!goog.ui.Control} item Menu item to update.
         * @param {!Element} element Menu item element to update.
         * @param {boolean} enable Whether to add or remove the checkbox structure.
         * @protected
         */
        setEnableCheckBoxStructure(item: goog.ui.Control, element: Element, enable: boolean): void;
        
        /**
         * Takes a single {@link goog.ui.Component.State}, and returns the
         * corresponding CSS class name (null if none).  Overrides the superclass
         * implementation by using 'highlight' as opposed to 'hover' as the CSS
         * class name suffix for the HOVER state, for backwards compatibility.
         * @param {goog.ui.Component.State} state Component state.
         * @return {string|undefined} CSS class representing the given state
         *     (undefined if none).
         * @override
         */
        getClassForState(state: goog.ui.Component.State): string|void;
        
        /**
         * Takes a single CSS class name which may represent a component state, and
         * returns the corresponding component state (0x00 if none).  Overrides the
         * superclass implementation by treating 'goog-option-selected' as special,
         * for backwards compatibility.
         * @param {string} className CSS class name, possibly representing a component
         *     state.
         * @return {goog.ui.Component.State} state Component state corresponding
         *     to the given CSS class (0x00 if none).
         * @override
         */
        getStateFromClass(className: string): goog.ui.Component.State;
    }
}

declare module goog.ui.MenuItemRenderer {

    /**
     * Constants for referencing composite CSS classes.
     * @enum {number}
     * @private
     */
    type CompositeCssClassIndex_ = number;
    var CompositeCssClassIndex_: {
        HOVER: CompositeCssClassIndex_;
        CHECKBOX: CompositeCssClassIndex_;
        CONTENT: CompositeCssClassIndex_;
    };
}
