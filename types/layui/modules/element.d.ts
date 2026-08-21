declare namespace Layui {
    // eslint-disable-next-line @typescript-eslint/no-empty-interface
    interface LayElementEventMap extends TabEventMap, NavEventMap, CollapseEventMap {
    }

    // eslint-disable-next-line @typescript-eslint/no-empty-interface
    class LayElementClass extends Component<{}> {
    }

    // eslint-disable-next-line @typescript-eslint/no-empty-interface
    interface LayElementReturn extends ComponentReturn<{}> {
    }

    interface ProgressSetValue {
        progress: Progress["setValue"];
    }

    /**
     * 元素操作方法
     * @since 2.13.0 之后继承自 Component
     */
    interface LayElement
        extends
            Omit<ComponentInterface<{}, LayElementClass, LayElementReturn>, "render" | "on">,
            Pick<Tab, "tabAdd" | "tabDelete" | "tabChange" | "tab">,
            ProgressSetValue
    {
        /**
         * 用于元素的一些事件触发
         * @param event 事件名称
         * @param callback 事件回调函数
         */
        on<K extends keyof LayElementEventMap>(event: `${K}(${TableFilter})`, callback: LayElementEventMap[K]): this;
        on<K extends keyof LayElementEventMap>(event: K, callback: LayElementEventMap[K]): this;
        // eslint-disable-next-line @definitelytyped/no-unnecessary-generics
        on<K extends string>(event: `${K}(${TableFilter})`, callback: AnyFn): this;
        /**
         * Element 渲染方法，用于重新渲染 Element 组件。
         * @param type 渲染类型，未指定时将重新渲染页面内所有类型的 Element 组件
         * - `tab` 渲染 tab 选项卡
         * - `nav` 渲染导航栏目
         * - `breadcrumb` 渲染面包屑
         * - `progress` 渲染进度条
         * - `collapse` 渲染叠面板
         * @param filter 元素的 `lay-filter=""` 的值，用于局部更新，
         * @since 自 2.9.16+ {@link filter} 支持 jQuery 对象
         * @deprecated 已废弃，使用 {@link Element.render|render}
         */
        init(type?: "tab" | "nav" | "breadcrumb" | "progress" | "collapse", filter?: string | JQuery): void;
        /**
         * Element 渲染方法，用于重新渲染 Element 组件
         * @param type 渲染类型，未指定时将重新渲染页面内所有类型的 Element 组件
         * - `tab` 渲染 tab 选项卡
         * - `nav` 渲染导航栏目
         * - `breadcrumb` 渲染面包屑
         * - `progress` 渲染进度条
         * - `collapse` 渲染折叠面板
         * @param filter 元素的 `lay-filter=""` 的值，用于局部更新，
         * @since 自 2.9.16+ {@link filter} 支持 jQuery 对象
         * @see https://layui.dev/docs/2/nav/ - 导航栏
         * @see https://layui.dev/docs/2/tab/ - 选项卡
         * @see https://layui.dev/docs/2/panel/ - 折叠面板
         * @see https://layui.dev/docs/2/progress/ - 进度条
         * @see https://layui.dev/docs/2/nav/#separator - 面包屑
         */
        render(type?: "tab" | "nav" | "breadcrumb" | "progress" | "collapse", filter?: string | JQuery): void;
    }
}
