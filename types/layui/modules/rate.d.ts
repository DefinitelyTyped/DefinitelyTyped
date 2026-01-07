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

    class RateClass extends Component<RateOptions> {
        elemTemplate: JQuery<HTMLElement>;
        action(...args: any[]): any;
    }

    interface RateReturn extends ComponentReturn<RateOptions> {
        /**
         * 设置当前评分值
         * @param value 评分值
         */
        setValue(value: number): void;
    }

    /**
     * 评分
     * @see https://layui.dev/docs/2/rate/
     * @since 2.11.0 后继承自 Component 组件
     */
    interface Rate extends ComponentInterface<RateOptions, RateClass, RateReturn> {
        /**
         * 核心渲染方法
         * @param option 基础选项
         */
        render(option: RateOptions): RateReturn;
        /**
         * 组件常量集
         * @since 2.11.0
         */
        CONST: {
            ELEM: string;
            ICON_RATE: string;
            ICON_RATE_SOLID: string;
            ICON_RATE_HALF: string;
            ICON_SOLID_HALF: string;
            ICON_SOLID_RATE: string;
            ICON_HALF_RATE: string;
        } & ComponentInterface<RateOptions, RateClass, RateReturn>["CONST"];
    }
}
