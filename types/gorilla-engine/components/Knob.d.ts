declare namespace GorillaEngine.UI {
    /**
     * Properties for a rotary control that edits a numeric value.
     */
    interface KnobProps extends Common, Bounds, Clickable, Background, Skinnable, MIDILearn, Highlight {
        /**
         * The text displayed by the control.
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

        /**
         * Whether the control runs from its maximum value to its minimum value.
         */
        inverted: boolean;
        /**
         * If `true`, the knob's value can be adjusted using the mouse scroll wheel.
         */
        scrollWheelEnabled: boolean;
        /**
         * The path to a single image used for the knob's appearance.
         */
        image: string;
        /**
         * Whether clicking a slider track moves its handle to the pointer position.
         * This property only affects controls displayed as sliders.
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
    /**
     * A rotary control for editing numeric values.
     */
    class Knob extends Component {
        constructor(options: Partial<KnobProps>);
    }
}
