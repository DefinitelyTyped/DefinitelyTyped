declare namespace GorillaEngine.UI {
    interface ToggleProps extends Common, Bounds, Font, Clickable, Background, Highlight, MIDILearn, Margin {
        text: string;
        onColor: string;
        offColor: string;
        onColorHover: string;
        offColorHover: string;
        textColorOn: string;
        textColorOff: string;
        textColorOnHover: string;
        textColorOffHover: string;
        onImage: string;
        onImagePressed: string;
        onImageHovered: string;
        offImage: string;
        offImagePressed: string;
        offImageHovered: string;
        disabledImage: string;
        radioIndex: number;
        radioValue: number;
        drawTick: boolean;
        fitToText: boolean;
        value: boolean;
        animation: LottieAnimation;
    }
    interface Toggle extends ToggleProps {}
    class Toggle extends Component {
        constructor(options: Partial<ToggleProps>);
    }
}
