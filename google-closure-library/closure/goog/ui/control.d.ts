declare module goog {
    function require(name: 'goog.ui.Control'): typeof goog.ui.Control;
}

declare module goog.ui {

    /**
     * Base class for UI controls.  Extends {@link goog.ui.Component} by adding
     * the following:
     *  <ul>
     *    <li>a {@link goog.events.KeyHandler}, to simplify keyboard handling,
     *    <li>a pluggable <em>renderer</em> framework, to simplify the creation of
     *        simple controls without the need to subclass this class,
     *    <li>the notion of component <em>content</em>, like a text caption or DOM
     *        structure displayed in the component (e.g. a button label),
     *    <li>getter and setter for component content, as well as a getter and
     *        setter specifically for caption text (for convenience),
     *    <li>support for hiding/showing the component,
          <li>fine-grained control over supported states and state transition
              events, and
     *    <li>default mouse and keyboard event handling.
     *  </ul>
     * This class has sufficient built-in functionality for most simple UI controls.
     * All controls dispatch SHOW, HIDE, ENTER, LEAVE, and ACTION events on show,
     * hide, mouseover, mouseout, and user action, respectively.  Additional states
     * are also supported.  See closure/demos/control.html
     * for example usage.
     * @param {goog.ui.ControlContent=} opt_content Text caption or DOM structure
     *     to display as the content of the control (if any).
     * @param {goog.ui.ControlRenderer=} opt_renderer Renderer used to render or
     *     decorate the component; defaults to {@link goog.ui.ControlRenderer}.
     * @param {goog.dom.DomHelper=} opt_domHelper Optional DOM helper, used for
     *     document interaction.
     * @constructor
     * @extends {goog.ui.Component}
     */
    class Control extends goog.ui.Component {
        constructor(opt_content?: goog.ui.ControlContent, opt_renderer?: goog.ui.ControlRenderer, opt_domHelper?: goog.dom.DomHelper);
        
        /**
         * Maps a CSS class name to a function that returns a new instance of
         * {@link goog.ui.Control} or a subclass thereof, suitable to decorate
         * an element that has the specified CSS class.  UI components that extend
         * {@link goog.ui.Control} and want {@link goog.ui.Container}s to be able
         * to discover and decorate elements using them should register a factory
         * function via this API.
         * @param {string} className CSS class name.
         * @param {Function} decoratorFunction Function that takes no arguments and
         *     returns a new instance of a control to decorate an element with the
         *     given class.
         * @deprecated Use {@link goog.ui.registry.setDecoratorByClassName} instead.
         */
        static registerDecorator(className: string, decoratorFunction: Function): void;
        
        /**
         * Takes an element and returns a new instance of {@link goog.ui.Control}
         * or a subclass, suitable to decorate it (based on the element's CSS class).
         * @param {Element} element Element to decorate.
         * @return {goog.ui.Control?} New control instance to decorate the element
         *     (null if none).
         * @deprecated Use {@link goog.ui.registry.getDecorator} instead.
         */
        static getDecorator(element: Element): goog.ui.Control;
        
        /**
         * Takes an element, and decorates it with a {@link goog.ui.Control} instance
         * if a suitable decorator is found.
         * @param {Element} element Element to decorate.
         * @return {goog.ui.Control?} New control instance that decorates the element
         *     (null if none).
         * @deprecated Use {@link goog.ui.decorate} instead.
         */
        static decorate(element: Element): goog.ui.Control;
        
        /**
         * Returns true if the control is configured to handle its own mouse events,
         * false otherwise.  Controls not hosted in {@link goog.ui.Container}s have
         * to handle their own mouse events, but controls hosted in containers may
         * allow their parent to handle mouse events on their behalf.  Considered
         * protected; should only be used within this package and by subclasses.
         * @return {boolean} Whether the control handles its own mouse events.
         */
        isHandleMouseEvents(): boolean;
        
        /**
         * Enables or disables mouse event handling for the control.  Containers may
         * use this method to disable mouse event handling in their child controls.
         * Considered protected; should only be used within this package and by
         * subclasses.
         * @param {boolean} enable Whether to enable or disable mouse event handling.
         */
        setHandleMouseEvents(enable: boolean): void;
        
