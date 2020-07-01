import GaugeAxis from "./GaugeAxis";

export default class GaugeArrow {
    /**
     * Opacity of an arrow.
     * @default 1
     */
    alpha: number;

    /**
     * Axis of the arrow. You can use reference to the axis or id of the axis.
     * If you don't set any axis, the first axis of a chart will be used.
     * @default GaugeAxis
     */
    axis: GaugeAxis;

    /**
     * Opacity of arrow border.
     * @default 1
     */
    borderAlpha: number;

    /**
     * In case you need the arrow to rotate only clock-wise, set this property to true.
     * @default false
     */
    clockWiseOnly: boolean;

    /**
     * Color of an arrow.
     * @default #000000
     */
    color: string;

    /**
     * Unique id of an arrow.
     */
    id: string;

    /**
     * Inner radius of an arrow.
     * @default 0
     */
    innerRadius: any;

    /**
     * Opacity of a nail, holding the arrow.
     * @default 1
     */
    nailAlpha: number;

    /**
     * Opacity of nail border.
     * @default 0
     */
    nailBorderAlpha: number;

    /**
     * Thickness of nail border.
     * @default 1
     */
    nailBorderThickness: number;

    /**
     * Radius of a nail, holding the arrow.
     * @default 8
     */
    nailRadius: number;

    /**
     * Radius of an arrow.
     * @default '90%'
     */
    radius: any;

    /**
     * Width of arrow root.
     * @default 8
     */
    startWidth: number;

    /**
     * Value to which the arrow should point at.
     */
    value: number;

    /**
     * Sets value for the arrow.
     * Arrow will animate to this value if you do it after chart is written to it's container.
     */
    setValue(value: number): void;
}
