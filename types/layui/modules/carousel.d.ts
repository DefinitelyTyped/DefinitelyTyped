declare namespace Layui {
    interface CarouselOptions {
        /**
         * 指向容器选择器，如：elem: '#id'，也可以是 DOM 对象
         */
        elem: string | HTMLElement | JQuery;
        /**
         * 设定轮播容器宽度，支持像素和百分比
         * @default '600px'
         */
        width?: string;
        /**
         * 设定轮播容器高度，支持像素和百分比
         * @default '280px'
         */
        height?: string;
        /**
         * 是否全屏轮播
         * @default false
         */
        full?: boolean;
        /**
         * 轮播切换动画方式
         * - `default` 左右切换
         * - `updown` 上下切换
         * - `fade` 渐隐渐显切换
         * @default 'default'
         */
        anim?: "default" | "updown" | "fade";
        /**
         * 是否自动切换
         * - `true` 自动滚动，鼠标移入会暂停、移出重新恢复
         * - `false` 不自动滚动
         * - `alway` 始终自动滚动，不受鼠标移入移出影响（2.7.0）
         * @default true
         */
        autoplay?: boolean | "always";
        /**
         * 自动切换的时间间隔，单位：ms（毫秒），不能低于 800
         * @default 3000
         */
        interval?: number;
        /**
         * 初始开始的条目索引
         * @default 0
         */
        index?: number;
        /**
         * 切换箭头默认显示状态
         * - `hover` 悬停显示
         * - `always` 始终显示
         * - `none` 始终不显示
         * @default 'hover'
         */
        arrow?: "hover" | "always" | "none";
        /**
         * 指示器位置
         * - `inside` 容器内部
         * - `outside` 容器外部
         * - `none` 不显示
         *
         * 如果设定了 anim: 'updown'，则 indicator 参数的 outside 值无效
         * @default 'inside'
         */
        indicator?: "insider" | "outsider" | "none";
        /**
         * 指示器的触发事件
         * @default 'click'
         */
        trigger?: string;
        /**
         * 轮播切换后的回调函数
         * @param obj 轮播条目对象
         * @since 2.7.0
         */
        change?(obj: CarouselItem): void;
    }

    interface CarouselItem {
        /**
         * 当前条目的索引
         */
        index: number;
        /**
         * 上一个条目的索引
         */
        prevIndex: number;
        /**
         * 当前条目的元素对象
         */
        item: JQuery;
    }

    interface CarouselClass {
        /**
         * 配置属性
         */
        config: Required<CarouselOptions>;
        /**
         * @internal
         */
        elemItem: JQuery;
        /**
         * @internal
         */
        timer: number;
        /**
         * @internal
         */
        haveSlider: boolean;
        /**
         * @internal
         */
        elemInd: JQuery;
        /**
         * 轮播渲染
         * @internal
         */
        render(): void;
        /**
         * 获取上一个等待条目的索引
         * @internal
         */
        prevIndex(): number;
        /**
         * 获取下一个等待条目的索引
         * @internal
         */
        nextIndex(): number;
        /**
         * 手动递增索引值
         * @internal
         */
        addIndex(num: number): void;
        /**
         * 手动递减索引值
         * @internal
         */
        subIndex(num: number): void;
        /**
         * 自动轮播
         * @internal
         */
        autoplay(): void;
        /**
         * 箭头
         * @internal
         */
        arrow(): void;
        /**
         * 指示器
         * @internal
         */
        indicator(): void;
        /**
         * 滑动切换 type ：sub 减，其他增
         * @internal
         */
        slide(type: string, num: number): void;
        /**
         * 事件处理
         * @internal
         */
        events(): void;
        /**
         * 重置轮播
         * @param options 基础参数
         */
        reload(options?: Partial<CarouselOptions>): void;
        /**
         * 切换到指定的索引
         * @param index 轮播下标，从 0 开始计算
         * @since 2.8.0
         */
        goto(index: number): void;
    }

    /**
     * 轮播
     * @see https://layui.dev/docs/2/carousel/
     */
    interface Carousel {
        config: Required<CarouselOptions>;
        /**
         * 渲染方法
         * @param options 基础参数
         * @return 实例对象，包含操作当前实例的相关成员方法
         */
        render(options: CarouselOptions): CarouselClass;
        /**
         * 绑定切换事件
         * @param event  事件
         * @param callback  回调
         */
        on(event: string, callback: (this: CarouselClass, obj: CarouselItem) => any): any;
        /**
         * 设置轮播组件的全局参数
         * @param options 基础参数
         */
        set(options: Partial<CarouselOptions>): this;
    }
}
