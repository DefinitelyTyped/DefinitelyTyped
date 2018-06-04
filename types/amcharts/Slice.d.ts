/**
 * Slice is an item of AmPieChart's chartData Array and holds all the information about the slice.
 * When working with a pie chart, you do not create slices or change it's properties directly,
 * instead you set array of data using dataProvider property.
 * Consider properties of a Slice read-only - change values in chart's data provider if you need to.
 */
export default class Slice {
    /**
     * Opacity of a slice.
     */
    alpha: number;
    /**
     * Color of a slice.
     */
    color: string;
    /**
     * Original object from data provider.
     */
    dataContext: object;
    /**
     * Slice description.
     */
    description: string;
    /**
     * Specifies whether the slice is hidden
     */
    hidden: boolean;
    /**
     * Percent value of a slice.
     */
    percents: number;
    /**
     * Specifies whether the slice is pulled or not.
     */
    pulled: boolean;
    /**
     * Slice title
     */
    title: string;
    /**
     * Url of a slice
     */
    url: string;
    /**
     * Value of a slice
     */
    value: number;
    /**
     * specifies whether this slice has a legend entry
     */
    visibleInLegend: boolean;
}
