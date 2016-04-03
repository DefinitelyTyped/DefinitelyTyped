declare module goog {
    function require(name: 'goog.style.transition'): typeof goog.style.transition;
}

declare module goog.style.transition {

    /**
     * A typedef to represent a CSS3 transition property. Duration and delay
     * are both in seconds. Timing is CSS3 timing function string, such as
     * 'easein', 'linear'.
     *
     * Alternatively, specifying string in the form of '[property] [duration]
     * [timing] [delay]' as specified in CSS3 transition is fine too.
     *
     * @typedef { {
     *   property: string,
     *   duration: number,
     *   timing: string,
     *   delay: number
     * } | string }
     */
    type Css3Property = {property: string; duration: number; timing: string; delay: number}|string;

    /**
     * Sets the element CSS3 transition to properties.
     * @param {Element} element The element to set transition on.
     * @param {goog.style.transition.Css3Property|
     *     Array<goog.style.transition.Css3Property>} properties A single CSS3
     *     transition property or array of properties.
     */
    function set(element: Element, properties: goog.style.transition.Css3Property|Array<goog.style.transition.Css3Property>): void;

    /**
     * Removes any programmatically-added CSS3 transition in the given element.
     * @param {Element} element The element to remove transition from.
     */
    function removeAll(element: Element): void;

    /**
     * @return {boolean} Whether CSS3 transition is supported.
     */
    function isSupported(): boolean;
}
