declare namespace Layui {
    /**
     * 按钮回调
     *
     * - yes 和 btn1 触发时默认不关闭弹层，需主动调用 layer.close 关闭
     * - btn2 即以后的回调触发时默认关闭，返回 false 阻止关闭
     * - 开启 btnAsync 异步按钮时，所有按钮行为一致，回调触发时默认关闭，返回 false 阻止关闭
     * @param index 当前层索引参数
     * @param layero 当前层的jqDOM
     * @param that 实例对象(2.8+)
     */
    type LayerBtnCallback = (
        index: number,
        layero: JQuery,
        that: any,
    ) => boolean | Promise<boolean> | JQueryDeferred<boolean> | undefined;
    /**
     * 点击标题栏关闭按钮的回调函数
     * @param index 当前层索引参数
     * @param layero 当前层的DOM对象
     * @param that 实例对象(2.8+)
     */
    type LayerCallbackCancel = (index: number, layero: JQuery, that: any) => boolean | undefined;
    /**
     * 弹层被关闭且销毁后的回调函数
     */
    type LayerCallbackEnd = () => void;
    /**
     * @param index 当前层索引参数
     * @param layero 当前层的DOM对象(2.8+)
     * @param that 实例对象(2.8+)
     */
    type LayerCallbackFull = (layero: JQuery) => void;
    /**
     * @param index 当前层索引参数
     * @param layero 当前层的DOM对象
     * @param that 实例对象(2.8+)
     */
    type LayerCallbackMin = (layero: JQuery, index: number, that: any) => void;
    /**
     * @param index 当前层索引参数
     * @param layero 当前层的DOM对象(2.8+)
     * @param that 实例对象(2.8+)
     */
    type LayerCallbackRestore = (layero: JQuery, index: number, that: any) => void;
    /**
     * 输入层
     * @param value 输入的值
     * @param index 当前层实例的索引
     * @param layero 当前层的 jQuery 对象
     */
    type LayerCallbackPrompt = (value: string, index: number, layero: JQuery) => void;
    // eslint-disable-next-line @typescript-eslint/consistent-type-definitions
    type layerTypeMap = {
        0: "dialog";
        1: "page";
        2: "iframe";
        3: "loading";
        4: "tips";
    };
    type LayerType = keyof layerTypeMap;
    type LayerIndex = number;
    /**
     * 弹层选项
     * @see https://layui.dev/docs/2/layer/#api
     */
    interface LayerOptions {
        /**
         * 弹层类型。可选值有：
         *
         * - 0 dialog 信息框（默认），同时只能存在一个层
         * - 1 page 页面层，可同时存在多个层
         * - 2 iframe 内联框架层，可同时存在多个层
         * - 3 loading 加载层，同时只能存在一个层
         * - 4 tips 贴士层，可配置同时存在多个层
         *
         * layer 弹层由以上 5 种类型构成。不同的类型代表不同的弹出形态，layer 提供的所有的弹出方式均由此衍生
         * @default 0
         */
        type?: LayerType;
        /**
         * 标题，值为 false 时不显示
         * @example
         * title :'标题'
         * title: ['文本', 'font-size:18px;']  // 指定文本样式
         */
        title?: string | boolean | [text: string, style: string];
        /**
         * 弹层内容。 可传入的值比较灵活，支持以下使用场景：
         *
         * - 若 `type: 1`（页面层）: 则 `content` 可传入值如下：
         *
         * ```
         * // 普通字符
         * layer.open({
         *   type: 1,
         *   content: '传入任意文本或 HTML'
         * });
         * // 捕获页面已存在的 DOM 元素或 jQuery 对象
         * layer.open({
         *   type: 1,
         *   content: $('#id') // 捕获层
         * });
         * ```
         *
         * 注意： 若采用捕获层，则捕获的元素必须存放在 `<body>` 根节点下，否则可能被父级容器的相对定位所影响
         * - 若 `type: 2`（iframe 层）: 则 `content` 可传入值如下：
         *
         * ```
         * // iframe URL
         * layer.open({
         *   type: 2,
         *   content: 'http://cn.bing.com' // URL
         * });
         * // 是否屏蔽 iframe 滚动条
         * layer.open({
         *   type: 2,
         *   // 数组第二个成员设为 no，即屏蔽 iframe 滚动条
         *   content: ['http://cn.bing.com', 'yes']
         * });
         * ```
         *
         * - 若为其他弹层类型，传入普通字符即可
         *
         * @default ''
         */
        content?: string | HTMLElement | JQuery | [iframeUrl: string, showScrollbar: "yes" | "no"] | [
            tipsContent: string,
            tipsReferenceEl: string | HTMLElement,
        ];
        /**
         * 弹层的主题风格。通过赋值对应的 className，实现对主题样式的定制
         * @default ''
         * @example
         * skin: 'demo-class' // 自定义
         * skin:'layui-layer-lan' // 内置深蓝主题
         * skin: 'layui-layer-molv' // 内置墨绿主题
         * skin: 'layui-layer-win10' // 内置 Windows 10 风格主题(2.8.0)
         */
        skin?: "layui-layer-lan" | "layui-layer-molv" | "layui-layer-win10" | (string & {});
        /**
         * 设置弹层的宽高，其值支持以下可选类型：支持以下可选类型：
         * - 若为 `array` 类型，则可同时设置宽高
         *   - `area: ['520px', '320px']` 固定宽度和高度
         *   - `area: ['auto', '320px']` 宽度自动，高度固定
         *   - `area: ['520px', 'auto']` 宽度固定，高度自动
         * - 若为 `string` 类型，则可定义宽度和宽高均自适应：
         *   - `area: '520px'` 宽度固定，高度自适应
         *   - `area: 'auto'` 宽度和高度均自适应
         * @default 'auto'
         */
        area?: "auto" | `${number}px` | [width: "auto" | `${number}px`, height: "auto" | `${number}px`];
        /**
         * 弹层的偏移坐标。 支持以下可选值：
         * - `offset: 'auto'` 坐标始终垂直水平居中
         * - `offset: '16px'` 只设置垂直坐标，水平保持居中
         * - `offset: ['16px', '16px']` 设置垂直和水平坐标
         * - `offset: 't'` 上边缘
         * - `offset: 'r'` 右边缘
         * - `offset: 'b'` 下边缘
         * - `offset: 'l'` 左边缘
         * - `offset: 'rt'` 右上角
         * - `offset: 'rb'` 右下角
         * - `offset: 'lt'` 左上角
         * - `offset: 'lb'` 左下角
         *
         * 当设置边缘坐标时，可配合 `anim` 属性实现抽屉弹出效果
         * @default  'auto'
         */
        offset?: "auto" | "t" | "r" | "b" | "l" | "rt" | "rb" | "lt" | "lb" | `${number}px` | [
            y: `${number}px`,
            x: `${number}px`,
        ];
        /**
         * 提示图标。信息框和加载层的私有参数
         * - 当 type 为 0(信息框)可以传入 0-6 启用图标
         * - 当 type 为 3(加载层)可以传入 0-2 启用图标
         * @default -1  //不显示图标
         * @example
         * type:0,icon: 0  //0(❕),1(✔),2(❌),3(❔),4(🔒),5(😭),6(😀)， 其他数字同 0
         * type:3,icon:0  //0(3个点),1（慢圈）,2(慢快圈)，其他数字同0
         */
        icon?: number;
        /**
         * 自定义按钮。
         *
         * 信息框模式时(type:0)，btn 默认是一个确认按钮，其它层类型则默认不显示，加载层和tips层则无效。
         * 按钮可无限数量，每一个按钮均会按照数组顺序生成对应的回调函数。
         *
         * 2.8.0- 按钮1 的回调为 `yes`，2.8.0+ `yes` 和 `btn1` 等效，推荐非 confirm 使用 btn1
         *
         * @default '确认'
         * @example
         * ```js
         * // eg1
         * layer.confirm('询问框？', {
         *   btn: ['按钮1', '按钮2', '按钮3']
         * });
         * // eg2
         * layer.open({
         *   content: 'test',
         *   btn: ['按钮1', '按钮2', '按钮3'],
         *   // 按钮1 的回调
         *   btn1: function(index, layero, that){},
         *   btn2: function(index, layero, that){
         *     // 按钮2 的回调
         *     // return false // 点击该按钮后不关闭弹层
         *   },
         *   btn3: function(index, layero, that){
         *     // 按钮3 的回调
         *     // return false // 点击该按钮后不关闭弹层
         *   }
         * });
         * ```
         */
        btn?: string | string[];
        /**
         * 按钮水平对其方式
         * - `btnAlign: 'l'` 按钮左对齐
         * - `btnAlign: 'c'` 按钮水平居中对齐
         * - `btnAlign: 'r'` 按钮右对齐。默认值，无需设置
         * @default 'r'
         */
        btnAlign?: "l" | "c" | "r";
        /**
         * 是否开启标题栏的关闭图标，或设置关闭图标风格
         * - `closeBtn: 0` 不显示关闭图标
         * - `closeBtn: 1` 关闭图标默认风格 X
         * - `closeBtn: 2` 关闭图标风格二 O+X
         *
         * `title: false` 时强制为 2
         *  @default 1
         */
        closeBtn?: 0 | 1 | 2 | boolean;
        /**
         * 弹层的遮罩
         * @default 0.3
         * @example
         * shade: 0.3 // 设置遮罩深色背景的透明度
         * shade: 0  // 不显示遮罩
         * shade: [0.8, '#393D49'] // 设置透明度和遮罩颜色
         */
        shade?: boolean | number | [opacity: number, bgColor: string];
        /**
         * 是否点击遮罩时关闭弹层，当遮罩存在时有效
         * @default false
         */
        shadeClose?: boolean;
        /**
         * 弹层自动关闭所需的毫秒数
         *
         * 提示框、加载层、Tips 层三种弹出模式默认开启
         * @default 0
         * @example
         * time: 5000 // 即代表5秒后自动关闭
         * time: -1 // 不自动关闭弹层
         */
        time?: number;
        /**
         * 弹层的唯一索引值
         *
         * 一般用于页面层或 iframe 层弹出时的状态识别，设置该属性可防止弹层的重复弹出
         * @default ''
         */
        id?: string;
        /**
         * 弹层的出场动画。支持以下可选值：
         *
         * - `anim: 0` 平滑放大。默认
         * - `anim: 1` 从上掉落
         * - `anim: 2` 从最底部往上滑入
         * - `anim: 3` 从左滑入
         * - `anim: 4` 从左翻滚
         * - `anim: 5` 渐显
         * - `anim: 6` 抖动
         *
         * 边缘抽屉动画,一般配合 `offset` 属性实现边缘弹出(2.8+)
         *
         * - `anim: 'slideDown'` 从上边缘往下
         * - `anim: 'slideLeft'` 从右边缘往左
         * - `anim: 'slideUp'` 从下边缘往上
         * - `anim: 'slideRight'`  从左边缘往右
         * @default 0
         */
        anim?: 0 | 1 | 2 | 3 | 4 | 5 | 6 | "slideDown" | "slideLeft" | "slideRight" | "slideUp" | (string & {});
        /**
         * 是否开启弹层关闭时的动画
         * @default true
         */
        isOutAnim?: boolean;
        /**
         * 是否开启标题栏的最大化和最小化图标
         *
         * 该参数值对 `type:1` 和 `type:2` 有效
         * @default false
         */
        maxmin?: boolean;
        /**
         * 弹层是否固定定位，即始终显示在页面可视区域
         * @default true
         */
        fixed?: boolean;
        /**
         * 是否允许拖拽弹层右下角拉伸尺寸，该参数对 loading(type:3)、tips(type:4) 层无效
         * @default true
         */
        resize?: boolean;
        /**
         * 打开弹层时，是否允许浏览器出现滚动条
         * @default true
         */
        scrollbar?: boolean;
        /**
         * 弹层的最大宽度。当 `area` 属性设置宽度自适应时有效
         * @default 360
         */
        maxWidth?: number;
        /**
         * 弹层的最大高度。当 `area` 属性设置宽度自适应时有效
         */
        maxHeight?: number;
        /**
         * 弹层的初始层叠顺序值
         * @default 19891014
         */
        zIndex?: number;
        /**
         * 绑定弹层的拖拽元素。 默认为触发弹层的标题栏进行拖拽。也可以设置 `move: false` 禁止拖拽
         * @default '.layui-layer-title'
         */
        move?: string | boolean | HTMLElement;
        /**
         * 是否允许拖拽到窗口外
         * @default false
         */
        moveOut?: boolean;
        /**
         * 设置 tips 层的吸附位置和背景色，tips 层的私有属性
         *
         * - 若为 `number` 类型，则支持 `1-4` 的可选值，分别代表*上右下左*的吸附位置。如： `tips: 1`
         * - 若为 `array` 类型，则支持设置吸附位置和背景色，如：
         *
         * ```js
         * tips: [1, '#000'] // 吸附在触发元素上方的深色贴士层
         * ```
         * @default 2
         * @example
         * layui.layer.tips('提示内容','#abc',{tips:1})
         * layui.layer.tips('提示内容','#abc',{tips:[1, 'red']})  // 指定颜色
         * layui.layer.tips('提示内容','#abc',{tips:[1, '#f00']})
         * layui.layer.tips('提示内容','#abc',{tips:[1, 'rgb(255,0,0)']})
         */
        tips?: 1 | 2 | 3 | 4 | [placement: 1 | 2 | 3 | 4, bgColor: string];
        /**
         * 是否允许同时存在多个 tips 层，即不销毁上一个 tips
         * @default false
         */
        tipsMore?: boolean;
        /**
         * 点击标题栏的最小化时，是否从页面左下角堆叠排列
         * @default true
         * @since 2.6
         */
        minStack?: boolean;
        /**
         * 是否移除弹层触发元素的焦点，避免按回车键时重复弹出
         * @default true
         * @since 2.8.0
         */
        removeFocus?: boolean;
        /**
         * 关闭弹层时，是否将弹层设置为隐藏状态（而非移除），当再次打开，直接显示原来的弹层。
         *
         * 若设为 true，则必须设置 id 属性
         * @default false
         * @since 2.8.3
         */
        hideOnClose?: boolean;
        /**
         * 异步按钮。开启之后，除 `layer.prompt` 的按钮外，
         * 按钮回调的返回值将支持 `boolean | Promise<boolean> | JQueryDeferred<boolean>` 类型，
         * 返回 `false` 或 `Promise.reject` 时阻止关闭。
         *
         * 注意，此时 `yes` 和 `btn1`(两者等效) 回调的默认行为发生了变化，即由触发时不关闭弹层变为关闭弹层
         * @default false
         * @since 2.9.13
         */
        btnAsync?: boolean;
        /**
         * 确定按钮回调方法，yes 和 btn1 等效
         *
         * - yes 和 btn1 触发时默认不关闭弹层，需主动调用 layer.close 关闭
         * - btn2 即以后的回调触发时默认关闭，返回 false 阻止关闭
         * - 开启 btnAsync 异步按钮时，所有按钮行为一致，回调触发时默认关闭，返回 false 阻止关闭
         */
        yes?: LayerBtnCallback;
        /**
         * 确定按钮回调方法，yes 和 btn1 等效
         *
         * - yes 和 btn1 触发时默认不关闭弹层，需主动调用 layer.close 关闭
         * - btn2 即以后的回调触发时默认关闭，返回 false 阻止关闭
         * - 开启 btnAsync 异步按钮时，所有按钮行为一致，回调触发时默认关闭，返回 false 阻止关闭
         */
        btn1?: LayerBtnCallback;
        /**
         * 自定义按钮回调
         *
         * - yes 和 btn1 触发时默认不关闭弹层，需主动调用 layer.close 关闭
         * - btn2 即以后的回调触发时默认关闭，返回 false 阻止关闭
         * - 开启 btnAsync 异步按钮时，所有按钮行为一致，回调触发时默认关闭，返回 false 阻止关闭
         */
        btn2?: LayerBtnCallback;
        /**
         * 自定义按钮回调
         *
         * - yes 和 btn1 触发时默认不关闭弹层，需主动调用 layer.close 关闭
         * - btn2 即以后的回调触发时默认关闭，返回 false 阻止关闭
         * - 开启 btnAsync 异步按钮时，所有按钮行为一致，回调触发时默认关闭，返回 false 阻止关闭
         */
        btn3?: LayerBtnCallback;
        /**
         * 自定义按钮回调
         */
        btn4?: LayerBtnCallback;
        /**
         * 自定义按钮回调
         */
        btn5?: LayerBtnCallback;
        /**
         * 自定义按钮回调
         */
        btn6?: LayerBtnCallback;
        /**
         * 自定义按钮回调
         */
        btn7?: LayerBtnCallback;
        /**
         * 自定义按钮回调
         */
        btn8?: LayerBtnCallback;
        /**
         * 自定义按钮回调
         */
        btn9?: LayerBtnCallback;
        /**
         * 打开弹层成功后的回调函数
         * @param layero 弹层的最外层元素的 jQuery 对象
         * @param index 弹层的索引值
         * @param that 弹层内部原型链中的 this, 当前弹层实例对象（2.8.0）
         */
        success?(layero: JQuery, index: number, that: any): void;
        /**
         * 右上角关闭按钮触发的回调
         */
        cancel?: LayerCallbackCancel;
        /**
         * 层销毁后触发的回调
         */
        end?: LayerCallbackEnd;
        /**
         * 最大化后触发的回调
         */
        full?: LayerCallbackFull;
        /**
         * 最小化后触发的回调
         */
        min?: LayerCallbackMin;
        /**
         * 还原后触发的回调
         */
        restore?: LayerCallbackRestore;
        /**
         * 拖动完毕后的回调方法
         * @default null
         */
        moveEnd?(layero: JQuery): any;
        /**
         * 监听窗口拉伸动作
         * @default null
         */
        resizing?(layero: JQuery): any;
        /**
         * 弹层被关闭前的回调函数。如果返回 false 或者 Promise.reject，将会取消关闭操作
         * @param layero 弹层元素的 jQuery 对象
         * @param index 弹层索引
         * @param that 实例对象
         * @since 2.9.11
         */
        beforeEnd?(
            layero: JQuery,
            index: number,
            that: any,
        ): boolean | JQueryDeferred<boolean> | Promise<boolean> | undefined;
        /**
         * 只提供默认的一种拖拽风格
         *
         * 固定 1，不能修改
         * @internal
         */
        readonly moveType?: number;
        /**
         * @deprecated 2.7
         * @see {@link LayerOptions.fixed|fixed}
         */
        fix?: boolean;
        /**
         * @deprecated 2.7
         * @see {@link LayerOptions.anim|anim}
         */
        shift?: number;
    }

