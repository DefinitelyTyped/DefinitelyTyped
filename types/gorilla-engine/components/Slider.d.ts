declare namespace GorillaEngine.UI {
    interface SliderProps extends Common, Bounds, Clickable, Background {
        text: string;
        min: number;
        max: number;
        value: number;
        direction: 'horizontal' | 'vertical';
        animation: LottieAnimation;
        filmstrip: {
            path: string;
            count: number;
            direction: string;
        };
    }

    /**
     * Use a slider to
     * - enable users to control numeric values by dragging up/down or left/right
     */
    class Slider extends Component {
        constructor(options: Partial<SliderProps>);
    }
    interface Slider extends SliderProps {}
}
