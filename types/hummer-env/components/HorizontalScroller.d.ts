interface HorizontalScroller extends HummerComponent, ContainerComponent {
    showScrollBar: boolean;
    bounces: boolean;
    scrollTo(x: number, y: number): void;
    scrollBy(dx: number, dy: number): void;
    scrollToTop(): void;
    scrollToBottom(): void;
    setOnScrollToTopListener(cb: () => void): void;
    setOnScrollToBottomListener(cb: () => void): void;
}
declare const HorizontalScroller: {
    prototype: HorizontalScroller;
    new (): HorizontalScroller;
};
