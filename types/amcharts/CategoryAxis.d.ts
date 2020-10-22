import AxisBase from "./AxisBase";

export default class CategoryAxis extends AxisBase {
    /**
     * When parse dates is on for the category axis, the chart will try to highlight the beginning of the periods,
     * like month, in bold. Set this to false to disable the functionality.
     * @default true
     */
    boldPeriodBeginning: boolean;
    /**
     * Date formats of different periods. Possible period values:
     * fff - milliseconds, ss - seconds, mm - minutes, hh - hours, DD - days, MM - months, WW - weeks, YYYY - years.
     * Check this page for date formatting strings.
     * [
     *     {period:'fff',format:'JJ:NN:SS'},
     *     {period:'ss',format:'JJ:NN:SS'},
     *     {period:'mm',format:'JJ:NN'},
     *     {period:'hh',format:'JJ:NN'},
     *     {period:'DD',format:'MMM DD'},
     *     {period:'WW',format:'MMM DD'},
     *     {period:'MM',format:'MMM'},
     *     {period:'YYYY',format:'YYYY'}
     * ]
     */
    dateFormats: any[];
    /**
     * In case your category axis values are Date objects and parseDates is set to true,
     * the chart will parse dates and will place your data points at irregular intervals.
     * However if you want dates to be parsed (displayed on the axis, baloons, etc),
     * but data points to be placed at equal intervals (omiting dates with no data), set equalSpacing to true.
     */
    equalSpacing: boolean;
    /**
     * Field in data provider which specifies if the category value should always be shown.
     * For example: categoryAxis.forceShowField = "forceShow";
     * Field in data provider which specifies if the category value should always be shown.
     * For example: categoryAxis.forceShowField = "forceShow";
     * And in data:
     * {category:"one", forceShow:true, value:100}
     * Note, this works only when parseDates is set to false.
     */
    forceShowField: string;
    /**
     * Specifies if a grid line is placed on the center of a cell or on the beginning of a cell.
     * Possible values are: "start" and "middle" This setting doesn't work if parseDates is set to true.
     * @default "middle"
     */
    gridPosition: string;
    /**
     * Specifies if minor grid should be displayed.
     * NOTE: If equalSpacing is set to true, this setting will be ignored.
     * @default false
     */
    minorGridEnabled: boolean;
    /**
     * Specifies the shortest period of your data. This should be set only if parseDates is set to "true".
     * Possible period values:
     * fff - milliseconds, ss - seconds, mm - minutes, hh - hours, DD - days, MM - months, YYYY - years.
     * @default "DD"
     */
    minPeriod: string;
    /**
     * In case your category axis values are Date objects, set this to true.
     * In this case the chart will parse dates and will place your data points at irregular intervals.
     * If you want dates to be parsed, but data points to be placed at equal intervals,
     * set both parseDates and equalSpacing to true.
     */
    parseDates: boolean;
    /**
     * Specifies whether the graph should start on axis or not.
     * In case you display columns, it is recommended to set this to false.
     * If parseDates is set to true, startOnAxis will allways be false, unless equalSpacing is set to true.
     */
    startOnAxis: boolean;
    /**
     * Works only when parseDates is set to true and equalSpacing is false.
     * If you set it to true, at the position where bigger period changes,
     * category axis will display date strings of bot small and big period, in two rows.
     * @default false
     */
    twoLineMode: boolean;
    /**
     * Use line color for bullet
     * @default false
     */
    useLineColorForBulletBorder: boolean;
    /**
     * Number returns coordinate of a category. Works only if parseDates is false.
     * If parseDates is true, use dateToCoordinate method.
     */
    categoryToCoordinate(category: string): void;
    /**
     * date - Date object Returns Date of the coordinate, in case parseDates is set to true and
     * equalSpacing is set to false.
     */
    coordinateToDate(coordinate: number): void;
    /**
     * Number Returns coordinate of the date, in case parseDates is set to true.
     * If parseDates is false, use categoryToCoordinate method.
     */
    dateToCoordinate(date: Date): void;
    /**
     * Number Returns index of the category which is most close to specified coordinate.
     */
    xToIndex(x: number): void;
}
