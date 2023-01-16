declare namespace GorillaEngine.UI {
    interface TriggerProps extends Common, Bounds, Font, Clickable, Background, KeyboardFocus {
        text: string;
        images: {
            normal?: string;
            hover?: string;
            down?: string;
        };
        animation: LottieAnimation;
    }

    interface Trigger extends TriggerProps {}
    class Trigger extends Component {
        constructor(options: Partial<TriggerProps>);
    }
}
