declare namespace GorillaEngine.UI {
    interface SliderProps extends KnobProps {
        direction: "horizontal" | "vertical";
        thumbImage: string;
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
