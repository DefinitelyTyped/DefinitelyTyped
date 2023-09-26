declare namespace GorillaEngine.UI {
    interface LottieAnimationProps extends Common, Bounds {
        filePath: string;
        autoplay: boolean;
        loop: boolean;
        readonly totalFrames?: number;
        readonly duration?: number;
        readonly currentFrame?: number;
        play(): void;
        stop(): void;
        pause(): void;
        setFrame(frame: number): void;
        setTargetFrame(frame: number): void;
        setFrameFromLinearTransform(value: number, min: number, max: number): void;
        setProperties(
            selector: string,
            settings: {
                fillColor?: [number, number, number]; // Fill bright red
                fillOpacity?: number; // Change fills to 50% opacity
                strokeColor?: [number, number, number]; // Color strokes bright green
                strokeOpacity?: number; // Change strokes to 50% opacity
                strokeWidth?: number; // Change stroke width to 3.5px
                transformAnchor?: [number, number]; // Move the anchor to x = 100, y = 100
                transformPosition?: [number, number]; // Move to x = 200, y = 200
                transformScale?: [number, number]; // Scale to 50% size in x and y axis
                transformRotation?: number; // Rotate by 180°
                transformOpacity?: number; // Change opacity to 50%
            },
        ): void;
    }

    class LottieAnimation extends Component {
        constructor(options: Partial<LottieAnimationProps>);
    }
    interface LottieAnimation extends LottieAnimationProps {}
}
