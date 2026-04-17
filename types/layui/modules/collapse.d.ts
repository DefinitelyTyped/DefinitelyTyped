declare namespace Layui {
    interface CollapseOptions {
        /**
         * 组件渲染指定的目标元素选择器或 DOM 对象
         */
        elem: string | HTMLElement | JQuery;
    }

    interface CollapseEventMap {
        /**
         * 折叠面板点击事件
         * @param data 事件对象
         * - `title` 折叠面板标题元素
         * - `content` 折叠面板内容元素
         * - `show` 折叠面板是否展开，true 为展开状态，false 为收起状态
         */
        collapse(this: HTMLElement, data: { title: JQuery; content: JQuery; show: boolean }): void;
    }

    // eslint-disable-next-line @typescript-eslint/no-empty-interface
    class CollapseClass extends Component<CollapseOptions> {
    }
    // eslint-disable-next-line @typescript-eslint/no-empty-interface
    interface CollapseReturn extends ComponentReturn<CollapseOptions> {
    }

    interface Collapse extends ComponentInterface<CollapseOptions, CollapseClass, CollapseReturn> {
        /**
         * 渲染折叠面板组件
         * @param options 折叠面板组件的配置选项
         */
        render(options: CollapseOptions): CollapseReturn;
    }
}
