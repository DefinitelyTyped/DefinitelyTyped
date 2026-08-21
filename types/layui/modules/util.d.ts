declare namespace Layui {
    /**
     * @see https://layui.dev/docs/2/fixbar/#options
     */
    interface UtilBarOptions {
        /**
         * 默认false。如果值为true，则显示第一个bar，带有一个默认图标
         *
         * 如果值为图标字符，则显示第二个bar，并覆盖默认图标
         * @deprecated 2.8.0 已废弃，请使用 {@link UtilBarOptions.bars|bars}
         * @see {@link UtilBarOptions.bars|bars}
         */
        bar1?: boolean | string;
        /**
         * 默认false。如果值为true，则显示第二个bar，带有一个默认图标
         *
         * 如果值为图标字符，则显示第二个bar，并覆盖默认图标
         * @deprecated 2.8.0 已废弃，请使用 {@link UtilBarOptions.bars|bars}
         * @see {@link UtilBarOptions.bars|bars}
         */
        bar2?: boolean | string;
        /**
         * 设置固定工具条列表
         * @example
         * ```
         * bars: [
         *   {
         *     type: '', // bar 类型名，用于事件区分
         *     icon: '', // bar 图标的 className
         *     content: '', // bar 任意内容
         *     style: '' // bar 任意样式
         *   },
         *   // …
         * ]
         * ```
         * @since 2.8.0
         */
        bars?: {
            /**
             * bar 类型名，用于事件区分
             */
            type: string;
            /**
             * bar 图标的 className
             */
            icon?: string;
            /**
             * bar 任意内容
             */
            content?: string;
            /**
             * bar 任意样式
             */
            style?: string;
        }[];
        /**
         * 是否显示默认的固定条 ，如 top
         * @default true
         * @since 2.8.0
         */
        default?: boolean;
        /**
         * 插入固定条的目标元素选择器
         * @default body
         * @since 2.8.0
         */
        target?: JQuery;
        /**
         * 固定条最外层容器滚动条所在的元素，若不设置则默认取 `target` 属性值
         * @default body
         * @since 2.8.0
         */
        scroll?: JQuery;
        /**
         * 设置默认 TOP 条出现滚动条的高度临界值
         * @default 200
         * @since 2.8.0
         */
        margin?: number;
        /**
         * 设置默认 TOP 条等动画时长
         * @default 200
         * @since 2.8.0
         */
        duration?: number;
        /**
         * 用于定义固定条列表的任意事件，触发事件时的回调将返回 bars 属性的 type 值
         * @since 2.8.0
         */
        on?: { [index: string]: (type?: string) => void };
        /**
         * 自定义区块背景色
         */
        bgcolor?: string;
        /**
         * 用于控制出现 TOP 按钮的滚动条高度临界值。默认：200
         * @deprecated 2.8.0 已废弃, 请使用 {@link UtilBarOptions.margin|margin}
         * @see {@link UtilBarOptions.margin|margin}
         */
        showHeight?: number;
        /**
         * 你可以通过重置bar的位置，比如 css: {right: 100, bottom: 100}
         */
        css?: { [key: string]: string | number | boolean };
        /**
         * 点击bar的回调，函数返回一个type参数，用于区分 bar 类型
         *
         * 支持的类型有：bar1、bar2、top
         * @param type  bar1、bar2、top
         * @deprecated 2.8.0 已废弃，请使用 {@link UtilBarOptions.on|on}
         */
        click?(type: LiteralStringUnion<"bar1" | "bar2" | "top">): void;
    }

    /**
     * @see https://layui.dev/docs/2/util/#openWin
     */
    interface UtilOpenWinOptions {
        /**
         * 要打开页面 URL
         */
        url?: string;
        /**
         * 打开页面的方式或窗口 name
         */
        target?: LiteralStringUnion<"_blank" | "_parent" | "_self" | "_top">;
        /**
         * 打开的页面内容。若设置了 url 属性，则该属性无效
         */
        content?: string;
        /**
         * 窗口的相关配置，同 window.open() 的 specs
         */
        specs?: string;
        /**
         * 当前所在的窗口对象，默认 self
         */
        window?: Window;
    }

    /**
     * @see https://layui.dev/docs/2/util/#countdown
     */
    interface UtilCountdownOptions {
        /**
         * 目标时间值。值可以为毫秒数或 Date 对象
         */
        data: number | Date;
        /**
         * 当前时间值，一般为当前服务器时间。值可以为毫秒数或 Date 对象
         */
        now: number | Date;
        /**
         * 倒计时初始时的回调函数。
         */
        ready?: () => void;
        /**
         * 倒计时计时中的回调函数，每秒触发一次，直到计时完成
         */
        clock?: (timeObj: { d: number; h: number; m: number; s: number }, countdown: UtilCountdownReturn) => void;
        /**
         * 倒计时计时完成的回调函数，即到达目标时间值时触发
         */
        done?: (timeObj: { d: number; h: number; m: number; s: number }, countdown: UtilCountdownReturn) => void;
    }

    interface UtilCountdownReturn {
        /**
         * 清除当前倒计时
         */
        clear: Fn;
        /**
         * 重载当前倒计时
         */
        reload: (options: UtilCountdownOptions) => void;
        /**
         * 当前倒计时计时器 ID
         */
        timer: number;
    }

    type TypeToTriggeredEventMap<TElement> = JQuery.TypeToTriggeredEventMap<TElement, undefined, any, any>;

    type TriggerEvent<TElement> = keyof Layui.OmitIndexSignature<TypeToTriggeredEventMap<TElement>>;

    /**
     * 工具集
     * @see https://layui.dev/docs/2/util/
     */
    interface Util {
        /**
         * 固定块
         * @param option 参数
         * @see https://layui.dev/docs/2/fixbar/
         */
        fixbar(option: UtilBarOptions): void;
        /**
         * 倒计时
         * @param endTime 结束时间戳或 Date 对象，如：4073558400000，或：new Date(2099,1,1)
         * @param serverTime 当前服务器时间戳或 Date 对象
         * @param callback 回调函数。如果倒计时尚在运行，则每一秒都会执行一次。并且返回三个参数：
         * - date（包含天/时/分/秒的对象）
         * - serverTime（当前服务器时间戳或Date对象）
         * - timer（计时器返回的ID值，用于clearTimeout）
         *
         * @deprecated 2.8.8 此签名已弃用
         */
        countdown(
            endTime?: number | Date,
            serverTime?: number | Date,
            callback?: (date: number[], serverTime_: typeof serverTime, timer: number) => void,
        ): void;
        /**
         * 倒计时
         * @param options
         * @since 2.8.8
         */
        countdown(options: UtilCountdownOptions): UtilCountdownReturn;
        /**
         * 某个时间在当前时间的多久前
         * @param time 当前时间之前的时间戳或日期对象
         * @param onlyDate 是否在超过 30 天后，只返回日期字符，而不返回时分秒
         */
        timeAgo(time: number | Date, onlyDate?: boolean): string;
        /**
         * 转化时间戳或日期对象为日期格式字符
         *
         * 参数 `format` 所有可用的格式列表 :
         *
         * | 格式 | 示例 | 描述 |
         * | --- | --- | --- |
         * | yy | 23 | 年，两位数 (2.8.13+) |
         * | yyyy | 2023 | 年，四位数 |
         * | M | 1-12 | 月 (2.8.13+) |
         * | MM | 01-12 | 月，两位数 |
         * | d | 1-31 | 日 (2.8.13+) |
         * | dd | 01-31 | 日，两位数 |
         * | H | 0-23 | 小时 (2.8.13+) |
         * | HH | 00-23 | 小时，两位数 |
         * | h | 1-12 | 小时，12 小时制 (2.8.13+) |
         * | hh | 01-12 | 小时，12 小时制，两位数 (2.8.13+) |
         * | A | 凌晨/早上/上午/中午/下午/晚上 | meridiem (2.8.13+) |
         * | m  | 0-59 | 分钟 (2.8.13+) |
         * | mm | 00-59 | 分钟，两位数 |
         * | s | 0-59 | 秒 (2.8.13+) |
         * | ss | 00-59 | 秒，两位数 |
         * | SSS | 000-999 | 毫秒，三位数 (2.8.13+) |
         *
         * @param time 毫秒数或日期对象
         * @param format 默认：yyyy-MM-dd HH:mm:ss
         * @param option 参数选项
         * @example
         * ```js
         * customMeridiem: function(hours, minutes){
         *   return hours < 12 ? '上午' : '下午';
         * }
         * ```
         */
        toDateString(
            time: number | Date,
            format?: string,
            option?: { customMeridiem?: (hours: number, minutes: number) => string },
        ): string;
        /**
         * 数字前置补零
         * @param num 数字
         * @param length 补 0 后的长度，默认 2
         */
        digit(num: number | string, length?: number): string;
        /**
         * 转义 xss 字符
         * @param str
         */
        escape(str: any): string;
        /**
         * 将转义后的 HTML 还原
         * @since 2.6.0
         */
        unescape(str: any): string;
        /**
         * 打开浏览器新标签页
         * @param options 属性配置项
         * @since 2.8.0
         */
        openWin(options: UtilOpenWinOptions): void;
        /**
         * 批量处理事件
         * @param attr 绑定需要监听事件的元素属性
         * @param obj 事件集合
         * @since 2.5.0
         * @deprecated 2.8.0 已弃用,请使用 {@link Util.on|util.on}
         * @see {@link Util.event|util.on}
         */
        event(
            attr: string,
            obj: { [index: string]: (othis: JQuery) => any },
            eventType?: TriggerEvent<HTMLBodyElement>,
        ): void;
        /**
         * 批量事件处理
         * @param attr 触发事件的元素属性名，默认值 'lay-on'
         * @param events 事件集合
         * @param trigger 事件触发的方式，默认值 'click'
         * @returns 返回当前 events 参数设置的事件集合
         * @since 2.8.0
         * @since 2.9.0 事件处理函数新增第二个参数 e 事件对象；新增事件集合返回值；
         */
        on<TEventType extends TriggerEvent<TElement> = "click", TElement = HTMLBodyElement>(
            attr: string,
            events: {
                [attrValue: string]: (othis: JQuery, e?: TypeToTriggeredEventMap<TElement>[TEventType]) => any;
            },
            trigger?: TEventType,
        ): typeof events;
        /**
         * 批量事件处理
         * @param attr 触发事件的元素属性名，默认值 'lay-on'
         * @param events 事件集合
         * @param options 参数的更多选项
         * - elem 触发事件的委托元素，默认值 body
         * - trigger 事件触发的方式，默认值 'click'
         * @returns 返回当前 events 参数设置的事件集合
         * @since 2.9.0
         */
        on<TEventType extends TriggerEvent<TElement> = "click", TElement = HTMLBodyElement>(
            attr: string,
            events: {
                [attrValue: string]: (othis: JQuery, e: TypeToTriggeredEventMap<TElement>[TEventType]) => any;
            },
            options?: {
                trigger?: TEventType | TriggerEvent<TElement>;
                elem?: string | TElement | JQuery<TElement>;
            },
        ): typeof events;
        /**
         * 批量事件处理
         * @param events 事件集合
         * @param trigger 事件触发的方式，默认值 'click'
         * @returns 返回当前 events 参数设置的事件集合
         * @since 2.9.0
         */
        on<TEventType extends TriggerEvent<TElement> = "click", TElement = HTMLBodyElement>(
            events: {
                [attrValue: string]: (othis: JQuery, e: TypeToTriggeredEventMap<TElement>[TEventType]) => any;
            },
            trigger?: TEventType,
        ): typeof events;
        /**
         * 批量事件处理
         * @param events 事件集合
         * @param options 参数的更多选项
         * - elem 触发事件的委托元素，默认值 body
         * - trigger 事件触发的方式，默认值 'click'
         * @returns 返回当前 events 参数设置的事件集合
         * @since 2.9.0
         */
        on<TEventType extends TriggerEvent<TElement> = "click", TElement = HTMLBodyElement>(
            events: {
                [attrValue: string]: (othis: JQuery, e: TypeToTriggeredEventMap<TElement>[TEventType]) => any;
            },
            options?: {
                trigger?: TEventType | TriggerEvent<TElement>;
                elem?: string | TElement | JQuery<TElement>;
            },
        ): typeof events;
    }
}
