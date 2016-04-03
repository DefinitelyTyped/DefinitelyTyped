declare module goog {
    function require(name: 'goog.osapi'): typeof goog.osapi;
}

declare module osapi {

    /** @type {Function} */
    var callback: Function;
}

declare module goog.osapi {

    /**
     * Dispatch a JSON-RPC batch request to services defined in the osapi namespace
     * @param {Array<Object>} requests an array of rpc requests.
     */
    function handleGadgetRpcMethod(requests: Array<Object>): void;

    /**
     * Initializes container side osapi binding.
     */
    function init(): void;
}
