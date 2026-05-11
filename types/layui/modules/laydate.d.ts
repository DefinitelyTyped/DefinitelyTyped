declare namespace Layui {
    interface LayDateCallbackParam {
        year?: number;
        month?: number;
        date?: number;
        hours?: number;
        minutes?: number;
        seconds?: number;
    }

    interface LayDateOptions {
        /**
         * 绑定的元素
         */
        elem: string | HTMLElement | JQuery;
        /**
         * 控件选择类型。支持以下可选值：
         * - year 年选择器，只提供年列表选择
         * - month 年月选择器，只提供年、月选择
         * - date 日期选择器（默认），可选择：年、月、日选择
         * - time 时间选择器，只提供时、分、秒选择
         * - datetime 日期时间选择器，可选择：年月日、时分秒
         * @default 'date'
         */
        type?: "year" | "month" | "date" | "time" | "datetime";
        /**
         * 开启左右面板的范围选择，将会根据 type 类型呈现对应的范围选择面板。该属性值支持以下类型：
         * - 若为 boolean 类型，即表示是否开启范围选择，若设为 true，则开始日期与结束日期默认采用 - 连接符
         * - 若为 string 类型，则表示开启范围选择，且自定义开始日期与结束日期的连接符。如： range: '~'
         * - 若为 array 类型，即表示开启范围选，且开始日期和结束日期分别赋值在两个目标选择器中，如：
         * ```js
         * range: ['#start', '#end']
         * ```
         * @default false
         */
        range?: string | boolean | any[];
        /**
         * 是否开启日期范围选择时的区间联动标注模式，该模式必须开启 range 属性后生效。日期范围默认采用的是左右面板独立选择模式，设置该属性后，将采用左右面板联动选择模式
         * @default false
         * @since 2.8.0
         */
        rangeLinked?: boolean;
        /**
         * 是否开启全面板，即日期和时间显示在同一面板。 当 `type: 'datetime'` 且未设置 `range` 属性时生效
         * @default false
         * @since 2.8.0
         */
        fullPanel?: boolean;
        /**
         * 自定义格式化输出，默认为 yyyy-MM-dd。支持的格式如下表所示：
         * | 格式符 | 描述 |
         * | --- | --- |
         * | yyyy | 年份，输出四个字符。若不足四位，则前置补零 |
         * | y | 年份，允许一位 |
         * | MM | 月份，输出两个字符。若不足两位，则前置补零 |
         * | M | 月份，允许一位 |
         * | dd | 日期，输出两个字符。若不足两位，则前置补零 |
         * | d | 日期，允许一位 |
         * | HH | 小时，输出两个字符。若不足两位，则前面补零 |
         * | H | 小时，允许一位 |
         * | mm | 分钟，输出两个字符。若不足两位，则前面补零 |
         * | m | 分钟，允许一位 |
         * | ss | 秒数，输出两个字符。若不足两位，则前面补零 |
         * | s | 秒数，允许一位 |
         *
         * @default 'yyyy-MM-dd'
         */
        format?: string;
        /**
         * 标注节假日及补班日，值是一个二维数组
         * @since 2.7.3
         * @since 2.9.9 支持函数类型
         * @example
         * ```
         * holidays: [
         *  // 2023 年的节假日
         *  ['2023-1-1','2023-1-2','2023-1-3'],
         *  // 2023 年的补班日
         *  ['2023-1-28','2023-1-29']
         * ]
         * ```
         */
        holidays?:
            | string[][]
            | ((
                ymd: { year: number; month: number; date: number },
                render: (val: string | string[][]) => void,
            ) => void);
        /**
         * 初始值
         * - 若为 `string` 类型，则必须和 `format` 属性格式对应
         * ```
         * value: '2018-08-18'
         * ```
         * - 若为 `date` 对象类型，则可直接赋值 `new Date()`
         * ```
         * value: new Date(1534766888000) // 参数即为：2018-08-20 20:08:08 的毫秒数
         * ```
         * - 当开启 `range` 时，初始设置日期范围值
         *
         * ```
         * // 开始日期 - 结束日期
         * value: '1900-01-01 - 2100-01-01'
         * ```
         */
        value?: string | Date | number;
        /**
         * 是否将初始值填充在目标元素中，一般配合 value 属性使用
         * @default true
         */
        isInitValue?: boolean;
        /**
         * 开启面板左侧的快捷选择栏，
         * 其中 `value` 支持以下类型：
         * - 若为 `string` 类型，必须和 `format` 设置的格式对应
         * - 若为 `Date` 对象类型，则可通过操作 `new Date()` 来对选项值进行相应的返回计算
         * - 若为 `Array` 类型，则数组成员可填写开始日期和结束日期
         * - 若为 `Function` 类型，返回值同上 2.8.16
         * @since 2.8.0
         * @example
         * ```
         * shortcuts: [
         *   {
         *     text: "某一天", // 快捷选项文本
         *     value: '2023-05-01' // 快捷选项值， string 类型必须和 format 设置的格式对应
         *   },
         *   {
         *     text: "今天",
         *     value: Date.now() // Date 类型
         *   },
         *   {
         *     text: "明天",
         *     value: function(){
         *       var now = new Date();
         *       now.setDate(now.getDate() + 1);
         *       return now;
         *     }()
         *   },
         *   {
         *     text: "未来一年",
         *     value: function(){  // 数组类型可指定时间范围
         *       var now = new Date();
         *       now.setFullYear(now.getFullYear() + 1);
         *       return [new Date(), now];
         *     }
         *   },
         * ]
         * ```
         */
        shortcuts?: { text: string; value: string | Date | Date[] | (() => string | Date | Date[]) }[];
        /**
         * 设置起始周。 支持 0-6 的数字，0 即代表从周日开始
         * @default 0
         * @since 2.7.0
         */
        weekStart?: 0 | 1 | 2 | 3 | 4 | 5 | 6;
        /**
         * 用于是否在面板左下角显示当前结果的预览。当 `type:datetime` 时强制为 `false`。
         * @default true
         */
        isPreview?: boolean;
        /**
         * 限制可供选择的最小日期时间值。默认值：
         * - `min: '1900-1-1'`
         * - `max: '2099-12-31'`
         *
         * 属性值支持以下可选类型：
         *
         * - 若值为字符类型，则：年月日必须用 `-` 连接，且时分秒必须用 `:` 连接。 此处无需遵循 `format` 设定的格式；
         * - 若值为整数类型，且数字 ＜ 86400000，则数字代表天数，如： `min: -7` 即代表最小日期在 7 天前，正数代表若干天后；
         * - 若值为整数类型，且数字 ≥ 86400000，则数字代表毫秒数，如：`max: 4073558400000` 即代表最大日期在公元 3000年1月1日。
         * @example
         * ```
         * min: '2017-1-1 00:00:00' // 最小日期时间值
         * min: -7 // 最小日期为 7 天前
         * max: 7 // 最大日期为 7 天后
         * ```
         */
        min?: string | number;
        /**
         * 限制可供选择的最小日期时间值。默认值：
         * - `min: '1900-1-1'`
         * - `max: '2099-12-31'`
         *
         * 属性值支持以下可选类型：
         *
         * - 若值为字符类型，则：年月日必须用 `-` 连接，且时分秒必须用 `:` 连接。 此处无需遵循 `format` 设定的格式；
         * - 若值为整数类型，且数字 ＜ 86400000，则数字代表天数，如： `min: -7` 即代表最小日期在 7 天前，正数代表若干天后；
         * - 若值为整数类型，且数字 ≥ 86400000，则数字代表毫秒数，如：`max: 4073558400000` 即代表最大日期在公元 3000年1月1日。
         * @example
         * ```
         * min: '2017-1-1 00:00:00' // 最小日期时间值
         * min: -7 // 最小日期为 7 天前
         * max: 7 // 最大日期为 7 天后
         * ```
         */
        max?: string | number;
        /**
         * 自定义弹出控件的事件
         * @default 'click'
         */
        trigger?: string;
        /**
         * 是否在渲染时默认显示组件面板。组件在执行渲染时，默认需通过触发目标元素的事件，方可显示组件面板，而该属性可跳过目标元素的事件，直接显示组件面板。
         * @default false
         */
        show?: boolean;
        /**
         * 阻止关闭事件冒泡
         */
        closeStop?: string;
        /**
         * 设置组件面板的定位方式。支持以下可选值：
         *
         * - `absolute`  绝对定位，始终吸附在绑定元素周围。
         * - `fixed` 固定定位，初始吸附在绑定元素周围，不随浏览器滚动条所左右。一般用于在固定定位的弹层中使用。
         * - `static` 静态定位，控件将直接嵌套显示在指定容器中。用法详见：[#示例](#demo-static)
         * @default 'absolute'
         */
        position?: "abolute" | "fixed" | "static";
        /**
         * 设置组件面板的层叠顺序。一般用于解决与其它元素的互相被遮掩的问题。若 `position: 'static'` 时，则该属性无效。
         * @default 99999999
         */
        zIndex?: number;
        /**
         * 开启弹出日期面板时的遮罩
         * - 若为 number 类型，则表示遮罩透明度。如 `shade: 0.5`
         * - 若为 Array 类型，则可设置遮罩颜色和透明度，如：`shade: [0.5, '#000']`
         * @since 2.8.0
         */
        shade?: number | [opacity: number, bgColor: string];
        /**
         * 是否显示组件面板的底部栏
         * @default true
         */
        showBottom?: boolean;
        /**
         * 工具按钮。默认值：['clear', 'now', 'confirm']
         */
        btns?: Array<"clear" | "now" | "confirm">;
        /**
         * 是否在选中目标值时即自动确认
         * 开启 range 时，该参数无效
         * @default true
         * @since 2.8.0
         */
        autoConfirm?: boolean;
        /**
         * 语言
         */
        lang?: "cn" | "en";
        /**
         * 主题
         * @example
         * ```
         * theme: '#FF5722' // 自定义主题
         * theme: 'molv' // 内置墨绿色主题
         * theme: 'grid' // 内置格子主题
         * theme: 'circle' // 内置圆圈高亮主题（2.8.0）
         * theme: ['grid', '#FF5722'] // 格子主题+自定义颜色，顺序无关，自定义颜色优先级更高（2.8.0）
         * theme: ['#FF5722', '#FF5723'] // 定义主色和辅色 （2.8.4）
         * ```
         */
        theme?: MaybeArray<LiteralStringUnion<"molv" | "grid" | "circle">>;
        /**
         * 是否显示公历节日
         * @default false
         */
        calendar?: boolean;
        /**
         * 自定义日期标记
         * @since 2.9.9 支持函数类型
         */
        mark?:
            | { [key: string]: string }
            | ((ymd: { year: number; month: number; date: number }, render: ((val: object) => void) | string) => void);
        /**
         * @internal
         */
        eventElem?: string | HTMLElement | JQuery;
        /**
         * 仅用于格式化日期显示的格式，不影响日期值
         * @param value 日期字符串
         * @since 2.9.9
         * @example
         * ```js
         * formatToDisplay: function (value) {
         *   var date = new Date(value);
         *   var displayValue = [
         *     value,
         *     date.toLocaleDateString(Intl.LocalesArgument, { weekday: 'long' })
         *   ].join(' ')；
         *   return displayValue;
         * };
         * ```
         */
        formatToDisplay?(value: string): string;
        /**
         * 设置不可选取的日期
         * @param date 当前的日期对象
         * @param type 面板类型，'start'|'end'
         * @return 返回值为 true 的日期会被禁用
         * @since 2.9.8
         */
        disabledDate?(date: Date, type: "start" | "end"): undefined | boolean;
        /**
         * 设置不可选取的时间
         * @param date 当前的日期对象
         * @param type 面板类型，'start'|'end'
         * @return 数组中指定的时间会被禁用
         * @since 2.9.8
         */
        disabledTime?(
            date: Date,
            type: "start" | "end",
        ): {
            hours?(): number[];
            minutes?(hour: number): number[];
            seconds?(hour: number, minute: number): number[];
        };
        /**
         * 自定义单元格内容
         * @param ymd 当前单元格日期对象
         * @param render 渲染函数
         * @param info 上下文信息
         * - type 表示面板模式
         * @since 2.9.9
         */
        cellRender?(
            ymd: { year: number; month: number; date: number },
            render: (val: string | HTMLElement | JQuery) => void,
            info: { type: "year" | "month" | "date" },
        ): void;
        /**
         * 控件初始打开的回调
         * @param date 基础参数
         */
        ready?(dateParam: LayDateCallbackParam): void;
        /**
         * 日期时间被切换后的回调   this to test and elem
         * @param value 得到日期生成的值，如：2017-08-18 范围："2021-07-06 - 2021-08-09"
         * @param date 得到日期时间对象：{year: 2017, month: 8, date: 18, hours: 0, minutes: 0, seconds: 0}
         * @param endDate 开启范围选择（range: true）才会返回。对象成员同上 date
         */
        change?(value: string, date: LayDateCallbackParam, endDate: LayDateCallbackParam): void;
        /**
         * 控件选择完毕后的回调
         * @param value 得到日期生成的值，如：2017-08-18 范围："2021-07-06 - 2021-08-09"
         * @param date 得到日期时间对象：{year: 2017, month: 8, date: 18, hours: 0, minutes: 0, seconds: 0}
         * @param endDate 开启范围选择（range: true）才会返回。对象成员同上 date
         */
        done?(value: string, date: LayDateCallbackParam, endDate: LayDateCallbackParam): void;
        /**
         * 点击底部栏「确定」按钮时的回调函数
         * @param value 得到日期生成的值，如：2017-08-18 范围："2021-07-06 - 2021-08-09"
         * @param date 得到日期时间对象：{year: 2017, month: 8, date: 18, hours: 0, minutes: 0, seconds: 0}
         * @param endDate 开启范围选择（range: true）才会返回。对象成员同上 date
         * @since 2.8.0
         */
        onConfirm?(value: string, date: LayDateCallbackParam, endDate: LayDateCallbackParam): void;
        /**
         * 点击底部栏「现在」按钮时的回调函数
         * @param value 得到日期生成的值，如：2017-08-18 范围："2021-07-06 - 2021-08-09"
         * @param date 得到日期时间对象：{year: 2017, month: 8, date: 18, hours: 0, minutes: 0, seconds: 0}
         * @param endDate 开启范围选择（range: true）才会返回。对象成员同上 date
         * @since 2.8.0
         */
        onNow?(value: string, date: LayDateCallbackParam, endDate: LayDateCallbackParam): void;
        /**
         * 点击底部栏「清空」按钮时的回调函数
         * @param value 得到日期生成的值，如：2017-08-18 范围："2021-07-06 - 2021-08-09"
         * @param date 得到日期时间对象：{year: 2017, month: 8, date: 18, hours: 0, minutes: 0, seconds: 0}
         * @param endDate 开启范围选择（range: true）才会返回。对象成员同上 date
         * @since 2.8.0
         */
        onClear?(value: string, date: LayDateCallbackParam, endDate: LayDateCallbackParam): void;
        /**
         * 组件面板被完全关闭（移除）后触发的回调
         * @param this 组件实例
         * @since 2.7.4
         */
        close?(this: any): void;
    }

    interface LaydateReturn {
        config: Required<LayDateOptions>;
        /**
         * 提示
         * @param content 提示内容
         */
        hint(content: string): void;
        /**
         * 重载
         * @param options 选项
         */
        reload(options?: Partial<LayDateOptions>): void;
    }

    /**
     * 日期选择器
     * @see https://layui.dev/docs/2/laydate/
     */
    interface Laydate {
        v: string;
        index: number;
        /**
         * 设置全局参数
         * @param options
         */
        set(options?: Partial<LayDateOptions>): Laydate;
        /**
         * 主体 CSS 等待事件
         * @param callback
         */
        ready(callback: AnyFn): Laydate;
        /**
         * 核心方法
         * @param options 基础参数
         */
        render(options: LayDateOptions): LaydateReturn;
        /**
         * 重载
         * @param id 组件渲染时定义的 id 属性值
         * @param options 基础参数
         * @since 2.8.0
         */
        reload(id: string, options?: Partial<LayDateOptions>): void;
        /**
         * 配置基础路径
         *
         * 如果你不是采用 layui 或者普通 script 标签方式加载的 laydate.js
         * 而是采用 requirejs 等其它方式引用 laydate
         * 那么你需要设置基础路径，以便加载 `laydate.css`
         *
         * @deprecated 2.8.0 之后不再提供独立版本
         */
        path: string;
        /**
         * 在指定的日期面板弹出一个提示层
         * @param id 组件渲染时定义的 id 属性值
         * @since 2.8.0
         */
        hint(
            id: string,
            option?: {
                /**
                 * 提示内容
                 */
                content: string;
                /**
                 * 提示层自动消失所需的毫秒数
                 */
                ms: number;
            },
        ): void;
        /**
         * 获取 laydate 对应 id 的实例
         * @param id 组件渲染时定义的 id 属性值
         * @since 2.8.0
         */
        getInst(id: string): Laydate;
        /**
         * 解除实例绑定
         * @remark 对目标元素对应的实例的完全解除，即触发元素事件时，不再执行组件渲染
         * @param id 组件渲染时定义的 id 属性值
         * @since 2.8.0
         */
        unbind(id: string): void;
        /**
         * 关闭日期面板
         * @param id 组件渲染时定义的 id 属性值。 若 id 参数不填，则关闭当前打开的日期面板
         * @since 2.7.5
         */
        close(id: string): Laydate;
        /**
         * 获取指定年月的最后一天
         * @param month month 默认为当前月
         * @param year year 默认为当前年
         */
        getEndDate(month?: number, year?: number): number;
    }
}
