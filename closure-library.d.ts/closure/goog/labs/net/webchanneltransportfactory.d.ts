declare module goog.net {

    /**
     * Create a new WebChannelTransport instance using the default implementation.
     * Throws an error message if no default transport available in the current
     * environment.
     *
     * @return {!goog.net.WebChannelTransport} the newly created transport instance.
     */
    function createWebChannelTransport(): goog.net.WebChannelTransport;
}
