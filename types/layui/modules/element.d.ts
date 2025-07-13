declare namespace Layui {
    interface TabOptions {
        /**
         * 选项卡的标题
         */
        title: string;
        /**
         * 选项卡的内容,支持传入 html 字符串
         */
        content: string;
        /**
         * 选项卡标题的 lay-id 属性值
         */
        id?: string;
        /**
         * 添加后自动切换
         * @default false
         * @since 2.8.6
         */
        change?: boolean;
        /**
         * 是否开启删除图标
         * @default false
         * @since 2.9.11
         */
        allowClose?: boolean;
    }

    interface TabElement {
        /**
         * 指定tab头元素项
         */
        headerElem: string | HTMLElement | JQuery;
        /**
         * 指定tab主体元素项
         */
        bodyElem: string | HTMLElement | JQuery;
    }

    interface ElementEventParam {
        /**
         * 当前 tab 项的所在下标
         */
        index: number;
        /**
         * 当前的 tab 容器
         */
        elem: JQuery;
        /**
         * 前的 tab 项 ID
         * @since 2.9.11
         */
        id: string;
    }
    interface ElementEventMap {
        /**
         * tab 切换事件
         */
        tab(this: HTMLElement, data: ElementEventParam): void;
        /**
         * tab 切换前的事件
         * 返回 false 阻止切换
         * @since 2.9.16
         */
        tabBeforeChange(
            this: HTMLElement,
            data: Pick<ElementEventParam, "elem"> & {
                to: Omit<ElementEventParam, "elem">;
                from: Omit<ElementEventParam, "elem">;
            },
        ): undefined | boolean;
        /**
         * tab 删除事件
         */
        tabDelete(this: HTMLElement, data: ElementEventParam): void;
        /**
         * tab 删除前的事件
         * 返回 false 取消关闭操作
         * @since 2.9.11+
         */
        tabBeforeDelete(this: HTMLElement, data: ElementEventParam): undefined | boolean;
        /**
         * 导航栏点击事件
         * @param othis 点击元素的 jQuery 对象
         */
        nav(this: HTMLElement, othis: JQuery): void;
        /**
         * 折叠面板点击事件
         * @param data 事件对象
         * - `title` 折叠面板标题元素
         * - `content` 折叠面板内容元素
         * - `show` 折叠面板是否展开，true 为展开状态，false 为收起状态
         */
        collapse(this: HTMLElement, data: { title: JQuery; content: JQuery; show: boolean }): void;
    }
    /**
     * 元素操作
     */
    interface Element {
        config: Record<string, any>;
        /**
         * 全局设置
         * @param options 选项
         */
        set(options: Record<string, any>): this;
        /**
         * 用于元素的一些事件触发
         * @param event 事件名称
         * @param callback 事件回调函数
         */
        on<K extends keyof ElementEventMap>(event: `${K}(${TableFilter})`, callback: ElementEventMap[K]): void;
        on<K extends keyof ElementEventMap>(event: K, callback: ElementEventMap[K]): void;
        // eslint-disable-next-line @definitelytyped/no-unnecessary-generics
        on<K extends string>(event: `${K}(${TableFilter})`, callback: AnyFn): void;
        /**
         * 用于新增一个Tab选项
         * @param filter tab元素的 lay-filter="value" 过滤器的值
         * @param options 设定可选值的对象
         */
        tabAdd(filter: string, options: TabOptions): void;
        /**
         * 用于删除指定的Tab选项
         * @param filter tab 元素的 `lay-filter="value"` 过滤器的值
         * @param layid 选项卡标题列表的 lay-id 属性的值
         * @param force 是否强制删除，默认为false。如果为true，则会直接删除，不会触发事件 (2.9.21+)
         */
        tabDelete(filter: string, layid: string, force?: boolean): void;
        /**
         * 用于外部切换到指定的Tab项上
         * @param filter 对应容器 lay-filter 的属性值
         * @param layid 比如：lay-id="xx"中的 'xx'
         * @param force 是否强制切换，默认为false。如果为true，则会直接切换，不会触发事件 (2.9.15+)
         */
        tabChange(filter: string, layid: string, force?: boolean): void;
        /**
         * 用于绑定自定义 Tab 元素（即非 layui 自带的 tab 结构）
         * @param option 参数
         * @see https://layui.dev/docs/2/tab/
         */
        tab(option: TabElement): void;
        /**
         * 用于动态改变进度条百分比
         * @param filter 对应进度条容器 lay-filter 的属性值
         * @param percent 比例，百分比字符串，例如：'30%'、'50%'
         * @example
         * ```js
         * element.progress('demo', '30%')
         * ```
         */
        progress(filter: string, percent: string): void;
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
         * @see https://layui.dev/docs/2/nav/- 导航栏
         * @see https://layui.dev/docs/2/tab/- 选项卡
         * @see https://layui.dev/docs/2/panel/- 折叠面板
         * @see https://layui.dev/docs/2/progress/- 进度条
         * @see https://layui.dev/docs/2/nav/#separator- 面包屑
         */
        render(type?: "tab" | "nav" | "breadcrumb" | "progress" | "collapse", filter?: string | JQuery): void;
    }
}
