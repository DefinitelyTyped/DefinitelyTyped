declare namespace GorillaEngine.UI {
    /** Properties and playback methods for a Lottie animation. */
    interface LottieAnimationProps extends Common, Bounds {
        /**
         * The file path to the Lottie animation JSON file.
         */
        filePath: string;
        /**
         * If set to true, the animation will start playing automatically.
         */
        autoplay: boolean;
        /** If set to true, the animation will loop indefinitely. */
        loop: boolean;
        /**
         * Returns the total number of frames in the animation
         */
        readonly totalFrames?: number;
        /**
         * The duration of the animation in seconds.
         */
        readonly duration?: number;
        /**
         * The currently displayed frame of the animation.
         */
        readonly currentFrame?: number;
        /**
         * Starts the animation playback at the current position.
         */
        play(): void;
        /**
         * Stops the animation playback and resets the position.
         */
        stop(): void;
        /**
         * Pauses the animation playback.
         */
        pause(): void;
        /**
         * Sets the animation to a specific frame.
         * @param frame The frame number to set the animation to.
         */
        setFrame(frame: number): void;
        /**
         * Sets the target frame used by animated controls.
         * @param frame Target frame between zero and the animation's last frame.
         */
        setTargetFrame(frame: number): void;
        /**
         * Maps a value from the supplied range to the animation's frame range and displays that frame.
         * @param value Value to map.
         * @param min Lower bound of the value range.
         * @param max Upper bound of the value range.
         */
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

    /** A component that renders and controls a Lottie animation. */
    class LottieAnimation extends Component {
        constructor(options: Partial<LottieAnimationProps>);
    }
    // tslint:disable-next-line:no-empty-interface
    interface LottieAnimation extends LottieAnimationProps {}
}
