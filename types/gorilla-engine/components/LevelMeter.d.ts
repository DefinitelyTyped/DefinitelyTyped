declare namespace GorillaEngine.UI {
    interface LevelMeterProps extends Common, Bounds, Background, Skinnable {
        peakHold: boolean;
        logScale: boolean;
        fillArea: boolean;
        inverted: boolean;
        stereo: boolean;
        positionIndicator: boolean;
        rampUpFactor: number;
        rampDownFactor: number;
        maxRampDownSpeed: number;
        min: number;
        max: number;
        levelColor: string;
        peakColor: string;
        indicatorThickness: number;
        visibleSectionStart: number;
        visibleSectionEnd: number;
        direction: string;
        value: any;
    }

    interface LevelMeter extends LevelMeterProps {}

    class LevelMeter extends Component {
        constructor(options: Partial<LevelMeterProps>);
    }
}
