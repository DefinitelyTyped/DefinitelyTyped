import AmChart from "./AmChart";
import AxisBase from "./AxisBase";
import Guide from "./Guide";

/**
 * ValueAxis is the class which displays value axis for the chart. The chart can have any number of value axes.
 * For Serial chart one value axis is created automatically.
 * For XY Chart two value axes (horizontal and vertical) are created automatically.
 */
export default class ValueAxis extends AxisBase {
    /**
     * Radar chart only. Specifies distance from axis to the axis title (category)  10
     */
    axisTitleOffset: number;
    /**
     * Read-only. Coordinate of the base value.
     */
    baseCoord: number;
    /**
     * Specifies base value of the axis.
     */
    baseValue: number;
    /**
     * If your values represents time units, and you want value axis labels to be formatted as duration,
     * you have to set the duration unit. Possible values are: "ss", "mm", "hh" and "DD".
     */
    duration: string;
    /**
     * If duration property is set, you can specify what string should be displayed next to day,
     * hour, minute and second.
     * {DD:"d. ", hh:":", mm:":",ss:""}
     */
    durationUnits: { DD: string; hh: string; mm: string; ss: string };
    /**
     * Radar chart only. Possible values are: "polygons" and "circles". Set "circles" for polar charts.
     * @default "polygons"
     */
    gridType: string;
    /**
     * Unique id of value axis. It is not required to set it, unless you need to tell the graph which exact
     * value axis it should use.
     */
    id: string;
    /**
     * Specifies whether guide values should be included when calculating min and max of the axis.
     */
    includeGuidesInMinMax: boolean;
    /**
     * If true, the axis will include hidden graphs when calculating min and max values.
     */
    includeHidden: boolean;
    /**
     * Specifies whether values on axis can only be integers or both integers and doubles.
     */
    integersOnly: boolean;
    /**
     * You can use this function to format Value axis labels.
     * This function is called and these parameters are passed: labelFunction(value, valueText, valueAxis);
     * Where value is numeric value, valueText is formatted string and valueAxis is a reference to valueAxis object.
     * If axis type is "date", labelFunction will pass different arguments:
     * labelFunction(valueText, date, valueAxis)
     * Your function should return string.
     */
    labelFunction(value: number, valueText: string, valueAxis: ValueAxis): string;
    labelFunction(valueText: string, data: Date, valueAxis: ValueAxis): string;
    /**
     * Specifies if this value axis' scale should be logarithmic.
     */
    logarithmic: boolean;
    /**
     * Read-only. Maximum value of the axis.
     */
    max: number;
    /**
     * If you don't want max value to be calculated by the chart, set it using this property.
     * This value might still be adjusted so that it would be possible to draw grid at rounded intervals.
     */
    maximum: number;
    /**
     * If your value axis is date-based, you can specify maximum date of the axis.
     * Can be set as date object, timestamp number or string if dataDateFormat is set.
     */
    maximumData: Date;
    /**
     * Read-only. Minimum value of the axis.
     */
    min: number;
    /**
     * If you don't want min value to be calculated by the chart, set it using this property.
     * This value might still be adjusted so that it would be possible to draw grid at rounded intervals.
     */
    minimum: number;
    /**
     * If your value axis is date-based, you can specify minimum date of the axis.
     * Can be set as date object, timestamp number or string if dataDateFormat is set.
     */
    minimumDate: Date;
    /**
     * If set value axis scale (min and max numbers) will be multiplied by it.
     * I.e. if set to 1.2 the scope of values will increase by 20%.
     */
    minMaxMultiplier: number;
    /**
     * Works with radar charts only.
     * If you set it to “middle”, labels and data points will be placed in the middle between axes.
     */
    pointPosition: string;
    /**
     * Possible values are: "top", "bottom", "left", "right".
     * If axis is vertical, default position is "left". If axis is horizontal, default position is "bottom".
     */
    position: string;
    /**
     * Precision (number of decimals) of values.
     */
    precision: number;
    /**
     * Radar chart only. Specifies if categories (axes' titles) should be displayed near axes)
     * @default true
     */
    radarCategoriesEnabled: boolean;
    /**
     * pecifies if graphs's values should be recalculated to percents.
     */
    recalculateToPercents: boolean;
    /**
     * Specifies if value axis should be reversed (smaller values on top).
     */
    reversed: boolean;
    /**
     * Stacking mode of the axis.
     * Possible values are: "none", "regular", "100%", "3d".
     * Note, only graphs of one type will be stacked.
     * @default "none"
     */
    stackType: string;
    /**
     * Read-only. Value difference between two grid lines.
     */
    step: number;
    /**
     * If you set minimum and maximum for your axis, chart adjusts them so that grid would start and end on the
     * beginning and end of plot area and grid would be at equal intervals.
     * If you set strictMinMax to true, the chart will not adjust minimum and maximum of value axis.
     */
    strictMinMax: boolean;
    /**
     * In case you synchronize one value axis with another, you need to set the synchronization multiplier.
     * Use synchronizeWithAxis method to set with which axis it should be synced.
     */
    synchronizationMultiplier: number;
    /**
     * One value axis can be synchronized with another value axis.
     * You can use both reference to your axis or id of the axis here.
     * You should set synchronizationMultiplyer in order for this to work.
     */
    synchronizeWith: ValueAxis;
    /**
     * If this value axis is stacked and has columns, setting valueAxis.totalText = "[[total]]" will make it
     * to display total value above the most-top column.
     */
    totalText: string;
    /**
     * Color of total text.
     */
    totalTextColor: string;
    /**
     * Distance from data point to total text.
     */
    totalTextOffset: number;
    /**
     * This allows you to have logarithmic value axis and have zero values in the data.
     * You must set it to >0 value in order to work.
     */
    treatZeroAs: number;
    /**
     * Type of value axis.
     * If your values in data provider are dates and you want this axis to show dates instead of numbers,
     * set it to "date".
     */
    type: string;
    /**
     * Unit which will be added to the value label.
     */
    unit: string;
    /**
     * Position of the unit. Possible values are "left" and "right". right
     */
    unitPosition: string;
    /**
     * If true, prefixes will be used for big and small numbers.
     * You can set arrays of prefixes directly to the chart object
     * via prefixesOfSmallNumbers and prefixesOfBigNumbers.
     */
    usePrefixes: boolean;
    /**
     * If true, values will always be formatted using scientific notation (5e+8, 5e-8...)
     * Otherwise only values bigger then 1e+21 and smaller then 1e-7 will be displayed in scientific notation.
     */
    useScientificNotation: boolean;

