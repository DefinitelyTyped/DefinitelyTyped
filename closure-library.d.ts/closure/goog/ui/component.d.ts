declare module goog {
    function require(name: 'goog.ui.Component'): typeof goog.ui.Component;
    function require(name: 'goog.ui.Component.EventType'): typeof goog.ui.Component.EventType;
    function require(name: 'goog.ui.Component.Error'): typeof goog.ui.Component.Error;
    function require(name: 'goog.ui.Component.State'): typeof goog.ui.Component.State;
}

declare module goog.ui {

    /**
     * Default implementation of UI component.
     *
     * @param {goog.dom.DomHelper=} opt_domHelper Optional DOM helper.
     * @constructor
     * @extends {goog.events.EventTarget}
     */
    class Component extends goog.events.EventTarget {
        constructor(opt_domHelper?: goog.dom.DomHelper);
        
        /**
         * Static helper method; returns the type of event components are expected to
         * dispatch when transitioning to or from the given state.
         * @param {goog.ui.Component.State} state State to/from which the component
         *     is transitioning.
         * @param {boolean} isEntering Whether the component is entering or leaving the
         *     state.
         * @return {goog.ui.Component.EventType} Event type to dispatch.
         */
        static getStateTransitionEvent(state: goog.ui.Component.State, isEntering: boolean): goog.ui.Component.EventType;
        
        /**
         * Set the default right-to-left value. This causes all component's created from
         * this point foward to have the given value. This is useful for cases where
         * a given page is always in one directionality, avoiding unnecessary
         * right to left determinations.
         * @param {?boolean} rightToLeft Whether the components should be rendered
         *     right-to-left. Null iff components should determine their directionality.
         */
        static setDefaultRightToLeft(rightToLeft: boolean): void;
        
        /**
         * Gets the unique ID for the instance of this component.  If the instance
         * doesn't already have an ID, generates one on the fly.
         * @return {string} Unique component ID.
         */
        getId(): string;
        
        /**
         * Assigns an ID to this component instance.  It is the caller's responsibility
         * to guarantee that the ID is unique.  If the component is a child of a parent
         * component, then the parent component's child index is updated to reflect the
         * new ID; this may throw an error if the parent already has a child with an ID
         * that conflicts with the new ID.
         * @param {string} id Unique component ID.
         */
        setId(id: string): void;
        
        /**
         * Gets the component's element.
         * @return {Element} The element for the component.
         */
        getElement(): Element;
        
        /**
         * Gets the component's element. This differs from getElement in that
         * it assumes that the element exists (i.e. the component has been
         * rendered/decorated) and will cause an assertion error otherwise (if
         * assertion is enabled).
         * @return {!Element} The element for the component.
         */
        getElementStrict(): Element;
        
        /**
         * Sets the component's root element to the given element.  Considered
         * protected and final.
         *
         * This should generally only be called during createDom. Setting the element
         * does not actually change which element is rendered, only the element that is
         * associated with this UI component.
         *
         * This should only be used by subclasses and its associated renderers.
         *
         * @param {Element} element Root element for the component.
         */
        setElementInternal(element: Element): void;
        
        /**
         * Returns an array of all the elements in this component's DOM with the
         * provided className.
         * @param {string} className The name of the class to look for.
         * @return {!goog.array.ArrayLike} The items found with the class name provided.
         */
        getElementsByClass(className: string): goog.array.ArrayLike;
        
        /**
         * Returns the first element in this component's DOM with the provided
         * className.
         * @param {string} className The name of the class to look for.
         * @return {Element} The first item with the class name provided.
         */
        getElementByClass(className: string): Element;
        
        /**
         * Similar to {@code getElementByClass} except that it expects the
         * element to be present in the dom thus returning a required value. Otherwise,
         * will assert.
         * @param {string} className The name of the class to look for.
         * @return {!Element} The first item with the class name provided.
         */
        getRequiredElementByClass(className: string): Element;
        
        /**
         * Returns the event handler for this component, lazily created the first time
         * this method is called.
         * @return {!goog.events.EventHandler<T>} Event handler for this component.
         * @protected
         * @this T
         * @template T
         */
        getHandler<T>(): goog.events.EventHandler<T>;
        
        /**
         * Sets the parent of this component to use for event bubbling.  Throws an error
         * if the component already has a parent or if an attempt is made to add a
         * component to itself as a child.  Callers must use {@code removeChild}
         * or {@code removeChildAt} to remove components from their containers before
         * calling this method.
         * @see goog.ui.Component#removeChild
         * @see goog.ui.Component#removeChildAt
         * @param {goog.ui.Component} parent The parent component.
         */
        setParent(parent: goog.ui.Component): void;
        
