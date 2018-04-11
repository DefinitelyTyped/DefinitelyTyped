/**
 * SerialDataItem holds all the information about each series.
 * When working with a chart, you do not create SerialDataItem objects or change it's properties directly.
 * Consider properties of a SerialDataItem read-only - change values in chart's data provider if you need to.
 * When serial chart parses dataProvider, it generates "chartData" array.
 * Objects of this array are SerialDataItem objects.
 */
export default class SerialDataItem {
    /**
     * You can access each GraphDataItem using this object.
     * The data structure is: graphDataItem = serialDataItem.axes[axisId].graphs[graphId].
     */
    axes: object;
    /**
     * category value. String if parseDates is false, Date if true.
     */
    category: any;
    /**
     * Timestamp of a series date. Avalable only if parseDates property of CategoryAxis is set to true.
     */
    time: number;
    /**
     * Coordinate (horizontal or vertical, depends on chart's rotate property) of the series.
     */
    x: number;
}
