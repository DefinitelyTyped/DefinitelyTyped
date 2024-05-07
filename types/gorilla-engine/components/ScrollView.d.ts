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
    // tslint:disable-next-line:no-empty-interface
    interface ScrollView extends ScrollViewProps {}
}
