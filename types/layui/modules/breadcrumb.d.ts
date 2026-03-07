declare namespace Layui {
    interface BreadcrumbOptions {
        /**
         * 组件渲染指定的目标元素选择器或 DOM 对象
         */
        elem: string | HTMLElement | JQuery;
    }

    // eslint-disable-next-line @typescript-eslint/no-empty-interface
    class BreadcrumbClass extends Component<BreadcrumbOptions> {
    }

    // eslint-disable-next-line @typescript-eslint/no-empty-interface
    interface BreadcrumbReturn extends ComponentReturn<BreadcrumbOptions> {
    }

    interface Breadcrumb extends ComponentInterface<BreadcrumbOptions, BreadcrumbClass, BreadcrumbReturn> {
        /**
         * 渲染面包屑组件
         * @param options 面包屑组件的配置选项
         */
        render(options: BreadcrumbOptions): BreadcrumbReturn;
    }
}
