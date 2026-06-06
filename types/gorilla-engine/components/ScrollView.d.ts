declare namespace GorillaEngine.UI {
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
        /** TODO:: No idea if this is correct
         * If true, the scroll view will ignore keypress events.
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

    class ScrollView extends Component {
        constructor(options: Partial<ScrollViewProps>);
    }
    // tslint:disable-next-line:no-empty-interface
    interface ScrollView extends ScrollViewProps {}
}
