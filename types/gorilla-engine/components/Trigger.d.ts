declare namespace GorillaEngine.UI {
    export interface TriggerProps extends Common, Bounds, Font, Clickable, Background, KeyboardFocus {
        text: string;
        images: {
            normal?: string;
            hover?: string;
            down?: string;
        };
        animation: LottieAnimation;
    }

    export interface Trigger extends TriggerProps {}
    export class Trigger extends Component {
        constructor(options: Partial<TriggerProps>);
    }
}
