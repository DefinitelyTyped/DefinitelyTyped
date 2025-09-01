declare namespace GorillaEngine.UI {
    interface LevelMeterProps extends Common, Bounds, Background, Skinnable {
        /**
         * If `true`, the level meter will display and hold the highest peak level reached
         * for a defined duration.
         */
        peakHold: boolean;
        /**
         * If `true`, the level meter's scale will be displayed logarithmically.
         */
        logScale: boolean;
        /**
         * If `true`, the level meter will fill the area below the current level peak.
         */
        fillArea: boolean;
        /**
         * If `true`, the level meter will be vertically inverted.
         */
        inverted: boolean;
        /**
         * If `true`, the level meter will display both the left and right channel levels.
         */
        stereo: boolean;
        /**
         * If `true`, the level meter won't fill the area below the current level peak.
         */
        positionIndicator: boolean;
        /**
         * Defines a **threshold** on the logarithmic scale. Below this value,
         * a specific logarithmic mapping is applied to `normalizedValue` for detailed display.
         * At or above this threshold, the display behavior may change (e.g., clamp to full).
         */
        rampUpFactor: number;
        /**
         * Controls the **scaling factor** for the logarithmic mapping when `normalizedValue`
         * is below the `rampUpFactor` threshold. It influences how "stretched" or
         * compressed the lower portion of the logarithmic scale appears.
         */
        rampDownFactor: number;
        /**
         * Specifies the **maximum speed** at which the level meter's visual indicator
         * can decrease or "fall back" from a peak.
         */
        maxRampDownSpeed: number;
        /**
         * The minimum bound of the level meter's scale.
         */
        min: number;
        /**
         * The maximum bound of the level meter's scale.
         */
        max: number;
        /**
         * The color of the level meter's fill area.
         */
        levelColor: string;
        /**
         * The color of the level meter's peak indicator.
         */
        peakColor: string;
        /**
         * The thickness of the level meter's indicator.
         */
        indicatorThickness: number;
        /** TODO::
         * I have no idea that this does
         */
        visibleSectionStart: number;
        /** TODO::
         * I have no idea that this does
         */
        visibleSectionEnd: number;
        /**
         * The direction of the level meter. This can be "horizontal" or "vertical".
         */
        direction: string;
        /**
         * The current value of the level meter.
         */
        value: any;
    }

    // tslint:disable-next-line:no-empty-interface
    interface LevelMeter extends LevelMeterProps {}

    class LevelMeter extends Component {
        constructor(options: Partial<LevelMeterProps>);
    }
}