        /**
         * Returns the component's parent, if any.
         * @return {goog.ui.Component?} The parent component.
         */
        getParent(): goog.ui.Component;
        
        /**
         * Returns the dom helper that is being used on this component.
         * @return {!goog.dom.DomHelper} The dom helper used on this component.
         */
        getDomHelper(): goog.dom.DomHelper;
        
        /**
         * Determines whether the component has been added to the document.
         * @return {boolean} TRUE if rendered. Otherwise, FALSE.
         */
        isInDocument(): boolean;
        
        /**
         * Creates the initial DOM representation for the component.  The default
         * implementation is to set this.element_ = div.
         */
        createDom(): void;
        
        /**
         * Renders the component.  If a parent element is supplied, the component's
         * element will be appended to it.  If there is no optional parent element and
         * the element doesn't have a parentNode then it will be appended to the
         * document body.
         *
         * If this component has a parent component, and the parent component is
         * not in the document already, then this will not call {@code enterDocument}
         * on this component.
         *
         * Throws an Error if the component is already rendered.
         *
         * @param {Element=} opt_parentElement Optional parent element to render the
         *    component into.
         */
        render(opt_parentElement?: Element): void;
        
        /**
         * Renders the component before another element. The other element should be in
         * the document already.
         *
         * Throws an Error if the component is already rendered.
         *
         * @param {Node} sibling Node to render the component before.
         */
        renderBefore(sibling: Node): void;
        
        /**
         * Decorates the element for the UI component. If the element is in the
         * document, the enterDocument method will be called.
         *
         * If goog.ui.Component.ALLOW_DETACHED_DECORATION is false, the caller must
         * pass an element that is in the document.
         *
         * @param {Element} element Element to decorate.
         */
        decorate(element: Element): void;
        
        /**
         * Determines if a given element can be decorated by this type of component.
         * This method should be overridden by inheriting objects.
         * @param {Element} element Element to decorate.
         * @return {boolean} True if the element can be decorated, false otherwise.
         */
        canDecorate(element: Element): boolean;
        
        /**
         * @return {boolean} Whether the component was decorated.
         */
        wasDecorated(): boolean;
        
        /**
         * Actually decorates the element. Should be overridden by inheriting objects.
         * This method can assume there are checks to ensure the component has not
         * already been rendered have occurred and that enter document will be called
         * afterwards. This method is considered protected.
         * @param {Element} element Element to decorate.
         * @protected
         */
        decorateInternal(element: Element): void;
        
        /**
         * Called when the component's element is known to be in the document. Anything
         * using document.getElementById etc. should be done at this stage.
         *
         * If the component contains child components, this call is propagated to its
         * children.
         */
        enterDocument(): void;
        
        /**
         * Called by dispose to clean up the elements and listeners created by a
         * component, or by a parent component/application who has removed the
         * component from the document but wants to reuse it later.
         *
         * If the component contains child components, this call is propagated to its
         * children.
         *
         * It should be possible for the component to be rendered again once this method
         * has been called.
         */
        exitDocument(): void;
        
        /**
         * Helper function for subclasses that gets a unique id for a given fragment,
         * this can be used by components to generate unique string ids for DOM
         * elements.
         * @param {string} idFragment A partial id.
         * @return {string} Unique element id.
         */
        makeId(idFragment: string): string;
        
        /**
         * Makes a collection of ids.  This is a convenience method for makeId.  The
         * object's values are the id fragments and the new values are the generated
         * ids.  The key will remain the same.
         * @param {Object} object The object that will be used to create the ids.
         * @return {!Object} An object of id keys to generated ids.
         */
        makeIds(object: Object): Object;
        
        /**
         * Returns the model associated with the UI component.
         * @return {*} The model.
         */
        getModel(): any;
        
        /**
         * Sets the model associated with the UI component.
         * @param {*} obj The model.
         */
        setModel(obj: any): void;
        
        /**
         * Helper function for returning the fragment portion of an id generated using
         * makeId().
         * @param {string} id Id generated with makeId().
         * @return {string} Fragment.
         */
        getFragmentFromId(id: string): string;
        
        /**
         * Helper function for returning an element in the document with a unique id
         * generated using makeId().
         * @param {string} idFragment The partial id.
         * @return {Element} The element with the unique id, or null if it cannot be
         *     found.
         */
        getElementByFragment(idFragment: string): Element;
        
