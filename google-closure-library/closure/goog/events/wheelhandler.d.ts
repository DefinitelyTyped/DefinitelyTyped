declare module goog {
    function require(name: 'goog.events.WheelHandler'): typeof goog.events.WheelHandler;
}

declare module goog.events {

    /**
     * This event handler allows you to catch wheel events in a consistent manner.
     * @param {!Element|!Document} element The element to listen to the wheel event
     *     on.
     * @param {boolean=} opt_capture Whether to handle the wheel event in capture
     *     phase.
     * @constructor
     * @extends {goog.events.EventTarget}
     */
    class WheelHandler extends goog.events.EventTarget {
        constructor(element: Element|Document, opt_capture?: boolean);
        
        /**
         * Returns the dom event type.
         * @return {string} The dom event type.
         */
        static getDomEventType(): string;
        
        /**
         * Handles the events on the element.
         * @param {!goog.events.BrowserEvent} e The underlying browser event.
         */
        handleEvent(e: goog.events.BrowserEvent): void;
    }
}
