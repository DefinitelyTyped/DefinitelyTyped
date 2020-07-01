import AmChart from "./AmChart";

/**
 * AmLegend is the class that displays legend of the chart.
 * Legend to the chart should be added using chart.addLegend(legend) method.
 * @example
 * let chart = new AmCharts.AmSerialChart();
 * let legend = new AmCharts.AmLegend();
 * chart.addLegend(legend);
 */
export default class AmLegend {
    /**
     * Alignment of legend entries. Possible values are: "left", "center", "right". left
     */
    align: string;
    /**
     * Used if chart is Serial or XY.
     * In case true, margins of the legend are adjusted and made equal to chart's margins.
     * @default true
     */
    autoMargins: boolean;
    /**
     * Opacity of legend's background. Value range is 0 - 1
     */
    backgroundAlpha: number;
    /**
     * Background color. You should set backgroundAlpha to >0 vallue in order background to be visible.
     * @default "#FFFFFF"
     */
    backgroundColor: string;
    /**
     * Opacity of chart's border. Value range is 0 - 1.
     */
    borderAlpha: number;
    /**
     * Color of legend's border. You should set borderAlpha >0 in order border to be visible.
     * @default "#000000"
     */
    borderColor: string;
    /**
     * In case legend position is set to "absolute", you can set distance from bottom of the chart, in pixels.
     */
    bottom: number;
    /**
     * Text color. Will use chart's color if not set.
     */
    color: string;
    /**
     * This can be used by AmMap only.
     * You can pass array of objects with title, color, markerType values, for example:
     * [{title: "One", color: "#3366CC"},{title: "Two", color: "#FFCC33"}]
     */
    data: any[];
    /**
     * Specifies if each of legend entry should be equal to the most wide entry.
     * Won't look good if legend has more than one line.
     * @default true
     */
    equalWidths: boolean;
    /**
     * Font size. Will use chart's font size if not set.
     */
    fontSize: string;
    /**
     * Horizontal space between legend item and left/right border.
     */
    horizontalGap: number;
    /**
     * The text which will be displayed in the legend.
     * Tag [[title]] will be replaced with the title of the graph. [[title]]
     */
    labelText: string;
    /**
     * In case legend position is set to "absolute", you can set distance from left side of the chart, in pixels.
     */
    left: number;
    /**
     * Bottom margin.
     */
    marginBottom: number;
    /**
     * Left margin.
     * This property will be ignored if chart is Serial or XY
     * and autoMargins property of the legend is true (default).
     * @default 20
     */
    marginLeft: number;
    /**
     * Right margin.
     * This property will be ignored if chart is Serial or XY
     * and autoMargins property of the legend is true (default).
     * @default 20
     */
    marginRight: number;
    /**
     * Top margin.
     */
    marginTop: number;
    /**
     * Marker border opacity 1.
     */
    markerBorderAlpha: number;
    /**
     * Marker border color. If not set, will use the same color as marker.
     */
    markerBorderColor: string;
    /**
     * Thickness of the legend border.
     * The default value (0) means the line will be a "hairline" (1 px).
     * In case marker type is line, this style will be used for line thickness.
     * @default 1
     */
    markerBorderThickness: number;
    /**
     * The color of the disabled marker (when the graph is hidden). #AAB3B3
     */
    markerDisabledColor: string;
    /**
     * Space between legend marker and legend text, in pixels.
     * @default 5
     */
    markerLabelGap: number;
    /**
     * Size of the legend marker (key).
     * @default 16
     */
    markerSize: number;
    /**
     * Shape of the legend marker (key).
     * Possible values are:
     * "square", "circle", "line", "dashedLine", "triangleUp", "triangleDown", "bubble", "none". square
     */
    markerType: string;
    /**
     * Maximum number of columns in the legend.
     * If Legend's position is set to "right" or "left", maxColumns is automatically set to 1.
     */
    maxColumns: number;
    /**
     * Position of a legend. Possible values are: "bottom", "top", "left", "right" and "absolute".
     * In case "absolute", you should set left and top properties too. (this setting is ignored in Stock charts).
     * In case legend is used with AmMap, position is set to "absolute" automatically.  bottom
     */
    position: string;
    /**
     * Specifies whether legend entries should be placed in reversed order.
     */
    reversedOrder: boolean;
    /**
     * In case legend position is set to "absolute", you can set distance from right side of the chart, in pixels.
     */
    right: number;
    /**
     * Legend item text color on roll-over.  #CC0000
     */
    rollOverColor: string;
    /**
     * When you roll-over the legend entry, all other graphs can reduce their opacity,
     * so that the graph you rolled-over would be distinguished. This style specifies the opacity of the graphs.
     * @default 1
     */
    rollOverGraphAlpha: number;
    /**
     * You can use this property to turn all the legend entries off.
     * @default true
     */
    showEntries: boolean;
    /**
     * Horizontal space between legend items, in pixels.
     * @default 10
     */
    spacing: number;
    /**
     * Whether showing/hiding of graphs by clicking on the legend marker is enabled or not.
     * In case legend is used with AmMap, this is set to false automatically.
     * @default true
     */
    switchable: boolean;
    /**
     * Legend switch color. #FFFFFF
     */
    switchColor: string;
    /**
     * Legend switch type (in case the legend is switchable). Possible values are "x" and "v". x
     */
    switchType: string;
    /**
     * If true, clicking on the text will show/hide balloon of the graph.
     * Otherwise it will show/hide graph/slice, if switchable is set to true.
     */
    textClickEnabled: boolean;
    /**
     * In case legend position is set to "absolute", you can set distance from top of the chart, in pixels.
     */
    top: number;
    /**
     * Legend markers can mirror graph’s settings, displaying a line and a real bullet as in the graph itself.
     * Set this property to true if you want to enable this feature.
     * Note, if you set graph colors in dataProvider, they will not be reflected in the marker.
     * @default false
     */
    useGraphSettings: boolean;
    /**
     * Specifies if legend labels should be use same color as corresponding markers.
     */
    useMarkerColorForLabels: boolean;
    /**
     * Alignment of the value text. Possible values are "left" and "right". right
     */
    valueAlign: string;
    /**
     * The text which will be displayed in the value portion of the legend.
     * You can use tags like
     * [[value]], [[open]], [[high]], [[low]], [[close]], [[percents]], [[description]]. [[value]]
     */
    valueText: string;
    /**
     * Width of the value text.
     * @default 80
     */
    valueWidth: number;
    /**
     * Vertical space between legend items also between legend border and first and last legend row.
     * @default: 10
     */
    verticalGap: number;
    /**
     * Adds event listener of the type "clickLabel" or "clickMarker" or "hideItem" to the object.
     * @param type Either "clickLabel" or "clickMarker" or "hideItem".
     * @param handler The event handler.
     */
    addListener(
        type: string,
        handler: (
            e: {
                type: string;
                dataItem: object;
                chart: AmChart;
            },
        ) => void,
    ): void;

    /**
     * Removes event listener from chart object.
     */
    removeListener(chart: AmChart, type: string, handler: any): void;
}
