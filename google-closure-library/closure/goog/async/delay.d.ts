declare module goog {
    function require(name: 'goog.async.Delay'): typeof goog.async.Delay;
    function require(name: 'goog.Delay'): typeof goog.Delay;
}

declare module goog.async {

    /**
     * A Delay object invokes the associated function after a specified delay. The
     * interval duration can be specified once in the constructor, or can be defined
     * each time the delay is started. Calling start on an active delay will reset
     * the timer.
     *
     * @param {function(this:THIS)} listener Function to call when the
     *     delay completes.
     * @param {number=} opt_interval The default length of the invocation delay (in
     *     milliseconds).
     * @param {THIS=} opt_handler The object scope to invoke the function in.
     * @template THIS
     * @constructor
     * @extends {goog.Disposable}
     * @final
     */
    class Delay<THIS> extends goog.Disposable {
        constructor(listener: () => any, opt_interval?: number, opt_handler?: THIS);
        
        /**
         * Starts the delay timer. The provided listener function will be called after
         * the specified interval. Calling start on an active timer will reset the
         * delay interval.
         * @param {number=} opt_interval If specified, overrides the object's default
         *     interval with this one (in milliseconds).
         */
        start(opt_interval?: number): void;
        
        /**
         * Stops the delay timer if it is active. No action is taken if the timer is not
         * in use.
         */
        stop(): void;
        
        /**
         * Fires delay's action even if timer has already gone off or has not been
         * started yet; guarantees action firing. Stops the delay timer.
         */
        fire(): void;
        
        /**
         * Fires delay's action only if timer is currently active. Stops the delay
         * timer.
         */
        fireIfActive(): void;
        
        /**
         * @return {boolean} True if the delay is currently active, false otherwise.
         */
        isActive(): boolean;
    }
}

declare module goog {

    /**
     * A deprecated alias.
     * @deprecated Use goog.async.Delay instead.
     * @constructor
     * @final
     */
    class Delay {
        constructor();
    }
}
