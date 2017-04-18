declare module goog {
    function require(name: 'goog.ui.GaugeTheme'): typeof goog.ui.GaugeTheme;
}

declare module goog.ui {

    /**
     * A class for the default color theme for a Gauge.
     * Users can extend this class to provide a custom color theme, and apply the
     * custom color theme by calling  {@link goog.ui.Gauge#setTheme}.
     * @constructor
     * @final
     */
    class GaugeTheme {
        constructor();
        
        /**
         * Returns the stroke for the external border of the gauge.
         * @return {!goog.graphics.Stroke} The stroke to use.
         */
        getExternalBorderStroke(): goog.graphics.Stroke;
        
        /**
         * Returns the fill for the external border of the gauge.
         * @param {number} cx X coordinate of the center of the gauge.
         * @param {number} cy Y coordinate of the center of the gauge.
         * @param {number} r Radius of the gauge.
         * @return {!goog.graphics.Fill} The fill to use.
         */
        getExternalBorderFill(cx: number, cy: number, r: number): goog.graphics.Fill;
        
        /**
         * Returns the stroke for the internal border of the gauge.
         * @return {!goog.graphics.Stroke} The stroke to use.
         */
        getInternalBorderStroke(): goog.graphics.Stroke;
        
        /**
         * Returns the fill for the internal border of the gauge.
         * @param {number} cx X coordinate of the center of the gauge.
         * @param {number} cy Y coordinate of the center of the gauge.
         * @param {number} r Radius of the gauge.
         * @return {!goog.graphics.Fill} The fill to use.
         */
        getInternalBorderFill(cx: number, cy: number, r: number): goog.graphics.Fill;
        
        /**
         * Returns the stroke for the major ticks of the gauge.
         * @return {!goog.graphics.Stroke} The stroke to use.
         */
        getMajorTickStroke(): goog.graphics.Stroke;
        
        /**
         * Returns the stroke for the minor ticks of the gauge.
         * @return {!goog.graphics.Stroke} The stroke to use.
         */
        getMinorTickStroke(): goog.graphics.Stroke;
        
        /**
         * Returns the stroke for the hinge at the center of the gauge.
         * @return {!goog.graphics.Stroke} The stroke to use.
         */
        getHingeStroke(): goog.graphics.Stroke;
        
        /**
         * Returns the fill for the hinge at the center of the gauge.
         * @param {number} cx  X coordinate of the center of the gauge.
         * @param {number} cy  Y coordinate of the center of the gauge.
         * @param {number} r  Radius of the hinge.
         * @return {!goog.graphics.Fill} The fill to use.
         */
        getHingeFill(cx: number, cy: number, r: number): goog.graphics.Fill;
        
        /**
         * Returns the stroke for the gauge needle.
         * @return {!goog.graphics.Stroke} The stroke to use.
         */
        getNeedleStroke(): goog.graphics.Stroke;
        
        /**
         * Returns the fill for the hinge at the center of the gauge.
         * @param {number} cx X coordinate of the center of the gauge.
         * @param {number} cy Y coordinate of the center of the gauge.
         * @param {number} r Radius of the gauge.
         * @return {!goog.graphics.Fill} The fill to use.
         */
        getNeedleFill(cx: number, cy: number, r: number): goog.graphics.Fill;
        
        /**
         * Returns the color for the gauge title.
         * @return {string} The color to use.
         */
        getTitleColor(): string;
        
        /**
         * Returns the color for the gauge value.
         * @return {string} The color to use.
         */
        getValueColor(): string;
        
        /**
         * Returns the color for the labels (formatted values) of tick marks.
         * @return {string} The color to use.
         */
        getTickLabelColor(): string;
    }
}
