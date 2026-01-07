declare namespace GorillaEngine.UI {
    interface MidiKeyboardKeys {
        /**
         * The color of the black keys.
         */
        blackColor: string;
        /**
         * The color of the black keys when hovered.
         */
        blackHoverColor: string;
        /**
         * The color of the black keys when pressed.
         */
        blackPressedColor: string;
        /**
         * The outline color of the black keys.
         */
        blackOutlineColor: string;
        /**
         * The outline color of the black keys when hovered.
         */
        blackOutlineHoverColor: string;
        /**
         * The outline color of the black keys when pressed.
         */
        blackOutlinePressedColor: string;
        /**
         * The color of the white keys.
         */
        whiteColor: string;
        /**
         * The color of the white keys when hovered.
         */
        whiteHoverColor: string;
        /**
         * The color of the white keys when pressed.
         */
        whitePressedColor: string;
        /**
         * The outline color of the white keys.
         */
        whiteOutlineColor: string;
        /**
         * The outline color of the white keys when hovered.
         */
        whiteOutlineHoverColor: string;
        /**
         * The outline color of the white keys when pressed.
         */
        whiteOutlinePressedColor: string;
        /**
         * The height of the white keys.
         */
        whiteHeight: number;
        /**
         * The height of the black keys.
         */
        blackHeight: number;
        /**
         * TODO::Doesnt work, The width of the white keys.
         */
        whiteWidth: number;
        /**
         * TODO:: The width of the black keys.
         */
        blackWidth: number;
        /**
         * TODO:: The width of the black keys apparently.
         */
        width: number;
        /**
         * The spacing between the keys
         */
        spacing: number;
        /**
         * The width of the outline around the keys.
         */
        outlineWidth: number;
        /**
         * The corner radius of the keys.
         */
        cornerRadius: number;
    }

    interface MidiKeyboardProps extends Common, Bounds, Background {
        /**
         * The first key to display on the keyboard, value derived from midi mapping.
         */
        lowKey: number;
        /**
         * The last key to display on the keyboard, value derived from midi mapping.
         */
        highKey: number;

        disableNKSColors: boolean;
        /**
         * The configuration for the keys of the keyboard.
         */
        keys: Partial<MidiKeyboardKeys>;
    }

    // tslint:disable-next-line:no-empty-interface
    interface MidiKeyboard extends MidiKeyboardProps {}

    class MidiKeyboard extends Component {
        constructor(props: Partial<MidiKeyboardProps>);
    }
}
