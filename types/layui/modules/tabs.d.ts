declare namespace Layui {
    interface TabsOptions {
        /**
         * 组件渲染指定的目标元素选择器或 DOM 对象
         */
        elem: string | HTMLElement | JQuery;
        /**
         * 组件渲染的唯一实例 ID
         */
        id: string;
        /**
         * 给主容器追加 CSS 类名，以便自定义样式
         */
        className?: string;
        /**
         * 标签切换的触发事件
         * @default click
         */
        trigger?: string;
        /**
         * 标签头部的显示模式。可选值有：
         * - auto 自动模式，根据标签头部是否溢出自动显示不同模式
         * - scroll 始终滚动模式
         * - normal 始终常规模式，不渲染头部滚动结构
         * @default auto
         */
        headerMode?: "auto" | "scroll" | "normal";
        /**
         * 初始选中的标签索引或标签 lay-id 属性值
         */
        index?: number | string;
        /**
         * 是否开启标签项关闭功能
         * @default false
         */
        closable?: boolean;
        /**
         * 设置标签头部列表，通常在「非自动渲染」的场景下使用
         * @example
         * 1. 方法渲染
         * 若 header 传入一个数组，且成员值为对象，即为方法渲染时传入的头部列表数据。如：
         * ```js
         * header: [
         *   { title: 'Tab1' }, // 除 `title` 为必传项外，也可传入其他任意字段。
         *   { title: 'Tab2' }
         * ]
         * ```
         * 2. 任意元素渲染
         * 若 header 传入一个数组，则成员值为元素选择器，即为绑定标签头部列表元素。如：
         * ```js
         * header: ['#tabsHeader', '>li']
         * ```
         */
        header?: Array<{ title: string } & Record<string, string | number>> | [
            containerSelector: string,
            itemSelector: string,
        ];
        /**
         * 设置标签内容列表，通常在「非自动渲染」的场景下使用
         * 1. 方法渲染
         * 若 body 传入一个数组，且成员值为对象，即为方法渲染时传入的标签内容列表数据。如：
         * ```js
         * body: [
         *   { content: 'Tab1' }, // `content` 为必传项
         *   { content: 'Tab2' }
         * ]
         * ```
         * 2. 任意元素渲染
         * 若 body 传入一个数组，则成员值为元素选择器，即为绑定标签内容列表元素。如：
         * ```js
         * body: ['#tabsBody', '>div']
         * ```
         */
        body?: Array<{ content: string } & Record<string, string | number>> | [
            containerSelector: string,
            itemSelector: string,
        ];
    }

    interface TabsData {
        /**
         * 标签配置信息
         */
        options: Required<TabsOptions>;
        /**
         * 标签容器的相关元素
         */
        container: {
            header: {
                elem: JQuery<HTMLElement>;
                items: JQuery<HTMLElement>;
            };
            body: {
                elem: JQuery<HTMLElement>;
                items: JQuery<HTMLElement>;
            };
        };
        /**
         * 当前活动标签头部项
         */
        thisHeaderItem: JQuery<HTMLElement>;
        /**
         * 当前活动标签内容项
         */
        thisBodyItem: JQuery<HTMLElement>;
        /**
         * 当前活动标签索引
         */
        index: number | string;
        /**
         * 标签数量
         */
        length: number;
    }

    interface TabsAddOptions {
        /**
         * 标签标题
         */
        title: string;
        /**
         * 标签内容
         */
        content: string;
        /**
         * 标签的 lay-id 属性值
         */
        id?: string;
        /**
         * 活动标签的索引或 lay-id 属性值，默认取当前选中标签的索引
         */
        index?: number | string;
        /**
         * 标签的插入方式
         * @default 'append'
         */
        mode?: "append" | "prepend" | "before" | "after";
        /**
         * 是否将新增项设置为活动标签
         * @default true
         * @since 2.11.0
         */
        active?: boolean;
        /**
         * 标签是否可关闭
         * @default false
         */
        closable?: boolean;
        /**
         * 自定义标签头部元素，如 headerItem: '<li></li>'
         */
        headerItem?: string;
        /**
         * 自定义标签内容元素，如 bodyItem: '<div></div>'
         */
        bodyItem?: string;
        /**
         * 标签添加成功后执行的回调函数
         * @param data 回调数据(2.11.2+)
         */
        done?(data: TabsData): void;
    }

    interface TabsEventMap {
        /**
         * 标签渲染后的事件
         */
        afterRender(this: HTMLElement, data: TabsData): void;
        /**
         * 标签切换前的事件
         */
        beforeChange(
            this: HTMLElement,
            data: TabsData & {
                from: {
                    index: number | string;
                    headerItem: JQuery<HTMLElement>;
                };
                to: {
                    index: number | string;
                    headerItem: JQuery<HTMLElement>;
                };
            },
        ): undefined | boolean;
        /**
         * 标签切换后的事件
         */
        afterChange(this: HTMLElement, data: TabsData): void;
        /**
         * 标签关闭前的事件
         */
        beforeClose(this: HTMLElement, data: TabsData): undefined | boolean;
        /**
         * 标签关闭后的事件
         */
        afterClose(this: HTMLElement, data: TabsData): void;
    }

    type tabsId = string;

    /**
     * 组件内部实例的详细类型请查看源码
     */
    class TabsClass extends Component<TabsOptions> {
        headerElem: [containerSelector: string, itemSelector: string];
        bodyElem: [containerSelector: string, itemSelector: string];
        documentElem: JQuery<Document>;
        elemView: JQuery<HTMLElement>;
        getContainer: () => TabsData["container"];
        add(...args: any[]): any;
        close(...args: any[]): any;
        closeMult(...args: any[]): any;
        change(...args: any[]): any;
        renderHeaderItem(...args: any[]): any;
        renderBodyItem(...args: any[]): any;
        appendClose(...args: any[]): any;
        renderClose(...args: any[]): any;
        roll(...args: any[]): any;
        findHeaderItem(...args: any[]): any;
        findBodyItem(...args: any[]): any;
        data(...args: any[]): any;
    }

    // eslint-disable-next-line @typescript-eslint/no-empty-interface
    interface TabsReturn extends ComponentReturn<TabsOptions> {
    }

    /**
     * 标签页
     * 该组件继承自 Component 组件
     * @see https://layui.dev/docs/2/tabs
     * @since 2.10.0
     */
    interface Tabs extends ComponentInterface<TabsOptions, TabsClass, TabsReturn> {
        /**
         * tabs 组件渲染，核心方法
         * @param options 配置参数
         */
        render(options?: TabsOptions): TabsReturn;
        /**
         * 新增标签项
         * @param id 组件的实例 ID
         * @param options 配置参数
         */
        add(id: string, options: TabsAddOptions): void;
        /**
         * 关闭指定标签页
         * @param id 组件的实例 ID
         * @param index 若传入 number 类型，则为标签索引；若传入 string 类型，则为标签的 lay-id 属性值
         * @param force 是否强制关闭。若设置 true 将忽略 beforeClose 事件行为。默认 false
         */
        close(id: string, index: number | string, force?: boolean): void;
        /**
         * 关闭多个标签页
         * @param id 组件的实例 ID
         * @param mode 关闭模式
         * @param index 活动标签的索引或 lay-id 属性值，默认取当前选中标签的索引
         */
        closeMult(id: string, mode: "all" | "left" | "right" | "other", index?: number | string): void;
        /**
         * 切换标签页
         * @param id 组件的实例 ID
         * @param index 标签索引或标签的 lay-id 属性值
         * @param force 是否强制切换。若设置 true 将忽略 beforeChange 事件行为。默认 false
         */
        change(id: string, index: number | string, force?: boolean): void;
        /**
         * 获取标签页数据
         * @param id 组件的实例 ID
         */
        data(id: string): TabsData;
        /**
         * 获取标签页头部项
         * @param id 组件的实例 ID
         * @param index 若传入 number 类型，则为标签索引；若传入 string 类型，则为标签的 lay-id 属性值
         */
        getHeaderItem(id: string, index: number | string): JQuery<HTMLElement>;
        /**
         * 获取标签页内容项
         * @param id 组件的实例 ID
         * @param index 若传入 number 类型，则为标签索引；若传入 string 类型，则为标签的 lay-id 属性值(2.11.2+)
         */
        getBodyItem(id: string, index: number | string): JQuery<HTMLElement>;
        /**
         * 刷新标签页
         * @param id 组件的实例 ID
         */
        refresh(id: string): void;
        /**
         * 事件
         * @param event 事件名称
         * @param callback 事件回调函数
         *
         * | 事件名称 | 描述 |
         * | --- | --- |
         * | afterRender | 标签渲染后的事件 |
         * | beforeChange | 标签切换前的事件 |
         * | afterChange | 标签切换后的事件 |
         * | beforeClose | 标签关闭前的事件 |
         * | afterClose | 标签关闭后的事件 |
         */
        on<K extends keyof TabsEventMap>(event: `${K}(${tabsId})`, callback: TabsEventMap[K]): this;
        on<K extends keyof TabsEventMap>(event: K, callback: TabsEventMap[K]): this;
        CONST: {
            ELEM: string;
            HEADER: string;
            CLOSE: string;
            BODY: string;
            ITEM: string;
            CARD: string;
        } & ComponentInterface<TabsOptions, TabsClass, TabsReturn>["CONST"];
    }
}
