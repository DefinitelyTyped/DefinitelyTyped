import AmChart from "./AmChart";
import AmGraph from "./AmGraph";
import GraphDataItem from "./GraphDataItem";
import Guide from "./Guide";
import ValueAxis from "./ValueAxis";

/**
 * AmCoordinateChart is a base class of AmRectangularChart. It can not be instantiated explicitly.
 */
export default class AmCoordinateChart extends AmChart {
    /**
     * Array, holding processed chart's data.
     */
    chartData: object[];
    /**
     * Specifies the colors of the graphs if the lineColor of a graph is not set.
     * It there are more graphs then colors in this array, the chart picks random color.
     * @default ['#FF6600','#FCD202','#B0DE09','#0D8ECF','#2A0CD0','#CD0D74','#CC0000','#00CC00',
     * '#0000CC','#DDDDDD','#999999','#333333','#990000']
     */
    colors: string[];
    /**
     * The array of graphs belonging to this chart.
     * To add/remove graph use addGraph/removeGraph methods instead of adding/removing graphs directly to array.
     */
    graphs: AmGraph[];
    /**
     * Specifies if grid should be drawn above the graphs or below. Will not work properly with 3D charts.
     * @default false
     */
    gridAboveGraphs: boolean;
    /**
     * Instead of adding guides to the axes, you can push all of them to this array.
     * In case guide has category or date defined, it will automatically will be assigned to the category axis.
     * Otherwise to first value axis, unless you specify a different valueAxis for the guide.
     */
    guides: Guide[];
    /**
     * Specifies whether the animation should be sequenced or all objects should appear at once.
     * @default true
     */
    sequencedAnimation: boolean;
    /**
     * The initial opacity of the column/line.
     * If you set startDuration to a value higher than 0, the columns/lines will fade in from startAlpha.
     * Value range is 0 - 1.
     * @default 1
     */
    startAlpha: number;
    /**
     * Duration of the animation, in seconds.
     */
    startDuration: number;
    /**
     * Animation effect.
     * Possible values are ">", "<", elastic" and "bounce".
     * @default "elastic"
     */
    startEffect: string;
    /**
     * Target of url.
     * @default this
     */
    urlTarget: any;
    /**
     * The array of value axes.
     * To add/remove value axis use addValueAxis/removeValueAxis methods instead of
     * adding/removing axes directly to array.
     * Chart creates one value axis automatically, so if you need only one value axis, you don't need to create it.
     */
    valueAxes: any[];
    /**
     * Adds a graph to the chart.
     */
    addGraph(graph: AmGraph): void;
    /**
     * Adds value axis to the chart.
     * One value axis is created automatically, so if you don't want to change anything or add more value axes,
     * you don't need to add it.
     */
    addValueAxis(axis: ValueAxis): void;
    /**
     * You can trigger the animation of the chart.
     */
    animateAgain(): void;
    /**
     * AmGraph Returns graph by id.
     */
    getGraphById(graphId: string): AmGraph;
    /**
     * Returns value axis by id.
     */
    getValueAxisById(axisId: string): ValueAxis;
    /**
     * Hide the graph (if it is visible).
     * Usually this method is called from the Legend, when you click on the legend marker.
     */
    hideGraph(graph: AmGraph): void;
    /**
     * Hide value balloon of a graph.
     * Usually this method is called from the Legend, when you click on the legend text.
     */
    hideGraphsBalloon(graph: AmGraph): void;
    /**
     * Highlight the graph. Usually this method is called from the Legend, when you roll-over the legend entry.
     */
    highlightGraph(graph: AmGraph): void;
    /**
     * Removes graph from the chart.
     */
    removeGraph(graph: AmGraph): void;
    /**
     * Removes value axis from the chart.
     * When you remove value axis, all graphs assigned to this axis are also removed.
     */
    removeValueAxis(axis: ValueAxis): void;
    /**
     * Show the graph (if it is hidden).
     * Usually this method is called from the Legend, when you click on the legend marker.
     */
    showGraph(graph: AmGraph): void;
    /**
     * Show value balloon of a graph.
     * Usually this method is called from the Legend, when you click on the legend text.
     */
    showGraphsBalloon(graph: AmGraph): void;
    /**
     * UnhighlightGraph the graph.
     * Usually this method is called from the Legend, when you roll-out the legend entry.
     */
    unhighlightGraph(graph: AmGraph): void;
    /**
     * Adds event listener of the type "clickGraphItem" or "doubleClickGraphItem" or
     * "rightClickGraphItem" or "rollOutGraphItem" or "rollOverGraphItem" to the object.
     * @param type Either "clickGraphItem" or "doubleClickGraphItem" or "rightClickGraphItem"
     * or "rollOutGraphItem" or "rollOverGraphItem".
     * @param handler Dispatched when user clicks on the data item (column/bullet)
     */
    addListener(
        type: string,
        handler: (
            e: {
                type: string;
                graph: AmGraph;
                item: GraphDataItem;
                index: number;
                chart: AmChart;
            },
        ) => void,
    ): void;
}
