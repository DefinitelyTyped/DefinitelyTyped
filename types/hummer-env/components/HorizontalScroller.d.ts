interface HorizontalScroller extends HummerComponent, ContainerComponent {
    /**
     * @summary 是否展示滚动条, 默认 false
     */
    showScrollBar: boolean;
    /**
     * @summary 滑动到边缘时是否有回弹效果 默认 true
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
}
declare const HorizontalScroller: {
    prototype: HorizontalScroller;
    /**
     * 水平滚动组件。
     */
    new (): HorizontalScroller;
};
