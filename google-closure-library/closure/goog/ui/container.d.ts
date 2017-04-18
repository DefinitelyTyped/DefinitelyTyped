declare module goog {
    function require(name: 'goog.ui.Container'): typeof goog.ui.Container;
    function require(name: 'goog.ui.Container.EventType'): typeof goog.ui.Container.EventType;
    function require(name: 'goog.ui.Container.Orientation'): typeof goog.ui.Container.Orientation;
}

declare module goog.ui {

    /**
     * Base class for containers.  Extends {@link goog.ui.Component} by adding
     * the following:
     *  <ul>
     *    <li>a {@link goog.events.KeyHandler}, to simplify keyboard handling,
     *    <li>a pluggable <em>renderer</em> framework, to simplify the creation of
     *        containers without the need to subclass this class,
     *    <li>methods to manage child controls hosted in the container,
     *    <li>default mouse and keyboard event handling methods.
     *  </ul>
     * @param {?goog.ui.Container.Orientation=} opt_orientation Container
     *     orientation; defaults to {@code VERTICAL}.
     * @param {goog.ui.ContainerRenderer=} opt_renderer Renderer used to render or
     *     decorate the container; defaults to {@link goog.ui.ContainerRenderer}.
     * @param {goog.dom.DomHelper=} opt_domHelper DOM helper, used for document
     *     interaction.
     * @extends {goog.ui.Component}
     * @constructor
     */
    class Container extends goog.ui.Component {
        constructor(opt_orientation?: goog.ui.Container.Orientation, opt_renderer?: goog.ui.ContainerRenderer, opt_domHelper?: goog.dom.DomHelper);
        
        /**
         * Returns the DOM element on which the container is listening for keyboard
         * events (null if none).
         * @return {Element} Element on which the container is listening for key
         *     events.
         */
        getKeyEventTarget(): Element;
        
        /**
         * Attaches an element on which to listen for key events.
         * @param {Element|undefined} element The element to attach, or null/undefined
         *     to attach to the default element.
         */
        setKeyEventTarget(element: Element|void): void;
        
        /**
         * Returns the keyboard event handler for this container, lazily created the
         * first time this method is called.  The keyboard event handler listens for
         * keyboard events on the container's key event target, as determined by its
         * renderer.
         * @return {!goog.events.KeyHandler} Keyboard event handler for this container.
         */
        getKeyHandler(): goog.events.KeyHandler;
        
        /**
         * Returns the renderer used by this container to render itself or to decorate
         * an existing element.
         * @return {goog.ui.ContainerRenderer} Renderer used by the container.
         */
        getRenderer(): goog.ui.ContainerRenderer;
        
        /**
         * Registers the given renderer with the container.  Changing renderers after
         * the container has already been rendered or decorated is an error.
         * @param {goog.ui.ContainerRenderer} renderer Renderer used by the container.
         */
        setRenderer(renderer: goog.ui.ContainerRenderer): void;
        
        /**
         * Returns the DOM element into which child components are to be rendered,
         * or null if the container itself hasn't been rendered yet.  Overrides
         * {@link goog.ui.Component#getContentElement} by delegating to the renderer.
         * @return {Element} Element to contain child elements (null if none).
         * @override
         */
        getContentElement(): Element;
        
        /**
         * Returns true if the given element can be decorated by this container.
         * Overrides {@link goog.ui.Component#canDecorate}.
         * @param {Element} element Element to decorate.
         * @return {boolean} True iff the element can be decorated.
         * @override
         */
        canDecorate(element: Element): boolean;
        
        /**
         * Decorates the given element with this container. Overrides {@link
         * goog.ui.Component#decorateInternal}.  Considered protected.
         * @param {Element} element Element to decorate.
         * @override
         */
        decorateInternal(element: Element): void;
        
        /**
         * Handles ENTER events raised by child controls when they are navigated to.
         * @param {goog.events.Event} e ENTER event to handle.
         * @return {boolean} Whether to prevent handleMouseOver from handling
         *    the event.
         */
        handleEnterItem(e: goog.events.Event): boolean;
        
