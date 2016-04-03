declare module goog {
    function require(name: 'goog.net.XmlHttpFactory'): typeof goog.net.XmlHttpFactory;
}

declare module goog.net {

    /**
     * Abstract base class for an XmlHttpRequest factory.
     * @constructor
     */
    class XmlHttpFactory {
        constructor();
        
        /**
         * @return {!goog.net.XhrLike.OrNative} A new XhrLike instance.
         */
        createInstance(): goog.net.XhrLike.OrNative;
        
        /**
         * @return {Object} Options describing how xhr objects obtained from this
         *     factory should be used.
         */
        getOptions(): Object;
        
        /**
         * Override this method in subclasses to preserve the caching offered by
         * getOptions().
         * @return {Object} Options describing how xhr objects obtained from this
         *     factory should be used.
         * @protected
         */
        internalGetOptions(): Object;
    }
}
