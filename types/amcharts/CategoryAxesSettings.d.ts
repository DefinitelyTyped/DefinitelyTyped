/**
 * CategoryAxesSettings settings set's settings common for all CategoryAxes of StockPanels.
 * If you change a property after the chart is initialized, you should call stockChart.validateNow() method in
 * order for it to work. If there is no default value specified, default value of CategoryAxis class will be used.
 */
export default class CategoryAxesSettings {
    /**
     * Specifies whether number of gridCount is specified automatically, according to the axis size.
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
     * Height of category axes. Set it to 0 if you set inside property to true.
     * @default 28
     */
    axisHeight: number;
    /**
     * Thickness of the axis.
     */
    axisThickness: number;
    /**
     * Text color.
     */
    color: string;
    /**
     * Length of a dash.
     */
    dashLength: number;
    /**
     * Date formats of different periods.
     * Possible period values:
     * fff - milliseconds,
     * ss - seconds,
     * mm - minutes,
     * hh - hours,
     * DD - days,
     * MM - months,
     * WW - weeks,
     * YYYY - years
     * Check this page for date formatting strings.
     */
    dateFormats: any[];
    /**
     * If you want data points to be placed at equal intervals (omiting dates with no data),
     * set equalSpacing to true.
     */
    equalSpacing: boolean;
    /**
     * Fill opacity. Every second space between grid lines can be filled with fillColor.
     */
    fillAlpha: number;
    /**
     * Fill color. Every second space between grid lines can be filled with color.
     * Set fillAlpha to a value greater than 0 to see the fills.
     */
    fillColor: string;
    /**
     * Text size.
     */
    fontSize: string;
    /**
     * Opacity of grid lines.
     */
    gridAlpha: number;
    /**
     * Color of grid lines.
     */
    gridColor: string;
    /**
     * Approximate number of grid lines.
     * You should set autoGridCount to false in order this property not to be ignored.
     * @default 10
     */
    gridCount: number;
    /**
     * Thickness of grid lines.
     */
    gridThickness: number;
    /**
     * Periods to which data will be gruoped in case there are more data items in
     * the selected period than specified in maxSeries property.
     * ["ss", "10ss", "30ss", "mm", "10mm", "30mm", "hh", "DD", "WW", "MM", "YYYY"]
     */
    groupToPeriods: any[];
    /**
     * Specifies whether values should be placed inside or outside of plot area.
     */
    inside: boolean;
    /**
     * Rotation angle of a label.
     */
    labelRotation: number;
    /**
     * Maximum series shown at a time.
     * In case there are more data points in the selection than maxSeries,
     * the chart will group data to longer periods, for example - you have 250 days in the selection,
     * and maxSeries is 150 - the chart will group data to weeks.
     * @default 150
     */
    maxSeries: number;
    /**
     * Specifies the shortest period of your data.
     * fff - millisecond,
     * ss - second,
     * mm - minute,
     * hh - hour,
     * DD - day,
     * MM - month,
     * YYYY - year
     * @default "DD"
     */
    minPeriod: string;
    /**
     * top or "bottom".
     */
    position: string;
    /**
     * Specifies whether the graph should start on axis or not.
     * In case you display columns, it is recommended to set this to false.
     * startOnAxis can be set to true only if equalSpacing is set to true.
     */
    startOnAxis: boolean;
    /**
     * Tick length.
     */
    tickLength: number;
}
