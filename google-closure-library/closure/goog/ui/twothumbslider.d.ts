declare module goog {
    function require(name: 'goog.ui.TwoThumbSlider'): typeof goog.ui.TwoThumbSlider;
}

declare module goog.ui {

    /**
     * This creates a TwoThumbSlider object.
     * @param {goog.dom.DomHelper=} opt_domHelper Optional DOM helper.
     * @constructor
     * @extends {goog.ui.SliderBase}
     */
    class TwoThumbSlider extends goog.ui.SliderBase {
        constructor(opt_domHelper?: goog.dom.DomHelper);
        
        /**
         * The prefix we use for the CSS class names for the slider and its elements.
         * @type {string}
         */
        static CSS_CLASS_PREFIX: string;
        
        /**
         * CSS class name for the value thumb element.
         * @type {string}
         */
        static VALUE_THUMB_CSS_CLASS: string;
        
        /**
         * CSS class name for the extent thumb element.
         * @type {string}
         */
        static EXTENT_THUMB_CSS_CLASS: string;
        
        /**
         * CSS class name for the range highlight element.
         * @type {string}
         */
        static RANGE_HIGHLIGHT_CSS_CLASS: string;
        
        /**
         * @param {goog.ui.SliderBase.Orientation} orient orientation of the slider.
         * @return {string} The CSS class applied to the twothumbslider element.
         * @protected
         * @override
         */
        getCssClass(orient: goog.ui.SliderBase.Orientation): string;
    }
}
