import AmRectangularChart from "./AmRectangularChart";
import CategoryAxis from "./CategoryAxis";

/**
 * AmSerialChart is the class you have to use for majority of chart types.
 * The supported chart types are: line, area, column, bar, step line, smoothed line, candlestick and OHLC.
 * The chart can be rotated by 90 degrees so the column chart becomes bar chart.
 * The chart supports simple and logarithmic scales, it can have multiple value axes.
 * The chart can place data points at equal intervals or can parse dates and place data points
 * at irregular intervals.
 * @example
 * let chartData = [{title:"sample 1",value:130},{title:"sample 2",value:26}];
 *
 * let chart = new AmCharts.AmSerialChart();
 * chart.categoryField = "title";
 * chart.dataProvider = chartData;
 *
 * let graph = new AmCharts.AmGraph();
 * graph.valueField = "value";
 * graph.type = "column";
 * graph.fillAlphas = 1;
 * chart.addGraph(graph);
 *
 * chart.write("chartdiv");
 */
export default class AmSerialChart extends AmRectangularChart {
    /**
     * Date format of the graph balloon (if chart parses dates and you don't use chartCursor).
     * @default 'MMM DD, YYYY'
     */
    balloonDateFormat: string;
    /**
     * Read-only. Chart creates category axis itself.
     * If you want to change some properties, you should get this axis from the chart and
     * set properties to this object.
     */
    categoryAxis: CategoryAxis;
    /**
     * Category field name tells the chart the name of the field in your dataProvider object
     * which will be used for category axis values.
     */
    categoryField: string;
    /**
     * The gap in pixels between two columns of the same category.
     * @default 5
     */
    columnSpacing: number;
    /**
     * Space between 3D stacked columns.
     * @default 0
     */
    columnSpacing3D: number;
    /**
     * Relative width of columns. Value range is 0 - 1.
     * @default 0.8
     */
    columnWidth: number;
    /**
     * Read-only. If category axis parses dates endDate indicates date to which the chart is currently displayed.
     */
    endDate: Date;
    /**
     * Read-only. Category index to which the chart is currently displayed.
     */
    endIndex: number;
    /**
     * Maximum number of series allowed to select.
     */
    maxSelectedSeries: number;
    /**
     * The longest time span allowed to select (in milliseconds) for example
     * 259200000 will limit selection to 3 days.
     */
    maxSelectedTime: number;
    /**
     * The shortest time span allowed to select (in milliseconds) for example
     * 1000 will limit selection to 1 second.
     * @default 0
     */
    minSelectedTime: number;
    /**
     * Specifies if scrolling of a chart with mouse wheel is enabled.
     * If you press shift while rotating mouse wheel, the chart will zoom-in/out.
     */
    mouseWheelScrollEnabled: boolean;
    /**
     * Specifies if zooming of a chart with mouse wheel is enabled.
     * If you press shift while rotating mouse wheel, the chart will scroll.
     */
    mouseWheelZoomEnabled: boolean;
    /**
     * If you set this to true, the chart will be rotated by 90 degrees (the columns will become bars).
     */
    rotate: boolean;
    /**
     * Read-only.
     * If category axis parses dates startDate indicates date from which the chart is currently displayed.
     */
    startDate: Date;
    /**
     * Read-only. Category index from which the chart is currently displayed.
     */
    startIndex: number;
    /**
     * Specifies if chart should zoom-out when data is updated.
     * @default true
     */
    zoomOutOnDataUpdate: boolean;

    /**
     * Number Returns index of the specified category value.
     */
    getCategoryIndexByValue(value: number): void;
    /**
     * Zooms out, charts shows all available data.
     */
    zoomOut(): void;
    /**
     * Zooms the chart by the value of the category axis.
     */
    zoomToCategoryValues(start: Date, end: Date): void;
    /**
     * Zooms the chart from one date to another.
     */
    zoomToDates(start: Date, end: Date): void;
    /**
     * Zooms the chart by the index of the category.
     */
    zoomToIndexes(start: Date, end: Date): void;
}
