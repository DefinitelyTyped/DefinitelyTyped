declare namespace GorillaEngine.UI {
    interface ListBoxProps extends Common, Bounds, Font, Clickable, Background, Scrollable {
        items?: string[];
        horizontalMargin?: number;
        cellColor?: string;
        cellColorSelected?: string;
        textColorSelected?: string;
        rowDoubleClickedAction?: string;
        returnKeyAction?: string;
        rowClickedAction?: string;
    }

    interface ListBox extends ListBoxProps {}
    class ListBox extends Component {
        constructor(options: Partial<ListBoxProps>);
    }
}
