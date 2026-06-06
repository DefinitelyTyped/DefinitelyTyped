declare namespace Layui {
    interface TabOptions {
        /**
         * 组件渲染指定的目标元素选择器或 DOM 对象
         */
        elem: string | HTMLElement | JQuery;
    }

    interface TabEventParam {
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

    interface TabEventMap {
        /**
         * tab 切换事件
         */
        tab(this: HTMLElement, data: TabEventParam): void;
        /**
         * tab 切换前的事件
         * 返回 false 阻止切换
         * @since 2.9.16
         */
        tabBeforeChange(
            this: HTMLElement,
            data: Pick<TabEventParam, "elem"> & {
                to: Omit<TabEventParam, "elem">;
                from: Omit<TabEventParam, "elem">;
            },
        ): undefined | boolean;
        /**
         * tab 删除事件
         */
        tabDelete(this: HTMLElement, data: TabEventParam): void;
        /**
         * tab 删除前的事件
         * 返回 false 取消关闭操作
         * @since 2.9.11+
         */
        tabBeforeDelete(this: HTMLElement, data: TabEventParam): undefined | boolean;
    }

    interface TabAddOptions {
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

    // eslint-disable-next-line @typescript-eslint/no-empty-interface
    class TabClass extends Component<TabOptions> {
    }

    // eslint-disable-next-line @typescript-eslint/no-empty-interface
    interface TabReturn extends ComponentReturn<TabOptions> {
    }

    interface Tab extends ComponentInterface<TabOptions, TabClass, TabReturn> {
        /**
         * 渲染选项卡组件
         * @param options 选项卡组件的配置选项
         */
        render(options: TabOptions): TabReturn;
        /**
         * 用于新增一个Tab选项
         * @param filter tab元素的 lay-filter="value" 过滤器的值
         * @param options 设定可选值的对象
         */
        tabAdd(filter: string, options: TabAddOptions): this;
        /**
         * 用于删除指定的Tab选项
         * @param filter tab 元素的 `lay-filter="value"` 过滤器的值
         * @param layid 选项卡标题列表的 lay-id 属性的值
         * @param force 是否强制删除，默认为false。如果为true，则会直接删除，不会触发事件 (2.9.21+)
         */
        tabDelete(filter: string, layid: string, force?: boolean): this;
        /**
         * 用于外部切换到指定的Tab项上
         * @param filter 对应容器 lay-filter 的属性值
         * @param layid 比如：lay-id="xx"中的 'xx'
         * @param force 是否强制切换，默认为false。如果为true，则会直接切换，不会触发事件 (2.9.15+)
         */
        tabChange(filter: string, layid: string, force?: boolean): this;
        /**
         * 用于绑定自定义 Tab 元素（即非 layui 自带的 tab 结构）
         * @param options 选项
         * @see https://layui.dev/docs/2/tab/
         */
        tab(options: TabElement): void;
    }
}
