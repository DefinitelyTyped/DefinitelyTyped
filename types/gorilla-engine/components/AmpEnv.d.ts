declare namespace GorillaEngine.UI {
    interface AmpItem {
        color: string;
        size: number;
        cornerRadius: number;
        value: number;
        "value&": any;
        visible: boolean;
        imagePath: string;
        text: string;
        textColor: string;
    }

    interface AmpEnvProps extends Common, Bounds, Background, Font {
        attack: Partial<AmpItem>;
        decay: Partial<AmpItem>;
        sustain: Partial<AmpItem>;
        release: Partial<AmpItem>;
        curve: Partial<{
            color: string;
            thickness: number;
        }>;
    }

    interface AmpEnv extends AmpEnvProps {}
    class AmpEnv extends Component {
        constructor(options: Partial<AmpEnvProps>);
    }
}
