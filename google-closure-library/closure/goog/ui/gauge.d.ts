declare module goog {
    function require(name: 'goog.ui.GaugeColoredRange'): typeof goog.ui.GaugeColoredRange;
    function require(name: 'goog.ui.Gauge'): typeof goog.ui.Gauge;
}

declare module goog.ui {

    /**
     * Information on how to decorate a range in the gauge.
     * This is an internal-only class.
     * @param {number} fromValue The range start (minimal) value.
     * @param {number} toValue The range end (maximal) value.
     * @param {string} backgroundColor Color to fill the range background with.
     * @constructor
     * @final
     */
    class GaugeColoredRange {
        constructor(fromValue: number, toValue: number, backgroundColor: string);
    }

    /**
     * A UI component that displays a gauge.
     * A gauge displayes a current value within a round axis that represents a
     * given range.
     * The gauge is built from an external border, and internal border inside it,
     * ticks and labels inside the internal border, and a needle that points to
     * the current value.
     * @param {number} width The width in pixels.
     * @param {number} height The height in pixels.
     * @param {goog.dom.DomHelper=} opt_domHelper The DOM helper object for the
     *     document we want to render in.
     * @constructor
     * @extends {goog.ui.Component}
     * @final
     */
    class Gauge extends goog.ui.Component {
        constructor(width: number, height: number, opt_domHelper?: goog.dom.DomHelper);
        
        /**
         * Constant for a background color for a gauge area.
         */
        static RED: any;
        
        /**
         * Constant for a background color for a gauge area.
         */
        static GREEN: any;
        
        /**
         * Constant for a background color for a gauge area.
         */
        static YELLOW: any;
        
        /**
         * The radius of the entire gauge from the canvas size.
         * @type {number}
         */
        static FACTOR_RADIUS_FROM_SIZE: number;
        
        /**
         * The ratio of internal gauge radius from entire radius.
         * The remaining area is the border around the gauge.
         * @type {number}
         */
        static FACTOR_MAIN_AREA: number;
        
        /**
         * The ratio of the colored background area for value ranges.
         * The colored area width is computed as
         * InternalRadius * (1 - FACTOR_COLOR_RADIUS)
         * @type {number}
         */
        static FACTOR_COLOR_RADIUS: number;
        
        /**
         * The ratio of the major ticks length start position, from the radius.
         * The major ticks length width is computed as
         * InternalRadius * (1 - FACTOR_MAJOR_TICKS)
         * @type {number}
         */
        static FACTOR_MAJOR_TICKS: number;
        
        /**
         * The ratio of the minor ticks length start position, from the radius.
         * The minor ticks length width is computed as
         * InternalRadius * (1 - FACTOR_MINOR_TICKS)
         * @type {number}
         */
        static FACTOR_MINOR_TICKS: number;
        
        /**
         * The length of the needle front (value facing) from the internal radius.
         * The needle front is the part of the needle that points to the value.
         * @type {number}
         */
        static FACTOR_NEEDLE_FRONT: number;
        
        /**
         * The length of the needle back relative to the internal radius.
         * The needle back is the part of the needle that points away from the value.
         * @type {number}
         */
        static FACTOR_NEEDLE_BACK: number;
        
        /**
         * The width of the needle front at the hinge.
         * This is the width of the curve control point, the actual width is
         * computed by the curve itself.
         * @type {number}
         */
        static FACTOR_NEEDLE_WIDTH: number;
        
        /**
         * The width (radius) of the needle hinge from the gauge radius.
         * @type {number}
         */
        static FACTOR_NEEDLE_HINGE: number;
        
        /**
         * The title font size (height) for titles relative to the internal radius.
         * @type {number}
         */
        static FACTOR_TITLE_FONT_SIZE: number;
        
        /**
         * The offset of the title from the center, relative to the internal radius.
         * @type {number}
         */
        static FACTOR_TITLE_OFFSET: number;
        
