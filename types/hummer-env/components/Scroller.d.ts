interface Scroller extends HummerComponent, ContainerComponent {
    refreshView: HummerComponent;
    loadMoreView: HummerComponent;
    onRefresh: (state: number) => void;
    onLoadMore: (state: number) => void;
    showScrollBar: boolean;
    bounces: boolean;
    scrollTo(x: number, y: number): void;
    scrollBy(dx: number, dy: number): void;
    scrollToTop(): void;
    scrollToBottom(): void;
    setOnScrollToTopListener(cb: () => void): void;
    setOnScrollToBottomListener(cb: () => void): void;
    stopPullRefresh(): void;
    /**
     * stop loadmore
     * @param enable can able to trigger next loadmore or not
     */
    stopLoadMore(enable: boolean): void;
}
declare const Scroller: {
    prototype: Scroller;
    new (): Scroller;
};
