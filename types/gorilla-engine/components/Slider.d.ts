declare namespace GorillaEngine.UI {
    /**
     * Properties for a numeric control with a handle that moves along a track.
     */
    interface SliderProps extends KnobProps {
        /**
         * The direction of the slider.
         */
        direction: "horizontal" | "vertical";
        /**
         * The path to the image used for the thumb of the slider.
         */
        thumbImage: string;

        /** Bounds of the slider track relative to the control. */
        sliderBounds: {
            /** Horizontal offset of the track in pixels. */
            x: number;
            /** Vertical offset of the track in pixels. */
            y: number;
            /** Width of the track in pixels. */
            width: number;
            /** Height of the track in pixels. */
            height: number;
        };
    }

    /**
     * A control for editing numeric values by dragging horizontally or vertically.
     */
    class Slider extends Component {
        constructor(options: Partial<SliderProps>);
    }
    // tslint:disable-next-line:no-empty-interface
    interface Slider extends SliderProps {}
}
