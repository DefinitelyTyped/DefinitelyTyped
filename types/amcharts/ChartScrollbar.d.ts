import AmGraph from "./AmGraph";
import CategoryAxis from "./CategoryAxis";

/**
 * ChartScrollbar class displays chart scrollbar. Supported by AmSerialChart and AmXYChart.
 * @example
 * let chart = new AmCharts.AmSerialChart();
 * let chartScrollbar = new AmCharts.ChartScrollbar();
 * chart.addChartScrollbar(chartScrollbar);
 */
export default class ChartScrollbar {
    /**
     * Specifies whether number of gridCount is specified automatically, acoarding to the axis size.
     */
    autoGridCount: boolean;
    /**
     * Background opacity.
     * @default 1
     */
    backgroundAlpha: number;
    /**
     * Background color of the scrollbar.
     * @default #D4D4D4
     */
    backgroundColor: string;
    /**
     * Read-only. Category axis of the scrollbar.
     */
    categoryAxis: CategoryAxis;
    /**
     * Text color. Will use chart's color if not set.
     */
    color: string;
    /**
     * Specifies which graph will be displayed in the scrollbar. Only Serial chart's scrollbar can display a graph.
     */
    graph: AmGraph;
    /**
     * Graph fill opacity. Value range is 0 - 1.  0.1
     */
    graphFillAlpha: number;
    /**
     * Graph fill color. #000000
     */
    graphFillColor: string;
    /**
     * Graph line opacity. Value range is 0 - 1.
     */
    graphLineAlpha: number;
    /**
     * Graph line color. #000000
     */
    graphLineColor: string;
    /**
     * By default the graph type is the same as the original graph's type,
     * however in case of "candlestick" or "ohlc" you might want to show line graph in the scrollbar.
     * Possible values are: "line", "column", "step", "smoothedLine", "candlestick", "ohlc".
     */
    graphType: string;
    /**
     * Grid opacity. Value range is 0 - 1. 0.7
     */
    gridAlpha: number;
    /**
     * Grid color. #FFFFFF
     */
    gridColor: string;
    /**
     * The number of grid lines.
     */
    gridCount: number;
    /**
     * Specifies whether resize grips are hidden when mouse is away from the scrollbar.
     */
    hideResizeGrips: boolean;
    /**
     * Specifies whether scrollbar has a resize feature.
     * @default true
     */
    resizeEnabled: boolean;
    /**
     * Height (width, if chart is rotated) of a scrollbar.
     * @default 20
     */
    scrollbarHeight: number;
    /**
     * Duration of scrolling, when the user clicks on scrollbar's background, in seconds.
     * @default 2
     */
    scrollDuration: number;
    /**
     * Selected backround opacity.
     * @default 1
     */
    selectedBackgroundAlpha: number;
    /**
     * Selected background color. #EFEFEF
     */
    selectedBackgroundColor: string;
    /**
     * Selected graph's fill opacity. Value range is 0 - 1. 0.5
     */
    selectedGraphFillAlpha: number;
    /**
     * Selected graph's fill color. #000000
     */
    selectedGraphFillColor: string;
    /**
     * Selected graph's line opacity. Value range is 0 - 1.
     */
    selectedGraphLineAlpha: number;
    /**
     * Selected graph's line color. #000000
     */
    selectedGraphLineColor: string;
    /**
     * Specifies if the chart should be updated while dragging/resizing the scrollbar or only at the moment
     * when user releases mouse button.
     */
    updateOnReleaseOnly: boolean;
}
