declare namespace Layui {
    interface NavOptions {
        /**
         * 组件渲染指定的目标元素选择器或 DOM 对象
         */
        elem: string | HTMLElement | JQuery;
    }

    interface NavEventMap {
        /**
         * 导航栏点击事件
         * @param othis 点击元素的 jQuery 对象
         */
        nav(this: HTMLElement, othis: JQuery): void;
    }

    // eslint-disable-next-line @typescript-eslint/no-empty-interface
    class NavClass extends Component<NavOptions> {
    }

    // eslint-disable-next-line @typescript-eslint/no-empty-interface
    interface NavReturn extends ComponentReturn<NavOptions> {
    }

    interface Nav extends ComponentInterface<NavOptions, NavClass, NavReturn> {
        /**
         * 渲染导航栏组件
         * @param options 导航栏组件的配置选项
         */
        render(options: NavOptions): NavReturn;
    }
}
