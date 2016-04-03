declare module goog.net {

    /**
     * A WebChannelTransport instance represents a shared context of logical
     * connectivity between a browser client and a remote origin.
     *
     * Over a single WebChannelTransport instance, multiple WebChannels may be
     * created against different URLs, which may all share the same
     * underlying connectivity (i.e. TCP connection) whenever possible.
     *
     * When multi-domains are supported, such as CORS, multiple origins may be
     * supported over a single WebChannelTransport instance at the same time.
     *
     * Sharing between different window contexts such as tabs is not addressed
     * by WebChannelTransport. Applications may choose HTML5 shared workers
     * or other techniques to access the same transport instance
     * across different window contexts.
     *
     * @interface
     */
    interface WebChannelTransport {
        
        /**
         * Create a new WebChannel instance.
         *
         * The new WebChannel is to be opened against the server-side resource
         * as specified by the given URL. See {@link goog.net.WebChannel} for detailed
         * semantics.
         *
         * @param {string} url The URL path for the new WebChannel instance.
         * @param {!goog.net.WebChannel.Options=} opt_options Configuration for the
         *     new WebChannel instance. The configuration object is reusable after
         *     the new channel instance is created.
         * @return {!goog.net.WebChannel} the newly created WebChannel instance.
         */
        createWebChannel(url: string, opt_options?: goog.net.WebChannel.Options): goog.net.WebChannel;
    }
}
