declare namespace GorillaEngine.UI {
    interface LabelProps extends Common, Bounds, Background, Font, Clickable, Margin, Keyable {
        /**
         * The initial text to display in the label. Doesn't update at runtime.
         */
        value: any;
        /**
         * The text to display in the label. Updates at runtime.
         */
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
