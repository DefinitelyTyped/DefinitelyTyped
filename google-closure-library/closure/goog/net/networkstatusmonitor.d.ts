declare module goog.net {

    /**
     * Base class for network status information providers.
     * @interface
     * @extends {goog.events.Listenable}
     */
    interface NetworkStatusMonitor extends goog.events.Listenable {
        
        /**
         * @return {boolean} Whether the system is online or otherwise.
         */
        isOnline(): boolean;
    }
}

declare module goog.net.NetworkStatusMonitor {

    /**
     * Enum for the events dispatched by the OnlineHandler.
     * @enum {string}
     */
    type EventType = string;
    var EventType: {
        ONLINE: EventType;
        OFFLINE: EventType;
    };
}
