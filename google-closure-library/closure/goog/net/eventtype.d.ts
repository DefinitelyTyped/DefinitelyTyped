declare module goog {
    function require(name: 'goog.net.EventType'): typeof goog.net.EventType;
}

declare module goog.net {

    /**
     * Event names for network events
     * @enum {string}
     */
    type EventType = string;
    var EventType: {
        COMPLETE: EventType;
        SUCCESS: EventType;
        ERROR: EventType;
        ABORT: EventType;
        READY: EventType;
        READY_STATE_CHANGE: EventType;
        TIMEOUT: EventType;
        INCREMENTAL_DATA: EventType;
        PROGRESS: EventType;
    };
}
