import Guide from "./Guide";

/**
 * AxisBase is the base class for ValueAxis and CategoryAxis. It can not be instantiated explicitly.
 */
export default class AxisBase {
    /**
     * Specifies whether number of gridCount is specified automatically, acoarding to the axis size.
     * @default true
     */
    autoGridCount: boolean;
    /**
     * Axis opacity. Value range is 0 - 1.
     * @default 1
     */
    axisAlpha: number;
    /**
     * Axis color.  #000000
     */
    axisColor: string;
    /**
     * Thickness of the axis.
     * @default 1
     */
    axisThickness: number;
    /**
     * Color of axis value labels. Will use chart's color if not set.
     */
    color: string;
    /**
     * Length of a dash. 0 means line is not dashed.
     */
    dashLength: number;
    /**
     * Fill opacity. Every second space between grid lines can be filled with color.
     * Set fillAlpha to a value greater than 0 to see the fills.
     */
    fillAlpha: number;
    /**
     * Fill color. Every second space between grid lines can be filled with color.
     * Set fillAlpha to a value greater than 0 to see the fills.
     * @default "#FFFFFF"
     */
    fillColor: string;
    /**
     * Size of value labels text. Will use chart's fontSize if not set.
     */
    fontSize: string;
    /**
     * Opacity of grid lines. 0.2
     */
    gridAlpha: number;
    /**
     * Color of grid lines. #000000
     */
    gridColor: string;
    /**
     * Number of grid lines. In case this is value axis, or your categoryAxis parses dates,
     * the number is approximate. The default value is 5. If you set autoGridCount to true,
     * this property is ignored.
     * @default 5
     */
    gridCount: number;
    /**
     * Thickness of grid lines.
     * @default 1
     */
    gridThickness: number;
    /**
     * The array of guides belonging to this axis.
     */
    guides: any[];
    /**
     * If autoMargins of a chart is set to true, but you want this axis not to be measured when calculating margin,
     * set ignoreAxisWidth to true.
     */
    ignoreAxisWidth: boolean;
    /**
     * Specifies whether values should be placed inside or outside plot area.
     */
    inside: boolean;
    /**
     * Frequency at which labels should be placed. Doesn't work for CategoryAxis if parseDates is set to true.
     * @default 1
     */
    labelFrequency: number;
    /**
     * Rotation angle of a label. Only horizontal axis' values can be rotated.
     * If you set this for vertical axis, the setting will be ignored.
     */
    labelRotation: number;
    /**
     * Specifies whether axis displays category axis' labels and value axis' values.
     * @default true
     */
    labelsEnabled: boolean;
    /**
     * The distance of the axis to the plot area, in pixels. Negative values can also be used.
     */
    offset: number;
    /**
     * Possible values are: "top", "bottom", "left", "right".
     * If axis is vertical, default position is "left".
     * If axis is horizontal, default position is "bottom".
     */
    position: string;
    /**
     * Whether to show first axis label or not.
     * @default true
     */
    showFirstLabel: boolean;
    /**
     * Whether to show last axis label or not.
     * @default true
     */
    showLastLabel: boolean;
    /**
     * Length of the tick marks.
     * @default 5
     */
    tickLength: number;
    /**
     * Title of the axis.
     */
    title: string;
    /**
     * Specifies if title should be bold or not.
     * @default true
     */
    titleBold: boolean;
    /**
     * Color of axis title. Will use text color of chart if not set any.
     */
    titleColor: string;
    /**
     * Font size of axis title. Will use font size of chart plus two pixels if not set any.
     */
    titlefontSize: string;

    /**
     * Adds guide to the axis.
     */
    addGuide(guide: Guide): void;
    /**
     * Removes guide from the axis.
     */
    removeGuide(guide: Guide): void;
}
