declare namespace GorillaEngine.UI {
    interface KnobProps extends Common, Bounds, Clickable, Background, Skinnable {
        text: string;
        min: number;
        max: number;
        value: number;
        stepSize: number;
    }

    interface Knob extends KnobProps {}
    class Knob extends Component {
        constructor(options: Partial<KnobProps>);
    }
}