        /**
         * Adds the specified component as the last child of this component.  See
         * {@link goog.ui.Component#addChildAt} for detailed semantics.
         *
         * @see goog.ui.Component#addChildAt
         * @param {goog.ui.Component} child The new child component.
         * @param {boolean=} opt_render If true, the child component will be rendered
         *    into the parent.
         */
        addChild(child: goog.ui.Component, opt_render?: boolean): void;
        
        /**
         * Adds the specified component as a child of this component at the given
         * 0-based index.
         *
         * Both {@code addChild} and {@code addChildAt} assume the following contract
         * between parent and child components:
         *  <ul>
         *    <li>the child component's element must be a descendant of the parent
         *        component's element, and
         *    <li>the DOM state of the child component must be consistent with the DOM
         *        state of the parent component (see {@code isInDocument}) in the
         *        steady state -- the exception is to addChildAt(child, i, false) and
         *        then immediately decorate/render the child.
         *  </ul>
         *
         * In particular, {@code parent.addChild(child)} will throw an error if the
         * child component is already in the document, but the parent isn't.
         *
         * Clients of this API may call {@code addChild} and {@code addChildAt} with
         * {@code opt_render} set to true.  If {@code opt_render} is true, calling these
         * methods will automatically render the child component's element into the
         * parent component's element. If the parent does not yet have an element, then
         * {@code createDom} will automatically be invoked on the parent before
         * rendering the child.
         *
         * Invoking {@code parent.addChild(child, true)} will throw an error if the
         * child component is already in the document, regardless of the parent's DOM
         * state.
         *
         * If {@code opt_render} is true and the parent component is not already
         * in the document, {@code enterDocument} will not be called on this component
         * at this point.
         *
         * Finally, this method also throws an error if the new child already has a
         * different parent, or the given index is out of bounds.
         *
         * @see goog.ui.Component#addChild
         * @param {goog.ui.Component} child The new child component.
         * @param {number} index 0-based index at which the new child component is to be
         *    added; must be between 0 and the current child count (inclusive).
         * @param {boolean=} opt_render If true, the child component will be rendered
         *    into the parent.
         * @return {void} Nada.
         */
        addChildAt(child: goog.ui.Component, index: number, opt_render?: boolean): void;
        
        /**
         * Returns the DOM element into which child components are to be rendered,
         * or null if the component itself hasn't been rendered yet.  This default
         * implementation returns the component's root element.  Subclasses with
         * complex DOM structures must override this method.
         * @return {Element} Element to contain child elements (null if none).
         */
        getContentElement(): Element;
        
        /**
         * Returns true if the component is rendered right-to-left, false otherwise.
         * The first time this function is invoked, the right-to-left rendering property
         * is set if it has not been already.
         * @return {boolean} Whether the control is rendered right-to-left.
         */
        isRightToLeft(): boolean;
        
        /**
         * Set is right-to-left. This function should be used if the component needs
         * to know the rendering direction during dom creation (i.e. before
         * {@link #enterDocument} is called and is right-to-left is set).
         * @param {boolean} rightToLeft Whether the component is rendered
         *     right-to-left.
         */
        setRightToLeft(rightToLeft: boolean): void;
        
        /**
         * Returns true if the component has children.
         * @return {boolean} True if the component has children.
         */
        hasChildren(): boolean;
        
        /**
         * Returns the number of children of this component.
         * @return {number} The number of children.
         */
        getChildCount(): number;
        
        /**
         * Returns an array containing the IDs of the children of this component, or an
         * empty array if the component has no children.
         * @return {!Array<string>} Child component IDs.
         */
        getChildIds(): Array<string>;
        
        /**
         * Returns the child with the given ID, or null if no such child exists.
         * @param {string} id Child component ID.
         * @return {goog.ui.Component?} The child with the given ID; null if none.
         */
        getChild(id: string): goog.ui.Component;
        
        /**
         * Returns the child at the given index, or null if the index is out of bounds.
         * @param {number} index 0-based index.
         * @return {goog.ui.Component?} The child at the given index; null if none.
         */
        getChildAt(index: number): goog.ui.Component;
        
        /**
         * Calls the given function on each of this component's children in order.  If
         * {@code opt_obj} is provided, it will be used as the 'this' object in the
         * function when called.  The function should take two arguments:  the child
         * component and its 0-based index.  The return value is ignored.
         * @param {function(this:T,?,number):?} f The function to call for every
         * child component; should take 2 arguments (the child and its index).
         * @param {T=} opt_obj Used as the 'this' object in f when called.
         * @template T
         */
        forEachChild<T>(f: (arg0: any, arg1: number) => any, opt_obj?: T): void;
        
