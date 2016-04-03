declare module goog {
    function require(name: 'goog.fx.DragListDirection'): typeof goog.fx.DragListDirection;
    function require(name: 'goog.fx.DragListGroup'): typeof goog.fx.DragListGroup;
    function require(name: 'goog.fx.DragListGroupEvent'): typeof goog.fx.DragListGroupEvent;
}

declare module goog.fx {

    /**
     * Enum to indicate the direction that a drag list grows.
     * @enum {number}
     */
    type DragListDirection = number;
    var DragListDirection: {
        DOWN: DragListDirection;
        RIGHT: DragListDirection;
        LEFT: DragListDirection;
        RIGHT_2D: DragListDirection;
        LEFT_2D: DragListDirection;
    };

    /**
     * A class representing a group of one or more "drag lists" with items that can
     * be dragged within them and between them.
     *
     * Example usage:
     *   var dragListGroup = new goog.fx.DragListGroup();
     *   dragListGroup.setDragItemHandleHoverClass(className1, className2);
     *   dragListGroup.setDraggerElClass(className3);
     *   dragListGroup.addDragList(vertList, goog.fx.DragListDirection.DOWN);
     *   dragListGroup.addDragList(horizList, goog.fx.DragListDirection.RIGHT);
     *   dragListGroup.init();
     *
     * @extends {goog.events.EventTarget}
     * @constructor
     */
    class DragListGroup extends goog.events.EventTarget {
        constructor();
        
        /**
         * Events dispatched by this class.
         * @const
         */
        static EventType: any;
        
        /**
         * Sets the property of the currDragItem that it is always displayed in the
         * list.
         */
        setIsCurrDragItemAlwaysDisplayed(): void;
        
        /**
         * Sets the private property updateWhileDragging_ to false. This disables the
         * update of the position of the currDragItem while dragging. It will only be
         * placed to its new location once the drag ends.
         */
        setNoUpdateWhileDragging(): void;
        
        /**
         * Sets the distance the user has to drag the element before a drag operation
         * is started.
         * @param {number} distance The number of pixels after which a mousedown and
         *     move is considered a drag.
         */
        setHysteresis(distance: number): void;
        
        /**
         * @return {number} distance The number of pixels after which a mousedown and
         *     move is considered a drag.
         */
        getHysteresis(): number;
        
        /**
         * Adds a drag list to this DragListGroup.
         * All calls to this method must happen before the call to init().
         * Remember that all child nodes (except text nodes) will be made draggable to
         * any other drag list in this group.
         *
         * @param {Element} dragListElement Must be a container for a list of items
         *     that should all be made draggable.
         * @param {goog.fx.DragListDirection} growthDirection The direction that this
         *     drag list grows in (i.e. if an item is appended to the DOM, the list's
         *     bounding box expands in this direction).
         * @param {boolean=} opt_unused Unused argument.
         * @param {string=} opt_dragHoverClass CSS class to apply to this drag list when
         *     the draggerEl hovers over it during a drag action.  If present, must be a
         *     single, valid classname (not a string of space-separated classnames).
         */
        addDragList(dragListElement: Element, growthDirection: goog.fx.DragListDirection, opt_unused?: boolean, opt_dragHoverClass?: string): void;
        
        /**
         * Sets a user-supplied function used to get the "handle" element for a drag
         * item. The function must accept exactly one argument. The argument may be
         * any drag item element.
         *
         * If not set, the default implementation uses the whole drag item as the
         * handle.
         *
         * @param {function(Element): Element} getHandleForDragItemFn A function that,
         *     given any drag item, returns a reference to its "handle" element
         *     (which may be the drag item element itself).
         */
        setFunctionToGetHandleForDragItem(getHandleForDragItemFn: (arg0: Element) => Element): void;
        
        /**
         * Sets a user-supplied CSS class to add to a drag item on hover (not during a
         * drag action).
         * @param {...!string} var_args The CSS class or classes.
         */
        setDragItemHoverClass(...var_args: string[]): void;
        
        /**
         * Sets a user-supplied CSS class to add to a drag item handle on hover (not
         * during a drag action).
         * @param {...!string} var_args The CSS class or classes.
         */
        setDragItemHandleHoverClass(...var_args: string[]): void;
        
        /**
         * Sets a user-supplied CSS class to add to the current drag item (during a
         * drag action).
         *
         * If not set, the default behavior adds visibility:hidden to the current drag
         * item so that it is a block of empty space in the hover drag list (if any).
         * If this class is set by the user, then the default behavior does not happen
         * (unless, of course, the class also contains visibility:hidden).
         *
         * @param {...!string} var_args The CSS class or classes.
         */
        setCurrDragItemClass(...var_args: string[]): void;
        
