interface Scroller extends HummerComponent, ContainerComponent {
    /**
     * 下拉刷新时展示的视图
     */
    refreshView: HummerComponent;
    /**
     * 上拉加载更多时展示的视图
     */
    loadMoreView: HummerComponent;
    /**
     * 下拉刷新时触发的回调 state取值：0: 初始状态/结束刷新 1: 开始下拉 2: 正在刷新
     */
    onRefresh: (state: number) => void;
    /**
     * 上拉加载时触发的回调 state取值：0: 初始状态/结束加载 1: 正在加载 2: 无更多数据
     */
    onLoadMore: (state: number) => void;
    /**
     * 滑动时是否显示滚动条 默认false
     */
    showScrollBar: boolean;
    /**
     * 滑动到边缘时是否有回弹效果 默认 true
     */
    bounces: boolean;
    /**
     * 滚动到指定坐标（单位：dp/pt/hm/px）
     */
    scrollTo(x: number, y: number): void;
    /**
     * 滚动一定距离（单位：dp/pt/hm/px）
     */
    scrollBy(dx: number, dy: number): void;
    /**
     * 滚动到顶部
     */
    scrollToTop(): void;
    /**
     * 滚动到底部
     */
    scrollToBottom(): void;
    /**
     * 滚动到顶部事件监听
     */
    setOnScrollToTopListener(cb: () => void): void;
    /**
     * 滚动到底部事件监听
     */
    setOnScrollToBottomListener(cb: () => void): void;
    /**
     * 结束下拉刷新
     */
    stopPullRefresh(): void;
    /**
     * stop loadmore
     * @param enable can able to trigger next loadmore or not
     */
    stopLoadMore(enable: boolean): void;
}
declare const Scroller: {
    prototype: Scroller;
    /**
     * 垂直滚动组件。
     */
    new (): Scroller;
};
