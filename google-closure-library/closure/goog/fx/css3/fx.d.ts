declare module goog {
    function require(name: 'goog.fx.css3'): typeof goog.fx.css3;
}

declare module goog.fx.css3 {

    /**
     * Creates a transition to fade the element.
     * @param {Element} element The element to fade.
     * @param {number} duration Duration in seconds.
     * @param {string} timing The CSS3 timing function.
     * @param {number} startOpacity Starting opacity.
     * @param {number} endOpacity Ending opacity.
     * @return {!goog.fx.css3.Transition} The transition object.
     */
    function fade(element: Element, duration: number, timing: string, startOpacity: number, endOpacity: number): goog.fx.css3.Transition;

    /**
     * Creates a transition to fade in the element.
     * @param {Element} element The element to fade in.
     * @param {number} duration Duration in seconds.
     * @return {!goog.fx.css3.Transition} The transition object.
     */
    function fadeIn(element: Element, duration: number): goog.fx.css3.Transition;

    /**
     * Creates a transition to fade out the element.
     * @param {Element} element The element to fade out.
     * @param {number} duration Duration in seconds.
     * @return {!goog.fx.css3.Transition} The transition object.
     */
    function fadeOut(element: Element, duration: number): goog.fx.css3.Transition;
}
