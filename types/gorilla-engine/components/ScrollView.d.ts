declare namespace GorillaEngine.UI {
    interface ScrollViewProps extends Common, Bounds, Scrollable {
        scrollbarThickness: number;
        hideVerticalScrollbar: boolean;
        hideHorizontalScrollbar: boolean;
        ignoreKeypressEvent: boolean;
        scrollChildIntoView(childIndex: number): void;
        setScrollPositionProportionately(xPos: number, yPos: number): void;
    }

    class ScrollView extends Component {
        constructor(options: Partial<ScrollViewProps>);
    }
    interface ScrollView extends ScrollViewProps {}
}