        /**
         * Returns the DOM element on which the control is listening for keyboard
         * events (null if none).
         * @return {Element} Element on which the control is listening for key
         *     events.
         */
        getKeyEventTarget(): Element;
        
        /**
         * Returns the keyboard event handler for this component, lazily created the
         * first time this method is called.  Considered protected; should only be
         * used within this package and by subclasses.
         * @return {!goog.events.KeyHandler} Keyboard event handler for this component.
         * @protected
         */
        getKeyHandler(): goog.events.KeyHandler;
        
        /**
         * Returns the renderer used by this component to render itself or to decorate
         * an existing element.
         * @return {goog.ui.ControlRenderer|undefined} Renderer used by the component
         *     (undefined if none).
         */
        getRenderer(): goog.ui.ControlRenderer|void;
        
        /**
         * Registers the given renderer with the component.  Changing renderers after
         * the component has entered the document is an error.
         * @param {goog.ui.ControlRenderer} renderer Renderer used by the component.
         * @throws {Error} If the control is already in the document.
         */
        setRenderer(renderer: goog.ui.ControlRenderer): void;
        
        /**
         * Returns any additional class name(s) to be applied to the component's
         * root element, or null if no extra class names are needed.
         * @return {Array<string>?} Additional class names to be applied to
         *     the component's root element (null if none).
         */
        getExtraClassNames(): Array<string>;
        
        /**
         * Adds the given class name to the list of classes to be applied to the
         * component's root element.
         * @param {string} className Additional class name to be applied to the
         *     component's root element.
         */
        addClassName(className: string): void;
        
        /**
         * Removes the given class name from the list of classes to be applied to
         * the component's root element.
         * @param {string} className Class name to be removed from the component's root
         *     element.
         */
        removeClassName(className: string): void;
        
        /**
         * Adds or removes the given class name to/from the list of classes to be
         * applied to the component's root element.
         * @param {string} className CSS class name to add or remove.
         * @param {boolean} enable Whether to add or remove the class name.
         */
        enableClassName(className: string, enable: boolean): void;
        
        /**
         * Returns the control's preferred ARIA role. This can be used by a control to
         * override the role that would be assigned by the renderer.  This is useful in
         * cases where a different ARIA role is appropriate for a control because of the
         * context in which it's used.  E.g., a {@link goog.ui.MenuButton} added to a
         * {@link goog.ui.Select} should have an ARIA role of LISTBOX and not MENUITEM.
         * @return {?goog.a11y.aria.Role} This control's preferred ARIA role or null if
         *     no preferred ARIA role is set.
         */
        getPreferredAriaRole(): goog.a11y.aria.Role;
        
        /**
         * Sets the control's preferred ARIA role. This can be used to override the role
         * that would be assigned by the renderer.  This is useful in cases where a
         * different ARIA role is appropriate for a control because of the
         * context in which it's used.  E.g., a {@link goog.ui.MenuButton} added to a
         * {@link goog.ui.Select} should have an ARIA role of LISTBOX and not MENUITEM.
         * @param {goog.a11y.aria.Role} role This control's preferred ARIA role.
         */
        setPreferredAriaRole(role: goog.a11y.aria.Role): void;
        
        /**
         * Gets the control's aria label.
         * @return {?string} This control's aria label.
         */
        getAriaLabel(): string;
        
        /**
         * Sets the control's aria label. This can be used to assign aria label to the
         * element after it is rendered.
         * @param {string} label The string to set as the aria label for this control.
         *     No escaping is done on this value.
         */
        setAriaLabel(label: string): void;
        
        /**
         * Returns the DOM element into which child components are to be rendered,
         * or null if the control itself hasn't been rendered yet.  Overrides
         * {@link goog.ui.Component#getContentElement} by delegating to the renderer.
         * @return {Element} Element to contain child elements (null if none).
         * @override
         */
        getContentElement(): Element;
        
