declare module goog {
    function require(name: 'goog.ui.ActivityMonitor'): typeof goog.ui.ActivityMonitor;
}

declare module goog.ui {

    /**
     * Once initialized with a document, the activity monitor can be queried for
     * the current idle time.
     *
     * @param {goog.dom.DomHelper|Array<goog.dom.DomHelper>=} opt_domHelper
     *     DomHelper which contains the document(s) to listen to.  If null, the
     *     default document is usedinstead.
     * @param {boolean=} opt_useBubble Whether to use the bubble phase to listen for
     *     events. By default listens on the capture phase so that it won't miss
     *     events that get stopPropagation/cancelBubble'd. However, this can cause
     *     problems in IE8 if the page loads multiple scripts that include the
     *     closure event handling code.
     *
     * @constructor
     * @extends {goog.events.EventTarget}
     */
    class ActivityMonitor extends goog.events.EventTarget {
        constructor(opt_domHelper?: goog.dom.DomHelper|Array<goog.dom.DomHelper>, opt_useBubble?: boolean);
        
        /**
         * Minimum amount of time in ms between throttled ACTIVITY events
         * @type {number}
         */
        static MIN_EVENT_SPACING: number;
        
        /**
         * Adds a document to those being monitored by this class.
         *
         * @param {Document} doc Document to monitor.
         */
        addDocument(doc: Document): void;
        
        /**
         * Removes a document from those being monitored by this class.
         *
         * @param {Document} doc Document to monitor.
         */
        removeDocument(doc: Document): void;
        
        /**
         * Updates the last event time to be the present time, useful for non-DOM
         * events that should update idle time.
         */
        resetTimer(): void;
        
        /**
         * Updates the idle time and fires an event if time has elapsed since
         * the last update.
         * @param {number} eventTime Time (in MS) of the event that cleared the idle
         *     timer.
         * @param {string} eventType Type of the event, used only for debugging.
         * @protected
         */
        updateIdleTime(eventTime: number, eventType: string): void;
        
        /**
         * Returns the amount of time the user has been idle.
         * @param {number=} opt_now The current time can optionally be passed in for the
         *     computation to avoid an extra Date allocation.
         * @return {number} The amount of time in ms that the user has been idle.
         */
        getIdleTime(opt_now?: number): number;
        
        /**
         * Returns the type of the last user event.
         * @return {string} event type.
         */
        getLastEventType(): string;
        
        /**
         * Returns the time of the last event
         * @return {number} last event time.
         */
        getLastEventTime(): number;
    }
}

declare module goog.ui.ActivityMonitor {

    /**
     * Event constants for the activity monitor.
     * @enum {string}
     */
    type Event = string;
    var Event: {
        ACTIVITY: Event;
    };
}
