declare namespace Layui {
    interface SliderOptions {
        /**
         * 绑定元素选择器或 DOM 对象
         */
        elem: string | HTMLElement | JQuery;
        /**
         * 滑块类型
         * @default 'default'
         */
        type?: "default" | "vertical";
        /**
         * 滑动条最小值
         * @default 0
         */
        min?: number;
        /**
         * 滑动条最大值
         * @default 100
         */
        max?: number;
        /**
         * 是否开启滑块的范围拖拽，若设为 true，则滑块将出现两个可拖拽的环
         * @default false
         */
        range?: boolean;
        /**
         * 滑块初始值。
         * - 默认可直接设置数值，如： value: 50
         * - 若滑块开启 range: true 区间选择，则值为数组，异表示开始和结尾的区间，如： value: [30, 60]
         */
        value?: MaybeArray<number>;
        /**
         * 拖动的步长
         * @default 1
         */
        step?: number;
        /**
         * 是否显示间断点
         * @default false
         */
        showstep?: boolean;
        /**
         * 是否显示文字提示
         * @default true
         */
        tips?: boolean;
        /**
         * 是否显示滑块的数字输入框。 注：若设置 range: true 则该属性强制无效。
         */
        input?: boolean;
        /**
         * 滑动条高度，需配合 `type:"vertical"` 参数使用
         * @default 200
         */
        height?: number;
        /**
         * 是否将滑块禁用拖拽
         * @default false
         */
        disabled?: boolean;
        /**
         * 主题颜色
         */
        theme?: string;
        /**
         * 是否始终显示提示文本
         * @since 2.9.6
         */
        tipsAlways?: boolean;
        /**
         * 自定义提示文本
         * @param value 滑块为范围模式是数组，否则是数字
         */
        setTips?(value: MaybeArray<number>): string;
        /**
         * 数值改变的回调
         * @param value 滑块为范围模式是数组，否则是数字
         */
        change?(value: MaybeArray<number>): void;
        /**
         * 滑块拖拽完毕的回调函数，滑块拖动过程中不会触发
         * @param value 滑块为范围模式是数组，否则是数字
         * @since 2.8.0
         */
        done?(value: MaybeArray<number>): void;
    }

    /**
     * 滑块
     * @see https://layui.dev/docs/2/slider/
     */
    interface Slider {
        config: Record<string, any>;
        index: number;
        /**
         * 设置滑块的全局参数
         * @param options 基础参数
         */
        set(options?: Partial<SliderOptions>): Slider;
        on(event: string, callback: (obj: any) => any): any;
        /**
         * 核心方法
         * @param option 参数
         * @since 2.8.0+ 除 elem 属性外，其他基础属性也可以直接写在元素的 `lay-options="{}"` 属性中
         */
        render(option: SliderOptions): {
            config: Required<SliderOptions>;
            /**
             * 改变指定滑块实例的数值
             * @param value 要设置的滑块数值
             * @param index 滑块所在的区间开始值或结尾值的索引，开始值：0 ; 结尾值：1
             */
            setValue(value: any, index?: number): void;
        };
    }
}