        /**
         * Handles HIGHLIGHT events dispatched by items in the container when
         * they are highlighted.
         * @param {goog.events.Event} e Highlight event to handle.
         */
        handleHighlightItem(e: goog.events.Event): void;
        
        /**
         * Handles UNHIGHLIGHT events dispatched by items in the container when
         * they are unhighlighted.
         * @param {goog.events.Event} e Unhighlight event to handle.
         */
        handleUnHighlightItem(e: goog.events.Event): void;
        
        /**
         * Handles OPEN events dispatched by items in the container when they are
         * opened.
         * @param {goog.events.Event} e Open event to handle.
         */
        handleOpenItem(e: goog.events.Event): void;
        
        /**
         * Handles CLOSE events dispatched by items in the container when they are
         * closed.
         * @param {goog.events.Event} e Close event to handle.
         */
        handleCloseItem(e: goog.events.Event): void;
        
        /**
         * Handles mousedown events over the container.  The default implementation
         * sets the "mouse button pressed" flag and, if the container is focusable,
         * grabs keyboard focus.
         * @param {goog.events.BrowserEvent} e Mousedown event to handle.
         */
        handleMouseDown(e: goog.events.BrowserEvent): void;
        
        /**
         * Handles mouseup events over the document.  The default implementation
         * clears the "mouse button pressed" flag.
         * @param {goog.events.BrowserEvent} e Mouseup event to handle.
         */
        handleDocumentMouseUp(e: goog.events.BrowserEvent): void;
        
        /**
         * Handles mouse events originating from nodes belonging to the controls hosted
         * in the container.  Locates the child control based on the DOM node that
         * dispatched the event, and forwards the event to the control for handling.
         * @param {goog.events.BrowserEvent} e Mouse event to handle.
         */
        handleChildMouseEvents(e: goog.events.BrowserEvent): void;
        
        /**
         * Returns the child control that owns the given DOM node, or null if no such
         * control is found.
         * @param {Node} node DOM node whose owner is to be returned.
         * @return {goog.ui.Control?} Control hosted in the container to which the node
         *     belongs (if found).
         * @protected
         */
        getOwnerControl(node: Node): goog.ui.Control;
        
        /**
         * Handles focus events raised when the container's key event target receives
         * keyboard focus.
         * @param {goog.events.BrowserEvent} e Focus event to handle.
         */
        handleFocus(e: goog.events.BrowserEvent): void;
        
        /**
         * Handles blur events raised when the container's key event target loses
         * keyboard focus.  The default implementation clears the highlight index.
         * @param {goog.events.BrowserEvent} e Blur event to handle.
         */
        handleBlur(e: goog.events.BrowserEvent): void;
        
        /**
         * Attempts to handle a keyboard event, if the control is enabled, by calling
         * {@link handleKeyEventInternal}.  Considered protected; should only be used
         * within this package and by subclasses.
         * @param {goog.events.KeyEvent} e Key event to handle.
         * @return {boolean} Whether the key event was handled.
         */
        handleKeyEvent(e: goog.events.KeyEvent): boolean;
        
        /**
         * Attempts to handle a keyboard event; returns true if the event was handled,
         * false otherwise.  If the container is enabled, and a child is highlighted,
         * calls the child control's {@code handleKeyEvent} method to give the control
         * a chance to handle the event first.
         * @param {goog.events.KeyEvent} e Key event to handle.
         * @return {boolean} Whether the event was handled by the container (or one of
         *     its children).
         */
        handleKeyEventInternal(e: goog.events.KeyEvent): boolean;
        
        /**
         * Adds the specified control as the last child of this container.  See
         * {@link goog.ui.Container#addChildAt} for detailed semantics.
         * @param {goog.ui.Component} child The new child control.
         * @param {boolean=} opt_render Whether the new child should be rendered
         *     immediately after being added (defaults to false).
         * @override
         */
        addChild(child: goog.ui.Component, opt_render?: boolean): void;
        
        /**
         * Overrides {@link goog.ui.Container#getChild} to make it clear that it
         * only returns {@link goog.ui.Control}s.
         * @param {string} id Child component ID.
         * @return {goog.ui.Control} The child with the given ID; null if none.
         * @override
         */
        getChild(id: string): goog.ui.Control;
        
