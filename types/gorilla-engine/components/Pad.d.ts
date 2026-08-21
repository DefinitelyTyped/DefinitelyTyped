declare namespace GorillaEngine.UI {
    interface PadProps extends Common, Bounds, Background, KeyboardFocus, Clickable, Skinnable, Font {
        /**
         * The midi note index for the pad
         */
        midiNote: number;
        /**
         * The veloctiy of the pad when pressed and not controlled by midi
         */
        velocity: number;
        /**
         * Sets the visual state of the pad.
         * If true, the pad is in a pressed/playing state.
         */
        padState: boolean;
        /**
         * The paths for the images used for displaying the pad.
         */
        images: Partial<{
            normal: string;
            hover: string;
            down: string;
        }>;
    }

    // tslint:disable-next-line:no-empty-interface
    interface Pad extends PadProps {}
    class Pad extends Component {
        constructor(options: Partial<PadProps>);
    }
}
