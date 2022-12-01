declare namespace GorillaEngine.UI {
    export interface ListBoxProps extends Common, Bounds, Font, Clickable, Background, Scrollable {
        //, MIDILearn
        items?;
        horizontalMargin?: number;
        cellColor?;
        cellColorSelected?;
        textColorSelected?;
        rowDoubleClickedAction?;
        returnKeyAction?;
        rowClickedAction?;
    }

    export interface ListBox extends ListBoxProps {}
    export class ListBox extends Component {
        constructor(options: Partial<ListBoxProps>);
    }
}