        /**
         * Overrides {@link goog.ui.Container#getChildAt} to make it clear that it
         * only returns {@link goog.ui.Control}s.
         * @param {number} index 0-based index.
         * @return {goog.ui.Control} The child with the given ID; null if none.
         * @override
         */
        getChildAt(index: number): goog.ui.Control;
        
        /**
         * Adds the control as a child of this container at the given 0-based index.
         * Overrides {@link goog.ui.Component#addChildAt} by also updating the
         * container's highlight index.  Since {@link goog.ui.Component#addChild} uses
         * {@link #addChildAt} internally, we only need to override this method.
         * @param {goog.ui.Component} control New child.
         * @param {number} index Index at which the new child is to be added.
         * @param {boolean=} opt_render Whether the new child should be rendered
         *     immediately after being added (defaults to false).
         * @override
         */
        addChildAt(control: goog.ui.Component, index: number, opt_render?: boolean): void;
        
        /**
         * Removes a child control.  Overrides {@link goog.ui.Component#removeChild} by
         * updating the highlight index.  Since {@link goog.ui.Component#removeChildAt}
         * uses {@link #removeChild} internally, we only need to override this method.
         * @param {string|goog.ui.Component} control The ID of the child to remove, or
         *     the control itself.
         * @param {boolean=} opt_unrender Whether to call {@code exitDocument} on the
         *     removed control, and detach its DOM from the document (defaults to
         *     false).
         * @return {goog.ui.Control} The removed control, if any.
         * @override
         */
        removeChild(control: string|goog.ui.Component, opt_unrender?: boolean): goog.ui.Control;
        
        /**
         * Returns the container's orientation.
         * @return {?goog.ui.Container.Orientation} Container orientation.
         */
        getOrientation(): goog.ui.Container.Orientation;
        
        /**
         * Sets the container's orientation.
         * @param {goog.ui.Container.Orientation} orientation Container orientation.
         */
        setOrientation(orientation: goog.ui.Container.Orientation): void;
        
        /**
         * Returns true if the container's visibility is set to visible, false if
         * it is set to hidden.  A container that is set to hidden is guaranteed
         * to be hidden from the user, but the reverse isn't necessarily true.
         * A container may be set to visible but can otherwise be obscured by another
         * element, rendered off-screen, or hidden using direct CSS manipulation.
         * @return {boolean} Whether the container is set to be visible.
         */
        isVisible(): boolean;
        
        /**
         * Shows or hides the container.  Does nothing if the container already has
         * the requested visibility.  Otherwise, dispatches a SHOW or HIDE event as
         * appropriate, giving listeners a chance to prevent the visibility change.
         * @param {boolean} visible Whether to show or hide the container.
         * @param {boolean=} opt_force If true, doesn't check whether the container
         *     already has the requested visibility, and doesn't dispatch any events.
         * @return {boolean} Whether the visibility was changed.
         */
        setVisible(visible: boolean, opt_force?: boolean): boolean;
        
        /**
         * Returns true if the container is enabled, false otherwise.
         * @return {boolean} Whether the container is enabled.
         */
        isEnabled(): boolean;
        
        /**
         * Enables/disables the container based on the {@code enable} argument.
         * Dispatches an {@code ENABLED} or {@code DISABLED} event prior to changing
         * the container's state, which may be caught and canceled to prevent the
         * container from changing state.  Also enables/disables child controls.
         * @param {boolean} enable Whether to enable or disable the container.
         */
        setEnabled(enable: boolean): void;
        
        /**
         * Returns true if the container is focusable, false otherwise.  The default
         * is true.  Focusable containers always have a tab index and allocate a key
         * handler to handle keyboard events while focused.
         * @return {boolean} Whether the component is focusable.
         */
        isFocusable(): boolean;
        
        /**
         * Sets whether the container is focusable.  The default is true.  Focusable
         * containers always have a tab index and allocate a key handler to handle
         * keyboard events while focused.
         * @param {boolean} focusable Whether the component is to be focusable.
         */
        setFocusable(focusable: boolean): void;
        
