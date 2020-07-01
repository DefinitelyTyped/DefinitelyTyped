import AmChart from "./AmChart";
import GaugeBand from "./GaugeBand";

export default class GaugeAxis {
    /**
     * Axis opacity.
     * @default 1
     */
    axisAlpha: number;

    /**
     * Axis color.
     * @default #000000
     */
    axisColor: string;

    /**
     * Thickness of the axis outline.
     * @default 1
     */
    axisThickness: number;

    /**
     * Opacity of band fills.
     * @default 1
     */
    bandAlpha: number;

    /**
     * Example: [-0.2, 0, -0.2]. Will make bands to be filled with color gradients.
     * Negative value means the color will be darker than the original,
     * and positive number means the color will be lighter.
     * @default []
     */
    bandGradientRatio: [number];

    /**
     * Opacity of band outlines.
     * @default 0
     */
    bandOutlineAlpha: number;

    /**
     * Color of band outlines.
     * @default #000000
     */
    bandOutlineColor: string;

    /**
     * Thickness of band outlines.
     * @default 0
     */
    bandOutlineThickness: number;

    /**
     * Array of bands - GaugeBand objects. Bands are used to draw color fills between specified values.
     */
    bands: [GaugeBand];

    /**
     * Text displayed below the axis center.
     */
    bottomText: string;

    /**
     * Specifies if text should be bold.
     * @default true
     */
    bottomTextBold: boolean;

    /**
     * Bottom text color.
     */
    bottomTextColor: string;

    /**
     * Font size of bottom text.
     */
    bottomTextFontSize: number;

    /**
     * Y offset of bottom text.
     * @default 0
     */
    bottomTextYOffset: number;

    /**
     * X position of the axis, relative to the center of the gauge.
     * @default '0%'
     */
    centerX: any;

    /**
     * Y position of the axis, relative to the center of the gauge.
     * @default '0%'
     */
    centerY: any;

    /**
     * Specifies labels color of the axis.
     */
    color: string;

    /**
     * Axis end angle. Valid values are from - 180 to 180.
     * @default 120
     */
    endAngle: number;

    /**
     * Axis end (max) value
     */
    endValue: number;

    /**
     * Font size for axis labels.
     */
    fontSize: number;

    /**
     * Number of grid lines. Note, GaugeAxis doesn't adjust gridCount,
     * so you should check your values and choose a proper gridCount which would result grids at round numbers.
     * @default 5
     */
    gridCount: number;

    /**
     * Specifies if grid should be drawn inside or outside the axis.
     * @default true
     */
    gridInside: boolean;

    /**
     * Unique id of an axis.
     */
    id: any;

    /**
     * Specifies if labels should be placed inside or outside the axis.
     * @default true
     */
    inside: boolean;

    /**
     * Frequency of labels.
     * @default 1
     */
    labelFrequency: number;

    /**
     * You can use this function to format axis labels.
     * This function is called and value is passed as a attribute: labelFunction(value);
     */
    labelFunction: (value: number) => string;

    /**
     * Distance from axis to the labels.
     * @default 15
     */
    labelOffset: number;

    /**
     * Specifies if labels on the axis should be shown.
     * @default true
     */
    labelsEnabled: boolean;

    /**
     * You can add listeners of events using this property.
     * Example: listeners = [{"event":"clickBand", "method":handleClick}];
     */
    listeners: object[];

    /**
     * Interval, at which minor ticks should be placed.
     */
    minorTickInterval: number;

    /**
     * Length of a minor tick.
     * @default 5
     */
    minorTickLength: number;

    /**
     * Axis radius.
     * @default '95%'
     */
    radius: any;

    /**
     * Specifies if the first label should be shown.
     * @default true
     */
    showFirstLabel: boolean;

    /**
     * Specifies if the last label should be shown.
     * @default true
     */
    showLastLabel: boolean;

    /**
     * Axis start angle. Valid values are from - 180 to 180.
     * @default -120
     */
    startAngle: number;

    /**
     * Axis start (min) value.
     * @default 0
     */
    startValue: number;

    /**
     * Opacity of axis ticks.
     * @default 1
     */
    tickAlpha: number;

    /**
     * Color of axis ticks.
     * @default #555555
     */
    tickColor: string;

    /**
     * Length of a major tick.
     * @default 10
     */
    tickLength: number;

    /**
     * Tick thickness.
     * @default 1
     */
    tickThickness: number;

    /**
     * Text displayed above the axis center.
     */
    topText: string;

    /**
     * Specifies if text should be bold.
     * @default true
     */
    topTextBold: boolean;

    /**
     * Color of top text.
     */
    topTextColor: string;

    /**
     * Font size of top text.
     */
    topTextFontSize: number;

    /**
     * Y offset of top text.
     * @default 0
     */
    topTextYOffset: number;

    /**
     * A string which can be placed next to axis labels.
     */
    unit: string;

    /**
     * Position of the unit.
     * @default right
     */
    unitPosition: string;

    /**
     * Specifies if small and big numbers should use prefixes to make them more readable.
     * @default false
     */
    usePrefixes: boolean;

    /**
     * Interval, at which ticks with values should be placed.
     */
    valueInterval: number;

    /**
     * Adds event listener to the object.
     */
    addListener(type: string, handler: any): void;

    /**
     * Removes event listener from chart object.
     */
    removeListener(chart: AmChart, type: string, handler: any): void;

    /**
     * Sets bottom text.
     */
    setBottomText(text: string): void;

    /**
     * Sets top text.
     */
    setTopText(textstring: string): void;

    /**
     * Returns angle of the value.
     */
    value2angle(value: number): void;
}
