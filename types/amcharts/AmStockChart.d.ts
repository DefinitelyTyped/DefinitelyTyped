import AmBalloon from "./AmBalloon";
import AmChart from "./AmChart";
import AmSerialChart from "./AmSerialChart";
import CategoryAxesSettings from "./CategoryAxesSettings";
import ChartCursorSettings from "./ChartCursorSettings";
import ChartScrollbarSettings from "./ChartScrollbarSettings";
import DataSet from "./DataSet";
import DataSetSelector from "./DataSetSelector";
import LegendSettings from "./LegendSettings";
import PanelsSettings from "./PanelSettings";
import PeriodSelector from "./PeriodSelector";
import StockEvent from "./StockEvent";
import StockGraph from "./StockGraph";
import StockPanel from "./StockPanel";
import ValueAxesSettings from "./ValueAxesSettings";

/**
 * AmStockChart is a main class Stock chart.
 */
export default class AmStockChart {
    /**
     * Specifies if animation was already played.
     * Animation is only played once, when chart is rendered for the first time.
     * If you want the animation to be repeated, set this property to false.
     */
    animationPlayed: boolean;
    /**
     * Balloon object.
     */
    balloon: AmBalloon;
    /**
     * Settings for category axes.
     */
    categoryAxesSettings: CategoryAxesSettings;
    /**
     * Indicates if the chart is created.
     */
    chartCreated: boolean;
    /**
     * Chart cursor settings.
     */
    chartCursorSettings: ChartCursorSettings;
    /**
     * Chart scrollbar settings.
     */
    chartScrollbarSettings: ChartScrollbarSettings;
    /**
     * Array of colors used by data sets if no color was set explicitly on data set itself.
     * [
     * #FF6600, "#FCD202", "#B0DE09", "#0D8ECF", "#2A0CD0", "#CD0D74", "#CC0000",
     * "#00CC00", "#0000CC", "#DDDDDD", "#999999", "#333333", "#990000"
     * ]
     */
    colors: any[];
    /**
     * Array of data sets selected for comparing.
     */
    comparedDataSets: any[];
    /**
     * Array of DataSets.
     */
    dataSets: any[];
    /**
     * DataSetSelector object.
     * You can add it if you have more than one data set and want users to be able to select/compare them.
     */
    dataSetSelector: DataSetSelector;
    /**
     * Current end date of the selected period, get only.
     * To set start/end dates, use stockChart.zoom(startDate, endDate) method.
     */
    endDate: Date;
    /**
     * Defines on which day week starts. 0 - Sunday, 1 - Monday..
     * @default 1
     */
    firstDayOfWeek: number;
    /**
     * If set to true the scope of the data view will be set to the end after data update.
     */
    glueToTheEnd: boolean;
    /**
     * Legend settings.
     */
    legendSettings: LegendSettings;
    /**
     * Data set selected as main.
     */
    mainDataSet: DataSet;
    /**
     * Array of StockPanels (charts).
     */
    panels: any[];
    /**
     * Settings for stock panels.
     */
    panelsSettings: PanelsSettings;
    /**
     * Period selector object.
     * You can add it if you want user's to be able to enter date ranges or
     * zoom chart with predefined period buttons.
     */
    periodSelector: PeriodSelector;
    /**
     * Scrollbar's chart object, get only.
     */
    scrollbarChart: AmSerialChart;
    /**
     * Current start date of the selected period, get only.
     * To set start/end dates, use stockChart.zoom(startDate, endDate) method.
     */
    startDate: Date;
    /**
     * Settings for stock events.
     */
    stockEventsSettings: any;
    /**
     * Settings for value axes.
     */
    valueAxesSettings: ValueAxesSettings;
    /**
     * read-only. Indicates current version of a script.
     */
    version: string;
    /**
     * Specifies whether the chart should zoom-out when main data set is changed.
     */
    zoomOutOnDataSetChange: boolean;

    /**
     * Adds panel to the stock chart. Requires stockChart.validateNow() method to be called after this action.
     */
    addPanel(panel: StockPanel): void;
    /**
     * Adds panel to the stock chart at a specified index.
     * Requires stockChart.validateNow() method to be called after this action.
     */
    addPanelAt(panel: StockPanel, index: number): void;
    /**
     * Destroys chart, all timeouts and listeners.
     */
    clear(): void;
    /**
     * Hides event bullets.
     */
    hideStockEvents(): void;
    /**
     * Removes panel from the stock chart. Requires stockChart.validateNow() method to be called after this action.
     */
    removePanel(panel: StockPanel): void;
    /**
     * Shows event bullets.
     */
    showStockEvents(): void;
    /**
     * Method which should be called after data was changed.
     */
    validateData(): void;
    /**
     * Method which forces the stock chart to rebuild. Should be called after properties are changed.
     */
    validateNow(): void;
    /**
     * Zooms chart to specified dates. startDate, endDate - Date objects.
     */
    zoom(startDate: Date, endDate: Date): void;
    /**
     * Zooms out the chart.
     */
    zoomOut(): void;
    /**
     * Adds event listener.
     * @param type - One of
     * "buildStarted", "clickStockEvent", "dataUpdated", "init", "panelRemoved", "rendered", "rollOutStockEvent",
     * "rollOverStockEvent", "zoomed".
     * @param handler - The event handler.
     */
    addListener(
        type: string,
        handler: (
            e: {
                chart: AmStockChart;
                date?: Date;
                endDate?: Date;
                eventObject?: StockEvent;
                graph?: StockGraph;
                panel?: StockPanel;
                period?: string;
                startDate?: Date;
                type: string;
            },
        ) => void,
    ): void;
    /**
     * Removes event listener from chart object.
     */
    removeListener(chart: AmChart, type: string, handler: any): void;
}
