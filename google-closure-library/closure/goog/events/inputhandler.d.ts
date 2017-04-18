declare module goog {
    function require(name: 'goog.events.InputHandler'): typeof goog.events.InputHandler;
    function require(name: 'goog.events.InputHandler.EventType'): typeof goog.events.InputHandler.EventType;
}

declare module goog.events {

    /**
     * This event handler will dispatch events when the user types into a text
     * input, password input or a textarea
     * @param {Element} element  The element that you want to listen for input
     *     events on.
     * @constructor
     * @extends {goog.events.EventTarget}
     */
    class InputHandler extends goog.events.EventTarget {
        constructor(element: Element);
        
        /**
         * This handles the underlying events and dispatches a new event as needed.
         * @param {goog.events.BrowserEvent} e The underlying browser event.
         */
        handleEvent(e: goog.events.BrowserEvent): void;
    }
}

declare module goog.events.InputHandler {

    /**
     * Enum type for the events fired by the input handler
     * @enum {string}
     */
    type EventType = string;
    var EventType: {
        INPUT: EventType;
    };
}
