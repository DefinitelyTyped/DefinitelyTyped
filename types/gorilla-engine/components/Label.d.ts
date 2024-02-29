declare namespace GorillaEngine.UI {
    interface LabelProps extends Common, Bounds, Background, Font, Clickable, Margin, Keyable {
        value: any;
        text: string | number;
        format: string;
        multiLine: boolean;
        stretchText: boolean;
    }

    /**
     * Use a Label to...
     */
    class Label extends Component {
        constructor(options: Partial<LabelProps>);
    }
    // tslint:disable-next-line:no-empty-interface
    interface Label extends LabelProps {}
}