        /**
         * Returns the 0-based index of the given child component, or -1 if no such
         * child is found.
         * @param {goog.ui.Component?} child The child component.
         * @return {number} 0-based index of the child component; -1 if not found.
         */
        indexOfChild(child: goog.ui.Component): number;
        
        /**
         * Removes the given child from this component, and returns it.  Throws an error
         * if the argument is invalid or if the specified child isn't found in the
         * parent component.  The argument can either be a string (interpreted as the
         * ID of the child component to remove) or the child component itself.
         *
         * If {@code opt_unrender} is true, calls {@link goog.ui.component#exitDocument}
         * on the removed child, and subsequently detaches the child's DOM from the
         * document.  Otherwise it is the caller's responsibility to clean up the child
         * component's DOM.
         *
         * @see goog.ui.Component#removeChildAt
         * @param {string|goog.ui.Component|null} child The ID of the child to remove,
         *    or the child component itself.
         * @param {boolean=} opt_unrender If true, calls {@code exitDocument} on the
         *    removed child component, and detaches its DOM from the document.
         * @return {goog.ui.Component} The removed component, if any.
         */
        removeChild(child: string|goog.ui.Component|void, opt_unrender?: boolean): goog.ui.Component;
        
        /**
         * Removes the child at the given index from this component, and returns it.
         * Throws an error if the argument is out of bounds, or if the specified child
         * isn't found in the parent.  See {@link goog.ui.Component#removeChild} for
         * detailed semantics.
         *
         * @see goog.ui.Component#removeChild
         * @param {number} index 0-based index of the child to remove.
         * @param {boolean=} opt_unrender If true, calls {@code exitDocument} on the
         *    removed child component, and detaches its DOM from the document.
         * @return {goog.ui.Component} The removed component, if any.
         */
        removeChildAt(index: number, opt_unrender?: boolean): goog.ui.Component;
        
        /**
         * Removes every child component attached to this one and returns them.
         *
         * @see goog.ui.Component#removeChild
         * @param {boolean=} opt_unrender If true, calls {@link #exitDocument} on the
         *    removed child components, and detaches their DOM from the document.
         * @return {!Array<goog.ui.Component>} The removed components if any.
         */
        removeChildren(opt_unrender?: boolean): Array<goog.ui.Component>;
    }
}

declare module goog.ui.Component {

    /**
     * Common events fired by components so that event propagation is useful.  Not
     * all components are expected to dispatch or listen for all event types.
     * Events dispatched before a state transition should be cancelable to prevent
     * the corresponding state change.
     * @enum {string}
     */
    type EventType = string;
    var EventType: {
        [index: string]: EventType;
        // BEFORE_SHOW: EventType;
        // SHOW: EventType;
        // HIDE: EventType;
        // DISABLE: EventType;
        // ENABLE: EventType;
        // HIGHLIGHT: EventType;
        // UNHIGHLIGHT: EventType;
        // ACTIVATE: EventType;
        // DEACTIVATE: EventType;
        // SELECT: EventType;
        // UNSELECT: EventType;
        // CHECK: EventType;
        // UNCHECK: EventType;
        // FOCUS: EventType;
        // BLUR: EventType;
        // OPEN: EventType;
        // CLOSE: EventType;
        // ENTER: EventType;
        // LEAVE: EventType;
        // ACTION: EventType;
        // CHANGE: EventType;
    };

    /**
     * Errors thrown by the component.
     * @enum {string}
     */
    type Error = string;
    var Error: {
        NOT_SUPPORTED: Error;
        DECORATE_INVALID: Error;
        ALREADY_RENDERED: Error;
        PARENT_UNABLE_TO_BE_SET: Error;
        CHILD_INDEX_OUT_OF_BOUNDS: Error;
        NOT_OUR_CHILD: Error;
        NOT_IN_DOCUMENT: Error;
        STATE_INVALID: Error;
    };

    /**
     * Common component states.  Components may have distinct appearance depending
     * on what state(s) apply to them.  Not all components are expected to support
     * all states.
     * @enum {number}
     */
    type State = number;
    var State: {
        [index: string]: State;
        // ALL: State;
        // DISABLED: State;
        // HOVER: State;
        // ACTIVE: State;
        // SELECTED: State;
        // CHECKED: State;
        // FOCUSED: State;
        // OPENED: State;
    };
}