        /**
         * Returns true if the given element can be decorated by this component.
         * Overrides {@link goog.ui.Component#canDecorate}.
         * @param {Element} element Element to decorate.
         * @return {boolean} Whether the element can be decorated by this component.
         * @override
         */
        canDecorate(element: Element): boolean;
        
        /**
         * Decorates the given element with this component. Overrides {@link
         * goog.ui.Component#decorateInternal} by delegating DOM manipulation
         * to the control's renderer.
         * @param {Element} element Element to decorate.
         * @protected
         * @override
         */
        decorateInternal(element: Element): void;
        
        /**
         * Returns the text caption or DOM structure displayed in the component.
         * @return {goog.ui.ControlContent} Text caption or DOM structure
         *     comprising the component's contents.
         */
        getContent(): goog.ui.ControlContent;
        
        /**
         * Sets the component's content to the given text caption, element, or array of
         * nodes.  (If the argument is an array of nodes, it must be an actual array,
         * not an array-like object.)
         * @param {goog.ui.ControlContent} content Text caption or DOM
         *     structure to set as the component's contents.
         */
        setContent(content: goog.ui.ControlContent): void;
        
        /**
         * Sets the component's content to the given text caption, element, or array
         * of nodes.  Unlike {@link #setContent}, doesn't modify the component's DOM.
         * Called by renderers during element decoration.
         *
         * This should only be used by subclasses and its associated renderers.
         *
         * @param {goog.ui.ControlContent} content Text caption or DOM structure
         *     to set as the component's contents.
         */
        setContentInternal(content: goog.ui.ControlContent): void;
        
        /**
         * @return {string} Text caption of the control or empty string if none.
         */
        getCaption(): string;
        
        /**
         * Sets the text caption of the component.
         * @param {string} caption Text caption of the component.
         */
        setCaption(caption: string): void;
        
        /**
         * Returns true if the control allows text selection within its DOM, false
         * otherwise.  Controls that disallow text selection have the appropriate
         * unselectable styling applied to their elements.  Note that controls hosted
         * in containers will report that they allow text selection even if their
         * container disallows text selection.
         * @return {boolean} Whether the control allows text selection.
         */
        isAllowTextSelection(): boolean;
        
        /**
         * Allows or disallows text selection within the control's DOM.
         * @param {boolean} allow Whether the control should allow text selection.
         */
        setAllowTextSelection(allow: boolean): void;
        
        /**
         * Returns true if the component's visibility is set to visible, false if
         * it is set to hidden.  A component that is set to hidden is guaranteed
         * to be hidden from the user, but the reverse isn't necessarily true.
         * A component may be set to visible but can otherwise be obscured by another
         * element, rendered off-screen, or hidden using direct CSS manipulation.
         * @return {boolean} Whether the component is visible.
         */
        isVisible(): boolean;
        
        /**
         * Shows or hides the component.  Does nothing if the component already has
         * the requested visibility.  Otherwise, dispatches a SHOW or HIDE event as
         * appropriate, giving listeners a chance to prevent the visibility change.
         * When showing a component that is both enabled and focusable, ensures that
         * its key target has a tab index.  When hiding a component that is enabled
         * and focusable, blurs its key target and removes its tab index.
         * @param {boolean} visible Whether to show or hide the component.
         * @param {boolean=} opt_force If true, doesn't check whether the component
         *     already has the requested visibility, and doesn't dispatch any events.
         * @return {boolean} Whether the visibility was changed.
         */
        setVisible(visible: boolean, opt_force?: boolean): boolean;
        
        /**
         * Returns true if the component is enabled, false otherwise.
         * @return {boolean} Whether the component is enabled.
         */
        isEnabled(): boolean;
        
        /**
         * Enables or disables the component.  Does nothing if this state transition
         * is disallowed.  If the component is both visible and focusable, updates its
         * focused state and tab index as needed.  If the component is being disabled,
         * ensures that it is also deactivated and un-highlighted first.  Note that the
         * component's enabled/disabled state is "locked" as long as it is hosted in a
         * {@link goog.ui.Container} that is itself disabled; this is to prevent clients
         * from accidentally re-enabling a control that is in a disabled container.
         * @param {boolean} enable Whether to enable or disable the component.
         * @see #isTransitionAllowed
         */
        setEnabled(enable: boolean): void;
        
