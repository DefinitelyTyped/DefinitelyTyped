import SerialDataItem from "./SerialDataItem";

/**
 * GraphDataItem holds all the information about the graph's data item.
 * When working with a chart, you do not create GraphDataItem objects or change it's properties directly.
 * GraphDataItem is passed to you by events when user interacts with data item on the chart.
 * The list of properties below will help you to extract data item's value/coordinate/etc.
 */
export default class GraphDataItem {
    /**
     * Opacity of the data item.
     */
    alpha: number;
    /**
     * Bullet type.
     */
    bullet: string;
    /**
     * Bullet size.
     */
    bulletSize: number;
    /**
     * Category value.
     */
    category: string;
    /**
     * Color of the data item.
     */
    color: string;
    /**
     * Custom bullet (path to file name).
     */
    customBullet: string;
    /**
     * Original object from data provider.
     */
    dataContext: object;
    /**
     * Description.
     */
    description: string;
    /**
     * Array of colors of the data item, used by column and candlestick chart only.
     */
    fillColors: any[];
    /**
     * Object which holds percents when recalculateToPercents is set to true.
     */
    percents: object;
    /**
     * SerialDataItem of this graphDataItem
     */
    serialDataItem: SerialDataItem;
    /**
     * url
     */
    url: string;
    /**
     * Object which holds values of the data item (value, open, close, low, high).
     */
    values: object;
    /**
     * x coordinate of the data item.
     */
    x: number;
    /**
     * y coordinate of the data item.
     */
    y: number;
}
