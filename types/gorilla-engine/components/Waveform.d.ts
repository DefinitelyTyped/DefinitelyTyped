declare namespace GorillaEngine.UI {
    interface WaveformDragZone {
        x: number;
        y: number;
        x2: number;
        y2: number;
        /**
         * The path to the asset for the left handle.
         */
        leftHandleImage: string;
        /**
         * The path to the asset for the right handle.
         */
        rightHandleImage: string;
        /**
         * The background color of the Drag Zone
         */
        backgroundColor: string;
        /**
         * The color of the overlay.
         */
        overlayColor: string;
        /**
         * The width of the left handle.
         */
        leftHandleWidth: number;
        /**
         * The height of the left handle.
         */
        leftHandleHeight: number;
        /**
         * The width of the right handle.
         */
        rightHandleWidth: number;
        /**
         * The height of the right handle.
         */
        rightHandleHeight: number;
        /**
         * Whether the drag zone can be resized.
         */
        canResize: boolean;
        /**
         * Whether the drag zone can be panned.
         */
        canPan: boolean;
        /**
         * Whether the drag zone is enabled.
         */
        enabled: boolean;
        /**
         * Value bindings for the drag zone properties.
         */
        bindings: any;
    }

    interface WaveformMarker {
        /**
         * Whether the marker is enabled.
         */
        enabled: boolean;
        x: number;
        y: number;
        x2: number;
        y2: number;
        /**
         * The path to the asset for the left handle.
         */
        leftHandleImage: string;
        /**
         * The path to the asset for the right handle.
         */
        rightHandleImage: string;
        /**
         * The background color of the marker.
         */
        backgroundColor: string;
        /**
         * The width of the left handle.
         */
        leftHandleWidth: number;
        /**
         * The height of the left handle.
         */
        leftHandleHeight: number;
        /**
         * The width of the right handle.
         */
        rightHandleWidth: number;
        /**
         * The height of the right handle.
         */
        rightHandleHeight: number;
        /**
         * Whether the marker can be resized.
         */
        canResize: boolean;
    }

    interface WaveformProps extends Common, Bounds, Background, Font, Clickable, Margin {
        /**
         * The color of the waveform.
         */
        waveformColor: string;
        /**
         * The color of the gradient center.
         */
        gradientCenterColor: string;
        /**
         * The color of the gradient end.
         */
        gradientEndColor: string;
        /**
         * The color of the horizontal axis.
         */
        horizontalAxisColor: string;
        /**
         * The text to display when the waveform is unavailable.
         */
        waveformUnavailableText: string;
        /**
         * The width of the waveform.
         */
        waveWidth: number;

        /**
         * The initial X offset of the waveform.
         */
        initialXOffset: number;

        /**
         * The horizontal spacing between waves.
         */
        waveHorizontalSapcing: number;

        /**
         * The vertical padding of the waveform.
         */
        verticalPadding: number;

        /**
         * Whether to fit the waveform height.
         */
        fitHeight: boolean;

        /**
         * Whether to paint the center line.
         */
        paintCenterLine: boolean;

        /**
         * The value of the waveform.
         */
        value: number;

        /**
         * Whether to draw using legacy mode.
         */
        drawUsingLegacy: boolean;

        /**
         * The drag zone configuration.
         */
        dragzone: Partial<WaveformDragZone>;

        /**
         * The marker configuration.
         */
        markers: Partial<WaveformMarker>;
    }

    // tslint:disable-next-line:no-empty-interface
    interface Waveform extends WaveformProps {}
    class Waveform extends Component {
        constructor(options: Partial<WaveformProps>);
    }
}
