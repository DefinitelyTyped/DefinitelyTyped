declare namespace GorillaEngine.UI {
    interface TriggerProps extends Common, Bounds, Font, Clickable, Background, KeyboardFocus, Keyable {
        text: string;
        isDumb: boolean;
        images: {
            normal?: string;
            hover?: string;
            down?: string;
        };
        animation: LottieAnimation;
    }
    // tslint:disable-next-line:no-empty-interface
    interface Trigger extends TriggerProps {}
    class Trigger extends Component {
        constructor(options: Partial<TriggerProps>);
    }
}