        /**
         * Sets a user-supplied CSS class to add to the clone of the current drag item
         * that's actually being dragged around (during a drag action).
         * @param {string} draggerElClass The CSS class.
         */
        setDraggerElClass(draggerElClass: string): void;
        
        /**
         * Performs the initial setup to make all items in all lists draggable.
         */
        init(): void;
        
        /**
         * Adds a single item to the given drag list and sets up the drag listeners for
         * it.
         * If opt_index is specified the item is inserted at this index, otherwise the
         * item is added as the last child of the list.
         *
         * @param {!Element} list The drag list where to add item to.
         * @param {!Element} item The new element to add.
         * @param {number=} opt_index Index where to insert the item in the list. If not
         * specified item is inserted as the last child of list.
         */
        addItemToDragList(list: Element, item: Element, opt_index?: number): void;
        
        /**
         * Listens for drag events on the given drag item. This method is currently used
         * to initialize drag items.
         *
         * @param {Element} dragItem the element to initialize. This element has to be
         * in one of the drag lists.
         * @protected
         */
        listenForDragEvents(dragItem: Element): void;
        
        /**
         * Generates an element to follow the cursor during dragging, given a drag
         * source element.  The default behavior is simply to clone the source element,
         * but this may be overridden in subclasses.  This method is called by
         * {@code createDragElement()} before the drag class is added.
         *
         * @param {Element} sourceEl Drag source element.
         * @return {!Element} The new drag element.
         * @protected
         * @suppress {deprecated}
         */
        createDragElementInternal(sourceEl: Element): Element;
        
        /**
         * Updates the value of currHoverItem_.
         *
         * This method is used for insertion only when updateWhileDragging_ is false.
         * The below implementation is the basic one. This method can be extended by
         * a subclass to support changes to hovered item (eg: highlighting). Parametr
         * opt_draggerElCenter can be used for more sophisticated effects.
         *
         * @param {Element} hoverNextItem element of the list that is hovered over.
         * @param {goog.math.Coordinate=} opt_draggerElCenter current position of
         *     the dragged element.
         * @protected
         */
        updateCurrHoverItem(hoverNextItem: Element, opt_draggerElCenter?: goog.math.Coordinate): void;
        
        /**
         * Inserts the currently dragged item in its new place.
         *
         * This method is used for insertion only when updateWhileDragging_ is false
         * (otherwise there is no need for that). In the basic implementation
         * the element is inserted before the currently hovered over item (this can
         * be changed by overriding the method in subclasses).
         *
         * @protected
         */
        insertCurrHoverItem(): void;
    }

    /**
     * The event object dispatched by DragListGroup.
     * The fields draggerElCenter, hoverList, and hoverNextItem are only available
     * for the BEFOREDRAGMOVE and DRAGMOVE events.
     *
     * @param {string} type The event type string.
     * @param {goog.fx.DragListGroup} dragListGroup A reference to the associated
     *     DragListGroup object.
     * @param {goog.events.BrowserEvent|goog.fx.DragEvent} event The event fired
     *     by the browser or fired by the dragger.
     * @param {Element} currDragItem The current drag item being moved.
     * @param {Element} draggerEl The clone of the current drag item that's actually
     *     being dragged around.
     * @param {goog.fx.Dragger} dragger The dragger object.
     * @param {goog.math.Coordinate=} opt_draggerElCenter The current center
     *     position of the draggerEl.
     * @param {Element=} opt_hoverList The current drag list that's being hovered
     *     over, or null if the center of draggerEl is outside of any drag lists.
     *     If not null and the drag action ends right now, then currDragItem will
     *     end up in this list.
     * @param {Element=} opt_hoverNextItem The current next item in the hoverList
     *     that the draggerEl is hovering over. (I.e. If the drag action ends
     *     right now, then this item would become the next item after the new
     *     location of currDragItem.) May be null if not applicable or if
     *     currDragItem would be added to the end of hoverList.
     * @constructor
     * @extends {goog.events.Event}
     */
    class DragListGroupEvent extends goog.events.Event {
        constructor(type: string, dragListGroup: goog.fx.DragListGroup, event: goog.events.BrowserEvent|goog.fx.DragEvent, currDragItem: Element, draggerEl: Element, dragger: goog.fx.Dragger, opt_draggerElCenter?: goog.math.Coordinate, opt_hoverList?: Element, opt_hoverNextItem?: Element);
    }
}
