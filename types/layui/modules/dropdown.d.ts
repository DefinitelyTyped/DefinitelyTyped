declare namespace Layui {
    interface DropdownOptionsData {
        /**
         * 菜单标题
         */
        title?: string;
        /**
         * 菜单 ID。用户菜单项唯一索引
         */
        id?: string | number;
        /**
         * 菜单项的超链接地址。若填写，点击菜单将直接发生跳转
         */
        href?: string;
        /**
         * 菜单项是否禁用状态
         * @default false
         * @since 2.8.0
         */
        disabled?: boolean;
        /**
         * 菜单 url 打开方式，需设置 href 属性后才生效。 一般可设为 _blank 或 _self 等
         */
        target?: string;
        /**
         * 菜单项的类型，支持的可选值如下：
         * - `normal` 普通菜单项（默认）
         * - `group` 纵向组合收缩菜单
         * - `parent` 横向父级菜单
         * - `-` 分割线
         */
        type?: "normal" | "group" | "parent" | "-";
        /**
         * 子级菜单数据项。参数同父级，可无限嵌套
         */
        child?: DropdownOptionsData[];
        /**
         * 自定义当前菜单项模板，优先级高于全局设定的 templet
         */
        templet?: string;
        [index: string]: any;
    }

    interface DropdownOptions {
        /**
         * 绑定元素选择器或 DOM 对象
         */
        elem?: string | Element | JQuery;
        /**
         * 菜单列数据项，也可用 {@link content|content} 选项自定义模板
         */
        data?: DropdownOptionsData[];
        /**
         * 设定实例唯一索引，以便用于其他方法对实例进行相关操作。若该属性未设置，则默认从 elem 属性绑定的元素中的 id 属性值中获取
         */
        id?: string;
        /**
         * 触发组件的事件类型。支持所有事件
         * @default 'click'
         */
        trigger?: keyof HTMLElementEventMap;
        /**
         * 是否初始即显示组件面板
         * @default false
         */
        show?: boolean;
        /**
         * 下拉面板相对绑定元素的水平对齐方式
         * @default 'left'
         * @since 2.6.8
         */
        align?: "left" | "center" | "right";
        /**
         * 是否允许菜单组展开收缩
         * @default true
         */
        isAllowSpread?: boolean;
        /**
         * 是否初始展开子菜单
         * @default true
         */
        isSpreadItem?: boolean;
        /**
         * 延迟关闭的毫秒数。当 trigger 为 hover 时才生效
         * @default 300
         * @since 2.9.2 支持数组类型，数组成员值分别表示显示延迟时间和隐藏延迟时间
         */
        delay?: number | [show: number, hide: number];
        /**
         * 自定义组件的样式类名
         */
        className?: string;
        /**
         * 设置组件的 style 属性
         */
        style?: string;
        /**
         * 设置弹出时的遮罩。支持以下方式赋值：
         * - 若值为 `number` 类型，则表示为遮罩透明度，如: `shade: 0.3`
         * - 若值为 Array 类型，则可同时设置透明度和背景色，如: `shade: [0.3, '#000']`
         * @default 0
         * @since 2.8.0
         */
        shade?: number | [opacity: number, bgColor: string];
        /**
         * 全局定义菜单的列表模板，可添加任意 html 字符，且支持 laytpl 模板语法
         * @since 2.8.0 支持函数类型
         * @example
         * ```js
         * templet: function(d){
         *   return '<i class="layui-icon layui-icon-tips"></i> ' + d.title;
         * }
         * ```
         */
        templet?: string | ((d: any) => string);
        /**
         * 自定义组件内容，从而替代默认的菜单结构
         */
        content?: string;
        /**
         * 设置触发点击事件的菜单范围。支持以下可选值：
         * - `all`: 即代表父子菜单均可触发事件
         * - 默认无需设置，即父级菜单不触发事件
         * @since 2.8.0
         */
        clickScope?: "all";
        /**
         * 自定义 data 数据源中常用的字段名称
         * @since 2.8.15
         */
        customName?: { [K in keyof DropdownOptionsData]: string };
        /**
         * 是否开启手风琴动画
         * @default false
         * @since 2.8.18
         */
        accordion?: boolean;
        /**
         * 点击触发元素时是否关闭面板
         * @default true
         * @since 2.9.18
         */
        closeOnClick?: boolean;
        /**
         * 组件成功弹出后的回调，并返回两个参数
         * @param elemPanel 弹出的面板
         * @param elem 点击的面板
         */
        ready?(this: DropdownOptions, elemPanel: JQuery, elem: JQuery): void;
        /**
         * 菜单项被点击时的回调
         * @param data 菜单项数据
         * @param othis 当前点击的菜单项元素对象
         * @param e 事件对象
         * @since 2.8.0 支持返回 false，阻止关闭面板
         * @since 2.9.18 支持事件对象 e 参数，e 为点击事件的事件对象
         */
        click?(this: DropdownOptions, data: any, othis: JQuery, e: JQuery.Event): undefined | boolean;
        /**
         * 面板关闭后的回调函数
         * @param elem 当前组件绑定的目标元素对象
         * @since 2.9.7
         */
        close?(this: DropdownOptions, elem: JQuery): void;
        /**
         * 点击 dropdown 外部时的回调函数，返回 `false` 可阻止关闭
         * @param e 事件对象
         * @since 2.9.18
         */
        onClickOutside?(this: DropdownOptions, e: Event): boolean | undefined;
    }

    interface DropdownReturn {
        config: Required<DropdownOptions>;
        /**
         * 重载面板
         * @param options
         */
        reload(options?: Partial<DropdownOptions> | object): void;
        /**
         * 打开面板
         * @since 2.9.8
         */
        open(): void;
        /**
         * 关闭面板
         * @since 2.8.0
         */
        close(): void;
    }

    /**
     * 下拉菜单
     * @see https://layui.dev/docs/2/dropdown/
     */
    interface Dropdown {
        config: Required<DropdownOptions>;
        index: number;
        /**
         * 全局设置
         * @param options
         */
        set(options: Partial<DropdownOptions>): Dropdown;
        /**
         * 给 dropdown 绑定事件，当前只有 click 即 event 类似: `click(id|filter)`
         * @param event 事件名 如：`click(id|filter)` 括号内是 `.layui-menu` 的 `id=""` 或者 `lay-filter=""`
         * @param callback 回调中的参数是 `<li lay-options="{id: 101}">` 中 `lay-options` 的值
         */
        on(event: string, callback: (this: HTMLElement, obj: any) => any): any;
        /**
         * 重载实例
         * @param id 组件渲染时定义的 id 属性值
         * @param options 全部基础参数
         */
        reload(id: string, options?: Partial<DropdownOptions>): DropdownReturn;
        /**
         * 仅数据或内容重载
         * @param id 组件渲染时定义的 id 属性值
         * @param options 全部基础参数
         * @since 2.8.0
         */
        reloadData(id: string, options: Partial<DropdownOptions>): DropdownReturn;
        /**
         * 核心入口
         */
        render(options: DropdownOptions): DropdownReturn;
        /**
         * 关闭面板
         * @param id 组件渲染时定义的 id 属性值
         * @since 2.8.0
         */
        close(id: string): DropdownReturn;
        /**
         * 打开面板
         * @param id 组件渲染时定义的 id 属性值
         * @since 2.9.8
         */
        open(id: string): DropdownReturn;
    }
}
