declare namespace GorillaEngine.UI {
    interface PadProps extends Common, Bounds, Background, KeyboardFocus, Clickable, Skinnable, Font {
        midiNote: number;
        velocity: number;
        padState: boolean;
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
