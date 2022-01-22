interface ViewPager extends HummerComponent {
    style: ViewPagerStyle;
    /**
     * 数据源（不设置自定义View时，可以直接传图片url数组作为数据源）
     */
    data: any[];
    /**
     * 设置当前显示的页面
     *
     * @param index 当前显示页面的位置
     */
    setCurrentItem(index: number): void;
    /**
     * 设置ViewPager翻页时的回调
     *
     * @param callback 回调。参数：currentIndex:当前位置； total:item总个数
     */
    onPageChange(cb: (currentIndex: number, total: number) => void): void;
    /**
     * 设置ViewPager页面被点击的回调
     *
     * @param callback 回调。参数：参数index:页面的位置
     */
    onItemClick(cb: (index: number) => void): void;
    /**
     * 设置ViewPager页面自定义View创建和更新的回调
     *
     * @param callback 回调。参数position:当前位置；view:当前控件，当view为null时说明要创建view。最后返回view。
     */
    onItemView(cb: (currentIndex: number, view: undefined | HummerComponent) => HummerComponent): void;
}
declare const ViewPager: {
    prototype: ViewPager;
    /**
     * 可自动轮播滚动的翻页组件。
     */
    new (): ViewPager;
};
