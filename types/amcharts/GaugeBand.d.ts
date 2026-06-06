export default class GaugeBand {
    /**
     * Opacity of band fill. Will use axis.bandAlpha if not set any.
     */
    alpha: number;

    /**
     * When rolled-over, band will display balloon if you set some text for this property.
     */
    balloonText: string;

    /**
     * Color of a band.
     */
    color: string;

    /**
     * End value of a fill.
     */
    endValue: number;

    /**
     * Example: [-0.2, 0, -0.2]. Will make bands to be filled with color gradients.
     * Negative value means the color will be darker than the original,
     * and positive number means the color will be lighter.
     * @default []
     */
    gradientRatio: [number];

    /**
     * Unique id of a band.
     */
    id: string;

    /**
     * Inner radius of a band. If not set any, the band will end with the end of minor ticks.
     * Set 0 if you want the band to be drawn to the axis center.
     */
    innerRadius: any;

    /**
     * Band radius. If not set any, the band will start with the axis outline.
     */
    radius: any;

    /**
     * Start value of a fill.
     */
    startValue: number;

    /**
     * Gauge band can be clickable and can lead to some page.
     */
    url: string;

    /**
     * Sets end value for the band.
     */
    setEndValue(value: number): void;

    /**
     * Sets start value for the band.
     */
    setStartValue(value: number): void;
}
