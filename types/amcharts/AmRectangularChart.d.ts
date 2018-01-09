import AmCoordinateChart from "./AmCoordinateChart";
import ChartCursor from "./ChartCursor";
import ChartScrollbar from "./ChartScrollbar";
import TrendLine from "./TrendLine";

/**
 * AmRectangularChart is a base class of AmSerialChart and AmXYChart. It can not be instantiated explicitly.
 */
export default class AmRectangularChart extends AmCoordinateChart {
    /**
     * The angle of the 3D part of plot area. This creates a 3D effect (if the "depth3D" is > 0).
     * @default 0
     */
    angle: number;
    /**
     * Space left from axis labels/title to the chart's outside border, if autoMargins set to true.
     * @default 10
     */
    autoMarginOffset: number;
    /**
     * Specifies if margins of a chart should be calculated automatically so that labels of axes would fit.
     * The chart will adjust only margins with axes.
     * Other margins will use values set with marginRight, marginTop, marginLeft and marginBottom properties.
     * @default true
     */
    autoMargins: boolean;
    /**
     * Cursor of a chart.
     */
    chartCursor: ChartCursor;
    /**
     * Chart scrollbar.
     */
    chartScrollbar: ChartScrollbar;
    /**
     * The depth of the 3D part of plot area. This creates a 3D effect (if the "angle" is > 0).
     * @default 0
     */
    depth3D: number;
    /**
     * Number of pixels between the container's bottom border and plot area.
     * This space can be used for bottom axis' values.
     * If autoMargin is true and bottom side has axis, this property is ignored.
     * @default 20
     */
    marginBottom: number;
    /**
     * Number of pixels between the container's left border and plot area.
     * This space can be used for left axis' values.
     * If autoMargin is true and left side has axis, this property is ignored.
     * @default 20
     */
    marginLeft: number;
    /**
     * Number of pixels between the container's right border and plot area.
     * This space can be used for Right axis' values.
     * If autoMargin is true and right side has axis, this property is ignored.
     * @default 20
     */
    marginRight: number;
    /**
     * Flag which should be set to false if you need margins to be recalculated on next chart.validateNow() call.
     * @default false
     */
    marginsUpdated: boolean;
    /**
     * Number of pixels between the container's top border and plot area.
     * This space can be used for top axis' values.
     * If autoMargin is true and top side has axis, this property is ignored.
     * @default 20
     */
    marginTop: number;
    /**
     * The opacity of plot area's border. Value range is 0 - 1.
     * @default 0
     */
    plotAreaBorderAlpha: number;
    /**
     * The color of the plot area's border.
     * Note, the it is invisible by default, as plotAreaBorderAlpha default value is 0.
     * Set it to a value higher than 0 to make it visible.
     * @default '#000000'
     */
    plotAreaBorderColor: string;
    /**
     * Opacity of plot area. Plural form is used to keep the same property names as our Flex charts'.
     * Flex charts can accept array of numbers to generate gradients.
     * Although you can set array here, only first value of this array will be used.
     * @default 0
     */
    plotAreaFillAlphas: number;
    /**
     * You can set both one color if you need a solid color or array of colors to generate gradients, for example:
     * ["#000000", "#0000CC"]
     * @default '#FFFFFF'
     */
    plotAreaFillColors: any;
    /**
     * If you are using gradients to fill the plot area, you can use this property to set gradient angle.
     * The only allowed values are horizontal and vertical: 0, 90, 180, 270.
     * @default 0
     */
    plotAreaGradientAngle: number;
    /**
     * Array of trend lines added to a chart.
     * You can add trend lines to a chart using this array or access already existing trend lines
     */
    trendLines: TrendLine[];
    /**
     * Opacity of zoom-out button background.
     * @default 0
     */
    zoomOutButtonAlpha: number;
    /**
     * Zoom-out button background color.
     * @default '#e5e5e5'
     */
    zoomOutButtonColor: string;
    /**
     * Name of zoom-out button image. In the images folder there is another lens image, called lensWhite.png.
     * You might want to have white lens when background is dark. Or you can simply use your own image.
     * @default lens.png
     */
    zoomOutButtonImage: string;
    /**
     * Size of zoom-out button image
     * @default: 17
     */
    zoomOutButtonImageSize: number;
    /**
     * Padding around the text and image.
     * @default: 8
     */
    zoomOutButtonPadding: number;
    /**
     * Opacity of zoom-out button background when mouse is over it.
     * @default: 1
     */
    zoomOutButtonRollOverAlpha: number;
    /**
     * Text in the zoom-out button. Show all
     */
    zoomOutText: string;

    /**
     * Adds a ChartCursor object to a chart
     */
    addChartCursor(cursor: ChartCursor): void;
    /**
     * Adds a ChartScrollbar to a chart
     */
    addChartScrollbar(scrollbar: ChartScrollbar): void;
    /**
     * Adds a TrendLine to a chart.
     * You should call chart.validateNow() after this method is called in order the trend line to be visible.
     */
    addTrendLine(trendLine: TrendLine): void;
    /**
     * Removes cursor from the chart
     */
    removeChartCursor(): void;
    /**
     * Removes scrollbar from the chart
     */
    removeChartScrollbar(): void;
    /**
     * Removes a trend line from a chart.
     * You should call chart.validateNow() in order the changes to be visible.
     */
    removeTrendLine(trendLine: TrendLine): void;
}
