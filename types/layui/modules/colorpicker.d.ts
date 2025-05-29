declare namespace Layui {
    interface ColorPickerOptions {
        /**
         * 绑定元素选择器或 DOM 对象
         */
        elem: string | HTMLElement | JQuery;
        /**
         * 默认颜色值，值的格式跟随 format 属性的设定
         */
        color?: string;
        /**
         * 颜色显示/输入格式，支持
         * - `hex`
         * - `rgb`。
         *
         * 若同时开启 alpha 属性，则颜色值自动变为 rgba
         * @default 'hex'
         */
        format?: "hex" | "rgb" | "rgba";
        /**
         * 是否开启透明度。当同时开启 format: 'rgb' 时，color 值将采用 rgba 格式
         * @default false
         */
        alpha?: boolean;
        /**
         * 是否开启预定义颜色栏
         */
        predefine?: boolean;
        /**
         * 预定义颜色，此参数需配合 {@link predefine|`predefine:true`} 使用
         * @example
         * ```js
         * colorpicker.render({
         *   elem: '#ID-colorpicker-demo-predefine-2',
         *   color: '#9d8a0e',
         *   predefine: true, // 开启预定义颜色
         *   colors: ['#ff8c00','#00ced1','#9d8a0e'] //自定义预定义颜色项
         * });
         * ```
         */
        colors?: Array<string>;
        /**
         * 下拉框大小
         * @default 'sm'
         */
        size?: "lg" | "sm" | "xs";
        /**
         * 颜色被改变的回调
         * @param color 当前颜色值
         */
        change?(this: ColorPickerOptions, color: string): void;
        /**
         * 颜色选择完毕的回调函数。点击“确认”和“清除”按钮均会触发
         * @param color 当前选中的颜色值
         */
        done?(this: ColorPickerOptions, color: string): void;
        /**
         * 取消颜色选择的回调函数
         * @param value 当前颜色值
         * @since 2.8.0
         */
        cancel?(this: ColorPickerOptions, color: string): void;
        /**
         * 颜色选择面板被关闭触发的回调函数
         * @param value 当前颜色值
         * @since 2.8.0
         */
        close?(this: ColorPickerOptions, color: string): void;
    }

    /**
     * 颜色选择器
     * @see https://layui.dev/docs/2/colorpicker/
     */
    interface ColorPicker {
        config: Record<string, any>;
        index: number;
        /**
         * colorpicker 组件渲染方法
         * @param option 属性选项
         */
        render(option: ColorPickerOptions): ColorPicker;
        /**
         * 全局设置
         * @param option 属性选项
         */
        set(option: ColorPickerOptions): ColorPicker;
        /**
         * 绑定切换事件
         * @param event 事件名
         * @param callback 回调函数
         */
        on(event: string, callback: (this: Layui, params: any) => any): any;
    }
}
