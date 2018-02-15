declare namespace pc {

    /**
     * @private
     * @name pc.Timer
     * @description Create a new Timer instance
     * @class A Timer counts milliseconds from when start() is called until when stop() is called.
     */
    class Timer {
        /**
         * @private
         * @function
         * @name pc.Timer#start
         * @description Start the timer
         */
        start(): void;

        /**
         * @private
         * @function
         * @name pc.Timer#stop
         * @description Stop the timer
         */
        stop(): void;

        /**
         * @private
         * @function
         * @name pc.Timer#getMilliseconds
         * @description Get the number of milliseconds that passed between start() and stop() being called
         */
        getMilliseconds(): number;
    }

    /**
     * @private
     * @function
     * @name pc.now
     * @description Get current time in milliseconds. Use it to measure time difference. Reference time may differ on different platforms.
     * @return {Number} The time in milliseconds
     */
    function now(): number;
}
