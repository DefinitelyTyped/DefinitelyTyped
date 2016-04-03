declare module goog {
    function require(name: 'goog.events.OnlineHandler'): typeof goog.events.OnlineHandler;
    function require(name: 'goog.events.OnlineHandler.EventType'): typeof goog.events.OnlineHandler.EventType;
}

declare module goog.events {

    /**
     * Basic object for detecting whether the online state changes.
     * @constructor
     * @extends {goog.events.EventTarget}
     * @implements {goog.net.NetworkStatusMonitor}
     */
    class OnlineHandler extends goog.events.EventTarget {
        constructor();
    }
}

declare module goog.events.OnlineHandler {

    /**
     * Enum for the events dispatched by the OnlineHandler.
     * @enum {string}
     * @deprecated Use goog.net.NetworkStatusMonitor.EventType instead.
     */
    export import EventType = goog.net.NetworkStatusMonitor.EventType;
}
