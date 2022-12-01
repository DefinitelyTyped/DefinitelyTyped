declare namespace GorillaEngine.UI {
    export interface WaveformDragZone {
        x: number;
        y: number;
        x2: number;
        y2: number;
        leftHandleImage: number;
        rightHandleImage: number;
        backgroundColor: string;
        overlayColor: string;
        leftHandleWidth: number;
        rightHandleWidth: number;
        rightHandleHeight: number;
        canResize: boolean;
        canPan: boolean;
        enabled: boolean;
        markers: Partial<{
            leftHandleImage: number;
            rightHandleImage: number;
            backgroundColor: string;
            leftHandleWidth: number;
            leftHandleHeight: number;
            rightHandleWidth: number;
            rightHandleHeight: number;
            canResize: boolean;
        }>;
    }

    export interface WaveformProps extends Common, Bounds, Background, Font, Clickable {
        waveformColor: string;
        gradientCenterColor: string;
        gradientEndColor: string;
        horizontalAxisColor: string;
        waveformUnavailableText: string;
        waveWidth: number;
        waveHorizontalSapcing: number;
        verticalPadding: number;
        fitHeight: boolean;
        paintCenterLine: boolean;
        value: number;
        dragzone: Partial<WaveformDragZone>;
    }

    export interface Waveform extends WaveformProps {}
    class Waveform extends Component {
        constructor(options: Partial<WaveformProps>);
    }
}
