declare module goog {
    function require(name: 'goog.fx.Dragger'): typeof goog.fx.Dragger;
    function require(name: 'goog.fx.DragEvent'): typeof goog.fx.DragEvent;
    function require(name: 'goog.fx.Dragger.EventType'): typeof goog.fx.Dragger.EventType;
}

declare module goog.fx {

    /**
     * A class that allows mouse or touch-based dragging (moving) of an element
     *
     * @param {Element} target The element that will be dragged.
     * @param {Element=} opt_handle An optional handle to control the drag, if null
     *     the target is used.
     * @param {goog.math.Rect=} opt_limits Object containing left, top, width,
     *     and height.
     *
     * @extends {goog.events.EventTarget}
     * @constructor
     */
    class Dragger extends goog.events.EventTarget {
        constructor(target: Element, opt_handle?: Element, opt_limits?: goog.math.Rect);
        
        /**
         * Reference to drag target element.
         * @type {Element}
         */
        target: Element;
        
        /**
         * Reference to the handler that initiates the drag.
         * @type {Element}
         */
        handle: Element;
        
        /**
         * Object representing the limits of the drag region.
         * @type {goog.math.Rect}
         */
        limits: goog.math.Rect;
        
        /**
         * Current x position of mouse or touch relative to viewport.
         * @type {number}
         */
        clientX: number;
        
        /**
         * Current y position of mouse or touch relative to viewport.
         * @type {number}
         */
        clientY: number;
        
        /**
         * Current x position of mouse or touch relative to screen. Deprecated because
         * it doesn't take into affect zoom level or pixel density.
         * @type {number}
         * @deprecated Consider switching to clientX instead.
         */
        screenX: number;
        
        /**
         * Current y position of mouse or touch relative to screen. Deprecated because
         * it doesn't take into affect zoom level or pixel density.
         * @type {number}
         * @deprecated Consider switching to clientY instead.
         */
        screenY: number;
        
        /**
         * The x position where the first mousedown or touchstart occurred.
         * @type {number}
         */
        startX: number;
        
        /**
         * The y position where the first mousedown or touchstart occurred.
         * @type {number}
         */
        startY: number;
        
        /**
         * Current x position of drag relative to target's parent.
         * @type {number}
         */
        deltaX: number;
        
        /**
         * Current y position of drag relative to target's parent.
         * @type {number}
         */
        deltaY: number;
        
        /**
         * The current page scroll value.
         * @type {goog.math.Coordinate}
         */
        pageScroll: goog.math.Coordinate;
        
        /**
         * Creates copy of node being dragged.  This is a utility function to be used
         * wherever it is inappropriate for the original source to follow the mouse
         * cursor itself.
         *
         * @param {Element} sourceEl Element to copy.
         * @return {!Element} The clone of {@code sourceEl}.
         */
        static cloneNode(sourceEl: Element): Element;
        
        /**
         * Turns on/off true RTL behavior.  This should be called immediately after
         * construction.  This is a temporary flag to allow clients to transition
         * to the new component at their convenience.  At some point true will be the
         * default.
         * @param {boolean} useRightPositioningForRtl True if "right" should be used for
         *     positioning, false if "left" should be used for positioning.
         */
        enableRightPositioningForRtl(useRightPositioningForRtl: boolean): void;
        
        /**
         * Returns the event handler, intended for subclass use.
         * @return {!goog.events.EventHandler<T>} The event handler.
         * @this T
         * @template T
         */
        getHandler<T>(): goog.events.EventHandler<T>;
        
        /**
         * Sets (or reset) the Drag limits after a Dragger is created.
         * @param {goog.math.Rect?} limits Object containing left, top, width,
         *     height for new Dragger limits. If target is right-to-left and
         *     enableRightPositioningForRtl(true) is called, then rect is interpreted as
         *     right, top, width, and height.
         */
        setLimits(limits: goog.math.Rect): void;
        
        /**
         * Sets the distance the user has to drag the element before a drag operation is
         * started.
         * @param {number} distance The number of pixels after which a mousedown and
         *     move is considered a drag.
         */
        setHysteresis(distance: number): void;
        
        /**
         * Gets the distance the user has to drag the element before a drag operation is
         * started.
         * @return {number} distance The number of pixels after which a mousedown and
         *     move is considered a drag.
         */
        getHysteresis(): number;
        
