declare namespace GorillaEngine.UI {
    interface KnobProps extends Common, Bounds, Clickable, Background, Skinnable, MIDILearn, Highlight {
        /**
         * The text displayed for component
         */
        text: string;
        /**
         * The minimum value of the knob.
         */
        min: number;
        /**
         * The maximum value of the knob.
         */
        max: number;
        /**
         * The initial value of the knob, which should be between `min` and `max`.
         */
        value: number;
        /**
         * The step size for the knob, which determines how much the value changes with each interaction.
         */
        stepSize: number;

        inverted: boolean;
        /**
         * If `true`, the knob's value can be adjusted using the mouse scroll wheel.
         */
        scrollWheelEnabled: boolean;
        /**
         * The path to a single image used for the knob's appearance.
         */
        image: string;
        /** TODO:: this is rather a slider prop than a knob prop
         */
        snapsToMousePosition: boolean;
        /**
         * Sets the minimum rotation angle for the knob image in degrees. Only relevant if `image` is set.
         */
        minRotation: number;
        /**
         * Sets the maximum rotation angle for the knob image in degrees. Only relevant if `image` is set.
         */
        maxRotation: number;
    }

    // tslint:disable-next-line:no-empty-interface
    interface Knob extends KnobProps {}
    class Knob extends Component {
        constructor(options: Partial<KnobProps>);
    }
}
