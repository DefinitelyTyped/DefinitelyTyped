interface List extends HummerComponent {
    style: ListStyle;
    /**
     * @param index position of item
     * @returns type of item, must be a number
     */
    onRegister: (index: number) => number;
    /**
     * @param type: item type, is the return from onRegister
     * @returns component to be display
     */
    onCreate: (type: number) => HummerComponent;
    /**
     * @param index position of item
     * @param cell componet
     */
    onUpdate: (index: number, cell: HummerComponent) => void;
    /**
     * @summary cb when on pulldown refresh
     * @param state 0: init/end 1: start pulldown 2: refreshing
     */
    onRefresh: (state: 0 | 1 | 2) => void;
    /**
     * @summary cb when on pullup refresh
     * @param state 0: init/end 1: loading 2: no more data
     */
    onLoadMore: (state: 0 | 1 | 2) => void;
    /**
     * @summary the component to be displayed when pulldown refresh
     */
    refreshView: HummerComponent;
    /**
     * @summary the component to be displayed when pullup refresh
     */
    loadMoreView: HummerComponent;
    /**
     * @summary is show scrollbar default: false
     */
    showScrollBar: boolean;
    /**
     * @summary is enable bounces default: true
     */
    bounces: boolean;

    // methods
    /**
     * @summary refresh list
     * @param count number of items
     */
    refresh(count: number): void;
    /**
     * @summary scroll to the nth item
     * @param position : the index to be scrolled;
     */
    scrollToPosition(position: number): void;
    /**
     * @summary scroll to coordinate
     * @param x x coordinate
     * @param y y coordinate
     */
    scrollTo(x: number, y: number): void;
    /**
     * @summary scroll by relative distance
     * @param dx x distance
     * @param dy y distance
     */
    scrollBy(dx: number, dy: number): void;
    /**
     * @summary stop pull refresh
     */
    stopPullRefresh(): void;
    /**
     * @param enable can trigger loadmore or not next time
     */
    stopLoadMore(enable: boolean): void;
}
declare const List: {
    prototype: List;
    /**
     * 列表组件。
     */
    new (): List;
};
