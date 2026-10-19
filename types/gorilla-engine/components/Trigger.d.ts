declare namespace GorillaEngine.UI {
    /**
     * Properties for a momentary button that invokes an action when clicked.
     */
    interface TriggerProps extends Common, Bounds, Font, Clickable, Background, KeyboardFocus, Keyable {
        /** Text displayed on the button. */
        text: string;
        /** Whether the button omits its normal pressed-state behavior. */
        isDumb: boolean;
        /** Images used for the button's interaction states. */
        images: {
            /** Image displayed in the normal state. */
            normal?: string;
            /** Image displayed while the pointer is over the button. */
            hover?: string;
            /** Image displayed while the button is pressed. */
            down?: string;
        };
        /** Lottie animation associated with the button. */
        animation: LottieAnimation;
    }
    // tslint:disable-next-line:no-empty-interface
    interface Trigger extends TriggerProps {}
    /**
     * A momentary button that invokes an action when clicked.
     */
    class Trigger extends Component {
        constructor(options: Partial<TriggerProps>);
    }
}
