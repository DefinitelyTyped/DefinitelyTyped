declare module goog {
    function require(name: 'goog.dom.FontSizeMonitor'): typeof goog.dom.FontSizeMonitor;
    function require(name: 'goog.dom.FontSizeMonitor.EventType'): typeof goog.dom.FontSizeMonitor.EventType;
}

declare module goog.dom {

    /**
     * This class can be used to monitor changes in font size.  Instances will
     * dispatch a {@code goog.dom.FontSizeMonitor.EventType.CHANGE} event.
     * Example usage:
     * <pre>
     * var fms = new goog.dom.FontSizeMonitor();
     * goog.events.listen(fms, goog.dom.FontSizeMonitor.EventType.CHANGE,
     *     function(e) {
     *       alert('Font size was changed');
     *     });
     * </pre>
     * @param {goog.dom.DomHelper=} opt_domHelper DOM helper object that is used to
     *     determine where to insert the DOM nodes used to determine when the font
     *     size changes.
     * @constructor
     * @extends {goog.events.EventTarget}
     * @final
     */
    class FontSizeMonitor extends goog.events.EventTarget {
        constructor(opt_domHelper?: goog.dom.DomHelper);
        
        /**
         * Constant for the change event.
         * @type {string}
         * @deprecated Use {@code goog.dom.FontSizeMonitor.EventType.CHANGE} instead.
         */
        static CHANGE_EVENT: string;
    }
}

declare module goog.dom.FontSizeMonitor {

    /**
     * The event types that the FontSizeMonitor fires.
     * @enum {string}
     */
    type EventType = string;
    var EventType: {
        CHANGE: EventType;
    };
}
