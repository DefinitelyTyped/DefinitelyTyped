import AmChart from "./AmChart";
import AmGraph from "./AmGraph";

/**
 * ChartCursor is a class which displays a cursor which follows the mouse.
 * In case of Serial chart it also shows value and category balloons.
 * @example
 * let chart = new AmCharts.AmSerialChart();
 * let chartCursor = new AmCharts.ChartCursor();
 * chart.addChartCursor(chartCursor);
 */
export default class ChartCursor {
    /**
     * Specifies if bullet for each graph will follow the cursor.
     */
    bulletsEnabled: boolean;
    /**
     * Size of bullets, following the cursor.
     * @default 8
     */
    bulletSize: number;
    /**
     * Opacity of the category balloon.
     * @default 1
     */
    categoryBalloonAlpha: number;
    /**
     * Color of the category balloon. cursorColor is used if not set.
     */
    categoryBalloonColor: string;
    /**
     * Category balloon date format (used only if category axis parses dates).
     * Check this page for instructions on how to format dates. MMM DD, YYYY
     */
    categoryBalloonDateFormat: string;
    /**
     * Specifies whether category balloon is enabled.
     * @default true
     */
    categoryBalloonEnabled: boolean;
    /**
     * Text color. #FFFFFF
     */
    color: string;
    /**
     * Opacity of the cursor line.  1
     */
    cursorAlpha: number;
    /**
     * Color of the cursor line. #CC0000
     */
    cursorColor: string;
    /**
     * Specifies where the cursor line should be placed - on the beginning of the period (day, hour, etc) or
     * in the middle (only when parseDates property of categoryAxis is set to true).
     * If you want the cursor to follow mouse and not to glue to the nearest data point, set "mouse" here.
     * Possible values are: "start", "middle", "mouse".
     */
    cursorPosition: string;
    /**
     * Specifies whether cursor is enabled.
     * @default true
     */
    enabled: boolean;
    /**
     * If set to true, instead of a cursor line user will see a fill which width will always
     * be equal to the width of one data item.
     * Recommend setting cursorAlpha to 0.1 or some other small number if using this feature.
     * @default false
     */
    fullWidth: boolean;
    /**
     * If this is set to true, only one balloon at a time will be displayed. Note, this is quite CPU consuming.
     */
    oneBalloonOnly: boolean;
    /**
     * If this is set to true, the user will be able to pan the chart (Serial only) instead of zooming.
     */
    pan: boolean;
    /**
     * Opacity of the selection.
     */
    selectionAlpha: number;
    /**
     * Specifies if cursor should only mark selected area but not zoom-in after user releases mouse button.
     */
    selectWithoutZooming: boolean;
    /**
     * Specifies whether value balloons are enabled.
     * In case they are not, the balloons might be displayed anyway, when the user rolls-over the column or bullet.
     * @default true
     */
    valueBalloonsEnabled: boolean;
    /**
     * Specifies if the user can zoom-in the chart.
     * If pan is set to true, zoomable is switched to false automatically.
     * @default true
     */
    zoomable: boolean;
    /**
     * Indicates if currently user is selecting some chart area to zoom-in.
     */
    zooming: boolean;

    /**
     * Hides cursor.
     */
    hideCursor(): void;
    /**
     * You can force cursor to appear at specified cateogry or date.
     */
    showCursorAt(category: string | Date): void;
    /**
     * Adds event listener.
     * @param type One of "changed", "draw", "moved", "onHideCursor", "onShowCursor", "panning",
     * "selected", "zoomed", "zoomStarted".
     * @param handler The event handler.
     */
    addListener(
        type: string,
        handler: (
            e: {
                chart: AmChart;
                delta2X?: number;
                delta2Y?: number;
                deltaX?: number;
                deltaY?: number;
                end?: number;
                finalX?: number;
                finalY?: number;
                index?: number;
                initialX?: number;
                initialY?: number;
                mostCloseGraph?: AmGraph;
                start?: number;
                target?: ChartCursor;
                type: string;
                x?: number;
                y?: number;
                zooming?: boolean;
            },
        ) => void,
    ): void;

    /**
     * Removes event listener from chart object.
     */
    removeListener(chart: AmChart, type: string, handler: any): void;
}
