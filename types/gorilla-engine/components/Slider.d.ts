declare namespace GorillaEngine.UI {
    interface SliderProps extends KnobProps {
        /**
         * The direction of the slider.
         */
        direction: "horizontal" | "vertical";
        /**
         * The path to the image used for the thumb of the slider.
         */
        thumbImage: string;

        /**
         * TODO:: no idea what this does
         */
        sliderBounds: {
            x: number;
            y: number;
            width: number;
            height: number;
        };
    }

    /**
     * Use a slider to
     * - enable users to control numeric values by dragging up/down or left/right
     */
    class Slider extends Component {
        constructor(options: Partial<SliderProps>);
    }
    // tslint:disable-next-line:no-empty-interface
    interface Slider extends SliderProps {}
}
