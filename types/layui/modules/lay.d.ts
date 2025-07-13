declare namespace Layui {
    interface Lay<TElement = HTMLElement> extends ArrayLike<TElement>, Iterable<TElement> {
        /**
         * 当前的选择器
         */
        selector: string | undefined;
        /**
         * 添加 CSS 类
         * @param className 类名
         * @param remove 是否是移除 `className`, 默认 `false`
         */
        addClass(className: string, remove?: boolean): this;
        /**
         * 追加内容
         * @param elem html 或者元素对象
         */
        append(elem?: string | HTMLElement): this;
        /**
         * 设置元素属性
         * @param key 属性名
         * @param value 属性值
         */
        attr(key: string, value: any): this;
        /**
         * 获取第一个元素属性
         */
        attr(): string;
        /**
         * 添加 css style
         * @param key 属性名
         * @param value 值
         */
        css(key: string, value: any): this;
        /**
         * 获取 css style
         * @param key 属性名
         */
        css(key: string): string;
        /**
         * 对元素遍历
         * @param fn 回调函数，返回 `true` 则停止遍历，和 jQuery 相反
         */
        each(fn: (this: TElement, index: number, elem: TElement) => any): this;
        /**
         * 查找子元素
         * @param selector 选择器
         */
        find(selector: string | HTMLElement): this;
        /**
         * 是否包含 css 类
         * @param className 类名
         */
        hasClass(className: string): boolean;
        /**
         * 设置高度
         * @param value 元素宽度
         */
        height(value: number | string): this;
        /**
         * 获取第一个元素高度
         */
        height(): number;
        /**
         * 设置元素的 `innerHTML`
         * @param html html 字符串
         */
        html(html: string): this;
        /**
         * 获取第一个元素的 `innerHTML`
         */
        html(): string;
        /**
         * 解除事件
         * @param eventName 事件名
         * @param fn 回调
         * @since 2.9.11 新增 options
         */
        off<K extends keyof HTMLElementEventMap>(
            eventName: K,
            fn: (this: TElement, e: HTMLElementEventMap[K]) => any,
            options?: boolean | EventListenerOptions,
        ): this;
        off<K extends keyof DocumentEventMap>(
            eventName: K,
            fn: (this: TElement, e: DocumentEventMap[K]) => any,
            options?: boolean | EventListenerOptions,
        ): this;
        off<K extends keyof WindowEventMap>(
            eventName: K,
            fn: (this: TElement, e: WindowEventMap[K]) => any,
            options?: boolean | EventListenerOptions,
        ): this;
        /**
         * 事件绑定，注意：只支持内置事件，不支持自定义事件
         * @param eventName 事件名 比如click，自定事件会绑定失败
         * @param fn 回调
         * @since 2.9.11 新增 options
         */
        on<K extends keyof HTMLElementEventMap>(
            eventName: K,
            fn: (this: TElement, e: HTMLElementEventMap[K]) => any,
            options?: boolean | AddEventListenerOptions,
        ): this;
        on<K extends keyof DocumentEventMap>(
            eventName: K,
            fn: (this: TElement, e: DocumentEventMap[K]) => any,
            options?: boolean | AddEventListenerOptions,
        ): this;
        on<K extends keyof WindowEventMap>(
            eventName: K,
            fn: (this: TElement, e: WindowEventMap[K]) => any,
            options?: boolean | AddEventListenerOptions,
        ): this;
        /**
         * 移除元素
         * @param elem 实际是 removeChild(elem)
         */
        remove(elem: HTMLElement): this;
        /**
         * 移除指定的 `attribute`
         * @param key 属性名
         */
        removeAttr(key: string): this;
        /**
         *  移除 className
         * @param className
         */
        removeClass(className: string): this;
        /**
         * 设置元素的 value
         * @param value 值
         */
        val(value: any): this;
        /**
         * 获取第一个元素的value
         */
        val(): string;
        /**
         * 设置宽度
         * @param value 元素宽度
         */
        width(value: number | string): this;
        /**
         * 获取第一个元素宽度
         */
        width(): number;
        [n: number]: TElement;
    }

    interface LayTouchSwipeState {
        /**
         * 初始坐标
         */
        pointerStart: { x: number; y: number };
        /**
         * 结束坐标
         */
        pointerEnd: { x: number; y: number };
        /**
         * X 轴移动距离
         */
        distanceX: number;
        /**
         * Y 轴移动距离
         */
        distanceY: number;
        /**
         * 滑动方向
         */
        direction: "none" | "right" | "left" | "up" | "down";
        /**
         * 开始时间
         */
        timeStart: Date;
    }

    interface LayPositionOptions {
        /**
         * 元素的定位模式
         * @default 'absolute'
         */
        position?: "absolute" | "fixed";
        /**
         * 点击类型，默认为 'left'，如果 {@link opts.target} 是 document 或 body 元素，则为 'right'
         */
        clickType?: "left" | "right";
        /**
         * 对齐方式
         * @default 'left'
         */
        align?: "left" | "center" | "right";
        /**
         * 顶部没有足够区域显示时，是否允许底部溢出
         */
        allowBottomOut?: boolean;
        /**
         * 边距
         */
        margin?: number;
        /**
         * 事件对象，仅右键生效
         */
        e?: MouseEvent | { clientX: number; clientY: number };
        /**
         * 是否重载，用于出现滚动条时重新计算位置
         * 这是一个仅供内部使用的私有参数
         */
        SYSTEM_RELOAD?: boolean;
        /**
         * 相对于触发元素的额外偏移量[x,y]
         */
        offset?: [offsetX: number, offsetY: number];
    }

    type LayOnClickOutsideScope = HTMLElement | Document | Window;
    type LayOnClickOutsideScopeEventMap<SElement> = SElement extends Window ? WindowEventMap
        : SElement extends Document ? DocumentEventMap
        : SElement extends HTMLElement ? HTMLElementEventMap
        : never;
    type LayOnClickOutsideEventMap<SElement> = Pick<
        LayOnClickOutsideScopeEventMap<SElement>,
        "click" | "mousedown" | "mouseup" | "touchstart" | "touchend" | "pointerdown" | "pointerup"
    >;
    interface LayOnClickOutsideOpsions<E extends keyof LayOnClickOutsideEventMap<S>, S extends LayOnClickOutsideScope> {
        /**
         * 监听的事件类型
         * @default 'pointerdown''
         */
        event?: E;
        /**
         * 监听范围
         * @default document
         */
        scope?: S;
        /**
         * 忽略监听的元素或选择器字符串
         */
        ignore?: Array<string | HTMLElement>;
        /**
         * 对内部事件侦听器使用捕获阶段
         * @default true
         */
        capture?: boolean;
    }

    interface LayStatic {
        /**
         * 查找 DOM 作为返回实例的操作对象
         * @param selector 选择器
         */
        (window: Window): Lay<Window>;
        <T extends keyof HTMLElementTagNameMap>(selector: T): Lay<HTMLElementTagNameMap[T]>;
        <T extends keyof SVGElementTagNameMap>(selector: T): Lay<SVGElementTagNameMap[T]>;
        // eslint-disable-next-line @definitelytyped/no-unnecessary-generics
        <T extends globalThis.Element = HTMLElement>(selector: Layui.Selector): Lay<T>;
        (element: HTMLSelectElement): Lay<HTMLSelectElement>;
        <T extends globalThis.Element>(element_or_elementArray: T | ArrayLike<T>): Lay<T>;
        <T>(selection: Lay<T>): Lay<T>;
        <T extends Layui.PlainObject>(object: T): Lay<T>;
        // eslint-disable-next-line @definitelytyped/no-unnecessary-generics
        <T = HTMLElement>(): Lay<T>;
        /**
         * 版本
         */
        v: string;
        /**
         * 把多个对象深度克隆到 target
         * @param target 一个对象
         * @param objectN 包含额外的属性合并到第一个参数
         */
        extend<T, U, V, W, X, Y, Z>(
            target: T,
            object1: U,
            object2: V,
            object3: W,
            object4: X,
            object5: Y,
            object6: Z,
        ): T & U & V & W & X & Y & Z;
        extend<T, U, V, W, X, Y>(
            target: T,
            object1: U,
            object2: V,
            object3: W,
            object4: X,
            object5: Y,
        ): T & U & V & W & X & Y;
        extend<T, U, V, W, X>(target: T, object1: U, object2: V, object3: W, object4: X): T & U & V & W & X;
        extend<T, U, V, W>(target: T, object1: U, object2: V, object3: W): T & U & V & W;
        extend<T, U, V>(target: T, object1: U, object2: V): T & U & V;
        extend<T, U>(target: T, object1: U): T & U;
        extend<T>(target: T): this & T;
        extend(target: any, object1: any, ...objectN: any[]): any;
        /**
         * 如果是 ie 则是版本字符串，非 ie 为 false
         */
        ie: boolean | string;
        layui: Layui;
        /**
         * 获取当前 JS 所在目录
         */
        getPath: string;
        /**
         * 阻止事件冒泡
         */
        stope(event: Event | JQuery.Event): void;
        /**
         * 对象（Array、Object、DOM 对象等）遍历，可用于取代 for 语句
         * @param collection 集合，可以是数组或对象等可遍历的元素
         * @param callback 回调函数，返回 true 停止遍历，和 jQUery.each 相反
         */
        each<T>(collection: ArrayLike<T>, callback: (this: T, indexInArray: number, value: T) => any): Lay;
        each<T, K extends keyof T>(
            collection: T,
            callback: (this: T[K], propertyName: K, valueOfProperty: T[K]) => any,
        ): Lay;
        /**
         * 数字前置补零
         * @param num 原始数字
         * @param length 数字长度，默认值 2。如果原始数字长度小于 length，则前面补零
         * @returns 返回补 0 后的数字
         * @example
         * ```js
         * lay.digit(6, 2); // "06"
         * lay.digit('7', 3); // "007"
         * ```
         */
        digit(num: number | string, length?: number): string;
        /**
         * 创建元素
         * @param elemName 元素的标签名
         * @param attr 添加到元素上的属性
         * @example
         * ```js
         * lay.elem('div', {id: 'test'}) // <div id="test"></div>
         * ```
         */
        elem<K extends keyof HTMLElementTagNameMap>(tagName: K, attr?: Record<string, any>): HTMLElementTagNameMap[K];
        elem(tagName: string, attr?: Record<string, any>): HTMLElement;
        /**
         * 当前页面body是否存在滚动条
         */
        hasScrollbar(): boolean;
        /**
         * 创建 style 样式
         * @param options
         * 可配置的选项
         * - target: 目标容器，指定后会将样式追加到目标容器，默认 `body`；
         * - id: 样式元素的 id，默认自增
         * - text: 样式内容
         * @since 2.8.15
         * @example
         * ```html
         * <div id="targetEl">
         *   <!-- 样式追加到目标容器 -->
         *   <style id="LAY-STYLE-DF-0">.card{color: #000}</style>
         * </div>
         *
         * lay.style({
         *   target: '#targetEl',
         *   text: '.card{color: #000}'
         * }) // <style id="LAY-STYLE-DF-0">.card{color: #000}</style>
         * ```
         */
        style(options: { target?: string | HTMLElement | JQuery; id?: string; text: string }): HTMLStyleElement;
        /**
         * 将元素定位到指定目标元素附近
         * @param target 目标元素
         * @param elem 定位元素
         * @param opts 可配置的选项
         * @example
         * ```js
         * <button id="targetEl">dropdown</button>
         * <ul id="contentEl" class="dropdown-menu">
         *   <li>菜单1</li>
         *   <li>菜单2</li>
         * </ul>
         *
         * // 下拉菜单将被定位到按钮附近
         * lay.position(
         *   $('#targetEl')[0],
         *   $('#contentEl')[0],
         *   {
         *     position: 'fixed',
         *     align: 'center'
         *   }
         * )
         * ```
         */
        position(target: HTMLElement, elem: HTMLElement, opts?: LayPositionOptions): void;
        /**
         * 获取元素上的属性配置项
         * @param elem HTML 元素
         * @param attr 可配置的选项，string 类型指定属性名
         * @example
         * ```js
         * <div id="testEl" lay-options="{color:red}" lay-toc="{hot: true}"></div>
         *
         * var elem = $('#testEl')
         * lay.options(elem) // {color:red}
         * lay.options(elem[0]) // {color:red}
         * lay.options('#testEl') // {color:red}
         * lay.options('#testEl', {attr: 'lay-toc'}) // {hot: true}
         * lay.options('#testEl', 'lay-toc') // {hot: true}
         *
         * $('#testEl').attr('lay-toc') // '{hot: true}'
         * ```
         */
        options(elem: string | HTMLElement | JQuery, attr?: string | Record<string, string>): Record<string, any>;
        /**
         * 元素是否属于顶级元素（document 或 body）
         * @param elem HTML 元素
         */
        isTopElem(elem: unknown): elem is Document | HTMLBodyElement;
        /**
         * 获取 style rules
         * @param style HTMLStyle 元素
         * @param callback 用来返回 style 元素中的每个 `style rule` 的函数，返回 true 终止遍历
         * @example
         * ```js
         * <style id="test">
         * .lay-card{
         *   color: #000;
         * }
         * .lay-btn-success{
         *   color: green;
         * }
         * </style>
         *
         * lay.getStyleRules($('#test')[0], function(rule, index){
         *   if(rule.selectorText === '.lay-card'){
         *     console.log(index, rule.cssText) // 0 '.lay-card{color: #000}'
         *     rule.style.color = '#EEE';
         *     return true; // 终止遍历
         *   }
         * }) // RuleList
         * ```
         */
        getStyleRules(
            style: HTMLStyleElement,
            callback: (ruleItem: CSSStyleRule, index: number) => boolean,
        ): CSSRuleList;
        clipboard: {
            /**
             * 剪贴板写入文本
             * @param text 写入剪贴板的文本
             * @param done 写入成功/完成回调
             * @param error 写入失败回调
             *
             * @since 2.8.17
             */
            writeText(text: string, done?: () => void, error?: (err: any) => void): void;
        };
        /**
         * 检测是否支持 Passive Event Listeners
         * @since 2.9.2
         * @see https://github.com/WICG/EventListenerOptions/blob/gh-pages/explainer.md
         */
        passiveSupported: boolean;
        /**
         * 是否支持 touch events
         * @since 2.9.2
         */
        touchEventsSupported(): boolean;
        /**
         * 基于 touch 事件的触摸滑动
         * @param elem
         * @param options
         * @since 2.9.2
         */
        touchSwipe(
            elem: string | Element | JQuery,
            options: {
                onTouchStart(e: TouchEvent, state: LayTouchSwipeState): void;
                onTouchMove(e: TouchEvent, state: LayTouchSwipeState): void;
                onTouchEnd(e: TouchEvent, state: LayTouchSwipeState): void;
            },
        ): void;
        /**
         * 监听指定元素外部的点击
         * @param target 被监听的元素
         * @param handler 事件触发时执行的函数
         * @param options
         * @return 返回一个停止事件监听的函数
         */
        onClickOutside<
            E extends keyof LayOnClickOutsideEventMap<S> = "pointerdown",
            S extends LayOnClickOutsideScope = Document,
        >(
            target: HTMLElement,
            handler: (e: LayOnClickOutsideEventMap<S>[E]) => void,
            options?: LayOnClickOutsideOpsions<E, S>,
        ): Fn;
        /**
         * 判断一个对象是否具有某个自身的属性，而不考虑继承的属性
         * @param obj 对象
         * @param key 属性名
         */
        hasOwn<O, K extends PropertyKey, V = unknown>(obj: O, key: K): obj is O & Record<K, V>; // eslint-disable-line @definitelytyped/no-unnecessary-generics
    }
}
