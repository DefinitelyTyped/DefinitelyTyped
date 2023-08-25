import AmRectangularChart from "./AmRectangularChart";

/**
 * AmXYChart is the class you have to use for XY/Bubble/Scatter chart types.
 * The chart supports simple and logarithmic scales, it can have multiple value axes.
 * @example
 * let chartData = [
 *     {x:10, y:14, value:59},
 *     {x:5, y:3, value:50},
 *     {x:-10, y:-3, value:19},
 *     {x:-6, y:5, value:65},
 *     {x:15, y:-4, value:92},
 *     {x:13, y:1, value:8},
 *     {x:1, y:6, value:35}
 * ];
 *
 * let chart = new AmCharts.AmXYChart();
 * chart.pathToImages = "../../amcharts/javascript/images/";
 * chart.dataProvider = chartData;
 * chart.marginLeft = 35;
 * chart.startDuration = 1.5;
 *
 * let xAxis = new AmCharts.ValueAxis();
 * xAxis.position = "left";
 * xAxis.autoGridCount = true;
 * chart.addValueAxis(xAxis);
 *
 * let yAxis = new AmCharts.ValueAxis();
 * yAxis.position = "bottom";
 * yAxis.autoGridCount = true;
 * chart.addValueAxis(yAxis);
 *
 * let graph = new AmCharts.AmGraph();
 * graph.valueField = "value";
 * graph.xField = "x";
 * graph.yField = "y";
 * graph.lineAlpha = 0;
 * graph.bullet = "round";
 * chart.addGraph(graph);
 *
 * let chartCursor = new AmCharts.ChartCursor();
 * chart.addChartCursor(chartCursor);
 *
 * let chartScrollbar = new AmCharts.ChartScrollbar();
 * chartScrollbar.hideResizeGrips = false;
 * chart.addChartScrollbar(chartScrollbar);
 *
 * chart.write("chartdiv);
 */
export default class AmXYChart extends AmRectangularChart {
    /**
     * Specifies if Scrollbar of X axis (horizontal) should be hidden.
     */
    hideXScrollbar: boolean;
    /**
     * Specifies if Scrollbar of Y axis (vertical) should be hidden.
     */
    hideYScrollbar: boolean;
    /**
     * Maximum zoom factor of the chart.
     * @default 20
     */
    maxZoomFactor: number;
    /**
     * Zooms out, charts shows all available data.
     */
    zoomOut(): void;
}
