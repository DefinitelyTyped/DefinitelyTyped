import AmSerialChart from "./AmSerialChart";
import StockGraph from "./StockGraph";
import StockLegend from "./StockLegend";
import ValueAxis from "./ValueAxis";

/**
 * StockPanel class creates stock panels (charts). AmStockChart can have multiple Stock panels.
 */
export default class StockPanel extends AmSerialChart {
    /**
     * Specifies whether x button will be displayed near the panel. This button allows turning panel off.
     */
    allowTurningOff: boolean;
    /**
     * If true, drawing icons will be displayed in top-right corner.
     */
    drawingIconsEnabled: boolean;
    /**
     * Specifies on which value axis user can draw trend lines.
     * Set drawingIconsEnabled to true if you want drawing icons to be visible.
     * First value axis will be used if not set here.
     */
    drawOnAxis: ValueAxis;
    /**
     * Specifies if all trend lines should be erased when erase button is clicked.
     * If false, trend lines can be erased one by one.
     */
    eraseAll: boolean;
    /**
     * Size of trend line drawing icons.
     * If you change this size, you should update icon images if you want them to look properly.
     * @default 18
     */
    iconSize: number;
    /**
     * Relative height of panel. Possible values 0 - 100.
     */
    percentHeight: number;
    /**
     * Specifies when values should be recalculated to percents.
     * Possible values are: "never", "always", "whenComparing".
     * @default "whenComparing"
     */
    recalculateToPercents: string;
    /**
     * Specifies whether this panel will show category axis.
     * @default true
     */
    showCategoryAxis: boolean;
    stockGraphs: StockGraph[];
    /**
     * Stock chart legend.
     */
    stockLegend: StockLegend;
    /**
     * Title of a panel. Note, StockLegend should be added in order title to be displayed.
     */
    title: string;
    /**
     * Trend line opacity.
     * @default 1
     */
    trendLineAlpha: number;
    /**
     * Trend line color. #00CC00
     */
    trendLineColor: string;
    /**
     * Trend line dash length.
     */
    trendLineDashLength: number;
    /**
     * Trend line thickness.
     * @default 2
     */
    trendLineThickness: number;
    /**
     * Adds a graph to the panel.
     */
    addStockGraph(graph: StockGraph): void;
    /**
     * Removes graph from the panel.
     */
    removeStockGraph(graph: StockGraph): void;
}
