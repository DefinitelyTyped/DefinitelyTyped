interface ViewPager<T = unknown> extends HummerComponent {
    style: import('../interface/style').viewPagerStyle;
    data: T[];
    /**
     * @summary set display item index
     * @param index displayed item index
     */
    setCurrentItem(index: number): void;
    /**
     * @summary cb when item changed
     * @param cb cb function, with current item index, and total item count with param
     */
    onPageChange(cb: (currentIndex: number, total: number) => void): void;
    /**
     * @summary cb when item been clicked
     * @param cb cb function, with item index as param
     */
    onItemClick(cb: (index: number) => void): void;
    onItemView(cb: (currentIndex: number, view: undefined | HummerComponent) => HummerComponent): void;
}
declare const ViewPager: {
    prototype: ViewPager;
    new <T>(): ViewPager<T>;
};