    /**
     * 配置layer层的基础参数
     * @example
     * ```js
     * layui.layer.config({
     *    anim: 1, // 默认动画风格
     *    skin: 'layui-layer-molv', // 默认皮肤
     *    extend: 'myskin/style.css', // 样式位置
     *    //...
     * });
     * ```
     */
    interface LayerConfigOptions extends LayerOptions {
        /**
         * layer.js 所在的目录，可以是绝对目录，也可以是相对目录
         *
         * 仅用于 layer 独立版本
         * @example
         * path: '/res/layer/'
         */
        path?: string;
        /**
         * 要加载的拓展css皮肤
         *
         * - 如果是独立版的 layer，则将 myskin 存放在 ./skin 目录下
         * - 如果是 layui 中使用 layer，则将 myskin 存放在 ./css/modules/layer 目录下
         * @example
         * extend: 'myskin/style.css'
         */
        extend?: string[] | string;
    }

    interface LayerPromptOptions extends Omit<LayerOptions, "type" | "yes" | "content" | "btn" | "skin"> {
        /**
         * 输入框类型。支持以下可选值：
         * - 0 文本输入框
         * - 1 密令输入框
         * - 2 多行文本输入框
         * - [HTMLInputElement.type](https://developer.mozilla.org/zh-CN/docs/Web/HTML/Reference/Elements/input#input_%E7%B1%BB%E5%9E%8B%22) 值(2.13.0+)
         * @default 0
         */
        formType?: 0 | 1 | 2 | HTMLInputElement["type"];
        /**
         * 输入框初始值
         * @default ''
         */
        value?: string;
        /**
         * 可输入的最大字符长度
         * @default 500
         */
        maxlength?: number;
        /**
         * 输入框内容为空时的占位符
         * @since 2.8.0
         */
        placeholder?: string;
    }

