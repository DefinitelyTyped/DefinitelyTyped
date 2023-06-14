declare namespace GorillaEngine.UI {
    interface LabelProps extends Common, Bounds, Background, Font, Clickable {
        text: string | number;
        format: string;
        multiLine: boolean;
    }

    /**
     * Use a Label to...
     */
    class Label extends Component {
        constructor(options: Partial<LabelProps>);
    }
    interface Label extends LabelProps {}
}
