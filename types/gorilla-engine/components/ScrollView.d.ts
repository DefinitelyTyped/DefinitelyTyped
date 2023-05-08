declare namespace GorillaEngine.UI {
    interface ScrollViewProps extends Common, Bounds, Scrollable {
        scrollbarThickness: number;
        hideVerticalScrollbar: boolean;
        hideHorizontalScrollbar: boolean;
    }

    class ScrollView extends Component {
        constructor(options: Partial<ScrollViewProps>);
    }
    interface ScrollView extends ScrollViewProps {}
}
