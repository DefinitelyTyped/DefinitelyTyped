declare module goog {
    function require(name: 'goog.net.IframeLoadMonitor'): typeof goog.net.IframeLoadMonitor;
}

declare module goog.net {

    /**
     * The correct way to determine whether a same-domain iframe has completed
     * loading is different in IE and Firefox.  This class abstracts above these
     * differences, providing a consistent interface for:
     * <ol>
     * <li> Determing if an iframe is currently loaded
     * <li> Listening for an iframe that is not currently loaded, to finish loading
     * </ol>
     *
     * @param {HTMLIFrameElement} iframe An iframe.
     * @param {boolean=} opt_hasContent Does the loaded iframe have content.
     * @extends {goog.events.EventTarget}
     * @constructor
     * @final
     */
    class IframeLoadMonitor extends goog.events.EventTarget {
        constructor(iframe: HTMLIFrameElement, opt_hasContent?: boolean);
        
        /**
         * Event type dispatched by a goog.net.IframeLoadMonitor when it internal iframe
         * finishes loading for the first time after construction of the
         * goog.net.IframeLoadMonitor
         * @type {string}
         */
        static LOAD_EVENT: string;
        
        /**
         * Returns whether or not the iframe is loaded.
         * @return {boolean} whether or not the iframe is loaded.
         */
        isLoaded(): boolean;
        
        /**
         * Returns the iframe whose load state this IframeLoader monitors.
         * @return {HTMLIFrameElement} the iframe whose load state this IframeLoader
         *     monitors.
         */
        getIframe(): HTMLIFrameElement;
    }
}
