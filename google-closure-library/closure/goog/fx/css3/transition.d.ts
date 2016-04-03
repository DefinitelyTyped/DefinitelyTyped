declare module goog {
    function require(name: 'goog.fx.css3.Transition'): typeof goog.fx.css3.Transition;
}

declare module goog.fx.css3 {

    /**
     * A class to handle targeted CSS3 transition. This class
     * handles common features required for targeted CSS3 transition.
     *
     * Browser that does not support CSS3 transition will still receive all
     * the events fired by the transition object, but will not have any transition
     * played. If the browser supports the final state as set in setFinalState
     * method, the element will ends in the final state.
     *
     * Transitioning multiple properties with the same setting is possible
     * by setting Css3Property's property to 'all'. Performing multiple
     * transitions can be done via setting multiple initialStyle,
     * finalStyle and transitions. Css3Property's delay can be used to
     * delay one of the transition. Here is an example for a transition
     * that expands on the width and then followed by the height:
     *
     * <pre>
     *   initialStyle: {width: 10px, height: 10px}
     *   finalStyle: {width: 100px, height: 100px}
     *   transitions: [
     *     {property: width, duration: 1, timing: 'ease-in', delay: 0},
     *     {property: height, duration: 1, timing: 'ease-in', delay: 1}
     *   ]
     * </pre>
     *
     * @param {Element} element The element to be transitioned.
     * @param {number} duration The duration of the transition in seconds.
     *     This should be the longest of all transitions.
     * @param {Object} initialStyle Initial style properties of the element before
     *     animating. Set using {@code goog.style.setStyle}.
     * @param {Object} finalStyle Final style properties of the element after
     *     animating. Set using {@code goog.style.setStyle}.
     * @param {goog.style.transition.Css3Property|
     *     Array<goog.style.transition.Css3Property>} transitions A single CSS3
     *     transition property or an array of it.
     * @extends {goog.fx.TransitionBase}
     * @constructor
     */
    class Transition extends goog.fx.TransitionBase {
        constructor(element: Element, duration: number, initialStyle: Object, finalStyle: Object, transitions: goog.style.transition.Css3Property|Array<goog.style.transition.Css3Property>);
    }
}
