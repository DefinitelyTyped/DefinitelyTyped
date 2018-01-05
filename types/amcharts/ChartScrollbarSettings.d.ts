import AmGraph from "./AmGraph";

/**
 * ChartScrollbarSettings settings set's settings for chart scrollbar.
 * If you change a property after the chart is initialized, you should call stockChart.validateNow() method in
 * order for it to work. If there is no default value specified, default value of ChartScrollbar class will be used.
 */
export default class ChartScrollbarSettings {
    /**
     * Specifies whether number of gridCount is specified automatically, according to the axis size.
     * @default true
     */
    autoGridCount: boolean;
    /**
     * Background opacity.
     */
    backgroundAlpha: number;
    /**
     * Background color of the scrollbar.
     */
    backgroundColor: string;
    /**
     * Text color.
     */
    color: string;
    /**
     * Set false if you don't need scrollbar.
     * @default true
     */
    enabled: boolean;
    /**
     * Font size.
     */
    fontSize: string;
    /**
     * Specifies which graph will be displayed in the scrollbar.
     */
    graph: AmGraph;
    /**
     * Graph fill opacity.
     */
    graphFillAlpha: number;
    /**
     * Graph fill color.
     */
    graphFillColor: string;
    /**
     * Graph line opacity.
     */
    graphLineAlpha: number;
    /**
     * Graph line color.
     */
    graphLineColor: string;
    /**
     * Type of chart scrollbar's graph.
     * By default the graph type is the same as the original graph's type, however in case of "candlestick" or
     * "ohlc" you might want to show line graph in the scrollbar.
     * Possible values are: line, column, step, smoothedLine, candlestick, ohlc.
     */
    graphType: string;
    /**
     * Grid opacity.
     */
    gridAlpha: number;
    /**
     * Grid color.
     */
    gridColor: string;
    /**
     * Grid count. You should set autoGridCount to false in order this property to work.
     */
    gridCount: number;
    /**
     * Height of scrollbar, in pixels.
     * @default 40
     */
    height: number;
    /**
     * Specifies whether resize grips are hidden when mouse is away from the scrollbar.
     */
    hideResizeGrips: boolean;
    /**
     * Duration of scrolling, when the user clicks on scrollbar's background, in seconds.
     */
    scrollDuration: number;
    /**
     * Selected background opacity.
     */
    selectedBackgroundAlpha: number;
    /**
     * Selected background color.
     */
    selectedBackgroundColor: string;
    /**
     * Selected graph'sfill opacity.
     */
    selectedGraphFillAlpha: number;
    /**
     * Selected graph'sfill color.
     */
    selectedGraphFillColor: string;
    /**
     * Selected graph'sline opacity.
     */
    selectedGraphLineAlpha: number;
    /**
     * Selected graph's line color.
     */
    selectedGraphLineColor: string;
    /**
     * Specifies if the chart should be updated while dragging/resizing the scrollbar or only at the moment when
     * user releases mouse button. Usefull when working with large data sets.
     * @default true
     */
    updateOnReleaseOnly: boolean;
}