        /**
         * Returns true if the component is currently highlighted, false otherwise.
         * @return {boolean} Whether the component is highlighted.
         */
        isHighlighted(): boolean;
        
        /**
         * Highlights or unhighlights the component.  Does nothing if this state
         * transition is disallowed.
         * @param {boolean} highlight Whether to highlight or unhighlight the component.
         * @see #isTransitionAllowed
         */
        setHighlighted(highlight: boolean): void;
        
        /**
         * Returns true if the component is active (pressed), false otherwise.
         * @return {boolean} Whether the component is active.
         */
        isActive(): boolean;
        
        /**
         * Activates or deactivates the component.  Does nothing if this state
         * transition is disallowed.
         * @param {boolean} active Whether to activate or deactivate the component.
         * @see #isTransitionAllowed
         */
        setActive(active: boolean): void;
        
        /**
         * Returns true if the component is selected, false otherwise.
         * @return {boolean} Whether the component is selected.
         */
        isSelected(): boolean;
        
        /**
         * Selects or unselects the component.  Does nothing if this state transition
         * is disallowed.
         * @param {boolean} select Whether to select or unselect the component.
         * @see #isTransitionAllowed
         */
        setSelected(select: boolean): void;
        
        /**
         * Returns true if the component is checked, false otherwise.
         * @return {boolean} Whether the component is checked.
         */
        isChecked(): boolean;
        
        /**
         * Checks or unchecks the component.  Does nothing if this state transition
         * is disallowed.
         * @param {boolean} check Whether to check or uncheck the component.
         * @see #isTransitionAllowed
         */
        setChecked(check: boolean): void;
        
        /**
         * Returns true if the component is styled to indicate that it has keyboard
         * focus, false otherwise.  Note that {@code isFocused()} returning true
         * doesn't guarantee that the component's key event target has keyborad focus,
         * only that it is styled as such.
         * @return {boolean} Whether the component is styled to indicate as having
         *     keyboard focus.
         */
        isFocused(): boolean;
        
        /**
         * Applies or removes styling indicating that the component has keyboard focus.
         * Note that unlike the other "set" methods, this method is called as a result
         * of the component's element having received or lost keyboard focus, not the
         * other way around, so calling {@code setFocused(true)} doesn't guarantee that
         * the component's key event target has keyboard focus, only that it is styled
         * as such.
         * @param {boolean} focused Whether to apply or remove styling to indicate that
         *     the component's element has keyboard focus.
         */
        setFocused(focused: boolean): void;
        
        /**
         * Returns true if the component is open (expanded), false otherwise.
         * @return {boolean} Whether the component is open.
         */
        isOpen(): boolean;
        
        /**
         * Opens (expands) or closes (collapses) the component.  Does nothing if this
         * state transition is disallowed.
         * @param {boolean} open Whether to open or close the component.
         * @see #isTransitionAllowed
         */
        setOpen(open: boolean): void;
        
        /**
         * Returns the component's state as a bit mask of {@link
         * goog.ui.Component.State}s.
         * @return {number} Bit mask representing component state.
         */
        getState(): number;
        
        /**
         * Returns true if the component is in the specified state, false otherwise.
         * @param {goog.ui.Component.State} state State to check.
         * @return {boolean} Whether the component is in the given state.
         */
        hasState(state: goog.ui.Component.State): boolean;
        
        /**
         * Sets or clears the given state on the component, and updates its styling
         * accordingly.  Does nothing if the component is already in the correct state
         * or if it doesn't support the specified state.  Doesn't dispatch any state
         * transition events; use advisedly.
         * @param {goog.ui.Component.State} state State to set or clear.
         * @param {boolean} enable Whether to set or clear the state (if supported).
         * @param {boolean=} opt_calledFrom Prevents looping with setEnabled.
         */
        setState(state: goog.ui.Component.State, enable: boolean, opt_calledFrom?: boolean): void;
        
