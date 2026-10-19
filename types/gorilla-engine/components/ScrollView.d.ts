declare namespace GorillaEngine.UI {
    /** Properties and scrolling methods for a viewport containing child components. */
    interface ScrollViewProps extends Common, Bounds, Scrollable {
        /**
         * The thickness of the scrollbar in pixels.
         */
        scrollbarThickness: number;
        /**
         * Hides the vertical scrollbar.
         * @default false
         */
        hideVerticalScrollbar: boolean;
        /**
         * Hides the horizontal scrollbar.
         * @default false
         */
        hideHorizontalScrollbar: boolean;
        /**
         * Whether the scroll view declines keyboard input instead of handling it for scrolling.
         * @default false
         */
        ignoreKeypressEvent: boolean;
        /**
         * Scrolls the child at the given index into view.
         * @param childIndex The index of the child to scroll into view.
         */
        scrollChildIntoView(childIndex: number): void;
        /**
         * Sets the scroll position of the view.
         * @param xPos The horizontal scroll position in pixels.
         * @param yPos The vertical scroll position in pixels.
         */
        setScrollPositionProportionately(xPos: number, yPos: number): void;
    }

    /** A scrollable viewport for child components. */
    class ScrollView extends Component {
        constructor(options: Partial<ScrollViewProps>);
    }
    // tslint:disable-next-line:no-empty-interface
    interface ScrollView extends ScrollViewProps {}
}
