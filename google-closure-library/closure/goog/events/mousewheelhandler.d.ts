declare module goog {
    function require(name: 'goog.events.MouseWheelHandler'): typeof goog.events.MouseWheelHandler;
    function require(name: 'goog.events.MouseWheelEvent'): typeof goog.events.MouseWheelEvent;
    function require(name: 'goog.events.MouseWheelHandler.EventType'): typeof goog.events.MouseWheelHandler.EventType;
}

declare module goog.events {

    /**
     * This event handler allows you to catch mouse wheel events in a consistent
     * manner.
     * @param {Element|Document} element The element to listen to the mouse wheel
     *     event on.
     * @param {boolean=} opt_capture Whether to handle the mouse wheel event in
     *     capture phase.
     * @constructor
     * @extends {goog.events.EventTarget}
     */
    class MouseWheelHandler extends goog.events.EventTarget {
        constructor(element: Element|Document, opt_capture?: boolean);
        
        /**
         * @param {number} maxDeltaX Maximum magnitude for x delta on each mousewheel
         *     event. Should be non-negative.
         */
        setMaxDeltaX(maxDeltaX: number): void;
        
        /**
         * @param {number} maxDeltaY Maximum magnitude for y delta on each mousewheel
         *     event. Should be non-negative.
         */
        setMaxDeltaY(maxDeltaY: number): void;
        
        /**
         * Handles the events on the element.
         * @param {goog.events.BrowserEvent} e The underlying browser event.
         */
        handleEvent(e: goog.events.BrowserEvent): void;
    }

    /**
     * A base class for mouse wheel events. This is used with the
     * MouseWheelHandler.
     *
     * @param {number} detail The number of rows the user scrolled.
     * @param {Event} browserEvent Browser event object.
     * @param {number} deltaX The number of rows the user scrolled in the X
     *     direction.
     * @param {number} deltaY The number of rows the user scrolled in the Y
     *     direction.
     * @constructor
     * @extends {goog.events.BrowserEvent}
     * @final
     */
    class MouseWheelEvent extends goog.events.BrowserEvent {
        constructor(detail: number, browserEvent: Event, deltaX: number, deltaY: number);
    }
}

declare module goog.events.MouseWheelHandler {

    /**
     * Enum type for the events fired by the mouse wheel handler.
     * @enum {string}
     */
    type EventType = string;
    var EventType: {
        MOUSEWHEEL: EventType;
    };
}
