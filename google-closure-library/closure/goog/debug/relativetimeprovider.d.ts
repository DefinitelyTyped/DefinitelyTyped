declare module goog {
    function require(name: 'goog.debug.RelativeTimeProvider'): typeof goog.debug.RelativeTimeProvider;
}

declare module goog.debug {

    /**
     * A simple object to keep track of a timestamp considered the start of
     * something. The main use is for the logger system to maintain a start time
     * that is occasionally reset. For example, in Gmail, we reset this relative
     * time at the start of a user action so that timings are offset from the
     * beginning of the action. This class also provides a singleton as the default
     * behavior for most use cases is to share the same start time.
     *
     * @constructor
     * @final
     */
    class RelativeTimeProvider {
        constructor();
        
        /**
         * Sets the start time to the specified time.
         * @param {number} timeStamp The start time.
         */
        set(timeStamp: number): void;
        
        /**
         * Resets the start time to now.
         */
        reset(): void;
        
        /**
         * @return {number} The start time.
         */
        get(): number;
        
        /**
         * @return {goog.debug.RelativeTimeProvider} The default instance.
         */
        static getDefaultInstance(): goog.debug.RelativeTimeProvider;
    }
}
