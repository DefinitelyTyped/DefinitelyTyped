declare module goog {
    function require(name: 'goog.dom.BufferedViewportSizeMonitor'): typeof goog.dom.BufferedViewportSizeMonitor;
}

declare module goog.dom {

    /**
     * Creates a new BufferedViewportSizeMonitor.
     * @param {!goog.dom.ViewportSizeMonitor} viewportSizeMonitor The
     *     underlying viewport size monitor.
     * @param {number=} opt_bufferMs The buffer time, in ms. If not specified, this
     *     value defaults to {@link #RESIZE_EVENT_DELAY_MS_}.
     * @constructor
     * @extends {goog.events.EventTarget}
     * @final
     */
    class BufferedViewportSizeMonitor extends goog.events.EventTarget {
        constructor(viewportSizeMonitor: goog.dom.ViewportSizeMonitor, opt_bufferMs?: number);
        
        /**
         * Returns the current size of the viewport.
         * @return {goog.math.Size?} The current viewport size.
         */
        getSize(): goog.math.Size;
    }
}

declare module goog.dom.BufferedViewportSizeMonitor {

    /**
     * Additional events to dispatch.
     * @enum {string}
     */
    type EventType = string;
    var EventType: {
        RESIZE_HEIGHT: EventType;
        RESIZE_WIDTH: EventType;
    };
}
