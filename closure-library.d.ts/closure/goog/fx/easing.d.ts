declare module goog {
    function require(name: 'goog.fx.easing'): typeof goog.fx.easing;
}

declare module goog.fx.easing {

    /**
     * Ease in - Start slow and speed up.
     * @param {number} t Input between 0 and 1.
     * @return {number} Output between 0 and 1.
     */
    function easeIn(t: number): number;

    /**
     * Ease out - Start fastest and slows to a stop.
     * @param {number} t Input between 0 and 1.
     * @return {number} Output between 0 and 1.
     */
    function easeOut(t: number): number;

    /**
     * Ease out long - Start fastest and slows to a stop with a long ease.
     * @param {number} t Input between 0 and 1.
     * @return {number} Output between 0 and 1.
     */
    function easeOutLong(t: number): number;

    /**
     * Ease in and out - Start slow, speed up, then slow down.
     * @param {number} t Input between 0 and 1.
     * @return {number} Output between 0 and 1.
     */
    function inAndOut(t: number): number;
}
