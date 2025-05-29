declare namespace Layui {
    interface RateOptions {
        /**
         * 绑定元素选择器或 DOM 对象
         */
        elem: string | HTMLElement | JQuery;
        /**
         * 评分的最大长度值，即星星的数量
         * @default 5
         */
        length?: number;
        /**
         * 评分的初始值
         * @default 0
         */
        value?: number;
        /**
         * 主题色
         * @default '#FFB800'
         */
        theme?: string;
        /**
         * 设定组件是否可以选择半星
         * @default false
         */
        half?: boolean;
        /**
         * 是否显示评分对应的内容
         * @default false
         */
        text?: boolean;
        /**
         * 是否只读，即只用于展示而不可点
         * @default false
         */
        readonly?: boolean;
        /**
         * 自定义文本的回调
         * @param value 选中的评分值
         */
        setText?(value: number): void;
        /**
         * 选择评分后的回调函数
         * @param value 选中的评分值
         */
        choose?(value: number): void;
    }

    /**
     * 评分
     * @see https://layui.dev/docs/2/rate/
     */
    interface Rate {
        config: Record<string, any>;
        index: number;
        /**
         * @param event
         * @param callback
         */
        on(event: string, callback: (obj: any) => any): any;
        /**
         * 核心渲染方法
         * @param option 基础选项
         */
        render(option: RateOptions): Rate;
        /**
         * 设置全局参数
         * @param options 基础参数
         */
        set(options?: RateOptions): Rate;
    }
}