        /**
         * The formatted value font size (height) relative to the internal radius.
         * @type {number}
         */
        static FACTOR_VALUE_FONT_SIZE: number;
        
        /**
         * The title font size (height) for tick labels relative to the internal radius.
         * @type {number}
         */
        static FACTOR_TICK_LABEL_FONT_SIZE: number;
        
        /**
         * The offset of the formatted value down from the center, relative to the
         * internal radius.
         * @type {number}
         */
        static FACTOR_VALUE_OFFSET: number;
        
        /**
         * The font name for title text.
         * @type {string}
         */
        static TITLE_FONT_NAME: string;
        
        /**
         * The maximal size of a step the needle can move (percent from size of range).
         * If the needle needs to move more, it will be moved in animated steps, to
         * show a smooth transition between values.
         * @type {number}
         */
        static NEEDLE_MOVE_MAX_STEP: number;
        
        /**
         * Time in miliseconds for animating a move of the value pointer.
         * @type {number}
         */
        static NEEDLE_MOVE_TIME: number;
        
        /**
         * Tolerance factor for how much values can exceed the range (being too
         * low or too high). The value is presented as a position (percentage).
         * @type {number}
         */
        static MAX_EXCEED_POSITION_POSITION: number;
        
        /**
         * @return {number} The minimum value of the range.
         */
        getMinimum(): number;
        
        /**
         * Sets the minimum value of the range
         * @param {number} min The minimum value of the range.
         */
        setMinimum(min: number): void;
        
        /**
         * @return {number} The maximum value of the range.
         */
        getMaximum(): number;
        
        /**
         * Sets the maximum number of the range
         * @param {number} max The maximum value of the range.
         */
        setMaximum(max: number): void;
        
        /**
         * Sets the current value range displayed by the gauge.
         * @param {number} value The current value for the gauge. This value
         *     determines the position of the needle of the gauge.
         * @param {string=} opt_formattedValue The string value to show in the gauge.
         *     If not specified, no string value will be displayed.
         */
        setValue(value: number, opt_formattedValue?: string): void;
        
        /**
         * Sets the number of major tick sections and minor tick sections.
         * @param {number} majorUnits The number of major tick sections.
         * @param {number} minorUnits The number of minor tick sections for each major
         *     tick section.
         */
        setTicks(majorUnits: number, minorUnits: number): void;
        
        /**
         * Sets the labels of the major ticks.
         * @param {Array<string>} tickLabels A text label for each major tick value.
         */
        setMajorTickLabels(tickLabels: Array<string>): void;
        
        /**
         * Sets the top title of the gauge.
         * The top title is displayed above the center.
         * @param {string} text The top title text.
         */
        setTitleTop(text: string): void;
        
        /**
         * Sets the bottom title of the gauge.
         * The top title is displayed below the center.
         * @param {string} text The bottom title text.
         */
        setTitleBottom(text: string): void;
        
        /**
         * Sets the font for displaying top and bottom titles.
         * @param {goog.graphics.Font} font The font for titles.
         */
        setTitleFont(font: goog.graphics.Font): void;
        
        /**
         * Sets the font for displaying the formatted value.
         * @param {goog.graphics.Font} font The font for displaying the value.
         */
        setValueFont(font: goog.graphics.Font): void;
        
        /**
         * Sets the color theme for drawing the gauge.
         * @param {goog.ui.GaugeTheme} theme The color theme to use.
         */
        setTheme(theme: goog.ui.GaugeTheme): void;
        
        /**
         * Set the background color for a range of values on the gauge.
         * @param {number} fromValue The lower (start) value of the colored range.
         * @param {number} toValue The higher (end) value of the colored range.
         * @param {string} color The color name to paint the range with. For example
         *     'red', '#ffcc00' or constants like goog.ui.Gauge.RED.
         */
        addBackgroundColor(fromValue: number, toValue: number, color: string): void;
        
        /**
         * Redraws the entire gauge.
         * Should be called after theme colors have been changed.
         */
        redraw(): void;
    }
}
