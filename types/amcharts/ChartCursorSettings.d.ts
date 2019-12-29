/**
 * ChartCursorSettings settings set's settings for chart cursor.
 * If you change a property after the chart is initialized, you should call stockChart.validateNow() method
 * in order for it to work. If there is no default value specified, default value of ChartCursor class will be used.
 */
export default class ChartCursorSettings {
    /**
     * Specifies if bullet for each graph will follow the cursor.
     */
    bulletsEnabled: boolean;
    /**
     * Size of bullets, following the cursor.
     */
    bulletSize: number;
    /**
     * Opacity of the category balloon.
     */
    categoryBalloonAlpha: number;
    /**
     * Color of the category balloon.
     */
    categoryBalloonColor: string;
    /**
     * Array of date format objects. Date format object must have "period" and "format" items.
     * Available periods are:
     * fff - millisecond,
     * ss - second,
     * mm - minute,
     * hh - hour,
     * DD - date,
     * WW - week,
     * MM - month,
     * YYYY - year
     * [
     *     {period:"YYYY", format:"YYYY"},
     *     {period:"MM", format:"MMM, YYYY"},
     *     {period:"WW", format:"MMM DD, YYYY"},
     *     {period:"DD", format:"MMM DD, YYYY"},
     *     {period:"hh", format:"JJ:NN"},
     *     {period:"mm", format:"JJ:NN"},
     *     {period:"ss", format:"JJ:NN:SS"},
     *     {period:"fff", format:"JJ:NN:SS"}
     * ]
     */
    categoryBalloonDateFormats: any[];
    /**
     * Specifies whether category balloon is enabled.
     */
    categoryBalloonEnabled: boolean;
    /**
     * Opacity of the cursor line.
     */
    cursorAlpha: number;
    /**
     * Color of the cursor line.
     */
    cursorColor: string;
    /**
     * Possible values: "start", "middle" and "mouse".
     */
    cursorPosition: string;
    /**
     * Set this to "false" if you don't want chart cursor to appear in your charts.
     * @default true
     */
    enabled: boolean;
    /**
     * If this is set to true, the user will be able to pan the chart instead of zooming.
     */
    pan: boolean;
    /**
     * Specifies whether value balloons are enabled.
     * In case they are not, the balloons might be displayed anyway, when the user rolls-over the column or bullet.
     */
    valueBalloonsEnabled: boolean;
    /**
     * Specifies if the user can zoom-in the chart.
     * If pan is set to true, zoomable is switched to false automatically.
     */
    zoomable: boolean;
}
