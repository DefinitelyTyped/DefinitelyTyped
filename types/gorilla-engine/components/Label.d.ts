declare namespace GorillaEngine.UI {
    /**
     * Properties for a read-only text label.
     */
    interface LabelProps extends Common, Bounds, Background, Font, Clickable, Margin, Keyable {
        /**
         * The initial text to display in the label. Doesn't update at runtime.
         */
        value: any;
        /**
         * The text to display in the label. Updates at runtime.
         */
        text: string | number;
        /** Format string applied to the displayed value. */
        format: string;
        /** Whether the label can display multiple lines of text. */
        multiLine: boolean;
        /** Whether the text is scaled to fit the label's bounds. */
        stretchText: boolean;
    }

    /**
     * A read-only control for displaying text or formatted values.
     */
    class Label extends Component {
        constructor(options: Partial<LabelProps>);
    }
    // tslint:disable-next-line:no-empty-interface
    interface Label extends LabelProps {}
}