        /**
         * Returns true if the container allows children to be focusable, false
         * otherwise.  Only effective if the container is not focusable.
         * @return {boolean} Whether children should be focusable.
         */
        isFocusableChildrenAllowed(): boolean;
        
        /**
         * Sets whether the container allows children to be focusable, false
         * otherwise.  Only effective if the container is not focusable.
         * @param {boolean} focusable Whether the children should be focusable.
         */
        setFocusableChildrenAllowed(focusable: boolean): void;
        
        /**
         * @return {boolean} Whether highlighting a child component should also open it.
         */
        isOpenFollowsHighlight(): boolean;
        
        /**
         * Sets whether highlighting a child component should also open it.
         * @param {boolean} follow Whether highlighting a child component also opens it.
         */
        setOpenFollowsHighlight(follow: boolean): void;
        
        /**
         * Returns the index of the currently highlighted item (-1 if none).
         * @return {number} Index of the currently highlighted item.
         */
        getHighlightedIndex(): number;
        
        /**
         * Highlights the item at the given 0-based index (if any).  If another item
         * was previously highlighted, it is un-highlighted.
         * @param {number} index Index of item to highlight (-1 removes the current
         *     highlight).
         */
        setHighlightedIndex(index: number): void;
        
        /**
         * Highlights the given item if it exists and is a child of the container;
         * otherwise un-highlights the currently highlighted item.
         * @param {goog.ui.Control} item Item to highlight.
         */
        setHighlighted(item: goog.ui.Control): void;
        
        /**
         * Returns the currently highlighted item (if any).
         * @return {goog.ui.Control?} Highlighted item (null if none).
         */
        getHighlighted(): goog.ui.Control;
        
        /**
         * Highlights the first highlightable item in the container
         */
        highlightFirst(): void;
        
        /**
         * Highlights the last highlightable item in the container.
         */
        highlightLast(): void;
        
        /**
         * Highlights the next highlightable item (or the first if nothing is currently
         * highlighted).
         */
        highlightNext(): void;
        
        /**
         * Highlights the previous highlightable item (or the last if nothing is
         * currently highlighted).
         */
        highlightPrevious(): void;
        
        /**
         * Helper function that manages the details of moving the highlight among
         * child controls in response to keyboard events.
         * @param {function(number, number) : number} fn Function that accepts the
         *     current and maximum indices, and returns the next index to check.
         * @param {number} startIndex Start index.
         * @return {boolean} Whether the highlight has changed.
         * @protected
         */
        highlightHelper(fn: (arg0: number, arg1: number) => number, startIndex: number): boolean;
        
        /**
         * Returns whether the given item can be highlighted.
         * @param {goog.ui.Control} item The item to check.
         * @return {boolean} Whether the item can be highlighted.
         * @protected
         */
        canHighlightItem(item: goog.ui.Control): boolean;
        
        /**
         * Helper method that sets the highlighted index to the given index in response
         * to a keyboard event.  The base class implementation simply calls the
         * {@link #setHighlightedIndex} method, but subclasses can override this
         * behavior as needed.
         * @param {number} index Index of item to highlight.
         * @protected
         */
        setHighlightedIndexFromKeyEvent(index: number): void;
        
        /**
         * Returns the currently open (expanded) control in the container (null if
         * none).
         * @return {goog.ui.Control?} The currently open control.
         */
        getOpenItem(): goog.ui.Control;
        
        /**
         * Returns true if the mouse button is pressed, false otherwise.
         * @return {boolean} Whether the mouse button is pressed.
         */
        isMouseButtonPressed(): boolean;
        
        /**
         * Sets or clears the "mouse button pressed" flag.
         * @param {boolean} pressed Whether the mouse button is presed.
         */
        setMouseButtonPressed(pressed: boolean): void;
    }
}

declare module goog.ui.Container {

    /**
     * Container-specific events.
     * @enum {string}
     */
    type EventType = string;
    var EventType: {
        [index: string]: EventType;
        // AFTER_SHOW: EventType;
        // AFTER_HIDE: EventType;
    };

    /**
     * Container orientation constants.
     * @enum {string}
     */
    type Orientation = string;
    var Orientation: {
        HORIZONTAL: Orientation;
        VERTICAL: Orientation;
    };
}
