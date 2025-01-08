declare namespace GorillaEngine.UI {
    interface KnobProps extends Common, Bounds, Clickable, Background, Skinnable, MIDILearn, Highlight {
        text: string;
        min: number;
        max: number;
        value: number;
        stepSize: number;
        inverted: boolean;
        scrollWheelEnabled: boolean;
        image: string;
        snapsToMousePosition: boolean;
        minRotation: number;
        maxRotation: number;
    }

    // tslint:disable-next-line:no-empty-interface
    interface Knob extends KnobProps {}
    class Knob extends Component {
        constructor(options: Partial<KnobProps>);
    }
}
