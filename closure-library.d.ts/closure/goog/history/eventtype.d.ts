declare module goog {
    function require(name: 'goog.history.EventType'): typeof goog.history.EventType;
}

declare module goog.history {

    /**
     * Event types for goog.history.
     * @enum {string}
     */
    type EventType = string;
    var EventType: {
        NAVIGATE: EventType;
    };
}
