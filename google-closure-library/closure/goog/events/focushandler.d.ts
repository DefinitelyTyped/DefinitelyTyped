declare module goog {
    function require(name: 'goog.events.FocusHandler'): typeof goog.events.FocusHandler;
    function require(name: 'goog.events.FocusHandler.EventType'): typeof goog.events.FocusHandler.EventType;
}

declare module goog.events {

    /**
     * This event handler allows you to catch focus events when descendants gain or
     * loses focus.
     * @param {Element|Document} element  The node to listen on.
     * @constructor
     * @extends {goog.events.EventTarget}
     * @final
     */
    class FocusHandler extends goog.events.EventTarget {
        constructor(element: Element|Document);
        
        /**
         * This handles the underlying events and dispatches a new event.
         * @param {goog.events.BrowserEvent} e  The underlying browser event.
         */
        handleEvent(e: goog.events.BrowserEvent): void;
    }
}

declare module goog.events.FocusHandler {

    /**
     * Enum type for the events fired by the focus handler
     * @enum {string}
     */
    type EventType = string;
    var EventType: {
        FOCUSIN: EventType;
        FOCUSOUT: EventType;
    };
}
