declare module goog {
    function require(name: 'goog.math.ExponentialBackoff'): typeof goog.math.ExponentialBackoff;
}

declare module goog.math {

    /**
     * @struct
     * @constructor
     *
     * @param {number} initialValue The initial backoff value.
     * @param {number} maxValue The maximum backoff value.
     */
    class ExponentialBackoff {
        constructor(initialValue: number, maxValue: number);
        
        /**
         * Resets the backoff value to its initial value.
         */
        reset(): void;
        
        /**
         * @return {number} The current backoff value.
         */
        getValue(): number;
        
        /**
         * @return {number} The number of times this class has backed off.
         */
        getBackoffCount(): number;
        
        /**
         * Initiates a backoff.
         */
        backoff(): void;
    }
}