    interface LayerTabOptions extends Omit<LayerOptions, "type" | "skin" | "title" | "content"> {
        tab: Array<{ title: string; content: string }>;
    }

    interface LayerPhotosData {
        /**
         * 相册标题
         */
        title?: string;
        /**
         * 相册id
         * @example
         * id: 123
         */
        id?: number;
        /**
         * 初始显示的图片序号
         * @default 0
         */
        start?: number;
        /**
         * 相册包含的图片，数组格式
         * @example
         * ```js
         * "data": [{
         *     "alt": "图片名",
         *     "pid": 666, //图片id
         *     "src": "", //原图地址
         *     "thumb": "" //缩略图地址
         * }]
         * ```
         */
        data?: Array<LayerPhotosDataItem>;
    }

    interface LayerPhotosDataItem {
        /**
         * 图片名
         */
        alt?: string;
        /**
         * 图片id
         */
        pid?: number;
        /**
         * 原图地址
         */
        src?: string;
        /**
         * 缩略图地址
         * @deprecated 已弃用，未实现的选项
         */
        thumb?: string;
    }

    interface LayerPhotosOptions extends
        Omit<
            LayerOptions,
            | "type"
            | "id"
            | "area"
            | "title"
            | "closeBtn"
            | "shade"
            | "move"
            | "moveType"
            | "moveOut"
            | "scrollbar"
            | "isOutAnim"
            | "skin"
            | "end"
        >
    {
        /**
         * 图片层的数据源
         *
         * JSON 对象或者选择器，元素的 jQUery 对象，用于构造 img
         */
        photos?: LayerPhotosData | string | JQuery;
        /**
         * 图片层切换后的回调函数
         * @param pic 当前图片的一些信息
         * @param layero 当前元素
         */
        tab?(pic: LayerPhotosDataItem, layero: JQuery): void;
        /**
         * 是否隐藏图片底部栏
         * @default false
         * @since 2.8.0
         * @deprecated 2.8.16 已移除，请使用 {@link LayerPhotosOptions.footer|footer}
         */
        hideFooter?: boolean;
        /**
         * 是否显示顶部工具栏
         * @default true
         * @since 2.8.16
         */
        toolbar?: boolean;
        /**
         * 是否隐藏底部栏
         * @default false
         * @since 2.8.16
         */
        footer?: boolean;
    }

