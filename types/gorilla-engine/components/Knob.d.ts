declare namespace GorillaEngine.UI {
    interface KnobProps extends Common, Bounds, Clickable, Background, Skinnable, MIDILearn, Highlight {
        text: string;
        min: number;
        max: number;
        value: number;
        stepSize: number;
        inverted: boolean;
        scrollWheelEnabled: boolean;
        thumbImage: string;
        image: string;
        snapsToMousePosition: boolean;
        minRotation: number;
        maxRotation: number;
        sliderBounds: {
            x: number;
            y: number;
            width: number;
            height: number;
        }
    }

    interface Knob extends KnobProps {}
    class Knob extends Component {
        constructor(options: Partial<KnobProps>);
    }
}