    /**
     * Adds guide to the axis.
     */
    addGuide(guide: Guide): void;
    /**
     * Number, - value of coordinate. Returns value of the coordinate.  coordinate - y or x coordinate, in pixels.
     */
    coordinateToValue(coordinate: number): void;
    /**
     * Number - coordinate Returns coordinate of the value in pixels. value - Number
     */
    getCoordinate(value: number): void;
    /**
     * Removes guide from the axis.
     */
    removeGuide(guide: Guide): void;

    /**
     * One value axis can be synchronized with another value axis.
     * You should set synchronizationMultiplyer in order for this to work.
     */
    synchronizeWithAxis(axis: ValueAxis): void;
    /**
     * XY Chart only. Zooms-in the axis to the provided values.
     */
    zoomToValues(startValue: number, endValue: number): void;

    /**
     * Adds event listener.
     * @param type One of "axisChanged", "axisZoomed", "logarithmicAxisFailed".
     * @param handler The event handler.
     */
    addListener(
        type: string,
        handler: (
            e: {
                type: string;
                startValue?: Date;
                endValue?: Date;
                chart: AmChart;
            },
        ) => void,
    ): void;

    /**
     * Removes event listener from chart object.
     */
    removeListener(chart: AmChart, type: string, handler: any): void;
}