    /**
     * 弹层组件
     * @see https://layui.dev/docs/2/layer/
     */
    interface Layer {
        ie: boolean;
        index: number;
        path: string;
        v: string;
        zIndex: number;
        /**
         * 初始化全局配置
         * @param options 基础参数
         * @param fn
         */
        config(options: LayerConfigOptions, fn?: any): void;
        /**
         * 执行初始化，就绪后执行回调参数
         *
         * 初始化就绪 (CSS完成的回调)，当你在页面一打开就要执行弹层时可放入回调中
         * @param callback 就绪后的回调
         */
        ready(callback: () => void): void;
        /**
         * 原始核心方法
         * @param options 基础参数选项
         * @return 返回弹层索引
         * @see https://layui.dev/docs/2/layer/#open
         */
        open(options?: LayerOptions): LayerIndex;
        /**
         * 普通信息框
         * @param content 内容
         * @param options 基础属性选项
         * @param yes 点击确定后的回调
         * @see https://layui.dev/docs/2/layer/#alert
         */
        alert(
            content: any,
            options?: Omit<LayerOptions, "type" | "yes" | "content">,
            yes?: LayerBtnCallback,
        ): LayerIndex;
        /**
         * 普通信息框
         * @param content 内容
         * @param yes 点击确定后的回调
         * @see https://layui.dev/docs/2/layer/#alert
         */
        alert(content: any, yes?: LayerBtnCallback): LayerIndex;
        /**
         * 询问框
         * @param content 提示内容
         * @param options 基础属性选项
         * @param yes 确认回调
         * @param cancel 点击第二个按钮（默认「取消」）后的回调函数
         * @see https://layui.dev/docs/2/layer/#confirm
         * @example
         * ```js
         * layer.confirm('is not?', {
         *    icon: 3,
         *    title: '提示',
         *    cancel: (index, layero) => {
         *        console.log("点击了右上角关闭");
         *        //return false  //点击右上角叉号不能关闭
         *    }
         * }, (index, layero) => {
         *    console.log("点击了下边的第一个按钮'确定'");
         *    layer.close(index);//需要手动关闭
         * }, (index, layero) => {
         *    console.log("点击了下边的第二个按钮'取消'");
         *    //return false // 点击取消不能关闭
         * });
         * ```
         */
        confirm(
            content: any,
            options?: Omit<LayerOptions, "type">,
            yes?: LayerBtnCallback,
            cancel?: LayerCallbackCancel,
        ): LayerIndex;
        /**
         * 询问框
         * @param content 提示内容
         * @param yes 确认回调
         * @param cancel 点击第二个按钮（默认「取消」）后的回调函数
         * @see https://layui.dev/docs/2/layer/#confirm
         * @example
         * ```js
         * layer.confirm('is not?', (index,layero) => {
         *   // do something
         *    layer.close(index);
         * },(index,layero)=>{
         *   return false // 返回false则取消关闭
         * });
         * ```
         */
        confirm(content: any, yes: LayerBtnCallback, cancel?: LayerCallbackCancel): LayerIndex;
        /**
         * 提示框
         * @param content 提示内容
         * @param options 基础属性选项
         * @param end 关闭后的回调
         * @see https://layui.dev/docs/2/layer/#msg
         */
        msg(
            content: string,
            options?: Omit<LayerOptions, "type" | "skin" | "title" | "resize" | "end">,
            end?: LayerCallbackEnd,
        ): LayerIndex;
        /**
         * 提示框
         * @param content 提示内容
         * @param end 关闭后的回调
         * @see https://layui.dev/docs/2/layer/#msg
         */
        msg(content: string, end?: LayerCallbackEnd): LayerIndex;
        /**
         * 加载层
         * @param icon 加载图标风格，支持 0-2 可选值，默认0
         * @param options 基础属性选项
         * @see https://layui.dev/docs/2/layer/#load
         */
        load(icon?: 0 | 1 | 2, options?: Omit<LayerOptions, "type" | "resize">): LayerIndex;
        /**
         * 加载层
         * @param options 基础属性选项
         * @see https://layui.dev/docs/2/layer/#load
         */
        load(options?: Omit<LayerOptions, "type" | "resize">): LayerIndex;
        /**
         * tips 层
         * @param content 显示的内容
         * @param referenceEl 吸附的目标元素选择器或对象
         * @param options 基础属性选项
         * @see https://layui.dev/docs/2/layer/#tips
         */
        tips(
            content?: string,
            referenceEl?: string | HTMLElement | JQuery,
            options?: Omit<LayerOptions, "type" | "content" | "closeBtn" | "resize">,
        ): LayerIndex;
        /**
         * 输入层
         * @param options 参数
         * @param yes 点击确定后的回调函数，用该参数而不是用 options 的 yes
         * @see https://layui.dev/docs/2/layer/#prompt
         * @example
         * ```js
         * layui.layer.prompt({
         *    formType: 2, // 输入框类型，支持0（文本）默认1（密码）2（多行文本）
         *    value: '初始值', // 初始时的值，默认空字符
         *    maxlength: 140, // 可输入文本的最大长度，默认500
         *    title: '请输入值',
         *    area: ['800px', '350px'], // 自定义文本域宽高
         *  },(value, index, elem) => {
         *     layui.layer.alert(value); // 得到value
         *     layui.layer.close(index);
         *   },
         * );
         * ```
         */
        prompt(options?: LayerPromptOptions, yes?: LayerCallbackPrompt): LayerIndex;
        /**
         * 输入层
         * @param yes 点击确定的回调
         * @see https://layui.dev/docs/2/layer/#prompt
         * @example
         * ```js
         * layer.prompt(function(value, index, elem){
         *   alert(value); // 得到 value
         *   layer.close(index); // 关闭层
         * });
         * ```
         */
        prompt(yes?: LayerCallbackPrompt): LayerIndex;
        /**
         * 标签层
         * @param options
         * @see https://layui.dev/docs/2/layer/#tab
         */
        tab(options: LayerTabOptions): LayerIndex;
        /**
         * 相册层
         * @param options 属性选项
         * @see https://layui.dev/docs/2/layer/#photos
         */
        photos(options: LayerPhotosOptions): LayerIndex;
        /**
         * 关闭指定层
         * @param index 层索引
         * @param callback 关闭后的回调
         */
        close(index: number, callback?: () => any): void;
        /**
         * 关闭所有层
         * @param type 关闭的弹层类型，不传则关闭全部
         * @param callback 关闭所有层后执行回调
         */
        closeAll(type?: layerTypeMap[keyof layerTypeMap], callback?: () => any): void;
        /**
         * 关闭所有层
         * @param callback  关闭所有层后执行回调
         */
        closeAll(callback: () => any): void;
        /**
         * 关闭最近一次打开的层
         * @param type 弹层的类型
         * @param callback 关闭后执行的回调(2.9.0)
         * @since 2.8.0
         */
        closeLast(
            type?: layerTypeMap[keyof layerTypeMap] | Array<layerTypeMap[keyof layerTypeMap]>,
            callback?: AnyFn,
        ): void;
        /**
         * 重新定义层的样式
         * @param index 打开弹层时返回的唯一索引
         * @param options 要设置的 css 属性
         * @param limit 影响宽度和高度
         */
        style(index: number, options: { [key: string]: string | number }, limit?: boolean): void;
        /**
         * 设置弹层的标题
         * @param title 新标题
         * @param index 打开弹层时返回的唯一索引
         */
        title(title: string, index: number): void;
        /**
         * 获取 iframe 页中的元素
         * @param selector iframe 子页面的选择器或元素对象
         * @param index 打开弹层时返回的唯一索引
         */
        getChildFrame(selector: string | globalThis.Element | JQuery, index: number): JQuery;
        /**
         * 在 iframe 页中获取弹层索引
         * @param windowName 即 window.name
         */
        getFrameIndex(windowName: string): number;
        /**
         * 设置 iframe 层高度自适应
         * @param index 打开弹层时返回的唯一索引
         */
        iframeAuto(index: number): void;
        /**
         * 重新设置 iframe 层 URL
         * @param index 层索引
         * @param url URL 地址
         */
        iframeSrc(index: number, url: string): void;
        /**
         * 置顶弹层
         * @param layero  layer 最外层容器的元素对象，一般可通过各个回调函数返回的参数获取
         */
        setTop(layero: JQuery): void;
        /**
         * 设置弹层最大化
         * @param index 层索引
         */
        full(index: number): void;
        /**
         * 设置弹层最小化
         * @param index 层索引
         */
        min(index: number): void;
        /**
         * 弹层最大化或最小化状态时，还原弹层
         * @param index 层索引
         */
        restore(index: number): void;
    }
}
