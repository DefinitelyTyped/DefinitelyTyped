declare namespace GorillaEngine.UI {
    interface LabelProps extends Common, Bounds, Background, Font, Clickable {
        text: string | number;
        format: string;
    }

    /**
     * Use a Label to...
     */
    export class Label extends Component {
        constructor(options: Partial<LabelProps>);
    }
    interface Label extends LabelProps {}
}
