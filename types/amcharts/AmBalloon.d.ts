/**
 * AmBalloon is the class which generates balloons (datatips).
 * Balloon follows the mouse when you roll-over the pie slice/line bullet/column/etc, chart indicator of
 * serial charts displays value balloons and category balloon.
 * Balloon instance is created by the chart automatically and can be accessed via "balloon" property of AmChart.
 * Chart shows/hides and sets position for every balloon automatically,
 * so all you need to do is to change balloon appearance, if you want to.
 * @example
 * let chart = new AmCharts.AmSerialChart();
 * // get balloon intance
 * let balloon = chart.balloon;
 * // set properties
 * balloon.adjustBorderColor = true;
 * balloon.color = "#000000";
 * balloon.cornerRadius = 5;
 * balloon.fillColor = "#FFFFFF";
 */
export default class AmBalloon {
    /**
     * If this is set to true, border color instead of background color will be changed
     * when user rolls-over the slice, graph, etc.
     */
    adjustBorderColor: boolean;
    /**
     * Balloon border opacity. Value range is 0 - 1.
     * @default 1
     */
    borderAlpha: number;
    /**
     * Balloon border color. #FFFFFF
     */
    borderColor: string;
    /**
     * Balloon border thickness.
     * @default 2
     */
    borderThickness: number;
    /**
     * Color of text in the balloon. #FFFFFF
     */
    color: string;
    /**
     * Balloon corner radius.
     * @default 6
     */
    cornerRadius: number;
    /**
     * Balloon background opacity.
     * @default 1
     */
    fillAlpha: number;
    /**
     * Balloon background color. Usually balloon background color is set by the chart.
     * Only if "adjustBorderColor" is "true" this color will be used.
     * @default "#CC0000"
     */
    fillColor: string;
    /**
     * Size of text in the balloon. Chart's fontSize is used by default.
     */
    fontSize: string;
    /**
     * Horizontal padding of the balloon.
     * @default 8
     */
    horizontalPadding: number;
    /**
     * The width of the pointer (arrow) "root". Only used if cornerRadius is 0.
     * @default 10
     */
    pointerWidth: number;
    /**
     * If cornerRadius of a balloon is >0, showBullet is set to true for value balloons when ChartCursor is used.
     * If you don't want the bullet near the balloon, set it to false: chart.balloon.showBullet = false
     */
    showBullet: boolean;
    /**
     * Text alignment, possible values "left", "middle" and "right" middle
     */
    textAlign: string;
    /**
     * Color of the text shadow. #000000
     */
    textShadowColor: string;
    /**
     * Vertical padding of the balloon.
     * @default 5
     */
    verticalPadding: number;
    /**
     * Hides balloon.
     */
    hide(): void;
    /**
     * Defines a square within which the balloon should appear.
     * Bounds are set by chart class, you don't need to call this method yourself.
     */
    setBounds(left: number, top: number, right: number, bottom: number): void;
    /**
     * Sets coordinates the balloon should point to.
     */
    setPosition(x: number, y: number): void;
    /**
     * Specifies the text which should be displayed.
     */
    show(value: string): void;
}
