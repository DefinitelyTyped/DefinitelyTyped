declare namespace GorillaEngine.UI {
    interface MidiKeyboardKeys {
        blackColor: string;
        blackHoverColor: string;
        blackPressedColor: string;
        blackOutlineColor: string;
        blackOutlineHoverColor: string;
        blackOutlinePressedColor: string;
        whiteColor: string;
        whiteHoverColor: string;
        whitePressedColor: string;
        whiteOutlineColor: string;
        whiteOutlineHoverColor: string;
        whiteOutlinePressedColor: string;
        whiteHeight: number;
        blackHeight: number;
        whiteWidth: number;
        blackWidth: number;
        width: number;
        spacing: number;
        outlineWidth: number;
        cornerRadius: number;
    }

    interface MidiKeyboardProps extends Common, Bounds, Background {
        lowKey: number;
        highKey: number;
        disableNKSColors: boolean;
        keys: Partial<MidiKeyboardKeys>;
    }

    interface MidiKeyboard extends MidiKeyboardProps {}

    class MidiKeyboard extends Component {
        constructor(props: Partial<MidiKeyboardProps>);
    }
}