        /**
         * Sets the component's state to the state represented by a bit mask of
         * {@link goog.ui.Component.State}s.  Unlike {@link #setState}, doesn't
         * update the component's styling, and doesn't reject unsupported states.
         * Called by renderers during element decoration.  Considered protected;
         * should only be used within this package and by subclasses.
         *
         * This should only be used by subclasses and its associated renderers.
         *
         * @param {number} state Bit mask representing component state.
         */
        setStateInternal(state: number): void;
        
        /**
         * Returns true if the component supports the specified state, false otherwise.
         * @param {goog.ui.Component.State} state State to check.
         * @return {boolean} Whether the component supports the given state.
         */
        isSupportedState(state: goog.ui.Component.State): boolean;
        
        /**
         * Enables or disables support for the given state. Disabling support
         * for a state while the component is in that state is an error.
         * @param {goog.ui.Component.State} state State to support or de-support.
         * @param {boolean} support Whether the component should support the state.
         * @throws {Error} If disabling support for a state the control is currently in.
         */
        setSupportedState(state: goog.ui.Component.State, support: boolean): void;
        
        /**
         * Returns true if the component provides default event handling for the state,
         * false otherwise.
         * @param {goog.ui.Component.State} state State to check.
         * @return {boolean} Whether the component provides default event handling for
         *     the state.
         */
        isAutoState(state: goog.ui.Component.State): boolean;
        
        /**
         * Enables or disables automatic event handling for the given state(s).
         * @param {number} states Bit mask of {@link goog.ui.Component.State}s for which
         *     default event handling is to be enabled or disabled.
         * @param {boolean} enable Whether the component should provide default event
         *     handling for the state(s).
         */
        setAutoStates(states: number, enable: boolean): void;
        
        /**
         * Returns true if the component is set to dispatch transition events for the
         * given state, false otherwise.
         * @param {goog.ui.Component.State} state State to check.
         * @return {boolean} Whether the component dispatches transition events for
         *     the state.
         */
        isDispatchTransitionEvents(state: goog.ui.Component.State): boolean;
        
        /**
         * Enables or disables transition events for the given state(s).  Controls
         * handle state transitions internally by default, and only dispatch state
         * transition events if explicitly requested to do so by calling this method.
         * @param {number} states Bit mask of {@link goog.ui.Component.State}s for
         *     which transition events should be enabled or disabled.
         * @param {boolean} enable Whether transition events should be enabled.
         */
        setDispatchTransitionEvents(states: number, enable: boolean): void;
        
        /**
         * Returns true if the transition into or out of the given state is allowed to
         * proceed, false otherwise.  A state transition is allowed under the following
         * conditions:
         * <ul>
         *   <li>the component supports the state,
         *   <li>the component isn't already in the target state,
         *   <li>either the component is configured not to dispatch events for this
         *       state transition, or a transition event was dispatched and wasn't
         *       canceled by any event listener, and
         *   <li>the component hasn't been disposed of
         * </ul>
         * Considered protected; should only be used within this package and by
         * subclasses.
         * @param {goog.ui.Component.State} state State to/from which the control is
         *     transitioning.
         * @param {boolean} enable Whether the control is entering or leaving the state.
         * @return {boolean} Whether the state transition is allowed to proceed.
         * @protected
         */
        isTransitionAllowed(state: goog.ui.Component.State, enable: boolean): boolean;
        
        /**
         * Handles mouseover events.  Dispatches an ENTER event; if the event isn't
         * canceled, the component is enabled, and it supports auto-highlighting,
         * highlights the component.  Considered protected; should only be used
         * within this package and by subclasses.
         * @param {goog.events.BrowserEvent} e Mouse event to handle.
         */
        handleMouseOver(e: goog.events.BrowserEvent): void;
        
