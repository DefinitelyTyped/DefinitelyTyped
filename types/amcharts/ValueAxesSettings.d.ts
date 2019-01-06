/**
 * ValueAxesSettings settings sets settings for all ValueAxes.
 * If you change a property after the chart is initialized,
 * you should call stockChart.validateNow() method in order for it to work.
 * If there is no default value specified, default value of ValueAxis class will be used.
 */
export default class ValueAxesSettings {
    /**
     * Specifies whether number for gridCount is specified automatically, according to the axis size.
     * @default true
     */
    autoGridCount: boolean;
    /**
     * Axis opacity.
     */
    axisAlpha: number;
    /**
     * Axis color.
     */
    axisColor: string;
    /**
     * Thickness of the axis.
     */
    axisThickness: number;
    /**
     * Label color.
     */
    color: string;
    /**
     * Length of a dash. By default, the grid line is not dashed.
     */
    dashLength: number;
    /**
     * Fill opacity. Every second space between grid lines can be filled with color.
     */
    fillAlpha: number;
    /**
     * Fill color. Every second space between grid lines can be filled with color.
     * Set fillAlpha to a value greater than 0 to see the fills.
     */
    fillColor: string;
    /**
     * Opacity of grid lines.
     */
    gridAlpha: number;
    /**
     * Color of grid lines.
     */
    gridColor: string;
    /**
     * Approximate number of grid lines. autoGridCount should be set to false,
     * otherwise this property will be ignored.
     */
    gridCount: number;
    /**
     * Thickness of grid lines.
     */
    gridThickness: number;
    /**
     * Specifies whether guide values should be included when calculating min and max of the axis.
     */
    includeGuidesInMinMax: boolean;
    /**
     * If true, the axis will include hidden graphs when calculating min and max values.
     */
    includeHidden: boolean;
    /**
     * Specifies whether values should be placed inside or outside plot area.
     * In case you set this to false, you'll have to adjust marginLeft or marginRight in
     * [[PanelsSettings]] in order labels to be visible.
     * @default true
     */
    inside: boolean;
    /**
     * Specifies whether values on axis can only be integers or both integers and doubles.
     */
    integersOnly: boolean;
    /**
     * Frequency at which labels should be placed.
     */
    labelFrequency: number;
    /**
     * Specifies whether value labels are displayed.
     */
    labelsEnabled: boolean;
    /**
     * Set to true if value axis is logarithmic, false otherwise.
     */
    logarithmic: boolean;
    /**
     * The distance of the axis to the plot area, in pixels. Useful if you have more then one axis on the same side.
     */
    offset: number;
    /**
     * Position of the value axis. Possible values are "left" and "right".
     */
    position: string;
    /**
     * Set to true if value axis is reversed (smaller values on top), false otherwise.
     */
    reversed: boolean;
    /**
     * Specifies if first label of value axis should be displayed.
     */
    showFirstLabel: boolean;
    /**
     * Specifies if last label of value axis should be displayed.
     */
    showLastLabel: boolean;
    /**
     * Stacking mode of the axis. Possible values are: "none", "regular", "100%", "3d".
     */
    stackType: string;
    /**
     * Tick length.
     */
    tickLength: number;
    /**
     * Unit which will be added to the value label.
     */
    unit: string;
    /**
     * Position of the unit. Possible values are "left" or "right".
     */
    unitPosition: string;
}
