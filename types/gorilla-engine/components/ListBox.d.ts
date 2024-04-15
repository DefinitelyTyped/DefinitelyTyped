declare namespace GorillaEngine.UI {
    interface ListBoxProps extends Common, Bounds, Font, Clickable, Background, Scrollable, Highlight, MIDILearn {
        items?: string[];
        horizontalMargin?: number;
        cellColor?: string;
        cellColorSelected?: string;
        textColorSelected?: string;
        rowDoubleClickedAction?: string;
        returnKeyAction?: string;
        rowClickedAction?: string;
    }

    // tslint:disable-next-line:no-empty-interface
    interface ListBox extends ListBoxProps {}
    class ListBox extends Component {
        constructor(options: Partial<ListBoxProps>);
    }
}
