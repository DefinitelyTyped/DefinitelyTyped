declare namespace GorillaEngine.UI {
    interface WaveformDragZone {
        x: number;
        y: number;
        x2: number;
        y2: number;
        leftHandleImage: string;
        rightHandleImage: string;
        backgroundColor: string;
        overlayColor: string;
        leftHandleWidth: number;
        leftHandleHeight: number;
        rightHandleWidth: number;
        rightHandleHeight: number;
        canResize: boolean;
        canPan: boolean;
        enabled: boolean;
        bindings: any;
    }

    interface WaveformMarker {
        enabled: boolean;
        x: number;
        y: number;
        x2: number;
        y2: number;
        leftHandleImage: string;
        rightHandleImage: string;
        backgroundColor: string;
        leftHandleWidth: number;
        leftHandleHeight: number;
        rightHandleWidth: number;
        rightHandleHeight: number;
        canResize: boolean;
    }

    interface WaveformProps extends Common, Bounds, Background, Font, Clickable, Margin {
        waveformColor: string;
        gradientCenterColor: string;
        gradientEndColor: string;
        horizontalAxisColor: string;
        waveformUnavailableText: string;
        waveWidth: number;
        initialXOffset: number;
        waveHorizontalSapcing: number;
        verticalPadding: number;
        fitHeight: boolean;
        paintCenterLine: boolean;
        value: number;
        drawUsingLegacy: boolean;
        dragzone: Partial<WaveformDragZone>;
        markers: Partial<WaveformMarker>;
    }

    interface Waveform extends WaveformProps {}
    class Waveform extends Component {
        constructor(options: Partial<WaveformProps>);
    }
}
