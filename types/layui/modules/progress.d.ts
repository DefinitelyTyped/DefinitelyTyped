declare namespace Layui {
    interface ProgressOptions {
        /**
         * 组件渲染指定的目标元素选择器或 DOM 对象
         */
        elem: string | HTMLElement | JQuery;
    }

    // eslint-disable-next-line @typescript-eslint/no-empty-interface
    class ProgressClass extends Component<ProgressOptions> {
    }
    // eslint-disable-next-line @typescript-eslint/no-empty-interface
    interface ProgressReturn extends ComponentReturn<ProgressOptions> {
    }

    interface Progress extends ComponentInterface<ProgressOptions, ProgressClass, ProgressReturn> {
        /**
         * 渲染进度条组件
         * @param options 进度条组件的配置选项
         */
        render(options: ProgressOptions): ProgressReturn;
        /**
         * 用于动态改变进度条百分比
         * @param filter 对应进度条容器 lay-filter 的属性值
         * @param percent 比例，百分比字符串，例如：'30%'、'50%'
         */
        setValue(filter: string, percent: string): this;
    }
}
