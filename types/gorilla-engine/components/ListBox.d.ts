declare namespace GorillaEngine.UI {
    interface ListBoxProps extends Common, Bounds, Font, Clickable, Background, Scrollable, Highlight, MIDILearn {
        /**
         * The items displayed in the list box.
         */
        items?: string[];
        /**
         * The horizontal margin of the item inside the list box.
         */
        horizontalMargin?: number;
        /**
         * The bakcground color of the items in the list box.
         */
        cellColor?: string;
        /**
         * The background color of the selected item in the list box.
         */
        cellColorSelected?: string;
        /**
         * The text color of the item in the list box.
         */
        textColorSelected?: string;
        /**
         * The action to perform when a row is double clicked.
         */
        rowDoubleClickedAction?: string;
        /**
         * The action to perform when the return key is clicked.
         */
        returnKeyAction?: string;
        /**
         * The action to perform when a row is clicked.
         */
        rowClickedAction?: string;
    }

    // tslint:disable-next-line:no-empty-interface
    interface ListBox extends ListBoxProps {}
    class ListBox extends Component {
        constructor(options: Partial<ListBoxProps>);
    }
}
