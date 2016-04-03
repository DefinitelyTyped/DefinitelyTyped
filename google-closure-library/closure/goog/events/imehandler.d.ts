declare module goog {
    function require(name: 'goog.events.ImeHandler'): typeof goog.events.ImeHandler;
    function require(name: 'goog.events.ImeHandler.EventType'): typeof goog.events.ImeHandler.EventType;
    function require(name: 'goog.events.ImeHandler.Event'): typeof goog.events.ImeHandler.Event;
}

declare module goog.events {

    /**
     * Dispatches high-level events for IMEs.
     * @param {Element} el The element to listen on.
     * @extends {goog.events.EventTarget}
     * @constructor
     * @final
     */
    class ImeHandler extends goog.events.EventTarget {
        constructor(el: Element);
        
        /**
         * Whether to use the composition events.
         * @type {boolean}
         */
        static USES_COMPOSITION_EVENTS: boolean;
        
        /**
         * @return {boolean} Whether an IME is active.
         */
        isImeMode(): boolean;
    }
}

declare module goog.events.ImeHandler {

    /**
     * Event types fired by ImeHandler. These events do not make any guarantees
     * about whether they were fired before or after the event in question.
     * @enum {string}
     */
    type EventType = string;
    var EventType: {
        START: EventType;
        UPDATE: EventType;
        END: EventType;
    };

    /**
     * An event fired by ImeHandler.
     * @param {goog.events.ImeHandler.EventType} type The type.
     * @param {goog.events.BrowserEvent} reason The trigger for this event.
     * @constructor
     * @extends {goog.events.Event}
     * @final
     */
    class Event extends goog.events.Event {
        constructor(type: goog.events.ImeHandler.EventType, reason: goog.events.BrowserEvent);
    }
}