        /**
         * Handles mouseout events.  Dispatches a LEAVE event; if the event isn't
         * canceled, and the component supports auto-highlighting, deactivates and
         * un-highlights the component.  Considered protected; should only be used
         * within this package and by subclasses.
         * @param {goog.events.BrowserEvent} e Mouse event to handle.
         */
        handleMouseOut(e: goog.events.BrowserEvent): void;
        
        /**
         * Handles contextmenu events.
         * @param {goog.events.BrowserEvent} e Event to handle.
         */
        handleContextMenu(e: goog.events.BrowserEvent): void;
        
        /**
         * Handles mousedown events.  If the component is enabled, highlights and
         * activates it.  If the component isn't configured for keyboard access,
         * prevents it from receiving keyboard focus.  Considered protected; should
         * only be used within this package and by subclasses.
         * @param {goog.events.Event} e Mouse event to handle.
         */
        handleMouseDown(e: goog.events.Event): void;
        
        /**
         * Handles mouseup events.  If the component is enabled, highlights it.  If
         * the component has previously been activated, performs its associated action
         * by calling {@link performActionInternal}, then deactivates it.  Considered
         * protected; should only be used within this package and by subclasses.
         * @param {goog.events.Event} e Mouse event to handle.
         */
        handleMouseUp(e: goog.events.Event): void;
        
        /**
         * Handles dblclick events.  Should only be registered if the user agent is
         * IE.  If the component is enabled, performs its associated action by calling
         * {@link performActionInternal}.  This is used to allow more performant
         * buttons in IE.  In IE, no mousedown event is fired when that mousedown will
         * trigger a dblclick event.  Because of this, a user clicking quickly will
         * only cause ACTION events to fire on every other click.  This is a workaround
         * to generate ACTION events for every click.  Unfortunately, this workaround
         * won't ever trigger the ACTIVE state.  This is roughly the same behaviour as
         * if this were a 'button' element with a listener on mouseup.  Considered
         * protected; should only be used within this package and by subclasses.
         * @param {goog.events.Event} e Mouse event to handle.
         */
        handleDblClick(e: goog.events.Event): void;
        
        /**
         * Performs the appropriate action when the control is activated by the user.
         * The default implementation first updates the checked and selected state of
         * controls that support them, then dispatches an ACTION event.  Considered
         * protected; should only be used within this package and by subclasses.
         * @param {goog.events.Event} e Event that triggered the action.
         * @return {boolean} Whether the action is allowed to proceed.
         * @protected
         */
        performActionInternal(e: goog.events.Event): boolean;
        
        /**
         * Handles focus events on the component's key event target element.  If the
         * component is focusable, updates its state and styling to indicate that it
         * now has keyboard focus.  Considered protected; should only be used within
         * this package and by subclasses.  <b>Warning:</b> IE dispatches focus and
         * blur events asynchronously!
         * @param {goog.events.Event} e Focus event to handle.
         */
        handleFocus(e: goog.events.Event): void;
        
        /**
         * Handles blur events on the component's key event target element.  Always
         * deactivates the component.  In addition, if the component is focusable,
         * updates its state and styling to indicate that it no longer has keyboard
         * focus.  Considered protected; should only be used within this package and
         * by subclasses.  <b>Warning:</b> IE dispatches focus and blur events
         * asynchronously!
         * @param {goog.events.Event} e Blur event to handle.
         */
        handleBlur(e: goog.events.Event): void;
        
        /**
         * Attempts to handle a keyboard event, if the component is enabled and visible,
         * by calling {@link handleKeyEventInternal}.  Considered protected; should only
         * be used within this package and by subclasses.
         * @param {goog.events.KeyEvent} e Key event to handle.
         * @return {boolean} Whether the key event was handled.
         */
        handleKeyEvent(e: goog.events.KeyEvent): boolean;
        
        /**
         * Attempts to handle a keyboard event; returns true if the event was handled,
         * false otherwise.  Considered protected; should only be used within this
         * package and by subclasses.
         * @param {goog.events.KeyEvent} e Key event to handle.
         * @return {boolean} Whether the key event was handled.
         * @protected
         */
        handleKeyEventInternal(e: goog.events.KeyEvent): boolean;
    }
}
