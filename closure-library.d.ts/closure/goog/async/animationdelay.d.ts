declare module goog {
    function require(name: 'goog.async.AnimationDelay'): typeof goog.async.AnimationDelay;
}

declare module goog.async {

    /**
     * A delayed callback that pegs to the next animation frame
     * instead of a user configurable timeout. By design, this should have
     * the same interface as goog.async.Delay.
     *
     * Uses requestAnimationFrame and friends when available, but falls
     * back to a timeout of goog.async.AnimationDelay.TIMEOUT.
     *
     * For more on requestAnimationFrame and how you can use it to create smoother
     * animations, see:
     * @see http://paulirish.com/2011/requestanimationframe-for-smart-animating/
     *
     * @param {function(number)} listener Function to call when the delay completes.
     *     Will be passed the timestamp when it's called, in unix ms.
     * @param {Window=} opt_window The window object to execute the delay in.
     *     Defaults to the global object.
     * @param {Object=} opt_handler The object scope to invoke the function in.
     * @constructor
     * @extends {goog.Disposable}
     * @final
     */
    class AnimationDelay extends goog.Disposable {
        constructor(listener: (arg0: number) => any, opt_window?: Window, opt_handler?: Object);
        
        /**
         * Default wait timeout for animations (in milliseconds).  Only used for timed
         * animation, which uses a timer (setTimeout) to schedule animation.
         *
         * @type {number}
         * @const
         */
        static TIMEOUT: number;
        
        /**
         * Starts the delay timer. The provided listener function will be called
         * before the next animation frame.
         */
        start(): void;
        
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
