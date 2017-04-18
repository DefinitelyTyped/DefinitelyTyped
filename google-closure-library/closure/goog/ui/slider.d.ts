declare module goog {
    function require(name: 'goog.ui.Slider'): typeof goog.ui.Slider;
    function require(name: 'goog.ui.Slider.Orientation'): typeof goog.ui.Slider.Orientation;
}

declare module goog.ui {

    /**
     * This creates a slider object.
     * @param {goog.dom.DomHelper=} opt_domHelper Optional DOM helper.
     * @param {(function(number):?string)=} opt_labelFn An optional function mapping
     *     slider values to a description of the value.
     * @constructor
     * @extends {goog.ui.SliderBase}
     */
    class Slider extends goog.ui.SliderBase {
        constructor(opt_domHelper?: goog.dom.DomHelper, opt_labelFn?: ((arg0: number) => string));
        
        /**
         * The prefix we use for the CSS class names for the slider and its elements.
         * @type {string}
         */
        static CSS_CLASS_PREFIX: string;
        
        /**
         * CSS class name for the single thumb element.
         * @type {string}
         */
        static THUMB_CSS_CLASS: string;
        
        /**
         * Returns CSS class applied to the slider element.
         * @param {goog.ui.SliderBase.Orientation} orient Orientation of the slider.
         * @return {string} The CSS class applied to the slider element.
         * @protected
         * @override
         */
        getCssClass(orient: goog.ui.SliderBase.Orientation): string;
    }
}

declare module goog.ui.Slider {

    /**
     * Expose Enum of superclass (representing the orientation of the slider) within
     * Slider namespace.
     *
     * @enum {string}
     */
    export import Orientation = goog.ui.SliderBase.Orientation;
}
