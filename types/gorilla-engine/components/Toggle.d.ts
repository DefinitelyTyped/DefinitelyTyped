declare namespace GorillaEngine.UI {
    interface ToggleProps extends Common, Bounds, Font, Clickable, Background, Highlight, MIDILearn, Margin {
        /**
         * The text displayed next to the toggle.
         */
        text: string;
        /**
         * The background color of the toggle when it is on.
         */
        onColor: string;
        /**
         * The background color of the toggle when it is off.
         */
        offColor: string;
        /**
         * The background color of the toggle when it is on and hovered.
         */
        onColorHover: string;
        /**
         * The background color of the toggle when it is off and hovered.
         */
        offColorHover: string;
        /**
         * The text color of the toggle when it is on.
         */
        textColorOn: string;
        /**
         * The text color of the toggle when it is off.
         */
        textColorOff: string;
        /**
         * The text color of the toggle when it is on and hovered.
         */
        textColorOnHover: string;
        /**
         * The text color of the toggle when it is off and hovered.
         */
        textColorOffHover: string;
        /**
         * The image of the toggle when it is on.
         */
        onImage: string;
        /**
         * The image of the toggle when it is on and pressed.
         */
        onImagePressed: string;
        /**
         * The image of the toggle when it is on and hovered.
         */
        onImageHovered: string;
        /**
         * The image of the toggle when it is off.
         */
        offImage: string;
        /**
         * The image of the toggle when it is off and pressed.
         */
        offImagePressed: string;
        /**
         * The image of the toggle when it is off and hovered.
         */
        offImageHovered: string;
        /**
         * The image of the toggle when it is disabled.
         */
        disabledImage: string;
        /**
         * The radio index of the toggle
         */
        radioIndex: number;
        /**
         * The radio value of the toggle. If it maches radioIndex, the toggle will be on.
         */
        radioValue: number;
        /**
         * If true, the toggle will draw a tick box to toggle.
         */
        drawTick: boolean;
        /**
         * Adjusts font size to fit the text within the toggle's bounds.
         */
        fitToText: boolean;
        /**
         * The value of the toggle.
         */
        value: boolean;
        /**
         * The lottie animation to play when the toggle is interacted with.
         */
        animation: LottieAnimation;
    }
    // tslint:disable-next-line:no-empty-interface
    interface Toggle extends ToggleProps {}
    class Toggle extends Component {
        constructor(options: Partial<ToggleProps>);
    }
}
