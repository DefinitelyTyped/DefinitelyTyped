/**
 * Upstream version of event listener. Does not take into account specific
 * nature of platform.
 */
declare namespace EventListener {
    /**
     * Listen to DOM events during the bubble phase.
     *
     * @param {DOMEventTarget} target DOM element to register listener on.
     * @param {string} eventType Event type, e.g. 'click' or 'mouseover'.
     * @param {function} callback Callback function.
     * @return {object} Object with a `remove` method.
     */
    var listen: (target, eventType, callback) => { remove: () => void };

    /**
     * Listen to DOM events during the capture phase.
     *
     * @param {DOMEventTarget} target DOM element to register listener on.
     * @param {string} eventType Event type, e.g. 'click' or 'mouseover'.
     * @param {function} callback Callback function.
     * @return {object} Object with a `remove` method.
     */
    var capture: (target, eventType, callback) => { remove: () => void };
    var registerDefault: () => void;
}

export = EventListener;
