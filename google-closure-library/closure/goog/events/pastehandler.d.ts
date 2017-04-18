declare module goog {
    function require(name: 'goog.events.PasteHandler'): typeof goog.events.PasteHandler;
    function require(name: 'goog.events.PasteHandler.EventType'): typeof goog.events.PasteHandler.EventType;
    function require(name: 'goog.events.PasteHandler.State'): typeof goog.events.PasteHandler.State;
}

declare module goog.events {

    /**
     * A paste event detector. Gets an {@code element} as parameter and fires
     * {@code goog.events.PasteHandler.EventType.PASTE} events when text is
     * pasted in the {@code element}. Uses heuristics to detect paste events in FF2.
     * See more details of the heuristic on {@link #handleEvent_}.
     *
     * @param {Element} element The textarea element we are listening on.
     * @constructor
     * @extends {goog.events.EventTarget}
     */
    class PasteHandler extends goog.events.EventTarget {
        constructor(element: Element);
        
        /**
         * The mandatory delay we expect between two {@code input} events, used to
         * differentiated between non key paste events and key events.
         * @type {number}
         */
        static MANDATORY_MS_BETWEEN_INPUT_EVENTS_TIE_BREAKER: number;
        
        /**
         * Returns the current state of the paste detection algorithm. Used mostly for
         * testing.
         * @return {goog.events.PasteHandler.State} The current state of the class.
         */
        getState(): goog.events.PasteHandler.State;
        
        /**
         * Returns the event handler.
         * @return {goog.events.EventHandler<T>} The event handler.
         * @protected
         * @this T
         * @template T
         */
        getEventHandler<T>(): goog.events.EventHandler<T>;
    }
}

declare module goog.events.PasteHandler {

    /**
     * The types of events fired by this class.
     * @enum {string}
     */
    type EventType = string;
    var EventType: {
        PASTE: EventType;
        AFTER_PASTE: EventType;
    };

    /**
     * The states that this class can be found, on the paste detection algorithm.
     * @enum {string}
     */
    type State = string;
    var State: {
        INIT: State;
        FOCUSED: State;
        TYPING: State;
    };
}