        /**
         * Sets the SCROLL event target to make drag element follow scrolling.
         *
         * @param {EventTarget} scrollTarget The event target that dispatches SCROLL
         *     events.
         */
        setScrollTarget(scrollTarget: goog.globalEventTarget): void;
        
        /**
         * Enables cancelling of built-in IE drag events.
         * @param {boolean} cancelIeDragStart Whether to enable cancelling of IE
         *     dragstart event.
         */
        setCancelIeDragStart(cancelIeDragStart: boolean): void;
        
        /**
         * @return {boolean} Whether the dragger is enabled.
         */
        getEnabled(): boolean;
        
        /**
         * Set whether dragger is enabled
         * @param {boolean} enabled Whether dragger is enabled.
         */
        setEnabled(enabled: boolean): void;
        
        /**
         * Event handler that is used to start the drag
         * @param {goog.events.BrowserEvent} e Event object.
         */
        startDrag(e: goog.events.BrowserEvent): void;
        
        /**
         * Sets up event handlers when dragging starts.
         * @protected
         */
        setupDragHandlers(): void;
        
        /**
         * Event handler that is used to end the drag.
         * @param {goog.events.BrowserEvent} e Event object.
         * @param {boolean=} opt_dragCanceled Whether the drag has been canceled.
         */
        endDrag(e: goog.events.BrowserEvent, opt_dragCanceled?: boolean): void;
        
        /**
         * Event handler that is used to end the drag by cancelling it.
         * @param {goog.events.BrowserEvent} e Event object.
         */
        endDragCancel(e: goog.events.BrowserEvent): void;
        
        /**
         * @param {goog.events.BrowserEvent} e The closure object
         *     representing the browser event that caused a drag event.
         * @param {number} x The new horizontal position for the drag element.
         * @param {number} y The new vertical position for the drag element.
         * @param {boolean} dragFromScroll Whether dragging was caused by scrolling
         *     the associated scroll target.
         * @protected
         */
        doDrag(e: goog.events.BrowserEvent, x: number, y: number, dragFromScroll: boolean): void;
        
        /**
         * Returns the 'real' x after limits are applied (allows for some
         * limits to be undefined).
         * @param {number} x X-coordinate to limit.
         * @return {number} The 'real' X-coordinate after limits are applied.
         */
        limitX(x: number): number;
        
        /**
         * Returns the 'real' y after limits are applied (allows for some
         * limits to be undefined).
         * @param {number} y Y-coordinate to limit.
         * @return {number} The 'real' Y-coordinate after limits are applied.
         */
        limitY(y: number): number;
        
        /**
         * Overridable function for computing the initial position of the target
         * before dragging begins.
         * @protected
         */
        computeInitialPosition(): void;
        
        /**
         * Overridable function for handling the default action of the drag behaviour.
         * Normally this is simply moving the element to x,y though in some cases it
         * might be used to resize the layer.  This is basically a shortcut to
         * implementing a default ondrag event handler.
         * @param {number} x X-coordinate for target element. In right-to-left, x this
         *     is the number of pixels the target should be moved to from the right.
         * @param {number} y Y-coordinate for target element.
         */
        defaultAction(x: number, y: number): void;
        
        /**
         * @return {boolean} Whether the dragger is currently in the midst of a drag.
         */
        isDragging(): boolean;
    }

    /**
     * Object representing a drag event
     * @param {string} type Event type.
     * @param {goog.fx.Dragger} dragobj Drag object initiating event.
     * @param {number} clientX X-coordinate relative to the viewport.
     * @param {number} clientY Y-coordinate relative to the viewport.
     * @param {goog.events.BrowserEvent} browserEvent The closure object
     *   representing the browser event that caused this drag event.
     * @param {number=} opt_actX Optional actual x for drag if it has been limited.
     * @param {number=} opt_actY Optional actual y for drag if it has been limited.
     * @param {boolean=} opt_dragCanceled Whether the drag has been canceled.
     * @constructor
     * @extends {goog.events.Event}
     */
    class DragEvent extends goog.events.Event {
        constructor(type: string, dragobj: goog.fx.Dragger, clientX: number, clientY: number, browserEvent: goog.events.BrowserEvent, opt_actX?: number, opt_actY?: number, opt_dragCanceled?: boolean);
    }
}

declare module goog.fx.Dragger {

    /**
     * Constants for event names.
     * @enum {string}
     */
    type EventType = string;
    var EventType: {
        EARLY_CANCEL: EventType;
        START: EventType;
        BEFOREDRAG: EventType;
        DRAG: EventType;
        END: EventType;
    };
}
