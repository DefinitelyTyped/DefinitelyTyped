declare module goog {
    function require(name: 'goog.ui.IframeMask'): typeof goog.ui.IframeMask;
}

declare module goog.ui {

    /**
     * Controller for an iframe mask. The mask is only valid in the current
     * document, or else the document of the given DOM helper.
     *
     * @param {goog.dom.DomHelper=} opt_domHelper The DOM helper for the relevant
     *     document.
     * @param {goog.structs.Pool=} opt_iframePool An optional source of iframes.
     *     Iframes will be grabbed from the pool when they're needed and returned
     *     to the pool (but still attached to the DOM) when they're done.
     * @constructor
     * @extends {goog.Disposable}
     */
    class IframeMask extends goog.Disposable {
        constructor(opt_domHelper?: goog.dom.DomHelper, opt_iframePool?: goog.structs.Pool<any>);
        
        /**
         * Removes the mask from the screen.
         */
        hideMask(): void;
        
        /**
         * Applies the iframe mask to the screen.
         */
        applyMask(): void;
        
        /**
         * Sets the opacity of the mask. Will take effect the next time the mask
         * is applied.
         * @param {number} opacity A value between 0 and 1, with 1 being
         *     totally opaque.
         */
        setOpacity(opacity: number): void;
        
        /**
         * Sets the z-index of the mask. Will take effect the next time the mask
         * is applied.
         * @param {number} zIndex A z-index value.
         */
        setZIndex(zIndex: number): void;
        
        /**
         * Sets the element to use as the bounds of the mask. Takes effect immediately.
         * @param {Element} snapElement The snap element, which the iframe will be
         *     "snapped" around.
         */
        setSnapElement(snapElement: Element): void;
        
        /**
         * Listens on the specified target, hiding and showing the iframe mask
         * when the given event types are dispatched.
         * @param {goog.events.EventTarget} target The event target to listen on.
         * @param {string} showEvent When this event fires, the mask will be applied.
         * @param {string} hideEvent When this event fires, the mask will be hidden.
         * @param {Element=} opt_snapElement When the mask is applied, it will
         *     automatically snap to this element. If no element is specified, it will
         *     use the default snap element.
         */
        listenOnTarget(target: goog.events.EventTarget, showEvent: string, hideEvent: string, opt_snapElement?: Element): void;
        
        /**
         * Removes all handlers attached by listenOnTarget.
         */
        removeHandlers(): void;
    }
}
